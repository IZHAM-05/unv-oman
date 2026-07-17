import type {
  CategoryCardContent,
  CategoryHeroContent,
  ProductCardContent,
  ProductCategoryContent,
  ProductDetailsContent,
  ProductHeroContent,
  ProductSliderContent,
  ProductsHeroContent,
  SubcategoryCardContent,
  SubcategoryHeroContent,
} from "@/types/product";

export const productsHeroContent: ProductsHeroContent = {
  title: "Product Systems.",
  description:
    "Browse CCTV, IP camera, NVR, PTZ, thermal, analog and VMS product categories for professional surveillance projects.",
  image: "https://picsum.photos/id/1018/1920/1080",
};

export const productCategoryContent: ProductCategoryContent = {
  heading: "Professional product families",
};

export const productSliderContent: ProductSliderContent = {
  eyebrow: "Catalogue",
  title: "Product Directory",
  description: "Choose all products or filter by category.",
  allCategoriesCode: "ALL",
  allCategoriesLabel: "All Products",

  assistance: {
    eyebrow: "Need Assistance?",
    title: "Looking for a specific model?",
    description:
      "Select a category to view series, or contact the team for product guidance.",

    action: {
      label: "Request Help",
      href: "/contact",
    },
  },
};

export const productDetailsContent: ProductDetailsContent = {
  overviewEyebrow: "Product Overview",
  descriptionEyebrow: "Product Description",
  descriptionHeading: "Product details",
  applicationsLabel: "Suitable applications",
  specificationsEyebrow: "Core Specifications",
  specificationsHeading: "Technical highlights",
  specificationsCountLabel: "specifications",

  contactAction: {
    label: "Discuss this product",
    href: "/contact",
  },
};

export const categoryCardContent: CategoryCardContent = {
  actionLabel: "Explore Category",
  numberPadding: 2,
  numberPaddingCharacter: "0",
};

export const subcategoryCardContent: SubcategoryCardContent = {
  descriptionPrefix:
    "View available products, models and specifications under",
  actionLabel: "Explore Subcategory",
};

export const productCardContent: ProductCardContent = {
  backgroundLabel: "Product",
  actionLabel: "View Details",
};

export const categoryHeroContent: CategoryHeroContent = {
  breadcrumb: {
    label: "Products",
    href: "/products",
  },

  primaryAction: {
    label: "Explore Series",
    href: "#series",
  },

  secondaryAction: {
    label: "Request Consultation",
    href: "/contact",
  },
};

export const subcategoryHeroContent: SubcategoryHeroContent = {
  productsBreadcrumb: {
    label: "Products",
    href: "/products",
  },

  descriptionPrefix: "Explore",
  descriptionSuffix: "models under",

  primaryAction: {
    label: "Explore Models",
    href: "#models",
  },

  secondaryAction: {
    label: "Request Consultation",
    href: "/contact",
  },
};

export const productHeroContent: ProductHeroContent = {
  productsBreadcrumb: {
    label: "Products",
    href: "/products",
  },

  description:
    "Professional UNV surveillance technology engineered for dependable security, intelligent monitoring and continuous operation.",

  primaryAction: {
    label: "Request Product Quote",
    href: "/contact",
  },

  secondaryAction: {
    label: "View Product Details",
    href: "#product-details",
  },
};