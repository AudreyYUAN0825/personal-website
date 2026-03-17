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
      <SectionHeader title={s.title} description={s.description} icon="briefcase" />

      <div className="grid grid-cols-2 gap-3">
        {projects.map((p, i) => (
          <button
            key={i}
            onClick={() => setSelected(p)}
            className="project-card group flex flex-col overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
          >
            {/* 1. 封面图片 — 固定高度，占比缩小 */}
            <ProjectCover slug={p.slug} coverImage={p.coverImage} className="h-[100px] shrink-0" />

            {/* 2. 项目标题 + 数据 + 查看详情 */}
            <div className="flex flex-1 flex-col p-3 md:p-4">
              <div className="mb-1.5 flex flex-wrap gap-1">
                {p.tags.map((tag, j) => (
                  <Badge key={j} variant={j === 0 ? "featured" : "default"}>
                    {t(tag, locale)}
                  </Badge>
                ))}
              </div>
              <h3 className="mb-1.5 font-display text-[13px] font-semibold leading-snug text-ink transition-colors duration-200 group-hover:text-accent">
                {t(p.title, locale)}
              </h3>

              {/* 3. 关键数据 */}
              {p.metrics && p.metrics.length > 0 && (
                <div className="mb-1 flex flex-wrap gap-2">
                  {p.metrics.slice(0, 3).map((m, j) => (
                    <div key={j} className="flex items-baseline gap-1">
                      <span className="font-display text-[14px] font-bold text-ink">{m.value}</span>
                      <span className="text-[10px] font-medium text-ink/42">{t(m.label, locale)}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* 4. 查看详情 — 问题与结果在弹窗中展示 */}
              <div className="mt-auto flex items-center justify-end pt-2">
                <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink/35 transition-colors duration-200 group-hover:text-accent">
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
