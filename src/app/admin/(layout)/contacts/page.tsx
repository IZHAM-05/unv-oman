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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          Contact Forms
        </h1>

        <p className="mt-2 text-sm text-zinc-600">
          View and manage all contact form submissions.
        </p>
      </div>

      <ContactTable contacts={contacts} />
    </div>
  );
}