"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { EducationEntry, UiStrings } from "@/content/types";
import { t } from "@/content/home";
import { Icon } from "@/components/ui/Icon";

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
      <div className="mb-8">
        <p className="section-eyebrow mb-3">{ui.labels.degree}</p>
        <h2 className="section-title flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Icon name="graduation" className="h-4 w-4" />
          </span>
          {sec.title}
        </h2>
        {sec.description && (
          <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-ink/55">{sec.description}</p>
        )}
      </div>

      {/* Timeline */}
      <div className="relative flex gap-8">
        <div className="timeline-rail hidden w-5 shrink-0 md:block" />

        <ol className="flex flex-1 flex-col gap-4">
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
              <li key={entry.id} className="relative flex gap-5">
                {/* Node dot */}
                <div className="relative z-10 mt-5 hidden shrink-0 md:block">
                  <span className={[
                    "timeline-dot block",
                    colors.dot,
                    isOpen ? "active" : "",
                  ].join(" ")} />
                </div>

                {/* Card */}
                <div className="flex-1">
                  <button
                    onClick={() => setExpanded(isOpen ? null : entry.id)}
                    className={[
                      "group w-full text-left ui-card px-6 py-5",
                      "transition-all duration-[420ms]",
                      isOpen ? "!border-accent/20 !shadow-hover" : "",
                      isLast ? "" : "",
                    ].join(" ")}
                    aria-expanded={isOpen}
                  >
                    {/* Top row: year pill + school | location */}
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="shrink-0 rounded-full border border-line bg-white/60 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-ink/40">
                          {period}
                        </span>
                        <span className="font-display text-[16px] font-bold leading-snug text-ink transition-colors duration-200 group-hover:text-accent">
                          {school}
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-[12px] text-ink/38">{location}</span>
                        <svg
                          viewBox="0 0 16 16" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className={[
                            "h-3.5 w-3.5 shrink-0 transition-transform duration-300 text-ink/32",
                            isOpen ? "rotate-180" : "",
                          ].join(" ")}
                        >
                          <path d="M4 6l4 4 4-4"/>
                        </svg>
                      </div>
                    </div>

                    {/* Degree */}
                    <p className={`mt-1.5 text-[13px] font-semibold leading-snug ${colors.label}`}>
                      {degree}
                    </p>
                    {program && (
                      <p className="mt-1 text-[11.5px] text-ink/42">{program}</p>
                    )}

                    {/* Tags + Logo — logo 底部与标签对齐，放大 30% */}
                    <div className="mt-3 flex items-end justify-between gap-4">
                      {tags.length > 0 ? (
                        <div className="flex flex-wrap gap-1.5">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className={["chip text-[11.5px]", colors.badge].join(" ")}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span />
                      )}
                      {entry.logo && (
                        <img src={entry.logo} alt="" className="ml-auto h-[52px] w-auto max-w-[94px] shrink-0 object-contain object-right" />
                      )}
                    </div>

                    {/* Expandable details */}
                    <div
                      className={[
                        "overflow-hidden transition-all duration-500",
                        isOpen ? "max-h-[400px] opacity-100 mt-5" : "max-h-0 opacity-0 mt-0",
                      ].join(" ")}
                    >
                      {highlights.length > 0 && (
                        <ul className="flex flex-col gap-2.5 border-t border-line pt-4">
                          {highlights.map((h, i) => (
                            <li key={i} className="flex gap-3 text-[13px] leading-[1.65] text-ink/60">
                              <span className={["mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full opacity-55", colors.dot].join(" ")} />
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

