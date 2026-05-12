import type { Metadata } from "next";
import { type Locale } from "@/lib/i18n";
import { FadeUp } from "@/components/ui/FadeUp";

interface LegalNoticePageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({
  params,
}: LegalNoticePageProps): Promise<Metadata> {
  const { lang } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jpfrench.restaurant";

  const titles: Record<Locale, string> = {
    en: "Legal Notice — JP French Restaurant Bangkok",
    fr: "Mentions Légales — JP Restaurant Français Bangkok",
    th: "ข้อกำหนดทางกฎหมาย — ร้านอาหารฝรั่งเศส JP กรุงเทพ",
  };

  return {
    title: titles[lang] ?? titles.en,
    metadataBase: new URL(siteUrl),
    robots: { index: false, follow: false },
    alternates: {
      canonical: lang === "en" ? "/legal-notice" : `/${lang}/legal-notice`,
      languages: {
        en: "/legal-notice",
        fr: "/fr/legal-notice",
        th: "/th/legal-notice",
        "x-default": "/legal-notice",
      },
    },
  };
}

export default async function LegalNoticePage({ params }: LegalNoticePageProps) {
  const { lang } = await params;

  const headings: Record<Locale, { h1: string; updated: string }> = {
    en: { h1: "Legal notice", updated: "Last updated: May 2026" },
    fr: { h1: "Mentions légales", updated: "Dernière mise à jour : mai 2026" },
    th: { h1: "ข้อกำหนดทางกฎหมาย", updated: "อัปเดตล่าสุด: พฤษภาคม 2569" },
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
        <div className="prose prose-neutral max-w-none space-y-10 text-[var(--color-neutral-700)]">
          {/* 1. Publisher */}
          <section>
            <h2 className="font-heading mb-3 text-xl font-bold text-[var(--color-neutral-900)]">
              1. Publisher
            </h2>
            <p>
              <strong>JP French Restaurant</strong>
              <br />
              59/1 Sukhumvit Soi 31 (Soi Sawasdee), Wattana, Bangkok 10110, Thailand
              <br />
              Telephone:{" "}
              <a
                href="tel:+6622584247"
                className="text-[var(--color-brand-primary)] underline underline-offset-2"
              >
                +66 2 258 4247
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:contact@jpfrench.restaurant"
                className="text-[var(--color-brand-primary)] underline underline-offset-2"
              >
                contact@jpfrench.restaurant
              </a>
              <br />
              Registration: [DBD registration number — to be provided by client]
            </p>
          </section>

          {/* 2. Publication Director */}
          <section>
            <h2 className="font-heading mb-3 text-xl font-bold text-[var(--color-neutral-900)]">
              2. Publication Director
            </h2>
            <p>
              Chef Jean-Pierre [surname — to be provided by client]
              <br />
              <a
                href="mailto:contact@jpfrench.restaurant"
                className="text-[var(--color-brand-primary)] underline underline-offset-2"
              >
                contact@jpfrench.restaurant
              </a>
            </p>
          </section>

          {/* 3. Hosting */}
          <section>
            <h2 className="font-heading mb-3 text-xl font-bold text-[var(--color-neutral-900)]">
              3. Hosting
            </h2>
            <p>
              <strong>Vercel Inc.</strong>
              <br />
              340 S Lemon Ave #4133, Walnut, CA 91789, USA
              <br />
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-brand-primary)] underline underline-offset-2"
              >
                https://vercel.com
              </a>
            </p>
          </section>

          {/* 4. Intellectual Property */}
          <section>
            <h2 className="font-heading mb-3 text-xl font-bold text-[var(--color-neutral-900)]">
              4. Intellectual Property
            </h2>
            <p>
              All content on this website — including text, images, photographs, and the
              JP French Restaurant logo — is the exclusive property of JP French
              Restaurant. Any reproduction, distribution, or use without prior written
              consent is strictly prohibited.
            </p>
          </section>

          {/* 5. Applicable Law */}
          <section>
            <h2 className="font-heading mb-3 text-xl font-bold text-[var(--color-neutral-900)]">
              5. Applicable Law
            </h2>
            <p>
              This website is governed by Thai law, including the Personal Data
              Protection Act B.E. 2562 (PDPA). Any dispute arising from the use of this
              site shall be submitted to the competent courts of Thailand.
            </p>
          </section>
        </div>
      </FadeUp>
    </div>
  );
}
