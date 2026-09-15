import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

// ==================== CONTACT INFO ====================

export const CONTACT_INFO_CARDS = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+880 1XXX-XXXXXX",
    href: "tel:+8801XXXXXXXXX",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@educavo.com",
    href: "mailto:hello@educavo.com",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Uposhohor, Sylhet",
    href: "https://maps.google.com/?q=Sylhet,Bangladesh",
  },
  {
    icon: MessageCircle,
    label: "Live Chat",
    value: "Chat with us on WhatsApp",
    href: "https://wa.me/8801XXXXXXXXX",
  },
];

// ==================== CONTACT FORM ====================

export const CONTACT_FORM_DATA = {
  header: {
    eyebrow: "Get In Touch",
    title: "Contact Us",
    description:
      "Have questions about our courses? Reach out to our team or visit our campus — we're happy to help you find the right learning path.",
  },

  location: {
    map: {
      title: "Campus Location",
      query: "Sylhet, Bangladesh",
    },

    openingHours: {
      title: "Office Hours",
      days: "Sunday – Thursday",
      time: "9:00 AM – 6:00 PM",
    },

    address: {
      title: "Address",
      line1: "House 12, Road 5, Uposhohor",
      line2: "Sylhet, Bangladesh",
    },
  },

  form: {
    name: {
      label: "Full Name",
      placeholder: "Your name",
    },

    email: {
      label: "Email Address",
      placeholder: "you@example.com",
    },

    phone: {
      label: "Phone Number",
      placeholder: "+880 1XXX-XXXXXX",
    },

    course: {
      label: "Course of Interest",
      defaultValue: "development",

      options: [
        { value: "development", label: "Web Development" },
        { value: "business", label: "Business" },
        { value: "design", label: "Design" },
        { value: "marketing", label: "Marketing" },
        {
          value: "personal-development",
          label: "Personal Development",
        },
        {
          value: "other",
          label: "Other / Not Sure",
        },
      ],
    },

    message: {
      label: "Message",
      placeholder: "Tell us a bit about what you're looking for...",
    },

    button: "Send Message",

    successMessage:
      "Thanks! We'll get back to you within 24 hours.",
  },
};

// ==================== FAQ ====================

export const CONTACT_FAQ_DATA = [
  {
    question: "How do I enroll in a course?",
    answer:
      "Simply browse our course catalog, select the course you're interested in, and click 'Enroll Now'. You'll be guided through a simple checkout process.",
  },

  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 7-day money-back guarantee on all courses if you're not satisfied with your purchase.",
  },

  {
    question: "How can I become a mentor?",
    answer:
      "We're always looking for experienced professionals to join our mentor community. Reach out to us through this form with your background and area of expertise.",
  },

  {
    question: "Are the courses self-paced?",
    answer:
      "Most of our courses are self-paced, so you can learn on your own schedule. Some specialized programs may have fixed start dates — check the course page for details.",
  },

  {
    question: "Do I get a certificate after completion?",
    answer:
      "Yes, you'll receive a certificate of completion for every course you finish, which you can share on LinkedIn or add to your resume.",
  },
];

// ==================== SOCIAL ICONS ====================

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13.5 22v-8h2.75l.5-3h-3.25V9.05c0-.87.29-1.55 1.6-1.55h1.8V4.82c-.31-.04-1.37-.13-2.6-.13-2.57 0-4.33 1.57-4.33 4.45V11H7v3h2.97v8h3.53Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

// ==================== SOCIAL LINKS ====================

export const CONTACT_SOCIAL_LINKS = [
  {
    icon: FacebookIcon,
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: TwitterIcon,
    label: "Twitter",
    href: "https://twitter.com",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://instagram.com",
  },
];