import { t } from "@/content/home";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, ToolItem } from "@/content/types";

interface ToolsProps { locale: Locale; ui: UiStrings; tools: ToolItem[] }

export function Tools({ locale, ui, tools }: ToolsProps) {
  const s = ui.sections.tools;
  return (
    <>
      <SectionHeader title={s.title} description={s.description} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((group, i) => (
          <div key={i} className="rounded-xl border border-line bg-card p-5 shadow-soft">
            <div className="mb-3 flex items-center gap-2">
              <Icon name={group.iconKey} className="h-4 w-4 text-accent" />
              <p className="text-[12px] font-semibold text-ink/70">{t(group.category, locale)}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item, j) => (
                <Badge key={j}>{t(item, locale)}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
