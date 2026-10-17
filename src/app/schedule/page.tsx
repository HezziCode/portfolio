import type { Metadata } from "next";
import CalBookingSection from "@/components/CalBookingSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Book a 1:1 Strategy Call",
  description:
    "Schedule a free 30-minute technical discovery call directly with Huzaifa to discuss your AI systems, full-stack roadmap, and architecture.",
  alternates: {
    canonical: "/schedule",
  },
  openGraph: {
    title: "Book a 1:1 Strategy Call | Huzaifa Sys",
    description:
      "Schedule a free 30-minute technical discovery call directly with Huzaifa.",
    url: "/schedule",
  },
};

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <main className="py-6 md:py-12">
        <CalBookingSection showAnchor={false} />
      </main>
      <Footer />
    </div>
  );
}
