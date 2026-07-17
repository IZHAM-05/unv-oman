export type FooterLink = {
  name: string;
  href: string;
};

export type FooterSocialIcon =
  | "instagram"
  | "whatsapp"
  | "linkedin";

export type FooterSocialLink = {
  name: string;
  href: string;
  icon: FooterSocialIcon;
};

export type FooterContactContent = {
  email: string;
  emailHref: string;
  phone: string;
  phoneHref: string;
  workingHours: string;
};

export type FooterLocationContent = {
  description: string;
  mapEmbedUrl: string;
  mapTitle: string;
  mapLabel: string;
};

export type FooterSectionHeadings = {
  quickLinks: string;
  products: string;
  contact: string;
  location: string;
};

export type FooterBrandContent = {
  logo: string;
  logoAlt: string;
  logoHref: string;
  description: string;
};

export type FooterBottomContent = {
  companyName: string;
  rightsText: string;
  tagline: string;
};

export type FooterContent = {
  brand: FooterBrandContent;
  sectionHeadings: FooterSectionHeadings;
  quickLinks: FooterLink[];
  productLinks: FooterLink[];
  socialLinks: FooterSocialLink[];
  contact: FooterContactContent;
  location: FooterLocationContent;
  bottom: FooterBottomContent;
};