import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, isValidLocale } from "@/lib/i18n";

// ─── FR localized slug rewrites ──────────────────────────────────────────────
// Maps French localized slugs to their canonical English-slug paths.
// These are internal rewrites (not redirects) so the URL stays user-friendly.
const FR_SLUG_REWRITES: Record<string, string> = {
  "/fr/notre-histoire": "/fr/our-story",
  // Legal slugs (M6 pages — pre-registered for when they're created)
  "/fr/mentions-legales": "/fr/legal-notice",
  "/fr/politique-confidentialite": "/fr/privacy-policy",
  "/fr/politique-cookies": "/fr/cookies-policy",
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip for static files, API routes, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Handle FR localized slug rewrites (internal rewrite, URL stays the same)
  if (FR_SLUG_REWRITES[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = FR_SLUG_REWRITES[pathname];
    return NextResponse.rewrite(url);
  }

  // Check if the pathname already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Detect preferred locale from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferredLocale = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim().substring(0, 2))
    .find((lang) => isValidLocale(lang));

  const locale = preferredLocale ?? defaultLocale;

  // EN is the default — no prefix redirect needed
  if (locale === defaultLocale) {
    return NextResponse.next();
  }

  // Redirect to locale-prefixed path for FR and TH
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
