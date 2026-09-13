import {
  Laptop,
  TrendingUp,
  Palette,
  Megaphone,
  Headphones,
} from "lucide-react";

export const CATEGORIES_DATA = [
  {
    slug: "development",
    icon: Laptop,
    name: "Development",
    count: "120 Courses",
    description: "Start coding and build real-world projects.",
    href: "/courses/development",
    color: "#7c6fe8",
  },
  {
    slug: "business",
    icon: TrendingUp,
    name: "Business",
    count: "98 Courses",
    description: "Grow your business skills and leadership.",
    href: "/courses/business",
    color: "#22a06b",
  },
  {
    slug: "design",
    icon: Palette,
    name: "Design",
    count: "85 Courses",
    description: "Learn UI/UX, graphic design and more.",
    href: "/courses/design",
    color: "#e8823a",
  },
  {
    slug: "marketing",
    icon: Megaphone,
    name: "Marketing",
    count: "75 Courses",
    description: "Digital marketing strategies that work.",
    href: "/courses/marketing",
    color: "#3b82c4",
  },
  {
    slug: "personal-development",
    icon: Headphones,
    name: "Personal Development",
    count: "60 Courses",
    description: "Improve your life and achieve your goals.",
    href: "/courses/personal-development",
    color: "#e0538a",
  },
];

export function getCategoryBySlug(slug) {
  return CATEGORIES_DATA.find((category) => category.slug === slug);
}