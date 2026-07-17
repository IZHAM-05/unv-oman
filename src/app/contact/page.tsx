import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/Hero";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white text-zinc-900">
      <ContactHero />

      <section className="relative w-full overflow-hidden border-t border-zinc-100 bg-[#F7FAFC] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        <div className="pointer-events-none absolute -left-52 top-0 h-[420px] w-[420px] rounded-full bg-blue-100/70 blur-[150px]" />

        <div className="pointer-events-none absolute -right-52 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-100/60 blur-[150px]" />

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="mb-12 grid min-w-0 gap-8 border-b border-zinc-200 pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="min-w-0">
            

              <h2 className="mt-6 max-w-3xl break-words text-3xl font-bold leading-[0.98] tracking-[-0.055em] text-zinc-950 sm:text-4xl lg:text-5xl">
                Let&apos;s discuss your surveillance requirements.
              </h2>
            </div>

            <p className="min-w-0 max-w-xl text-sm font-light leading-8 text-zinc-600 sm:text-base">
              Contact our team for product information, project enquiries,
              quotation requests and professional guidance on UNV surveillance
              solutions.
            </p>
          </div>

          <div className="w-full min-w-0">
            <ContactInfo />
          </div>

          <div className="mt-8 w-full min-w-0">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}