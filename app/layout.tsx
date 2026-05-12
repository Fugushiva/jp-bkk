import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cormorant, inter, sarabun } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "JP French Restaurant Bangkok",
  description: "Authentic French cuisine in the heart of Bangkok",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://jp-bkk.com"),
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
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
