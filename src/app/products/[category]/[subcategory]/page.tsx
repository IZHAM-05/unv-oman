import { notFound } from "next/navigation";
import SubcategoryHero from "@/components/subcategory/Hero";
import ProductModels from "@/components/subcategory/ProductModels";
import { productCategories } from "@/data/products";

type SubcategoryPageProps = {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
};

export default async function SubcategoryPage({
  params,
}: SubcategoryPageProps) {
  const {
    category: categorySlug,
    subcategory: subcategorySlug,
  } = await params;

  const category = productCategories.find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    notFound();
  }

  const subcategory = category.subcategories.find(
    (item) => item.slug === subcategorySlug
  );

  if (!subcategory) {
    notFound();
  }

  return (
    <main className="bg-[#F8F9FB] text-zinc-900">
      <SubcategoryHero
        category={category}
        subcategory={subcategory}
      />

      <ProductModels
        category={category}
        subcategory={subcategory}
      />
    </main>
  );
}