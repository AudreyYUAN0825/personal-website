import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Noto_Serif_SC, ZCOOL_XiaoWei, Petit_Formal_Script } from "next/font/google";
import "../globals.css";
import { locales } from "@/lib/i18n";
import { LightboxProvider } from "@/components/ui/Lightbox";
import { ScrollToHash } from "@/components/ScrollToHash";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SectionSnap } from "@/components/ui/SectionSnap";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-name",
  display: "swap",
});

/* ── 背景艺术字：草书/书法体，与内容区字体形成强烈反差 ── */
const zcoolXiaoWei = ZCOOL_XiaoWei({
  subsets: ["latin"],
  variable: "--font-art-zh",
  weight: ["400"],
  display: "swap",
});

const petitFormalScript = Petit_Formal_Script({
  subsets: ["latin"],
  variable: "--font-art-en",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Qihui Yuan | Qihui Yuan profile",
  description: "Consulting-style talent profile – Climate · Energy · International",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: _params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <html lang="zh" className={`${inter.variable} ${plusJakarta.variable} ${notoSerifSC.variable} ${zcoolXiaoWei.variable} ${petitFormalScript.variable}`}>
      <body className="font-sans text-ink antialiased overflow-hidden h-screen">
        <CustomCursor />
        <SectionSnap />
        <div id="scroll-root" className="scroll-snap-root h-screen overflow-y-auto overflow-x-hidden overscroll-y-none">
          <ScrollToHash />
          <LightboxProvider>
            {children}
          </LightboxProvider>
        </div>
      </body>
    </html>
  );
}
