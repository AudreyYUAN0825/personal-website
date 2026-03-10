"use client";

import { useState, useCallback } from "react";
import { t } from "@/content/home";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { ProjectModal } from "@/components/sections/ProjectModal";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, Project } from "@/content/types";

interface ProjectsProps { locale: Locale; ui: UiStrings; projects: Project[] }

export function Projects({ locale, ui, projects }: ProjectsProps) {
  const s = ui.sections.projects;
  const l = ui.labels;
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <>
      <SectionHeader title={s.title} description={s.description} />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <button
            key={i}
            onClick={() => setSelected(p)}
            className="group flex flex-col gap-4 rounded-xl border border-line bg-card p-6 text-left shadow-soft transition-all duration-200 hover:border-moss/30 hover:shadow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss/30"
          >
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((tag, j) => (
                <Badge key={j} variant="type">{t(tag, locale)}</Badge>
              ))}
            </div>

            <h3 className="font-display text-sm font-semibold leading-snug text-ink group-hover:text-moss transition-colors">
              {t(p.title, locale)}
            </h3>

            {/* Metric chips */}
            {p.metrics && p.metrics.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {p.metrics.slice(0, 3).map((m, j) => (
                  <div key={j} className="flex items-baseline gap-1">
                    <span className="font-display text-[15px] font-bold text-ink">{m.value}</span>
                    <span className="text-[10px] text-ink/45">{t(m.label, locale)}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-3 border-t border-line pt-4 text-[13px]">
              {[
                { label: l.problem,  text: t(p.problem, locale)  },
                { label: l.result,   text: t(p.result, locale)   },
              ].map(({ label, text }) => (
                <div key={label}>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/35">{label}</span>
                  <p className="mt-0.5 leading-relaxed text-ink/68">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-end border-t border-line pt-3">
              <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/35 transition-colors group-hover:text-moss">
                {l.viewDetails}
                <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </button>
        ))}
      </div>

      <ProjectModal project={selected} locale={locale} ui={ui} onClose={close} />
    </>
  );
}
