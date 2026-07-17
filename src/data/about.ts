import type {
  AboutCoreValuesContent,
  AboutCTAContent,
  AboutHeroContent,
  AboutIntroductionContent,
  AboutVisionMissionContent,
  AboutWhyChooseContent,
} from "@/types/about";

export const aboutHero: AboutHeroContent = {
  title: "About UNV Oman.",
  description:
    "Explore professional Uniview video surveillance products, intelligent technologies and integrated security solutions for projects across Oman.",
  image: "https://picsum.photos/id/1035/1920/1080",
  imageAlt: "UNV Oman professional video surveillance solutions",
};

export const aboutIntroductionContent: AboutIntroductionContent = {
  eyebrow: "About UNV Oman",
  heading:
    "Professional video surveillance technology for clearer, smarter security.",
  paragraphs: [
    "UNV Oman provides a clear platform for exploring Uniview video surveillance products and technologies for commercial, institutional and industrial security requirements.",
    "The portfolio brings together network cameras, PTZ systems, video recorders, thermal products, storage technologies and video management platforms to support complete surveillance system planning.",
  ],
  image: "https://picsum.photos/id/1018/1400/1100",
  imageAlt: "Professional UNV video surveillance technology",
  imageLabel: "Intelligent Surveillance Technology",
  action: {
    label: "Explore Our Products",
    href: "/products",
  },
};

export const aboutVisionMissionContent: AboutVisionMissionContent = {
  eyebrow: "Our Direction",
  heading: "Advancing security through professional and reliable technology.",
  description:
    "Our direction reflects Uniview’s commitment to intelligent innovation, dependable products and security technologies that help create safer environments.",
  image: "https://picsum.photos/id/1040/1600/1200",
  imageAlt: "Integrated UNV surveillance system",
  imageLabel: "Reliable Security Technology",
  items: [
    {
      code: "01",
      label: "Our Vision",
      title: "Open new possibilities for intelligent visual security.",
      description:
        "Make advanced surveillance technologies easier to explore and apply across projects that require clear visibility, dependable operation and intelligent management.",
    },
    {
      code: "02",
      label: "Our Mission",
      title: "Support safer environments through professional reliability.",
      description:
        "Connect customers and project teams with suitable Uniview products, technologies and system options for effective video surveillance planning.",
    },
  ],
};

export const aboutCoreValuesContent: AboutCoreValuesContent = {
  eyebrow: "Core Values",
  heading: "Principles that guide every solution and interaction.",
  description:
    "Professional security technology depends on innovation, practical thinking, collaboration and a continuous commitment to improving customer value.",
  values: [
    {
      code: "01",
      title: "Innovation with Purpose",
      description:
        "Applying intelligent imaging, analytics and connected technologies to address practical surveillance challenges.",
      image: "https://picsum.photos/id/1015/1600/1200",
      imageAlt: "Innovative UNV video surveillance technology",
      imageLabel: "Purposeful Innovation",
    },
    {
      code: "02",
      title: "Professional Reliability",
      description:
        "Focusing on stable products and dependable technologies for security systems that may need to operate continuously.",
      image: "https://picsum.photos/id/1018/1600/1200",
      imageAlt: "Reliable professional surveillance system",
      imageLabel: "Professional Reliability",
    },
    {
      code: "03",
      title: "Practical Collaboration",
      description:
        "Supporting clearer communication between customers, installers and project teams when identifying suitable security technologies.",
      image: "https://picsum.photos/id/1035/1600/1200",
      imageAlt: "Collaborative surveillance project planning",
      imageLabel: "Practical Collaboration",
    },
    {
      code: "04",
      title: "Continuous Improvement",
      description:
        "Continuously refining products, technologies and user experiences to respond to evolving security requirements.",
      image: "https://picsum.photos/id/1040/1600/1200",
      imageAlt: "Advanced and evolving surveillance technology",
      imageLabel: "Continuous Improvement",
    },
  ],
};

export const aboutWhyChooseContent: AboutWhyChooseContent = {
  eyebrow: "Why Choose UNV",
  heading: "A connected portfolio for professional security projects.",
  description:
    "Explore video surveillance products and technologies designed to support projects with different coverage, recording, analytics and management requirements.",
  items: [
    {
      code: "01",
      title: "Complete Surveillance Portfolio",
      description:
        "Access network cameras, PTZ systems, recorders, thermal products, storage technologies and video management platforms.",
    },
    {
      code: "02",
      title: "Intelligent Video Technology",
      description:
        "Explore advanced imaging, smart detection and video analytics capabilities developed for clearer and more efficient monitoring.",
    },
    {
      code: "03",
      title: "Flexible System Options",
      description:
        "Identify suitable product series and configurations for individual sites, growing installations and larger security environments.",
    },
    {
      code: "04",
      title: "Clear Project Enquiry",
      description:
        "Share your coverage, recording and management requirements through a direct product and project enquiry process.",
    },
  ],
};

export const aboutCTAContent: AboutCTAContent = {
  eyebrow: "Start a Conversation",
  heading: "Planning a video surveillance project in Oman?",
  description:
    "Share your project requirements and explore suitable UNV cameras, recording systems and management technologies for your security environment.",
  image: "https://picsum.photos/id/1015/1920/1000",
  imageAlt: "UNV video surveillance project planning",
  primaryAction: {
    label: "Discuss Your Project",
    href: "/contact",
  },
  secondaryAction: {
    label: "Browse Products",
    href: "/products",
  },
};