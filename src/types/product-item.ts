export type ProductSpecification = {
  label: string;
  value: string;
};

export type Product = {
  id: number;
  categoryId: number;
  subcategoryId: number;

  name: string;
  slug: string;
  image: string;
  description: string;

  specifications: ProductSpecification[];
  features: string[];
  applications: string[];
};