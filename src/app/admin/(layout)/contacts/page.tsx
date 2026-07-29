import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

import ContactTable from "@/components/admin/ContactTable";

export default async function ContactsPage() {
  await connectDB();

  const contacts = (
  await Contact.find()
    .sort({ createdAt: -1 })
    .lean()
).map((contact) => ({
  ...contact,
  _id: contact._id.toString(),
  createdAt: contact.createdAt?.toISOString(),
  updatedAt: contact.updatedAt?.toISOString(),
}));

  return (
    <div className="min-h-screen bg-zinc-100 p-8">
      <h1 className="text-3xl font-bold text-zinc-900">
        Contact Forms
      </h1>

      <p className="mt-2 text-sm text-zinc-600">
        View and manage all contact form submissions.
      </p>

      <ContactTable contacts={contacts} />
    </div>
  );
}