import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeCTA from "@/components/home/HomeCTA";
// import Industries from "@/components/home/Industries";

export default function HomePage() {
  return (
    <main>
      <Hero />
       <div className="relative h-px w-full bg-white/10">
       <div className="absolute inset-0 bg-white blur-sm opacity-60" />
       </div>
      <Stats />
      {/* <Industries /> */}
      <FeaturedCategories />
      <FeaturedProducts />
      <WhyChooseUs />
      <HomeCTA />
    </main>
  );
} 