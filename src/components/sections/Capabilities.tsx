import { t } from "@/content/home";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, Capability } from "@/content/types";

const ACCENT = "#5B8CFF";
const MOSS   = "#9FD8C5";
const INK    = "#14213A";

/* ── Mini SVG illustrations, one per capability ─────────────────────── */

/** 01 Rapid Learning — ascending sparkline with area fill */
const IllustrationLearning = () => (
  <svg viewBox="0 0 110 52" fill="none" className="h-full w-full" aria-hidden>
    {/* Grid */}
    {[10, 25, 40].map(y => (
      <line key={y} x1="0" y1={y} x2="110" y2={y} stroke={INK} strokeOpacity="0.06" strokeWidth="1"/>
    ))}
    {/* Area fill */}
    <polygon
      points="5,46 22,36 40,28 58,18 78,10 100,4 100,50 5,50"
      fill={ACCENT} fillOpacity="0.07"
    />
    {/* Sparkline */}
    <polyline
      points="5,46 22,36 40,28 58,18 78,10 100,4"
      stroke="url(#sparkGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    />
    {/* Dots */}
    {[{cx:5,cy:46},{cx:22,cy:36},{cx:40,cy:28},{cx:58,cy:18}].map((p,i) => (
      <circle key={i} cx={p.cx} cy={p.cy} r="3" fill={ACCENT} fillOpacity="0.6"/>
    ))}
    <circle cx="78" cy="10" r="4" fill={MOSS} fillOpacity="0.8"/>
    <circle cx="100" cy="4"  r="5" fill={MOSS}/>
    {/* Glow ring on final dot */}
    <circle cx="100" cy="4" r="9" stroke={MOSS} strokeOpacity="0.25" strokeWidth="2" fill="none"/>
    <defs>
      <linearGradient id="sparkGrad" x1="0" y1="0" x2="110" y2="0">
        <stop offset="0%"   stopColor={ACCENT}/>
        <stop offset="100%" stopColor={MOSS}/>
      </linearGradient>
    </defs>
  </svg>
);

/** 02 Strong Execution — 3-row checklist */
const IllustrationExecution = () => (
  <svg viewBox="0 0 64 54" fill="none" className="h-full w-full" aria-hidden>
    {/* Row 1 — done */}
    <rect x="0" y="1" width="64" height="14" rx="7" fill={MOSS} fillOpacity="0.12"/>
    <circle cx="7" cy="8" r="5" fill={MOSS} fillOpacity="0.25"/>
    <polyline points="4,8 6.5,10.5 11,5.5" stroke={MOSS} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="19" y="6" width="36" height="3" rx="1.5" fill={INK} fillOpacity="0.12"/>
    {/* Row 2 — done */}
    <rect x="0" y="20" width="64" height="14" rx="7" fill={MOSS} fillOpacity="0.09"/>
    <circle cx="7" cy="27" r="5" fill={MOSS} fillOpacity="0.20"/>
    <polyline points="4,27 6.5,29.5 11,24.5" stroke={MOSS} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="19" y="25" width="28" height="3" rx="1.5" fill={INK} fillOpacity="0.10"/>
    {/* Row 3 — in progress */}
    <rect x="0" y="39" width="64" height="14" rx="7" fill={ACCENT} fillOpacity="0.07"/>
    <circle cx="7" cy="46" r="5" stroke={ACCENT} strokeWidth="1.5" strokeOpacity="0.4" fill="none"/>
    {/* Progress bar */}
    <rect x="19" y="43" width="40" height="5" rx="2.5" fill={INK} fillOpacity="0.06"/>
    <rect x="19" y="43" width="26" height="5" rx="2.5" fill={ACCENT} fillOpacity="0.4"/>
  </svg>
);

