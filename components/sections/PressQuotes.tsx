import { FadeUp } from "@/components/ui/FadeUp";

const pressItems = [
  {
    outlet: "BK Magazine",
    quote: "One of the most honest French restaurants in Bangkok.",
  },
  {
    outlet: "Le Petit Journal Bangkok",
    quote: "Un bistro comme à la maison — enfin.",
  },
];

export function PressQuotes() {
  return (
    <section
      aria-labelledby="press-heading"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-neutral-50)" }}
    >
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h2
            id="press-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ color: "var(--color-neutral-900)" }}
          >
            In the press
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pressItems.map((item, i) => (
            <FadeUp key={item.outlet} delay={i * 100}>
              <blockquote
                className="flex flex-col gap-4 p-8 rounded-lg border"
                style={{
                  borderColor: "var(--color-neutral-200)",
                  backgroundColor: "var(--color-neutral-100)",
                }}
              >
                <p
                  className="font-heading text-xl italic leading-relaxed"
                  style={{ color: "var(--color-neutral-900)" }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer>
                  <cite
                    className="not-italic text-sm font-semibold tracking-wide"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    — {item.outlet}
                  </cite>
                </footer>
              </blockquote>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
