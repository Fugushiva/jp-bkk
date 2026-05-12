import type { Metadata } from "next";
import { type Locale } from "@/lib/i18n";
import { FadeUp } from "@/components/ui/FadeUp";
import { ContactForm } from "@/components/forms/ContactForm";

interface ContactPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { lang } = await params;

  const titles: Record<Locale, string> = {
    en: "Contact Us — JP French Restaurant Bangkok",
    fr: "Nous Contacter — JP Restaurant Français Bangkok",
    th: "ติดต่อเรา — ร้านอาหารฝรั่งเศส JP กรุงเทพ",
  };

  const descriptions: Record<Locale, string> = {
    en: "Find JP French Restaurant on Sukhumvit Soi 31, Bangkok. Opening hours, phone, email and contact form for private events and group bookings.",
    fr: "Trouvez le JP Restaurant Français au Sukhumvit Soi 31, Bangkok. Horaires, téléphone, email et formulaire pour événements privés et groupes.",
    th: "ค้นหา JP French Restaurant ที่ Sukhumvit Soi 31 กรุงเทพ เวลาเปิดทำการ โทรศัพท์ อีเมล และแบบฟอร์มสำหรับงานส่วนตัวและการจองกลุ่ม",
  };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jp-bkk.com";

  return {
    title: titles[lang] ?? titles.en,
    description: descriptions[lang] ?? descriptions.en,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: lang === "en" ? "/contact" : `/${lang}/contact`,
      languages: {
        en: "/contact",
        fr: "/fr/contact",
        th: "/th/contact",
      },
    },
    openGraph: {
      title: titles[lang] ?? titles.en,
      description: descriptions[lang] ?? descriptions.en,
      url: lang === "en" ? `${siteUrl}/contact` : `${siteUrl}/${lang}/contact`,
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

export default async function ContactPage({ params }: ContactPageProps) {
  await params;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero */}
      <FadeUp>
        <div className="mb-12">
          <h1 className="font-heading mb-4 text-4xl font-bold text-[--color-neutral-900] sm:text-5xl">
            Find us, reach us
          </h1>
          <div
            role="alert"
            className="mt-6 rounded-lg border border-[--color-brand-secondary] bg-[--color-neutral-100] px-4 py-3 text-sm text-[--color-neutral-700]"
          >
            Standard bookings: Chope or Hungry Hub. This form is for private events,
            groups (≥ 8), and press inquiries.
          </div>
        </div>
      </FadeUp>

      {/* Where we are */}
      <FadeUp delay={100}>
        <section className="mb-12">
          <h2 className="font-heading mb-6 border-b-2 border-[--color-brand-primary] pb-2 text-2xl font-bold text-[--color-neutral-900]">
            Where we are
          </h2>
          <dl className="space-y-4 text-[--color-neutral-700]">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-[--color-neutral-400]">
                Address
              </dt>
              <dd className="mt-1">
                59/1 Sukhumvit Soi 31 (Soi Sawasdee), Wattana, Bangkok 10110
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-[--color-neutral-400]">
                Hours
              </dt>
              <dd className="mt-1">
                Mon–Sat: Lunch 12:00–14:30 · Dinner 18:00–22:30
                <br />
                Sunday: Closed
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-[--color-neutral-400]">
                Phone
              </dt>
              <dd className="mt-1">
                <a
                  href="tel:+6622584247"
                  className="font-medium text-[--color-brand-primary] underline underline-offset-2 hover:text-[--color-brand-primary-hover]"
                >
                  +66 2 258 4247
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-[--color-neutral-400]">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href="mailto:contact@jpfrench.restaurant"
                  className="font-medium text-[--color-brand-primary] underline underline-offset-2 hover:text-[--color-brand-primary-hover]"
                >
                  contact@jpfrench.restaurant
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-[--color-neutral-400]">
                Book online
              </dt>
              <dd className="mt-1 flex flex-wrap gap-3">
                <a
                  href="https://www.chope.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[--color-brand-primary] underline underline-offset-2 hover:text-[--color-brand-primary-hover]"
                >
                  Book via Chope
                </a>
                <span className="text-[--color-neutral-400]">·</span>
                <a
                  href="https://www.hungryhub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[--color-brand-primary] underline underline-offset-2 hover:text-[--color-brand-primary-hover]"
                >
                  Book via Hungry Hub
                </a>
                <span className="text-[--color-neutral-400]">·</span>
                <a
                  href="https://www.tripadvisor.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[--color-brand-primary] underline underline-offset-2 hover:text-[--color-brand-primary-hover]"
                >
                  See on TripAdvisor
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </FadeUp>

      {/* Map placeholder */}
      <FadeUp delay={150}>
        <section className="mb-12">
          <h2 className="font-heading mb-6 border-b-2 border-[--color-brand-primary] pb-2 text-2xl font-bold text-[--color-neutral-900]">
            See on the map
          </h2>
          <div
            className="flex h-48 items-center justify-center rounded-lg border border-dashed border-[--color-neutral-400] bg-[--color-neutral-100] text-sm text-[--color-neutral-700]"
            aria-label="Map placeholder — requires cookie consent"
          >
            Map loading with your cookie consent
          </div>
        </section>
      </FadeUp>

      {/* Contact form */}
      <FadeUp delay={200}>
        <section>
          <h2 className="font-heading mb-6 border-b-2 border-[--color-brand-primary] pb-2 text-2xl font-bold text-[--color-neutral-900]">
            Write to us
          </h2>
          <ContactForm />
        </section>
      </FadeUp>
    </div>
  );
}
