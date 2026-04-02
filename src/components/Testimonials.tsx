"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/content";
import { Section } from "./Section";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[index];

  return (
    <Section id="testimonials" className="border-t border-white/5">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-spotlight">
          Testimonials
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
          What organizers say
        </h2>

        <div className="relative mt-14 min-h-[200px]">
          <span
            className="pointer-events-none absolute -left-2 -top-8 font-display text-8xl leading-none text-spotlight/20 md:-left-8"
            aria-hidden
          >
            “
          </span>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="relative z-10 px-4"
            >
              <p className="text-lg text-zinc-300 leading-relaxed md:text-xl">
                {current.quote}
              </p>
              <footer className="mt-8">
                <cite className="not-italic">
                  <span className="font-semibold text-white">{current.author}</span>
                  <span className="mt-1 block text-sm text-zinc-500">
                    {current.role}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div
          className="mt-10 flex justify-center gap-2"
          role="tablist"
          aria-label="Testimonial slides"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-spotlight" : "w-2 bg-zinc-600 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
