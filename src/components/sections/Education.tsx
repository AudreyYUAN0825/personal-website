"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { EducationEntry, UiStrings } from "@/content/types";
import { t } from "@/content/home";

interface EducationProps {
  locale:    Locale;
  ui:        UiStrings;
  education: EducationEntry[];
}

function yearRange(startDate: string, endDate: string): string {
  const sy = startDate.split("-")[0];
  const ey = endDate === "present" ? "Present" : endDate.split("-")[0];
  return sy === ey ? sy : `${sy} — ${ey}`;
}

const NODE_COLORS: Record<string, {
  dot: string; ring: string; badge: string; label: string; expandBtn: string;
}> = {
  "sciences-po": {
    dot:       "bg-accent",
    ring:      "ring-accent/20",
    badge:     "bg-accent/[0.07] text-accent border-accent/18",
    label:     "text-accent",
    expandBtn: "text-accent/60 hover:text-accent",
  },
  "uc-berkeley": {
    dot:       "bg-moss",
    ring:      "ring-moss/20",
    badge:     "bg-moss/[0.07] text-moss border-moss/18",
    label:     "text-moss",
    expandBtn: "text-moss/60 hover:text-moss",
  },
  nankai: {
    dot:       "bg-ink/50",
    ring:      "ring-ink/10",
    badge:     "bg-ink/[0.05] text-ink/55 border-ink/10",
    label:     "text-ink/65",
    expandBtn: "text-ink/40 hover:text-ink/70",
  },
};
const DEFAULT_COLORS = NODE_COLORS["sciences-po"];

export function Education({ locale, ui, education }: EducationProps) {
  const sec = ui.sections.education;
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div>
      {/* Section header */}
      <div className="mb-10">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-accent/60">
          {ui.labels.degree}
        </p>
        <h2 className="gradient-heading font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {sec.title}
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/55">{sec.description}</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical guide line */}
        <div
          aria-hidden
          className="absolute left-[9px] top-3 bottom-3 w-[2px] rounded-full bg-gradient-to-b from-accent/40 via-line to-transparent"
        />

        <ol className="flex flex-col gap-0">
          {education.map((entry, idx) => {
            const colors     = NODE_COLORS[entry.id] ?? DEFAULT_COLORS;
            const isLast     = idx === education.length - 1;
            const isOpen     = expanded === entry.id;
            const school     = t(entry.school, locale);
            const degree     = t(entry.degree, locale);
            const program    = entry.program ? t(entry.program, locale) : null;
            const location   = t(entry.location, locale);
            const period     = yearRange(entry.startDate, entry.endDate);
            const highlights = entry.highlights?.[locale] ?? [];
            const tags       = (entry.focusTags?.[locale] ?? []).slice(0, 4);

            return (
              <li key={entry.id} className={`relative flex gap-5 ${isLast ? "pb-0" : "pb-6"}`}>
                {/* Node dot */}
                <div className="relative z-10 mt-[14px] flex shrink-0 flex-col items-center">
                  <span className={[
                    "block h-[14px] w-[14px] rounded-full ring-4 transition-transform duration-200",
                    isOpen ? "scale-125" : "hover:scale-110",
                    colors.dot, colors.ring,
                  ].join(" ")} />
                </div>

                {/* Card */}
                <div className="flex-1">
                  {/* Clickable summary row */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : entry.id)}
                    className={[
                      "group w-full rounded-2xl border bg-white/80 px-5 py-4 text-left shadow-sm",
                      "transition-all duration-300",
                      isOpen
                        ? "border-accent/25 shadow-card"
                        : "border-line hover:-translate-y-[2px] hover:border-accent/20 hover:shadow-card",
                    ].join(" ")}
                    aria-expanded={isOpen}
                  >
                    {/* Top row: year pill + school + location */}
                    <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-0.5">
                      <div className="flex items-center gap-2.5">
                        {/* Year badge */}
                        <span className="shrink-0 rounded-full bg-ink/[0.05] px-2 py-0.5 font-display text-[11px] font-semibold tracking-wide text-ink/40">
                          {period}
                        </span>
                        {/* School */}
                        <span className="font-display text-[15px] font-bold leading-snug text-ink">
                          {school}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11.5px] text-ink/35">{location}</span>
                        {/* Chevron */}
                        <svg
                          viewBox="0 0 16 16" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className={[
                            "h-3.5 w-3.5 shrink-0 transition-transform duration-300",
                            colors.expandBtn,
                            isOpen ? "rotate-180" : "",
                          ].join(" ")}
                        >
                          <path d="M4 6l4 4 4-4"/>
                        </svg>
                      </div>
                    </div>

                    {/* Degree */}
                    <p className={`mt-1 text-[13.5px] font-semibold leading-snug ${colors.label}`}>
                      {degree}
                    </p>

                    {/* Program (always visible) */}
                    {program && (
                      <p className="mt-0.5 text-[11.5px] text-ink/42">{program}</p>
                    )}

                    {/* Tags — always visible */}
                    {tags.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className={[
                              "rounded-full border px-2.5 py-[3px] text-[11px] font-medium",
                              colors.badge,
                            ].join(" ")}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* ── Expandable details ── */}
                    <div
                      className={[
                        "overflow-hidden transition-all duration-500 ease-in-out",
                        isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0",
                      ].join(" ")}
                    >
                      {highlights.length > 0 && (
                        <ul className="flex flex-col gap-2 border-t border-line pt-4">
                          {highlights.map((h, i) => (
                            <li key={i} className="flex gap-2.5 text-[12.5px] leading-relaxed text-ink/62">
                              <span className={[
                                "mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full opacity-50",
                                colors.dot,
                              ].join(" ")} />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
