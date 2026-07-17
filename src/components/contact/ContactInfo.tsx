import FadeIn from "@/components/common/FadeIn";
import {
  contactInfoContent,
  contactInfoItems,
} from "@/data/contact";
import type { ContactInfoIcon } from "@/types/contact";

type ContactIconProps = {
  icon: ContactInfoIcon;
};

function ContactIcon({ icon }: ContactIconProps) {
  switch (icon) {
    case "products":
      return (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20 7l-8-4-8 4m16 0-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      );

    case "location":
      return (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657 13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0Z"
          />

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      );

    case "business":
      return (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m9 12 2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016Z"
          />
        </svg>
      );
  }
}

export default function ContactInfo() {
  return (
    <FadeIn>
      <section>
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
         
            <h3 className="mt-2 text-2xl font-bold tracking-[-0.035em] text-zinc-950">
              Choose the right enquiry channel
            </h3>
          </div>

         
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-3">
          {contactInfoItems.map((item, index) => (
            <FadeIn key={item.code} delay={index * 0.08}>
              <article className="group relative flex h-full min-h-[230px] flex-col overflow-hidden border border-zinc-200 bg-white p-6 shadow-[0_18px_55px_-42px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_24px_65px_-38px_rgba(0,91,172,0.28)]">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#005BAC] transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex items-start justify-between gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF5FD] text-[#005BAC] transition-all duration-300 group-hover:bg-[#005BAC] group-hover:text-white">
                    <ContactIcon icon={item.icon} />
                  </span>

                </div>

                <h4 className="mt-7 text-xl font-bold tracking-[-0.035em] text-zinc-950 transition-colors duration-300 group-hover:text-[#005BAC]">
                  {item.title}
                </h4>

                <div className="my-4 h-px w-10 bg-blue-200 transition-all duration-300 group-hover:w-16 group-hover:bg-[#005BAC]" />

                <p className="text-sm font-light leading-7 text-zinc-600">
                  {item.detail}
                </p>

               
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}