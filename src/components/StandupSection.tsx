"use client";

import { motion } from "framer-motion";

const companies = [
  "Corporate Events",
  "Family Shows",
  "Private Events",
  "Ticketed Gigs",
];
const cities = ["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad", "More"];

const offerings = [
  {
    icon: "🎤",
    title: "Corporate Shows",
    desc: "Clean, professional comedy for offsites, town halls, and celebrations.",
    duration: "45–60 min",
    audience: "20–500+",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Shows",
    desc: "Family-friendly sets suitable for all ages.",
    duration: "45–90 min",
    audience: "50–300+",
  },
  {
    icon: "🎟",
    title: "Ticketed Events",
    desc: "Club and venue shows. Bring your audience.",
    duration: "60–90 min",
    audience: "Variable",
  },
  {
    icon: "🏠",
    title: "Private Events",
    desc: "Birthdays, weddings, private parties.",
    duration: "30–60 min",
    audience: "10–100+",
  },
];

const testimonials = [
  {
    quote: "Jagrat had our entire office in splits. Professional, on time, and his content was perfect for a corporate audience.",
    author: "HR Manager, Tech Company",
  },
  {
    quote: "We've had many comedians — Jagrat stood out. Clean humour that everyone enjoyed.",
    author: "Event Organizer",
  },
];

const videoIds = ["dQw4w9WgXcQ", "dQw4w9WgXcQ", "dQw4w9WgXcQ"]; // Replace with real YouTube IDs
const galleryImages = Array(6).fill(null); // Replace with real image paths

export default function StandupSection() {
  return (
    <section id="standup" className="py-20 lg:py-28 px-6 lg:px-16 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-display font-bold text-3xl sm:text-4xl text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Stand-Up Comedy
        </motion.h2>
        <motion.p
          className="text-slate-400 text-lg max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Clean, family-friendly stand-up with 6+ years and 500+ live shows.
          Shared the stage with Zakir Khan, Anubhav Singh Bassi, Harsh Gujral.
          Ex-IT professional — corporate perspective that resonates.
        </motion.p>

        {/* Companies & Cities */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Performed for
          </h3>
          <div className="flex flex-wrap gap-2">
            {companies.map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700"
              >
                {c}
              </span>
            ))}
          </div>
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-6 mb-3">
            Cities
          </h3>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <span
                key={city}
                className="px-4 py-2 rounded-full bg-slate-800/80 text-slate-400 text-sm"
              >
                {city}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Videos */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            Best 5 min set & more
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videoIds.map((id, i) => (
              <div
                key={i}
                className="aspect-video rounded-xl overflow-hidden bg-slate-800 border border-slate-700"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}?rel=0`}
                  title={`Stand-up clip ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            Live performance photos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 text-sm"
              >
                Photo {i + 1}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Offerings */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <h3 className="text-lg font-semibold text-white mb-6">What I offer</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-primary-purple/50 transition"
              >
                <span className="text-2xl mb-2 block">{o.icon}</span>
                <h4 className="font-semibold text-white mb-1">{o.title}</h4>
                <p className="text-slate-400 text-sm mb-3">{o.desc}</p>
                <p className="text-slate-500 text-xs">
                  {o.duration} · {o.audience}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            What clients say
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 italic text-slate-300"
              >
                "{t.quote}"
                <footer className="mt-3 text-slate-500 not-italic text-sm">
                  — {t.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="#contact"
            className="rounded-full bg-primary-purple px-8 py-4 font-semibold text-white hover:bg-violet-600 transition"
          >
            Check Availability
          </a>
        </motion.div>
      </div>
    </section>
  );
}
