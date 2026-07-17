import type { FooterContent } from "@/types/footer";

export const footerContent: FooterContent = {
  brand: {
    logo:
      "https://www.unvdubai.com/_astro/UNVLOGO.B2902jCZ_Z2pRAWs.webp",
    logoAlt: "UNV Oman logo",
    logoHref: "/",
    description:
      "Professional CCTV, IP camera, NVR, PTZ, thermal, analog and VMS security solutions for modern surveillance projects across Oman and the wider Middle East.",
  },

  sectionHeadings: {
    quickLinks: "Quick Links",
    products: "Products",
    contact: "Get In Touch",
    location: "Our Location",
  },

  quickLinks: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about",
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
      name: "Contact Us",
      href: "/contact",
    },
  ],

  productLinks: [
    {
      name: "Network Cameras",
      href: "/products/network-cameras",
    },
    {
      name: "Network Video Recorders",
      href: "/products/network-video-recorders",
    },
    {
      name: "Thermal Cameras",
      href: "/products/thermal-cameras",
    },
    {
      name: "PTZ Cameras",
      href: "/products/ptz-cameras",
    },
    {
      name: "Analog Cameras",
      href: "/products/analog-cameras",
    },
    {
      name: "VMS Software",
      href: "/products/vms-software",
    },
  ],

  socialLinks: [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: "instagram",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/971509664956",
      icon: "whatsapp",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "linkedin",
    },
  ],

  contact: {
    email: "sales@unv.com",
    emailHref: "mailto:sales@unvoman.com",
    phone: "+971 50 966 4956",
    phoneHref: "tel:+971509664956",
    workingHours: "Sun - Thu: 9AM - 6PM",
  },

  location: {
    description:
      "Contact our team for surveillance product enquiries, solution planning and project consultation in Oman.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2455!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTQuOSJF!5e0!3m2!1sen!2sae!4v1",
    mapTitle: "UNV Oman Office Location",
    mapLabel: "UNV Oman",
  },

  bottom: {
    companyName: "UNV Oman",
    rightsText: "All rights reserved.",
    tagline: "Professional Security Infrastructure",
  },
};