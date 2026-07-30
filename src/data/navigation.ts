import type { NavigationContent } from "@/types/navigation";

export const navigationContent: NavigationContent = {
  logo: {
    image:
      "/images/logos/unv.png",
    alt: "UNV Oman logo",
    href: "/",
  },

  links: [

    {
      name:"Home",
      href:"/"
    },

    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Solutions",
      href: "/solutions",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ],



  mobileMenuAriaLabel: "Toggle navigation menu",
};