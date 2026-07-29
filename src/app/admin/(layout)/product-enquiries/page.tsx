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
    <div className="min-h-screen bg-zinc-100 p-8">
      <h1 className="text-3xl font-bold text-zinc-900">
        Product Enquiries
      </h1>

      <p className="mt-2 text-sm text-zinc-600">
        View and manage all product enquiry submissions.
      </p>

      <ProductEnquiryTable enquiries={enquiries} />
    </div>
  );
}