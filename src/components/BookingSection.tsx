"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";

const eventTypes = [
  { value: "", label: "Event type" },
  { value: "corporate", label: "Corporate" },
  { value: "college", label: "College / fest" },
  { value: "private", label: "Private party" },
  { value: "other", label: "Other" },
];

const budgets = [
  { value: "", label: "Budget range" },
  { value: "under-50k", label: "Under ₹50,000" },
  { value: "50k-1.5L", label: "₹50,000 – ₹1,50,000" },
  { value: "1.5L-3L", label: "₹1,50,000 – ₹3,00,000" },
  { value: "3L+", label: "₹3,00,000+" },
  { value: "unsure", label: "Not sure yet" },
];

export function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section
      id="booking"
      className="border-t border-white/5 bg-stage-elevated/50"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-spotlight">
            Booking
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
            Let&apos;s make your event memorable
          </h2>
          <p className="mt-6 max-w-md text-zinc-400 leading-relaxed">
            Share a few details — date, city, audience size, and vibe. I&apos;ll
            confirm availability and next steps quickly.
          </p>
          <p className="mt-6 text-sm font-medium text-spotlight">
            We&apos;ll get back within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-white/10 bg-stage-card p-6 sm:p-8"
            noValidate
          >
            {submitted ? (
              <p className="py-8 text-center text-zinc-300" role="status">
                Thanks — your request is in. We&apos;ll reply within 24 hours.
                <span className="mt-2 block text-sm text-zinc-500">
                  (Demo: wire this form to your email or CRM.)
                </span>
              </p>
            ) : (
              <>
                <div>
                  <label htmlFor="book-name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="book-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Name"
                    className="w-full rounded-xl border border-white/10 bg-stage-bg px-4 py-3.5 text-white placeholder:text-zinc-600 transition-shadow focus:border-spotlight/50 focus:outline-none focus:ring-2 focus:ring-spotlight/30"
                  />
                </div>
                <div>
                  <label htmlFor="book-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="book-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Email"
                    className="w-full rounded-xl border border-white/10 bg-stage-bg px-4 py-3.5 text-white placeholder:text-zinc-600 transition-shadow focus:border-spotlight/50 focus:outline-none focus:ring-2 focus:ring-spotlight/30"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="book-type" className="sr-only">
                      Event type
                    </label>
                    <select
                      id="book-type"
                      name="eventType"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-white/10 bg-stage-bg px-4 py-3.5 text-white transition-shadow focus:border-spotlight/50 focus:outline-none focus:ring-2 focus:ring-spotlight/30"
                    >
                      {eventTypes.map((o) => (
                        <option
                          key={o.value || "empty"}
                          value={o.value}
                          disabled={o.value === ""}
                          className="bg-stage-bg"
                        >
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="book-budget" className="sr-only">
                      Budget range
                    </label>
                    <select
                      id="book-budget"
                      name="budget"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-white/10 bg-stage-bg px-4 py-3.5 text-white transition-shadow focus:border-spotlight/50 focus:outline-none focus:ring-2 focus:ring-spotlight/30"
                    >
                      {budgets.map((o) => (
                        <option
                          key={o.value || "empty-b"}
                          value={o.value}
                          disabled={o.value === ""}
                          className="bg-stage-bg"
                        >
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="book-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="book-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your event (date, city, audience)…"
                    className="w-full resize-y rounded-xl border border-white/10 bg-stage-bg px-4 py-3.5 text-white placeholder:text-zinc-600 transition-shadow focus:border-spotlight/50 focus:outline-none focus:ring-2 focus:ring-spotlight/30"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-spotlight py-4 text-sm font-bold text-stage-bg transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  Request booking
                </button>
                <p className="text-center text-xs text-zinc-500">
                  We&apos;ll get back within 24 hours.
                </p>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
