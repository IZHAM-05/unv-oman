import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";
import ProductEnquiry from "@/models/ProductEnquiry";

import DashboardHeader from "@/components/admin/DashboardHeader";
import DashboardCard from "@/components/admin/DashboardCard";

export default async function DashboardPage() {
  await connectDB();

  const contacts = await Contact.find()
    .sort({ createdAt: -1 })
    .lean();

  const enquiries = await ProductEnquiry.find()
    .sort({ createdAt: -1 })
    .lean();

  return (
    <div className="mx-auto w-full max-w-7xl">
      <DashboardHeader />

      <div className="mt-8">
        <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-sm text-zinc-500 sm:text-base">
          Monitor contact forms and product enquiries submitted through the website.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
        <DashboardCard
          title="Total Contact Forms"
          value={contacts.length}
        />

        <DashboardCard
          title="Total Product Enquiries"
          value={enquiries.length}
        />
      </div>
    </div>
  );
}