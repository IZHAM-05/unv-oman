"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import FadeIn from "@/components/common/FadeIn";
import { contactFormContent } from "@/data/contact";
import { productCategories } from "@/data/products";
import type { ContactFormData } from "@/types/contact";

const initialFormData: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  productCategory: "",
  projectScope: "",
  message: "",
  agreeToTerms: false,
};

const inputClassName =
  "mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3.5 text-sm text-zinc-950 outline-none transition-all duration-300 placeholder:text-zinc-400 hover:border-zinc-300 focus:border-[#005BAC] focus:ring-4 focus:ring-blue-600/[0.07]";

export default function ContactForm() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const target = event.target;
    const { name } = target;

    if (
      target instanceof HTMLInputElement &&
      target.type === "checkbox"
    ) {
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
  };

  return (
    <FadeIn delay={0.1}>
      <form
        onSubmit={handleSubmit}
        className="relative overflow-hidden rounded-none bg-zinc-50/80 shadow-none"
      >
        <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
          <div className="relative overflow-hidden border-b border-zinc-200 bg-[#EAF5FD] p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #005BAC 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-300/30 blur-[90px]" />

            <div className="relative z-10 flex h-full flex-col">
              <div>
              
                <h2 className="mt-6 text-3xl font-bold leading-[1] tracking-[-0.05em] text-zinc-950 sm:text-4xl">
                  {contactFormContent.heading}
                </h2>

                <p className="mt-5 text-sm font-light leading-7 text-zinc-600">
                  {contactFormContent.description}
                </p>
              </div>

              <div className="mt-10 border-t border-blue-200 pt-6 lg:mt-auto">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#005BAC] shadow-sm">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M12 6v6l4 2"
                      />

                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        strokeWidth={1.8}
                      />
                    </svg>
                  </span>

                  <div>
                    <p className="text-xs font-semibold text-zinc-950">
                      Enquiry Review
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      Your requirement will be reviewed by our team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-7 sm:p-9 lg:p-10">
            <div className="grid gap-x-5 gap-y-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600"
                >
                  {contactFormContent.fields.fullName.label}

                  {contactFormContent.fields.fullName.required && (
                    <span className="ml-1 text-red-500">*</span>
                  )}
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={
                    contactFormContent.fields.fullName.placeholder
                  }
                  className={inputClassName}
                  required={
                    contactFormContent.fields.fullName.required
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600"
                >
                  {contactFormContent.fields.email.label}

                  {contactFormContent.fields.email.required && (
                    <span className="ml-1 text-red-500">*</span>
                  )}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={
                    contactFormContent.fields.email.placeholder
                  }
                  className={inputClassName}
                  required={
                    contactFormContent.fields.email.required
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600"
                >
                  {contactFormContent.fields.phone.label}

                  {contactFormContent.fields.phone.required && (
                    <span className="ml-1 text-red-500">*</span>
                  )}
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={
                    contactFormContent.fields.phone.placeholder
                  }
                  className={inputClassName}
                  required={
                    contactFormContent.fields.phone.required
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600"
                >
                  {contactFormContent.fields.company.label}

                  {contactFormContent.fields.company.required && (
                    <span className="ml-1 text-red-500">*</span>
                  )}
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={
                    contactFormContent.fields.company.placeholder
                  }
                  className={inputClassName}
                  required={
                    contactFormContent.fields.company.required
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="productCategory"
                  className="block text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600"
                >
                  {
                    contactFormContent.fields.productCategory
                      .label
                  }

                  {contactFormContent.fields.productCategory
                    .required && (
                    <span className="ml-1 text-red-500">*</span>
                  )}
                </label>

                <div className="relative">
                  <select
                    id="productCategory"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    className={`${inputClassName} appearance-none pr-11`}
                    required={
                      contactFormContent.fields.productCategory
                        .required
                    }
                  >
                    <option value="">
                      {
                        contactFormContent.fields.productCategory
                          .placeholder
                      }
                    </option>

                    {productCategories.map((category) => (
                      <option
                        key={category.id}
                        value={category.slug}
                      >
                        {category.name}
                      </option>
                    ))}
                  </select>

                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-zinc-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="m6 9 6 6 6-6"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectScope"
                  className="block text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600"
                >
                  {contactFormContent.fields.projectScope.label}

                  {contactFormContent.fields.projectScope
                    .required && (
                    <span className="ml-1 text-red-500">*</span>
                  )}
                </label>

                <div className="relative">
                  <select
                    id="projectScope"
                    name="projectScope"
                    value={formData.projectScope}
                    onChange={handleChange}
                    className={`${inputClassName} appearance-none pr-11`}
                    required={
                      contactFormContent.fields.projectScope
                        .required
                    }
                  >
                    <option value="">
                      {
                        contactFormContent.fields.projectScope
                          .placeholder
                      }
                    </option>

                    {contactFormContent.projectScopeOptions.map(
                      (option) => (
                        <option
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </option>
                      ),
                    )}
                  </select>

                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-zinc-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="m6 9 6 6 6-6"
                    />
                  </svg>
                </div>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600"
                >
                  {contactFormContent.fields.message.label}

                  {contactFormContent.fields.message.required && (
                    <span className="ml-1 text-red-500">*</span>
                  )}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    contactFormContent.fields.message.placeholder
                  }
                  className={`${inputClassName} min-h-[135px] resize-y`}
                  required={
                    contactFormContent.fields.message.required
                  }
                />
              </div>
            </div>

            <div className="mt-7 flex items-start gap-3">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1 h-4 w-4 shrink-0 rounded border-zinc-300 text-[#005BAC] focus:ring-[#005BAC]"
                required
              />

              <label
                htmlFor="agreeToTerms"
                className="text-xs leading-6 text-zinc-600"
              >
                {contactFormContent.agreement.prefix}{" "}

                <a
                  href={contactFormContent.agreement.action.href}
                  className="font-semibold text-[#005BAC] underline-offset-4 hover:underline"
                >
                  {contactFormContent.agreement.action.label}
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="group mt-7 inline-flex w-full items-center justify-center bg-[#005BAC] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004A8D] hover:shadow-[0_18px_40px_-18px_rgba(0,91,172,0.7)]"
            >
              {contactFormContent.submitLabel}

              <svg
                className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M17 8l4 4m0 0-4 4m4-4H3"
                />
              </svg>
            </button>

            <p className="mt-5 text-center text-[11px] leading-6 text-zinc-500">
              {contactFormContent.footerNote}
            </p>
          </div>
        </div>
      </form>
    </FadeIn>
  );
}