import type {
  Solution,
  SolutionsPageContent,
} from "@/types/solution";

export const solutionsPageContent: SolutionsPageContent = {
  hero: {
    eyebrow: "UNV Industry Solutions",
    title:
      "Security architecture designed around real operational environments.",
    description:
      "Explore UNV technologies for professional surveillance, intelligent analytics, access management, vehicle control and centralised monitoring.",
    backgroundImage:
      "https://picsum.photos/id/1018/1920/1080",

    systemLabel: "Solution Model",
    systemValue: "Integrated Security",

    coverageLabel: "Deployment Scope",
    coverageValue: "Single Site to Enterprise",

    primaryAction: {
      label: "Explore Industries",
      href: "#featured-solutions",
    },

    secondaryAction: {
      label: "Discuss a Project",
      href: "/contact",
    },
  },

  intro: {
    eyebrow: "Solution Engineering",
    title:
      "A security system should reflect how the site actually operates.",
    description:
      "Different industries face different risks, workflows and compliance requirements. UNV solutions are structured around the people, vehicles, assets and critical zones that must be protected.",
    statement:
      "The objective is not simply to install cameras. It is to build a coordinated security architecture that improves visibility, response and operational control.",

    points: [
      {
        number: "01",
        title: "Understand",
        description:
          "Assess operational risks, access points, movement patterns and critical areas.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "Select suitable surveillance, analytics, storage and control technologies.",
      },
      {
        number: "03",
        title: "Integrate",
        description:
          "Connect devices and management systems into one coordinated platform.",
      },
    ],
  },

  featured: {
    eyebrow: "Priority Environments",
    title:
      "Featured solutions for complex security operations.",
    description:
      "Explore solution frameworks developed for environments where continuous visibility, controlled access and rapid incident response are essential.",
    actionLabel: "Explore Solution",
  },

  capabilities: {
    eyebrow: "Technology Framework",
    title:
      "Core capabilities used across UNV security solutions.",
    description:
      "Each industry solution combines the technologies required for its environment rather than applying one standard configuration everywhere.",

    items: [
      {
        icon: "camera",
        title: "Video Surveillance",
        description:
          "High-definition monitoring across indoor, outdoor and low-light environments.",
      },
      {
        icon: "scan-face",
        title: "Access Management",
        description:
          "Controlled personnel entry with searchable access records.",
      },
      {
        icon: "brain-circuit",
        title: "AI Analytics",
        description:
          "Intelligent detection that supports faster and more accurate responses.",
      },
      {
        icon: "car",
        title: "Vehicle Management",
        description:
          "ANPR-based vehicle recognition, entry control and movement records.",
      },
      {
        icon: "monitor",
        title: "Unified Management",
        description:
          "Centralised monitoring, alarm handling and device administration.",
      },
      {
        icon: "thermometer",
        title: "Thermal Detection",
        description:
          "Heat-based monitoring for perimeter, equipment and fire-risk applications.",
      },
      {
        icon: "database",
        title: "Secure Storage",
        description:
          "Reliable recording architecture with efficient search and retrieval.",
      },
      {
        icon: "network",
        title: "Scalable Integration",
        description:
          "Flexible infrastructure suitable for single sites and multi-location networks.",
      },
    ],
  },

  directory: {
    eyebrow: "Industry Directory",
    title:
      "Security solutions across essential sectors.",
    description:
      "Select an industry to review its operational risks, recommended architecture, monitored zones and expected security outcomes.",
    actionLabel: "View Details",
  },

  cta: {
    eyebrow: "Solution Consultation",
    title:
      "Plan an integrated security solution for your organisation.",
    description:
      "Share your site requirements with UNV Oman and explore a scalable architecture aligned with your operational priorities.",
    primaryAction: {
      label: "Request Consultation",
      href: "/contact",
    },
    secondaryAction: {
      label: "Browse Products",
      href: "/products",
    },
  },
};

