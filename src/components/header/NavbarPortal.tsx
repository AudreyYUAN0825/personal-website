"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Header } from "./Header";
import type { Locale } from "@/lib/i18n";
import type { UiStrings, CvMap } from "@/content/types";

interface NavbarPortalProps {
  locale: Locale;
  ui: UiStrings;
  cv: CvMap;
}

export function NavbarPortal({ locale, ui, cv }: NavbarPortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <Header locale={locale} ui={ui} cv={cv} className="z-[200]" />,
    document.body
  );
}
