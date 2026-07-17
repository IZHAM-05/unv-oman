export type CompanyAddress = {
  street: string;
  city: string;
  state?: string;
  country: string;
  postalCode?: string;
};

export type CompanyContact = {
  phone: string;
  email: string;
  whatsapp?: string;
};

export type CompanySocials = {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  x?: string;
};

export type CompanyContent = {
  name: string;
  shortName: string;
  tagline: string;

  address: CompanyAddress;
  contact: CompanyContact;
  socials: CompanySocials;

  workingHours: string;

  mapUrl?: string;

  copyright: string;
};