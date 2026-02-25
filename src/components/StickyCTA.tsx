"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > 400 && current > lastScroll) setVisible(true);
      else if (current < 200 || current < lastScroll) setVisible(false);
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="sticky-cta"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
        >
          <a
            href="#standup"
            className="rounded-full bg-primary-purple px-6 py-2.5 font-semibold text-white text-sm hover:bg-violet-600 transition"
          >
            Book Stand-Up
          </a>
          <a
            href="#content"
            className="rounded-full bg-primary-green px-6 py-2.5 font-semibold text-white text-sm hover:bg-emerald-600 transition"
          >
            Work With Me
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-500 px-6 py-2.5 font-semibold text-slate-200 text-sm hover:bg-slate-800 transition"
          >
            Contact
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
