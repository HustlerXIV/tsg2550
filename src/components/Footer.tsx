import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-sm text-onbrand">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 pt-12 pb-6 sm:px-6 sm:pt-14 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="mb-3 font-serif text-[17px] font-bold text-white">
            {SITE.legalName}
          </div>
          <p className="max-w-[400px] text-muted-light">{SITE.address}</p>
        </div>

        <div>
          <div className="mb-3.5 font-bold text-white">เมนู</div>
          <div className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-onbrand transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3.5 font-bold text-white">ติดต่อ</div>
          <div className="flex flex-col gap-2.5 text-muted-light">
            <a href={`tel:${SITE.officePhoneTel}`} className="hover:text-gold">
              โทร. {SITE.officePhone}
            </a>
            <a
              href={`tel:${SITE.managerPhone.replace(/-/g, "")}`}
              className="hover:text-gold"
            >
              มือถือ {SITE.managerPhone}
            </a>
            <a href={`mailto:${SITE.email}`} className="hover:text-gold">
              {SITE.email}
            </a>
            <span>LINE: {SITE.line}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.08] px-5 py-4 text-center text-[13px] text-[#6C7A93] sm:px-6">
        © {SITE.copyrightYear} {SITE.legalName} สงวนลิขสิทธิ์
      </div>
    </footer>
  );
}
