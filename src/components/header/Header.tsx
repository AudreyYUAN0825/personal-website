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
}

const localeLabel: Record<Locale, string> = { zh: "中", en: "EN", fr: "FR" };

// All section ids in page order (used for scroll-tracking)
const SECTION_IDS = [
  "capabilities", "value-bridge", "projects", "experiences",
  "education", "publications", "media", "additional", "tools",
  "working-style", "contact",
];

export function Header({ locale, ui, cv }: HeaderProps) {
  const pathname = usePathname();

  // Scroll-aware header background
  const [scrolled, setScrolled] = useState(false);

  // Current visible section (used for locale-switch target)
  // Empty string = top of page
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // ── Scroll → header bg ──────────────────────────────────────────────
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Scroll → active section (for locale switcher) ───────────────────
    const updateSection = () => {
      // Use viewport 40% from top as the "detection line"
      const threshold = window.scrollY + window.innerHeight * 0.4;
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= threshold) {
          current = `#${id}`;
        }
      }
      setActiveSection(current);
    };

    updateSection();
    window.addEventListener("scroll", updateSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", updateSection);
    };
  }, []);

  /** Build the locale-switch URL, preserving current scroll position via section hash */
  function localePath(target: Locale): string {
    const segments = pathname.split("/");
    segments[1] = target;
    // activeSection is "" (top) until the user scrolls past the first section
    return segments.join("/") + activeSection;
  }

  const cvEntry = cv[locale];

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-40 border-b transition-all duration-300",
        scrolled ? "nav-scrolled backdrop-blur-md" : "nav-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">

        {/* Brand */}
        <Link href={`/${locale}#top`} className="group flex flex-col leading-none">
          <span className="font-display text-[13px] font-semibold tracking-[-0.01em] text-ink transition-opacity group-hover:opacity-70">
            {ui.hero.name.split("·")[0].trim()}
          </span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-ink/35">
            Climate · Energy · International
          </span>
        </Link>

        {/* Nav — profile removed */}
        <nav className="hidden items-center gap-5 md:flex">
          {[
            { href: `/${locale}#capabilities`, label: ui.nav.capabilities },
            { href: `/${locale}#projects`,     label: ui.nav.projects     },
            { href: `/${locale}#experiences`,  label: ui.nav.experiences  },
            { href: `/${locale}#education`,    label: ui.nav.education    },
            { href: `/${locale}#contact`,      label: ui.nav.contact      },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="underline-grow relative pb-px text-[11px] font-semibold uppercase tracking-[0.13em] text-ink/45 transition-colors duration-150 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: locale toggle + CV CTA */}
        <div className="flex items-center gap-2.5">
          {/* Segmented locale pill */}
          <div className="flex items-center rounded-full border border-line bg-white/70 p-[3px] backdrop-blur-sm">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={localePath(loc)}
                className={
                  loc === locale
                    ? "rounded-full bg-gradient-to-r from-accent to-moss px-3 py-[5px] text-[10px] font-bold tracking-[0.06em] text-white shadow-sm"
                    : "rounded-full px-3 py-[5px] text-[10px] font-medium tracking-[0.06em] text-ink/50 transition-colors hover:text-ink"
                }
              >
                {localeLabel[loc]}
              </Link>
            ))}
          </div>

          {/* CV download */}
          <a
            href={cvEntry.href}
            download={cvEntry.downloadName}
            className="hidden items-center rounded-[8px] bg-gradient-to-r from-accent to-moss px-3.5 py-[7px] text-[11px] font-semibold tracking-[0.02em] text-white shadow-brand transition-all duration-150 hover:-translate-y-px hover:shadow-brand-hover sm:inline-flex"
          >
            {cvEntry.label}
          </a>
        </div>
      </div>
    </header>
  );
}
