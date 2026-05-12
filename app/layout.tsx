import type { Metadata } from "next";
import { cormorant, inter, sarabun } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "JP French Restaurant Bangkok",
  description: "Authentic French cuisine in the heart of Bangkok",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
