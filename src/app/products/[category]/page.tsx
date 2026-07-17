import { notFound } from "next/navigation";
import CategoryHero from "@/components/category/Hero";
import SubcategorySeries from "@/components/category/SubcategorySeries";
import { productCategories } from "@/data/products";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category: categorySlug } = await params;

  const category = productCategories.find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    notFound();
  }

  return (
    <main className="bg-[#F8F9FB] text-zinc-900">
      <CategoryHero category={category} />

      <SubcategorySeries category={category} />
    </main>
  );
}