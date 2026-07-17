"use client";

import {
  useCallback,
  useEffect,
  useState,
  type MouseEvent,
} from "react";
import { X } from "lucide-react";

import ProductEnquiryForm from "@/components/product/ProductEnquiryForm";

import type {
  Category,
  Product,
  Subcategory,
} from "@/types/product";

type ProductEnquiryModalProps = {
  category: Category;
  subcategory: Subcategory;
  product: Product;
  isOpen: boolean;
  onClose: () => void;
};

const animationDuration = 300;

export default function ProductEnquiryModal({
  category,
  subcategory,
  product,
  isOpen,
  onClose,
}: ProductEnquiryModalProps) {
  const [shouldRender, setShouldRender] =
    useState(isOpen);

  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);

      const animationFrame =
        window.requestAnimationFrame(() => {
          setIsVisible(true);
        });

      return () => {
        window.cancelAnimationFrame(
          animationFrame,
        );
      };
    }

    setIsVisible(false);

    const closeTimer = window.setTimeout(() => {
      setShouldRender(false);
    }, animationDuration);

    return () => {
      window.clearTimeout(closeTimer);
    };
  }, [isOpen]);

  const requestClose = useCallback(() => {
    setIsVisible(false);

    window.setTimeout(() => {
      onClose();
    }, animationDuration);
  }, [onClose]);

  useEffect(() => {
    if (!shouldRender) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        requestClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [requestClose, shouldRender]);

  if (!shouldRender) {
    return null;
  }

  const handleBackdropClick = (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    if (event.target === event.currentTarget) {
      requestClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-enquiry-title"
      onMouseDown={handleBackdropClick}
      className={`fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto px-4 pb-8 pt-24 backdrop-blur-sm transition-all duration-300 ease-out sm:px-6 sm:pb-10 sm:pt-28 ${
        isVisible
          ? "bg-zinc-950/70 opacity-100"
          : "bg-zinc-950/0 opacity-0"
      }`}
    >
      <div
        onMouseDown={(event) =>
          event.stopPropagation()
        }
        className={`relative my-auto w-full max-w-4xl overflow-hidden border border-white/10 bg-white shadow-[0_35px_100px_-25px_rgba(0,0,0,0.65)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "-translate-y-6 scale-[0.96] opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={requestClose}
          aria-label="Close product enquiry"
          className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center border border-zinc-200 bg-white text-zinc-700 transition-all duration-300 hover:border-[#005BAC] hover:bg-[#005BAC] hover:text-white sm:right-5 sm:top-5"
        >
          <X className="h-4 w-4" />
        </button>

        <ProductEnquiryForm
          category={category}
          subcategory={subcategory}
          product={product}
          onClose={requestClose}
        />
      </div>
    </div>
  );
}