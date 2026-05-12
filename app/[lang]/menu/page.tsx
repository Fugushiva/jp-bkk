import type { Metadata } from "next";
import { type Locale } from "@/lib/i18n";
import { FadeUp } from "@/components/ui/FadeUp";
import { breadcrumbSchema, menuSchema } from "@/lib/schema";

interface MenuPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({
  params,
}: MenuPageProps): Promise<Metadata> {
  const { lang } = await params;

  const titles: Record<Locale, string> = {
    en: "Our Menu — JP French Restaurant Bangkok",
    fr: "Notre Carte — JP Restaurant Français Bangkok",
    th: "เมนูของเรา — ร้านอาหารฝรั่งเศส JP กรุงเทพ",
  };

  const descriptions: Record<Locale, string> = {
    en: "French classics priced in THB. Starters, mains, desserts and wines at JP French Restaurant on Sukhumvit Soi 31, Bangkok.",
    fr: "Cuisine française classique en THB. Entrées, plats, desserts et vins au JP Restaurant Français, Sukhumvit Soi 31, Bangkok.",
    th: "อาหารฝรั่งเศสคลาสสิก ราคาเป็นบาท สตาร์เตอร์ จานหลัก ของหวาน และไวน์ ที่ JP French Restaurant ซอยสุขุมวิท 31 กรุงเทพ",
  };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jpfrench.restaurant";

  return {
    title: titles[lang] ?? titles.en,
    description: descriptions[lang] ?? descriptions.en,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: lang === "en" ? "/menu" : `/${lang}/menu`,
      languages: {
        en: "/menu",
        fr: "/fr/menu",
        th: "/th/menu",
        "x-default": "/menu",
      },
    },
    openGraph: {
      title: titles[lang] ?? titles.en,
      description: descriptions[lang] ?? descriptions.en,
      url: lang === "en" ? `${siteUrl}/menu` : `${siteUrl}/${lang}/menu`,
      siteName: "JP French Restaurant Bangkok",
      locale: lang === "fr" ? "fr_FR" : lang === "th" ? "th_TH" : "en_US",
      type: "website",
      images: [
        {
          url: "/og/menu.jpg",
          width: 1200,
          height: 630,
          alt: "JP French Restaurant Menu — French Classics in Bangkok",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[lang] ?? titles.en,
      description: descriptions[lang] ?? descriptions.en,
      images: ["/og/menu.jpg"],
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

// ─── Data ────────────────────────────────────────────────────────────────────

const starters = [
  {
    name: "Escargots de Bourgogne",
    description: "Six snails, garlic-parsley butter, toasted baguette.",
    price: 380,
  },
  {
    name: "Foie Gras Poêlé",
    description: "Pan-seared foie gras, brioche, caramelized fig.",
    price: 680,
  },
  {
    name: "Soupe à l'Oignon Gratinée",
    description: "Classic French onion soup, Gruyère crust.",
    price: 320,
  },
  {
    name: "Salade Niçoise",
    description: "Tuna, olives, green beans, hard-boiled egg, Dijon vinaigrette.",
    price: 350,
  },
];

const mains = [
  {
    name: "Beef Wellington",
    description:
      "Australian beef fillet, mushroom duxelles, golden crust. Served with seasonal vegetables.",
    price: 1480,
    signature: true,
  },
  {
    name: "Confit de Canard",
    description: "Slow-cooked duck leg, sarladaise potatoes, mesclun salad.",
    price: 980,
  },
  {
    name: "Sole Meunière",
    description: "Pan-fried Dover sole, brown butter, lemon, capers.",
    price: 1180,
  },
  {
    name: "Steak Frites",
    description: "Bavette steak, house fries, Café de Paris butter.",
    price: 880,
  },
  {
    name: "Boeuf Bourguignon",
    description: "Braised beef in red wine, pearl onions, mushrooms, carrots.",
    price: 920,
  },
];

const desserts = [
  {
    name: "Crème Brûlée",
    description: "Classic, caramelized with Madagascar vanilla.",
    price: 280,
  },
  {
    name: "Tarte Tatin",
    description: "Warm apple tarte tatin, crème fraîche.",
    price: 320,
  },
  {
    name: "Mousse au Chocolat",
    description: "Dark chocolate mousse, fleur de sel.",
    price: 260,
  },
  {
    name: "Île Flottante",
    description: "Floating island, crème anglaise, praline.",
    price: 250,
  },
];

const wines = [
  { name: "House Red (glass)", description: "Bordeaux AOC", price: 280 },
  { name: "House White (glass)", description: "Burgundy Chardonnay", price: 280 },
  { name: "Champagne Brut (glass)", description: "", price: 480 },
  { name: "Côtes du Rhône (bottle)", description: "", price: 1200 },
  { name: "Sancerre Blanc (bottle)", description: "", price: 1800 },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function DishCard({
  name,
  description,
  price,
  signature,
}: {
  name: string;
  description: string;
  price: number;
  signature?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-[--color-neutral-200] py-4 last:border-0">
      <div className="flex-1">
        <p className="font-heading text-lg font-semibold text-[--color-neutral-900]">
          {name}
          {signature && (
            <span className="ml-2 inline-block rounded-full bg-[--color-brand-secondary] px-2 py-0.5 text-xs font-medium text-[--color-neutral-900]">
              Signature
            </span>
          )}
        </p>
        {description && (
          <p className="mt-0.5 text-sm text-[--color-neutral-700]">{description}</p>
        )}
      </div>
      <p className="shrink-0 font-heading text-base font-semibold text-[--color-brand-primary]">
        {price.toLocaleString()} THB
      </p>
    </div>
  );
}

function MenuSection({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <FadeUp delay={delay}>
      <section className="mb-12">
        <h2 className="font-heading mb-6 border-b-2 border-[--color-brand-primary] pb-2 text-2xl font-bold text-[--color-neutral-900]">
          {title}
        </h2>
        {children}
      </section>
    </FadeUp>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function MenuPage({ params }: MenuPageProps) {
  const { lang } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jpfrench.restaurant";
  const homeUrl = lang === "en" ? siteUrl : `${siteUrl}/${lang}`;
  const menuUrl = lang === "en" ? `${siteUrl}/menu` : `${siteUrl}/${lang}/menu`;

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: homeUrl },
    { name: lang === "fr" ? "Notre Carte" : lang === "th" ? "เมนูของเรา" : "Our Menu", url: menuUrl },
  ]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      {/* Hero */}
      <FadeUp>
        <div className="mb-12 text-center">
          <h1 className="font-heading mb-4 text-4xl font-bold text-[--color-neutral-900] sm:text-5xl">
            Our menu — French classics, priced in THB
          </h1>
          <div
            role="alert"
            className="mt-6 rounded-lg border border-[--color-brand-secondary] bg-[--color-neutral-100] px-4 py-3 text-sm text-[--color-neutral-700]"
          >
            Prices may vary. For tonight&apos;s specials, please call us:{" "}
            <a
              href="tel:+6622584247"
              className="font-semibold text-[--color-brand-primary] underline underline-offset-2"
            >
              +66 2 258 4247
            </a>
          </div>
        </div>
      </FadeUp>

      {/* Starters */}
      <MenuSection title="Starters" delay={100}>
        {starters.map((dish) => (
          <DishCard key={dish.name} {...dish} />
        ))}
      </MenuSection>

      {/* Mains */}
      <MenuSection title="Mains" delay={150}>
        {mains.map((dish) => (
          <DishCard key={dish.name} {...dish} />
        ))}
      </MenuSection>

      {/* Desserts */}
      <MenuSection title="Desserts" delay={200}>
        {desserts.map((dish) => (
          <DishCard key={dish.name} {...dish} />
        ))}
      </MenuSection>

      {/* Wines */}
      <MenuSection title="Wines" delay={250}>
        {wines.map((wine) => (
          <DishCard key={wine.name} {...wine} />
        ))}
        <p className="mt-4 text-sm italic text-[--color-neutral-700]">
          Wine selection changes seasonally. Full wine list available at the restaurant.
        </p>
      </MenuSection>

      {/* Photo Gallery Placeholder */}
      <FadeUp delay={300}>
        <section className="mb-12">
          <h2 className="font-heading mb-6 border-b-2 border-[--color-brand-primary] pb-2 text-2xl font-bold text-[--color-neutral-900]">
            Gallery
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-lg bg-[--color-neutral-200] flex items-center justify-center"
                aria-label="Photo placeholder"
              >
                <span className="text-xs text-[--color-neutral-400]">
                  Photo coming soon
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-[--color-neutral-700]">
            Photos coming soon — contact us for a preview.
          </p>
        </section>
      </FadeUp>

      {/* CTAs */}
      <FadeUp delay={350}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="/menu.pdf"
            download
            className="inline-flex items-center justify-center rounded-md bg-[--color-brand-primary] px-6 py-3 text-sm font-medium text-[--color-neutral-50] transition-colors hover:bg-[--color-brand-primary-hover] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand-primary]"
          >
            Download PDF menu
          </a>
          <a
            href="https://www.chope.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-[--color-brand-primary] px-6 py-3 text-sm font-medium text-[--color-brand-primary] transition-colors hover:bg-[--color-neutral-100] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand-primary]"
          >
            Book via Chope
          </a>
        </div>
      </FadeUp>
    </div>
  );
}
