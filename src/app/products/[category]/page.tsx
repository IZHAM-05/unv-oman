import { notFound } from "next/navigation";
import { Metadata } from "next";
import CategoryHero from "@/components/category/Hero";
import SubcategorySeries from "@/components/category/SubcategorySeries";
import { productCategories } from "@/data/products";


type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;

  const category = productCategories.find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    return {
      title: "Category Not Found | UNV Oman",
      description: "The requested product category could not be found.",
    };
  }

  return {
    title: `${category.name} | Products | UNV Oman`,
    description: category.description,
  };
}



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