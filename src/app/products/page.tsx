import ProductsHero from "@/components/products/Hero";
import ProductCatalogue from "@/components/products/ProductCatalogue";

export default function ProductsPage() {
  return (
    <main className="bg-[#F8F9FB] text-zinc-900">
      <ProductsHero />
      <ProductCatalogue />
    </main>
  );
}