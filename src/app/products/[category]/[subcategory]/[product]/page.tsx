import { notFound } from "next/navigation";
import { Metadata } from "next";

import ProductsHero from "@/components/product/Hero";
import ProductDetails from "@/components/product/ProductDetails";
import { productCategories } from "@/data/products";


type ProductDetailPageProps = {
  params: Promise<{
    category: string;
    subcategory: string;
    product: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const {
    category: categorySlug,
    subcategory: subcategorySlug,
    product: productSlug,
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

  const product = subcategory.products.find(
    (item) => item.slug === productSlug
  );

  if (!product) {
    return {
      title: "Product Not Found | UNV Oman",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} | ${subcategory.name} | UNV Oman`,
    description: product.description,
  };
}


export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const {
    category: categorySlug,
    subcategory: subcategorySlug,
    product: productSlug,
  } = await params;

  const category = productCategories.find((item) => item.slug === categorySlug);
  if (!category) notFound();

  const subcategory = category.subcategories.find(
    (item) => item.slug === subcategorySlug
  );
  if (!subcategory) notFound();

  const product = subcategory.products.find((item) => item.slug === productSlug);
  if (!product) notFound();

  return (
    <main className="bg-[#0A0D12] text-[#F2F4F7]">
      <ProductsHero
        category={category}
        subcategory={subcategory}
        product={product}
      />
     <ProductDetails
      category={category}
      subcategory={subcategory}
      product={product}
    />

    </main>
  );
}