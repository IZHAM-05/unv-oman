import FeaturedSolutions from "@/components/solutions/FeaturedSolutions";
import SolutionsCapabilities from "@/components/solutions/SolutionsCapabilities";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";
import SolutionsDirectory from "@/components/solutions/SolutionsDirectory";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsIntro from "@/components/solutions/SolutionsIntro";

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