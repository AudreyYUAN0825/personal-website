"use client";

import { useEffect, useRef } from "react";

/**
 * 自定义鼠标光标
 *  - 小实心圆点：精确跟随
 *  - 大轮廓环：带惯性延迟（lerp）
 *  - 悬浮可点击元素：点消失，环放大 + 淡填充
 *  - 仅在精确指针设备（鼠标/触控板）上激活
 */
export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 触屏设备不启用
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot  = dotRef.current!;
    const ring = ringRef.current!;

    let mouseX = -200, mouseY = -200;
    let ringX  = -200, ringY  = -200;
    let rafId: number;
    let visible = false;

    /* ── 精确跟随鼠标 ── */
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      if (!visible) {
        dot.style.opacity  = "1";
        ring.style.opacity = "1";
        visible = true;
      }
    };

    /* ── 环带惯性 lerp ── */
    const tick = () => {
      ringX += (mouseX - ringX) * 0.13;
      ringY += (mouseY - ringY) * 0.13;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      rafId = requestAnimationFrame(tick);
    };

    /* ── 交互元素检测 ── */
    const INTERACTIVE = 'a, button, [role="button"], input, select, textarea, label, [tabindex]:not([tabindex="-1"]), .hero-chip';

    const onOver = (e: MouseEvent) => {
      const el = (e.target as Element).closest(INTERACTIVE);
      // hero-chip 不可点击，排除掉
      const isChip = (e.target as Element).closest(".hero-chip");
      if (el && !isChip) {
        dot.classList.add("cursor-dot--hover");
        ring.classList.add("cursor-ring--hover");
      } else {
        dot.classList.remove("cursor-dot--hover");
        ring.classList.remove("cursor-ring--hover");
      }
    };

    /* ── 鼠标离开窗口隐藏 ── */
    const onLeave = () => {
      dot.style.opacity  = "0";
      ring.style.opacity = "0";
      visible = false;
    };
    const onEnter = () => {
      if (visible) {
        dot.style.opacity  = "1";
        ring.style.opacity = "1";
      }
    };

    document.addEventListener("mousemove",  onMove,  { passive: true });
    document.addEventListener("mouseover",  onOver,  { passive: true });
    document.addEventListener("mouseleave", onLeave, { passive: true });
    document.addEventListener("mouseenter", onEnter, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
