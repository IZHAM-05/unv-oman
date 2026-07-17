import type {
  FeaturedCategoriesContent,
  FeaturedProductsContent,
  HomeCTAContent,
  HomeHeroContent,
  HomeImageContentCard,
  HomeIndustriesContent,
  HomeStat,
  HomeStatsSectionContent,
  WhyChooseUsSectionContent,
} from "@/types/home";

export const homeHeroContent: HomeHeroContent = {
  autoplayDelay: 5000,

  slides: [
    {
      image: "https://picsum.photos/id/1015/800/800",
      title: "Professional Video Surveillance for Oman.",
      description:
        "Explore a comprehensive range of UNV video surveillance products designed for clear monitoring, reliable recording and professional security applications.",
    },
    {
      image: "https://picsum.photos/id/1018/800/800",
      title: "Clear Vision. Smarter Security.",
      description:
        "Combine high-quality video imaging with intelligent detection capabilities to improve situational awareness and support faster security decisions.",
    },
    {
      image: "https://picsum.photos/id/1025/800/800",
      title: "Reliable Recording and Management.",
      description:
        "Build dependable surveillance systems with network video recorders, storage options and management tools designed for continuous video operation.",
    },
    {
      image: "https://picsum.photos/id/1035/800/800",
      title: "Advanced Protection for Critical Environments.",
      description:
        "Support demanding security requirements with PTZ, thermal and specialised surveillance technologies for wider coverage and enhanced visibility.",
    },
    {
      image: "https://picsum.photos/id/1040/800/800",
      title: "Intelligent Security Management.",
      description:
        "Connect cameras, recorders and video management platforms within a unified security ecosystem that can adapt to projects of different sizes.",
    },
  ],

  primaryAction: {
    label: "Explore Products",
    href: "/products",
  },

  secondaryAction: {
    label: "Request a Quote",
    href: "/contact",
  },

  pagination: {
    slideButtonAriaLabel: "Go to slide",
    separator: "/",
    numberPadding: 2,
    paddingCharacter: "0",
  },
};

export const homeStatsSectionContent: HomeStatsSectionContent = {
  heading: "Technology built for complete video surveillance.",
  description:
    "From intelligent video capture to recording, management and system integration, UNV technologies support professional security requirements across a wide range of environments.",
  counterDuration: 1600,
  observerThreshold: 0.2,
  animationDelayStep: 0.1,
};

export const homeStats: HomeStat[] = [
  {
    value: "24/7",
    label: "Continuous Surveillance",
    description:
      "Products designed to support continuous monitoring and dependable video recording across day and night conditions.",
    icon: "clock",
  },
  {
    value: "AIoT",
    label: "Intelligent Technology",
    description:
      "Video surveillance technologies that combine intelligent analytics, connected devices and efficient security management.",
    icon: "tag",
  },
  {
    value: "Multi-Series",
    label: "Product Portfolio",
    description:
      "A broad selection of cameras, recorders, storage products and management platforms for different project requirements.",
    icon: "building",
  },
  {
    value: "End-to-End",
    label: "Security Ecosystem",
    description:
      "Integrated products covering video capture, transmission, recording, storage, display and centralized management.",
    icon: "phone",
  },
];

export const featuredCategoriesContent: FeaturedCategoriesContent = {
  heading: "Explore the UNV product portfolio",
  description:
    "Discover professional surveillance categories for video capture, recording, monitoring and intelligent security management.",
  actionLabel: "Explore Category",
};

export const featuredProductsContent: FeaturedProductsContent = {
  heading: "Explore UNV product models",
  description:
    "Browse surveillance products across multiple categories and compare models based on your project, coverage and recording requirements.",
  actionLabel: "View Product",
};

export const industriesContent: HomeIndustriesContent = {
  heading: "Security solutions for diverse environments",
  description:
    "UNV surveillance technologies can be configured for a wide range of commercial, institutional and industrial security applications.",

  items: [
    {
      name: "Commercial Buildings",
      image: "https://picsum.photos/id/1040/800/900",
    },
    {
      name: "Retail Environments",
      image: "https://picsum.photos/id/1035/800/900",
    },
    {
      name: "Warehouses & Logistics",
      image: "https://picsum.photos/id/1018/800/900",
    },
    {
      name: "Hotels & Hospitality",
      image: "https://picsum.photos/id/1025/800/900",
    },
    {
      name: "Education Campuses",
      image: "https://picsum.photos/id/1050/800/900",
    },
    {
      name: "Industrial Facilities",
      image: "https://picsum.photos/id/1015/800/900",
    },
  ],

  action: {
    label: "Discuss Your Project",
    href: "/contact",
  },
};

export const whyChooseUsSectionContent: WhyChooseUsSectionContent = {
  heading: "Why choose UNV solutions for your project?",
  description:
    "Access a complete video surveillance portfolio supported by intelligent technologies, flexible system options and a clear product enquiry process.",
  animationDelayStep: 0.1,
};

export const whyChooseUsReasons: HomeImageContentCard[] = [
  {
    title: "Complete Product Portfolio",
    description:
      "Explore network cameras, PTZ cameras, video recorders, thermal products, storage systems and video management technologies within one connected portfolio.",
    image: "https://picsum.photos/id/1015/900/700",
  },
  {
    title: "Solutions for Different Project Sizes",
    description:
      "Choose products for individual sites, multi-building installations and larger surveillance environments based on coverage, recording and management requirements.",
    image: "https://picsum.photos/id/1018/900/700",
  },
  {
    title: "Intelligent Video Technology",
    description:
      "Use advanced imaging, intelligent detection and efficient video management capabilities to strengthen visibility and operational awareness.",
    image: "https://picsum.photos/id/1035/900/700",
  },
  {
    title: "Project Enquiry Support",
    description:
      "Share your security requirements to receive guidance on suitable product categories, camera types, recording options and system configurations.",
    image: "https://picsum.photos/id/1040/900/700",
  },
];

export const homeCTAContent: HomeCTAContent = {
  heading: "Planning a security project in Oman?",
  description:
    "Tell us about your surveillance requirements and explore suitable UNV products for your site, coverage objectives and recording needs.",
  image: "https://picsum.photos/id/1015/1600/1200",
  imageLabel: "UNV Video Surveillance Solutions",
  eyebrow: "Project Enquiry",
  title: "Plan the Right Surveillance System",
  body:
    "Share your project requirements to identify appropriate camera technologies, recording systems and management options for a reliable video surveillance solution.",
  points: [
    "Product selection based on project requirements",
    "Camera and recorder configuration guidance",
    "Scalable options for future system expansion",
  ],
  primaryAction: {
    label: "Request a Quote",
    href: "/contact",
  },
  secondaryAction: {
    label: "Browse Products",
    href: "/products",
  },
};