export const solutions: Solution[] = [
  {
    id: 1,
    name: "Education Solutions",
    shortName: "Education",
    slug: "school-solutions",
    icon: "graduation-cap",
    featured: true,

    cardImage:
      "https://picsum.photos/id/1011/1400/1000",

    heroImage:
      "https://picsum.photos/id/1011/1920/1080",

    summary:
      "Integrated protection for campuses, entrances, classrooms, public areas and vehicle access points.",

    directoryDescription:
      "Safer learning environments supported by surveillance, access management and intelligent event detection.",

    keyCapabilities: [
      "Campus-wide monitoring",
      "Attendance and access integration",
      "Vehicle entry management",
    ],

    hero: {
      eyebrow: "Education Security",
      title:
        "A coordinated security environment for students, staff and visitors.",
      description:
        "Combine campus surveillance, controlled access, vehicle recognition and intelligent monitoring within one scalable education-security architecture.",
    },

    overview: {
      eyebrow: "Operational Context",
      title:
        "Education security must protect people without disrupting learning.",
      paragraphs: [
        "Schools and educational campuses include classrooms, corridors, entrances, outdoor spaces, parking areas and restricted facilities.",
        "A coordinated UNV solution provides administrators with dependable visibility while helping security teams respond quickly to incidents and access events.",
      ],
    },

    challenges: [
      {
        number: "01",
        title: "Large Campus Coverage",
        description:
          "Maintaining consistent visibility across indoor, outdoor and shared campus environments.",
      },
      {
        number: "02",
        title: "Student and Visitor Safety",
        description:
          "Managing daily movement while identifying unusual or unauthorised activity.",
      },
      {
        number: "03",
        title: "Busy Entry Periods",
        description:
          "Controlling personnel and vehicle movement during arrival and departure times.",
      },
    ],

    architecture: [
      {
        number: "01",
        title: "Campus Surveillance",
        description:
          "High-definition cameras monitor entrances, corridors, classrooms and outdoor areas.",
        icon: "camera",
      },
      {
        number: "02",
        title: "Access Control",
        description:
          "Authorised personnel access is managed through controlled entry points.",
        icon: "scan-face",
      },
      {
        number: "03",
        title: "Intelligent Detection",
        description:
          "Analytics support restricted-area monitoring and abnormal-event awareness.",
        icon: "brain-circuit",
      },
      {
        number: "04",
        title: "Vehicle Recognition",
        description:
          "ANPR supports controlled access for staff, visitors and authorised vehicles.",
        icon: "car",
      },
    ],

    zones: [
      {
        name: "Main Entrances",
        description:
          "Monitor students, staff, visitors and entry events.",
      },
      {
        name: "Corridors and Shared Areas",
        description:
          "Maintain visibility across high-traffic internal spaces.",
      },
      {
        name: "Outdoor Campus Areas",
        description:
          "Cover playgrounds, boundaries and open environments.",
      },
      {
        name: "Parking and Drop-Off Zones",
        description:
          "Manage vehicle movement during peak periods.",
      },
    ],

    benefits: [
      {
        value: "01",
        title: "Improved Visibility",
        description:
          "Clear oversight across essential campus environments.",
      },
      {
        value: "02",
        title: "Faster Response",
        description:
          "Security teams can assess events using live and recorded video.",
      },
      {
        value: "03",
        title: "Controlled Entry",
        description:
          "Reduce unauthorised movement into protected areas.",
      },
      {
        value: "04",
        title: "Scalable Management",
        description:
          "Expand from one building to a complete campus.",
      },
    ],

    cta: {
      eyebrow: "Education Project Planning",
      title:
        "Build a safer and more manageable campus environment.",
      description:
        "Discuss your campus layout, entrances and operational requirements with UNV Oman.",
      primaryAction: {
        label: "Discuss Your Campus",
        href: "/contact",
      },
      secondaryAction: {
        label: "Explore Products",
        href: "/products",
      },
    },
  },

  {
    id: 2,
    name: "Stadium Solutions",
    shortName: "Stadiums",
    slug: "stadium-solutions",
    icon: "landmark",
    featured: false,

    cardImage:
      "https://picsum.photos/id/1058/1400/1000",

    heroImage:
      "https://picsum.photos/id/1058/1920/1080",

    summary:
      "Wide-area surveillance, crowd visibility, perimeter detection and controlled venue access.",

    directoryDescription:
      "Integrated monitoring for stadium boundaries, entrances, spectator areas and parking facilities.",

    keyCapabilities: [
      "Wide-area monitoring",
      "Perimeter protection",
      "Crowd and vehicle management",
    ],

    hero: {
      eyebrow: "Stadium Security",
      title:
        "Large-scale visibility for high-capacity public venues.",
      description:
        "Coordinate perimeter monitoring, visitor movement, access control and parking security across complex stadium environments.",
    },

    overview: {
      eyebrow: "Operational Context",
      title:
        "Major venues require security across large spaces and dense crowds.",
      paragraphs: [
        "Stadiums contain multiple entrances, spectator areas, operational zones, parking facilities and extensive boundaries.",
        "UNV solutions support centralised situational awareness and coordinated response across the complete venue.",
      ],
    },

    challenges: [
      {
        number: "01",
        title: "Large Operational Area",
        description:
          "Covering wide spaces without creating critical blind zones.",
      },
      {
        number: "02",
        title: "Crowd Movement",
        description:
          "Maintaining visibility during high-attendance events.",
      },
      {
        number: "03",
        title: "Perimeter Intrusion",
        description:
          "Identifying unauthorised access around venue boundaries.",
      },
    ],

    architecture: [
      {
        number: "01",
        title: "Panoramic Monitoring",
        description:
          "Multi-directional cameras provide broad venue visibility.",
        icon: "camera",
      },
      {
        number: "02",
        title: "Perimeter Analytics",
        description:
          "Intelligent detection supports accurate intrusion awareness.",
        icon: "brain-circuit",
      },
      {
        number: "03",
        title: "Access Verification",
        description:
          "Controlled entrances support authorised staff and visitor movement.",
        icon: "scan-face",
      },
      {
        number: "04",
        title: "Parking Management",
        description:
          "ANPR improves vehicle access and parking oversight.",
        icon: "car",
      },
    ],

    zones: [
      {
        name: "Venue Perimeter",
        description:
          "Detect suspicious activity around external boundaries.",
      },
      {
        name: "Spectator Areas",
        description:
          "Maintain broad visibility across high-capacity seating zones.",
      },
      {
        name: "Entrances and Gates",
        description:
          "Monitor visitor and staff access during events.",
      },
      {
        name: "Parking Facilities",
        description:
          "Manage authorised vehicle entry and movement.",
      },
    ],

    benefits: [
      {
        value: "01",
        title: "Wide Visibility",
        description:
          "Monitor large areas through coordinated camera coverage.",
      },
      {
        value: "02",
        title: "Better Crowd Awareness",
        description:
          "Support safer management of high-density public environments.",
      },
      {
        value: "03",
        title: "Stronger Perimeter Control",
        description:
          "Improve detection around protected boundaries.",
      },
      {
        value: "04",
        title: "Central Operations",
        description:
          "Manage venue security from a unified control environment.",
      },
    ],

    cta: {
      eyebrow: "Venue Security Planning",
      title:
        "Create a coordinated protection strategy for your venue.",
      description:
        "Discuss perimeter, access, crowd and parking requirements with UNV Oman.",
      primaryAction: {
        label: "Discuss Your Venue",
        href: "/contact",
      },
      secondaryAction: {
        label: "Explore Products",
        href: "/products",
      },
    },
  },

  {
    id: 3,
    name: "Shopping Mall Solutions",
    shortName: "Shopping Malls",
    slug: "shopping-mall-solutions",
    icon: "shopping-bag",
    featured: true,

    cardImage:
      "https://picsum.photos/id/1031/1400/1000",

    heroImage:
      "https://picsum.photos/id/1031/1920/1080",

    summary:
      "Security and operational intelligence across retail floors, entrances, service areas and parking facilities.",

    directoryDescription:
      "Property-wide monitoring with customer-flow awareness and centralised security management.",

    keyCapabilities: [
      "Retail-floor surveillance",
      "Customer-flow analytics",
      "Parking and entrance monitoring",
    ],

    hero: {
      eyebrow: "Shopping Mall Security",
      title:
        "Property-wide security with clearer operational intelligence.",
      description:
        "Protect shoppers, retailers, staff and assets while improving visibility across public, service and parking areas.",
    },

    overview: {
      eyebrow: "Operational Context",
      title:
        "Shopping malls combine public activity with complex property operations.",
      paragraphs: [
        "Retail floors, restaurants, entertainment areas, storage locations and parking facilities create different monitoring requirements.",
        "UNV solutions provide centralised visibility and intelligent analytics across the entire commercial property.",
      ],
    },

    challenges: [
      {
        number: "01",
        title: "High Visitor Traffic",
        description:
          "Maintaining awareness across busy public environments.",
      },
      {
        number: "02",
        title: "Theft and Asset Risk",
        description:
          "Protecting retailers, shoppers and operational assets.",
      },
      {
        number: "03",
        title: "Complex Property Layout",
        description:
          "Coordinating security across public, service and parking areas.",
      },
    ],

    architecture: [
      {
        number: "01",
        title: "Property Surveillance",
        description:
          "Monitor entrances, retail floors, service areas and parking zones.",
        icon: "camera",
      },
      {
        number: "02",
        title: "Customer Analytics",
        description:
          "Traffic analysis supports staffing and operational planning.",
        icon: "users",
      },
      {
        number: "03",
        title: "Central Monitoring",
        description:
          "Coordinate security events through one management platform.",
        icon: "monitor",
      },
      {
        number: "04",
        title: "Vehicle Access",
        description:
          "Support parking oversight and recognised vehicle entry.",
        icon: "car",
      },
    ],

    zones: [
      {
        name: "Public Entrances",
        description:
          "Monitor visitor movement into and out of the property.",
      },
      {
        name: "Retail Floors",
        description:
          "Maintain visibility across stores and circulation areas.",
      },
      {
        name: "Service and Storage Areas",
        description:
          "Protect operational environments and property assets.",
      },
      {
        name: "Parking Facilities",
        description:
          "Monitor vehicles, access lanes and pedestrian movement.",
      },
    ],

    benefits: [
      {
        value: "01",
        title: "Safer Public Areas",
        description:
          "Improve protection across visitor environments.",
      },
      {
        value: "02",
        title: "Operational Insight",
        description:
          "Use traffic data to support management decisions.",
      },
      {
        value: "03",
        title: "Central Coordination",
        description:
          "Manage multiple property zones from one platform.",
      },
      {
        value: "04",
        title: "Better Incident Review",
        description:
          "Access useful recorded evidence more efficiently.",
      },
    ],

    cta: {
      eyebrow: "Commercial Property Planning",
      title:
        "Plan integrated protection for your shopping environment.",
      description:
        "Discuss retail, public-area, service-zone and parking requirements with UNV Oman.",
      primaryAction: {
        label: "Discuss Your Property",
        href: "/contact",
      },
      secondaryAction: {
        label: "Explore Products",
        href: "/products",
      },
    },
  },

  {
    id: 4,
    name: "Healthcare Solutions",
    shortName: "Healthcare",
    slug: "hospital-solutions",
    icon: "hospital",
    featured: true,

    cardImage:
      "https://picsum.photos/id/1029/1400/1000",

    heroImage:
      "https://picsum.photos/id/1029/1920/1080",

    summary:
      "Continuous monitoring and controlled access for sensitive healthcare environments.",

    directoryDescription:
      "Reliable surveillance and access management for hospitals, clinics and medical facilities.",

    keyCapabilities: [
      "Patient-area monitoring",
      "Restricted-area access",
      "Central incident review",
    ],

    hero: {
      eyebrow: "Healthcare Security",
      title:
        "Dependable protection for continuously operating care environments.",
      description:
        "Support patient safety, staff protection and controlled facility operations through integrated surveillance and access management.",
    },

    overview: {
      eyebrow: "Operational Context",
      title:
        "Healthcare security must support safety without interfering with care.",
      paragraphs: [
        "Hospitals and clinics include public areas, treatment zones, laboratories, medicine storage and staff-only environments.",
        "UNV solutions provide continuous monitoring and controlled access across sensitive healthcare facilities.",
      ],
    },

    challenges: [
      {
        number: "01",
        title: "Continuous Operation",
        description:
          "Maintaining dependable security throughout day and night.",
      },
      {
        number: "02",
        title: "Sensitive Departments",
        description:
          "Controlling access to restricted medical and operational areas.",
      },
      {
        number: "03",
        title: "Patient and Staff Safety",
        description:
          "Supporting rapid incident assessment in active care environments.",
      },
    ],

    architecture: [
      {
        number: "01",
        title: "Facility Surveillance",
        description:
          "Monitor entrances, corridors, waiting areas and parking zones.",
        icon: "camera",
      },
      {
        number: "02",
        title: "Restricted Access",
        description:
          "Control movement into protected departments and storage areas.",
        icon: "scan-face",
      },
      {
        number: "03",
        title: "Incident Management",
        description:
          "Central video access supports faster assessment and review.",
        icon: "monitor",
      },
      {
        number: "04",
        title: "Secure Recording",
        description:
          "Maintain dependable footage for operational investigation.",
        icon: "database",
      },
    ],

    zones: [
      {
        name: "Entrances and Reception",
        description:
          "Monitor public movement and visitor arrival.",
      },
      {
        name: "Corridors and Waiting Areas",
        description:
          "Maintain visibility across shared patient environments.",
      },
      {
        name: "Restricted Departments",
        description:
          "Control authorised access to sensitive areas.",
      },
      {
        name: "Parking and External Areas",
        description:
          "Extend protection beyond the main facility.",
      },
    ],

    benefits: [
      {
        value: "01",
        title: "Continuous Protection",
        description:
          "Maintain security across a continuously operating environment.",
      },
      {
        value: "02",
        title: "Controlled Movement",
        description:
          "Reduce unauthorised entry into protected departments.",
      },
      {
        value: "03",
        title: "Faster Assessment",
        description:
          "Review live and recorded footage during incidents.",
      },
      {
        value: "04",
        title: "Central Visibility",
        description:
          "Coordinate facility monitoring from one location.",
      },
    ],

    cta: {
      eyebrow: "Healthcare Security Planning",
      title:
        "Strengthen security across your healthcare facility.",
      description:
        "Share your facility layout and access requirements with UNV Oman.",
      primaryAction: {
        label: "Request Consultation",
        href: "/contact",
      },
      secondaryAction: {
        label: "Explore Products",
        href: "/products",
      },
    },
  },

  {
    id: 5,
    name: "Smart Building Solutions",
    shortName: "Buildings",
    slug: "building-solutions",
    icon: "building",
    featured: false,

    cardImage:
      "https://picsum.photos/id/1016/1400/1000",

    heroImage:
      "https://picsum.photos/id/1016/1920/1080",

    summary:
      "Unified surveillance and access management for commercial, residential and mixed-use properties.",

    directoryDescription:
      "Connected protection for entrances, shared areas, parking facilities and building boundaries.",

    keyCapabilities: [
      "Entrance management",
      "Common-area monitoring",
      "Central property control",
    ],

    hero: {
      eyebrow: "Building Security",
      title:
        "Connected protection across the complete property.",
      description:
        "Coordinate surveillance, access control and vehicle management across modern commercial and residential buildings.",
    },

    overview: {
      eyebrow: "Operational Context",
      title:
        "Modern properties require security across public and restricted zones.",
      paragraphs: [
        "Buildings contain entrances, lobbies, corridors, service areas, parking facilities and external boundaries.",
        "UNV solutions connect these environments through one scalable security-management architecture.",
      ],
    },

    challenges: [
      {
        number: "01",
        title: "Multiple Access Points",
        description:
          "Managing residents, staff, contractors and visitors.",
      },
      {
        number: "02",
        title: "Shared Environments",
        description:
          "Maintaining visibility across public building spaces.",
      },
      {
        number: "03",
        title: "Parking Security",
        description:
          "Monitoring vehicles, access lanes and pedestrian areas.",
      },
    ],

    architecture: [
      {
        number: "01",
        title: "Building Surveillance",
        description:
          "Cover entrances, lobbies, corridors and parking facilities.",
        icon: "camera",
      },
      {
        number: "02",
        title: "Access Management",
        description:
          "Control authorised personnel and visitor movement.",
        icon: "scan-face",
      },
      {
        number: "03",
        title: "Vehicle Recognition",
        description:
          "Manage recognised vehicles at controlled entrances.",
        icon: "car",
      },
      {
        number: "04",
        title: "Central Platform",
        description:
          "Coordinate alarms, devices and recorded video.",
        icon: "monitor",
      },
    ],

    zones: [
      {
        name: "Main Entrances",
        description:
          "Monitor personnel and visitor access.",
      },
      {
        name: "Lobbies and Corridors",
        description:
          "Maintain visibility across common areas.",
      },
      {
        name: "Service Areas",
        description:
          "Protect operational and staff-only environments.",
      },
      {
        name: "Parking Facilities",
        description:
          "Monitor vehicles and pedestrian movement.",
      },
    ],

    benefits: [
      {
        value: "01",
        title: "Unified Management",
        description:
          "Coordinate building security through one platform.",
      },
      {
        value: "02",
        title: "Controlled Access",
        description:
          "Manage authorised movement more effectively.",
      },
      {
        value: "03",
        title: "Property-Wide Coverage",
        description:
          "Extend monitoring across indoor and outdoor areas.",
      },
      {
        value: "04",
        title: "Scalable Expansion",
        description:
          "Add devices as the property grows.",
      },
    ],

    cta: {
      eyebrow: "Building Security Planning",
      title:
        "Create a scalable security foundation for your property.",
      description:
        "Discuss entrances, common areas and parking requirements with UNV Oman.",
      primaryAction: {
        label: "Discuss Your Building",
        href: "/contact",
      },
      secondaryAction: {
        label: "Explore Products",
        href: "/products",
      },
    },
  },

  {
    id: 6,
    name: "Retail Solutions",
    shortName: "Retail",
    slug: "retail-solutions",
    icon: "store",
    featured: false,

    cardImage:
      "https://picsum.photos/id/1059/1400/1000",

    heroImage:
      "https://picsum.photos/id/1059/1920/1080",

    summary:
      "Store protection, transaction verification and customer-flow intelligence.",

    directoryDescription:
      "Integrated security and operational awareness for individual stores and retail networks.",

    keyCapabilities: [
      "Loss prevention",
      "POS video verification",
      "Customer traffic analytics",
    ],

    hero: {
      eyebrow: "Retail Security",
      title:
        "Protect operations while improving store intelligence.",
      description:
        "Combine surveillance, transaction verification and customer-flow analytics across one store or multiple retail locations.",
    },

    overview: {
      eyebrow: "Operational Context",
      title:
        "Retail security must protect assets while preserving customer experience.",
      paragraphs: [
        "Stores face theft, transaction disputes, stock-room risks and changing customer traffic.",
        "UNV solutions combine intelligent monitoring and operational analytics in one scalable system.",
      ],
    },

    challenges: [
      {
        number: "01",
        title: "Loss Prevention",
        description:
          "Reducing theft and protecting retail assets.",
      },
      {
        number: "02",
        title: "Transaction Disputes",
        description:
          "Connecting payment activity with corresponding video.",
      },
      {
        number: "03",
        title: "Operational Planning",
        description:
          "Understanding customer movement and busy periods.",
      },
    ],

    architecture: [
      {
        number: "01",
        title: "Store Surveillance",
        description:
          "Monitor entrances, sales floors and stock rooms.",
        icon: "camera",
      },
      {
        number: "02",
        title: "Intelligent Detection",
        description:
          "Identify suspicious activity and after-hours intrusion.",
        icon: "brain-circuit",
      },
      {
        number: "03",
        title: "POS Integration",
        description:
          "Connect transaction information with recorded footage.",
        icon: "monitor",
      },
      {
        number: "04",
        title: "Traffic Analytics",
        description:
          "Measure customer volumes and movement patterns.",
        icon: "users",
      },
    ],

    zones: [
      {
        name: "Store Entrances",
        description:
          "Measure visitor flow and monitor arrival activity.",
      },
      {
        name: "Sales Floors",
        description:
          "Protect merchandise and customer areas.",
      },
      {
        name: "Checkout Areas",
        description:
          "Support transaction investigation and staff protection.",
      },
      {
        name: "Stock Rooms",
        description:
          "Monitor inventory and authorised access.",
      },
    ],

    benefits: [
      {
        value: "01",
        title: "Reduced Loss Risk",
        description:
          "Strengthen monitoring around retail assets.",
      },
      {
        value: "02",
        title: "Transaction Evidence",
        description:
          "Review payment information with corresponding video.",
      },
      {
        value: "03",
        title: "Customer Insight",
        description:
          "Understand traffic volumes and movement.",
      },
      {
        value: "04",
        title: "Multi-Site Visibility",
        description:
          "Coordinate multiple stores centrally.",
      },
    ],

    cta: {
      eyebrow: "Retail Security Planning",
      title:
        "Protect stores and improve operational visibility.",
      description:
        "Discuss single-store or multi-branch requirements with UNV Oman.",
      primaryAction: {
        label: "Discuss Your Retail Project",
        href: "/contact",
      },
      secondaryAction: {
        label: "Explore Products",
        href: "/products",
      },
    },
  },

  {
    id: 7,
    name: "Banking Solutions",
    shortName: "Banking",
    slug: "banking-solutions",
    icon: "banknote",
    featured: false,

    cardImage:
      "https://picsum.photos/id/1078/1400/1000",

    heroImage:
      "https://picsum.photos/id/1078/1920/1080",

    summary:
      "Reliable surveillance, secure video storage and centralised branch management.",

    directoryDescription:
      "High-reliability protection for banking halls, ATMs, vaults and branch networks.",

    keyCapabilities: [
      "Critical-area surveillance",
      "Secure recording",
      "Multi-branch management",
    ],

    hero: {
      eyebrow: "Banking Security",
      title:
        "High-reliability protection for financial environments.",
      description:
        "Protect customers, employees, assets and critical banking areas through coordinated surveillance and secure management.",
    },

    overview: {
      eyebrow: "Operational Context",
      title:
        "Financial institutions require dependable evidence and central control.",
      paragraphs: [
        "Banks contain customer areas, ATMs, cash-handling zones, vaults and restricted operational spaces.",
        "UNV solutions provide reliable monitoring and recording across individual branches or wider financial networks.",
      ],
    },

    challenges: [
      {
        number: "01",
        title: "Critical Asset Protection",
        description:
          "Monitoring cash-handling areas, ATMs and vault environments.",
      },
      {
        number: "02",
        title: "Reliable Evidence",
        description:
          "Maintaining clear and retrievable security recordings.",
      },
      {
        number: "03",
        title: "Branch Coordination",
        description:
          "Managing security across multiple locations.",
      },
    ],

    architecture: [
      {
        number: "01",
        title: "Critical-Area Monitoring",
        description:
          "Maintain clear surveillance around banking operations.",
        icon: "camera",
      },
      {
        number: "02",
        title: "Secure Access",
        description:
          "Control movement into restricted financial areas.",
        icon: "scan-face",
      },
      {
        number: "03",
        title: "Reliable Storage",
        description:
          "Protect video evidence through professional recording architecture.",
        icon: "database",
      },
      {
        number: "04",
        title: "Central Management",
        description:
          "Coordinate branches through one enterprise platform.",
        icon: "monitor",
      },
    ],

    zones: [
      {
        name: "Customer Areas",
        description:
          "Monitor banking halls and service counters.",
      },
      {
        name: "ATM Locations",
        description:
          "Maintain visibility around self-service banking environments.",
      },
      {
        name: "Cash-Handling Areas",
        description:
          "Protect critical financial operations.",
      },
      {
        name: "Restricted Rooms",
        description:
          "Control access to vault and staff-only environments.",
      },
    ],

    benefits: [
      {
        value: "01",
        title: "Reliable Evidence",
        description:
          "Maintain useful footage for investigation.",
      },
      {
        value: "02",
        title: "Branch Visibility",
        description:
          "Coordinate multiple banking locations centrally.",
      },
      {
        value: "03",
        title: "Controlled Access",
        description:
          "Protect restricted financial environments.",
      },
      {
        value: "04",
        title: "Secure Storage",
        description:
          "Maintain dependable long-term video archives.",
      },
    ],

    cta: {
      eyebrow: "Banking Security Planning",
      title:
        "Plan dependable protection across your financial network.",
      description:
        "Discuss branch, ATM, access and storage requirements with UNV Oman.",
      primaryAction: {
        label: "Request Consultation",
        href: "/contact",
      },
      secondaryAction: {
        label: "Explore Products",
        href: "/products",
      },
    },
  },

  {
    id: 8,
    name: "Hospitality Solutions",
    shortName: "Hospitality",
    slug: "hotel-solutions",
    icon: "hotel",
    featured: false,

    cardImage:
      "https://picsum.photos/id/1043/1400/1000",

    heroImage:
      "https://picsum.photos/id/1043/1920/1080",

    summary:
      "Discreet protection for guest environments, service areas and property access points.",

    directoryDescription:
      "Professional surveillance and access management for hotels, resorts and guest-focused properties.",

    keyCapabilities: [
      "Guest-area protection",
      "Staff access management",
      "Parking and service monitoring",
    ],

    hero: {
      eyebrow: "Hospitality Security",
      title:
        "Dependable protection without disrupting guest experience.",
      description:
        "Maintain professional security across guest, operational and restricted property environments.",
    },

    overview: {
      eyebrow: "Operational Context",
      title:
        "Hospitality security must remain effective and unobtrusive.",
      paragraphs: [
        "Hotels and resorts include public spaces, accommodation areas, service corridors, loading zones and parking facilities.",
        "UNV solutions provide coordinated protection while supporting a comfortable guest environment.",
      ],
    },

    challenges: [
      {
        number: "01",
        title: "Guest Safety",
        description:
          "Protecting public areas without creating an intrusive atmosphere.",
      },
      {
        number: "02",
        title: "Operational Access",
        description:
          "Managing staff and contractor movement.",
      },
      {
        number: "03",
        title: "Property Coverage",
        description:
          "Monitoring guest, service and parking environments.",
      },
    ],

    architecture: [
      {
        number: "01",
        title: "Guest-Area Monitoring",
        description:
          "Discreet surveillance across lobbies and shared spaces.",
        icon: "camera",
      },
      {
        number: "02",
        title: "Staff Access",
        description:
          "Control entry into operational and restricted areas.",
        icon: "scan-face",
      },
      {
        number: "03",
        title: "Property Management",
        description:
          "Coordinate monitoring and alarms through one platform.",
        icon: "monitor",
      },
      {
        number: "04",
        title: "Parking Oversight",
        description:
          "Monitor vehicle access and movement around the property.",
        icon: "car",
      },
    ],

    zones: [
      {
        name: "Entrances and Lobbies",
        description:
          "Monitor guest and visitor movement.",
      },
      {
        name: "Shared Guest Areas",
        description:
          "Maintain discreet security across public environments.",
      },
      {
        name: "Service Areas",
        description:
          "Protect operational assets and staff-only zones.",
      },
      {
        name: "Parking and Drop-Off",
        description:
          "Monitor vehicles and arrival activity.",
      },
    ],

    benefits: [
      {
        value: "01",
        title: "Guest Protection",
        description:
          "Improve safety across public property areas.",
      },
      {
        value: "02",
        title: "Discreet Monitoring",
        description:
          "Maintain security without affecting interior quality.",
      },
      {
        value: "03",
        title: "Operational Control",
        description:
          "Manage access to service and staff environments.",
      },
      {
        value: "04",
        title: "Central Visibility",
        description:
          "Coordinate property security from one location.",
      },
    ],

    cta: {
      eyebrow: "Hospitality Security Planning",
      title:
        "Strengthen property security while preserving guest comfort.",
      description:
        "Discuss hotel, resort or hospitality requirements with UNV Oman.",
      primaryAction: {
        label: "Discuss Your Property",
        href: "/contact",
      },
      secondaryAction: {
        label: "Explore Products",
        href: "/products",
      },
    },
  },

  {
    id: 9,
    name: "Warehouse and Logistics Solutions",
    shortName: "Warehouse & Logistics",
    slug: "warehouse-solutions",
    icon: "warehouse",
    featured: true,

    cardImage:
      "https://picsum.photos/id/1081/1400/1000",

    heroImage:
      "https://picsum.photos/id/1081/1920/1080",

    summary:
      "End-to-end protection for personnel, vehicles, cargo and facility boundaries.",

    directoryDescription:
      "Integrated surveillance, thermal detection and access management for logistics operations.",

    keyCapabilities: [
      "Perimeter protection",
      "Personnel and vehicle access",
      "Cargo and fire-risk monitoring",
    ],

    hero: {
      eyebrow: "Logistics Security",
      title:
        "End-to-end protection across complex logistics operations.",
      description:
        "Protect personnel, vehicles, cargo and workflows through integrated surveillance, access management and thermal detection.",
    },

    overview: {
      eyebrow: "Operational Context",
      title:
        "Logistics security must protect every stage of facility movement.",
      paragraphs: [
        "Warehouses and distribution centres depend on secure boundaries, controlled access, safe working conditions and reliable cargo monitoring.",
        "UNV solutions coordinate perimeter, vehicle, personnel and storage-area security.",
      ],
    },

    challenges: [
      {
        number: "01",
        title: "Large Perimeters",
        description:
          "Protecting extensive facility boundaries and external areas.",
      },
      {
        number: "02",
        title: "Vehicle Movement",
        description:
          "Managing high volumes of logistics traffic.",
      },
      {
        number: "03",
        title: "Cargo and Fire Risk",
        description:
          "Protecting goods and identifying abnormal heat conditions.",
      },
    ],

    architecture: [
      {
        number: "01",
        title: "Perimeter Detection",
        description:
          "Intelligent monitoring protects external boundaries.",
        icon: "brain-circuit",
      },
      {
        number: "02",
        title: "Vehicle Management",
        description:
          "ANPR coordinates authorised logistics vehicles.",
        icon: "car",
      },
      {
        number: "03",
        title: "Cargo Surveillance",
        description:
          "Wide-area cameras monitor storage and loading operations.",
        icon: "camera",
      },
      {
        number: "04",
        title: "Thermal Monitoring",
        description:
          "Detect abnormal temperature conditions and potential fire risks.",
        icon: "thermometer",
      },
    ],

    zones: [
      {
        name: "Facility Perimeter",
        description:
          "Detect unauthorised movement around boundaries.",
      },
      {
        name: "Vehicle Entrances",
        description:
          "Manage recognised logistics vehicles.",
      },
      {
        name: "Loading Areas",
        description:
          "Monitor cargo movement and operational activity.",
      },
      {
        name: "Storage Environments",
        description:
          "Protect goods and detect abnormal heat conditions.",
      },
    ],

    benefits: [
      {
        value: "01",
        title: "Stronger Perimeter Control",
        description:
          "Improve detection around facility boundaries.",
      },
      {
        value: "02",
        title: "Vehicle Accountability",
        description:
          "Maintain recognised vehicle movement records.",
      },
      {
        value: "03",
        title: "Cargo Visibility",
        description:
          "Monitor storage and loading activity.",
      },
      {
        value: "04",
        title: "Early Risk Detection",
        description:
          "Identify abnormal temperature conditions sooner.",
      },
    ],

    cta: {
      eyebrow: "Logistics Security Planning",
      title:
        "Protect your facility, people and cargo operations.",
      description:
        "Discuss warehouse, distribution-centre and logistics requirements with UNV Oman.",
      primaryAction: {
        label: "Discuss Your Facility",
        href: "/contact",
      },
      secondaryAction: {
        label: "Explore Products",
        href: "/products",
      },
    },
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find(
    (solution) => solution.slug === slug,
  );
}