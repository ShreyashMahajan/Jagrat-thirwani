import Link from "next/link";
import { site } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-stage-bg py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8 md:flex-row md:justify-between md:text-left">
        <Link
          href="#"
          className="font-display text-lg font-bold text-white"
          aria-label={`${site.comedianName} home`}
        >
          <span className="text-spotlight">{site.logoText}</span>{" "}
          {site.comedianName}
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
          <Link
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-spotlight"
          >
            Instagram
          </Link>
          <Link
            href={site.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-spotlight"
          >
            YouTube
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="hover:text-spotlight"
          >
            Email
          </a>
        </div>
        <p className="text-sm text-zinc-600">
          © {year} {site.comedianName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
