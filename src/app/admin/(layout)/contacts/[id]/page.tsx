import { notFound } from "next/navigation";

import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

type ContactDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ContactDetailsPage({
  params,
}: ContactDetailsPageProps) {
  await connectDB();

  const { id } = await params;

  const contact = await Contact.findById(id).lean();

  if (!contact) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-100 p-8">
      <div className="mx-auto max-w-5xl rounded-xl border border-zinc-200 bg-white shadow-sm">

        <div className="border-b border-zinc-200 px-8 py-6">
          <h1 className="text-3xl font-bold text-zinc-900">
            Contact Details
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            View complete contact form submission.
          </p>
        </div>

        <div className="grid gap-6 p-8 md:grid-cols-2">

          <InfoCard
            title="Full Name"
            value={contact.fullName}
          />

          <InfoCard
            title="Email"
            value={contact.email}
          />

          <InfoCard
            title="Phone Number"
            value={contact.phone}
          />

          <InfoCard
            title="Company"
            value={contact.company || "-"}
          />

          <InfoCard
            title="Product Category"
            value={contact.productCategory}
          />

          <InfoCard
            title="Project Scope"
            value={contact.projectScope}
          />

          <InfoCard
            title="Submitted On"
            value={new Date(contact.createdAt).toLocaleString()}
          />

        </div>

        <div className="border-t border-zinc-200 p-8">
          <h2 className="mb-3 text-lg font-semibold text-zinc-900">
            Message
          </h2>

          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5 leading-7 text-zinc-700">
            {contact.message}
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
    <div>
      <p className="mb-2 text-sm font-medium text-zinc-500">
        {title}
      </p>

      <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900">
        {value}
      </div>
    </div>
  );
}