"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Variants } from "framer-motion";

interface HeroHomeProps {
  lang: Locale;
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function HeroHome({ lang }: HeroHomeProps) {
  const menuHref = lang === "fr" ? "/fr/menu" : lang === "th" ? "/th/menu" : "/menu";

  return (
    <section
      aria-label="Hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-neutral-900)" }}
    >
      {/* Background placeholder — TODO client: hero photo */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{ backgroundColor: "oklch(12% 0.005 60)" }}
      >
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(12% 0.005 60 / 0.5) 0%, oklch(12% 0.005 60 / 0.75) 100%)",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={itemVariants}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          style={{ color: "var(--color-neutral-50)" }}
        >
          Authentic French bistro in Bangkok —{" "}
          <span style={{ color: "var(--color-brand-secondary)" }}>
            at home since 2012
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--color-neutral-200)" }}
        >
          Chef Jean-Pierre welcomes you on Sukhumvit Soi 31. French classics,
          fairly priced, no service charge.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
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
          <a
            href="https://www.chope.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded font-medium text-base border transition-colors"
            style={{
              borderColor: "var(--color-neutral-50)",
              color: "var(--color-neutral-50)",
            }}
          >
            Book a table
          </a>
        </motion.div>

        {/* Hero image placeholder */}
        <motion.div
          variants={itemVariants}
          className="mt-16 mx-auto max-w-2xl aspect-video rounded-lg overflow-hidden"
          style={{ backgroundColor: "var(--color-neutral-700)" }}
          aria-hidden="true"
        >
          {/* TODO client: hero restaurant photo */}
          <div className="w-full h-full flex items-center justify-center">
            <span
              className="text-sm font-medium"
              style={{ color: "var(--color-neutral-400)" }}
            >
              Restaurant photo — coming soon
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
