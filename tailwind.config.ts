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
        ink:    "#0B1120",
        paper:  "#F5F7FA",          // cool off-white for body bg
        card:   "#FFFFFF",          // clean white cards
        accent: "#165DFF",          // tech blue – primary brand
        moss:   "#00C48C",          // energy green – secondary brand
        line:   "rgba(15,23,42,0.08)",
      },
      fontFamily: {
        sans:    ["var(--font-inter)",  "system-ui", "sans-serif"],
        display: ["var(--font-space)",  "system-ui", "sans-serif"],
        space:   ["var(--font-space)",  "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft:     "0 1px 4px rgba(15,23,42,0.05), 0 0 0 1px rgba(15,23,42,0.03)",
        hover:    "0 8px 24px rgba(15,23,42,0.10), 0 0 0 1px rgba(15,23,42,0.05)",
        card:     "0 4px 12px rgba(0,0,0,0.05)",
        "card-hover": "0 8px 24px rgba(0,0,0,0.10)",
        brand:    "0 4px 16px rgba(22,93,255,0.25)",
        "brand-hover": "0 6px 24px rgba(22,93,255,0.38)",
        nav:      "0 1px 12px rgba(15,23,42,0.08)",
      },
      borderRadius: {
        xl:    "12px",
        "2xl": "16px",
        "3xl": "24px",
      },
      spacing: {
        "18": "4.5rem",
      },
      backgroundImage: {
        "brand-gradient":   "linear-gradient(135deg, #165DFF 0%, #00C48C 100%)",
        "brand-gradient-r": "linear-gradient(135deg, #00C48C 0%, #165DFF 100%)",
        "page-gradient":    "linear-gradient(135deg, #F5F7FA 0%, #E9EEF6 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
