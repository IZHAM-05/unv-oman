"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

import { navigationContent } from "@/data/navigation";
import { productCategories } from "@/data/products";
import { solutions } from "@/data/solutions";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasHero, setHasHero] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [hasStartedScrolling, setHasStartedScrolling] = useState(false);

  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);

  const [selectedCategorySlug, setSelectedCategorySlug] = useState(
    productCategories[0]?.slug ?? ""
  );

  const [selectedSubcategorySlug, setSelectedSubcategorySlug] = useState(
    productCategories[0]?.subcategories[0]?.slug ?? ""
  );

  const [selectedSolutionSlug, setSelectedSolutionSlug] = useState(
    solutions[0]?.slug ?? ""
  );

  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  const [mobileExpandedCategorySlug, setMobileExpandedCategorySlug] = useState("");
  const [mobileExpandedSubcategorySlug, setMobileExpandedSubcategorySlug] = useState("");

  const productsCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const solutionsCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  const selectedCategory = useMemo(() => {
    return productCategories.find((category) => category.slug === selectedCategorySlug) ?? productCategories[0];
  }, [selectedCategorySlug]);

  const selectedSubcategory = useMemo(() => {
    return selectedCategory?.subcategories.find((subcategory) => subcategory.slug === selectedSubcategorySlug) ?? selectedCategory?.subcategories[0];
  }, [selectedCategory, selectedSubcategorySlug]);

  const selectedSolution = useMemo(() => {
    return solutions.find((solution) => solution.slug === selectedSolutionSlug) ?? solutions[0];
  }, [selectedSolutionSlug]);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      setHasStartedScrolling(window.scrollY > 24);

      if (hero) {
        setHasHero(true);
        setIsPastHero(hero.getBoundingClientRect().bottom <= 90);
      } else {
        setHasHero(false);
        setIsPastHero(true);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
    setIsProductsMenuOpen(false);
    setIsSolutionsMenuOpen(false);
    setIsMobileProductsOpen(false);
    setIsMobileSolutionsOpen(false);
    setMobileExpandedCategorySlug("");
    setMobileExpandedSubcategorySlug("");
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (productsCloseTimeoutRef.current) clearTimeout(productsCloseTimeoutRef.current);
      if (solutionsCloseTimeoutRef.current) clearTimeout(solutionsCloseTimeoutRef.current);
    };
  }, []);

  const closeDesktopMenus = () => {
    setIsProductsMenuOpen(false);
    setIsSolutionsMenuOpen(false);
  };

  const openProductsMenu = () => {
    if (productsCloseTimeoutRef.current) {
      clearTimeout(productsCloseTimeoutRef.current);
      productsCloseTimeoutRef.current = null;
    }
    if (solutionsCloseTimeoutRef.current) {
      clearTimeout(solutionsCloseTimeoutRef.current);
      solutionsCloseTimeoutRef.current = null;
    }
    setIsSolutionsMenuOpen(false);
    setIsProductsMenuOpen(true);
  };

  const scheduleProductsMenuClose = () => {
    if (productsCloseTimeoutRef.current) clearTimeout(productsCloseTimeoutRef.current);
    productsCloseTimeoutRef.current = setTimeout(() => setIsProductsMenuOpen(false), 120);
  };

  const openSolutionsMenu = () => {
    if (solutionsCloseTimeoutRef.current) {
      clearTimeout(solutionsCloseTimeoutRef.current);
      solutionsCloseTimeoutRef.current = null;
    }
    if (productsCloseTimeoutRef.current) {
      clearTimeout(productsCloseTimeoutRef.current);
      productsCloseTimeoutRef.current = null;
    }
    setIsProductsMenuOpen(false);
    setIsSolutionsMenuOpen(true);
  };

  const scheduleSolutionsMenuClose = () => {
    if (solutionsCloseTimeoutRef.current) clearTimeout(solutionsCloseTimeoutRef.current);
    solutionsCloseTimeoutRef.current = setTimeout(() => setIsSolutionsMenuOpen(false), 120);
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    closeDesktopMenus();
    setIsMobileProductsOpen(false);
    setIsMobileSolutionsOpen(false);
    setMobileExpandedCategorySlug("");
    setMobileExpandedSubcategorySlug("");

    if (pathname === navigationContent.logo.href) {
      event.preventDefault();
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    router.push(navigationContent.logo.href);
  };

  const handleCategoryHover = (categorySlug: string) => {
    const category = productCategories.find((item) => item.slug === categorySlug);
    setSelectedCategorySlug(categorySlug);
    setSelectedSubcategorySlug(category?.subcategories[0]?.slug ?? "");
  };

  const handleMobileProductsToggle = () => {
    setIsMobileProductsOpen((current) => !current);
    setIsMobileSolutionsOpen(false);
    setMobileExpandedCategorySlug("");
    setMobileExpandedSubcategorySlug("");
  };

  const handleMobileSolutionsToggle = () => {
    setIsMobileSolutionsOpen((current) => !current);
    setIsMobileProductsOpen(false);
    setMobileExpandedCategorySlug("");
    setMobileExpandedSubcategorySlug("");
  };

  const handleMobileCategoryToggle = (categorySlug: string) => {
    setMobileExpandedCategorySlug((current) => (current === categorySlug ? "" : categorySlug));
    setMobileExpandedSubcategorySlug("");
  };

  const handleMobileSubcategoryToggle = (subcategorySlug: string) => {
    setMobileExpandedSubcategorySlug((current) => (current === subcategorySlug ? "" : subcategorySlug));
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsMobileProductsOpen(false);
    setIsMobileSolutionsOpen(false);
    setMobileExpandedCategorySlug("");
    setMobileExpandedSubcategorySlug("");
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isAtTopOfHero = hasHero && !isPastHero && !hasStartedScrolling;
  const isFloatingInsideHero = hasHero && !isPastHero && hasStartedScrolling;
  const isFloatingLight = !hasHero || isPastHero;

  const desktopLinkClass = (href: string) =>
    `group relative whitespace-nowrap text-sm font-semibold transition-all duration-300 ${
      isActive(href)
        ? isFloatingLight
          ? "text-[#005BAC]"
          : "text-blue-300"
        : isFloatingLight
        ? "text-slate-700 hover:text-[#005BAC]"
        : "text-white hover:text-blue-300"
    }`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav
        className={`relative z-20 w-full transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
          isAtTopOfHero
            ? "border-0 bg-transparent shadow-none"
            : isFloatingInsideHero
            ? "border-b border-white/15 bg-zinc-950/65 shadow-[0_12px_35px_-20px_rgba(0,0,0,0.75)] backdrop-blur-xl"
            : "border-b border-[#C9E1F5] bg-[#EAF5FD]/95 shadow-[0_12px_35px_-20px_rgba(0,91,172,0.35)] backdrop-blur-xl"
        }`}
      >
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href={navigationContent.logo.href}
            onClick={handleLogoClick}
            className="relative z-10 flex items-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src={navigationContent.logo.image}
              alt={navigationContent.logo.alt}
              className="h-8 w-auto object-contain transition-all duration-300 lg:h-9"
            />
          </Link>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
            {navigationContent.links
              .filter((item) => item.href !== "/contact")
              .map((item) => {
                const isProductsLink = item.href === "/products";
                const isSolutionsLink = item.href === "/solutions";

                if (isProductsLink) {
                  return (
                    <div
                      key={item.href}
                      onMouseEnter={openProductsMenu}
                      onMouseLeave={scheduleProductsMenuClose}
                    >
                      <Link
                        href={item.href}
                        className={`${desktopLinkClass(item.href)} flex items-center gap-1.5 py-5`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${
                            isProductsMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                        <span
                          className={`absolute bottom-3 left-0 h-0.5 transition-all duration-300 ${
                            isFloatingLight ? "bg-[#005BAC]" : "bg-blue-300"
                          } ${
                            isActive(item.href) || isProductsMenuOpen ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </Link>
                    </div>
                  );
                }

                if (isSolutionsLink) {
                  return (
                    <div
                      key={item.href}
                      onMouseEnter={openSolutionsMenu}
                      onMouseLeave={scheduleSolutionsMenuClose}
                    >
                      <Link
                        href={item.href}
                        className={`${desktopLinkClass(item.href)} flex items-center gap-1.5 py-5`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${
                            isSolutionsMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                        <span
                          className={`absolute bottom-3 left-0 h-0.5 transition-all duration-300 ${
                            isFloatingLight ? "bg-[#005BAC]" : "bg-blue-300"
                          } ${
                            isActive(item.href) || isSolutionsMenuOpen ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </Link>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={closeDesktopMenus}
                    className={desktopLinkClass(item.href)}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                        isFloatingLight ? "bg-[#005BAC]" : "bg-blue-300"
                      } ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </Link>
                );
              })}
          </div>

          <Link
            href="/contact"
            onMouseEnter={closeDesktopMenus}
            className={`ml-auto hidden h-10 items-center justify-center border px-5 text-sm font-semibold transition-all duration-300 lg:inline-flex ${
              isFloatingLight
                ? isActive("/contact")
                  ? "border-[#005BAC] bg-[#005BAC] text-white"
                  : "border-[#005BAC] bg-[#005BAC] text-white hover:bg-[#004A8D]"
                : isActive("/contact")
                ? "border-blue-300 bg-blue-300 text-zinc-950"
                : "border-white/50 bg-white/10 text-white backdrop-blur-md hover:border-[#188BD7] hover:bg-[#188BD7]"
            }`}
          >
            Contact Us
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className={`relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-md border transition-all duration-300 lg:hidden ${
              isFloatingLight
                ? "border-[#BCD8ED] bg-[#F4FAFF] text-slate-900 hover:border-[#005BAC] hover:text-[#005BAC]"
                : "border-white/30 bg-white/10 text-white backdrop-blur-md"
            }`}
            aria-label={navigationContent.mobileMenuAriaLabel}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div aria-hidden="true" className="hidden h-10 w-10 lg:block" />
        </div>
      </nav>

      {/* Desktop Products Mega Menu */}
      {isProductsMenuOpen && (
        <div
          className={`absolute left-[8.5rem] right-[8.5rem] top-[66px] hidden border-b backdrop-blur-xl before:absolute before:-top-3 before:left-0 before:right-0 before:h-5 before:content-[''] lg:block ${
            isFloatingLight
              ? "border-[#C9E1F5] bg-[#EAF5FD]/95 shadow-[0_30px_80px_-30px_rgba(0,91,172,0.25)]"
              : "border-white/[0.09] bg-[#05090D]/88 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
          }`}
          onMouseEnter={openProductsMenu}
          onMouseLeave={scheduleProductsMenuClose}
        >
          <div className="grid min-h-[440px] w-full grid-cols-[minmax(250px,0.8fr)_minmax(280px,0.9fr)_minmax(0,3.3fr)]">
            <section className={`border-r ${isFloatingLight ? "border-[#C9E1F5]" : "border-white/[0.08]"}`}>
              <div className={`flex h-20 items-center border-b px-8 ${isFloatingLight ? "border-[#C9E1F5]" : "border-white/[0.08]"}`}>
                <p className={`text-[10px] font-bold uppercase tracking-[0.28em] ${isFloatingLight ? "text-[#005BAC]" : "text-[#66B8EF]"}`}>
                  Categories
                </p>
              </div>

              <div className="navbar-scrollbar max-h-[360px] overflow-y-auto py-3">
                {productCategories.map((category) => {
                  const isSelected = selectedCategory?.slug === category.slug;

                  return (
                    <Link
                      key={category.slug}
                      href={`/products/${category.slug}`}
                      onMouseEnter={() => handleCategoryHover(category.slug)}
                      className={`group/category relative flex min-h-[54px] items-center justify-between gap-3 px-8 py-3 text-sm font-semibold transition-all duration-200 ${
                        isSelected
                          ? isFloatingLight
                            ? "bg-[#005BAC]/10 text-[#005BAC]"
                            : "bg-white/[0.055] text-white"
                          : isFloatingLight
                          ? "text-slate-600 hover:bg-[#005BAC]/5 hover:text-[#005BAC]"
                          : "text-zinc-500 hover:bg-white/[0.035] hover:text-white"
                      }`}
                    >
                      <span
                        className={`absolute bottom-2 left-0 top-2 w-0.5 origin-center scale-y-0 bg-[#005BAC] transition-transform duration-200 ${
                          isSelected ? "scale-y-100" : "group-hover/category:scale-y-100"
                        }`}
                      />

                      <div className="flex min-w-0 items-center gap-3">
                        <div className={`h-9 w-9 shrink-0 overflow-hidden rounded-md border p-[2px] ${
                          isFloatingLight 
                            ? "border-[#C9E1F5] bg-white shadow-[0_2px_8px_-2px_rgba(0,91,172,0.15)]" 
                            : "border-slate-800 bg-[#0B1220] shadow-[0_0_0_2px_rgba(255,255,255,0.8),0_10px_20px_rgba(2,6,23,0.45)]"
                        }`}>
                          <img src={category.image} alt="" className="h-full w-full object-cover" />
                        </div>

                        <span className="min-w-0 truncate leading-6">{category.name}</span>
                      </div>

                      <ChevronRight
                        className={`h-4 w-4 shrink-0 transition-all duration-200 ${
                          isSelected
                            ? isFloatingLight
                              ? "text-[#005BAC]"
                              : "text-[#66B8EF]"
                            : isFloatingLight
                            ? "text-slate-400 group-hover/category:translate-x-1 group-hover/category:text-[#005BAC]"
                            : "text-zinc-700 group-hover/category:translate-x-1 group-hover/category:text-[#66B8EF]"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>
            </section>

            <section className={`border-r ${isFloatingLight ? "border-[#C9E1F5]" : "border-white/[0.08]"}`}>
              <div className={`flex h-20 items-center border-b px-8 ${isFloatingLight ? "border-[#C9E1F5]" : "border-white/[0.08]"}`}>
                <div className="min-w-0">
                  <p className={`text-[10px] font-bold uppercase tracking-[0.28em] ${isFloatingLight ? "text-[#005BAC]" : "text-[#66B8EF]"}`}>
                    Product Series
                  </p>

                  <p className={`mt-2 truncate text-xs font-semibold ${isFloatingLight ? "text-slate-500" : "text-zinc-500"}`}>
                    {selectedCategory?.name}
                  </p>
                </div>
              </div>

              <div className="navbar-scrollbar max-h-[360px] overflow-y-auto py-3">
                {selectedCategory && selectedCategory.subcategories.length > 0 ? (
                  selectedCategory.subcategories.map((subcategory) => {
                    const isSelected = selectedSubcategory?.slug === subcategory.slug;

                    return (
                      <Link
                        key={subcategory.slug}
                        href={`/products/${selectedCategory.slug}/${subcategory.slug}`}
                        onMouseEnter={() => setSelectedSubcategorySlug(subcategory.slug)}
                        className={`group/series relative flex min-h-[54px] items-center justify-between gap-3 px-8 py-3 text-sm font-semibold transition-all duration-200 ${
                          isSelected
                            ? isFloatingLight
                              ? "bg-[#005BAC]/10 text-[#005BAC]"
                              : "bg-white/[0.055] text-white"
                            : isFloatingLight
                            ? "text-slate-600 hover:bg-[#005BAC]/5 hover:text-[#005BAC]"
                            : "text-zinc-500 hover:bg-white/[0.035] hover:text-white"
                        }`}
                      >
                        <span
                          className={`absolute bottom-2 left-0 top-2 w-0.5 origin-center scale-y-0 bg-[#005BAC] transition-transform duration-200 ${
                            isSelected ? "scale-y-100" : "group-hover/series:scale-y-100"
                          }`}
                        />

                        <div className="flex min-w-0 items-center gap-3">
                          <div className={`h-9 w-9 shrink-0 overflow-hidden rounded-md border p-[2px] ${
                            isFloatingLight 
                              ? "border-[#C9E1F5] bg-white shadow-[0_2px_8px_-2px_rgba(0,91,172,0.15)]" 
                              : "border-slate-700 bg-[#0F172A] shadow-[0_0_0_1px_rgba(255,255,255,0.45),0_8px_18px_rgba(15,23,42,0.25)]"
                          }`}>
                            <img src={subcategory.image} alt="" className="h-full w-full object-cover" />
                          </div>

                          <span className="min-w-0 truncate leading-6">{subcategory.name}</span>
                        </div>

                        <ChevronRight
                          className={`h-4 w-4 shrink-0 transition-all duration-200 ${
                            isSelected
                              ? isFloatingLight
                                ? "text-[#005BAC]"
                                : "text-[#66B8EF]"
                              : isFloatingLight
                              ? "text-slate-400 group-hover/series:translate-x-1 group-hover/series:text-[#005BAC]"
                              : "text-zinc-700 group-hover/series:translate-x-1 group-hover/series:text-[#66B8EF]"
                          }`}
                        />
                      </Link>
                    );
                  })
                ) : (
                  <div className="px-8 py-10">
                    <p className={`text-sm italic leading-7 ${isFloatingLight ? "text-slate-500" : "text-zinc-700"}`}>
                      No product series are currently available.
                    </p>
                  </div>
                )}
              </div>
            </section>

            <section>
              <div className={`flex h-20 items-center border-b px-10 ${isFloatingLight ? "border-[#C9E1F5]" : "border-white/[0.08]"}`}>
                <div className="min-w-0">
                  <p className={`text-[10px] font-bold uppercase tracking-[0.28em] ${isFloatingLight ? "text-[#005BAC]" : "text-[#66B8EF]"}`}>
                    Products
                  </p>

                  <p className={`mt-2 truncate text-xs font-semibold ${isFloatingLight ? "text-slate-500" : "text-zinc-500"}`}>
                    {selectedSubcategory?.name ?? "Select a product series"}
                  </p>
                </div>
              </div>

              <div className="navbar-scrollbar max-h-[360px] overflow-y-auto px-10 py-5">
                {selectedCategory && selectedSubcategory && selectedSubcategory.products.length > 0 ? (
                  <div className="grid gap-x-8 gap-y-2 lg:grid-cols-3">
                    {selectedSubcategory.products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${selectedCategory.slug}/${selectedSubcategory.slug}/${product.slug}`}
                        className={`group/product relative flex min-h-[54px] items-center justify-between gap-3 border-b py-3 text-sm font-semibold transition-colors duration-200 ${
                          isFloatingLight
                            ? "border-[#C9E1F5] text-slate-600 hover:text-[#005BAC]"
                            : "border-white/[0.055] text-zinc-500 hover:text-white"
                        }`}
                      >
                        <span className="absolute bottom-2 left-0 top-2 w-0.5 origin-center scale-y-0 bg-[#005BAC] transition-transform duration-200 group-hover/product:scale-y-100" />

                        <div className="flex min-w-0 items-center gap-3 pl-4">
                          <div className={`h-9 w-9 shrink-0 overflow-hidden rounded-md border p-[2px] ${
                            isFloatingLight 
                              ? "border-[#C9E1F5] bg-white shadow-[0_2px_8px_-2px_rgba(0,91,172,0.15)]" 
                              : "border-slate-700 bg-[#0F172A] shadow-[0_0_0_1px_rgba(255,255,255,0.45),0_8px_18px_rgba(15,23,42,0.25)]"
                          }`}>
                            <img src={product.image} alt="" className="h-full w-full object-contain" />
                          </div>

                          <span className="min-w-0 truncate leading-6">{product.name}</span>
                        </div>

                        <ChevronRight
                          className={`h-4 w-4 shrink-0 transition-all duration-200 ${
                            isFloatingLight
                              ? "text-slate-300 group-hover/product:translate-x-1 group-hover/product:text-[#005BAC]"
                              : "text-zinc-800 group-hover/product:translate-x-1 group-hover/product:text-[#66B8EF]"
                          }`}
                        />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className={`text-sm italic leading-7 ${isFloatingLight ? "text-slate-500" : "text-zinc-700"}`}>
                    Hover over a product series to view its available models.
                  </p>
                )}
              </div>
            </section>
          </div>
        </div>
      )}

      {/* Desktop Solutions Mega Menu */}
      {isSolutionsMenuOpen && (
        <div
          className={`absolute left-[8.5rem] right-[8.5rem] top-[66px] hidden border-b backdrop-blur-xl before:absolute before:-top-3 before:left-0 before:right-0 before:h-5 before:content-[''] lg:block ${
            isFloatingLight
              ? "border-[#C9E1F5] bg-[#EAF5FD]/95 shadow-[0_30px_80px_-30px_rgba(0,91,172,0.25)]"
              : "border-white/[0.09] bg-[#05090D]/90 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
          }`}
          onMouseEnter={openSolutionsMenu}
          onMouseLeave={scheduleSolutionsMenuClose}
        >
          <div className="grid min-h-[440px] w-full grid-cols-[minmax(320px,0.9fr)_minmax(0,2.4fr)]">
            <section className={`border-r ${isFloatingLight ? "border-[#C9E1F5]" : "border-white/[0.08]"}`}>
              <div className={`flex h-20 items-center justify-between border-b px-8 ${isFloatingLight ? "border-[#C9E1F5]" : "border-white/[0.08]"}`}>
                <div>
                  <p className={`text-[10px] font-bold uppercase tracking-[0.28em] ${isFloatingLight ? "text-[#005BAC]" : "text-[#66B8EF]"}`}>
                    Solutions
                  </p>

                  <p className={`mt-2 text-xs font-semibold ${isFloatingLight ? "text-slate-500" : "text-zinc-500"}`}>
                    Industry-focused security systems
                  </p>
                </div>

                <Link
                  href="/solutions"
                  className={`group/all flex items-center gap-2 text-xs font-semibold transition-colors ${
                    isFloatingLight ? "text-slate-500 hover:text-[#005BAC]" : "text-zinc-500 hover:text-white"
                  }`}
                >
                  View All
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/all:translate-x-1" />
                </Link>
              </div>

              <div className="navbar-scrollbar max-h-[360px] overflow-y-auto py-3">
                {solutions.map((solution) => {
                  const isSelected = selectedSolution?.slug === solution.slug;

                  return (
                    <Link
                      key={solution.slug}
                      href={`/solutions/${solution.slug}`}
                      onMouseEnter={() => setSelectedSolutionSlug(solution.slug)}
                      className={`group/solution relative flex min-h-[58px] items-center justify-between gap-4 px-8 py-3 text-sm font-semibold transition-all duration-200 ${
                        isSelected
                          ? isFloatingLight
                            ? "bg-[#005BAC]/10 text-[#005BAC]"
                            : "bg-white/[0.055] text-white"
                          : isFloatingLight
                          ? "text-slate-600 hover:bg-[#005BAC]/5 hover:text-[#005BAC]"
                          : "text-zinc-500 hover:bg-white/[0.035] hover:text-white"
                      }`}
                    >
                      <span
                        className={`absolute bottom-2 left-0 top-2 w-0.5 origin-center scale-y-0 bg-[#005BAC] transition-transform duration-200 ${
                          isSelected ? "scale-y-100" : "group-hover/solution:scale-y-100"
                        }`}
                      />

                      <div className="flex min-w-0 items-center gap-3">
                        <div className={`h-10 w-10 shrink-0 overflow-hidden rounded-md border p-[2px] ${
                          isFloatingLight 
                            ? "border-[#C9E1F5] bg-white shadow-[0_2px_8px_-2px_rgba(0,91,172,0.15)]" 
                            : "border-slate-800 bg-[#0B1220] shadow-[0_0_0_2px_rgba(255,255,255,0.8),0_10px_20px_rgba(2,6,23,0.45)]"
                        }`}>
                          <img src={solution.heroImage} alt="" className="h-full w-full object-cover" />
                        </div>

                        <span className="min-w-0 truncate leading-6">{solution.name}</span>
                      </div>

                      <ChevronRight
                        className={`h-4 w-4 shrink-0 transition-all duration-200 ${
                          isSelected
                            ? isFloatingLight
                              ? "text-[#005BAC]"
                              : "text-[#66B8EF]"
                            : isFloatingLight
                            ? "text-slate-400 group-hover/solution:translate-x-1 group-hover/solution:text-[#005BAC]"
                            : "text-zinc-700 group-hover/solution:translate-x-1 group-hover/solution:text-[#66B8EF]"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>
            </section>

            <section className="relative overflow-hidden">
              {selectedSolution ? (
                <>
                  <img
                    src={selectedSolution.heroImage}
                    alt={selectedSolution.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      isFloatingLight
                        ? "from-[#EAF5FD] via-[#EAF5FD]/75 to-transparent"
                        : "from-[#05090D] via-[#05090D]/80 to-[#05090D]/35"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      isFloatingLight
                        ? "from-[#EAF5FD]/50 via-transparent to-transparent"
                        : "from-[#05090D] via-transparent to-[#05090D]/30"
                    }`}
                  />

                  <div
                    className={`pointer-events-none absolute inset-0 ${isFloatingLight ? "opacity-[0.03]" : "opacity-[0.08]"}`}
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, ${isFloatingLight ? "#005BAC" : "#ffffff"} 1px, transparent 0)`,
                      backgroundSize: "28px 28px",
                    }}
                  />

                  <div className="relative z-10 flex min-h-[440px] max-w-2xl flex-col justify-center px-12 py-12 xl:px-16">
                    <p className={`text-[10px] font-bold uppercase tracking-[0.28em] ${isFloatingLight ? "text-[#005BAC]" : "text-[#66B8EF]"}`}>
                      Industry Solution
                    </p>

                    <h3 className={`mt-5 text-3xl font-semibold tracking-tight xl:text-4xl ${isFloatingLight ? "text-slate-900" : "text-white"}`}>
                      {selectedSolution.name}
                    </h3>

                    <p className={`mt-5 line-clamp-4 max-w-xl text-sm font-light leading-7 xl:text-base ${isFloatingLight ? "text-slate-700" : "text-zinc-300"}`}>
                      {selectedSolution.directoryDescription}
                    </p>

                    <Link
                      href={`/solutions/${selectedSolution.slug}`}
                      className={`group/action mt-8 inline-flex w-fit items-center gap-3 border px-6 py-3 text-sm font-semibold backdrop-blur-md transition-all duration-300 ${
                        isFloatingLight
                          ? "border-[#005BAC] bg-[#005BAC] text-white hover:bg-[#004A8D]"
                          : "border-white/20 bg-white/10 text-white hover:border-[#188BD7] hover:bg-[#188BD7]"
                      }`}
                    >
                      Explore Solution
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/action:translate-x-1" />
                    </Link>
                  </div>
                </>
              ) : (
                <div className="flex min-h-[440px] items-center justify-center px-10">
                  <p className={`text-sm italic ${isFloatingLight ? "text-slate-500" : "text-zinc-600"}`}>
                    Select a solution to view its details.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className={`max-h-[calc(100vh-4rem)] w-full overflow-y-auto border-b backdrop-blur-xl transition-all duration-500 lg:hidden ${
            isFloatingLight
              ? "border-[#C9E1F5] bg-[#EAF5FD]/98 shadow-[0_12px_35px_-20px_rgba(0,91,172,0.35)]"
              : "border-white/15 bg-zinc-950/95 shadow-[0_12px_35px_-20px_rgba(0,0,0,0.75)]"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            {navigationContent.links.map((item) => {
              const isProductsLink = item.href === "/products";
              const isSolutionsLink = item.href === "/solutions";

              if (isProductsLink) {
                return (
                  <div key={item.href} className={`border-b ${isFloatingLight ? "border-[#C9E1F5]" : "border-white/10"}`}>
                    <button
                      type="button"
                      onClick={handleMobileProductsToggle}
                      className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold transition-colors ${
                        isActive(item.href) || isMobileProductsOpen
                          ? isFloatingLight
                            ? "text-[#005BAC]"
                            : "text-blue-300"
                          : isFloatingLight
                          ? "text-slate-700"
                          : "text-white"
                      }`}
                      aria-expanded={isMobileProductsOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${isMobileProductsOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <div className={`grid transition-all duration-300 ${isMobileProductsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <div className={`border-t px-3 pb-4 pt-2 ${isFloatingLight ? "border-[#C9E1F5] bg-[#DFF0FC]/55" : "border-white/10 bg-white/[0.035]"}`}>
                          <Link
                            href="/products"
                            onClick={closeMobileMenu}
                            className={`mb-2 flex items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] ${
                              isFloatingLight ? "text-[#005BAC]" : "text-blue-300"
                            }`}
                          >
                            View All Products
                            <ChevronRight className="h-4 w-4" />
                          </Link>

                          {productCategories.map((category) => {
                            const categoryIsOpen = mobileExpandedCategorySlug === category.slug;

                            return (
                              <div key={category.slug} className={`border-t ${isFloatingLight ? "border-[#C9E1F5]" : "border-white/10"}`}>
                                <div className="flex items-center">
                                  <Link
                                    href={`/products/${category.slug}`}
                                    onClick={closeMobileMenu}
                                    className={`min-w-0 flex-1 px-4 py-3 text-sm font-semibold ${
                                      isFloatingLight ? "text-slate-700" : "text-zinc-200"
                                    }`}
                                  >
                                    <span className="flex min-w-0 items-center gap-3">
                                      <span className={`h-8 w-8 shrink-0 overflow-hidden rounded-md border p-[1px] ${
                                        isFloatingLight 
                                          ? "border-[#C9E1F5] bg-white shadow-[0_2px_8px_-2px_rgba(0,91,172,0.15)]" 
                                          : "border-slate-700 bg-[#0F172A] shadow-[0_0_0_1px_rgba(255,255,255,0.45),0_8px_18px_rgba(15,23,42,0.25)]"
                                      }`}>
                                        <img src={category.image} alt="" className="h-full w-full object-cover" />
                                      </span>
                                      <span className="truncate">{category.name}</span>
                                    </span>
                                  </Link>

                                  <button
                                    type="button"
                                    onClick={() => handleMobileCategoryToggle(category.slug)}
                                    className={`flex h-11 w-11 shrink-0 items-center justify-center ${
                                      isFloatingLight ? "text-[#005BAC]" : "text-blue-300"
                                    }`}
                                    aria-label={`Toggle ${category.name} series`}
                                    aria-expanded={categoryIsOpen}
                                  >
                                    <ChevronDown
                                      className={`h-4 w-4 transition-transform duration-300 ${categoryIsOpen ? "rotate-180" : ""}`}
                                    />
                                  </button>
                                </div>

                                <div className={`grid transition-all duration-300 ${categoryIsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                                  <div className="overflow-hidden">
                                    <div className={`border-t pl-4 ${isFloatingLight ? "border-[#C9E1F5] bg-white/55" : "border-white/10 bg-black/15"}`}>
                                      {category.subcategories.length > 0 ? (
                                        category.subcategories.map((subcategory) => {
                                          const subcategoryKey = `${category.slug}:${subcategory.slug}`;
                                          const subcategoryIsOpen = mobileExpandedSubcategorySlug === subcategoryKey;

                                          return (
                                            <div key={subcategory.id} className={`border-b last:border-b-0 ${isFloatingLight ? "border-[#D6E8F5]" : "border-white/[0.07]"}`}>
                                              <div className="flex items-center">
                                                <Link
                                                  href={`/products/${category.slug}/${subcategory.slug}`}
                                                  onClick={closeMobileMenu}
                                                  className={`min-w-0 flex-1 px-4 py-3 text-sm ${
                                                    isFloatingLight ? "text-slate-600" : "text-zinc-300"
                                                  }`}
                                                >
                                                  <span className="flex min-w-0 items-center gap-3">
                                                    <span className={`h-8 w-8 shrink-0 overflow-hidden rounded-md border p-[1px] ${
                                                      isFloatingLight 
                                                        ? "border-[#C9E1F5] bg-white shadow-[0_2px_8px_-2px_rgba(0,91,172,0.15)]" 
                                                        : "border-slate-700 bg-[#0F172A] shadow-[0_0_0_1px_rgba(255,255,255,0.45),0_8px_18px_rgba(15,23,42,0.25)]"
                                                    }`}>
                                                      <img src={subcategory.image} alt="" className="h-full w-full object-cover" />
                                                    </span>
                                                    <span className="truncate">{subcategory.name}</span>
                                                  </span>
                                                </Link>

                                                <button
                                                  type="button"
                                                  onClick={() => handleMobileSubcategoryToggle(subcategoryKey)}
                                                  className={`flex h-11 w-11 shrink-0 items-center justify-center ${
                                                    isFloatingLight ? "text-[#005BAC]" : "text-blue-300"
                                                  }`}
                                                  aria-label={`Toggle ${subcategory.name} products`}
                                                  aria-expanded={subcategoryIsOpen}
                                                >
                                                  <ChevronDown
                                                    className={`h-4 w-4 transition-transform duration-300 ${subcategoryIsOpen ? "rotate-180" : ""}`}
                                                  />
                                                </button>
                                              </div>

                                              <div className={`grid transition-all duration-300 ${subcategoryIsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                                                <div className="overflow-hidden">
                                                  <div className={`border-t py-2 pl-5 ${isFloatingLight ? "border-[#D6E8F5] bg-[#F5FAFE]" : "border-white/[0.07] bg-black/20"}`}>
                                                    {subcategory.products.length > 0 ? (
                                                      subcategory.products.map((product) => (
                                                        <Link
                                                          key={product.id}
                                                          href={`/products/${category.slug}/${subcategory.slug}/${product.slug}`}
                                                          onClick={closeMobileMenu}
                                                          className={`flex items-center justify-between gap-4 border-b px-4 py-3 text-xs font-medium last:border-b-0 ${
                                                            isFloatingLight ? "border-[#E0ECF5] text-slate-600" : "border-white/[0.06] text-zinc-400"
                                                          }`}
                                                        >
                                                          <span className="flex min-w-0 items-center gap-3">
                                                            <span className={`h-8 w-8 shrink-0 overflow-hidden rounded-md border p-[1px] ${
                                                              isFloatingLight 
                                                                ? "border-[#C9E1F5] bg-white shadow-[0_2px_8px_-2px_rgba(0,91,172,0.15)]" 
                                                                : "border-slate-700 bg-[#0F172A] shadow-[0_0_0_1px_rgba(255,255,255,0.45),0_8px_18px_rgba(15,23,42,0.25)]"
                                                            }`}>
                                                              <img src={product.image} alt="" className="h-full w-full object-contain p-1" />
                                                            </span>
                                                            <span className="truncate">{product.name}</span>
                                                          </span>
                                                          <ChevronRight className="h-3.5 w-3.5 shrink-0" />
                                                        </Link>
                                                      ))
                                                    ) : (
                                                      <p className={`px-4 py-3 text-xs ${isFloatingLight ? "text-slate-500" : "text-zinc-500"}`}>
                                                        No products available.
                                                      </p>
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          );
                                        })
                                      ) : (
                                        <p className={`px-4 py-4 text-xs ${isFloatingLight ? "text-slate-500" : "text-zinc-500"}`}>
                                          No product series available.
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (isSolutionsLink) {
                return (
                  <div key={item.href} className={`border-b ${isFloatingLight ? "border-[#C9E1F5]" : "border-white/10"}`}>
                    <button
                      type="button"
                      onClick={handleMobileSolutionsToggle}
                      className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold transition-colors ${
                        isActive(item.href) || isMobileSolutionsOpen
                          ? isFloatingLight
                            ? "text-[#005BAC]"
                            : "text-blue-300"
                          : isFloatingLight
                          ? "text-slate-700"
                          : "text-white"
                      }`}
                      aria-expanded={isMobileSolutionsOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${isMobileSolutionsOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <div className={`grid transition-all duration-300 ${isMobileSolutionsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <div className={`border-t px-3 pb-4 pt-2 ${isFloatingLight ? "border-[#C9E1F5] bg-[#DFF0FC]/55" : "border-white/10 bg-white/[0.035]"}`}>
                          <Link
                            href="/solutions"
                            onClick={closeMobileMenu}
                            className={`mb-2 flex items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] ${
                              isFloatingLight ? "text-[#005BAC]" : "text-blue-300"
                            }`}
                          >
                            View All Solutions
                            <ChevronRight className="h-4 w-4" />
                          </Link>

                          {solutions.map((solution) => (
                            <Link
                              key={solution.slug}
                              href={`/solutions/${solution.slug}`}
                              onClick={closeMobileMenu}
                              className={`flex items-center gap-3 border-t px-4 py-3 text-sm font-semibold ${
                                isFloatingLight ? "border-[#C9E1F5] text-slate-700" : "border-white/10 text-zinc-200"
                              }`}
                            >
                              <span className={`h-8 w-8 shrink-0 overflow-hidden rounded-md border p-[1px] ${
                                isFloatingLight 
                                  ? "border-[#C9E1F5] bg-white shadow-[0_2px_8px_-2px_rgba(0,91,172,0.15)]" 
                                  : "border-slate-700 bg-[#0F172A] shadow-[0_0_0_1px_rgba(255,255,255,0.45),0_8px_18px_rgba(15,23,42,0.25)]"
                              }`}>
                                <img src={solution.heroImage} alt="" className="h-full w-full object-cover" />
                              </span>
                              <span className="truncate">{solution.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block border-b px-4 py-4 text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? isFloatingLight
                        ? "border-[#C9E1F5] text-[#005BAC]"
                        : "border-white/10 text-blue-300"
                      : isFloatingLight
                      ? "border-[#C9E1F5] text-slate-700"
                      : "border-white/10 text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="mt-4">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className={`block w-full border px-4 py-3 text-center text-sm font-semibold ${
                  isFloatingLight
                    ? "border-[#005BAC] bg-[#005BAC] text-white"
                    : "border-white/30 bg-white/10 text-white backdrop-blur-md"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}