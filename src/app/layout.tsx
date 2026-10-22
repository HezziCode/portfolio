import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import ExitIntentModal from "@/components/ExitIntentModal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.huzaifasys.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Huzaifa Sys | Full Stack AI Engineer",
    template: "%s | Huzaifa Sys",
  },
  description:
    "Full Stack AI Engineer based in Pakistan, architecting scalable web applications, autonomous agent workflows, and resilient cloud systems.",
  applicationName: "Huzaifa Sys Portfolio",
  authors: [{ name: "Huzaifa Sys", url: siteUrl }],
  creator: "Huzaifa Sys",
  publisher: "Huzaifa Sys",
  keywords: [
    "Huzaifa Sys",
    "Full Stack AI Engineer",
    "AI Engineer",
    "Agentic AI Engineer",
    "Autonomous AI Agents",
    "Next.js Developer",
    "React 19",
    "TypeScript",
    "Python FastAPI",
    "LangChain",
    "LangGraph",
    "Cloud Architecture",
    "DevOps",
    "Docker",
    "AWS",
    "Pakistan",
  ],
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Huzaifa Sys — Full Stack AI Engineer",
    title: "Huzaifa Sys | Full Stack AI Engineer",
    description:
      "Full Stack AI Engineer architecting scalable web applications, autonomous agent workflows, and resilient cloud systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Huzaifa Sys — Full Stack AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Huzaifa Sys | Full Stack AI Engineer",
    description:
      "Full Stack AI Engineer architecting scalable web applications, autonomous agent workflows, and resilient cloud systems.",
    images: ["/og-image.png"],
    creator: "@huzaifasys",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "dmRiU38GtEdEQdSniRpqPgpisCXRyiG1kcvCHIT1gqU",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Huzaifa Sys",
      alternateName: [
        "Muhammad Huzaifa",
        "huzaifasys",
        "huzaifa sys",
        "HezziCode",
      ],
      jobTitle: "Full Stack AI Engineer",
      description:
        "Full Stack AI Engineer specializing in autonomous AI agent systems, modern Next.js web applications, and resilient cloud infrastructure.",
      url: siteUrl,
      image: `${siteUrl}/about-real.jpg`,
      email: "mailto:huzaifasys@gmail.com",
      telephone: "+923462037714",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PK",
      },
      sameAs: [
        "https://github.com/HezziCode",
        "https://linkedin.com/in/huzaifasys",
        "https://instagram.com/huzaifasys",
      ],
      knowsAbout: [
        "Autonomous AI Agent Workflows",
        "Full Stack Web Development",
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "LangChain",
        "LangGraph",
        "PostgreSQL",
        "DevOps & Cloud Systems",
        "Docker",
        "AWS",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Huzaifa Sys",
      alternateName: [
        "huzaifasys",
        "huzaifa sys",
        "Huzaifa Sys Portfolio",
        "Huzaifa Sys — Full Stack AI Engineer",
      ],
      description:
        "Official engineering portfolio and technical case studies of Huzaifa Sys.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Huzaifa Sys — Lead Full Stack AI Engineer",
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#sitenavigation`,
      name: "Site Navigation",
      itemListElement: [
        {
          "@type": "SiteNavigationElement",
          position: 1,
          name: "About",
          description:
            "Biography, engineering background, and hands-on experience of Huzaifa Sys.",
          url: `${siteUrl}/about`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 2,
          name: "Projects",
          description:
            "Case studies of production AI systems, full-stack web platforms, and agent workflows.",
          url: `${siteUrl}/projects`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 3,
          name: "Contact",
          description:
            "Direct contact options and consultation booking for software development.",
          url: `${siteUrl}/contact`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 4,
          name: "Schedule a Call",
          description:
            "Schedule a direct 30-minute system architecture discovery call.",
          url: `${siteUrl}/schedule`,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-slate-dark font-sans overflow-x-clip w-full relative"
      >
        <Navbar />
        <div className="flex-1 w-full overflow-x-clip">{children}</div>
        <ExitIntentModal />
      </body>
    </html>
  );
}
