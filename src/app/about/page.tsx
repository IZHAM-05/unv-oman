import AboutHero from "@/components/about/Hero";
import AboutCTA from "@/components/about/AboutCTA";
import CompanyIntro from "@/components/about/CompanyIntro";
import CoreValues from "@/components/about/CoreValues";
import VisionMission from "@/components/about/VisionMission";
import WhyChoose from "@/components/about/WhyChoose";

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