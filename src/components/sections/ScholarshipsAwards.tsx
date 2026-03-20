"use client";

import type { Locale } from "@/lib/i18n";
import type { ScholarshipAwardEntry, UiStrings } from "@/content/types";
import { t } from "@/content/home";
import { Icon } from "@/components/ui/Icon";

interface ScholarshipsAwardsProps {
  locale: Locale;
  ui: UiStrings;
  entries: ScholarshipAwardEntry[];
}

const ENTRY_STYLES: Record<string, { border: string; level: string; dot: string }> = {
  "csc-international-reserve": {
    border: "border-accent/18 hover:border-accent/28",
    level:  "bg-accent/[0.07] text-accent border-accent/18",
    dot:    "bg-accent",
  },
  "nankai-student-service": {
    border: "border-moss/20 hover:border-moss/35",
    level:  "bg-moss/[0.07] text-moss border-moss/18",
    dot:    "bg-moss",
  },
};
const DEFAULT_STYLE = ENTRY_STYLES["csc-international-reserve"];

export function ScholarshipsAwards({ locale, ui, entries }: ScholarshipsAwardsProps) {
  const sec = ui.sections.scholarshipsAwards;

  return (
    <div>
      {/* 标题区：与其它板块一致的图标 + 文案 */}
      <div className="mb-8 flex gap-4">
        <div className="mt-1 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/15 bg-gradient-to-br from-accent/[0.08] to-moss/[0.08] shadow-sm">
            <Icon name="leadership" className="h-5 w-5 text-accent" />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="section-eyebrow mb-3">{ui.nav.scholarships}</p>
          <h2 className="section-title">{sec.title}</h2>
          {sec.description && (
            <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-ink/55">{sec.description}</p>
          )}
        </div>
      </div>

      {/* 并排小卡片（约原尺寸一半密度） */}
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:gap-5">
        {entries.map((entry) => {
          const st = ENTRY_STYLES[entry.id] ?? DEFAULT_STYLE;
          const paragraphs = entry.paragraphs.map((p) => t(p, locale));

          return (
            <li key={entry.id} className="min-w-0">
              <article
                className={[
                  "ui-card flex h-full flex-col border px-4 py-4 transition-shadow duration-300 md:px-5 md:py-4",
                  st.border,
                ].join(" ")}
              >
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="shrink-0 rounded-full border border-line bg-white/60 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-ink/40">
                    {t(entry.period, locale)}
                  </span>
                  <span className={["chip shrink-0 border py-0.5 text-[10px]", st.level].join(" ")}>
                    {t(entry.level, locale)}
                  </span>
                </div>

                <h3 className="mt-2.5 font-display text-[14px] font-bold leading-snug text-ink md:text-[15px]">
                  {t(entry.title, locale)}
                </h3>

                <div className="mt-3 flex flex-col gap-2">
                  {paragraphs.map((text, i) => (
                    <p key={i} className="flex gap-2 text-[12px] leading-[1.6] text-ink/58">
                      <span className={["mt-1.5 h-1 w-1 shrink-0 rounded-full opacity-70", st.dot].join(" ")} />
                      <span>{text}</span>
                    </p>
                  ))}
                </div>

                {entry.href && entry.linkLabel && (
                  <p className="mt-auto pt-3">
                    <a
                      href={entry.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      🔗 {t(entry.linkLabel, locale)}
                      <span className="font-normal text-ink/35">↗</span>
                    </a>
                  </p>
                )}
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
