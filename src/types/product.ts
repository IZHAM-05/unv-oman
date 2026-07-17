export type ProductCategoryContent = {
  heading: string;
};

export type ProductSpecification = {
  label: string;
  value: string;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  specifications: ProductSpecification[];
  features: string[];
  applications: string[];
};

export type Subcategory = {
  id: number;
  name: string;
  slug: string;
  image: string;
  products: Product[];
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  subcategories: Subcategory[];
};

export type ProductsHeroContent = {
  title: string;
  description: string;
  image: string;
};


export type ProductPageAction = {
  label: string;
  href: string;
};

export type ProductSliderAssistanceContent = {
  eyebrow: string;
  title: string;
  description: string;
  action: ProductPageAction;
};

export type ProductSliderContent = {
  eyebrow: string;
  title: string;
  description: string;
  allCategoriesCode: string;
  allCategoriesLabel: string;
  assistance: ProductSliderAssistanceContent;
};

export type CategoryCardContent = {
  actionLabel: string;
  numberPadding: number;
  numberPaddingCharacter: string;
};

export type SubcategoryCardContent = {
  descriptionPrefix: string;
  actionLabel: string;
};

export type ProductCardContent = {
  backgroundLabel: string;
  actionLabel: string;
};

export type CategoryHeroContent = {
  breadcrumb: {
    label: string;
    href: string;
  };
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
};


export type SubcategoryHeroContent = {
  productsBreadcrumb: {
    label: string;
    href: string;
  };

  descriptionPrefix: string;
  descriptionSuffix: string;

  primaryAction: {
    label: string;
    href: string;
  };

  secondaryAction: {
    label: string;
    href: string;
  };
};


export type ProductHeroContent = {
  productsBreadcrumb: {
    label: string;
    href: string;
  };

  description: string;

  primaryAction: {
    label: string;
    href: string;
  };

  secondaryAction: {
    label: string;
    href: string;
  };
};

export type ProductDetailsContent = {
  overviewEyebrow: string;
  descriptionEyebrow: string;
  descriptionHeading: string;
  applicationsLabel: string;
  specificationsEyebrow: string;
  specificationsHeading: string;
  specificationsCountLabel: string;
  contactAction: {
    label: string;
    href: string;
  };
};


