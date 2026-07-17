import FadeIn from "@/components/common/FadeIn";
import SectionTitle from "@/components/common/SectionTitle";
import SubcategoryCard from "@/components/cards/SubcategoryCard";
import { Category } from "@/types/product";

type SubcategorySeriesProps = {
  category: Category;
};

export default function SubcategorySeries({
  category,
}: SubcategorySeriesProps) {
  return (
    <section
      id="series"
      className="relative scroll-mt-24 overflow-hidden bg-[#F8F9FB] px-6 py-16 lg:py-20"
    >
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[380px] w-[380px] rounded-full bg-blue-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[340px] w-[340px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn>
          <SectionTitle
            light={false}
            label="Series"
            title={`${category.name} series`}
            description={`Choose a ${category.name} series to explore its available UNV product models and technical details.`}
          />
        </FadeIn>

        {category.subcategories.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.subcategories.map((subcategory, index) => (
              <SubcategoryCard
                key={subcategory.id}
                subcategory={subcategory}
                categorySlug={category.slug}
                index={index}
              />
            ))}
          </div>
        ) : (
          <FadeIn>
            <div className="mt-10 rounded-[1.5rem] border border-zinc-200 bg-white px-6 py-12 text-center shadow-sm">
              <p className="text-lg font-semibold text-zinc-900">
                No product series available
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Product series for this category will be added soon.
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}