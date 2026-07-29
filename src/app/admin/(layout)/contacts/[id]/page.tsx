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
    <div className="mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div className="border-b border-zinc-200 px-5 py-5 sm:px-8 sm:py-6">
          <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            Contact Details
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            View complete contact form submission.
          </p>
        </div>

        <div className="grid gap-5 p-5 sm:p-8 md:grid-cols-2">
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
            value={new Date(contact.createdAt).toLocaleString(
              "en-GB"
            )}
          />
        </div>

        <div className="border-t border-zinc-200 p-5 sm:p-8">
          <h2 className="mb-3 text-lg font-semibold">
            Message
          </h2>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 leading-7">
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

      <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
        {value}
      </div>
    </div>
  );
}