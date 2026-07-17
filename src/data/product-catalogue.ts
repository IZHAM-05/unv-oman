import { categories } from "@/data/categories";
import { subcategories } from "@/data/subcategories";
import { products } from "@/data/product-items";

import type {
  Category,
  Product,
  Subcategory,
} from "@/types/product";

export const productCategories: Category[] =
  categories.map((category) => {
    const categorySubcategories: Subcategory[] =
      subcategories
        .filter(
          (subcategory) =>
            subcategory.categoryId === category.id,
        )
        .map((subcategory) => {
          const subcategoryProducts: Product[] =
            products
              .filter(
                (product) =>
                  product.categoryId === category.id &&
                  product.subcategoryId ===
                    subcategory.id,
              )
              .map((product) => ({
                id: product.id,
                name: product.name,
                slug: product.slug,
                image: product.image,
                description: product.description,
                specifications:
                  product.specifications,
                features: product.features,
                applications: product.applications,
              }));

          return {
            id: subcategory.id,
            name: subcategory.name,
            slug: subcategory.slug,
            image: subcategory.image,
            products: subcategoryProducts,
          };
        });

    return {
      id: category.id,
      name: category.name,
      slug: category.slug,
      image: category.image,
      description: category.description,
      subcategories: categorySubcategories,
    };
  });