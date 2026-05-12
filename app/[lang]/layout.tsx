import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cormorant, inter, sarabun } from "@/lib/fonts";
import { locales, type Locale } from "@/lib/i18n";
import "../globals.css";

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  // Only FR and TH — EN is served from the root app/layout.tsx
  return locales
    .filter((locale) => locale !== "en")
    .map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;

  const titles: Record<Locale, string> = {
    en: "JP French Restaurant Bangkok",
    fr: "JP Restaurant Français Bangkok",
    th: "ร้านอาหารฝรั่งเศส JP กรุงเทพ",
  };

  return {
    title: titles[locale] ?? titles.en,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://jp-bkk.com"),
  };
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  return (
    <html
      lang={lang}
      className={`${cormorant.variable} ${inter.variable} ${sarabun.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
