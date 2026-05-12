import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import type { Locale } from "@/lib/i18n";

interface CtaBannerProps {
  lang: Locale;
}

export function CtaBanner({ lang }: CtaBannerProps) {
  const menuHref =
    lang === "fr" ? "/fr/menu" : lang === "th" ? "/th/menu" : "/menu";
  const contactHref =
    lang === "fr" ? "/fr/contact" : lang === "th" ? "/th/contact" : "/contact";

  return (
    <section
      aria-labelledby="cta-banner-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 text-center"
      style={{ backgroundColor: "var(--color-neutral-900)" }}
    >
      <FadeUp>
        <div className="max-w-2xl mx-auto flex flex-col gap-8">
          <h2
            id="cta-banner-heading"
            className="font-heading text-3xl sm:text-4xl font-bold"
            style={{ color: "var(--color-neutral-50)" }}
          >
            Come as you are. Leave like a regular.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={menuHref}
              className="inline-flex items-center justify-center px-8 py-3 rounded font-medium text-base transition-colors"
              style={{
                backgroundColor: "var(--color-brand-primary)",
                color: "var(--color-neutral-50)",
              }}
            >
              See our menu
            </Link>
            <Link
              href={contactHref}
              className="inline-flex items-center justify-center px-8 py-3 rounded font-medium text-base border transition-colors"
              style={{
                borderColor: "var(--color-neutral-50)",
                color: "var(--color-neutral-50)",
              }}
            >
              Find us
            </Link>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
