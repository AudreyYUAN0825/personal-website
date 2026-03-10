"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children:  React.ReactNode;
  delay?:    number;   // ms
  className?: string;
}

/**
 * Wraps children in a div that fades + slides up when it enters the viewport.
 * Uses IntersectionObserver — no deps needed, works in all modern browsers.
 */
export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("fade-up", className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
