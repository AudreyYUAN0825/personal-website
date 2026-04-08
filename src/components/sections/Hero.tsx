"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { t } from "@/content/home";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, HomeContent } from "@/content/types";

interface HeroProps {
  locale: Locale;
  ui:     UiStrings;
  hero:   HomeContent["hero"];
}

export function Hero({ locale, ui, hero }: HeroProps) {
  const visualRef  = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = visualRef.current?.getBoundingClientRect();
    if (!rect) return;
    const inBounds =
      e.clientX >= rect.left && e.clientX <= rect.right &&
      e.clientY >= rect.top  && e.clientY <= rect.bottom;
    if (!inBounds) { setParallax({ x: 0, y: 0 }); return; }
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const x = ((e.clientX - cx) / (rect.width  / 2)) * 8;
    const y = ((e.clientY - cy) / (rect.height / 2)) * 8;
    setParallax({ x: Math.max(-8, Math.min(8, x)), y: Math.max(-8, Math.min(8, y)) });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // 滚动后淡出提示
  useEffect(() => {
    const root = document.getElementById("scroll-root");
    if (!root) return;
    const onScroll = () => {
      if (!scrollCueRef.current) return;
      const ratio = Math.min(root.scrollTop / 80, 1);
      scrollCueRef.current.style.opacity = String(1 - ratio);
    };
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  const nameFull = t(hero.name, locale);

  // Background art text: first name only, split into chars for zh so
  // each character flanks the portrait instead of hiding behind it.
  const bgChars: string[] = locale === "zh"
    ? nameFull.slice(1).split("")   // "袁齐惠" → ["齐","惠"]
    : [nameFull.split(" ")[0]];     // "Qihui Yuan" → ["Qihui"]

  return (
    <div className="hero-section" id="top">

      {/* Aurora blobs */}
      <div className="hero-aurora-wrap" aria-hidden>
        <div className="absolute -left-20 -top-[10%] h-[680px] w-[680px] rounded-full" style={{
          background: "radial-gradient(circle,rgba(107,140,255,0.06) 0%,transparent 65%)",
          filter: "blur(56px)", animation: "aurora-drift 15s ease-in-out infinite",
        }} />
        <div className="absolute -right-16 top-[0%] h-[560px] w-[560px] rounded-full" style={{
          background: "radial-gradient(circle,rgba(107,140,255,0.04) 0%,transparent 65%)",
          filter: "blur(60px)", animation: "aurora-drift 22s ease-in-out infinite 4s",
        }} />
      </div>

      {/* Giant name — spans full section width so portrait sits between chars */}
      <div className="hero-name-behind" aria-hidden>
        {bgChars.map((ch, i) => (
          <span key={i} className={bgChars.length > 1 ? "hero-name-behind__char" : "hero-name-behind__full"}>
            {ch}
          </span>
        ))}
      </div>

      {/* ── Main grid: portrait left (55%) | text right (45%) ── */}
      <div className="hero-inner">
        <div className="hero-grid">

          {/* ── LEFT: Portrait ── */}
          <div ref={visualRef} className="hero-visual">

            {/* Light effects */}
            <div className="portrait-glow"         aria-hidden />
            <div className="portrait-light-stage"  aria-hidden />
            <div className="portrait-spectrum-arc" aria-hidden>
              <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="hero-sg" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#5B8BDE" />
                    <stop offset="50%"  stopColor="#C0B9DB" />
                    <stop offset="100%" stopColor="#E9B7D4" />
                  </linearGradient>
                </defs>
                <path d="M 0 200 A 200 200 0 0 1 400 200"
                  stroke="url(#hero-sg)" strokeWidth="120" strokeLinecap="round" />
              </svg>
            </div>

            {/* Portrait with parallax */}
            <div
              className="portrait-parallax-wrap"
              style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
            >
              <div className="portrait-entrance-wrap">
                <img
                  src={hero.portrait.src}
                  alt={t(hero.portrait.alt, locale)}
                  className="portrait-img"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="portrait-flow-mask" aria-hidden />
            </div>
          </div>

          {/* ── RIGHT: Text content ── */}
          <div className="hero-text">
            <h1 className="hero-name">{nameFull}</h1>
            <div className="hero-name-rule" aria-hidden />

            <p className="hero-subtitle">{t(hero.subtitle, locale)}</p>
            <p className="hero-description">{t(hero.description, locale)}</p>

            {hero.specialtyChips && hero.specialtyChips.length > 0 && (
              <div className="hero-chips">
                {hero.specialtyChips.map((chip, i) => (
                  <span key={i} className="hero-chip">{t(chip, locale)}</span>
                ))}
              </div>
            )}

            <div className="hero-ctas">
              <Link href="#projects" className="btn-primary hero-cta-primary">
                {ui.hero.ctaPrimary}
                <svg className="ml-1.5 inline-block h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="#experiences" className="btn-secondary">
                {ui.hero.ctaSecondary}
                <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll down indicator ── */}
      <div ref={scrollCueRef} className="hero-scroll-cue" aria-hidden="true">
        <span className="hero-scroll-cue__label">scroll down</span>
        <div className="hero-scroll-cue__arrows">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

    </div>
  );
}
