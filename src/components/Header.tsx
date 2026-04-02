"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/data/content";

const nav = [
  { href: "#shows", label: "Shows" },
  { href: "#about", label: "About" },
  { href: "#videos", label: "Videos" },
  { href: "#gallery", label: "Gallery" },
  { href: "#booking", label: "Book" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-stage-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="font-display text-xl font-bold tracking-tight text-white"
          aria-label={`${site.comedianName} home`}
        >
          <span className="text-spotlight">{site.logoText}</span>
          <span className="ml-1 text-white/90 max-sm:hidden">{site.comedianName.split(" ")[0]}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-spotlight"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#booking"
          className="hidden rounded-full bg-spotlight px-5 py-2 text-sm font-semibold text-stage-bg transition-transform hover:scale-[1.02] active:scale-[0.98] md:inline-flex"
        >
          Book a show
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5 bg-stage-bg md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-zinc-300 hover:bg-white/5 hover:text-spotlight"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#booking"
                className="mt-2 rounded-full bg-spotlight py-3 text-center font-semibold text-stage-bg"
                onClick={() => setOpen(false)}
              >
                Book a show
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
