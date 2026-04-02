import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: site.seoTitle,
  description: site.seoDescription,
  keywords: [
    "Jagrat Thirwani",
    "standup comedian Indore",
    "Bhola-Bhala",
    "standup comedy India",
    "book comedian",
    "corporate comedy",
    "college fest comedian",
  ],
  openGraph: {
    title: site.seoTitle,
    description: site.seoDescription,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans min-h-screen">{children}</body>
    </html>
  );
}
