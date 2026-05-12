import type { Metadata } from "next";
import { type Locale } from "@/lib/i18n";
import { HeroOurStory } from "@/components/sections/HeroOurStory";
import { Timeline } from "@/components/sections/Timeline";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { PressQuotes } from "@/components/sections/PressQuotes";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { breadcrumbSchema, chefPersonSchema } from "@/lib/schema";

interface OurStoryPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({
  params,
}: OurStoryPageProps): Promise<Metadata> {
  const { lang } = await params;

  const titles: Record<Locale, string> = {
    en: "Our Story — Chef Jean-Pierre | JP French Restaurant Bangkok",
    fr: "Notre Histoire — Chef Jean-Pierre | JP Restaurant Français Bangkok",
    th: "เรื่องราวของเรา — เชฟ Jean-Pierre | ร้านอาหารฝรั่งเศส JP กรุงเทพ",
  };

  const descriptions: Record<Locale, string> = {
    en: "13 years of French cuisine in Bangkok. From Lyon to Sukhumvit Soi 31 — the story of Chef Jean-Pierre and JP French Restaurant.",
    fr: "13 ans de cuisine française à Bangkok. De Lyon au Sukhumvit Soi 31 — l'histoire du Chef Jean-Pierre et du JP Restaurant Français.",
    th: "13 ปีของอาหารฝรั่งเศสในกรุงเทพ จากเมืองลียงสู่ Sukhumvit Soi 31 — เรื่องราวของเชฟ Jean-Pierre",
  };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jpfrench.restaurant";

  const canonicalPath =
    lang === "fr" ? "/fr/notre-histoire" : lang === "th" ? "/th/our-story" : "/our-story";

  return {
    title: titles[lang] ?? titles.en,
    description: descriptions[lang] ?? descriptions.en,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: "/our-story",
        fr: "/fr/notre-histoire",
        th: "/th/our-story",
        "x-default": "/our-story",
      },
    },
    openGraph: {
      title: titles[lang] ?? titles.en,
      description: descriptions[lang] ?? descriptions.en,
      url: `${siteUrl}${canonicalPath}`,
      siteName: "JP French Restaurant Bangkok",
      locale: lang === "fr" ? "fr_FR" : lang === "th" ? "th_TH" : "en_US",
      type: "website",
      images: [
        {
          url: "/og/our-story.jpg",
          width: 1200,
          height: 630,
          alt: "Chef Jean-Pierre — JP French Restaurant Bangkok",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[lang] ?? titles.en,
      description: descriptions[lang] ?? descriptions.en,
      images: ["/og/our-story.jpg"],
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function OurStoryPage({ params }: OurStoryPageProps) {
  const { lang } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jpfrench.restaurant";
  const homeUrl = lang === "en" ? siteUrl : `${siteUrl}/${lang}`;
  const pageUrl = `${siteUrl}${lang === "fr" ? "/fr/notre-histoire" : lang === "th" ? "/th/our-story" : "/our-story"}`;

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: homeUrl },
    { name: lang === "fr" ? "Notre Histoire" : lang === "th" ? "เรื่องราวของเรา" : "Our Story", url: pageUrl },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chefPersonSchema) }}
      />
      <HeroOurStory />
      <Timeline />
      <PhilosophySection />
      <PressQuotes />
      <CtaBanner lang={lang} />
    </>
  );
}
