"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { workItems } from "@/data/content";
import { Section } from "./Section";

export function WorkExperience() {
  return (
    <Section id="work" className="border-t border-white/5 overflow-hidden">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-wider text-spotlight">
          Experience
        </p>
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Work &amp; collaborations
        </h2>
      </div>

      <div className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-4 scrollbar-hide sm:-mx-6 sm:px-6 lg:gap-8">
        {workItems.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: index * 0.06 }}
            className="relative w-[280px] flex-shrink-0 sm:w-[300px]"
          >
            <div
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-0.5 shadow-xl backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(135deg, rgba(45,212,191,0.15) 0%, rgba(255,255,255,0.06) 50%, rgba(45,212,191,0.08) 100%)",
              }}
            >
              <div className="overflow-hidden rounded-[14px] bg-stage-card">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-stage-card via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="mt-4 text-xs font-medium text-spotlight">
                    {item.stats}
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <p className="mt-2 text-center text-xs text-zinc-600 md:hidden">
        Swipe for more →
      </p>
    </Section>
  );
}
