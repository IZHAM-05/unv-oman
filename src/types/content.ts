import type { ReactNode } from "react";

export type NavigationItem = {
  name: string;
  href: string;
};

export type HeroSlide = {
  image: string;
  title: string;
  description: string;
};

export type Statistic = {
  value: string;
  label: string;
  description: string;
  icon?: ReactNode;
};

export type ImageContentCard = {
  title: string;
  description: string;
  image: string;
};

export type PageHeroContent = {
  label?: string;
  title: string;
  description: string;
  image: string;
};

export type NumberedContentItem = {
  code: string;
  title: string;
  description: string;
  image?: string;
  action?: string;
  href?: string;
};

export type ContactInformationItem = {
  code: string;
  title: string;
  detail: string;
};

export type FooterLink = {
  name: string;
  href: string;
};

export type ContentAction = {
  label: string;
  href: string;
};


export type HeroPaginationContent = {
  slideButtonAriaLabel: string;
  separator: string;
  numberPadding: number;
  paddingCharacter: string;
};

export type HomeHeroContent = {
  autoplayDelay: number;
  slides: HeroSlide[];
  primaryAction: ContentAction;
  secondaryAction: ContentAction;
  pagination: HeroPaginationContent;
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
  primaryAction: ContentAction;
  secondaryAction: ContentAction;
};

export type HomeStat = {
  value: string;
  label: string;
  description: string;
  icon: string;
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