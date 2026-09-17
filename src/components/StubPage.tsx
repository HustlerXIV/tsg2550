import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";

export default function StubPage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-20">
        <div className="border border-line-soft bg-white p-8 text-center sm:p-12">
          <h2 className="mb-3 font-serif text-[22px] text-brand">
            อยู่ระหว่างจัดเตรียมเนื้อหา
          </h2>
          <p className="mx-auto mb-7 max-w-[520px] text-[15px] text-muted">
            หน้านี้กำลังอยู่ระหว่างการจัดทำ หากต้องการข้อมูลเพิ่มเติม
            สามารถติดต่อเราได้โดยตรง
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="w-full rounded-sm bg-brand px-8 py-3.5 text-[15px] font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
            >
              ไปหน้าติดต่อเรา
            </Link>
            <a
              href={`tel:${SITE.officePhoneTel}`}
              className="w-full rounded-sm border border-brand px-8 py-3.5 text-[15px] font-bold text-brand transition-colors hover:bg-brand hover:text-white sm:w-auto"
            >
              โทร {SITE.officePhone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
