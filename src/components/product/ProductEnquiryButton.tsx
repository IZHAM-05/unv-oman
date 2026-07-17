"use client";

import { useState } from "react";
import {
  ArrowRight,
  MessageSquareText,
} from "lucide-react";

import ProductEnquiryModal from "@/components/product/ProductEnquiryModal";

import type {
  Category,
  Product,
  Subcategory,
} from "@/types/product";

type ProductEnquiryButtonProps = {
  category: Category;
  subcategory: Subcategory;
  product: Product;
};

export default function ProductEnquiryButton({
  category,
  subcategory,
  product,
}: ProductEnquiryButtonProps) {
  const [isModalOpen, setIsModalOpen] =
    useState(false);

  return (
    <>
      <div className="mt-8 border border-[#BFD9EC] bg-[#EFF7FC]">
        <div className="grid sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="flex gap-4 p-4 sm:p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#005BAC] text-white">
                <MessageSquareText className="h-4 w-4" />
            </div>

            <div>
                <p className="text-[13px] font-bold text-zinc-950">
                Request Product Information
                </p>

                <p className="mt-1 max-w-md text-[11px] leading-5 text-zinc-600">
                Contact our team for product guidance, availability
                and quotation assistance.
                </p>
            </div>
            </div>

            <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex min-h-12 items-center justify-center gap-2 bg-[#005BAC] px-5 text-xs font-bold text-white transition-colors duration-300 hover:bg-[#004A8D] sm:min-h-full"
            >
            Request a Quote

            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
        </div>
      </div>

      <ProductEnquiryModal
        category={category}
        subcategory={subcategory}
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}