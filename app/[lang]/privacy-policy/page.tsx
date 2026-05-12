import type { Metadata } from "next";
import { type Locale } from "@/lib/i18n";
import { FadeUp } from "@/components/ui/FadeUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PrivacyPolicyPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({
  params,
}: PrivacyPolicyPageProps): Promise<Metadata> {
  const { lang } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jpfrench.restaurant";

  const titles: Record<Locale, string> = {
    en: "Privacy Policy — JP French Restaurant Bangkok",
    fr: "Politique de Confidentialité — JP Restaurant Français Bangkok",
    th: "นโยบายความเป็นส่วนตัว — ร้านอาหารฝรั่งเศส JP กรุงเทพ",
  };

  const descriptions: Record<Locale, string> = {
    en: "How we collect, use and protect your personal data under Thai PDPA.",
    fr: "Comment nous collectons, utilisons et protégeons vos données personnelles conformément au PDPA thaïlandais.",
    th: "วิธีที่เรารวบรวม ใช้ และปกป้องข้อมูลส่วนบุคคลของคุณภายใต้ PDPA ของไทย",
  };

  return {
    title: titles[lang] ?? titles.en,
    description: descriptions[lang] ?? descriptions.en,
    metadataBase: new URL(siteUrl),
    robots: { index: false, follow: false },
    alternates: {
      canonical: lang === "en" ? "/privacy-policy" : `/${lang}/privacy-policy`,
      languages: {
        en: "/privacy-policy",
        fr: "/fr/privacy-policy",
        th: "/th/privacy-policy",
        "x-default": "/privacy-policy",
      },
    },
  };
}

const sections = [
  {
    id: "data-collected",
    trigger: "What data we collect",
    content:
      "Via the contact form only: your name, email address, phone number (optional), subject, and message. We do not use tracking cookies by default. No data is collected through passive browsing.",
  },
  {
    id: "why-collected",
    trigger: "Why we collect it",
    content:
      "To respond to your inquiry — private event enquiries, group bookings (≥ 8 guests), and press requests. Your data is never used for marketing purposes.",
  },
  {
    id: "legal-basis",
    trigger: "Legal basis",
    content:
      "Your explicit consent at the time of form submission, in accordance with Article 24 of the Personal Data Protection Act B.E. 2562 (PDPA).",
  },
  {
    id: "retention",
    trigger: "How long we keep it",
    content:
      "24 months after your last contact with us. After this period, your data is permanently and irreversibly deleted.",
  },
  {
    id: "access",
    trigger: "Who can access it",
    content:
      "JP French Restaurant staff only. We do not share your data with any third party. Data is hosted on Vercel (USA) — international transfer is covered by Vercel's Data Processing Agreement (DPA), which provides adequate safeguards.",
  },
  {
    id: "rights",
    trigger: "Your rights",
    content:
      "You have the right to access, rectify, erase, withdraw consent, port, and object to the processing of your personal data. To exercise any of these rights, contact us at contact@jpfrench.restaurant. We will respond within 30 days.",
  },
  {
    id: "dpo",
    trigger: "Data Protection Officer",
    content:
      "Chef Jean-Pierre [surname — to be confirmed by client] · contact@jpfrench.restaurant",
  },
  {
    id: "authority",
    trigger: "Supervisory authority",
    content:
      "Personal Data Protection Committee (PDPC) · www.pdpc.or.th · If you believe your rights have not been respected, you may lodge a complaint with the PDPC.",
  },
];

export default async function PrivacyPolicyPage({ params }: PrivacyPolicyPageProps) {
  const { lang } = await params;

  const headings: Record<Locale, { h1: string; subtitle: string; updated: string }> = {
    en: {
      h1: "Privacy policy",
      subtitle: "How we collect, use and protect your personal data under Thai PDPA.",
      updated: "Last updated: May 2026",
    },
    fr: {
      h1: "Politique de confidentialité",
      subtitle:
        "Comment nous collectons, utilisons et protégeons vos données personnelles conformément au PDPA thaïlandais.",
      updated: "Dernière mise à jour : mai 2026",
    },
    th: {
      h1: "นโยบายความเป็นส่วนตัว",
      subtitle: "วิธีที่เรารวบรวม ใช้ และปกป้องข้อมูลส่วนบุคคลของคุณภายใต้ PDPA ของไทย",
      updated: "อัปเดตล่าสุด: พฤษภาคม 2569",
    },
  };

  const { h1, subtitle, updated } = headings[lang] ?? headings.en;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeUp>
        <h1 className="font-heading mb-2 text-4xl font-bold text-[var(--color-neutral-900)] sm:text-5xl">
          {h1}
        </h1>
        <p className="mb-2 text-base text-[var(--color-neutral-600)]">{subtitle}</p>
        <p className="mb-12 text-sm text-[var(--color-neutral-500)]">{updated}</p>
      </FadeUp>

      <FadeUp delay={80}>
        <Accordion type="multiple" className="w-full space-y-2">
          {sections.map((section) => (
            <AccordionItem
              key={section.id}
              value={section.id}
              className="rounded-lg border border-[var(--color-neutral-200)] px-4"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-[var(--color-neutral-900)] hover:no-underline">
                {section.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[var(--color-neutral-700)]">
                {section.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeUp>
    </div>
  );
}
