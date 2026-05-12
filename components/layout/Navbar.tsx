"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useScrolled } from "@/hooks/useScrolled";
import type { Locale } from "@/lib/i18n";

interface NavbarProps {
  lang: Locale;
}

const navLinks = [
  { key: "home", labelEn: "Home", labelFr: "Accueil", labelTh: "หน้าแรก", href: "/" },
  { key: "menu", labelEn: "Menu", labelFr: "Menu", labelTh: "เมนู", href: "/menu" },
  { key: "story", labelEn: "Our Story", labelFr: "Notre Histoire", labelTh: "เรื่องราวของเรา", href: "/our-story" },
  { key: "contact", labelEn: "Contact", labelFr: "Contact", labelTh: "ติดต่อ", href: "/contact" },
];

const langLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  th: "TH",
};

function getLabel(link: (typeof navLinks)[0], lang: Locale): string {
  if (lang === "fr") return link.labelFr;
  if (lang === "th") return link.labelTh;
  return link.labelEn;
}

function getLocalizedHref(href: string, lang: Locale): string {
  if (lang === "en") return href;
  return `/${lang}${href}`;
}

function getLangSwitcherHref(targetLang: Locale, currentLang: Locale): string {
  // For simplicity, switch to the home page of the target locale
  if (targetLang === "en") return "/";
  return `/${targetLang}`;
}

export function Navbar({ lang }: NavbarProps) {
  const scrolled = useScrolled(60);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-neutral-900)]/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <Link
          href={getLocalizedHref("/", lang)}
          className="font-heading text-2xl font-bold text-white tracking-widest hover:text-[var(--color-brand-secondary)] transition-colors"
          aria-label="JP French Restaurant Bangkok — Home"
        >
          JP
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.key}>
              <Link
                href={getLocalizedHref(link.href, lang)}
                className="text-sm font-medium text-white/90 hover:text-[var(--color-brand-secondary)] transition-colors tracking-wide uppercase"
              >
                {getLabel(link, lang)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop language switcher */}
        <div className="hidden md:flex items-center gap-2" aria-label="Language switcher">
          {(["en", "fr", "th"] as Locale[]).map((l) => (
            <Link
              key={l}
              href={getLangSwitcherHref(l, lang)}
              aria-current={l === lang ? "true" : undefined}
              className={`text-xs font-medium tracking-widest uppercase transition-colors px-1 ${
                l === lang
                  ? "text-[var(--color-brand-secondary)] border-b border-[var(--color-brand-secondary)]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {langLabels[l]}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-secondary)]"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[var(--color-neutral-900)] border-[var(--color-neutral-700)] w-72"
          >
            <SheetHeader>
              <SheetTitle className="font-heading text-2xl text-white tracking-widest text-left">
                JP
              </SheetTitle>
            </SheetHeader>

            <nav aria-label="Mobile navigation" className="mt-8">
              <ul className="flex flex-col gap-6 list-none m-0 p-0">
                {navLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={getLocalizedHref(link.href, lang)}
                      onClick={() => setMobileOpen(false)}
                      className="text-base font-medium text-white/90 hover:text-[var(--color-brand-secondary)] transition-colors tracking-wide uppercase"
                    >
                      {getLabel(link, lang)}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile language switcher */}
              <div className="mt-8 pt-6 border-t border-[var(--color-neutral-700)] flex gap-4" aria-label="Language switcher">
                {(["en", "fr", "th"] as Locale[]).map((l) => (
                  <Link
                    key={l}
                    href={getLangSwitcherHref(l, lang)}
                    onClick={() => setMobileOpen(false)}
                    aria-current={l === lang ? "true" : undefined}
                    className={`text-sm font-medium tracking-widest uppercase transition-colors ${
                      l === lang
                        ? "text-[var(--color-brand-secondary)] border-b border-[var(--color-brand-secondary)]"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {langLabels[l]}
                  </Link>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
