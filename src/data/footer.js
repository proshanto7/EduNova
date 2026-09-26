// ==================== CONTACT ICONS ====================

const PhoneIcon = () => (
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
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const MailIcon = () => (
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
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const MapPinIcon = () => (
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
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

// ==================== SOCIAL ICONS ====================

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13.5 22v-8h2.75l.5-3H13.5V9.05c0-.87.29-1.55 1.6-1.55h1.8V4.82c-.31-.04-1.37-.13-2.6-.13-2.57 0-4.33 1.57-4.33 4.45V11H7v3h2.97v8h3.53Z" />
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
    <circle
      cx="17.5"
      cy="6.5"
      r="0.8"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

// ==================== FOOTER DATA ====================

export const FOOTER_DATA = {
  brand: {
    name: "Edu Nova",
    description:
      "Empowering learners worldwide with practical, expert-led courses across development, business, design, and more.",
  },

  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Mentors", href: "/mentors" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // Real categories are fetched live in Footer.jsx from the API and
  // merged in at render time — this stays empty as the static fallback.
  categories: [],

  contact: [
    {
      icon: PhoneIcon,
      text: "+880 1XXX-XXXXXX",
      href: "tel:+8801XXXXXXXXX",
    },
    {
      icon: MailIcon,
      text: "hello@educavo.com",
      href: "mailto:hello@educavo.com",
    },
    {
      icon: MapPinIcon,
      text: "Uposhohor, Sylhet, Bangladesh",
      href: "https://maps.google.com/?q=Sylhet,Bangladesh",
    },
  ],

  social: [
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
  ],

  legal: [
    {
      label: "Privacy Policy",
      href: "/privacy",
    },
    {
      label: "Terms of Service",
      href: "/terms",
    },
  ],
};