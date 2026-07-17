"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import {
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  PackageCheck,
} from "lucide-react";

import { contactFormContent } from "@/data/contact";

import type {
  Category,
  Product,
  Subcategory,
} from "@/types/product";

type ProductEnquiryFormProps = {
  category: Category;
  subcategory: Subcategory;
  product: Product;
  onClose: () => void;
};

type ProductEnquiryFormData = {
  fullName: string;
  email: string;
  phone: string;
  agreeToTerms: boolean;
};

const initialFormData: ProductEnquiryFormData = {
  fullName: "",
  email: "",
  phone: "",
  agreeToTerms: false,
};

const inputClassName =
  "mt-1.5 w-full border border-zinc-200 bg-white px-3.5 py-2.5 text-[13px] text-zinc-950 outline-none transition-all duration-300 placeholder:text-zinc-400 hover:border-zinc-300 focus:border-[#005BAC] focus:ring-4 focus:ring-blue-600/[0.07]";

export default function ProductEnquiryForm({
  category,
  subcategory,
  product,
  onClose,
}: ProductEnquiryFormProps) {
  const [formData, setFormData] =
    useState<ProductEnquiryFormData>(
      initialFormData,
    );

  const [isSubmitted, setIsSubmitted] =
    useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const target = event.target;
    const { name } = target;

    if (target.type === "checkbox") {
      setFormData((current) => ({
        ...current,
        [name]: target.checked,
      }));

      return;
    }

    setFormData((current) => ({
      ...current,
      [name]: target.value,
    }));
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    /*
      The real submission workflow will be connected
      after the company confirms the email/API process.
    */

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex min-h-[360px] items-center justify-center bg-white px-6 py-8 sm:px-8">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[#EAF5FD] text-[#005BAC]">
            <CheckCircle2 className="h-6 w-6" />
          </div>

          <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.22em] text-[#005BAC]">
            Enquiry Recorded
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-zinc-950">
            Thank you for your enquiry
          </h2>

          <p className="mt-3 text-[13px] leading-6 text-zinc-600">
            Your enquiry for{" "}
            <span className="font-semibold text-zinc-950">
              {product.name}
            </span>{" "}
            has been prepared. The actual submission
            workflow will be connected after the company
            email and enquiry process are confirmed.
          </p>

          <button
            type="button"
            onClick={onClose}
            className="mt-5 inline-flex items-center justify-center border border-[#005BAC] bg-[#005BAC] px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#004A8D]"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-[0.62fr_1.38fr]">
        <div className="relative overflow-hidden border-b border-zinc-200 bg-[#EAF5FD] px-5 py-5 sm:px-6 sm:py-6 lg:min-h-[430px] lg:border-b-0 lg:border-r lg:px-7 lg:py-7">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #005BAC 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-blue-300/30 blur-[90px]" />

          <div className="relative z-10 flex h-full flex-col">
            <div>
              <div className="flex h-9 w-9 items-center justify-center bg-[#005BAC] text-white">
                <PackageCheck className="h-4 w-4" />
              </div>

              <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.22em] text-[#005BAC]">
                Product Enquiry
              </p>

              <h2
                id="product-enquiry-title"
                className="mt-2 max-w-sm text-2xl font-bold leading-[1.08] tracking-[-0.05em] text-zinc-950"
              >
                Request product information
              </h2>

              <p className="mt-3 max-w-sm text-[12px] font-light leading-5 text-zinc-600">
                Submit your contact details for product
                information, availability and quotation
                guidance.
              </p>
            </div>

            <div className="mt-5 border border-blue-200 bg-white/75">
              <div className="border-b border-blue-100 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <LockKeyhole className="h-3.5 w-3.5 text-[#005BAC]" />

                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#005BAC]">
                    Selected Product
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 px-4 py-3.5">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                    Category
                  </p>

                  <p className="mt-0.5 text-[12px] font-semibold text-zinc-800">
                    {category.name}
                  </p>
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                    Product Series
                  </p>

                  <p className="mt-0.5 text-[12px] font-semibold text-zinc-800">
                    {subcategory.name}
                  </p>
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                    Product Model
                  </p>

                  <p className="mt-0.5 text-[13px] font-bold text-zinc-950">
                    {product.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7">
          <div className="pr-12 sm:pr-14">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#005BAC]">
              Contact Details
            </p>

            <h3 className="mt-1.5 text-xl font-bold tracking-[-0.035em] text-zinc-950 sm:text-2xl">
              Tell us how to reach you
            </h3>
          </div>

          <div className="mt-4 grid gap-x-4 gap-y-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="productEnquiryFullName"
                className="block text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-600"
              >
                {
                  contactFormContent.fields.fullName
                    .label
                }

                <span className="ml-1 text-red-500">
                  *
                </span>
              </label>

              <input
                id="productEnquiryFullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={
                  contactFormContent.fields.fullName
                    .placeholder
                }
                className={inputClassName}
                required
              />
            </div>

            <div>
              <label
                htmlFor="productEnquiryEmail"
                className="block text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-600"
              >
                {
                  contactFormContent.fields.email.label
                }

                <span className="ml-1 text-red-500">
                  *
                </span>
              </label>

              <input
                id="productEnquiryEmail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={
                  contactFormContent.fields.email
                    .placeholder
                }
                className={inputClassName}
                required
              />
            </div>

            <div>
              <label
                htmlFor="productEnquiryPhone"
                className="block text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-600"
              >
                {
                  contactFormContent.fields.phone.label
                }

                <span className="ml-1 text-red-500">
                  *
                </span>
              </label>

              <input
                id="productEnquiryPhone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder={
                  contactFormContent.fields.phone
                    .placeholder
                }
                className={inputClassName}
                required
              />
            </div>

            <div>
              <label
                htmlFor="selectedProduct"
                className="block text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-600"
              >
                Selected Product
              </label>

              <div className="relative">
                <input
                  id="selectedProduct"
                  name="selectedProduct"
                  type="text"
                  value={product.name}
                  readOnly
                  aria-readonly="true"
                  className="mt-1.5 w-full cursor-not-allowed border border-[#BFD9EC] bg-[#EFF7FC] px-3.5 py-2.5 pr-10 text-[13px] font-semibold text-zinc-800 outline-none"
                />

                <LockKeyhole className="pointer-events-none absolute right-3.5 top-1/2 mt-0.5 h-3.5 w-3.5 -translate-y-1/2 text-[#005BAC]" />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-2.5">
            <input
              id="productEnquiryAgreement"
              name="agreeToTerms"
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 shrink-0 rounded-none border-zinc-300 text-[#005BAC] focus:ring-[#005BAC]"
              required
            />

            <label
              htmlFor="productEnquiryAgreement"
              className="text-[11px] leading-5 text-zinc-600"
            >
              {contactFormContent.agreement.prefix}{" "}

              <a
                href={
                  contactFormContent.agreement.action
                    .href
                }
                className="font-semibold text-[#005BAC] underline-offset-4 hover:underline"
              >
                {
                  contactFormContent.agreement.action
                    .label
                }
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="group mt-4 inline-flex w-full items-center justify-center gap-2.5 bg-[#005BAC] px-6 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#004A8D] hover:shadow-[0_16px_35px_-18px_rgba(0,91,172,0.65)]"
          >
            Request Product Quote

            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <p className="mt-2.5 text-center text-[10px] leading-5 text-zinc-500">
            {contactFormContent.footerNote}
          </p>
        </div>
      </div>
    </form>
  );
}