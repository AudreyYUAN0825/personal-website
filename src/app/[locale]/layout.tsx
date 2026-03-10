import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../globals.css";
import { locales, type Locale } from "@/lib/i18n";
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

export const metadata: Metadata = {
  title: "Talent Profile",
  description: "Consulting-style talent profile – Climate · Energy · International",
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  return (
    <html lang="zh" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-paper text-ink antialiased">
        <LightboxProvider>
          {children}
        </LightboxProvider>
      </body>
    </html>
  );
}
