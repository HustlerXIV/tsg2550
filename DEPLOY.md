# Deploy — tsg2550.com

เซิร์ฟเวอร์: `45.136.253.173` (ubuntu, root)
Reverse proxy: **nginx บน host** + certbot (ไม่ใช่ Caddy)
แอปรันใน Docker ที่ `127.0.0.1:4187`

---

## ขั้นที่ 0 — DNS ที่ Cloudflare (ทำก่อน ห้ามข้าม)

ตอนนี้ `tsg2550.com` ชี้ไป Cloudflare แต่ Cloudflare ยังไม่ได้ชี้ต่อมาที่เครื่องนี้

ใน Cloudflare dashboard → DNS:

| Type | Name  | Content           | Proxy status        |
|------|-------|-------------------|---------------------|
| A    | `@`   | `45.136.253.173`  | **DNS only** (เมฆเทา) |
| A    | `www` | `45.136.253.173`  | **DNS only** (เมฆเทา) |

ต้องเป็น **เมฆเทา** ตอนนี้ เพราะ certbot ต้องยืนยันตัวตนผ่าน HTTP ตรงมาที่เครื่อง
ถ้าเปิดเมฆส้มไว้ Cloudflare จะขวางและออก cert ไม่ผ่าน (เดี๋ยวขั้นที่ 5 ค่อยเปิดกลับ)

รอ DNS กระจาย แล้วเช็คให้ได้ IP เครื่องนี้ก่อนไปต่อ:

```bash
dig +short tsg2550.com     # ต้องได้ 45.136.253.173
```

---

## ขั้นที่ 1 — เก็บกวาด Caddy ที่ค้าง (ไม่บังคับ แต่ควรทำ)

process caddy ค้างมาตั้งแต่ ก.ค. ไม่ถือพอร์ต และ config ที่มันชี้ไปไม่มีอยู่จริง

```bash
ss -tlnp | grep caddy      # ยืนยันอีกรอบว่าไม่คืนอะไร
kill 867438                # PID อาจเปลี่ยน — เช็คด้วย: ps aux | grep [c]addy
```

---

## ขั้นที่ 2 — ส่งโค้ดขึ้นเซิร์ฟเวอร์

จากเครื่อง Mac (โฟลเดอร์ `tsg2550-web`):

```bash
rsync -avz --delete \
  --exclude node_modules --exclude .next --exclude .git \
  ./ root@45.136.253.173:/opt/tsg2550-web/
```

> วางที่ `/opt` ไม่ใช่ `/root` — คนอื่นในทีมที่ไม่ได้ล็อกอิน root ดูแลต่อได้
> และ backup script ส่วนใหญ่ข้าม `/root` โดยปริยาย

---

## ขั้นที่ 3 — build + run

```bash
ssh root@45.136.253.173
cd /opt/tsg2550-web
docker compose up -d --build

docker compose ps                  # ต้องเห็น (healthy) ภายใน ~30 วิ
curl -I http://127.0.0.1:4187/     # ต้องได้ 200
```

**build บนเซิร์ฟเวอร์เท่านั้น** — MacBook เป็น arm64 แต่เซิร์ฟเวอร์เป็น x86_64
อย่า `docker save` จากเครื่อง Mac ไปโหลดบนนั้น

---

## ขั้นที่ 4 — nginx + SSL

```bash
cd /opt/tsg2550-web
cp nginx-tsg2550.conf /etc/nginx/sites-available/tsg2550.com
ln -s /etc/nginx/sites-available/tsg2550.com /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx

curl -I http://tsg2550.com/        # ต้องได้ 200 ผ่าน nginx แล้ว

certbot --nginx -d tsg2550.com -d www.tsg2550.com
```

certbot จะเติมบล็อก `listen 443 ssl` + redirect ให้เอง เหมือน `tasks.codecipher.co`

```bash
curl -I https://tsg2550.com/
certbot renew --dry-run            # เช็คว่าต่ออายุอัตโนมัติจะทำงาน
```

---

## ขั้นที่ 5 — เปิด Cloudflare proxy กลับ (ถ้าต้องการ)

กลับไปที่ Cloudflare DNS เปลี่ยนทั้งสอง record เป็น **เมฆส้ม (Proxied)**
แล้วไปที่ SSL/TLS → ตั้ง encryption mode เป็น **Full (strict)**

ห้ามใช้ Flexible — จะเกิด redirect วนไม่รู้จบกับ HTTPS redirect ที่ certbot ใส่ไว้

ถ้าเปิดเมฆส้ม certbot renew ครั้งถัดไป (อีก ~60 วัน) จะยังผ่าน
เพราะ Cloudflare ปล่อย `/.well-known/acme-challenge/` ทะลุไปหา origin ให้อยู่แล้ว

---

## อัปเดตเว็บครั้งต่อไป

```bash
# จาก Mac
rsync -avz --delete --exclude node_modules --exclude .next --exclude .git \
  ./ root@45.136.253.173:/opt/tsg2550-web/

# บนเซิร์ฟเวอร์
cd /opt/tsg2550-web && docker compose up -d --build
```

ไม่ต้องแตะ nginx อีก

---

## แก้ปัญหา

| อาการ | สาเหตุที่พบบ่อย |
|---|---|
| `curl 127.0.0.1:4187` ไม่ตอบ | `docker compose logs web` — ดูว่า build ผ่านไหม |
| nginx 502 | คอนเทนเนอร์ดับ หรือ publish port ไม่ตรง (`docker compose ps`) |
| certbot fail | DNS ยังเป็นเมฆส้ม หรือยังไม่ชี้มา `45.136.253.173` |
| redirect วนไม่จบ | Cloudflare SSL mode เป็น Flexible → เปลี่ยนเป็น Full (strict) |
| port 4187 ชน | `ss -tlnp \| grep 4187` — เปลี่ยนเลขใน compose + nginx ให้ตรงกัน |

## พอร์ตที่ถูกใช้อยู่บนเครื่องนี้แล้ว

`80`, `443` (nginx) · `3000` (survey) · `8000`, `8080` (topdee) · `8090` (plane-proxy)
`6379` (redis) · `6333` (qdrant) · `27017` (mongo) — **4187 ว่าง**
