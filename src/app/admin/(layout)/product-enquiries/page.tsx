import connectDB from "@/lib/mongodb";
import ProductEnquiry from "@/models/ProductEnquiry";

import ProductEnquiryTable from "@/components/admin/ProductEnquiryTable";

export default async function ProductEnquiriesPage() {
  await connectDB();

  const enquiries = (
    await ProductEnquiry.find()
      .sort({ createdAt: -1 })
      .lean()
  ).map((enquiry) => ({
    ...enquiry,
    _id: enquiry._id.toString(),
    createdAt: enquiry.createdAt?.toISOString(),
    updatedAt: enquiry.updatedAt?.toISOString(),
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          Product Enquiries
        </h1>

        <p className="mt-2 text-sm text-zinc-600">
          View and manage all product enquiry submissions.
        </p>
      </div>

      <ProductEnquiryTable enquiries={enquiries} />
    </div>
  );
}