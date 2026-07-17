"use client";

import {
  Layers3,
  PackageSearch,
} from "lucide-react";

import CategoryCard from "@/components/cards/CategoryCard";
import FadeIn from "@/components/common/FadeIn";
import SubcategoryCard from "@/components/cards/SubcategoryCard";

import {
  productCategories,
  productCategoryContent,
} from "@/data/products";

import type { Category } from "@/types/product";

type ProductCategoryProps = {
  selectedCategorySlug: string;
};

type CategoryHeaderProps = {
  category: Category;
};

function CategoryHeader({
  category,
}: CategoryHeaderProps) {
  return (
    <FadeIn>
      <div className="mb-10 border-b border-zinc-200 pb-8">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
  

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-zinc-950 sm:text-4xl">
              {category.name}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
              {category.description}
            </p>
          </div>

          <div className="flex w-fit items-center gap-4 border-l-2 border-[#005BAC] bg-white px-5 py-4">
            <Layers3 className="h-5 w-5 text-[#005BAC]" />

            <div>
              <p className="font-mono text-xl font-bold text-zinc-950">
                {String(
                  category.subcategories.length,
                ).padStart(2, "0")}
              </p>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                Product Series
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function AllCategoriesView() {
  return (
    <div>
      <FadeIn>
        <div className="mb-10 border-b border-zinc-200 pb-8">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
            

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-zinc-950 sm:text-4xl">
                {
                  productCategoryContent.heading
                }
              </h2>
            </div>

            <div className="flex w-fit items-center gap-4 border-l-2 border-[#005BAC] bg-white px-5 py-4">
              <PackageSearch className="h-5 w-5 text-[#005BAC]" />

              <div>
                <p className="font-mono text-xl font-bold text-zinc-950">
                  {String(
                    productCategories.length,
                  ).padStart(2, "0")}
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                  Categories
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {productCategories.map(
          (category, index) => (
            <FadeIn
              key={category.id}
              delay={index * 0.06}
            >
              <CategoryCard
                name={category.name}
                slug={category.slug}
                description={
                  category.description
                }
                index={index}
                imageUrl={category.image}
              />
            </FadeIn>
          ),
        )}
      </div>
    </div>
  );
}

type SingleCategoryViewProps = {
  category: Category;
};

function SingleCategoryView({
  category,
}: SingleCategoryViewProps) {
  return (
    <div>
      <CategoryHeader category={category} />

      {category.subcategories.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {category.subcategories.map(
            (subcategory, index) => (
              <FadeIn
                key={subcategory.id}
                delay={index * 0.06}
              >
                <SubcategoryCard
                  subcategory={subcategory}
                  categorySlug={category.slug}
                  index={index}
                />
              </FadeIn>
            ),
          )}
        </div>
      ) : (
        <FadeIn>
          <div className="border border-dashed border-zinc-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[#EAF4FB] text-[#005BAC]">
              <PackageSearch className="h-5 w-5" />
            </div>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              No product series are currently
              available under this category.
            </p>
          </div>
        </FadeIn>
      )}
    </div>
  );
}

export default function ProductCategory({
  selectedCategorySlug,
}: ProductCategoryProps) {
  const selectedCategory =
    productCategories.find(
      (category) =>
        category.slug ===
        selectedCategorySlug,
    );

  const showAllCategories =
    selectedCategorySlug === "all" ||
    !selectedCategory;

  return (
    <div className="relative min-w-0">
      {showAllCategories ? (
        <AllCategoriesView />
      ) : (
        <SingleCategoryView
          category={selectedCategory}
        />
      )}
    </div>
  );
}