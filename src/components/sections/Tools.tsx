import { t } from "@/content/home";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, ToolItem } from "@/content/types";

interface ToolsProps { locale: Locale; ui: UiStrings; tools: ToolItem[] }

export function Tools({ locale, ui, tools }: ToolsProps) {
  const s = ui.sections.tools;
  return (
    <>
      <SectionHeader title={s.title} description={s.description} icon="sheet" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((group, i) => (
          <div
            key={i}
            className="ui-card p-5 md:p-6"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-accent/15 bg-accent/[0.07]">
                <Icon name={group.iconKey} className="h-4 w-4 text-accent" />
              </div>
              <p className="text-[13px] font-semibold text-ink/70">
                {t(group.category, locale)}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item, j) => (
                <span
                  key={j}
                  className="chip text-[12.5px]"
                >
                  {t(item, locale)}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
