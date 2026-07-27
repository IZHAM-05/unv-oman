import { notFound } from "next/navigation";
import { Metadata } from "next";
import SubcategoryHero from "@/components/subcategory/Hero";
import ProductModels from "@/components/subcategory/ProductModels";
import { productCategories } from "@/data/products";

type SubcategoryPageProps = {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
};

export async function generateMetadata({
  params,
}: SubcategoryPageProps): Promise<Metadata> {
  const {
    category: categorySlug,
    subcategory: subcategorySlug,
  } = await params;

  const category = productCategories.find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    return {
      title: "Category Not Found | UNV Oman",
      description: "The requested product category could not be found.",
    };
  }
  const subcategory = category.subcategories.find(
    (item) => item.slug === subcategorySlug
  );

  if (!subcategory) {
    return {
      title: "Series Not Found | UNV Oman",
      description: "The requested product series could not be found.",
    };
  }

  return {
    title: `${subcategory.name} | ${category.name} | UNV Oman`,
  };
}


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
