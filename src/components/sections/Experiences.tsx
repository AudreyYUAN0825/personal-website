"use client";

import { useState, useCallback } from "react";
import { t } from "@/content/home";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ExperienceModal } from "@/components/sections/ExperienceModal";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, Experience } from "@/content/types";

interface ExperiencesProps { locale: Locale; ui: UiStrings; experiences: Experience[] }

/** "2025年09月 — 至今"  |  "Sep 2025 — Present" */
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

/** Just the start year for the node label */
function startYear(start: string) { return start.split("-")[0]; }

/* Alternating accent colours for visual rhythm across 6 entries */
const NODE_PALETTE = [
  { dot: "bg-accent",    ring: "ring-accent/20",  badge: "bg-accent/[0.07] text-accent border-accent/15",   role: "text-accent",   btn: "text-accent/60 hover:text-accent"   },
  { dot: "bg-moss",      ring: "ring-moss/20",     badge: "bg-moss/[0.07] text-moss border-moss/15",         role: "text-moss",     btn: "text-moss/60 hover:text-moss"       },
  { dot: "bg-accent",    ring: "ring-accent/20",   badge: "bg-accent/[0.07] text-accent border-accent/15",   role: "text-accent",   btn: "text-accent/60 hover:text-accent"   },
  { dot: "bg-moss",      ring: "ring-moss/20",     badge: "bg-moss/[0.07] text-moss border-moss/15",         role: "text-moss",     btn: "text-moss/60 hover:text-moss"       },
  { dot: "bg-ink/45",    ring: "ring-ink/10",      badge: "bg-ink/[0.05] text-ink/55 border-ink/10",         role: "text-ink/60",   btn: "text-ink/40 hover:text-ink/70"      },
  { dot: "bg-ink/45",    ring: "ring-ink/10",      badge: "bg-ink/[0.05] text-ink/55 border-ink/10",         role: "text-ink/60",   btn: "text-ink/40 hover:text-ink/70"      },
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

      {/* Timeline */}
      <div className="relative">
        {/* Vertical guide line */}
        <div
          aria-hidden
          className="absolute left-[9px] top-3 bottom-3 w-[2px] rounded-full bg-gradient-to-b from-accent/40 via-line to-transparent"
        />

        <ol className="flex flex-col gap-0">
          {key.map((exp, idx) => {
            const c       = NODE_PALETTE[idx % NODE_PALETTE.length];
            const isOpen  = expanded === idx;
            const isLast  = idx === key.length - 1;
            const year    = startYear(exp.period.start);
            const period  = formatPeriod(exp.period.start, exp.period.end, locale);

            return (
              <li key={idx} className={`relative flex gap-5 ${isLast ? "pb-0" : "pb-5"}`}>
                {/* Node */}
                <div className="relative z-10 mt-[14px] shrink-0">
                  <span className={[
                    "block h-[14px] w-[14px] rounded-full ring-4 transition-transform duration-200",
                    isOpen ? "scale-125" : "hover:scale-110",
                    c.dot, c.ring,
                  ].join(" ")} />
                </div>

                {/* Card */}
                <div className="flex-1">
                  <button
                    onClick={() => setExpanded(isOpen ? null : idx)}
                    className={[
                      "group w-full rounded-2xl border bg-white/80 px-5 py-4 text-left shadow-sm",
                      "transition-all duration-300",
                      isOpen
                        ? "border-accent/22 shadow-card"
                        : "border-line hover:-translate-y-[2px] hover:border-accent/18 hover:shadow-card",
                    ].join(" ")}
                    aria-expanded={isOpen}
                  >
                    {/* Top row */}
                    <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-0.5">
                      <div className="flex items-center gap-2.5">
                        {/* Year badge */}
                        <span className="shrink-0 rounded-full bg-ink/[0.05] px-2 py-0.5 font-display text-[11px] font-semibold tracking-wide text-ink/40">
                          {year}
                        </span>
                        {/* Org */}
                        <span className="font-display text-[15px] font-bold leading-snug text-ink group-hover:text-accent transition-colors duration-200">
                          {t(exp.org, locale)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-ink/35">{t(exp.location, locale)}</span>
                        {/* Chevron */}
                        <svg
                          viewBox="0 0 16 16" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className={[
                            "h-3.5 w-3.5 shrink-0 transition-transform duration-300",
                            c.btn, isOpen ? "rotate-180" : "",
                          ].join(" ")}
                        >
                          <path d="M4 6l4 4 4-4"/>
                        </svg>
                      </div>
                    </div>

                    {/* Role */}
                    <p className={`mt-1 text-[13px] font-semibold leading-snug ${c.role}`}>
                      {t(exp.role, locale)}
                    </p>

                    {/* Period */}
                    <p className="mt-0.5 text-[11px] text-ink/38">{period}</p>

                    {/* Tags — always visible */}
                    {exp.tags.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {exp.tags.slice(0, 3).map((tag, j) => (
                          <span key={j} className={[
                            "rounded-full border px-2.5 py-[3px] text-[11px] font-medium",
                            c.badge,
                          ].join(" ")}>
                            {t(tag, locale)}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* ── Expandable: bullets + modal trigger ── */}
                    <div className={[
                      "overflow-hidden transition-all duration-500 ease-in-out",
                      isOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0",
                    ].join(" ")}>
                      {/* Bullets */}
                      <ul className="flex flex-col gap-2 border-t border-line pt-3.5">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex gap-2.5 text-[12.5px] leading-relaxed text-ink/62">
                            <span className={`mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full opacity-50 ${c.dot}`} />
                            {t(b, locale)}
                          </li>
                        ))}
                      </ul>

                      {/* "View full details" modal button */}
                      <button
                        onClick={(e) => { e.stopPropagation(); setModal(exp); }}
                        className={[
                          "mt-4 flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-[11.5px] font-semibold transition-all duration-200",
                          "border-line bg-paper hover:border-accent/30 hover:bg-accent/[0.04] hover:text-accent text-ink/50",
                        ].join(" ")}
                      >
                        {ui.labels.viewDetails}
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
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
