import { FadeUp } from "@/components/ui/FadeUp";

const timelineItems = [
  {
    year: "1995",
    title: "Trained in Lyon",
    description: "Hôtel-restaurant school, classical French cuisine.",
  },
  {
    year: "2010",
    title: "Arrived in Bangkok",
    description:
      "Joined a fine dining hotel kitchen, fell in love with the city.",
  },
  {
    year: "2012",
    title: "Opened JP French Restaurant",
    description: "Sukhumvit Soi 31. A small room, big flavors.",
  },
  {
    year: "2015",
    title: "Beef Wellington becomes the signature",
    description: "Guests started coming back just for it.",
  },
  {
    year: "2026",
    title: "Today",
    description: "13 years, thousands of guests, same recipes, same care.",
  },
];

export function Timeline() {
  return (
    <section
      aria-labelledby="timeline-heading"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-neutral-50)" }}
    >
      <div className="max-w-3xl mx-auto">
        <FadeUp>
          <h2
            id="timeline-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-center mb-14"
            style={{ color: "var(--color-neutral-900)" }}
          >
            A journey in five chapters
          </h2>
        </FadeUp>

        <ol className="relative flex flex-col gap-0" aria-label="Chef timeline">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--color-neutral-200)" }}
            aria-hidden="true"
          />

          {timelineItems.map((item, i) => (
            <FadeUp key={item.year} delay={i * 100}>
              <li className="relative flex gap-8 pb-12 last:pb-0">
                {/* Dot */}
                <div
                  className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: "var(--color-brand-primary)",
                    color: "var(--color-neutral-50)",
                  }}
                >
                  {item.year.slice(2)}
                </div>

                <div className="flex flex-col gap-1 pt-2">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    {item.year}
                  </span>
                  <h3
                    className="font-heading text-xl font-semibold"
                    style={{ color: "var(--color-neutral-900)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-neutral-700)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </li>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}
