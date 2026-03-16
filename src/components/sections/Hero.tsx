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
  const visualRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = visualRef.current?.getBoundingClientRect();
    if (!rect) return;
    const inBounds =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;
    if (!inBounds) {
      setParallax({ x: 0, y: 0 });
      return;
    }
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = ((e.clientX - centerX) / (rect.width / 2)) * 10;
    const y = ((e.clientY - centerY) / (rect.height / 2)) * 10;
    setParallax({ x: Math.max(-10, Math.min(10, x)), y: Math.max(-10, Math.min(10, y)) });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="hero-section">

      {/* ── Layer 0: Very faint ambient blobs — must not change the bg color feel ── */}
      <div className="hero-aurora-wrap" aria-hidden>
        <div
          className="absolute -left-20 -top-[10%] h-[680px] w-[680px] rounded-full"
          style={{
            background: "radial-gradient(circle,rgba(107,140,255,0.06) 0%,transparent 65%)",
            filter: "blur(56px)",
            animation: "aurora-drift 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -right-16 top-[0%] h-[560px] w-[560px] rounded-full"
          style={{
            background: "radial-gradient(circle,rgba(107,140,255,0.04) 0%,transparent 65%)",
            filter: "blur(60px)",
            animation: "aurora-drift 22s ease-in-out infinite 4s",
          }}
        />
      </div>

      {/* ── 透明柔焦玻璃背板 + 人物与文字 ── */}
      <div className="relative w-full" style={{ zIndex: 2 }}>
        <div className="hero-glass-panel">
          <div className="hero-container grid grid-cols-1 lg:grid-cols-[55%_45%] lg:items-center lg:gap-0">

          {/* ── LEFT: Portrait — 入场动画 + 鼠标视差 ±10px ── */}
          <div ref={visualRef} className="hero-visual order-first w-full">
            <div className="portrait-glow" aria-hidden />
            <div className="portrait-light-stage" aria-hidden />
            <div className="portrait-spectrum-arc" aria-hidden>
              <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="hero-spectrum-gradient" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#7DACD6" />
                    <stop offset="50%" stopColor="#C0B9DB" />
                    <stop offset="100%" stopColor="#E9B7D4" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 200 A 200 200 0 0 1 400 200"
                  stroke="url(#hero-spectrum-gradient)"
                  strokeWidth="120"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div
              className="portrait-parallax-wrap"
              style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
            >
              <div className="portrait-entrance-wrap">
                {/* 使用原生 img 以完整保留 PNG 透明通道，避免 Next/Image 处理 */}
                <img
                  src={hero.portrait.src}
                  alt={t(hero.portrait.alt, locale)}
                  width={1536}
                  height={1536}
                  className="portrait-img"
                  loading="eager"
                  decoding="async"
                />
              </div>
              {/* 底部流光遮罩 — 从下向上渐变，底部与背景融合，向上渐淡，颜色呼应 portrait 背部 */}
              <div className="portrait-flow-mask" aria-hidden />
            </div>
          </div>

          {/* ── RIGHT: Text column ── */}
          <div
            className="hero-text order-last w-full max-w-[520px] px-6 pb-4 pt-4 sm:px-8 sm:pt-6 lg:px-10 lg:pl-6 lg:pt-6 lg:pb-10 xl:pl-8"
            style={{ zIndex: 2 }}
          >
            {/* 1. 主标题 — Noto Serif SC，咨询风格 */}
            <h1 className="hero-name">
              {t(hero.name, locale)}
            </h1>
            <div className="hero-name-rule" aria-hidden />

            {/* 2. 副标题 — 22px */}
            <p className="hero-subtitle">
              {t(hero.subtitle, locale)}
            </p>

            {/* 4. 说明行 — 16px，最多两行 */}
            <p className="hero-description">
              {t(hero.description, locale)}
            </p>

            {/* 5. 能力标签 */}
            {hero.specialtyChips && hero.specialtyChips.length > 0 && (
              <div className="hero-chips">
                {hero.specialtyChips.map((chip, i) => (
                  <span key={i} className="hero-chip">
                    {t(chip, locale)}
                  </span>
                ))}
              </div>
            )}

            {/* 6. 文字链接 — hover 下划线/颜色变化 */}
            <div className="hero-ctas">
              <Link href="#projects" className="hero-link hero-link-primary">
                {ui.hero.ctaPrimary}
              </Link>
              <Link href="#experiences" className="hero-link">
                {ui.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}
