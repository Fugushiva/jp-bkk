/**
 * JSON-LD Schema.org helpers for JP French Restaurant Bangkok
 * Used via <script type="application/ld+json"> in page JSX
 */

const SITE_URL = "https://jpfrench.restaurant";
const RESTAURANT_NAME = "JP French Restaurant";

// ─── Global schemas (injected in root layout) ─────────────────────────────────

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: RESTAURANT_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/og/logo.png`,
  sameAs: [
    "https://www.chope.co/bangkok-restaurant/jp-french-restaurant",
    "https://www.tripadvisor.com/Restaurant_Review-g293916-d1234567-Reviews-JP_French_Restaurant-Bangkok.html",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Restaurant"],
  name: RESTAURANT_NAME,
  url: SITE_URL,
  telephone: "+66 2 258 4247",
  email: "contact@jpfrench.restaurant",
  address: {
    "@type": "PostalAddress",
    streetAddress: "59/1 Sukhumvit Soi 31 (Soi Sawasdee)",
    addressLocality: "Wattana",
    addressRegion: "Bangkok",
    postalCode: "10110",
    addressCountry: "TH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.7308,
    longitude: 100.5697,
  },
  openingHours: ["Mo-Sa 12:00-14:30", "Mo-Sa 18:00-22:30"],
  priceRange: "฿฿",
  servesCuisine: "French",
  currenciesAccepted: "THB",
  paymentAccepted: "Cash, Credit Card",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.7,
    reviewCount: 44,
    bestRating: 5,
    worstRating: 1,
  },
  image: `${SITE_URL}/og/home.jpg`,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: RESTAURANT_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// ─── Page-specific schemas ────────────────────────────────────────────────────

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const chefPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jean-Pierre",
  jobTitle: "Head Chef",
  worksFor: {
    "@type": "LocalBusiness",
    name: RESTAURANT_NAME,
  },
};

export const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "JP French Restaurant Menu",
  url: `${SITE_URL}/menu`,
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Starters",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Escargots de Bourgogne",
          description: "Six snails, garlic-parsley butter, toasted baguette.",
          offers: { "@type": "Offer", price: 380, priceCurrency: "THB" },
        },
        {
          "@type": "MenuItem",
          name: "Foie Gras Poêlé",
          description: "Pan-seared foie gras, brioche, caramelized fig.",
          offers: { "@type": "Offer", price: 680, priceCurrency: "THB" },
        },
        {
          "@type": "MenuItem",
          name: "Soupe à l'Oignon Gratinée",
          description: "Classic French onion soup, Gruyère crust.",
          offers: { "@type": "Offer", price: 320, priceCurrency: "THB" },
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Mains",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Beef Wellington",
          description:
            "Australian beef fillet, mushroom duxelles, golden crust. Served with seasonal vegetables.",
          offers: { "@type": "Offer", price: 1480, priceCurrency: "THB" },
        },
        {
          "@type": "MenuItem",
          name: "Confit de Canard",
          description: "Slow-cooked duck leg, sarladaise potatoes, mesclun salad.",
          offers: { "@type": "Offer", price: 980, priceCurrency: "THB" },
        },
        {
          "@type": "MenuItem",
          name: "Sole Meunière",
          description: "Pan-fried Dover sole, brown butter, lemon, capers.",
          offers: { "@type": "Offer", price: 1180, priceCurrency: "THB" },
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Desserts",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Crème Brûlée",
          description: "Classic, caramelized with Madagascar vanilla.",
          offers: { "@type": "Offer", price: 280, priceCurrency: "THB" },
        },
        {
          "@type": "MenuItem",
          name: "Tarte Tatin",
          description: "Warm apple tarte tatin, crème fraîche.",
          offers: { "@type": "Offer", price: 320, priceCurrency: "THB" },
        },
        {
          "@type": "MenuItem",
          name: "Mousse au Chocolat",
          description: "Dark chocolate mousse, fleur de sel.",
          offers: { "@type": "Offer", price: 260, priceCurrency: "THB" },
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Wines",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "House Red (glass)",
          description: "Bordeaux AOC",
          offers: { "@type": "Offer", price: 280, priceCurrency: "THB" },
        },
        {
          "@type": "MenuItem",
          name: "House White (glass)",
          description: "Burgundy Chardonnay",
          offers: { "@type": "Offer", price: 280, priceCurrency: "THB" },
        },
        {
          "@type": "MenuItem",
          name: "Champagne Brut (glass)",
          description: "",
          offers: { "@type": "Offer", price: 480, priceCurrency: "THB" },
        },
      ],
    },
  ],
};
