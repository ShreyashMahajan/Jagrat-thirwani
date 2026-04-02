"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about, aboutImages } from "@/data/content";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" className="border-t border-white/5 bg-stage-bg">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <motion.div
          className="group relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={aboutImages.primary}
              alt={aboutImages.primaryAlt}
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
            />
          </div>
        </motion.div>

        <div>
          <div className="relative border-l-2 border-spotlight pl-6 md:pl-8">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              {about.headline}
            </h2>
            <div className="mt-6 max-w-[600px] space-y-4 text-zinc-400 leading-relaxed">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-spotlight">
                Key highlights
              </p>
              <ul className="mt-3 space-y-2 text-zinc-300">
                {about.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-spotlight" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
