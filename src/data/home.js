import Img1 from "@/imports/events (1).jpg"
import Img2 from "@/imports/events (2).jpg"
import Musk from "@/imports/musk.webp"
import chefImage1 from "@/imports/chef-1.jpg";
import chefImage2 from "@/imports/chef-2.jpg";
import chefImage3 from "@/imports/chef-3.jpg";
export const LOCATION_CONTACT_DATA = {
  header: {
    eyebrow: "LOCATION & CONTACT",
    title: "Location & Contact",
    description:
      "Not an event or data? It's a precise reservation, simply a designed location for the evening.",
  },

  location: {
    openingHours: {
      title: "Opening hours",
      days: "Monday to Friday",
      time: "7:00 am - 11:00 pm",
    },

    address: {
      title: "Address",
      line1: "The Green District",
      line2: "Arlington, FL 33712",
    },

    map: {
      title: "Restaurant Location",
      query: "The Green District, Arlington, FL 33712",
    },
  },

  form: {
    name: {
      label: "Name",
      placeholder: "Name",
    },

    date: {
      label: "Date",
    },

    time: {
      label: "Time",
    },

    party: {
      label: "Party",
      defaultValue: "2",
      options: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
        { value: "7", label: "7" },
        { value: "8", label: "8+" },
      ],
    },

    partySize: {
      label: "Party size",
      min: "1",
    },

    button: "CONTACT",

    successMessage: "Thanks! Your reservation request has been received.",
  },
};

export const PRIVATE_EVENTS_DATA = {
  title: "Private Events & Hosting",

  description:
    "For the finest private events, contact our team to create an unforgettable experience tailored to your occasion.",

  form: {
    label: "Inquiry",
    placeholder: "Share your event needs",
    button: "INQUIRE",
  },

  images: [
    {
      src: Img1,
      alt: "Private dining event",
    },
    {
      src: Img2,
      alt: "Private group dining event",
    },
  ],
};
export const CUSTOMER_REVIEWS_DATA = [
  {
    id: 1,
    name: "Samantha Wilson",
    role: "Food Enthusiast",
    avatar: Musk,
    rating: 5,
    review:
      "The experience was wonderful from start to finish. Every dish was beautifully prepared and full of flavor.",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Regular Guest",
    avatar: Musk,
    rating: 5,
    review:
      "The food was absolutely amazing and the service was excellent. Everything felt elegant and perfectly prepared.",
  },
  {
    id: 3,
    name: "Isabella Martinez",
    role: "Food Lover",
    avatar: Musk,
    rating: 5,
    review:
      "A beautiful dining experience with incredible flavors and wonderful service. I would definitely come back.",
  },
  {
    id: 4,
    name: "Daniel Anderson",
    role: "Guest",
    avatar: Musk,
    rating: 5,
    review:
      "One of the best restaurant experiences I have had. The atmosphere and attention to detail were exceptional.",
  },
  {
    id: 5,
    name: "Emily Johnson",
    role: "Food Enthusiast",
    avatar: Musk,
    rating: 5,
    review:
      "Everything was perfect. Amazing food, beautiful presentation and an unforgettable atmosphere.",
  },
  {
    id: 6,
    name: "Emily Johnson",
    role: "Food Enthusiast",
    avatar: Musk,
    rating: 5,
    review:
      "Everything was perfect. Amazing food, beautiful presentation and an unforgettable atmosphere.",
  },
  {
    id: 7,
    name: "Emily Johnson",
    role: "Food Enthusiast",
    avatar: Musk,
    rating: 5,
    review:
      "Everything was perfect. Amazing food, beautiful presentation and an unforgettable atmosphere.",
  },
  {
    id: 8,
    name: "Emily Johnson",
    role: "Food Enthusiast",
    avatar: Musk,
    rating: 5,
    review:
      "Everything was perfect. Amazing food, beautiful presentation and an unforgettable atmosphere.",
  },
];


// Footer data

const SOCIAL_ICONS = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.58v1.9h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M18.9 2H21l-6.4 7.3L22 22h-6.1l-5-6.6L4.6 22H2.5l6.9-7.9L2 2h6.2l4.5 6L18.9 2Zm-2.1 18h1.7L7.3 4H5.5l11.3 16Z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.6-.8-2-.9C15.9 4 12 4 12 4s-3.9 0-6.8.2c-.4.1-1.2.1-2 .9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.6c0 1.8.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9 1.6.2 6.5.2 6.5.2s3.9 0 6.8-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5ZM9.9 14.6V8.8l5.4 2.9-5.4 2.9Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </svg>
  ),
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Explore Us", href: "/explore" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
];


export const EVENT_LINKS = [
  { label: "Sustainability", href: "/sustainability" },
  { label: "About Us", href: "/about-us" },
  { label: "Farm Sam", href: "/farm-sam" },
  { label: "Contact", href: "/contact" },
];


export const SOCIAL_LINKS = [
  { icon: SOCIAL_ICONS.facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: SOCIAL_ICONS.twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: SOCIAL_ICONS.youtube, href: "https://youtube.com", label: "Youtube" },
  { icon: SOCIAL_ICONS.instagram, href: "https://instagram.com", label: "Instagram" },
];

// CHEFS DATA
export const CHEFS = [
  {
    id: 1,
    name: "Head Chef",
    title: "Head Chef & Culinary Director",
    description:
      "Brings refined techniques and expert palate from 15+ years of experience in world-class restaurants.",
    image: chefImage1,
  },
  {
    id: 2,
    name: "Sous Chef",
    title: "Sous Chef & Kitchen Manager",
    description:
      "Oversees the kitchen operations with precision and passion, ensuring culinary excellence in every dish.",
    image: chefImage2,
  },
  {
    id: 3,
    name: "Sommelier",
    title: "Wine Sommelier & Beverage Expert",
    description:
      "Curates an exceptional wine collection and guides guests through perfect pairings for their meal.",
    image: chefImage3,
  },
];