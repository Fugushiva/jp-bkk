/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://jp-bkk.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  alternateRefs: [
    {
      href: process.env.NEXT_PUBLIC_SITE_URL || "https://jp-bkk.com",
      hreflang: "en",
    },
    {
      href: `${process.env.NEXT_PUBLIC_SITE_URL || "https://jp-bkk.com"}/fr`,
      hreflang: "fr",
    },
    {
      href: `${process.env.NEXT_PUBLIC_SITE_URL || "https://jp-bkk.com"}/th`,
      hreflang: "th",
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
