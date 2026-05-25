import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://darshan-makwana-portfolio.vercel.app"),
  title: "Darshan Makwana | Full-Stack Developer Portfolio",
  description:
    "Darshan Makwana — Full-Stack Developer (MERN Stack) & IT Student. Explore projects, skills, and experience in React, Next.js, Node.js & AI.",
  keywords: [
    "Darshan Makwana",
    "Darshan Makwana Portfolio",
    "Darshan Makwana Web Developer",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "AI Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Software Engineer Portfolio",
    "Darshan Makwana Projects",
  ],
  authors: [{ name: "Darshan Makwana" }],
  creator: "Darshan Makwana",
  alternates: {
    canonical: "https://darshan-makwana-portfolio.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://darshan-makwana-portfolio.vercel.app",
    title: "Darshan Makwana | Full-Stack Developer Portfolio",
    description:
      "Darshan Makwana — Full-Stack Developer (MERN Stack) & IT Student. Explore projects, skills, and experience in React, Next.js, Node.js & AI.",
    siteName: "Darshan Makwana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darshan Makwana | Full-Stack Developer Portfolio",
    description:
      "Darshan Makwana — Full-Stack Developer (MERN Stack) & IT Student. Explore projects, skills, and experience.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <Script
          id="json-ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Darshan Makwana",
              url: "https://darshan-makwana-portfolio.vercel.app",
              jobTitle: "Full-Stack Developer",
              description:
                "Full-Stack Developer (MERN Stack) and IT Student specializing in React, Next.js, Node.js, and AI solutions.",
              sameAs: [
                "https://github.com/karmaboy1309",
              ],
              knowsAbout: [
                "MERN Stack",
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "AI",
                "Web Development",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-slate-950 text-slate-50 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-50`}>
        {children}
      </body>
    </html>
  );
}
