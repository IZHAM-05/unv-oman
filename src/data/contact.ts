// import type {
//   ContactFormContent,
//   ContactHeroContent,
//   ContactInfoContent,
//   ContactInfoItem,
// } from "@/types/contact";

// export const contactHeroContent: ContactHeroContent = {
//   title: "Contact Us.",
//   description:
//     "Get in touch for product enquiries, technical assistance, quotations and professional guidance on UNV surveillance solutions for your next security project.",
//   image: "https://picsum.photos/id/1018/1920/1080",
//   imageAlt: "Contact UNV Dubai",
// };

// export const contactInfoContent: ContactInfoContent = {
//   headerLabel: "Communication Matrix",
//   statusLabel: "SECURE",
// };

// export const contactInfoItems: ContactInfoItem[] = [
//   {
//     code: "01",
//     title: "Product Enquiries",
//     detail:
//       "CCTV, IP Cameras, NVRs, PTZ Cameras and VMS Software",
//     icon: "products",
//   },
//   {
//     code: "02",
//     title: "Location",
//     detail: "Dubai, United Arab Emirates",
//     icon: "location",
//   },
//   {
//     code: "03",
//     title: "Business Support",
//     detail:
//       "For installers, companies and security solution providers",
//     icon: "business",
//   },
// ];


// export const contactFormContent: ContactFormContent = {
//   eyebrow: "Get in Touch",

//   heading: "Let's Build Your Security Solution",

//   description:
//     "Share your requirements with our team. We will provide suitable product guidance and project recommendations after reviewing your enquiry.",

//   fields: {
//     fullName: {
//       label: "Full Name",
//       placeholder: "Enter your full name",
//       required: true,
//     },

//     email: {
//       label: "Email Address",
//       placeholder: "Enter your email address",
//       required: true,
//     },

//     phone: {
//       label: "Phone Number",
//       placeholder: "Enter your phone number",
//       required: true,
//     },

//     company: {
//       label: "Company Name",
//       placeholder: "Enter your company name",
//       required: true,
//     },

//     productCategory: {
//       label: "Product Category",
//       placeholder: "Select a product category",
//       required: true,
//     },

//     projectScope: {
//       label: "Project Scope",
//       placeholder: "Select project scope",
//       required: true,
//     },

//     message: {
//       label: "Project Details",
//       placeholder:
//         "Tell us about your project requirements, current setup and any specific product needs.",
//       required: true,
//     },
//   },

//   projectScopeOptions: [
//     {
//       label: "Small Office",
//       value: "small-office",
//     },
//     {
//       label: "Medium Business",
//       value: "medium-business",
//     },
//     {
//       label: "Large Enterprise",
//       value: "large-enterprise",
//     },
//     {
//       label: "Custom Solution",
//       value: "custom-solution",
//     },
//   ],

//   agreement: {
//     prefix:
//       "I agree to be contacted regarding this enquiry and accept the",
//     action: {
//       label: "privacy policy",
//       href: "#",
//     },
//   },

//   submitLabel: "Send Request",

//   footerNote:
//     "Form submission functionality will be connected after the required company email and enquiry workflow are confirmed.",
// };

import type {
  ContactFormContent,
  ContactHeroContent,
  ContactInfoContent,
  ContactInfoItem,
} from "@/types/contact";

export const contactHeroContent: ContactHeroContent = {
  title: "Contact Us.",
  description:
    "Get in touch for product enquiries, quotations and guidance on suitable UNV surveillance technologies for your security project in Oman.",
  image: "https://picsum.photos/id/1018/1920/1080",
  imageAlt: "Contact UNV Oman",
};

export const contactInfoContent: ContactInfoContent = {
  headerLabel: "Contact Information",
  statusLabel: "AVAILABLE",
};

export const contactInfoItems: ContactInfoItem[] = [
  {
    code: "01",
    title: "Product Enquiries",
    detail:
      "Network cameras, PTZ cameras, video recorders, thermal products and video management software",
    icon: "products",
  },
  {
    code: "02",
    title: "Location",
    detail: "Oman",
    icon: "location",
  },
  {
    code: "03",
    title: "Project Enquiries",
    detail:
      "For businesses, installers, system integrators and project teams",
    icon: "business",
  },
];

export const contactFormContent: ContactFormContent = {
  eyebrow: "Get in Touch",

  heading: "Let’s Plan Your Security Solution",

  description:
    "Share your project requirements with us. Your enquiry can include site details, preferred product categories, recording needs and any specific surveillance objectives.",

  fields: {
    fullName: {
      label: "Full Name",
      placeholder: "Enter your full name",
      required: true,
    },

    email: {
      label: "Email Address",
      placeholder: "Enter your email address",
      required: true,
    },

    phone: {
      label: "Phone Number",
      placeholder: "Enter your phone number",
      required: true,
    },

    company: {
      label: "Company Name",
      placeholder: "Enter your company name",
      required: true,
    },

    productCategory: {
      label: "Product Category",
      placeholder: "Select a product category",
      required: true,
    },

    projectScope: {
      label: "Project Scope",
      placeholder: "Select project scope",
      required: true,
    },

    message: {
      label: "Project Details",
      placeholder:
        "Tell us about your site, coverage requirements, current setup and any preferred UNV products or technologies.",
      required: true,
    },
  },

  projectScopeOptions: [
    {
      label: "Small Site",
      value: "small-site",
    },
    {
      label: "Medium-Sized Project",
      value: "medium-project",
    },
    {
      label: "Large or Multi-Site Project",
      value: "large-project",
    },
    {
      label: "Custom Requirement",
      value: "custom-requirement",
    },
  ],

  agreement: {
    prefix:
      "I agree to be contacted regarding this enquiry and accept the",
    action: {
      label: "privacy policy",
      href: "#",
    },
  },

  submitLabel: "Send Enquiry",

  footerNote:
    "Form submission will be connected after the official company email address and enquiry workflow are confirmed.",
};