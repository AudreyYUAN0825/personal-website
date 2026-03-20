"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { locales, type Locale } from "@/lib/i18n";
import type { UiStrings, CvMap } from "@/content/types";

interface HeaderProps {
  locale: Locale;
  ui:     UiStrings;
  cv:     CvMap;
  className?: string;
}

const localeLabel: Record<Locale, string> = { zh: "中", en: "EN", fr: "FR" };

const SECTION_IDS = [
  "projects", "experiences", "education", "scholarships", "publications",
  "media", "additional", "tools", "value-bridge", "working-style", "contact",
];

export function Header({ locale, ui, cv, className }: HeaderProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen]       = useState(false);

  useEffect(() => {
    const root = document.getElementById("scroll-root");
    if (!root) return;

    const onScroll = () => {
      const rootRect = root.getBoundingClientRect();
      const threshold = rootRect.top + root.clientHeight * 0.4;
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = `#${id}`;
      }
      setActiveSection(current || `#${SECTION_IDS[0]}`);
    };

    onScroll();
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  function localePath(target: Locale) {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/") + activeSection;
  }

  const cvEntry = cv[locale];

  const navItems = [
    { href: `/${locale}#projects`,    label: ui.nav.projects    },
    { href: `/${locale}#experiences`, label: ui.nav.experiences },
    { href: `/${locale}#education`,   label: ui.nav.education   },
    { href: `/${locale}#scholarships`, label: ui.nav.scholarships },
    { href: `/${locale}#contact`,     label: ui.nav.contact     },
  ];

  return (
    <header className={`navbar-bar ${className ?? ""}`.trim()}>
      <div className="flex items-center justify-between">

        {/* Brand */}
        <Link
          href={`/${locale}#top`}
          className="group flex flex-col leading-none"
          onClick={() => setMobileOpen(false)}
        >
          <span className="font-display text-[14px] font-medium tracking-[-0.01em] text-[rgba(20,20,20,0.65)] transition-colors group-hover:text-[rgba(20,20,20,0.95)]">
            {ui.hero.name.split("·")[0].trim()}
          </span>
          <span className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#33539E]">
            Climate · Energy · International
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="underline-grow relative pb-px text-[14px] font-medium tracking-[0.02em] text-[rgba(20,20,20,0.65)] transition-colors duration-150 hover:text-[rgba(20,20,20,0.95)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: locale toggle + CV CTA */}
        <div className="flex items-center gap-2.5">
          {/* Locale pill */}
          <div className="flex items-center rounded-full border border-line bg-white/70 p-[3px] backdrop-blur-sm">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={localePath(loc)}
                className={
                  loc === locale
                    ? "rounded-full bg-gradient-to-r from-accent to-mint px-3 py-[5px] text-[10px] font-bold tracking-[0.06em] text-white shadow-sm"
                    : "rounded-full px-3 py-[5px] text-[10px] font-medium tracking-[0.06em] text-ink/45 transition-colors hover:text-ink"
                }
              >
                {localeLabel[loc]}
              </Link>
            ))}
          </div>

          {/* CV download — desktop */}
          <a
            href={cvEntry.href}
            download={cvEntry.downloadName}
            className="btn-primary hidden h-[36px] px-4 text-[12px] sm:inline-flex"
          >
            {cvEntry.label}
          </a>

          {/* Mobile menu toggle */}
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white/60 text-ink/50 transition hover:bg-white/85 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav className="mt-3 flex flex-col gap-1 border-t border-line/60 pt-3 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-3 py-2.5 text-[14px] font-medium text-[rgba(20,20,20,0.65)] transition hover:bg-white/60 hover:text-[rgba(20,20,20,0.95)]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={cvEntry.href}
            download={cvEntry.downloadName}
            className="btn-primary mt-2 text-[13px]"
          >
            {cvEntry.label}
          </a>
        </nav>
      )}
    </header>
  );
}
