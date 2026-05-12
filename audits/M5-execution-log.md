# M5 Execution Log — SEO & Performance
**Date:** 2026-05-12  
**Branch:** phase/M5-seo-performance  
**HEAD:** 731b661  
**Status:** COMPLETE

---

## Task 1 — JSON-LD Schema.org (Issue #22)

**Agent:** Direct write (trivial/easy)  
**Files written:** `lib/schema.ts`  
**Commit:** 731b661  
**Validation:** Build PASS

Schemas implemented:
- `organizationSchema` — Organization with sameAs (Chope, TripAdvisor)
- `localBusinessSchema` — Restaurant type, full address, hours, priceRange, aggregateRating (4.7/44)
- `websiteSchema` — WebSite + SearchAction (sitelinks searchbox)
- `breadcrumbSchema()` — factory function, used on all 4 pages
- `chefPersonSchema` — Person (Jean-Pierre, Head Chef) injected on our-story page
- `menuSchema` — Menu + 4 MenuSections + 10 MenuItems with THB prices

Global schemas (Organization + LocalBusiness + WebSite) injected via `<script type="application/ld+json">` in both `app/layout.tsx` and `app/[lang]/layout.tsx`.

---

## Task 2 — Open Graph + Twitter Card (Issue #23)

**Agent:** Direct edit (easy)  
**Files modified:** `app/[lang]/page.tsx`, `app/[lang]/our-story/page.tsx`, `app/[lang]/menu/page.tsx`, `app/[lang]/contact/page.tsx`  
**Commit:** 731b661  
**Validation:** Build PASS

Added to all 4 pages:
- `openGraph.images` — 1200×630 with alt text, using `/og/*.jpg` paths
- `twitter.card: 'summary_large_image'` + images
- `alternates.languages['x-default']` — pointing to EN canonical
- `metadataBase` updated to `jpfrench.restaurant` (was `jp-bkk.com`)
- `robots: { index: false, follow: false }` — confirmed on all pages ✓

---

## Task 3 — next/image audit (Issue #24)

**Agent:** Direct audit (trivial)  
**Files modified:** None (no changes needed)  
**Commit:** 731b661 (via .gitkeep)

Audit result: All image slots in M1-M4 are placeholder `<div>` elements with `bg-neutral-200` — no `<img>` tags present. No `next/image` components exist yet (images deferred to client delivery). Created `public/og/.gitkeep` to ensure OG directory is tracked in git.

Hero images: When actual images are added in M6/M7, `priority={true}` must be set on first-fold images. Noted in HANDOFF_NOTES.

---

## Task 4 — Core Web Vitals / Performance (Issue #25)

**Agent:** Direct audit + edit (trivial)  
**Files modified:** `app/layout.tsx`, `app/[lang]/layout.tsx`  
**Commit:** 731b661

Verified:
- `@vercel/analytics` → `<Analytics />` ✓ (both layouts)
- `@vercel/speed-insights` → `<SpeedInsights />` ✓ (both layouts)

Added:
- `<link rel="preconnect" href="https://fonts.googleapis.com" />` in both layouts
- `<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />` in both layouts

Note: `export const dynamic = 'force-static'` not added — Next.js 16 with `generateStaticParams()` already produces SSG output (confirmed in build output: all pages show `●` SSG). Adding `force-static` would be redundant.

---

## Task 5 — 404 page + i18n route aliases (Issue #26)

**Agent:** Direct write (easy)  
**Files written:** `app/not-found.tsx`, `app/[lang]/not-found.tsx`  
**Files modified:** `proxy.ts`  
**Commit:** 731b661

404 pages: Both root and lang-scoped 404 pages created with:
- H1 "404" + "Page not found" heading
- Back to Home link
- View our Menu link
- Design tokens used throughout

proxy.ts rewrites added:
- `/fr/notre-histoire` → `/fr/our-story` (internal rewrite)
- `/fr/mentions-legales` → `/fr/legal-notice` (pre-registered for M6)
- `/fr/politique-confidentialite` → `/fr/privacy-policy` (pre-registered for M6)
- `/fr/politique-cookies` → `/fr/cookies-policy` (pre-registered for M6)

---

## Phase Verification

```
npm run build → PASS (12/12 static pages)
TypeScript → PASS (6.4s)
Turbopack compile → PASS (5.7s)
```

No ESLint config found — skipped.

---

## Issues Encountered

1. **GitHub token lacks issue write access** — Issues #22-#26 could not be closed via API (403). Manual close required by maintainer.
2. **LSP errors in editor** — Pre-existing `@/lib/*` path alias resolution errors in editor (not TypeScript compiler errors — build passes cleanly).

---

## Telemetry

- cascade_max_level: 1 (all tasks direct)
- pii_sanitization_calls: 0
- subagent_dispatches: 0
- direct_writes_by_executor: 12 files

---

## Audit Verdict: PASS

All 5 issues implemented. Build passes. Branch pushed. Tag vM5 created and pushed.
