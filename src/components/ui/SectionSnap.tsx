"use client";

import { useEffect, useRef } from "react";

/**
 * 章节吸附 — 方向感知版
 *
 * 原则：
 *  - 不拦截原生滚动（no preventDefault），手势完全丝滑。
 *  - 滚动静止后 220ms 检查位置。
 *  - 只在"章节顶部即将进入视口"或"刚刚进入视口 < ENTRY_PX"时吸附。
 *    已经滚进章节内部（距顶部 > ENTRY_PX）则绝不往回拽。
 *  - CSS scroll-snap-type 已关闭，由本组件统一管理。
 */

const SECTION_IDS = [
  "top",
  "projects",
  "experiences",
  "education",
  "scholarships",
  "publications",
  "media",
  "additional",
  "tools",
  "value-bridge",
  "working-style",
  "contact",
];

/** 向下滚动时，章节顶部进入视口后超过多少 px 就不再往回吸附 */
const ENTRY_PX = 80;

/** 向上/向下：章节顶部距视口顶多少 px 以内触发吸附 */
const SNAP_AHEAD_PX_RATIO = 0.38; // 视口高度的 38%

/** 滚动停止后多少 ms 执行吸附 */
const SETTLE_MS = 220;

export function SectionSnap() {
  const timerRef    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const snappingRef = useRef(false);

  useEffect(() => {
    const root = document.getElementById("scroll-root");
    if (!root) return;

    const getSections = () =>
      SECTION_IDS
        .map(id => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

    const snapToNearest = () => {
      if (snappingRef.current) return;
      const sections = getSections();
      if (!sections.length) return;

      const scrollTop   = root.scrollTop;
      const vh          = root.clientHeight;
      const snapAheadPx = vh * SNAP_AHEAD_PX_RATIO;

      let bestEl: HTMLElement | null = null;
      let bestDist = Infinity;

      for (const sec of sections) {
        // 章节顶部距滚动容器顶部的像素距离（负 = 已经滚过去了）
        const distFromViewportTop = sec.offsetTop - scrollTop;

        // 规则：
        //   ① 章节顶部在视口上方但未超过 ENTRY_PX（刚刚越过，还能往回吸）
        //   ② 章节顶部在视口下方但不超过 snapAheadPx（即将进入，可以提前吸）
        const justEnteredAbove = distFromViewportTop < 0 && distFromViewportTop > -ENTRY_PX;
        const approachingBelow = distFromViewportTop >= 0 && distFromViewportTop < snapAheadPx;

        if (justEnteredAbove || approachingBelow) {
          const absDist = Math.abs(distFromViewportTop);
          if (absDist < bestDist) {
            bestDist = absDist;
            bestEl   = sec;
          }
        }
      }

      // 已经很贴近（< 4px）就不触发，避免微抖动
      if (bestEl && bestDist > 4) {
        snappingRef.current = true;
        bestEl.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => { snappingRef.current = false; }, 800);
      }
    };

    const onScroll = () => {
      if (snappingRef.current) return;
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(snapToNearest, SETTLE_MS);
    };

    // Mute snap for 1.2 s whenever ScrollToHash starts a programmatic navigation scroll,
    // preventing the double-scroll "shudder" when clicking nav links.
    let navMuteTimer: ReturnType<typeof setTimeout> | null = null;
    const onNavScrollStart = () => {
      snappingRef.current = true;
      if (timerRef.current)  clearTimeout(timerRef.current);
      if (navMuteTimer)      clearTimeout(navMuteTimer);
      navMuteTimer = setTimeout(() => { snappingRef.current = false; }, 1200);
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("nav-scroll-start", onNavScrollStart);
    return () => {
      root.removeEventListener("scroll", onScroll);
      window.removeEventListener("nav-scroll-start", onNavScrollStart);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (navMuteTimer)     clearTimeout(navMuteTimer);
    };
  }, []);

  return null;
}
