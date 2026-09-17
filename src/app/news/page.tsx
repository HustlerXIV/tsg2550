import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import { NEWS } from "@/lib/content";

export const metadata: Metadata = {
  title: "ข่าวสาร",
  description:
    "ข่าวสาร ประกาศรับสมัครงาน และกิจกรรมการฝึกอบรมพนักงานของ ที.เอส.จี. 2550",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="ข่าวสาร & กิจกรรม"
        title="ความเคลื่อนไหวของบริษัท"
        description="ข่าวสาร ประกาศรับสมัครงาน และกิจกรรมการฝึกอบรมพนักงานของเรา"
      />

      <section className="mx-auto flex max-w-[1048px] flex-col gap-6 px-5 py-16 sm:px-6 sm:py-20">
        {NEWS.map((n) => (
          <article
            key={n.title}
            className="flex flex-col gap-5 border border-line-soft border-l-4 border-l-gold bg-white p-6 sm:flex-row sm:gap-7 sm:p-8"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded bg-cream-dark">
              <Icon name={n.icon} size={28} />
            </div>
            <div>
              <h2 className="mb-2 font-serif text-[18px] text-brand sm:text-[19px]">
                {n.title}
              </h2>
              <p className="text-[14.5px] text-muted">
                {n.body}
                {"linkHref" in n && n.linkHref ? (
                  <Link href={n.linkHref} className="text-gold-dark hover:underline">
                    {n.linkLabel}
                  </Link>
                ) : null}
              </p>
            </div>
          </article>
        ))}
      </section>

      <CTASection
        variant="cream"
        title="ติดตามข่าวสารและตำแหน่งงานล่าสุด"
        body="ติดต่อสอบถามข่าวสาร ตำแหน่งงานว่าง หรือความร่วมมือทางธุรกิจได้โดยตรง"
      />
    </>
  );
}
