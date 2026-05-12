import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface FooterProps {
  lang: Locale;
}

const legalLinks = {
  en: [
    { label: "Legal Notice", href: "/legal" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookies Policy", href: "/cookies" },
  ],
  fr: [
    { label: "Mentions Légales", href: "/fr/legal" },
    { label: "Politique de Confidentialité", href: "/fr/privacy" },
    { label: "Politique des Cookies", href: "/fr/cookies" },
  ],
  th: [
    { label: "ข้อกำหนดทางกฎหมาย", href: "/th/legal" },
    { label: "นโยบายความเป็นส่วนตัว", href: "/th/privacy" },
    { label: "นโยบายคุกกี้", href: "/th/cookies" },
  ],
};

const langLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  th: "TH",
};

function getLangSwitcherHref(targetLang: Locale): string {
  if (targetLang === "en") return "/";
  return `/${targetLang}`;
}

export function Footer({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const links = legalLinks[lang];

  return (
    <footer
      role="contentinfo"
      className="bg-[var(--color-neutral-900)] text-white/80 mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant info */}
          <div>
            <p className="font-heading text-2xl font-bold text-white tracking-widest mb-3">
              JP
            </p>
            <address className="not-italic text-sm leading-relaxed text-white/70">
              <p>Sukhumvit Soi 31</p>
              <p>Khlong Toei Nuea, Watthana</p>
              <p>Bangkok 10110, Thailand</p>
              <p className="mt-2">
                <a
                  href="tel:+6621234567"
                  className="hover:text-[var(--color-brand-secondary)] transition-colors"
                  aria-label="Call us at +66 2 123 4567"
                >
                  +66 2 123 4567
                </a>
              </p>
            </address>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-3">
              {lang === "fr" ? "Horaires" : lang === "th" ? "เวลาเปิดทำการ" : "Opening Hours"}
            </h3>
            <dl className="text-sm text-white/70 space-y-1">
              <div className="flex justify-between gap-4">
                <dt>{lang === "fr" ? "Lun – Ven" : lang === "th" ? "จ – ศ" : "Mon – Fri"}</dt>
                <dd>12:00 – 14:30 / 18:00 – 22:30</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>{lang === "fr" ? "Sam – Dim" : lang === "th" ? "ส – อา" : "Sat – Sun"}</dt>
                <dd>12:00 – 15:00 / 18:00 – 23:00</dd>
              </div>
            </dl>
          </div>

          {/* Language switcher */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-3">
              {lang === "fr" ? "Langue" : lang === "th" ? "ภาษา" : "Language"}
            </h3>
            <div className="flex gap-3" aria-label="Language switcher">
              {(["en", "fr", "th"] as Locale[]).map((l) => (
                <Link
                  key={l}
                  href={getLangSwitcherHref(l)}
                  aria-current={l === lang ? "true" : undefined}
                  className={`text-sm font-medium tracking-widest uppercase transition-colors ${
                    l === lang
                      ? "text-[var(--color-brand-secondary)] border-b border-[var(--color-brand-secondary)]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {langLabels[l]}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; {currentYear} JP French Restaurant Bangkok.{" "}
            {lang === "fr"
              ? "Tous droits réservés."
              : lang === "th"
              ? "สงวนลิขสิทธิ์"
              : "All rights reserved."}
          </p>
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap gap-4 list-none m-0 p-0">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
