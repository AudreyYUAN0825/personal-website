import { t } from "@/content/home";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, MediaItem } from "@/content/types";

interface MediaProps { locale: Locale; ui: UiStrings; media: MediaItem[] }

export function Media({ locale, ui, media }: MediaProps) {
  const s = ui.sections.media;
  return (
    <>
      <SectionHeader title={s.title} description={s.description} icon="newspaper" />
      <Card>
        <ul className="divide-y divide-line">
          {media.map((item, i) => (
            <li key={i} className="flex items-start gap-4 px-6 py-4 transition hover:bg-white/40">
              <div className="pt-0.5">
                <Badge variant="type">{item.type}</Badge>
              </div>
              <div className="flex-1 min-w-0">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-ink transition-colors hover:text-accent"
                  >
                    {t(item.title, locale)}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-ink">{t(item.title, locale)}</p>
                )}
                <p className="mt-0.5 text-[12px] text-ink/50">
                  {t(item.publisher, locale)} · {item.year}
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-ink/60">{t(item.context, locale)}</p>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
