import { FadeUp } from "@/components/ui/FadeUp";

export function HeroOurStory() {
  return (
    <section
      aria-label="Our Story Hero"
      className="relative py-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
      style={{ backgroundColor: "var(--color-neutral-900)" }}
    >
      {/* Background placeholder — TODO client: kitchen/chef photo */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{ backgroundColor: "oklch(12% 0.005 60)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(12% 0.005 60 / 0.6) 0%, oklch(12% 0.005 60 / 0.85) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <FadeUp>
          <p
            className="text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: "var(--color-brand-secondary)" }}
          >
            Our Story
          </p>
          <h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: "var(--color-neutral-50)" }}
          >
            Chef Jean-Pierre —{" "}
            <span style={{ color: "var(--color-brand-secondary)" }}>
              13 years of French cuisine in Bangkok
            </span>
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-neutral-200)" }}
          >
            From Lyon to Bangkok, a story of passion, simplicity, and good food
            shared with good people.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
