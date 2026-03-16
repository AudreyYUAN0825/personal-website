import { t } from "@/content/home";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, WorkingStyleItem } from "@/content/types";

interface WorkingStyleProps {
  locale:       Locale;
  ui:           UiStrings;
  workingStyle: WorkingStyleItem[];
}

export function WorkingStyle({ locale, ui, workingStyle }: WorkingStyleProps) {
  const sec = ui.sections.workingStyle;

  return (
    <div>
      {/* Section header */}
      <div className="mb-6">
        <h2 className="gradient-heading font-display text-2xl font-semibold tracking-tight sm:text-3xl flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Icon name="execution" className="h-4 w-4" />
          </span>
          {sec.title}
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{sec.description}</p>
      </div>

      {/* 2×2 grid of principle cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {workingStyle.map((item, i) => (
          <div
            key={i}
            className="group flex gap-4 rounded-xl border border-[#E5E6EB] bg-white p-5 shadow-card transition duration-300 hover:-translate-y-[2px] hover:border-accent/20 hover:shadow-card-hover"
          >
            <div className="mt-0.5 shrink-0">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent/[0.08] to-moss/[0.08] transition duration-300 group-hover:from-accent/15 group-hover:to-moss/15">
                <Icon
                  name={item.iconKey}
                  className="h-4 w-4 text-accent transition-all duration-300 group-hover:rotate-6 group-hover:text-moss"
                />
              </div>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-ink">
                {t(item.principle, locale)}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/55">
                {t(item.description, locale)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
