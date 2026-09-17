import Link from "next/link";

export default function CTASection({
  title = "ต้องการพนักงานรักษาความปลอดภัยที่ไว้ใจได้?",
  body = "ติดต่อทีมงานของเราเพื่อขอใบเสนอราคาและคำปรึกษาฟรี",
  variant = "brand",
}: {
  title?: string;
  body?: string;
  variant?: "brand" | "cream";
}) {
  if (variant === "cream") {
    return (
      <section className="bg-cream-dark">
        <div className="mx-auto max-w-[948px] px-5 py-14 text-center sm:px-6 sm:py-16">
          <h2 className="mb-3 font-serif text-[22px] text-brand sm:text-[24px]">
            {title}
          </h2>
          <p className="mb-6 text-[15px] text-muted">{body}</p>
          <Link
            href="/contact"
            className="inline-block rounded-sm bg-brand px-8 py-3.5 text-[14.5px] font-bold text-white transition-opacity hover:opacity-90"
          >
            ติดต่อเรา
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-brand text-white">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-6 px-5 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="mb-2 font-serif text-[22px] sm:text-[26px]">{title}</h2>
          <p className="text-[15px] text-onbrand">{body}</p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 rounded-sm bg-gold px-8 py-4 text-center text-[15px] font-bold whitespace-nowrap text-brand transition-colors hover:bg-gold-light"
        >
          ติดต่อเรา
        </Link>
      </div>
    </section>
  );
}