/** 03 Logical Thinking — decision tree */
const IllustrationLogic = () => (
  <svg viewBox="0 0 64 56" fill="none" className="h-full w-full" aria-hidden>
    {/* Root node */}
    <rect x="18" y="2" width="28" height="14" rx="5"
      fill={ACCENT} fillOpacity="0.13" stroke={ACCENT} strokeOpacity="0.35" strokeWidth="1.2"/>
    <line x1="32" y1="4" x2="32" y2="6" stroke={ACCENT} strokeOpacity="0" strokeWidth="0"/>
    {/* Down arrow */}
    <line x1="32" y1="16" x2="32" y2="26" stroke={INK} strokeOpacity="0.2" strokeWidth="1.5"/>
    {/* Diamond */}
    <polygon points="32,26 46,36 32,46 18,36"
      fill="none" stroke={ACCENT} strokeOpacity="0.5" strokeWidth="1.2"/>
    <text x="32" y="39" textAnchor="middle" fontSize="7" fill={ACCENT} fillOpacity="0.55" fontFamily="sans-serif">IF</text>
    {/* Left branch — YES */}
    <line x1="18" y1="36" x2="6" y2="36" stroke={MOSS} strokeOpacity="0.5" strokeWidth="1.5"/>
    <line x1="6"  y1="36" x2="6" y2="50" stroke={MOSS} strokeOpacity="0.5" strokeWidth="1.5"/>
    <circle cx="6" cy="51" r="4" fill={MOSS} fillOpacity="0.6"/>
    <text x="6" y="38.5" textAnchor="middle" fontSize="5.5" fill={MOSS} fillOpacity="0.7" fontFamily="sans-serif">Y</text>
    {/* Right branch — NO */}
    <line x1="46" y1="36" x2="58" y2="36" stroke={ACCENT} strokeOpacity="0.4" strokeWidth="1.5"/>
    <line x1="58" y1="36" x2="58" y2="50" stroke={ACCENT} strokeOpacity="0.4" strokeWidth="1.5"/>
    <circle cx="58" cy="51" r="4" fill={ACCENT} fillOpacity="0.5"/>
    <text x="58" y="38.5" textAnchor="middle" fontSize="5.5" fill={ACCENT} fillOpacity="0.7" fontFamily="sans-serif">N</text>
  </svg>
);

/** 04 Collaboration — network / node graph */
const IllustrationCollaboration = () => (
  <svg viewBox="0 0 70 56" fill="none" className="h-full w-full" aria-hidden>
    {/* Edges (dashed) */}
    {[
      [35,28, 10,10], [35,28, 60,10], [35,28, 10,48], [35,28, 60,48],
      [10,10, 60,10],
    ].map(([x1,y1,x2,y2],i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={INK} strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="3 2"/>
    ))}
    {/* Satellite nodes */}
    {[{cx:10,cy:10,r:8,f:MOSS,fo:0.18,s:MOSS,so:0.4},
      {cx:60,cy:10,r:8,f:MOSS,fo:0.14,s:MOSS,so:0.35},
      {cx:10,cy:48,r:7,f:ACCENT,fo:0.12,s:ACCENT,so:0.3},
      {cx:60,cy:48,r:7,f:ACCENT,fo:0.12,s:ACCENT,so:0.3},
    ].map((n,i) => (
      <circle key={i} cx={n.cx} cy={n.cy} r={n.r}
        fill={n.f} fillOpacity={n.fo} stroke={n.s} strokeOpacity={n.so} strokeWidth="1.5"/>
    ))}
    {/* Center hub */}
    <circle cx="35" cy="28" r="12" fill={ACCENT} fillOpacity="0.12" stroke={ACCENT} strokeOpacity="0.5" strokeWidth="1.8"/>
    <circle cx="35" cy="28" r="5"  fill={ACCENT} fillOpacity="0.5"/>
    {/* Pulse ring */}
    <circle cx="35" cy="28" r="17" stroke={ACCENT} strokeOpacity="0.15" strokeWidth="1.5" fill="none" strokeDasharray="4 3"/>
  </svg>
);

/** 05 Leadership — growing bar chart with upward arrow */
const IllustrationLeadership = () => (
  <svg viewBox="0 0 64 52" fill="none" className="h-full w-full" aria-hidden>
    {/* Bars */}
    {[{x:2, h:12,f:ACCENT,fo:0.2},{x:15,h:22,f:ACCENT,fo:0.35},
      {x:28,h:34,f:MOSS,fo:0.45},{x:41,h:44,f:MOSS,fo:0.65}].map((b,i) => (
      <rect key={i} x={b.x} y={50-b.h} width="11" height={b.h} rx="3"
        fill={b.f} fillOpacity={b.fo}/>
    ))}
    {/* Trend line */}
    <polyline points="7,40 20,30 33,18 46,8"
      stroke="url(#leaderGrad)" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2"/>
    {/* Arrow tip */}
    <polyline points="42,11 46,7 50,11"
      stroke={MOSS} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Star */}
    <polygon points="56,4 57.5,8.5 62,8.5 58.5,11 60,15.5 56,13 52,15.5 53.5,11 50,8.5 54.5,8.5"
      fill={MOSS} fillOpacity="0.6"/>
    <defs>
      <linearGradient id="leaderGrad" x1="0" y1="0" x2="64" y2="0">
        <stop offset="0%"   stopColor={ACCENT}/>
        <stop offset="100%" stopColor={MOSS}/>
      </linearGradient>
    </defs>
  </svg>
);

