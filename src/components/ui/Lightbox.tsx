"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";

/* ── Context ─────────────────────────────────────────────────────────── */
type LightboxCtx = { open: (src: string, alt?: string) => void };
const LightboxContext = createContext<LightboxCtx>({ open: () => {} });
export const useLightbox = () => useContext(LightboxContext);

/* ── Provider + Overlay ─────────────────────────────────────────────── */
export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [img, setImg] = useState<{ src: string; alt: string } | null>(null);
  const open  = useCallback((src: string, alt = "") => setImg({ src, alt }), []);
  const close = useCallback(() => setImg(null), []);

  // Close on Escape key
  useEffect(() => {
    if (!img) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [img, close]);

  // Prevent body scroll while open
  useEffect(() => {
    if (img) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [img]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}

      {img && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/85 backdrop-blur-md"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white/80 text-xl transition hover:bg-white/25 hover:text-white"
            aria-label="Close"
          >
            ×
          </button>

          {/* Image — stops propagation so clicking image itself doesn't close */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            className="max-h-[90vh] max-w-[92vw] cursor-zoom-out rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Click-outside hint */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[11px] text-white/35 select-none">
            点击空白处关闭 · Click anywhere to close · Esc
          </p>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

/* ── Clickable image wrapper ─────────────────────────────────────────── */
interface LightboxImageProps {
  src:        string;
  alt?:       string;
  className?: string;
  imgClassName?: string;
  style?:     React.CSSProperties;
}

export function LightboxImage({ src, alt = "", className, imgClassName, style }: LightboxImageProps) {
  const { open } = useLightbox();
  return (
    <button
      type="button"
      className={["group relative overflow-hidden", className].filter(Boolean).join(" ")}
      style={style}
      onClick={() => open(src, alt)}
      aria-label="Click to enlarge"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={["h-full w-full object-cover transition duration-300 group-hover:scale-[1.03] group-hover:brightness-90", imgClassName].filter(Boolean).join(" ")}
      />
      {/* Zoom hint overlay */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-200 group-hover:opacity-100">
        <span className="rounded-full bg-ink/50 px-3 py-1.5 text-[11px] font-semibold text-white/90 backdrop-blur-sm">
          🔍 放大
        </span>
      </span>
    </button>
  );
}
