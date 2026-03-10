import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

function isStaticPath(pathname: string): boolean {
  return (
    /^\/(?:images|files|fonts|icons)\//.test(pathname) ||
    /\.(?:png|jpe?g|gif|svg|ico|webp|avif|woff2?|ttf|otf|pdf|json|xml|txt|css|js)$/i.test(
      pathname
    )
  );
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Pass through static file requests so Next.js serves them from
  // public/ without injecting a locale prefix.
  if (isStaticPath(pathname)) {
    return NextResponse.next();
  }

  // Redirect bare root to the default locale.
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  // If the first segment is not a known locale, prefix with default.
  const first = pathname.split("/")[1] ?? "";
  const isKnownLocale = (locales as readonly string[]).includes(first);
  if (!isKnownLocale) {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)"],
};
