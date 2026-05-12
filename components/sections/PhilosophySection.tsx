import { FadeUp } from "@/components/ui/FadeUp";

const featureCards = [
  {
    title: "Authenticity",
    description:
      "French recipes as they\u2019re meant to be. No fusion, no shortcuts.",
    icon: "🇫🇷",
  },
  {
    title: "Sourced ingredients",
    description:
      "Australian beef, French foie gras, Madagascar vanilla.",
    icon: "🌿",
  },
  {
    title: "Net prices",
    description:
      "All prices in THB, no service charge, no hidden fees.",
    icon: "✓",
  },
  {
    title: "Family warmth",
    description:
      "Chef Jean-Pierre is here every service. Every time.",
    icon: "🏠",
  },
];

export function PhilosophySection() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-neutral-100)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
            <h2
              id="philosophy-heading"
              className="font-heading text-3xl sm:text-4xl font-bold"
              style={{ color: "var(--color-neutral-900)" }}
            >
              Our philosophy: like at home
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-neutral-700)" }}
            >
              We cook like you&apos;re a guest in our home — not a customer to
              turn over. Seasonal ingredients, sourced where it matters
              (Australian beef, French foie gras, Madagascar vanilla). No
              service charge. No pretension. Just cooking done right.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((card, i) => (
            <FadeUp key={card.title} delay={i * 80}>
              <article
                className="flex flex-col gap-3 p-6 rounded-lg"
                style={{ backgroundColor: "var(--color-neutral-50)" }}
              >
                <span className="text-2xl" aria-hidden="true">
                  {card.icon}
                </span>
                <h3
                  className="font-heading text-lg font-semibold"
                  style={{ color: "var(--color-neutral-900)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-neutral-700)" }}
                >
                  {card.description}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
