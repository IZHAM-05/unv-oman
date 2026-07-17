export type NavigationItem = {
  name: string;
  href: string;
};

export type NavigationAction = {
  label: string;
  href: string;
};

export type NavigationLogo = {
  image: string;
  alt: string;
  href: string;
};

export type NavigationContent = {
  logo: NavigationLogo;
  links: NavigationItem[];
  mobileMenuAriaLabel: string;
};