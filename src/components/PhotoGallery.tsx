"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/data/content";
import { Section } from "./Section";

export function PhotoGallery() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = galleryImages.find((g) => g.id === activeId);

  const close = useCallback(() => setActiveId(null), []);

  useEffect(() => {
    if (!activeId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeId, close]);

  return (
    <Section id="gallery" className="border-t border-white/5 bg-stage-card/30">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-wider text-spotlight">
          Gallery
        </p>
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          On stage &amp; behind the scenes
        </h2>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6">
        {galleryImages.map((img, i) => (
          <motion.button
            key={img.id}
            type="button"
            className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-spotlight lg:mb-6"
            onClick={() => setActiveId(img.id)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 6) * 0.05 }}
            aria-label={`Open larger view: ${img.alt}`}
          >
            <div
              className={`relative w-full overflow-hidden ${
                img.aspect === "tall"
                  ? "aspect-[3/4]"
                  : img.aspect === "wide"
                    ? "aspect-[16/10]"
                    : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative mx-auto max-h-[85vh] w-full max-w-5xl">
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={1600}
                  height={1200}
                  className="h-auto max-h-[85vh] w-full rounded-lg object-contain"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
              <button
                type="button"
                onClick={close}
                className="absolute -right-2 -top-12 rounded-lg bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 md:-right-4 md:-top-4"
              >
                Close
              </button>
              <p className="mt-3 text-center text-sm text-zinc-400">{active.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
