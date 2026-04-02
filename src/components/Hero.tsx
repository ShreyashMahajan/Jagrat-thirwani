"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroCover, site } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={heroCover.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] sm:object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20 sm:from-black/95 sm:via-black/60 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stage-bg via-black/20 to-black/50" />
        <div className="absolute inset-0 bg-spotlight-radial opacity-70" />
        <div className="absolute inset-0 animate-float-light bg-spotlight-soft opacity-40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-end px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:justify-center lg:px-8 lg:pb-24">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-spotlight"
          >
            Standup comedy
          </motion.p>
          <motion.h1
            id="hero-heading"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]"
          >
            {site.comedianName}
          </motion.h1>
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 max-w-lg text-lg text-zinc-300"
          >
            {site.tagline}
          </motion.p>
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="#videos"
              className="inline-flex items-center justify-center rounded-full bg-spotlight px-8 py-3.5 text-sm font-semibold text-stage-bg shadow-lg shadow-spotlight/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Watch performances
            </Link>
            <Link
              href="#booking"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-black/30 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-spotlight/60 hover:text-spotlight"
            >
              Book a show
            </Link>
          </motion.div>
        </div>
      </div>

      <p className="sr-only">{heroCover.alt}</p>
    </section>
  );
}
