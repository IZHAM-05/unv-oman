import ProductCard from "@/components/cards/ProductCard";
import FadeIn from "@/components/common/FadeIn";
import SectionTitle from "@/components/common/SectionTitle";
import { Category, Subcategory } from "@/types/product";

type ProductModelsProps = {
  category: Category;
  subcategory: Subcategory;
};

export default function ProductModels({
  category,
  subcategory,
}: ProductModelsProps) {
  return (
    <section
      id="models"
      className="relative scroll-mt-24 overflow-hidden bg-[#F8F9FB] px-6 py-16 lg:py-20"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[380px] w-[380px] rounded-full bg-blue-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[340px] w-[340px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn>
          <SectionTitle
            light={false}
            label="Models"
            title={`${subcategory.name} Products`}
            description={`Explore the available ${subcategory.name} models under ${category.name}. Select a product to view its details, specifications and enquiry information.`}
          />
        </FadeIn>

        {subcategory.products.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subcategory.products.map((product, index) => (
              <FadeIn key={product.id} delay={index * 0.05}>
                <ProductCard
                  product={product}
                  categorySlug={category.slug}
                  subcategorySlug={subcategory.slug}
                  index={index}
                />
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn>
            <div className="mt-10 rounded-[1.5rem] border border-zinc-200 bg-white px-6 py-12 text-center shadow-sm">
              <p className="text-lg font-semibold text-zinc-900">
                No products available
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Product models for this series will be added soon.
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}