import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import WorkExperience from "@/components/WorkExperience";
import PreFooterConversion from "@/components/PreFooterConversion";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Huzaifa Sys — Full Stack & AI Engineer building production web applications, autonomous agent workflows, and scalable full-stack systems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Huzaifa Sys | Full Stack AI Engineer",
    description:
      "Background, engineering philosophy, and architectural journey of Huzaifa Sys.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <WorkExperience />
        <PreFooterConversion
          categoryNumber="03"
          categoryLabel="COLLABORATION"
          categorySublabel="LET'S MAP YOUR ARCHITECTURE"
        />
      </div>

      <Footer />
    </main>
  );
}
