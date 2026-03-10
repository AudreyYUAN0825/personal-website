"use client";

import { Modal } from "@/components/ui/Modal";
import { LightboxImage } from "@/components/ui/Lightbox";
import { Badge } from "@/components/ui/Badge";
import { t } from "@/content/home";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, Experience } from "@/content/types";

interface ExperienceModalProps {
  exp:     Experience | null;
  locale:  Locale;
  ui:      UiStrings;
  onClose: () => void;
}

function formatPeriod(start: string, end: string | null, locale: Locale): string {
  const fmt = (s: string) => {
    const [y, m] = s.split("-");
    return locale === "zh" ? `${y}年${m}月` : `${y}/${m}`;
  };
  const endStr = end
    ? fmt(end)
    : locale === "zh" ? "至今" : locale === "fr" ? "Présent" : "Present";
  return `${fmt(start)} — ${endStr}`;
}

// Section label + content block
function Block({
  label,
  highlight = false,
  children,
}: {
  label:      string;
  highlight?: boolean;
  children:   React.ReactNode;
}) {
  return (
    <div>
      <p className={`mb-2 text-[10px] font-bold uppercase tracking-[0.18em] ${highlight ? "text-accent/70" : "text-ink/35"}`}>
        {label}
      </p>
      <div className="text-[13.5px] leading-relaxed text-ink/72">{children}</div>
    </div>
  );
}

// Hairline divider
function Divider() {
  return <div className="border-t border-line" />;
}

export function ExperienceModal({ exp, locale, ui, onClose }: ExperienceModalProps) {
  if (!exp) return null;
  const l      = ui.labels;
  const gallery = exp.gallery?.length ? exp.gallery : ["/images/exp-placeholder.svg"];

  return (
    <Modal open={!!exp} onClose={onClose}>
      <div className="flex max-h-[90vh] flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-[0_24px_64px_rgba(11,17,32,0.16)]">

        {/* ── Header bar — fixed, never scrolls ───────────────────────────── */}
        <div className="shrink-0 flex items-start justify-between border-b border-line bg-card/80 px-6 py-4">
          <div className="flex-1 pr-4">
            {/* Period + location in muted micro text */}
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/35">
              {formatPeriod(exp.period.start, exp.period.end, locale)}
              {" · "}
              {t(exp.location, locale)}
            </p>
            {/* Org name */}
            <p className="font-display text-[16px] font-semibold leading-tight text-ink">
              {t(exp.org, locale)}
            </p>
            {/* Role title — accented, below org */}
            <p className="mt-0.5 text-[13px] font-medium text-accent">
              {t(exp.role, locale)}
            </p>
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

        {/* ── Tags row — fixed ────────────────────────────────────────────── */}
        {exp.tags.length > 0 && (
          <div className="shrink-0 flex flex-wrap gap-1.5 border-b border-line/60 px-6 py-2.5">
            {exp.tags.map((tag, i) => <Badge key={i}>{t(tag, locale)}</Badge>)}
          </div>
        )}

        {/* ── Two-column body — fills remaining height, both cols scroll ── */}
        <div className="grid min-h-0 flex-1 md:grid-cols-12">

          {/* Left: job-record narrative */}
          <div className="overflow-y-auto px-6 py-6 md:col-span-7">

            {/* ① Key metrics — if available */}
            {exp.metrics && exp.metrics.length > 0 && (
              <>
                <div className="grid grid-cols-3 gap-2.5">
                  {exp.metrics.map((m, i) => (
                    <div key={i} className="rounded-xl border border-line bg-paper px-3 py-3 text-center">
                      <p className="font-display text-[22px] font-bold leading-none tracking-tight text-ink">{m.value}</p>
                      <p className="mt-1 text-[10px] leading-tight text-ink/45">{t(m.label, locale)}</p>
                    </div>
                  ))}
                </div>
                <Divider />
              </>
            )}

            <div className="flex flex-col gap-5">

              {/* ② Role Overview — what this position was about */}
              {exp.context && (
                <Block label={l.roleOverview} highlight>
                  {t(exp.context, locale)}
                </Block>
              )}

              {/* ③ Responsibilities — the bullets from the card (what I was accountable for) */}
              {exp.bullets && exp.bullets.length > 0 && (
                <>
                  <Divider />
                  <Block label={l.responsibilities}>
                    <ul className="flex flex-col gap-1.5 pt-0.5">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                          {t(b, locale)}
                        </li>
                      ))}
                    </ul>
                  </Block>
                </>
              )}

              {/* ④ Key Contributions — detailed activities (approach field) */}
              {exp.approach && (
                <>
                  <Divider />
                  <Block label={l.contributions} highlight>
                    {t(exp.approach, locale)}
                  </Block>
                </>
              )}

              {/* ⑤ Achievements & Impact */}
              {exp.impact && (
                <>
                  <Divider />
                  <Block label={l.achievements}>
                    {t(exp.impact, locale)}
                  </Block>
                </>
              )}

              {/* ⑥ Deliverables */}
              {exp.deliverables && exp.deliverables.length > 0 && (
                <>
                  <Divider />
                  <Block label={l.deliverables}>
                    <ul className="flex flex-col gap-1.5 pt-0.5">
                      {exp.deliverables.map((d, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-moss/50" />
                          {t(d, locale)}
                        </li>
                      ))}
                    </ul>
                  </Block>
                </>
              )}

              {/* ⑦ Skills demonstrated */}
              {exp.skills && exp.skills.length > 0 && (
                <>
                  <Divider />
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/35">{l.skills}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((s, i) => (
                        <Badge key={i} variant="type">{t(s, locale)}</Badge>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* ⑧ Artifacts / links */}
              {exp.artifacts && exp.artifacts.length > 0 && (
                <>
                  <Divider />
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/35">{l.artifacts}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.artifacts.map((a, i) => (
                        <a
                          key={i}
                          href={a.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-[12px] font-medium text-ink/65 transition-colors hover:border-accent/40 hover:text-accent"
                        >
                          {t(a.label, locale)}
                          <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}

            </div>
          </div>

          {/* Right: gallery */}
          <div className="hidden overflow-y-auto border-l border-line bg-paper/60 md:block md:col-span-5">
            <div className="flex flex-col gap-4 p-5">
              {gallery.map((src, i) => (
                <LightboxImage
                  key={i}
                  src={src}
                  alt=""
                  className="rounded-xl bg-line"
                  style={{ aspectRatio: "4/3" }}
                />
              ))}
              <p className="text-center text-[10px] text-ink/30">
                {locale === "zh"
                  ? "图片占位符 · 可替换为实际截图"
                  : locale === "fr"
                  ? "Placeholder · remplacer par de vraies captures"
                  : "Placeholder · replace with actual screenshots"}
              </p>
            </div>
          </div>

        </div>
      </div>
    </Modal>
  );
}
