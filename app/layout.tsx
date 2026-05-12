import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cormorant, inter, sarabun } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { SkipNav } from "@/components/layout/SkipNav";
import { AxeProvider } from "@/components/layout/AxeProvider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "JP French Restaurant Bangkok",
  description: "Authentic French cuisine in the heart of Bangkok",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://jp-bkk.com"),
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${sarabun.variable} h-full antialiased`}
    >
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className="min-h-full flex flex-col">
        <LenisProvider>
          <SkipNav />
          <Navbar lang="en" />
          <main id="main-content" className="flex-1 pt-16">
            {children}
          </main>
          <Footer lang="en" />
        </LenisProvider>
        <AxeProvider />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
