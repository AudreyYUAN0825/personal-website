"use client";

import { useState } from "react";
import { t } from "@/content/home";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, PublicationItem } from "@/content/types";

interface PublicationsProps { locale: Locale; ui: UiStrings; publications: PublicationItem[] }

export function Publications({ locale, ui, publications }: PublicationsProps) {
  const s = ui.sections.publications;
  const [openGroup, setOpenGroup] = useState<number | null>(null);

  return (
    <>
      <SectionHeader title={s.title} description={s.description} icon="doc" />
      <Card>
        <ul className="divide-y divide-line">
          {publications.map((pub, i) => {
            const hasGroup = pub.group && pub.group.length > 0;
            const isOpen   = openGroup === i;

            return (
              <li key={i} className="px-6 py-4">
                {/* ── Main row ── */}
                <div
                  className={[
                    "flex items-start gap-4 transition",
                    hasGroup ? "cursor-pointer hover:bg-white/40 -mx-6 -my-4 px-6 py-4 rounded-none" : "hover:bg-white/40 -mx-6 -my-4 px-6 py-4",
                  ].join(" ")}
                  onClick={() => hasGroup && setOpenGroup(isOpen ? null : i)}
                  role={hasGroup ? "button" : undefined}
                  aria-expanded={hasGroup ? isOpen : undefined}
                >
                  {/* Badges */}
                  <div className="flex shrink-0 flex-wrap items-center gap-1.5 pt-0.5">
                    <Badge variant="type">{pub.type}</Badge>
                    {pub.featured && <Badge variant="featured">Featured</Badge>}
                    {hasGroup && (
                      <span className="rounded-full bg-ink/[0.06] px-1.5 py-0.5 text-[10px] font-bold text-ink/45">
                        ×{pub.group!.length}
                      </span>
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    {!hasGroup && pub.href && pub.href !== "#" ? (
                      <a
                        href={pub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-ink transition-colors hover:text-accent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t(pub.title, locale)}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-ink">{t(pub.title, locale)}</p>
                    )}
                    <p className="mt-0.5 text-[12px] text-ink/50">
                      {t(pub.outlet, locale)} · {pub.year}
                    </p>
                    <p className="mt-1 text-[12px] leading-relaxed text-ink/58">{t(pub.summary, locale)}</p>
                  </div>

                  {/* Right: chevron for expandable groups */}
                  <div className="mt-1 shrink-0 flex items-center">
                    {hasGroup && (
                      <svg
                        viewBox="0 0 16 16" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={[
                          "h-3.5 w-3.5 text-ink/35 transition-transform duration-300",
                          isOpen ? "rotate-180" : "",
                        ].join(" ")}
                      >
                        <path d="M4 6l4 4 4-4"/>
                      </svg>
                    )}
                  </div>
                </div>

                {/* ── Expandable sub-papers ── */}
                {hasGroup && (
                  <div className={[
                    "overflow-hidden transition-all duration-400 ease-in-out",
                    isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0",
                  ].join(" ")}>
                    <ul className="ml-2 flex flex-col divide-y divide-line/60 rounded-xl border border-line/60 bg-paper/60">
                      {pub.group!.map((sub, j) => (
                        <li key={j} className="flex items-start gap-3 px-4 py-3">
                          <span className="mt-0.5 shrink-0 rounded-full bg-ink/[0.06] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-ink/35">
                            {j + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            {sub.href ? (
                              <a
                                href={sub.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[12.5px] font-medium leading-snug text-ink/80 transition-colors hover:text-accent"
                              >
                                {t(sub.title, locale)}
                              </a>
                            ) : (
                              <p className="text-[12.5px] font-medium leading-snug text-ink/80">
                                {t(sub.title, locale)}
                              </p>
                            )}
                            <p className="mt-0.5 text-[11px] text-ink/40">
                              {t(sub.summary, locale)}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </Card>
    </>
  );
}
