import { t } from "@/content/home";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, HomeContent } from "@/content/types";

interface ProfileProps { locale: Locale; ui: UiStrings; profile: HomeContent["profile"] }

export function Profile({ locale, ui, profile }: ProfileProps) {
  const s = ui.sections.profile;
  return (
    <>
      <SectionHeader title={s.title} description={s.description} icon="leadership" />
      <Card className="p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            {profile.paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-ink/70">{t(p, locale)}</p>
            ))}
          </div>
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/40">
              Current Focus
            </p>
            <ul className="space-y-2">
              {profile.focus.map((f, i) => (
                <li key={i} className="flex gap-2 text-[13px] text-ink/70">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {t(f, locale)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </>
  );
}
