import AboutHero from "@/components/about/Hero";
import AboutCTA from "@/components/about/AboutCTA";
import CompanyIntro from "@/components/about/CompanyIntro";
import CoreValues from "@/components/about/CoreValues";
import VisionMission from "@/components/about/VisionMission";
import WhyChoose from "@/components/about/WhyChoose";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About UNV Oman | Professional CCTV & Security Solutions",
  description:
    "Learn about UNV Oman, our professional CCTV and video surveillance technologies, intelligent security solutions, company vision, mission and commitment to reliable security projects across Oman.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-zinc-900">
      <AboutHero />
      <CompanyIntro />
      <VisionMission />
      <CoreValues />
      <WhyChoose />
      <AboutCTA />
    </main>
  );
}