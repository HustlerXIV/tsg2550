import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import {
  ABOUT_STORY,
  ADVISORS,
  EXECUTIVES,
  HERO,
  PHILOSOPHY,
  RECRUIT_STANDARDS,
  TRAINING_COURSES,
  VISION,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description:
    "ประวัติ วิสัยทัศน์ ปรัชญาการบริหาร ทีมผู้บริหาร และมาตรฐานการฝึกอบรมของ บริษัท รักษาความปลอดภัย ที.เอส.จี. 2550 จำกัด",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="เกี่ยวกับเรา"
        title="ผู้เชี่ยวชาญด้านงานรักษาความปลอดภัยมากว่า 19 ปี"
        description={HERO.motto}
      />

      {/* Story */}
      <section className="mx-auto grid max-w-[1248px] items-center gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14">
        <div>
          <div className="mb-3 text-[13px] font-bold tracking-[0.15em] text-gold-dark">
            เรื่องราวของเรา
          </div>
          <h2 className="mb-5 font-serif text-[24px] text-brand sm:text-[28px]">
            {ABOUT_STORY.heading}
          </h2>
          {ABOUT_STORY.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mb-4 text-[15px] text-muted last:mb-0">
              {p}
            </p>
          ))}
        </div>
        <Image
          src="/images/story-photo.webp"
          alt="การฝึกอบรมพนักงานรักษาความปลอดภัย"
          width={1200}
          height={800}
          sizes="(max-width: 1024px) 100vw, 560px"
          className="order-first h-auto w-full lg:order-none"
        />
      </section>

      {/* Vision */}
      <section className="bg-cream-dark">
        <div className="mx-auto max-w-[1248px] px-5 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto mb-12 max-w-[720px] text-center">
            <div className="mb-3 text-[13px] font-bold tracking-[0.15em] text-gold-dark">
              วิสัยทัศน์
            </div>
            <p className="font-serif text-[19px] text-brand sm:text-[24px]">
              “{VISION.quote}”
            </p>
          </div>
          <div className="mx-auto grid max-w-[960px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            {VISION.points.map((p) => (
              <div
                key={p}
                className="border-l-[3px] border-gold bg-white px-5 py-6 text-[14.5px] font-bold text-brand"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-[1248px] px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto mb-12 max-w-[640px] text-center">
          <div className="mb-3 text-[13px] font-bold tracking-[0.15em] text-gold-dark">
            ปรัชญาการบริหาร
          </div>
          <h2 className="font-serif text-[24px] text-brand sm:text-[28px]">
            หลักการที่เรายึดถือ
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-7">
          {PHILOSOPHY.map((p, i) => (
            <div key={p}>
              <div className="mb-2 font-serif text-[26px] text-gold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-[15px] font-semibold text-brand">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-brand text-white">
        <div className="mx-auto max-w-[1248px] px-5 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto mb-12 max-w-[640px] text-center">
            <div className="mb-3 text-[13px] font-bold tracking-[0.15em] text-gold">
              ทีมบริหาร
            </div>
            <h2 className="font-serif text-[24px] sm:text-[28px]">
              คณะผู้บริหารและที่ปรึกษา
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-px bg-white/10">
            {EXECUTIVES.map((e) => (
              <div key={e.name} className="bg-brand p-6">
                <div className="font-bold">{e.name}</div>
                <div className="mt-1 text-[13.5px] text-[#9DAAC0]">{e.role}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 text-center text-[14px] text-[#9DAAC0]">
            คณะกรรมการที่ปรึกษา: {ADVISORS.join(" · ")}
          </div>
        </div>
      </section>

      {/* Training & selection */}
      <section className="mx-auto grid max-w-[1248px] gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <div className="mb-3 text-[13px] font-bold tracking-[0.15em] text-gold-dark">
            การฝึกอบรม
          </div>
          <h2 className="mb-5 font-serif text-[22px] text-brand sm:text-[26px]">
            วิชาฝึกอบรมก่อน-หลังลงหน้างาน
          </h2>
          <ul className="grid list-none grid-cols-1 gap-x-6 gap-y-2.5 p-0 text-[14.5px] text-ink-soft sm:grid-cols-2">
            {TRAINING_COURSES.map((c) => (
              <li key={c} className="flex gap-2">
                <span aria-hidden="true">•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-3 text-[13px] font-bold tracking-[0.15em] text-gold-dark">
            การคัดเลือกบุคลากร
          </div>
          <h2 className="mb-5 font-serif text-[22px] text-brand sm:text-[26px]">
            มาตรฐานการรับสมัคร
          </h2>
          <div className="flex flex-col gap-3.5">
            {RECRUIT_STANDARDS.map((r) => (
              <div
                key={r}
                className="border border-line-soft bg-white px-5 py-4 text-[14.5px] text-ink-soft"
              >
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
