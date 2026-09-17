import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { FEATURED_CLIENTS, HERO, SERVICES, STATS, WHY_US } from "@/lib/content";

const SERVICE_ICONS = ["shield", "building", "lines", "spray"] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_0%] sm:object-[50%_0%]"
        />
        {/* เงาดำไล่จากซ้าย ให้ตัวอักษรอ่านออกโดยยังเห็นภาพจริง (design ไม่มี overlay สี) */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25 sm:from-black/40 sm:via-black/10 sm:to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1248px] px-5 py-16 text-white sm:px-6 sm:py-24 lg:pt-[100px] lg:pb-[120px]">
          <div className="mb-6 inline-block border border-gold px-4 py-1.5 text-[12px] tracking-[0.15em] text-gold sm:text-[13px]">
            {HERO.eyebrow}
          </div>
          <h1 className="mb-6 max-w-[680px] font-serif text-[32px] leading-[1.35] font-bold sm:text-[40px] lg:text-[48px]">
            รักษาความปลอดภัย
            <br />
            ที่คุณวางใจได้
          </h1>
          <p className="mb-4 max-w-[560px] text-[16px] text-onbrand-soft sm:text-[17px]">
            {HERO.motto}
          </p>
          <p className="mb-9 max-w-[600px] text-[15px] text-[#9DAAC0] sm:text-[16px]">
            {HERO.body}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="rounded-sm bg-gold px-8 py-4 text-center text-[15px] font-bold text-brand transition-colors hover:bg-gold-light"
            >
              ติดต่อเรา
            </Link>
            <Link
              href="/about"
              className="rounded-sm border border-[#5A6C8C] px-8 py-4 text-center text-[15px] font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              รู้จักเรามากขึ้น
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand">
        <div className="mx-auto grid max-w-[1248px] grid-cols-2 px-5 text-center sm:px-6 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-3 py-7 sm:py-8 ${
                i < STATS.length - 1 ? "lg:border-r lg:border-white/10" : ""
              } ${i % 2 === 0 ? "border-r border-white/10 lg:border-r" : ""} ${
                i < 2 ? "border-b border-white/10 lg:border-b-0" : ""
              }`}
            >
              <div className="font-serif text-[30px] font-bold text-gold sm:text-[36px]">
                {s.value}
              </div>
              <div className="mt-1.5 text-[13.5px] text-onbrand sm:text-[14px]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1248px] px-5 py-16 sm:px-6 sm:py-[88px]">
        <div className="mx-auto mb-12 max-w-[640px] text-center sm:mb-14">
          <div className="mb-3 text-[13px] font-bold tracking-[0.15em] text-gold-dark">
            บริการของเรา
          </div>
          <h2 className="mb-4 font-serif text-[26px] text-brand sm:text-[32px]">
            งานรักษาความปลอดภัยและงานทำความสะอาด
          </h2>
          <p className="text-[15px] text-muted">
            ครอบคลุมทุกประเภทหน้างาน ตั้งแต่อาคารสำนักงาน คอนโดมิเนียม
            ไปจนถึงโรงงานอุตสาหกรรม
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-7">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="border border-line-soft border-t-[3px] border-t-gold bg-white p-7 transition-shadow hover:shadow-md sm:p-9 sm:px-7"
            >
              <Icon name={SERVICE_ICONS[i]} />
              <h3 className="mt-5 mb-2.5 font-serif text-[18px] text-brand sm:text-[19px]">
                {s.title}
              </h3>
              <p className="text-[14.5px] text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-cream-dark">
        <div className="mx-auto grid max-w-[1248px] items-center gap-10 px-5 py-16 sm:px-6 sm:py-[88px] lg:grid-cols-2 lg:gap-14">
          <Image
            src="/images/whyus-photo.webp"
            alt="หัวหน้างานตรวจเวรพนักงานรักษาความปลอดภัย"
            width={1200}
            height={800}
            sizes="(max-width: 1024px) 100vw, 560px"
            className="h-auto w-full"
          />
          <div>
            <div className="mb-3 text-[13px] font-bold tracking-[0.15em] text-gold-dark">
              ทำไมต้องเลือกเรา
            </div>
            <h2 className="mb-6 font-serif text-[24px] text-brand sm:text-[30px]">
              บริหารงานโดยทีมมืออาชีพ
              <br className="hidden sm:inline" /> โปร่งใส ตรวจสอบได้
            </h2>
            <div className="flex flex-col gap-5">
              {WHY_US.map((w) => (
                <div key={w.title} className="flex gap-3.5">
                  <div className="w-1.5 shrink-0 rounded-[3px] bg-gold" />
                  <div>
                    <strong className="text-brand">{w.title}</strong>
                    <div className="mt-1 text-[14.5px] text-muted">{w.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients teaser */}
      <section className="mx-auto max-w-[1248px] px-5 py-16 text-center sm:px-6 sm:py-[88px]">
        <div className="mb-3 text-[13px] font-bold tracking-[0.15em] text-gold-dark">
          ลูกค้าของเรา
        </div>
        <h2 className="mb-10 font-serif text-[24px] text-brand sm:text-[30px]">
          องค์กรและโครงการที่ไว้วางใจเรา
        </h2>
        <div className="mb-9 flex flex-wrap justify-center gap-3.5">
          {FEATURED_CLIENTS.map((c) => (
            <span
              key={c}
              className="border border-[#DCD5C6] px-5 py-2.5 text-[14px] font-semibold text-brand"
            >
              {c}
            </span>
          ))}
        </div>
        <Link
          href="/clients"
          className="border-b-2 border-gold pb-0.5 text-[15px] font-bold text-brand hover:text-gold-dark"
        >
          ดูผลงานทั้งหมด →
        </Link>
      </section>

      <CTASection />
    </>
  );
}
