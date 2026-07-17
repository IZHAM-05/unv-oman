export type SolutionIconName =
  | "graduation-cap"
  | "landmark"
  | "shopping-bag"
  | "hospital"
  | "building"
  | "store"
  | "banknote"
  | "hotel"
  | "warehouse";

export type CapabilityIconName =
  | "camera"
  | "scan-face"
  | "brain-circuit"
  | "car"
  | "monitor"
  | "thermometer"
  | "database"
  | "shield-check"
  | "users"
  | "network";

export type SolutionChallenge = {
  number: string;
  title: string;
  description: string;
};

export type SolutionArchitectureItem = {
  number: string;
  title: string;
  description: string;
  icon: CapabilityIconName;
};

export type SolutionZone = {
  name: string;
  description: string;
};

export type SolutionBenefit = {
  value: string;
  title: string;
  description: string;
};

export type SolutionAction = {
  label: string;
  href: string;
};

export type SolutionCTA = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: SolutionAction;
  secondaryAction: SolutionAction;
};

export type Solution = {
  id: number;
  name: string;
  shortName: string;
  slug: string;
  icon: SolutionIconName;
  featured: boolean;

  cardImage: string;
  heroImage: string;

  summary: string;
  directoryDescription: string;

  keyCapabilities: string[];

  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };

  overview: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };

  challenges: SolutionChallenge[];
  architecture: SolutionArchitectureItem[];
  zones: SolutionZone[];
  benefits: SolutionBenefit[];
  cta: SolutionCTA;
};

export type SolutionsPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    backgroundImage: string;
    systemLabel: string;
    systemValue: string;
    coverageLabel: string;
    coverageValue: string;
    primaryAction: SolutionAction;
    secondaryAction: SolutionAction;
  };

  intro: {
    eyebrow: string;
    title: string;
    description: string;
    statement: string;
    points: {
      number: string;
      title: string;
      description: string;
    }[];
  };

  featured: {
    eyebrow: string;
    title: string;
    description: string;
    actionLabel: string;
  };

  capabilities: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      icon: CapabilityIconName;
      title: string;
      description: string;
    }[];
  };

  directory: {
    eyebrow: string;
    title: string;
    description: string;
    actionLabel: string;
  };

  cta: SolutionCTA;
};