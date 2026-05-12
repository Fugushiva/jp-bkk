import { FadeUp } from "@/components/ui/FadeUp";

const dishes = [
  {
    name: "Beef Wellington",
    description:
      "Our signature since 2012. Australian beef, mushroom duxelles, golden crust.",
  },
  {
    name: "Escargots de Bourgogne",
    description:
      "Six snails, garlic-parsley butter, toasted baguette.",
  },
  {
    name: "Foie Gras Poêlé",
    description:
      "Pan-seared foie gras, brioche, caramelized fig.",
  },
  {
    name: "Crème Brûlée",
    description:
      "Classic, caramelized with a touch of vanilla from Madagascar.",
  },
];

export function SignatureDishes() {
  return (
    <section
      aria-labelledby="dishes-heading"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-neutral-50)" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2
            id="dishes-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4"
            style={{ color: "var(--color-neutral-900)" }}
          >
            Signature dishes since day one
          </h2>
          <p
            className="text-center text-base mb-14 max-w-xl mx-auto"
            style={{ color: "var(--color-neutral-700)" }}
          >
            Recipes that have never changed. Because they don&apos;t need to.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, i) => (
            <FadeUp key={dish.name} delay={i * 80}>
              <article className="flex flex-col gap-4">
                {/* Dish image placeholder — TODO client: dish photo */}
                <div
                  className="aspect-square rounded-lg overflow-hidden"
                  style={{ backgroundColor: "var(--color-neutral-200)" }}
                  aria-hidden="true"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span
                      className="text-xs font-medium text-center px-2"
                      style={{ color: "var(--color-neutral-400)" }}
                    >
                      {dish.name} photo
                    </span>
                  </div>
                </div>
                <div>
                  <h3
                    className="font-heading text-xl font-semibold mb-2"
                    style={{ color: "var(--color-neutral-900)" }}
                  >
                    {dish.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-neutral-700)" }}
                  >
                    {dish.description}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
