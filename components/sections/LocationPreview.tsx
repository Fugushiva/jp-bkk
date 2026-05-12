import { FadeUp } from "@/components/ui/FadeUp";

export function LocationPreview() {
  return (
    <section
      aria-labelledby="location-heading"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-neutral-100)" }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <FadeUp>
          <div className="flex flex-col gap-6">
            <h2
              id="location-heading"
              className="font-heading text-3xl sm:text-4xl font-bold"
              style={{ color: "var(--color-neutral-900)" }}
            >
              Find us
            </h2>

            <address
              className="not-italic flex flex-col gap-3 text-base"
              style={{ color: "var(--color-neutral-700)" }}
            >
              <p>
                <strong style={{ color: "var(--color-neutral-900)" }}>
                  Address
                </strong>
                <br />
                59/1 Sukhumvit Soi 31 (Soi Sawasdee)
                <br />
                Wattana, Bangkok 10110
              </p>
              <p>
                <strong style={{ color: "var(--color-neutral-900)" }}>
                  Hours
                </strong>
                <br />
                Mon–Sat 12:00–14:30, 18:00–22:30
              </p>
              <p>
                <strong style={{ color: "var(--color-neutral-900)" }}>
                  Phone
                </strong>
                <br />
                <a
                  href="tel:+6622584247"
                  className="transition-colors"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  +66 2 258 4247
                </a>
              </p>
            </address>

            <a
              href="https://maps.google.com/?q=59/1+Sukhumvit+Soi+31+Bangkok"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-base transition-colors self-start"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Get directions
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </FadeUp>

        {/* Map placeholder — TODO client: embed Google Maps */}
        <FadeUp delay={100}>
          <div
            className="aspect-video rounded-lg overflow-hidden"
            style={{ backgroundColor: "var(--color-neutral-200)" }}
            aria-label="Map placeholder"
          >
            <div className="w-full h-full flex items-center justify-center">
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-neutral-400)" }}
              >
                Map — coming soon
              </span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
