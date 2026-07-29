"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type ProductEnquiry = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  category: string;
  subcategory: string;
  product: string;
  createdAt: string;
};

type ProductEnquiryTableProps = {
  enquiries: ProductEnquiry[];
};

export default function ProductEnquiryTable({
  enquiries,
}: ProductEnquiryTableProps) {
  const router = useRouter();

  async function deleteEnquiry(id: string) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/product-enquiry/${id}`, {
        method: "DELETE",
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to delete enquiry");
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete enquiry.");
    }
  }

  return (
    <div className="mt-8 rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="border-b border-zinc-200 px-5 py-4">
        <h2 className="text-lg font-semibold text-zinc-900">
          Product Enquiries
        </h2>
      </div>

      {/* ================= MOBILE ================= */}

      <div className="space-y-4 p-4 lg:hidden">
        {enquiries.map((enquiry) => (
          <div
            key={enquiry._id}
            className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"
          >
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-zinc-500">Name</p>
                <p className="font-semibold">
                  {enquiry.fullName}
                </p>
              </div>

              <div>
                <p className="text-zinc-500">Email</p>
                <p>{enquiry.email}</p>
              </div>

              <div>
                <p className="text-zinc-500">Phone</p>
                <p>{enquiry.phone}</p>
              </div>

              <div>
                <p className="text-zinc-500">Category</p>
                <p>{enquiry.category}</p>
              </div>

              <div>
                <p className="text-zinc-500">Subcategory</p>
                <p>{enquiry.subcategory}</p>
              </div>

              <div>
                <p className="text-zinc-500">Product</p>
                <p>{enquiry.product}</p>
              </div>

              <div>
                <p className="text-zinc-500">Date</p>
                <p>
                  {new Date(
                    enquiry.createdAt
                  ).toLocaleDateString("en-GB")}
                </p>
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              <Link
                href={`/admin/product-enquiries/${enquiry._id}`}
                className="flex-1 rounded-lg bg-[#005BAC] py-2 text-center text-sm font-medium text-white transition hover:bg-[#004A8D]"
              >
                View
              </Link>

              <button
                onClick={() => deleteEnquiry(enquiry._id)}
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
                Product
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
            {enquiries.map((enquiry) => (
              <tr
                key={enquiry._id}
                className="border-t border-zinc-100 hover:bg-zinc-50"
              >
                <td className="px-5 py-4">
                  {enquiry.fullName}
                </td>

                <td className="px-5 py-4">
                  {enquiry.email}
                </td>

                <td className="px-5 py-4">
                  {enquiry.phone}
                </td>

                <td className="px-5 py-4">
                  {enquiry.product}
                </td>

                <td className="px-5 py-4">
                  {new Date(
                    enquiry.createdAt
                  ).toLocaleDateString("en-GB")}
                </td>

                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/product-enquiries/${enquiry._id}`}
                      className="rounded-lg bg-[#005BAC] px-3 py-2 text-xs font-medium text-white transition hover:bg-[#004A8D]"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() =>
                        deleteEnquiry(enquiry._id)
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