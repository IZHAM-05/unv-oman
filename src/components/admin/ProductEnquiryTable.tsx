"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

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
    <div className="mt-10 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
      <div className="border-b border-zinc-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-zinc-900">
          Product Enquiries
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-zinc-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Name
              </th>

              <th className="px-6 py-3 text-left text-sm font-semibold">
                Email
              </th>

              <th className="px-6 py-3 text-left text-sm font-semibold">
                Phone
              </th>

              <th className="px-6 py-3 text-left text-sm font-semibold">
                Product
              </th>

              <th className="px-6 py-3 text-left text-sm font-semibold">
                Date
              </th>

              <th className="px-6 py-3 text-left text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {enquiries.map((enquiry) => (
              <tr
                key={enquiry._id}
                className="border-t border-zinc-100"
              >
                <td className="px-6 py-4">
                  {enquiry.fullName}
                </td>

                <td className="px-6 py-4">
                  {enquiry.email}
                </td>

                <td className="px-6 py-4">
                  {enquiry.phone}
                </td>

                <td className="px-6 py-4">
                  {enquiry.product}
                </td>

                <td className="px-6 py-4">
                  {new Date(enquiry.createdAt).toLocaleDateString("en-GB")}
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/product-enquiries/${enquiry._id}`}
                      className="rounded bg-[#005BAC] px-3 py-2 text-xs font-medium text-white transition hover:bg-[#004A8D]"
                    >
                      View Details
                    </Link>

                   <button
                      onClick={() => deleteEnquiry(enquiry._id)}
                      className="rounded bg-red-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-red-700"
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