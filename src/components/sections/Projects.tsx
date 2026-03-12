"use client";

import { useState, useCallback } from "react";
import { t } from "@/content/home";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { ProjectCover } from "@/components/ui/ProjectCover";
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

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <button
            key={i}
            onClick={() => setSelected(p)}
            className="project-card group flex flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
          >
            {/* 1. 封面视觉 */}
            <ProjectCover slug={p.slug} />

            {/* 2. 项目标题 */}
            <div className="flex flex-col p-6 md:p-7">
              <div className="mb-3 flex flex-wrap gap-1.5">
                {p.tags.map((tag, j) => (
                  <Badge key={j} variant={j === 0 ? "featured" : "default"}>
                    {t(tag, locale)}
                  </Badge>
                ))}
              </div>
              <h3 className="mb-4 font-display text-[18px] font-semibold leading-snug text-ink transition-colors duration-200 group-hover:text-accent">
                {t(p.title, locale)}
              </h3>

              {/* 3. 关键数据 */}
              {p.metrics && p.metrics.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-4">
                  {p.metrics.slice(0, 3).map((m, j) => (
                    <div key={j} className="flex items-baseline gap-1">
                      <span className="font-display text-[20px] font-bold text-ink">{m.value}</span>
                      <span className="text-[11px] font-medium text-ink/42">{t(m.label, locale)}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* 4. 问题 / 结果简介 */}
              <div className="space-y-3 border-t border-line pt-4 text-[15px]">
                {[
                  { label: l.problem, text: t(p.problem, locale) },
                  { label: l.result,  text: t(p.result, locale)  },
                ].map(({ label, text }) => (
                  <div key={label}>
                    <span className="section-eyebrow">{label}</span>
                    <p className="mt-1.5 text-[15px] leading-[1.65] text-ink/60">{text}</p>
                  </div>
                ))}
              </div>

              {/* 5. 查看详情 */}
              <div className="mt-5 flex items-center justify-end">
                <span className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-ink/35 transition-colors duration-200 group-hover:text-accent">
                  {l.viewDetails}
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <ProjectModal project={selected} locale={locale} ui={ui} onClose={close} />
    </>
  );
}
