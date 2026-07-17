import type { Product } from "@/types/product-item";

export const products: Product[] = [
  {
    id: 1,
    categoryId: 1,
    subcategoryId: 1,
    name: "IPC2122LB",
    slug: "ipc2122lb",
    image: "https://picsum.photos/id/10/900/700",
    description:
      "Compact IP camera suitable for small business and indoor surveillance.",

    specifications: [
      {
        label: "Resolution",
        value: "2MP",
      },
      {
        label: "Compression",
        value: "H.265",
      },
      {
        label: "Lens",
        value: "2.8mm",
      },
      {
        label: "Protection",
        value: "IP67",
      },
    ],

    features: [
      "Full HD image performance",
      "H.265 video compression",
      "Smart infrared illumination",
      "Motion detection support",
      "PoE network connectivity",
      "Weather-resistant housing",
    ],

    applications: [
      "Small businesses",
      "Retail shops",
      "Residential properties",
      "Indoor office monitoring",
    ],
  },

  {
    id: 2,
    categoryId: 1,
    subcategoryId: 2,
    name: "IPC3615SB",
    slug: "ipc3615sb",
    image: "https://picsum.photos/id/1018/900/700",
    description:
      "Professional network camera for advanced commercial security projects.",

    specifications: [
      {
        label: "Resolution",
        value: "5MP",
      },
      {
        label: "Compression",
        value: "H.265+",
      },
      {
        label: "Lens",
        value: "2.8mm",
      },
      {
        label: "Protection",
        value: "IP67 / IK10",
      },
    ],

    features: [
      "High-resolution image capture",
      "Smart infrared night vision",
      "Human and vehicle detection",
      "Wide dynamic range",
      "Vandal-resistant dome housing",
      "ONVIF compatibility",
    ],

    applications: [
      "Commercial buildings",
      "Schools and universities",
      "Hotels",
      "Shopping centres",
    ],
  },

  {
    id: 3,
    categoryId: 2,
    subcategoryId: 3,
    name: "IPC6424SR-X25-VF-B",
    slug: "ipc6424sr-x25-vf-b",
    image: "https://picsum.photos/id/1018/900/700",
    description:
      "4MP 25X LightHunter IR Network PTZ Camera for professional outdoor surveillance.",

    specifications: [
      {
        label: "Resolution",
        value: "4MP",
      },
      {
        label: "Optical Zoom",
        value: "25X",
      },
      {
        label: "Night Vision",
        value: "IR illumination",
      },
      {
        label: "Protection",
        value: "IP66",
      },
    ],

    features: [
      "High-speed pan and tilt",
      "25X optical zoom",
      "LightHunter low-light technology",
      "Automatic target tracking",
      "Wide-area surveillance coverage",
      "Outdoor weather protection",
    ],

    applications: [
      "Large commercial sites",
      "Parking areas",
      "Warehouses",
      "Perimeter surveillance",
    ],
  },

  {
    id: 4,
    categoryId: 3,
    subcategoryId: 4,
    name: "NVR308-32E-B",
    slug: "nvr308-32e-b",
    image: "https://picsum.photos/id/1018/900/700",
    description:
      "32-channel network video recorder for enterprise CCTV installations.",

    specifications: [
      {
        label: "Channels",
        value: "32",
      },
      {
        label: "Compression",
        value: "H.265+",
      },
      {
        label: "Storage",
        value: "Multiple HDD support",
      },
      {
        label: "Output",
        value: "HDMI / VGA",
      },
    ],

    features: [
      "32-channel IP camera support",
      "High-resolution video recording",
      "Remote live viewing",
      "Intelligent playback search",
      "Multi-user access",
      "Centralized device management",
    ],

    applications: [
      "Enterprise CCTV systems",
      "Commercial buildings",
      "Industrial facilities",
      "Large retail environments",
    ],
  },

  {
    id: 5,
    categoryId: 4,
    subcategoryId: 5,
    name: "TIC2621",
    slug: "tic2621",
    image: "https://picsum.photos/id/1018/900/700",
    description:
      "Thermal camera for intelligent detection and advanced security monitoring.",

    specifications: [
      {
        label: "Sensor",
        value: "Thermal imaging",
      },
      {
        label: "Detection",
        value: "Heat detection",
      },
      {
        label: "Protection",
        value: "Outdoor rated",
      },
      {
        label: "Analytics",
        value: "Smart alerts",
      },
    ],

    features: [
      "Thermal image monitoring",
      "Fire and heat detection",
      "Perimeter intrusion detection",
      "Low-visibility operation",
      "Intelligent alarm support",
      "Continuous environmental monitoring",
    ],

    applications: [
      "Industrial facilities",
      "Critical infrastructure",
      "Fire prevention systems",
      "Perimeter protection",
    ],
  },

  {
    id: 6,
    categoryId: 5,
    subcategoryId: 6,
    name: "UAC-B112",
    slug: "uac-b112",
    image: "https://picsum.photos/id/1005/900/700",
    description:
      "Analog bullet camera for basic CCTV monitoring and security coverage.",

    specifications: [
      {
        label: "Resolution",
        value: "2MP",
      },
      {
        label: "Signal",
        value: "Analog HD",
      },
      {
        label: "Lens",
        value: "Fixed lens",
      },
      {
        label: "Protection",
        value: "Outdoor rated",
      },
    ],

    features: [
      "Full HD analog video",
      "Infrared night vision",
      "Simple DVR integration",
      "Cost-effective installation",
      "Durable bullet housing",
      "Reliable continuous recording",
    ],

    applications: [
      "Small retail stores",
      "Residential buildings",
      "Parking areas",
      "Basic CCTV installations",
    ],
  },

  {
    id: 7,
    categoryId: 6,
    subcategoryId: 7,
    name: "EZStation",
    slug: "ezstation",
    image: "https://picsum.photos/id/1025/900/700",
    description:
      "Video management software for centralized UNV device monitoring.",

    specifications: [
      {
        label: "Platform",
        value: "Desktop VMS",
      },
      {
        label: "Monitoring",
        value: "Live view",
      },
      {
        label: "Playback",
        value: "Recorded video",
      },
      {
        label: "Management",
        value: "Centralized devices",
      },
    ],

    features: [
      "Centralized camera management",
      "Multi-screen live viewing",
      "Recorded video playback",
      "Device configuration",
      "Alarm event monitoring",
      "User permission management",
    ],

    applications: [
      "Security control rooms",
      "Commercial surveillance systems",
      "Multi-site monitoring",
      "Enterprise CCTV management",
    ],
  },
{
  id: 8,
  categoryId: 1,
  subcategoryId: 1,
  name: "IPC2124LE",
  slug: "ipc2124le",
  image: "https://picsum.photos/id/1040/900/700",
  description:
    "Professional 4MP network bullet camera for indoor and outdoor surveillance applications.",

  specifications: [
    {
      label: "Resolution",
      value: "4MP",
    },
    {
      label: "Compression",
      value: "H.265",
    },
    {
      label: "Lens",
      value: "2.8mm",
    },
    {
      label: "Protection",
      value: "IP67",
    },
  ],

  features: [
    "4MP high-resolution imaging",
    "H.265 video compression",
    "Smart infrared illumination",
    "Human detection support",
    "PoE network connectivity",
    "Weather-resistant housing",
  ],

  applications: [
    "Commercial buildings",
    "Retail shops",
    "Residential properties",
    "Outdoor perimeter monitoring",
  ],
},

{
  id: 9,
  categoryId: 1,
  subcategoryId: 1,
  name: "IPC2124L",
  slug: "ipc2124l",
  image: "https://picsum.photos/id/1040/900/700",
  description:
    "Professional 4MP network bullet camera for indoor and outdoor surveillance applications.",

  specifications: [
    {
      label: "Resolution",
      value: "4MP",
    },
    {
      label: "Compression",
      value: "H.265",
    },
    {
      label: "Lens",
      value: "2.8mm",
    },
    {
      label: "Protection",
      value: "IP67",
    },
  ],

  features: [
    "4MP high-resolution imaging",
    "H.265 video compression",
    "Smart infrared illumination",
    "Human detection support",
    "PoE network connectivity",
    "Weather-resistant housing",
  ],

  applications: [
    "Commercial buildings",
    "Retail shops",
    "Residential properties",
    "Outdoor perimeter monitoring",
  ],
},

{
  id: 10,
  categoryId: 1,
  subcategoryId: 1,
  name: "IPC2124LEQ",
  slug: "ipc2124leo",
  image: "https://picsum.photos/id/1040/900/700",
  description:
    "Professional 4MP network bullet camera for indoor and outdoor surveillance applications.",

  specifications: [
    {
      label: "Resolution",
      value: "4MP",
    },
    {
      label: "Compression",
      value: "H.265",
    },
    {
      label: "Lens",
      value: "2.8mm",
    },
    {
      label: "Protection",
      value: "IP67",
    },
  ],

  features: [
    "4MP high-resolution imaging",
    "H.265 video compression",
    "Smart infrared illumination",
    "Human detection support",
    "PoE network connectivity",
    "Weather-resistant housing",
  ],

  applications: [
    "Commercial buildings",
    "Retail shops",
    "Residential properties",
    "Outdoor perimeter monitoring",
  ],
},
  
];