import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cormorant, inter, sarabun } from "@/lib/fonts";
import { locales, type Locale } from "@/lib/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { SkipNav } from "@/components/layout/SkipNav";
import { AxeProvider } from "@/components/layout/AxeProvider";
import { Toaster } from "@/components/ui/sonner";
import { organizationSchema, localBusinessSchema, websiteSchema } from "@/lib/schema";
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
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://jpfrench.restaurant"),
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const locale = lang as Locale;

  return (
    <html
      lang={lang}
      className={`${cormorant.variable} ${inter.variable} ${sarabun.variable} h-full antialiased`}
    >
      <head>
        <meta name="robots" content="noindex, nofollow" />
        {/* Google Fonts preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Global JSON-LD schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LenisProvider>
          <SkipNav />
          <Navbar lang={locale} />
          <main id="main-content" className="flex-1 pt-16">
            {children}
          </main>
          <Footer lang={locale} />
        </LenisProvider>
        <AxeProvider />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
