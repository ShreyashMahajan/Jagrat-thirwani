"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site, videos, type VideoItem } from "@/data/content";
import { Section } from "./Section";

const categoryLabel: Record<VideoItem["category"], string> = {
  live: "Live shows",
  crowd: "Crowd work",
  clips: "Clips",
};

function VideoCard({ item, index }: { item: VideoItem; index: number }) {
  const href =
    item.externalUrl ??
    (item.youtubeId
      ? `https://www.youtube.com/watch?v=${item.youtubeId}`
      : site.youtubeChannel);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-2xl border border-white/10 bg-stage-card shadow-lg transition-shadow hover:shadow-xl hover:shadow-spotlight/5"
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={item.thumbnail}
            alt={item.thumbnailAlt ?? item.title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100"
            aria-hidden
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-spotlight text-stage-bg shadow-lg">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="sr-only">Play on YouTube</span>
            </span>
          </div>
          <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
            {categoryLabel[item.category]}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-display text-base font-semibold text-white line-clamp-2 group-hover:text-spotlight transition-colors">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-500">{item.views}</p>
        </div>
      </Link>
    </motion.article>
  );
}

export function VideoSection() {
  return (
    <Section id="videos" className="border-t border-white/5">
      <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-spotlight">
            Watch
          </p>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Trending performances
          </h2>
        </div>
        <p className="max-w-md text-sm text-zinc-500">
          Clips from live rooms, crowd work, and short sets — tap to open on YouTube.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((item, index) => (
          <VideoCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
}
