import Image from "next/image";
import { notFound } from "next/navigation";

import connectDB from "@/lib/mongodb";
import ProductEnquiry from "@/models/ProductEnquiry";

import {
  products,
  productCategories,
  subcategories,
} from "@/data/products";

type ProductEnquiryDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductEnquiryDetailsPage({
  params,
}: ProductEnquiryDetailsPageProps) {
  await connectDB();

  const { id } = await params;

  const enquiry = await ProductEnquiry.findById(id).lean();

  if (!enquiry) {
    notFound();
  }

  const product = products.find(
    (item) => item.name === enquiry.product
  );

  const category = productCategories.find(
    (item) => item.id === product?.categoryId
  );

  const subcategory = subcategories.find(
    (item) => item.id === product?.subcategoryId
  );

  return (
    <div className="mx-auto max-w-7xl">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div className="border-b border-zinc-200 px-5 py-5 sm:px-8 sm:py-6">
          <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            Product Enquiry
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            View complete product enquiry details.
          </p>
        </div>

        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 text-xl font-semibold">
              Product Information
            </h2>

            {product && (
              <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
                <div className="relative aspect-square w-full max-w-sm mx-auto">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                  />
                </div>

                <div className="border-t border-zinc-200 bg-white p-5">
                  <InfoCard
                    title="Product"
                    value={product.name}
                  />

                  <InfoCard
                    title="Category"
                    value={category?.name ?? "-"}
                  />

                  <InfoCard
                    title="Subcategory"
                    value={subcategory?.name ?? "-"}
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            <h2 className="mb-5 text-xl font-semibold">
              Customer Information
            </h2>

            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <InfoCard
                title="Full Name"
                value={enquiry.fullName}
              />

              <InfoCard
                title="Email"
                value={enquiry.email}
              />

              <InfoCard
                title="Phone Number"
                value={enquiry.phone}
              />

              <InfoCard
                title="Submitted On"
                value={new Date(
                  enquiry.createdAt
                ).toLocaleString("en-GB")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="mb-5">
      <p className="mb-2 text-sm font-medium text-zinc-500">
        {title}
      </p>

      <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
        {value}
      </div>
    </div>
  );
}