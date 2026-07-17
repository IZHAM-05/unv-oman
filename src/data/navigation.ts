import type { NavigationContent } from "@/types/navigation";

export const navigationContent: NavigationContent = {
  logo: {
    image:
      "https://www.unvdubai.com/_astro/UNVLOGO.B2902jCZ_Z2pRAWs.webp",
    alt: "UNV Oman logo",
    href: "/",
  },

  links: [

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