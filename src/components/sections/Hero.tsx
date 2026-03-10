import Image from "next/image";
import Link from "next/link";
import { t } from "@/content/home";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, HomeContent } from "@/content/types";

interface HeroProps {
  locale: Locale;
  ui:     UiStrings;
  hero:   HomeContent["hero"];
}

// ── Button styles ────────────────────────────────────────────────────────────
const btnPrimary =
  "inline-flex items-center justify-center rounded-[10px] bg-gradient-to-r from-accent to-moss px-5 py-[11px] text-[13px] font-semibold tracking-[0.01em] text-white shadow-brand transition-all duration-200 hover:-translate-y-px hover:from-moss hover:to-accent hover:shadow-brand-hover active:translate-y-0";

const btnSecondary =
  "inline-flex items-center justify-center rounded-[10px] border border-accent/25 bg-transparent px-5 py-[11px] text-[13px] font-semibold tracking-[0.01em] text-accent transition-all duration-150 hover:border-accent/50 hover:bg-accent/[0.05]";

// ── Snapshot chip ────────────────────────────────────────────────────────────
function Chip({ label, value }: { label: string; value: string }) {
  return (
    <div className="group flex cursor-default flex-col gap-0.5 rounded-lg px-2.5 py-2 transition-colors duration-200 hover:bg-accent/[0.06]">
      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink/30 transition-colors duration-200 group-hover:text-accent/60">
        {label}
      </span>
      <span className="text-[11px] font-medium text-ink/65 transition-colors duration-200 group-hover:text-accent">
        {value}
      </span>
    </div>
  );
}

// ── GTM process accent card ──────────────────────────────────────────────────

// ── Snapshot labels ──────────────────────────────────────────────────────────
const snapLabels: Record<Locale, { lang: string; mkt: string; focus: string; exp: string }> = {
  zh: { lang: "语言", mkt: "市场", focus: "专注领域", exp: "国际经历" },
  en: { lang: "Languages", mkt: "Markets", focus: "Focus", exp: "Engagements" },
  fr: { lang: "Langues", mkt: "Marchés", focus: "Domaines", exp: "Missions" },
};

export function Hero({ locale, ui, hero }: HeroProps) {
  const cv = ui.cv;
  const sn = snapLabels[locale];

  return (
    <div className="relative overflow-hidden">

      {/* ── Layer A: diagonal base gradient (handled by .hero-bg on Section) ── */}

      {/* ── Layer B: world map watermark ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/*
          Desktop: right-aligned, 900px wide, rotated -8deg, 6.5% opacity.
          Mobile:  centred, slightly smaller, same opacity.
          mix-blend-mode: multiply → dark ink tints light background subtly.
          filter: blur(0.8px) → soft watermark feel, no hard edges.
        */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/world-map.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "860px auto",
            backgroundPosition: "right -30px center",
            opacity: 0.065,
            transform: "rotate(-8deg) scale(1.12)",
            filter: "blur(0.8px)",
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* ── Layer C: radial glow behind name ── */}
      <div
        className="pointer-events-none absolute -left-10 top-[10%] h-[340px] w-[340px] rounded-full bg-[#165DFF]/[0.06] blur-3xl"
        style={{ animation: "blob 22s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -bottom-12 -right-8 h-72 w-72 rounded-full bg-[#00C48C]/[0.05] blur-3xl"
        style={{ animation: "blob 26s ease-in-out infinite 4s" }}
      />

      <div className="relative grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-14">

        {/* ── Portrait + GTM card — RIGHT on desktop, TOP on mobile ── */}
        <div className="order-1 flex flex-col gap-3 md:order-last md:col-span-4">
          {/* Portrait — constrained max-width so it never overwhelms the layout */}
          <div className="mx-auto w-[180px] overflow-hidden rounded-2xl border border-white/50 bg-white/80 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:w-[210px] md:w-full md:max-w-[220px] lg:max-w-[240px]">
            <div className="relative aspect-[3/4]">
              <Image
                src={hero.portrait.src}
                alt={t(hero.portrait.alt, locale)}
                fill
                sizes="(max-width: 640px) 180px, (max-width: 768px) 210px, 240px"
                className="object-cover object-[center_10%]"
                priority
              />
            </div>
            <div className="border-t border-line bg-white/70 px-4 py-3">
              <p className="font-display text-[13px] font-semibold leading-tight text-ink">
                {t(hero.name, locale)}
              </p>
              <p className="mt-0.5 line-clamp-1 text-[11px] leading-snug text-ink/48">
                {t(hero.role, locale)}
              </p>
            </div>
          </div>
        </div>

        {/* ── Text column — LEFT on desktop, SECOND on mobile ── */}
        <div className="order-2 md:order-first md:col-span-8">
          {/* Kicker */}
          <p className="mb-4 text-[10.5px] font-bold uppercase tracking-[0.24em] text-ink/28">
            {ui.hero.kicker}
          </p>

          {/* Name — gradient text */}
          <h1 className="gradient-heading font-display text-[34px] font-bold leading-[1.05] tracking-[-0.025em] sm:text-[44px] lg:text-[52px]">
            {t(hero.name, locale)}
          </h1>

          {/* Positioning line */}
          <p className="mt-4 text-[14px] font-semibold leading-snug text-accent sm:text-[15px]">
            {t(hero.role, locale)}
          </p>

          {/* Specialty domain chips */}
          {hero.specialtyChips && hero.specialtyChips.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {hero.specialtyChips.map((chip, i) => (
                <span
                  key={i}
                  className={`cursor-default rounded-full border px-2.5 py-0.5 text-[10.5px] font-semibold tracking-wide transition-colors duration-150 ${
                    i % 2 === 0
                      ? "border-accent/20 bg-accent/[0.07] text-accent hover:bg-accent/15"
                      : "border-moss/20 bg-moss/[0.07] text-moss hover:bg-moss/15"
                  }`}
                >
                  {t(chip, locale)}
                </span>
              ))}
            </div>
          )}

          {/* Tagline */}
          <p className="mt-3 max-w-[440px] text-[14.5px] leading-[1.75] text-ink/60">
            {t(hero.tagline, locale)}
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="#projects" className={btnPrimary}>
              {ui.hero.ctaPrimary}
            </Link>
            <Link href="#experiences" className={btnSecondary}>
              {ui.hero.ctaSecondary}
            </Link>
          </div>

          {/* Snapshot strip — desktop only */}
          <div className="mt-7 hidden border-t border-line pt-5 md:block">
            <div className="grid grid-cols-4 gap-1">
              <Chip label={sn.lang}  value={ui.hero.snapshotLanguages} />
              <Chip label={sn.mkt}   value={ui.hero.snapshotMarkets}   />
              <Chip label={sn.focus} value={ui.hero.snapshotFocus}     />
              <Chip label={sn.exp}   value={ui.hero.snapshotExp}       />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
