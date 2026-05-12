import { FadeUp } from "@/components/ui/FadeUp";

const testimonials = [
  {
    quote:
      "The best French food in Bangkok. Feels like being back in Paris.",
    author: "James T.",
    source: "Chope",
    stars: 5,
  },
  {
    quote:
      "Chef Jean-Pierre is always there. It\u2019s not a restaurant, it\u2019s a home.",
    author: "Marie-Claire F.",
    source: "Trip.com",
    stars: 5,
  },
  {
    quote:
      "Beef Wellington is worth every baht. I\u2019ve been coming here for 5 years.",
    author: "David K.",
    source: "Chope",
    stars: 5,
  },
];

const badges = [
  "Open since 2012",
  "4.7/5 on Chope (44 reviews)",
  "Featured in BK Magazine",
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "var(--color-brand-secondary)" }}>
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-neutral-100)" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-center mb-14"
            style={{ color: "var(--color-neutral-900)" }}
          >
            What our guests say
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {testimonials.map((t, i) => (
            <FadeUp key={t.author} delay={i * 80}>
              <blockquote
                className="flex flex-col gap-4 p-6 rounded-lg h-full"
                style={{ backgroundColor: "var(--color-neutral-50)" }}
              >
                <Stars count={t.stars} />
                <p
                  className="text-base leading-relaxed flex-1 italic"
                  style={{ color: "var(--color-neutral-700)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <cite
                    className="not-italic text-sm font-semibold"
                    style={{ color: "var(--color-neutral-900)" }}
                  >
                    {t.author}
                  </cite>
                  <span
                    className="text-xs ml-2"
                    style={{ color: "var(--color-neutral-400)" }}
                  >
                    on {t.source}
                  </span>
                </footer>
              </blockquote>
            </FadeUp>
          ))}
        </div>

        {/* Social proof badges */}
        <FadeUp>
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-full text-sm font-medium border"
                style={{
                  borderColor: "var(--color-brand-primary)",
                  color: "var(--color-brand-primary)",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
