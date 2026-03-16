import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Layer 1: backgrounds
        paper:   "#F6F4EF",                      // page background
        panel:   "#F8F6F2",                      // elevated panel
        card:    "rgba(255,255,255,0.56)",

        // Layer 2: text
        ink:     "#16233B",                      // primary text — deep navy
        ink2:    "#4A5568",                      // secondary — improved contrast
        ink3:    "#718096",                      // muted

        // Layer 3: Brand — 1 dominant + accents + Climate
        blue:         "#33539E",   // DOMINANT — buttons, links, active
        "blue-light": "#7DACD6",   // accent — chip tints, stat values
        climate:      "#2D7A5E",   // Climate/Energy — earth green
        lavender:     "#C0B9DB",   // subtle — card borders
        pink:         "#E9B7D4",   // subtle — specialty tags
        rose:         "#A5678E",   // emphasis — featured badges

        // Legacy aliases
        accent:        "#33539E",
        "accent-deep": "#294587",
        "accent-pale": "rgba(51,83,158,0.08)",

        // Borders
        line:    "rgba(22,35,59,0.08)",

        // Retired (kept so old class refs don't break)
        mint:    "#C0B9DB",
        gold:    "#E9B7D4",
        moss:    "#7DACD6",
      },
      fontFamily: {
        sans:    ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(48px,6vw,84px)", { lineHeight: "0.96", letterSpacing: "-0.04em", fontWeight: "700" }],
        "hero-sub": ["clamp(20px,2vw,30px)", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "500" }],
        "section-title": ["clamp(28px,3vw,44px)", { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "650" }],
      },
      boxShadow: {
        // Premium card shadows
        soft:     "0 10px 30px rgba(27,39,79,0.08), inset 0 1px 0 rgba(255,255,255,0.58)",
        hover:    "0 18px 44px rgba(27,39,79,0.12), inset 0 1px 0 rgba(255,255,255,0.68)",
        card:     "0 12px 32px rgba(27,39,79,0.08)",
        "card-hover": "0 20px 48px rgba(27,39,79,0.14)",
        brand:    "0 8px 20px rgba(51,83,158,0.22)",
        "brand-hover": "0 12px 28px rgba(51,83,158,0.30)",
        nav:      "0 8px 24px rgba(27,39,79,0.08)",
        glass:    "0 8px 32px rgba(27,39,79,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
      },
      borderRadius: {
        xl:    "12px",
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      backdropBlur: {
        glass: "22px",
      },
      backgroundImage: {
        "page-gradient": "linear-gradient(180deg,#F6F4EF 0%,#F8F6F2 100%)",
        "hero-gradient": "linear-gradient(180deg,#F6F4EF 0%,#F8F6F2 100%)",
        "accent-gradient": "linear-gradient(135deg,#33539E 0%,#4B6DB8 100%)",
        "card-gradient": "linear-gradient(135deg,rgba(255,255,255,0.65) 0%,rgba(255,255,255,0.45) 100%)",
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.22,1,0.36,1)",
      },
      animation: {
        "aurora": "aurora-drift 14s ease-in-out infinite",
        "aurora-slow": "aurora-drift 20s ease-in-out infinite 3s",
        "aurora-slower": "aurora-drift 18s ease-in-out infinite 6s",
        "fade-up": "fadeSlideUp 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "blob": "blob 22s ease-in-out infinite",
        "pulse-slow": "iconPulse 3s ease-in-out infinite",
      },
      keyframes: {
        "aurora-drift": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(2%,1.5%) scale(1.03)" },
        },
        "fadeSlideUp": {
          "from": { opacity: "0", transform: "translateY(40px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
        },
        "blob": {
          "0%":   { transform: "translate(0px,0px) scale(1)" },
          "33%":  { transform: "translate(24px,-16px) scale(1.05)" },
          "66%":  { transform: "translate(-12px,22px) scale(0.97)" },
          "100%": { transform: "translate(0px,0px) scale(1)" },
        },
        "iconPulse": {
          "0%,100%": { transform: "scale(1)", opacity: "0.55" },
          "50%": { transform: "scale(1.18)", opacity: "0.80" },
        },
      },
      maxWidth: {
        "8xl": "88rem",
        "page": "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
