import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { CLIENT_GROUPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "ผลงาน/ลูกค้า",
  description:
    "องค์กรและโครงการที่ไว้วางใจ ที.เอส.จี. 2550 — ดูแลหน้างานมากกว่า 40 แห่งทั่วกรุงเทพฯ และปริมณฑล",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="ผลงาน/ลูกค้า"
        title="องค์กรและโครงการที่ไว้วางใจเรา"
        description="ปัจจุบันดูแลหน้างานมากกว่า 40 แห่งทั่วกรุงเทพฯ และปริมณฑล ทั้งอาคารสำนักงาน คอนโดมิเนียม และหมู่บ้านจัดสรร"
      />

      <section className="mx-auto max-w-[1248px] px-5 py-16 sm:px-6 sm:py-20">
        {CLIENT_GROUPS.map((group, gi) => (
          <div key={group.category} className={gi === 0 ? "mb-12 sm:mb-14" : undefined}>
            <h2 className="mb-6 inline-block border-b-2 border-gold pb-2 font-serif text-[21px] text-brand sm:text-[24px]">
              {group.category}
            </h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3">
              {group.items.map((name) => (
                <div
                  key={name}
                  className="border border-line-soft bg-white px-4 py-3.5 text-[14px] text-[#2A3040]"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-cream-dark">
        <div className="mx-auto grid max-w-[948px] gap-6 px-5 py-14 sm:px-6 sm:py-20 sm:grid-cols-2">
          {["site-photo-1", "site-photo-2"].map((id) => (
            <Image
              key={id}
              src={`/images/${id}.webp`}
              alt="ภาพหน้างานจริงของ ที.เอส.จี. 2550"
              width={900}
              height={600}
              sizes="(max-width: 640px) 100vw, 430px"
              className="h-auto w-full"
            />
          ))}
        </div>
      </section>

      <CTASection title="อยากให้เราดูแลหน้างานของคุณ?" />
    </>
  );
}
