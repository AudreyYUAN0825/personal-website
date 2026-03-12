import type { Metadata } from "next";
import { Inter, Space_Grotesk, Noto_Serif_SC } from "next/font/google";
import "../globals.css";
import { locales } from "@/lib/i18n";
import { LightboxProvider } from "@/components/ui/Lightbox";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "600", "700"],
  subsets: ["latin", "chinese-simplified"],
  variable: "--font-name",
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
    <html lang="zh" className={`${inter.variable} ${spaceGrotesk.variable} ${notoSerifSC.variable}`}>
      <body className="font-sans text-ink antialiased">
        <LightboxProvider>
          {children}
        </LightboxProvider>
      </body>
    </html>
  );
}
