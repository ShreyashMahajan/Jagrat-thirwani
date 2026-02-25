import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import StickyCTA from "@/components/StickyCTA";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Jagrat Thirwani | Stand-up Comedian & Content Creator",
  description:
    "Book stand-up comedy shows or collaborate on content. 500+ live shows, 80M+ views, 6+ years experience. Corporate, family & private events.",
  openGraph: {
    title: "Jagrat Thirwani | Stand-up & Content Creator",
    description: "Stand-up comedian and content creator. Book shows or work with me for brand collaborations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}