const ILLUSTRATIONS = [
  IllustrationLearning,
  IllustrationExecution,
  IllustrationLogic,
  IllustrationCollaboration,
  IllustrationLeadership,
];

/* ── Card configs ───────────────────────────────────────────────────── */
const CARD_CONFIG = [
  { cols: "md:col-span-4", bg: "bg-gradient-to-br from-accent/[0.05] to-transparent",  border: "border-accent/15",  iconBg: "from-accent/12 to-mint/8",   iconColor: "text-accent", hero: true  },
  { cols: "md:col-span-2", bg: "bg-gradient-to-br from-mint/[0.06] to-transparent",    border: "border-mint/20",    iconBg: "from-mint/15 to-accent/6",   iconColor: "text-mint",   hero: false },
  { cols: "md:col-span-2", bg: "bg-transparent",                                        border: "border-line",       iconBg: "from-accent/8 to-accent/4",  iconColor: "text-accent", hero: false },
  { cols: "md:col-span-2", bg: "bg-gradient-to-br from-gold/[0.05] to-transparent",    border: "border-gold/20",    iconBg: "from-gold/12 to-mint/6",     iconColor: "text-accent", hero: false },
  { cols: "md:col-span-2", bg: "bg-gradient-to-br from-lavender/[0.06] to-transparent",border: "border-lavender/20",iconBg: "from-lavender/12 to-mint/5", iconColor: "text-accent", hero: false },
] as const;

interface CapabilitiesProps { locale: Locale; ui: UiStrings; capabilities: Capability[] }

export function Capabilities({ locale, ui, capabilities }: CapabilitiesProps) {
  const s = ui.sections.capabilities;

  return (
    <>
      <SectionHeader title={s.title} description={s.description} icon="spark" />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
        {capabilities.map((c, i) => {
          const cfg = CARD_CONFIG[i] ?? CARD_CONFIG[2];
          const ordinal = String(i + 1).padStart(2, "0");
          const Illustration = ILLUSTRATIONS[i];

          return (
            <div
              key={i}
              className={[
                "group relative overflow-hidden rounded-[24px] border backdrop-blur-glass transition-all duration-[420ms]",
                "hover:-translate-y-[3px] hover:shadow-hover",
                "bg-[rgba(255,255,255,0.55)]",
                cfg.cols, cfg.bg, cfg.border,
                cfg.hero ? "p-6" : "p-5",
              ].join(" ")}
            >
              {/* ── Hero card: side-by-side layout ── */}
              {cfg.hero ? (
                <div className="flex h-full flex-col justify-between gap-4 sm:flex-row sm:items-start sm:gap-6">
                  {/* Left text */}
                  <div className="flex-1">
                    {/* Ordinal */}
                    <span className="mb-3 block font-display text-[11px] font-bold tracking-[0.18em] text-accent/50">
                      {ordinal}
                    </span>
                    {/* Icon */}
                    <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br transition duration-300 group-hover:scale-110 ${cfg.iconBg}`}>
                      <Icon name={c.iconKey} className={`h-5 w-5 transition duration-300 group-hover:rotate-3 ${cfg.iconColor}`}/>
                    </div>
                    <h3 className="font-display text-[15px] font-semibold leading-snug text-ink">
                      {t(c.label, locale)}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink/58">
                      {t(c.description, locale)}
                    </p>
                  </div>
                  {/* Right illustration */}
                  <div className="h-[88px] w-full shrink-0 sm:h-[110px] sm:w-[140px]">
                    {Illustration && <Illustration />}
                  </div>
                </div>
              ) : (
                /* ── Compact card ── */
                <div>
                  {/* Top row: ordinal + illustration */}
                  <div className="mb-3 flex items-start justify-between">
                    <span className="font-display text-[10px] font-bold tracking-[0.18em] opacity-40">
                      {ordinal}
                    </span>
                    <div className="h-[52px] w-[64px] opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                      {Illustration && <Illustration />}
                    </div>
                  </div>
                  {/* Icon */}
                  <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br transition duration-300 group-hover:scale-110 ${cfg.iconBg}`}>
                    <Icon name={c.iconKey} className={`h-4 w-4 transition duration-300 group-hover:rotate-3 ${cfg.iconColor}`}/>
                  </div>
                  <h3 className="font-display text-[13px] font-semibold leading-snug text-ink">
                    {t(c.label, locale)}
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-ink/55">
                    {t(c.description, locale)}
                  </p>
                </div>
              )}

              {/* Bottom accent bar on hero card */}
              {cfg.hero && (
                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-accent via-moss to-transparent opacity-25 transition-opacity duration-300 group-hover:opacity-55" />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
