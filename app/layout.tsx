import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://webuildly.vercel.app"),
  title: { default: "Buildly — Digital Products That Scale", template: "%s — Buildly" },
  description: "Premium websites, SaaS platforms, AI products, automation systems, and custom software engineered for ambitious businesses.",
  keywords: ["software agency", "website development", "SaaS development", "AI applications", "business automation", "UI UX design", "Pakistan"],
  authors: [{ name: "Buildly" }],
  creator: "Buildly",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webuildly.vercel.app",
    siteName: "Buildly",
    title: "Buildly — We Build Digital Experiences That Scale",
    description: "Premium websites, SaaS, AI, automation, and custom software built for momentum.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Buildly — Digital products that scale" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buildly — Digital Products That Scale",
    description: "Premium websites, SaaS, AI, automation, and custom software.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = { themeColor: "#050505", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
