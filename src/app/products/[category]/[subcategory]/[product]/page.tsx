import { notFound } from "next/navigation";
import ProductHero from "@/components/product/Hero";
import ProductDetails from "@/components/product/ProductDetails";
import { productCategories } from "@/data/products";


type ProductDetailPageProps = {
  params: Promise<{
    category: string;
    subcategory: string;
    product: string;
  }>;
};

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
      <ProductHero
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