"use client";

import { useEffect } from "react";

/** 处理锚点滚动 — 滚动容器为 #scroll-root 时，点击 #hash 链接需手动滚动 */
export function ScrollToHash() {
  useEffect(() => {
    const root = document.getElementById("scroll-root");
    if (!root) return;

    const scrollToHash = () => {
      const hash = window.location.hash?.slice(1);
      if (!hash) return;
      const el = document.getElementById(hash);
      const root = document.getElementById("scroll-root");
      if (el && root) {
        const rootRect = root.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const targetTop = root.scrollTop + (elRect.top - rootRect.top) - 64;
        root.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a[href*='#']") as HTMLAnchorElement | null;
      if (!target?.href) return;
      try {
        const url = new URL(target.href);
        const hash = url.hash?.slice(1);
        if (hash && url.pathname === window.location.pathname) {
          const el = document.getElementById(hash);
          const root = document.getElementById("scroll-root");
          if (el && root) {
            e.preventDefault();
            window.history.pushState(null, "", target.href);
            const rootRect = root.getBoundingClientRect();
            const elRect = el.getBoundingClientRect();
            const targetTop = root.scrollTop + (elRect.top - rootRect.top) - 64;
            root.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
          }
        }
      } catch {
        /* ignore */
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
