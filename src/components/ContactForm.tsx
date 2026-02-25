"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { trackFormSubmit } from "@/lib/analytics";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  inquiryType: z.enum(["standup", "brand", "other"]),
  message: z.string().min(10, "Message too short"),
});

type FormData = z.infer<typeof schema>;

const inquiryOptions = [
  { value: "standup", label: "Stand-up booking" },
  { value: "brand", label: "Brand collaboration" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { inquiryType: "standup" },
  });

  const onSubmit = async (data: FormData) => {
    try {
      trackFormSubmit(data.inquiryType);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
      else throw new Error("Send failed");
    } catch {
      setSubmitted(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6 rounded-2xl bg-slate-800/80 border border-slate-700"
      >
        <p className="text-primary-green font-semibold">Thanks for reaching out!</p>
        <p className="text-slate-400 text-sm mt-1">I&apos;ll get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-white placeholder-slate-500 focus:border-primary-purple focus:ring-1 focus:ring-primary-purple outline-none"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-white placeholder-slate-500 focus:border-primary-purple focus:ring-1 focus:ring-primary-purple outline-none"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-300 mb-1">
          Type of inquiry
        </label>
        <select
          id="inquiryType"
          {...register("inquiryType")}
          className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-white focus:border-primary-purple focus:ring-1 focus:ring-primary-purple outline-none"
        >
          {inquiryOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-white placeholder-slate-500 focus:border-primary-purple focus:ring-1 focus:ring-primary-purple outline-none resize-none"
          placeholder="Tell me about your event or collaboration idea..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-primary-purple py-4 font-semibold text-white hover:bg-violet-600 transition disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </motion.form>
  );
}
