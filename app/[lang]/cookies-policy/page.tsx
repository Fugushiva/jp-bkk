import type { Metadata } from "next";
import { type Locale } from "@/lib/i18n";
import { FadeUp } from "@/components/ui/FadeUp";
import { CookiePreferencePanel } from "@/components/ui/CookiePreferencePanel";

interface CookiesPolicyPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({
  params,
}: CookiesPolicyPageProps): Promise<Metadata> {
  const { lang } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jpfrench.restaurant";

  const titles: Record<Locale, string> = {
    en: "Cookies Policy — JP French Restaurant Bangkok",
    fr: "Politique des Cookies — JP Restaurant Français Bangkok",
    th: "นโยบายคุกกี้ — ร้านอาหารฝรั่งเศส JP กรุงเทพ",
  };

  return {
    title: titles[lang] ?? titles.en,
    metadataBase: new URL(siteUrl),
    robots: { index: false, follow: false },
    alternates: {
      canonical: lang === "en" ? "/cookies-policy" : `/${lang}/cookies-policy`,
      languages: {
        en: "/cookies-policy",
        fr: "/fr/cookies-policy",
        th: "/th/cookies-policy",
        "x-default": "/cookies-policy",
      },
    },
  };
}

const cookieTable = [
  {
    name: "next-locale",
    category: "Necessary",
    purpose: "Remember chosen language",
    duration: "12 months",
    provider: "Local",
  },
  {
    name: "jp-cookie-consent",
    category: "Necessary",
    purpose: "Remember cookie preferences",
    duration: "12 months",
    provider: "Local",
  },
  {
    name: "_ga",
    category: "Analytics",
    purpose: "Google Analytics visitor count (if enabled)",
    duration: "24 months",
    provider: "Google",
  },
  {
    name: "_ga_*",
    category: "Analytics",
    purpose: "Google Analytics session tracking",
    duration: "24 months",
    provider: "Google",
  },
];

export default async function CookiesPolicyPage({ params }: CookiesPolicyPageProps) {
  const { lang } = await params;

  const headings: Record<Locale, { h1: string; updated: string }> = {
    en: { h1: "Cookies policy", updated: "Last updated: May 2026" },
    fr: { h1: "Politique des cookies", updated: "Dernière mise à jour : mai 2026" },
    th: { h1: "นโยบายคุกกี้", updated: "อัปเดตล่าสุด: พฤษภาคม 2569" },
  };

  const { h1, updated } = headings[lang] ?? headings.en;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeUp>
        <h1 className="font-heading mb-2 text-4xl font-bold text-[var(--color-neutral-900)] sm:text-5xl">
          {h1}
        </h1>
        <p className="mb-12 text-sm text-[var(--color-neutral-500)]">{updated}</p>
      </FadeUp>

      <FadeUp delay={80}>
        <div className="space-y-8 text-[var(--color-neutral-700)]">
          <section>
            <h2 className="font-heading mb-3 text-xl font-bold text-[var(--color-neutral-900)]">
              What are cookies?
            </h2>
            <p className="text-sm leading-relaxed">
              Cookies are small text files stored on your device when you visit a website.
              They help the site remember your preferences and improve your experience.
            </p>
          </section>

          <section>
            <h2 className="font-heading mb-4 text-xl font-bold text-[var(--color-neutral-900)]">
              Cookies we use
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-neutral-200)]">
                    <th className="pb-2 pr-4 text-left font-semibold text-[var(--color-neutral-900)]">
                      Name
                    </th>
                    <th className="pb-2 pr-4 text-left font-semibold text-[var(--color-neutral-900)]">
                      Category
                    </th>
                    <th className="pb-2 pr-4 text-left font-semibold text-[var(--color-neutral-900)]">
                      Purpose
                    </th>
                    <th className="pb-2 pr-4 text-left font-semibold text-[var(--color-neutral-900)]">
                      Duration
                    </th>
                    <th className="pb-2 text-left font-semibold text-[var(--color-neutral-900)]">
                      Provider
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((row) => (
                    <tr
                      key={row.name}
                      className="border-b border-[var(--color-neutral-100)]"
                    >
                      <td className="py-2 pr-4 font-mono text-xs">{row.name}</td>
                      <td className="py-2 pr-4">{row.category}</td>
                      <td className="py-2 pr-4">{row.purpose}</td>
                      <td className="py-2 pr-4">{row.duration}</td>
                      <td className="py-2">{row.provider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-[var(--color-neutral-500)]">
              We do not use marketing cookies. No personal data is shared with
              advertisers.
            </p>
          </section>

          <CookiePreferencePanel />
        </div>
      </FadeUp>
    </div>
  );
}
