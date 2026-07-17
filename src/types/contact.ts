export type ContactHeroContent = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type ContactInfoIcon =
  | "products"
  | "location"
  | "business";

export type ContactInfoItem = {
  code: string;
  title: string;
  detail: string;
  icon: ContactInfoIcon;
};

export type ContactInfoContent = {
  headerLabel: string;
  statusLabel: string;
};

export type ContactFormFieldContent = {
  label: string;
  placeholder: string;
  required: boolean;
};

export type ContactSelectOption = {
  label: string;
  value: string;
};

export type ContactFormAction = {
  label: string;
  href: string;
};

export type ContactFormContent = {
  eyebrow: string;
  heading: string;
  description: string;

  fields: {
    fullName: ContactFormFieldContent;
    email: ContactFormFieldContent;
    phone: ContactFormFieldContent;
    company: ContactFormFieldContent;
    productCategory: ContactFormFieldContent;
    projectScope: ContactFormFieldContent;
    message: ContactFormFieldContent;
  };

  projectScopeOptions: ContactSelectOption[];

  agreement: {
    prefix: string;
    action: ContactFormAction;
  };

  submitLabel: string;
  footerNote: string;
};

export type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  productCategory: string;
  projectScope: string;
  message: string;
  agreeToTerms: boolean;
};