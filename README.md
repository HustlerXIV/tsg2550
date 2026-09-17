# TSG 2550 — เว็บไซต์บริษัท

Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript
Package manager: **pnpm** (pin ไว้ใน `packageManager` ของ package.json)
รัน **port 4187** ทุกโหมด (dev / start / docker) เพื่อเลี่ยงชนกับ 3000 บนเครื่อง deploy

## Local

```bash
corepack enable          # ครั้งแรกครั้งเดียว — เปิดใช้ pnpm ตามเวอร์ชันที่ pin ไว้
pnpm install
pnpm dev                 # http://localhost:4187
pnpm build && pnpm start
```

## Docker

```bash
docker compose up -d --build     # http://localhost:4187
```

หรือ

```bash
docker build -t tsg2550-web .
docker run -d -p 4187:4187 --name tsg2550-web tsg2550-web
```

เปลี่ยน port ที่เปิดออกข้างนอกได้จาก `docker-compose.yml` (`"8080:4187"`) โดยไม่ต้องแก้ Dockerfile

## โครงสร้าง

```
src/
  app/
    page.tsx          หน้าแรก (stub)
    about/            เกี่ยวกับเรา (stub)
    clients/          ผลงาน/ลูกค้า (stub)
    news/             ข่าวสาร (stub)
    contact/          ติดต่อเรา/สมัครงาน  ← ทำเต็มตาม design
    layout.tsx        Header + Footer + ฟอนต์ Noto Sans/Serif Thai
    globals.css       Tailwind v4 theme (สี brand/gold/cream)
  components/         Header, Footer, PageHero, StubPage
  lib/site.ts         ข้อมูลบริษัท ที่อยู่ เบอร์โทร อีเมล LINE (แก้ที่เดียว)
public/logo.png       โลโก้ที่ดึงออกมาจากไฟล์ design
public/fonts/         ฟอนต์ Noto Sans/Serif Thai แบบ self-host (build ได้โดยไม่ต้องต่อเน็ต)
```

## หมายเหตุ pnpm

- `.npmrc` ตั้ง `node-linker=hoisted` ให้ layout ของ `node_modules` แบนแบบ npm — Next.js/Turbopack resolve native deps ได้ตรงไปตรงมา
- Docker ใช้ `corepack enable` + `pnpm install --frozen-lockfile` พร้อม BuildKit cache mount ที่ `/pnpm/store` ทำให้ rebuild เร็ว
- เวอร์ชัน dependency pin ไว้ตายตัวทั้งหมดแล้ว (ไม่ใช่ `latest`) — build ซ้ำได้ผลเดิม

## Responsive

- มือถือ: เมนู hamburger, layout คอลัมน์เดียว, ปุ่ม/กล่องเต็มความกว้าง
- แท็บเล็ต (`sm`/`md`): footer 2 คอลัมน์, spacing เพิ่ม
- เดสก์ท็อป (`lg`+): nav เต็มแถว, contact grid 2 คอลัมน์ตาม design เดิม

เบอร์โทร/อีเมล เป็นลิงก์ `tel:` / `mailto:` กดโทรได้จากมือถือ
