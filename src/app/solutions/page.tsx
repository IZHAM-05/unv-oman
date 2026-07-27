import FeaturedSolutions from "@/components/solutions/FeaturedSolutions";
import SolutionsCapabilities from "@/components/solutions/SolutionsCapabilities";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";
import SolutionsDirectory from "@/components/solutions/SolutionsDirectory";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsIntro from "@/components/solutions/SolutionsIntro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNV OMAN | Solutions | CCTV & Surveillance Solutions",
  description:
    "Explore integrated UNV security solutions for education, healthcare, retail, banking, stadiums, warehouses, smart buildings and other industries across Oman.",
};

export default function SolutionsPage() {
  return (
    <main className="overflow-x-hidden bg-white text-zinc-900">
      <SolutionsHero />
      <SolutionsIntro />
      <FeaturedSolutions />
      <SolutionsCapabilities />
      <SolutionsDirectory />
      <SolutionsCTA />
    </main>
  );
}