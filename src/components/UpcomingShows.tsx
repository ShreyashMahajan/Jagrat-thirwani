"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { upcomingShows } from "@/data/content";
import { Section } from "./Section";

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function UpcomingShows() {
  return (
    <Section id="shows" className="border-t border-white/5 bg-stage-card/20">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-wider text-spotlight">
          Calendar
        </p>
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Upcoming shows
        </h2>
      </div>

      <ul className="grid gap-4 md:grid-cols-2" role="list">
        {upcomingShows.map((show, i) => (
          <motion.li
            key={show.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`relative rounded-2xl border p-6 transition-shadow ${
              show.featured
                ? "border-spotlight/40 bg-gradient-to-br from-spotlight/10 to-transparent shadow-[0_0_40px_-12px_rgba(45,212,191,0.35)]"
                : "border-white/10 bg-stage-card/50"
            }`}
          >
            {show.sellingFast && (
              <span className="absolute right-4 top-4 rounded-full bg-spotlight px-2.5 py-0.5 text-xs font-bold text-stage-bg">
                Selling fast
              </span>
            )}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-spotlight">
                  {show.city}
                </p>
                <p className="mt-1 font-display text-xl font-bold text-white">
                  {formatDate(show.date)}
                </p>
                <p className="mt-2 text-zinc-400">{show.venue}</p>
              </div>
              {show.ticketUrl ? (
                <Link
                  href={show.ticketUrl}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-spotlight px-6 py-2.5 text-sm font-semibold text-stage-bg transition-transform hover:scale-[1.02] sm:mt-0 sm:w-auto"
                >
                  Book tickets
                </Link>
              ) : (
                <span className="mt-4 inline-block text-sm text-zinc-500 sm:mt-0">
                  Tickets soon
                </span>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
