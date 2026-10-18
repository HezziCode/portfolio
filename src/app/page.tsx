import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import AboutStats from "@/components/AboutStats";

const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const WorkProcess = dynamic(() => import("@/components/WorkProcess"));
const TechStackSection = dynamic(() => import("@/components/TechStackSection"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-clip">
      <Hero />
      <AboutStats />
      <ServicesSection />
      <WorkProcess />
      <TechStackSection />
      <Testimonials />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 overflow-hidden">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
