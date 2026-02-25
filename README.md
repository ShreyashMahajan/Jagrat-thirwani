# Jagrat Thirwani — Conversion Portfolio

Dual-funnel portfolio: **Stand-up bookings** and **Brand collaborations**. Built with Next.js 14, Tailwind, and Framer Motion.

## Requirements

- **Node.js 18+** (recommended 20). Check with `node -v`. Upgrade via [nodejs.org](https://nodejs.org) or `nvm`.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/` — Layout, main page, API route for contact
- `src/components/` — Hero, Stand-up section, Content section, Contact form, Nav, Sticky CTA
- `src/lib/` — `mail.ts` (email), `analytics.ts` (tracking hooks)

## Environment (optional)

Create `.env.local`:

```env
CONTACT_EMAIL=your@email.com
# For real email delivery (e.g. Resend):
# RESEND_API_KEY=re_xxxx
```

Wire Resend in `src/lib/mail.ts` (see comments there). Without it, the contact form still returns success and logs in dev.

## Customization

- **Hero video**: Replace the placeholder in `src/components/Hero.tsx` with an actual video or embed.
- **YouTube IDs**: In `src/components/StandupSection.tsx`, set `videoIds` to your real video IDs.
- **Gallery**: Replace placeholder divs with `<Image>` or img URLs in `StandupSection.tsx`.
- **Reels**: Add Instagram oEmbed or embed URLs in `src/components/ContentSection.tsx`.
- **Brand logos**: Update `brandPlaceholders` and add logo images in `ContentSection.tsx`.
- **WhatsApp / Instagram**: In `src/components/ContactSection.tsx`, set `whatsappNumber` and `instagramHandle`.

## Deploy (Vercel)

1. Push to GitHub and import the repo in Vercel.
2. Add `CONTACT_EMAIL` and `RESEND_API_KEY` in Vercel project env.
3. Deploy.

## Conversion features

- Sticky CTA bar on scroll (Book Stand-Up / Work With Me / Contact)
- Two primary CTAs above the fold
- Inquiry-type dropdown on contact form
- Sections structured for HR (stand-up) and brands (content)
- Analytics-ready: use `src/lib/analytics.ts` with GA / Meta Pixel
