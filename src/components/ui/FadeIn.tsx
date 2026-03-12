"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children:   React.ReactNode;
  delay?:     number;   // ms — stagger child sections
  className?: string;
}

/**
 * Reveals children with opacity 0→1 + translateY 40px→0
 * duration 0.6s, cubic-bezier(0.4, 0, 0.2, 1)
 */
export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
