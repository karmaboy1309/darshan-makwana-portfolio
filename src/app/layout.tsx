import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Darshan Makwana | Full-Stack & AI Engineer",
  description: "Portfolio of Darshan Makwana, an IT Engineering student at MBIT specializing in MERN stack development, scalable web architecture, and intelligent AI solutions.",
  keywords: ["Darshan Makwana", "Full-Stack Developer", "MERN Stack", "AI Engineer", "React Developer", "Next.js", "Portfolio", "Software Engineer"],
  authors: [{ name: "Darshan Makwana" }],
  creator: "Darshan Makwana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/karmaboy1309",
    title: "Darshan Makwana | Full-Stack & AI Engineer",
    description: "Discover the projects, skills, and experience of Darshan Makwana, a passionate IT Engineering student bridging web architecture and AI.",
    siteName: "Darshan Makwana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darshan Makwana | Full-Stack & AI Engineer",
    description: "Discover the projects, skills, and experience of Darshan Makwana.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-slate-950 text-slate-50 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-50`}>
        {children}
      </body>
    </html>
  );
}
