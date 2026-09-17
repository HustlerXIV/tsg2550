import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="ไม่พบหน้าที่คุณค้นหา" />
      <section className="mx-auto max-w-[1200px] px-5 py-14 text-center sm:px-6 sm:py-20">
        <Link
          href="/"
          className="inline-block rounded-sm bg-brand px-8 py-3.5 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
        >
          กลับหน้าแรก
        </Link>
      </section>
    </>
  );
}
