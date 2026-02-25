"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Live Shows" },
  { value: "80M+", label: "Views" },
  { value: "6+", label: "Years Experience" },
  { value: "17.5K+", label: "Followers" },
];

export default function Hero() {
  return (
    <section
      id="landing"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 px-6 py-20 lg:px-16 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/50 to-primary-purple/10 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-2xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
          JAGRAT THIRWANI
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 mb-2">
          Stand-up Comedian | Content Creator
        </p>
        <p className="text-slate-400 mb-10 max-w-lg">
          Clean, family-friendly comedy with 6+ years on stage. From corporate
          events to viral reels — ready to entertain or collaborate.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-slate-800/80 backdrop-blur rounded-xl px-4 py-3 border border-slate-700/50"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08 }}
            >
              <div className="font-display font-bold text-lg sm:text-xl text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <motion.a
            href="#standup"
            className="inline-flex items-center justify-center rounded-full bg-primary-purple px-8 py-4 font-semibold text-white shadow-lg shadow-primary-purple/30 hover:bg-violet-600 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Stand-Up
          </motion.a>
          <motion.a
            href="#content"
            className="inline-flex items-center justify-center rounded-full bg-primary-green px-8 py-4 font-semibold text-white shadow-lg shadow-primary-green/30 hover:bg-emerald-600 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Work With Me
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-lg aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="text-center p-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-purple/30 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-primary-purple"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-slate-400 text-sm">Highlight reel</p>
            <p className="text-slate-500 text-xs mt-1">
              Add your video URL in components/Hero.tsx
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
