import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch & Book a Discovery Call",
  description:
    "Reach out to discuss your AI agent systems, full-stack web applications, or cloud architecture. Book a 1:1 strategy session or send an inquiry directly to Huzaifa Sys.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Get in Touch | Huzaifa Sys — Full Stack AI Engineer",
    description:
      "Schedule a 1:1 technical discovery call or submit a project inquiry.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
