"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-brand shadow-[0_2px_12px_rgba(0,0,0,0.15)]">
      <div className="mx-auto flex max-w-[1248px] items-center justify-between gap-6 px-5 py-3 sm:px-6 sm:py-3.5">
        <Link href="/" className="flex shrink-0 items-center gap-3 no-underline">
          <Image
            src="/logo.png"
            alt="โลโก้ ที.เอส.จี. 2550"
            width={598}
            height={776}
            priority
            className="h-10 w-auto sm:h-[46px]"
          />
          <span className="block">
            <span className="block font-serif text-base font-bold tracking-wide text-white sm:text-lg">
              {SITE.nameTh}
            </span>
            <span className="block text-[10px] tracking-[0.09em] text-gold sm:text-[11px]">
              {SITE.nameEn}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[15px] font-medium lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={
                isActive(link.href)
                  ? "border-b-2 border-gold pb-1 text-gold"
                  : "text-[#EDEEF2] transition-colors hover:text-gold"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-sm bg-gold px-5 py-2.5 text-sm font-bold whitespace-nowrap text-brand transition-colors hover:bg-gold-light lg:inline-block"
          >
            ขอใบเสนอราคา
          </Link>
          <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="เปิด/ปิดเมนู"
          className="flex h-10 w-10 items-center justify-center rounded-sm text-white lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        hidden={!open}
        className="border-t border-white/10 bg-brand lg:hidden"
      >
        <div className="mx-auto flex max-w-[1248px] flex-col px-5 pb-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`border-b border-white/10 py-3 text-[15px] font-medium ${
                isActive(link.href) ? "text-gold" : "text-[#EDEEF2]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.officePhoneTel}`}
            className="mt-4 rounded-sm border border-gold px-5 py-3 text-center text-sm font-bold text-gold"
          >
            โทร {SITE.officePhone}
          </a>
          <Link
            href="/contact"
            className="mt-2 rounded-sm bg-gold px-5 py-3 text-center text-sm font-bold text-brand"
          >
            ขอใบเสนอราคา
          </Link>
        </div>
      </nav>
    </header>
  );
}
