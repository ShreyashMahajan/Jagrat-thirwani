"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "Total Reach", value: "80M+" },
  { label: "Avg Reel Views", value: "—" },
  { label: "Engagement Rate", value: "—" },
  { label: "Followers", value: "17.5K+" },
];

const services = [
  {
    icon: "📦",
    title: "Brand Collaborations",
    desc: "Sponsored posts, reels, and campaigns aligned with your brand.",
    cta: "Work With Me",
  },
  {
    icon: "🎥",
    title: "UGC / EGC",
    desc: "User-generated and expert-generated content for ads and social.",
    cta: "Get Quote",
  },
  {
    icon: "📝",
    title: "Ad Writing",
    desc: "Scripts and concepts for video ads and social content.",
    cta: "Discuss",
  },
  {
    icon: "📈",
    title: "Content Strategy",
    desc: "Ideation and content plans for Instagram and reels.",
    cta: "Work With Me",
  },
  {
    icon: "🚀",
    title: "Instagram Boost Reels",
    desc: "Reels designed for paid boost and maximum reach.",
    cta: "Work With Me",
  },
];

const brandPlaceholders = ["Brand A", "Brand B", "Brand C", "Brand D"];

export default function ContentSection() {
  return (
    <section id="content" className="py-20 lg:py-28 px-6 lg:px-16 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-display font-bold text-3xl sm:text-4xl text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Content Creation
        </motion.h2>
        <motion.p
          className="text-slate-400 text-lg max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          From viral reels to brand campaigns — reach, engagement, and ROI-focused
          content for brands.
        </motion.p>

        {/* Stats dashboard */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="p-5 rounded-xl bg-slate-800/80 border border-slate-700"
            >
              <div className="font-display font-bold text-2xl text-white">
                {m.value}
              </div>
              <div className="text-slate-400 text-sm">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Viral reels grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            Top reels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-[9/16] max-h-80 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 text-sm"
              >
                Reel {i}
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-2">
            Connect Instagram oEmbed or embed links in components/ContentSection.tsx
          </p>
        </motion.div>

        {/* Brand collaborations */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            Past brand collaborations
          </h3>
          <div className="flex flex-wrap gap-4">
            {brandPlaceholders.map((b) => (
              <div
                key={b}
                className="w-32 h-16 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 text-sm"
              >
                {b}
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-3">
            Add logos and campaign results (goal, deliverable, result) for higher conversion.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-primary-green/50 transition"
              >
                <span className="text-2xl mb-2 block">{s.icon}</span>
                <h4 className="font-semibold text-white mb-1">{s.title}</h4>
                <p className="text-slate-400 text-sm mb-4">{s.desc}</p>
                <a
                  href="#contact"
                  className="inline-block rounded-full bg-primary-green/20 text-primary-green px-4 py-2 text-sm font-medium hover:bg-primary-green/30 transition"
                >
                  {s.cta}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#contact"
            className="rounded-full bg-primary-green px-8 py-4 font-semibold text-white hover:bg-emerald-600 transition"
          >
            Work With Me
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-500 px-8 py-4 font-semibold text-slate-200 hover:bg-slate-800 transition"
          >
            Request Media Kit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
