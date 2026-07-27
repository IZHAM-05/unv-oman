import ProductsHero from "@/components/products/Hero";
import ProductCatalogue from "@/components/products/ProductCatalogue";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNV OMAN | Products | CCTV & Surveillance Solutions",
  description:
    "Browse UNV professional surveillance products including IP cameras, PTZ cameras, NVRs, thermal cameras, analog cameras and video management software for commercial, industrial and institutional security projects across Oman.",
};

export default function ProductsPage() {
  return (
    <main className="bg-[#F8F9FB] text-zinc-900">
      <ProductsHero />
      <ProductCatalogue />
    </main>
  );
}