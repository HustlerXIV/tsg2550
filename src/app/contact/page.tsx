import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "ติดต่อเรา / สมัครงาน",
  description:
    "ติดต่อขอใบเสนอราคางานรักษาความปลอดภัย งานทำความสะอาด หรือสอบถามตำแหน่งงานว่าง กับ ที.เอส.จี. 2550",
};

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#C9A24B",
  strokeWidth: 1.8,
  className: "mt-0.5 shrink-0",
  "aria-hidden": true,
} as const;

const CONTACT_ITEMS = [
  {
    label: "ที่อยู่บริษัท",
    icon: (
      <svg {...iconProps}>
        <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    body: <>{SITE.address}</>,
  },
  {
    label: "โทรศัพท์",
    icon: (
      <svg {...iconProps}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    body: (
      <>
        สำนักงาน:{" "}
        <a href={`tel:${SITE.officePhoneTel}`} className="text-gold-dark hover:underline">
          {SITE.officePhone}
        </a>
        <br />
        {SITE.managerName}:{" "}
        <a href={`tel:${SITE.managerPhone.replace(/-/g, "")}`} className="text-gold-dark hover:underline">
          {SITE.managerPhone}
        </a>
        <br />
        {SITE.accountingName}:{" "}
        <a href={`tel:${SITE.accountingPhone.replace(/-/g, "")}`} className="text-gold-dark hover:underline">
          {SITE.accountingPhone}
        </a>
      </>
    ),
  },
  {
    label: "อีเมล",
    icon: (
      <svg {...iconProps}>
        <path d="M4 4h16v16H4z" />
        <path d="M4 6l8 7 8-7" />
      </svg>
    ),
    body: (
      <a href={`mailto:${SITE.email}`} className="break-all text-gold-dark hover:underline">
        {SITE.email}
      </a>
    ),
  },
  {
    label: "LINE",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2C6.5 2 2 5.6 2 10c0 2.7 1.7 5.1 4.4 6.6L5 21l4.6-2.2c.8.1 1.6.2 2.4.2 5.5 0 10-3.6 10-8s-4.5-9-10-9z" />
      </svg>
    ),
    body: <>{SITE.line}</>,
  },
  {
    label: "เวลาทำการ",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    body: <>{SITE.hours}</>,
  },
];

const QUALIFICATIONS = [
  "ชายไทย อายุตั้งแต่ 18 ปีขึ้นไป",
  "ความสูงตั้งแต่ 160 ซม. หรือมีความเหมาะสม",
  "มีความรับผิดชอบ ปฏิบัติตามระเบียบวินัยของบริษัทฯ",
  "ยินดีต้อนรับผู้ไม่มีประสบการณ์ — มีการฝึกอบรมให้ก่อนเริ่มงาน",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="ติดต่อเรา / สมัครงาน"
        title="พร้อมให้คำปรึกษาและบริการคุณ"
        description="ติดต่อขอใบเสนอราคางานรักษาความปลอดภัย งานทำความสะอาด หรือสอบถามตำแหน่งงานว่าง"
      />

      <section className="mx-auto grid max-w-[1248px] gap-10 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        <div>
          <h2 className="mb-6 font-serif text-2xl text-brand">ข้อมูลติดต่อ</h2>
          <div className="flex flex-col gap-6">
            {CONTACT_ITEMS.map((item) => (
              <div key={item.label} className="flex gap-4">
                {item.icon}
                <div>
                  <strong className="text-brand">{item.label}</strong>
                  <div className="mt-1 text-[14.5px] text-muted">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="self-start border border-line-soft bg-white p-7 text-center sm:p-10">
          <h2 className="mb-1.5 font-serif text-[22px] text-brand">ส่งข้อความถึงเรา</h2>
          <p className="mb-7 text-sm text-muted">
            ขอใบเสนอราคา สอบถามบริการ หรือสมัครงาน กดปุ่มด้านล่างเพื่อส่งอีเมลหาเราโดยตรง
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-block w-full rounded-sm bg-brand px-8 py-4 text-[15px] font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
          >
            ✉ ส่งอีเมลถึงเรา
          </a>
          <p className="mt-4 mb-0 text-[13px] break-all text-muted-light">{SITE.email}</p>
        </div>
      </section>

      <section className="bg-cream-dark">
        <div className="mx-auto grid max-w-[1248px] items-center gap-10 px-5 py-14 sm:px-6 sm:py-[72px] lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="mb-3 text-[13px] font-bold tracking-[0.15em] text-gold-dark">
              ร่วมงานกับเรา
            </div>
            <h2 className="mb-5 font-serif text-[24px] text-brand sm:text-[28px]">
              สมัครงานพนักงานรักษาความปลอดภัย
            </h2>
            <p className="mb-5 text-[15px] text-muted">
              เปิดรับสมัครพนักงานรักษาความปลอดภัยและพนักงานทำความสะอาดอย่างต่อเนื่อง
              คุณสมบัติเบื้องต้น:
            </p>
            <ul className="flex list-none flex-col gap-2.5 p-0 text-[14.5px] text-ink-soft">
              {QUALIFICATIONS.map((q) => (
                <li key={q} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand p-7 text-white sm:p-9">
            <div className="mb-4 font-serif text-[19px]">สมัครงานง่ายๆ ติดต่อฝ่ายบุคคล</div>
            <div className="flex flex-col gap-2 text-[14.5px] leading-loose text-onbrand-soft">
              <a href={`tel:${SITE.managerPhone.replace(/-/g, "")}`} className="hover:text-gold">
                โทร: {SITE.managerPhone} (คุณพศิน)
              </a>
              <a href={`tel:${SITE.officePhoneTel}`} className="hover:text-gold">
                โทร: {SITE.officePhone} (สำนักงาน)
              </a>
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-gold">
                อีเมล: {SITE.email}
              </a>
              <span>LINE: {SITE.line}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
