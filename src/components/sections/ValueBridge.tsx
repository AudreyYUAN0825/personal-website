import { t } from "@/content/home";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, ValueBridgeItem } from "@/content/types";

interface ValueBridgeProps {
  locale:      Locale;
  ui:          UiStrings;
  valueBridge: ValueBridgeItem[];
}

export function ValueBridge({ locale, ui, valueBridge }: ValueBridgeProps) {
  const sec = ui.sections.valueBridge;

  return (
    <div>
      {/* Section header */}
      <div className="mb-6">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-moss/70">
          {ui.labels.background} → {ui.labels.businessValue}
        </p>
        <h2 className="gradient-heading font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {sec.title}
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{sec.description}</p>
      </div>

      {/* 3-column bridge cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {valueBridge.map((item, i) => (
          <div
            key={i}
            className="group flex gap-4 rounded-xl border border-line bg-gradient-to-br from-accent/[0.03] to-moss/[0.03] p-5 transition duration-300 hover:border-accent/20 hover:from-accent/[0.06] hover:to-moss/[0.06] hover:shadow-card"
          >
            {/* Icon column */}
            <div className="mt-0.5 shrink-0">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent/10 to-moss/10 transition duration-300 group-hover:from-accent/20 group-hover:to-moss/20">
                <Icon name={item.iconKey} className="h-4 w-4 text-accent transition-colors duration-300 group-hover:text-moss" />
              </div>
            </div>

            {/* Text column */}
            <div className="min-w-0">
              {/* Card title */}
              <p className="text-[13px] font-semibold leading-snug text-ink/85 transition-colors duration-300 group-hover:text-accent">
                {t(item.background, locale)}
              </p>
              {/* Description */}
              <p className="mt-1.5 text-[12px] leading-relaxed text-ink/60">
                {t(item.value, locale)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
