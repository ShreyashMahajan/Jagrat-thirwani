import Link from "next/link";
import { site } from "@/data/content";
import { Section } from "./Section";

export function ContactSocial() {
  return (
    <Section id="contact" className="border-t border-white/5">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-spotlight">
            Contact
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white">
            Get in touch
          </h2>
          <p className="mt-4 text-zinc-400">
            <a
              href={`mailto:${site.email}`}
              className="text-white underline-offset-4 hover:text-spotlight hover:underline"
            >
              {site.email}
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-spotlight/50 hover:text-spotlight"
          >
            Instagram
          </Link>
          <Link
            href={site.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-spotlight/50 hover:text-spotlight"
          >
            YouTube channel
          </Link>
        </div>
      </div>
    </Section>
  );
}
