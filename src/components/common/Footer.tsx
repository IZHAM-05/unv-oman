"use client";

import Link from "next/link";

import { footerContent } from "@/data/footer";
import type { FooterSocialIcon } from "@/types/footer";

type SocialIconProps = {
  icon: FooterSocialIcon;
};

function SocialIcon({ icon }: SocialIconProps) {
  switch (icon) {
    case "instagram":
      return (
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );

    case "whatsapp":
      return (
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      );

    case "linkedin":
      return (
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
  }
}

export default function Footer() {
  const handleQuickLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href === "/" && window.location.pathname === "/") {
      event.preventDefault();

      document.getElementById("hero")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-zinc-100 bg-[#F8F9FB] text-zinc-600">
      {/* Gradient top line matching other sections */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      {/* Dot pattern matching Stats & Categories */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Column 1: Logo + Description + Social */}
          <div>
            <Link
              href={footerContent.brand.logoHref}
              className="mb-5 inline-block"
            >
              <img
                src={footerContent.brand.logo}
                alt={footerContent.brand.logoAlt}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p className="mb-6 max-w-xs text-sm leading-7 text-zinc-500">
              {footerContent.brand.description}
            </p>

            <div className="flex items-center gap-3">
              {footerContent.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-400 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-600 hover:text-blue-600"
                  aria-label={social.name}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900">
              <span className="h-px w-6 bg-blue-600" />
              {footerContent.sectionHeadings.quickLinks}
            </h3>

            <ul className="space-y-3">
              {footerContent.quickLinks.map((item) => (
                <li
                  key={item.href}
                  className="group flex items-center gap-2.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600/50 transition group-hover:scale-125 group-hover:bg-blue-600" />

                  <Link
                    href={item.href}
                    onClick={(event) =>
                      handleQuickLinkClick(event, item.href)
                    }
                    className="text-sm text-zinc-500 transition-colors duration-200 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900">
              <span className="h-px w-6 bg-blue-600" />
              {footerContent.sectionHeadings.products}
            </h3>

            <ul className="space-y-3">
              {footerContent.productLinks.map((item) => (
                <li
                  key={item.href}
                  className="group flex items-center gap-2.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600/50 transition group-hover:scale-125 group-hover:bg-blue-600" />

                  <Link
                    href={item.href}
                    className="text-sm text-zinc-500 transition-colors duration-200 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900">
              <span className="h-px w-6 bg-blue-600" />
              {footerContent.sectionHeadings.contact}
            </h3>

            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>

                <a
                  href={footerContent.contact.emailHref}
                  className="transition-colors duration-200 hover:text-blue-600"
                >
                  {footerContent.contact.email}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25A2.25 2.25 0 0 0 21.75 19.5v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>

                <a
                  href={footerContent.contact.phoneHref}
                  className="transition-colors duration-200 hover:text-blue-600"
                >
                  {footerContent.contact.phone}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span>{footerContent.contact.workingHours}</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Location */}
          <div>
            <h3 className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900">
              <span className="h-px w-6 bg-blue-600" />
              {footerContent.sectionHeadings.location}
            </h3>

            <p className="mb-4 text-sm leading-6 text-zinc-500">
              {footerContent.location.description}
            </p>

            <div className="relative overflow-hidden rounded-xl border border-zinc-200/80 bg-white shadow-sm transition duration-300 hover:border-zinc-300 hover:shadow-lg">
              <iframe
                src={footerContent.location.mapEmbedUrl}
                width="100%"
                height="140"
                style={{
                  border: 0,
                  filter: "grayscale(20%) contrast(1.05)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={footerContent.location.mapTitle}
              />

              <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-zinc-700 shadow-sm backdrop-blur-sm">
                <svg
                  className="h-3 w-3 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                </svg>

                {footerContent.location.mapLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col gap-3 border-t border-zinc-200/80 pt-8 text-xs text-zinc-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            {footerContent.bottom.companyName}.{" "}
            {footerContent.bottom.rightsText}
          </p>

          <p className="font-mono tracking-wider text-zinc-300">
            {footerContent.bottom.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}