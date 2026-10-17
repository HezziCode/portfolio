import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { websiteContent } from "@/content/websiteContent";
import ProjectDetailView, { ProjectData } from "@/components/ProjectDetailView";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return websiteContent.projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = websiteContent.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project case study could not be found.",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.overview || project.tagline,
    keywords: [
      project.title,
      project.category,
      ...project.techStack,
      "Huzaifa Sys",
      "Full Stack AI Engineer",
    ],
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Huzaifa Sys`,
      description: project.tagline,
      type: "article",
      url: `/projects/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Huzaifa Sys`,
      description: project.tagline,
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = websiteContent.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Calculate adjacent projects for seamless previous / next navigation
  const currentIndex = websiteContent.projects.findIndex((p) => p.slug === slug);
  const total = websiteContent.projects.length;
  const prevProject = websiteContent.projects[(currentIndex - 1 + total) % total];
  const nextProject = websiteContent.projects[(currentIndex + 1) % total];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <main className="flex-1">
        <ProjectDetailView
          project={project as ProjectData}
          prevProject={prevProject as ProjectData}
          nextProject={nextProject as ProjectData}
          index={currentIndex}
        />
      </main>

      {/* Global Site Footer */}
      <Footer />
    </div>
  );
}
