"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const whatsappNumber = "919876543210"; // Replace with real number
const instagramHandle = "jagratthirwani"; // Replace with real handle

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 px-6 lg:px-16 bg-slate-900/50">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-display font-bold text-3xl sm:text-4xl text-white mb-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in touch
        </motion.h2>
        <motion.p
          className="text-slate-400 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Stand-up booking, brand collaboration, or something else — say hi.
        </motion.p>

        <ContactForm />

        <motion.div
          className="flex justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary-green transition text-sm"
          >
            WhatsApp
          </a>
          <a
            href={`https://instagram.com/${instagramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary-purple transition text-sm"
          >
            Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
