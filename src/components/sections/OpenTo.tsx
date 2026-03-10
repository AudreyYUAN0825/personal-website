import { t } from "@/content/home";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, OpenToEntry } from "@/content/types";

interface OpenToProps {
  locale: Locale;
  ui:     UiStrings;
  openTo: OpenToEntry;
}

// Accent colours cycle: alternate accent/moss-tinted chips
const chipColors = [
  "bg-accent/[0.07] text-accent border-accent/15 hover:bg-accent/15",
  "bg-moss/[0.07] text-moss border-moss/15 hover:bg-moss/15",
];

export function OpenTo({ locale, ui, openTo }: OpenToProps) {
  const sec = ui.sections.openTo;

  return (
    <div>
      {/* Section header */}
      <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {/* Status badge */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-moss/20 bg-moss/[0.07] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-moss animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-moss/80">
              {locale === "zh" ? "目前开放" : locale === "fr" ? "Actuellement disponible" : "Currently Open"}
            </span>
          </div>
          <h2 className="gradient-heading font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {sec.title}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{sec.description}</p>
        </div>
        {/* Availability badge */}
        <p className="shrink-0 rounded-lg border border-line bg-white/70 px-3.5 py-2 text-[12px] font-medium text-ink/60 shadow-soft">
          {t(openTo.availability, locale)}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Role chips */}
        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-ink/40">
            {locale === "zh" ? "目标职能" : locale === "fr" ? "Fonctions visées" : "Target Roles"}
          </p>
          <div className="flex flex-wrap gap-2">
            {openTo.roles.map((role, i) => (
              <span
                key={i}
                className={`cursor-default rounded-full border px-3.5 py-1.5 text-[12px] font-medium transition-colors duration-150 ${chipColors[i % 2]}`}
              >
                {t(role, locale)}
              </span>
            ))}
          </div>
        </div>

        {/* Locations + visa note */}
        <div className="flex flex-col gap-5">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-ink/40">
              {locale === "zh" ? "工作地点" : locale === "fr" ? "Lieu de travail" : "Locations"}
            </p>
            <div className="flex flex-wrap gap-2">
              {openTo.locations.map((loc) => (
                <span
                  key={loc}
                  className="cursor-default rounded-full border border-line bg-white/70 px-3 py-1 text-[12px] font-medium text-ink/65 shadow-soft transition-colors duration-150 hover:border-accent/20 hover:bg-accent/[0.05] hover:text-accent"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Visa note */}
          <div className="rounded-xl border border-line bg-white/60 px-4 py-3.5">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink/35">
              {locale === "zh" ? "工作许可" : locale === "fr" ? "Autorisation de travail" : "Work Authorisation"}
            </p>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/65">
              {t(openTo.visaNote, locale)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
