import type { Metadata } from "next";
import { type Locale } from "@/lib/i18n";
import { HeroHome } from "@/components/sections/HeroHome";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { Testimonials } from "@/components/sections/Testimonials";
import { ChefTeaser } from "@/components/sections/ChefTeaser";
import { LocationPreview } from "@/components/sections/LocationPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";

interface LangPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({
  params,
}: LangPageProps): Promise<Metadata> {
  const { lang } = await params;

  const titles: Record<Locale, string> = {
    en: "JP French Restaurant Bangkok — Authentic French Bistro since 2012",
    fr: "JP Restaurant Français Bangkok — Bistro Français Authentique depuis 2012",
    th: "ร้านอาหารฝรั่งเศส JP กรุงเทพ — ตั้งแต่ปี 2012",
  };

  const descriptions: Record<Locale, string> = {
    en: "Chef Jean-Pierre welcomes you on Sukhumvit Soi 31. French classics, fairly priced, no service charge. Open since 2012.",
    fr: "Le Chef Jean-Pierre vous accueille au Sukhumvit Soi 31. Cuisine française classique, prix justes, sans service charge. Ouvert depuis 2012.",
    th: "เชฟ Jean-Pierre ต้อนรับคุณที่ Sukhumvit Soi 31 อาหารฝรั่งเศสคลาสสิก ราคาเป็นธรรม ไม่มีค่าบริการ เปิดตั้งแต่ปี 2012",
  };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jp-bkk.com";

  return {
    title: titles[lang] ?? titles.en,
    description: descriptions[lang] ?? descriptions.en,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: lang === "en" ? "/" : `/${lang}`,
      languages: {
        en: "/",
        fr: "/fr",
        th: "/th",
      },
    },
    openGraph: {
      title: titles[lang] ?? titles.en,
      description: descriptions[lang] ?? descriptions.en,
      url: lang === "en" ? siteUrl : `${siteUrl}/${lang}`,
      siteName: "JP French Restaurant Bangkok",
      locale: lang === "fr" ? "fr_FR" : lang === "th" ? "th_TH" : "en_US",
      type: "website",
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function LangHome({ params }: LangPageProps) {
  const { lang } = await params;

  return (
    <>
      <HeroHome lang={lang} />
      <SignatureDishes />
      <Testimonials />
      <ChefTeaser lang={lang} />
      <LocationPreview />
      <CtaBanner lang={lang} />
    </>
  );
}
