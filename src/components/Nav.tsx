"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#landing", label: "Home" },
  { href: "#standup", label: "Stand-up" },
  { href: "#content", label: "Content" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#landing" className="font-display font-bold text-lg text-white">
          JAGRAT THIRWANI
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-400 hover:text-white transition text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#standup"
            className="rounded-full bg-primary-purple px-4 py-2 text-sm font-semibold text-white hover:bg-violet-600 transition"
          >
            Book Stand-Up
          </a>
          <a
            href="#content"
            className="rounded-full bg-primary-green px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition"
          >
            Work With Me
          </a>
        </div>
        <button
          type="button"
          className="md:hidden p-2 text-slate-400 hover:text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-800 bg-slate-900/95"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-slate-300 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#standup"
                className="rounded-full bg-primary-purple px-4 py-2 text-sm font-semibold text-white text-center"
                onClick={() => setOpen(false)}
              >
                Book Stand-Up
              </a>
              <a
                href="#content"
                className="rounded-full bg-primary-green px-4 py-2 text-sm font-semibold text-white text-center"
                onClick={() => setOpen(false)}
              >
                Work With Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
