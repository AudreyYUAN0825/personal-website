"use client";

import { useEffect, useRef, useState } from "react";
import { t } from "@/content/home";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, Metric } from "@/content/types";

interface MetricsProps {
  locale:  Locale;
  ui:      UiStrings;
  metrics: Metric[];
}

// ── Parse numeric value for animation ────────────────────────────────────────
function parseMetricValue(raw: string): { num: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)/);
  if (!match) return { num: 0, suffix: raw };
  return { num: parseInt(match[1], 10), suffix: match[2] ?? "" };
}

// ── Animated number hook ──────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1200, triggered: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    if (target === 0) return;

    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, triggered]);

  return value;
}

// ── Single metric card ────────────────────────────────────────────────────────
function MetricCard({ m, locale }: { m: Metric; locale: Locale }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { num, suffix } = parseMetricValue(m.value);
  const animated = useCountUp(num, 1000, triggered);

  return (
    <div
      ref={cardRef}
      className="group flex flex-col gap-1.5 rounded-xl border border-[#E5E6EB] bg-white px-6 py-5 shadow-card transition duration-300 hover:-translate-y-[2px] hover:shadow-card-hover"
    >
      <Icon
        name={m.iconKey}
        className="icon-pulse h-[15px] w-[15px] text-moss"
      />
      <p className="mt-1 font-space text-[32px] font-bold leading-none tracking-[-0.04em] text-ink">
        {triggered ? `${animated}${suffix}` : "0"}
      </p>
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/50">
        {t(m.label, locale)}
      </p>
      <p className="text-[10.5px] leading-relaxed text-ink/40">
        {t(m.context, locale)}
      </p>
    </div>
  );
}

export function Metrics({ locale, ui, metrics }: MetricsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {metrics.map((m, i) => (
        <MetricCard key={i} m={m} locale={locale} />
      ))}
    </div>
  );
}
