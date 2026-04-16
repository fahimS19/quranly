import type { Metadata } from "next";
import "./globals.css";

import { Amiri, Reem_Kufi, Cairo } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-amiri",
});

const reem = Reem_Kufi({
  subsets: ["arabic"],
  variable: "--font-reem",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quranly",
  description: "Quran app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${amiri.variable}
        ${reem.variable}
        ${cairo.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
