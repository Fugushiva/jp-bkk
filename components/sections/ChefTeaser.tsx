import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import type { Locale } from "@/lib/i18n";

interface ChefTeaserProps {
  lang: Locale;
}

export function ChefTeaser({ lang }: ChefTeaserProps) {
  const storyHref =
    lang === "fr" ? "/fr/notre-histoire" : lang === "th" ? "/th/our-story" : "/our-story";

  return (
    <section
      aria-labelledby="chef-teaser-heading"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-neutral-50)" }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Chef photo placeholder — TODO client: chef photo */}
        <FadeUp>
          <div
            className="aspect-[3/4] rounded-lg overflow-hidden"
            style={{ backgroundColor: "var(--color-neutral-200)" }}
            aria-hidden="true"
          >
            <div className="w-full h-full flex items-center justify-center">
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-neutral-400)" }}
              >
                Chef Jean-Pierre photo — coming soon
              </span>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <div className="flex flex-col gap-6">
            <h2
              id="chef-teaser-heading"
              className="font-heading text-3xl sm:text-4xl font-bold"
              style={{ color: "var(--color-neutral-900)" }}
            >
              Meet the chef
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-neutral-700)" }}
            >
              Chef Jean-Pierre has been cooking French classics in Bangkok since
              2012. Trained in France, he decided to stay and share his cooking
              with Bangkok&apos;s expat community. No shortcuts, no fusion
              gimmicks — just good French food, made right.
            </p>
            <Link
              href={storyHref}
              className="inline-flex items-center gap-2 font-medium text-base transition-colors self-start"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Meet Chef Jean-Pierre
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
