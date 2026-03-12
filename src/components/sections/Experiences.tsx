"use client";

import { useState, useCallback } from "react";
import { t } from "@/content/home";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ExperienceModal } from "@/components/sections/ExperienceModal";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, Experience } from "@/content/types";

interface ExperiencesProps { locale: Locale; ui: UiStrings; experiences: Experience[] }

function formatPeriod(start: string, end: string | null, locale: Locale): string {
  const fmt = (s: string) => {
    const [y, m] = s.split("-");
    const date = new Date(Number(y), Number(m) - 1);
    if (locale === "zh") return `${y}年${Number(m)}月`;
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };
  const endStr = end
    ? fmt(end)
    : locale === "zh" ? "至今" : locale === "fr" ? "Présent" : "Present";
  return `${fmt(start)} — ${endStr}`;
}

function startYear(start: string) { return start.split("-")[0]; }

// Five-colour dot palette — cycles through brand system
// badge value is the *modifier only* (appended alongside the base "chip" class in JSX)
const DOT_PALETTE = [
  // #33539E primary blue
  { dot: "bg-blue",       ring: "shadow-[0_0_0_6px_rgba(51,83,158,0.10)]",   badge: "chip-blue",       role: "text-blue"      },
  // #7DACD6 secondary light blue
  { dot: "bg-blue-light", ring: "shadow-[0_0_0_6px_rgba(125,172,214,0.14)]", badge: "chip-blue-light", role: "text-[#4a7fa0]" },
  // #C0B9DB lavender
  { dot: "bg-lavender",   ring: "shadow-[0_0_0_6px_rgba(192,185,219,0.18)]", badge: "chip-lavender",   role: "text-[#6b65a0]" },
  // #A5678E deep rose
  { dot: "bg-rose",       ring: "shadow-[0_0_0_6px_rgba(165,103,142,0.14)]", badge: "chip-rose",       role: "text-rose"      },
  // #E9B7D4 soft pink
  { dot: "bg-pink",       ring: "shadow-[0_0_0_6px_rgba(233,183,212,0.18)]", badge: "chip-pink",       role: "text-[#a0607a]" },
  // back to primary blue for 6th+
  { dot: "bg-blue",       ring: "shadow-[0_0_0_6px_rgba(51,83,158,0.10)]",   badge: "chip-blue",       role: "text-blue"      },
];

export function Experiences({ locale, ui, experiences }: ExperiencesProps) {
  const s   = ui.sections.experiences;
  const key = experiences.filter((e) => e.category === "key");

  const [expanded, setExpanded] = useState<number | null>(null);
  const [modal,    setModal]    = useState<Experience | null>(null);
  const closeModal = useCallback(() => setModal(null), []);

  return (
    <>
      <SectionHeader title={s.title} description={s.description} />

      <div className="relative flex gap-8">
        {/* ── Timeline rail ── */}
        <div className="timeline-rail hidden w-5 shrink-0 md:block" />

        {/* ── Cards column ── */}
        <ol className="flex flex-1 flex-col gap-4">
          {key.map((exp, idx) => {
            const c      = DOT_PALETTE[idx % DOT_PALETTE.length];
            const isOpen = expanded === idx;
            const period = formatPeriod(exp.period.start, exp.period.end, locale);
            const year   = startYear(exp.period.start);

            return (
              <li key={idx} className="relative flex gap-5">
                {/* Node dot — desktop */}
                <div className="relative z-10 mt-5 hidden shrink-0 md:block">
                  <span className={[
                    "timeline-dot block",
                    c.dot,
                    isOpen ? "active" : "",
                    c.ring,
                  ].join(" ")} />
                </div>

                {/* Experience card */}
                <div className="flex-1">
                  <button
                    onClick={() => setExpanded(isOpen ? null : idx)}
                    className={[
                      "group w-full text-left ui-card px-6 py-5",
                      "transition-all duration-[420ms]",
                      isOpen ? "!border-accent/20 !shadow-hover" : "",
                    ].join(" ")}
                    aria-expanded={isOpen}
                  >
                    {/* Top row */}
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                      <div className="flex items-center gap-2.5">
                        {/* Year pill */}
                        <span className="shrink-0 rounded-full border border-line bg-white/60 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-ink/40">
                          {year}
                        </span>
                        {/* Org name */}
                        <span className="font-display text-[18px] font-semibold leading-snug text-ink transition-colors duration-200 group-hover:text-accent">
                          {t(exp.org, locale)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-[12px] text-ink/38">{t(exp.location, locale)}</span>
                        {/* Chevron */}
                        <svg
                          viewBox="0 0 16 16" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className={[
                            "h-3.5 w-3.5 shrink-0 transition-transform duration-300 text-ink/32",
                            isOpen ? "rotate-180" : "",
                          ].join(" ")}
                        >
                          <path d="M4 6l4 4 4-4" />
                        </svg>
                      </div>
                    </div>

                        {/* Role */}
                        <p className={`mt-1.5 text-[15px] font-medium leading-snug ${c.role}`}>
                          {t(exp.role, locale)}
                        </p>

                        {/* Period */}
                        <p className="mt-1 text-[14px] text-ink/38">{period}</p>

                    {/* Tags */}
                    {exp.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {exp.tags.slice(0, 4).map((tag, j) => (
                          <span key={j} className={["chip text-[11.5px]", c.badge].join(" ")}>
                            {t(tag, locale)}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Expandable detail */}
                    <div className={[
                      "overflow-hidden transition-all duration-500",
                      isOpen ? "max-h-[600px] opacity-100 mt-5" : "max-h-0 opacity-0 mt-0",
                    ].join(" ")}>
                      <ul className="flex flex-col gap-3 border-t border-line pt-4">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex gap-3 text-[15px] leading-[1.65] text-ink/60">
                            <span className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${c.dot} opacity-55`} />
                            {t(b, locale)}
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={(e) => { e.stopPropagation(); setModal(exp); }}
                        className="mt-4 flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-2 text-[12px] font-semibold text-accent transition-all duration-200 hover:bg-accent/[0.12]"
                      >
                        {ui.labels.viewDetails}
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <ExperienceModal exp={modal} locale={locale} ui={ui} onClose={closeModal} />
    </>
  );
}
