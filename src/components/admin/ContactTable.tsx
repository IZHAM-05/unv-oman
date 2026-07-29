"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type Contact = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  productCategory: string;
  createdAt: string;
};

type ContactTableProps = {
  contacts: Contact[];
};

export default function ContactTable({
  contacts,
}: ContactTableProps) {
  const router = useRouter();

  async function handleDelete(id: string) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) return;

    const res = await fetch(`/api/contact/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.refresh();
    } else {
      alert("Failed to delete contact.");
    }
  }

  return (
    <div className="mt-8 rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="border-b border-zinc-200 px-5 py-4">
        <h2 className="text-lg font-semibold text-zinc-900">
          Contact Form Submissions
        </h2>
      </div>

      {/* ================= MOBILE ================= */}

      <div className="space-y-4 p-4 lg:hidden">
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"
          >
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-zinc-500">Name</p>
                <p className="font-semibold">
                  {contact.fullName}
                </p>
              </div>

              <div>
                <p className="text-zinc-500">Email</p>
                <p>{contact.email}</p>
              </div>

              <div>
                <p className="text-zinc-500">Phone</p>
                <p>{contact.phone}</p>
              </div>

              <div>
                <p className="text-zinc-500">
                  Product Category
                </p>
                <p>{contact.productCategory}</p>
              </div>

              <div>
                <p className="text-zinc-500">Date</p>
                <p>
                  {new Date(
                    contact.createdAt
                  ).toLocaleDateString("en-GB")}
                </p>
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              <Link
                href={`/admin/contacts/${contact._id}`}
                className="flex-1 rounded-lg bg-[#005BAC] py-2 text-center text-sm font-medium text-white transition hover:bg-[#004A8D]"
              >
                View
              </Link>

              <button
                onClick={() => handleDelete(contact._id)}
                className="flex-1 rounded-lg bg-red-600 py-2 text-sm font-medium text-white transition hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP ================= */}

      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full">
          <thead className="bg-zinc-50">
            <tr>
              <th className="px-5 py-3 text-left text-sm font-semibold">
                Name
              </th>

              <th className="px-5 py-3 text-left text-sm font-semibold">
                Email
              </th>

              <th className="px-5 py-3 text-left text-sm font-semibold">
                Phone
              </th>

              <th className="px-5 py-3 text-left text-sm font-semibold">
                Category
              </th>

              <th className="px-5 py-3 text-left text-sm font-semibold">
                Date
              </th>

              <th className="px-5 py-3 text-left text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <tr
                key={contact._id}
                className="border-t border-zinc-100 hover:bg-zinc-50"
              >
                <td className="px-5 py-4">
                  {contact.fullName}
                </td>

                <td className="px-5 py-4">
                  {contact.email}
                </td>

                <td className="px-5 py-4">
                  {contact.phone}
                </td>

                <td className="px-5 py-4">
                  {contact.productCategory}
                </td>

                <td className="px-5 py-4">
                  {new Date(
                    contact.createdAt
                  ).toLocaleDateString("en-GB")}
                </td>

                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/contacts/${contact._id}`}
                      className="rounded-lg bg-[#005BAC] px-3 py-2 text-xs font-medium text-white transition hover:bg-[#004A8D]"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() =>
                        handleDelete(contact._id)
                      }
                      className="rounded-lg bg-red-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}