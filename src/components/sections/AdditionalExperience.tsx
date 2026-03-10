"use client";

import { useState } from "react";
import { t } from "@/content/home";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { ExperienceModal } from "@/components/sections/ExperienceModal";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, Experience } from "@/content/types";

interface AdditionalExperienceProps {
  locale:     Locale;
  ui:         UiStrings;
  additional: Experience[];
}

function AdditionalCard({
  exp,
  locale,
  onClick,
}: {
  exp:     Experience;
  locale:  Locale;
  onClick: () => void;
}) {
  const period = `${exp.period.start.slice(0, 4)} — ${
    exp.period.end ? exp.period.end.slice(0, 4) : (locale === "zh" ? "至今" : locale === "fr" ? "Présent" : "Present")
  }`;

  return (
    <button
      onClick={onClick}
      className="group w-full text-left rounded-xl border border-[#E5E6EB] bg-white p-4 shadow-card transition duration-200 hover:-translate-y-[2px] hover:border-accent/25 hover:shadow-card-hover"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold leading-snug text-ink">
            {t(exp.org, locale)}
          </p>
          <p className="mt-0.5 text-[11.5px] font-medium text-accent">
            {t(exp.role, locale)}
          </p>
        </div>
        <span className="shrink-0 text-[10.5px] text-ink/40">{period}</span>
      </div>

      {/* One-line summary — first bullet */}
      {exp.bullets[0] && (
        <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-ink/58">
          {t(exp.bullets[0], locale)}
        </p>
      )}

      {/* Tags */}
      {exp.tags.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-1">
          {exp.tags.map((tag, i) => (
            <Badge key={i}>{t(tag, locale)}</Badge>
          ))}
        </div>
      )}

      {/* View details affordance */}
      <p className="mt-3 text-[10.5px] font-semibold text-accent/60 transition-colors duration-150 group-hover:text-accent">
        {locale === "zh" ? "查看详情 →" : locale === "fr" ? "Voir les détails →" : "View details →"}
      </p>
    </button>
  );
}

export function AdditionalExperience({ locale, ui, additional }: AdditionalExperienceProps) {
  const [selected, setSelected] = useState<Experience | null>(null);
  const s = ui.sections.additional;

  return (
    <>
      <SectionHeader title={s.title} description={s.description} />

      <div className="grid gap-4 sm:grid-cols-2">
        {additional.map((exp, i) => (
          <AdditionalCard
            key={i}
            exp={exp}
            locale={locale}
            onClick={() => setSelected(exp)}
          />
        ))}
      </div>

      <ExperienceModal
        exp={selected}
        locale={locale}
        ui={ui}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
