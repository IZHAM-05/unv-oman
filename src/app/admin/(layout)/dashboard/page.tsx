import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";
import ProductEnquiry from "@/models/ProductEnquiry";
import DashboardHeader from "@/components/admin/DashboardHeader";
import DashboardCard from "@/components/admin/DashboardCard";
import ContactTable from "@/components/admin/ContactTable";
import ProductEnquiryTable from "@/components/admin/ProductEnquiryTable";

export default async function DashboardPage() {
  await connectDB();

    const contacts = await Contact.find()
    .sort({ createdAt: -1 })
    .lean();

    const enquiries = await ProductEnquiry.find()
    .sort({ createdAt: -1 })
    .lean();

  return (
    <div className="min-h-screen bg-zinc-100">
        <DashboardHeader />

     <div className="p-8">
      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
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
{/* 
      <ContactTable contacts={contacts} />

      <ProductEnquiryTable enquiries={enquiries} /> */}
  
    </div>
  
  );
}