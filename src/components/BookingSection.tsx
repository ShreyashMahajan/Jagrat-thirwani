"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  bookingSchema,
  fieldErrorsFromZod,
  type BookingPayload,
} from "@/lib/booking-schema";
import { site } from "@/data/content";

const eventOptions: { value: BookingPayload["eventType"]; label: string }[] = [
  { value: "corporate", label: "Corporate" },
  { value: "college", label: "College / fest" },
  { value: "private", label: "Private party" },
  { value: "other", label: "Other" },
];

const budgetOptions: { value: BookingPayload["budget"]; label: string }[] = [
  { value: "under-50k", label: "Under ₹50,000" },
  { value: "50k-1.5L", label: "₹50,000 – ₹1,50,000" },
  { value: "1.5L-3L", label: "₹1,50,000 – ₹3,00,000" },
  { value: "3L+", label: "₹3,00,000+" },
  { value: "unsure", label: "Not sure yet" },
];

const inputClass =
  "w-full rounded-xl border bg-stage-bg px-4 py-3.5 text-white placeholder:text-zinc-600 transition-shadow focus:outline-none focus:ring-2";
const inputNormal = `${inputClass} border-white/10 focus:border-spotlight/50 focus:ring-spotlight/30`;
const inputError = `${inputClass} border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/30`;

export function BookingSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<
    Partial<Record<keyof BookingPayload, string>>
  >({});
  const [formError, setFormError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    const payload = {
      name,
      email,
      eventType,
      budget,
      message,
    };

    const parsed = bookingSchema.safeParse(payload);
    if (!parsed.success) {
      setErrors(fieldErrorsFromZod(parsed));
      return;
    }

    setErrors({});
    setPending(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        fieldErrors?: Partial<Record<keyof BookingPayload, string>>;
        error?: string;
      };

      if (res.status === 422 && data.fieldErrors) {
        setErrors(data.fieldErrors);
        return;
      }

      if (res.status === 503 && data.error === "ONLINE_BOOKING_UNAVAILABLE") {
        setFormError(
          `Online booking isn’t set up yet. Please email ${site.email} with your event details.`
        );
        return;
      }

      if (!res.ok || !data.ok) {
        setFormError(
          data.error ||
            `Something went wrong. Please try again or email ${site.email}.`
        );
        return;
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setEventType("");
      setBudget("");
      setMessage("");
    } catch {
      setFormError(
        `Network error. Check your connection or email ${site.email} directly.`
      );
    } finally {
      setPending(false);
    }
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
                Thanks — your request was sent. We&apos;ll reply within 24 hours.
              </p>
            ) : (
              <>
                {formError && (
                  <p
                    className="rounded-xl border border-rose-500/40 bg-rose-950/40 px-4 py-3 text-sm text-rose-200"
                    role="alert"
                  >
                    {formError}
                  </p>
                )}

                <div>
                  <label
                    htmlFor="book-name"
                    className="mb-1.5 block text-xs font-medium text-zinc-400"
                  >
                    Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="book-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "book-name-err" : undefined}
                    className={errors.name ? inputError : inputNormal}
                  />
                  {errors.name && (
                    <p id="book-name-err" className="mt-1.5 text-sm text-rose-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="book-email"
                    className="mb-1.5 block text-xs font-medium text-zinc-400"
                  >
                    Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="book-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "book-email-err" : undefined}
                    className={errors.email ? inputError : inputNormal}
                  />
                  {errors.email && (
                    <p id="book-email-err" className="mt-1.5 text-sm text-rose-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="book-type"
                      className="mb-1.5 block text-xs font-medium text-zinc-400"
                    >
                      Event type <span className="text-rose-400">*</span>
                    </label>
                    <select
                      id="book-type"
                      name="eventType"
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      aria-invalid={Boolean(errors.eventType)}
                      aria-describedby={
                        errors.eventType ? "book-type-err" : undefined
                      }
                      className={errors.eventType ? inputError : inputNormal}
                    >
                      <option value="">Select event type</option>
                      {eventOptions.map((o) => (
                        <option key={o.value} value={o.value} className="bg-stage-bg">
                          {o.label}
                        </option>
                      ))}
                    </select>
                    {errors.eventType && (
                      <p id="book-type-err" className="mt-1.5 text-sm text-rose-400">
                        {errors.eventType}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="book-budget"
                      className="mb-1.5 block text-xs font-medium text-zinc-400"
                    >
                      Budget range <span className="text-rose-400">*</span>
                    </label>
                    <select
                      id="book-budget"
                      name="budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      aria-invalid={Boolean(errors.budget)}
                      aria-describedby={
                        errors.budget ? "book-budget-err" : undefined
                      }
                      className={errors.budget ? inputError : inputNormal}
                    >
                      <option value="">Select budget</option>
                      {budgetOptions.map((o) => (
                        <option key={o.value} value={o.value} className="bg-stage-bg">
                          {o.label}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p id="book-budget-err" className="mt-1.5 text-sm text-rose-400">
                        {errors.budget}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="book-message"
                    className="mb-1.5 block text-xs font-medium text-zinc-400"
                  >
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="book-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your event (date, city, audience)…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "book-message-err" : undefined
                    }
                    className={errors.message ? inputError : inputNormal}
                  />
                  {errors.message && (
                    <p id="book-message-err" className="mt-1.5 text-sm text-rose-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={pending}
                  className="w-full rounded-xl bg-spotlight py-4 text-sm font-bold text-stage-bg transition-transform enabled:hover:scale-[1.01] enabled:active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {pending ? "Sending…" : "Request booking"}
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
