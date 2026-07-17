export type AboutAction = {
  label: string;
  href: string;
};

export type AboutHeroContent = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type AboutIntroductionContent = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imageLabel: string;
  action: AboutAction;
};

export type AboutVisionMissionItem = {
  code: string;
  label: string;
  title: string;
  description: string;
};

export type AboutVisionMissionContent = {
  eyebrow: string;
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  imageLabel: string;
  items: AboutVisionMissionItem[];
};

export type AboutCoreValue = {
  code: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageLabel: string;
};

export type AboutCoreValuesContent = {
  eyebrow: string;
  heading: string;
  description: string;
  values: AboutCoreValue[];
};

export type AboutWhyChooseItem = {
  code: string;
  title: string;
  description: string;
};

export type AboutWhyChooseContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: AboutWhyChooseItem[];
};

export type AboutCTAContent = {
  eyebrow: string;
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryAction: AboutAction;
  secondaryAction: AboutAction;
};