"use client";

import { Modal } from "@/components/ui/Modal";
import { LightboxImage } from "@/components/ui/Lightbox";
import { Badge } from "@/components/ui/Badge";
import { t } from "@/content/home";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, Project } from "@/content/types";

interface ProjectModalProps {
  project: Project | null;
  locale:  Locale;
  ui:      UiStrings;
  onClose: () => void;
}

// ── STAR step block ──────────────────────────────────────────────────────────
function StarBlock({
  step,
  label,
  children,
  color,
}: {
  step:     string;
  label:    string;
  children: React.ReactNode;
  color:    "accent" | "moss";
}) {
  return (
    <div className="flex gap-3">
      {/* Step badge */}
      <div className="shrink-0 flex flex-col items-center gap-1">
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white ${
            color === "accent" ? "bg-accent" : "bg-moss"
          }`}
        >
          {step}
        </span>
        {/* Connector line (hidden on last item) */}
        <span className="w-px flex-1 bg-line last:hidden" />
      </div>
      {/* Content */}
      <div className="pb-5">
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/35">{label}</p>
        <div className="text-[13.5px] leading-relaxed text-ink/72">{children}</div>
      </div>
    </div>
  );
}

export function ProjectModal({ project, locale, ui, onClose }: ProjectModalProps) {
  if (!project) return null;
  const l = ui.labels;
  const gallery = project.gallery?.length ? project.gallery : ["/images/project-placeholder.svg"];

  return (
    <Modal open={!!project} onClose={onClose}>
      <div className="flex max-h-[90vh] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_64px_rgba(11,17,32,0.16)]">

        {/* ── Header bar — fixed, never scrolls ───────────────────────────── */}
        <div className="shrink-0 flex items-start justify-between border-b border-line bg-white px-6 py-4">
          <div className="flex-1 pr-4">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="type">{t(tag, locale)}</Badge>
              ))}
            </div>
            <h2 className="font-display text-[15px] font-semibold leading-snug text-ink">
              {t(project.title, locale)}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink/[0.08] text-ink/50 transition-colors hover:bg-ink/[0.14] hover:text-ink"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── Two-column body — fills remaining height, both cols scroll ── */}
        <div className="grid min-h-0 flex-1 md:grid-cols-12">

          {/* Left: STAR narrative */}
          <div className="overflow-y-auto px-6 py-6 md:col-span-7">

            {/* Key result metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="mb-6 grid grid-cols-3 gap-2.5">
                {project.metrics.map((m, i) => (
                  <div key={i} className="rounded-xl border border-line bg-paper px-3 py-3 text-center">
                    <p className="font-display text-[22px] font-bold leading-none tracking-tight text-ink">{m.value}</p>
                    <p className="mt-1 text-[10px] leading-tight text-ink/45">{t(m.label, locale)}</p>
                  </div>
                ))}
              </div>
            )}

            {/* ── S·T·A·R blocks ─────────────────────────────────────── */}
            <div>
              {/* S — Situation (uses context field) */}
              {project.context && (
                <StarBlock step="S" label={l.situation} color="accent">
                  {t(project.context, locale)}
                </StarBlock>
              )}

              {/* T — Task (uses problem field) */}
              <StarBlock step="T" label={l.task} color="accent">
                {t(project.problem, locale)}
              </StarBlock>

              {/* A — Action (uses approach field) */}
              <StarBlock step="A" label={l.action} color="moss">
                {t(project.approach, locale)}
              </StarBlock>

              {/* R — Result */}
              <StarBlock step="R" label={l.result} color="moss">
                {t(project.result, locale)}
              </StarBlock>
            </div>

            {/* Deliverables */}
            {project.deliverables && project.deliverables.length > 0 && (
              <div className="mt-2 border-t border-line pt-5">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/35">{l.deliverables}</p>
                <ul className="flex flex-col gap-1.5">
                  {project.deliverables.map((d, i) => (
                    <li key={i} className="flex gap-2 text-[13px] leading-relaxed text-ink/68">
                      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-moss/60" />
                      {t(d, locale)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ★ What this demonstrates — capability chips */}
            {project.skills && project.skills.length > 0 && (
              <div className="mt-5 rounded-xl border border-accent/15 bg-accent/[0.04] px-4 py-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-accent/70">
                  {l.demonstrates}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.skills.map((s, i) => (
                    <span
                      key={i}
                      className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${
                        i % 2 === 0
                          ? "border-accent/20 bg-accent/[0.07] text-accent"
                          : "border-moss/20 bg-moss/[0.07] text-moss"
                      }`}
                    >
                      {t(s, locale)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Artifacts */}
            {project.artifacts && project.artifacts.length > 0 && (
              <div className="mt-5">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/35">{l.artifacts}</p>
                <div className="flex flex-wrap gap-2">
                  {project.artifacts.map((a, i) => (
                    <a
                      key={i}
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-[12px] font-medium text-ink/65 transition-colors hover:border-moss/40 hover:text-moss"
                    >
                      {t(a.label, locale)}
                      <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: visual evidence */}
          <div className="hidden overflow-y-auto border-l border-line bg-paper/60 md:block md:col-span-5">
            <div className="flex flex-col gap-4 p-5">
              {gallery.map((src, i) => (
                <LightboxImage
                  key={i}
                  src={src}
                  alt=""
                  className="rounded-xl bg-line"
                  style={{ aspectRatio: "16/10" }}
                />
              ))}
              <p className="text-center text-[10px] text-ink/30">
                {locale === "zh"
                  ? "图片占位符 · 可替换为实际可视化成果"
                  : locale === "fr"
                  ? "Placeholder · remplacer par de vraies visualisations"
                  : "Placeholder · replace with actual visual evidence"}
              </p>
            </div>
          </div>

        </div>
      </div>
    </Modal>
  );
}
