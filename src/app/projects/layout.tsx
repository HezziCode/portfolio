import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Projects & Architecture Case Studies",
  description:
    "Explore production-grade AI agent systems, multi-tenant Next.js platforms, and zero-downtime cloud DevOps pipelines engineered by Huzaifa Sys.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects & Architecture Case Studies | Huzaifa Sys",
    description:
      "Production-grade AI agent workflows, SaaS platforms, and cloud infrastructure engineered by Huzaifa Sys.",
    url: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
