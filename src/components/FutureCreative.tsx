"use client";

import { motion } from "framer-motion";

export default function FutureCreative() {
  return (
    <section id="creative" className="py-16 px-6 lg:px-16 bg-slate-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="inline-block px-6 py-4 rounded-2xl bg-slate-800/80 border border-slate-700"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-slate-500 text-sm font-medium">
            Creative Lab
          </span>
          <p className="text-slate-400 text-xs mt-1">
            More coming soon — finger paint, dance, and more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
