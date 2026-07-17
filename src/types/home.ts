export type HomeAction = {
  label: string;
  href: string;
};

export type HomeHeroSlide = {
  image: string;
  title: string;
  description: string;
};

export type HomeHeroPagination = {
  slideButtonAriaLabel: string;
  separator: string;
  numberPadding: number;
  paddingCharacter: string;
};

export type HomeHeroContent = {
  autoplayDelay: number;
  slides: HomeHeroSlide[];
  primaryAction: HomeAction;
  secondaryAction: HomeAction;
  pagination: HomeHeroPagination;
};

export type HomeStatIcon = "clock" | "tag" | "building" | "phone";

export type HomeStat = {
  value: string;
  label: string;
  description: string;
  icon: HomeStatIcon;
};

export type HomeStatsSectionContent = {
  heading: string;
  description: string;
  counterDuration: number;
  observerThreshold: number;
  animationDelayStep: number;
};

export type FeaturedCategoriesContent = {
  heading: string;
  description: string;
  actionLabel: string;
};

export type FeaturedProductsContent = {
  heading: string;
  description: string;
  actionLabel: string;
};

export type HomeIndustry = {
  name: string;
  image: string;
};

export type HomeIndustriesContent = {
  heading: string;
  description: string;
  items: HomeIndustry[];
  action: HomeAction;
};

export type WhyChooseUsSectionContent = {
  heading: string;
  description: string;
  animationDelayStep: number;
};

export type HomeImageContentCard = {
  title: string;
  description: string;
  image: string;
};

export type HomeCTAContent = {
  heading: string;
  description: string;
  image: string;
  imageLabel: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  primaryAction: HomeAction;
  secondaryAction: HomeAction;
};

export type HomeTrustItem = {
  title: string;
  description: string;
  icon: string;
};

export type HomeReason = {
  id: number;
  title: string;
  description: string;
  image: string;
};