import Course1 from "@/imports/courses/web-dev-bootcamp.jpg";
import Course2 from "@/imports/courses/react-nextjs.jpg";
import Course3 from "@/imports/courses/javascript-basics.jpg";
import Course4 from "@/imports/courses/python-programming.jpg";
import Course5 from "@/imports/courses/business-leadership.jpg";
import Course6 from "@/imports/courses/entrepreneurship.jpg";
import Course7 from "@/imports/courses/financial-management.jpg";
import Course8 from "@/imports/courses/ui-ux-design.jpg";
import Course9 from "@/imports/courses/graphic-design.jpg";
import Course10 from "@/imports/courses/figma-mastery.jpg";
import Course11 from "@/imports/courses/digital-marketing.jpg";
import Course12 from "@/imports/courses/seo-fundamentals.jpg";
import Course13 from "@/imports/courses/social-media-marketing.jpg";
import Course14 from "@/imports/courses/productivity.jpg";
import Course15 from "@/imports/courses/public-speaking.jpg";

export const COURSES_DATA = [
  {
    id: 1,
    slug: "complete-web-development-bootcamp",
    categorySlug: "development",
    title: "Complete Web Development Bootcamp",
    instructor: "Rafiul Islam",
    price: "$49",
    rating: 4.7,
    students: "12,400",
    image: Course1,
  },
  {
    id: 2,
    slug: "react-nextjs-masterclass",
    categorySlug: "development",
    title: "React & Next.js Masterclass",
    instructor: "Tania Ahmed",
    price: "$59",
    rating: 4.8,
    students: "9,120",
    image: Course2,
  },
  {
    id: 3,
    slug: "javascript-fundamentals-for-beginners",
    categorySlug: "development",
    title: "JavaScript Fundamentals for Beginners",
    instructor: "Shakil Ahmed",
    price: "$29",
    rating: 4.6,
    students: "15,800",
    image: Course3,
  },
  {
    id: 4,
    slug: "python-programming-from-scratch",
    categorySlug: "development",
    title: "Python Programming from Scratch",
    instructor: "Mehedi Hasan",
    price: "$39",
    rating: 4.7,
    students: "10,650",
    image: Course4,
  },
  {
    id: 5,
    slug: "business-leadership-fundamentals",
    categorySlug: "business",
    title: "Business Leadership Fundamentals",
    instructor: "Kamal Hossain",
    price: "$39",
    rating: 4.6,
    students: "5,300",
    image: Course5,
  },
  {
    id: 6,
    slug: "entrepreneurship-startup-essentials",
    categorySlug: "business",
    title: "Entrepreneurship & Startup Essentials",
    instructor: "Jannatul Ferdous",
    price: "$45",
    rating: 4.5,
    students: "4,200",
    image: Course6,
  },
  {
    id: 7,
    slug: "financial-management-for-managers",
    categorySlug: "business",
    title: "Financial Management for Managers",
    instructor: "Arif Chowdhury",
    price: "$42",
    rating: 4.4,
    students: "3,800",
    image: Course7,
  },
  {
    id: 8,
    slug: "ui-ux-design-fundamentals",
    categorySlug: "design",
    title: "UI/UX Design Fundamentals",
    instructor: "Nusrat Jahan",
    price: "$45",
    rating: 4.9,
    students: "8,750",
    image: Course8,
  },
  {
    id: 9,
    slug: "graphic-design-masterclass",
    categorySlug: "design",
    title: "Graphic Design Masterclass",
    instructor: "Rezwan Karim",
    price: "$38",
    rating: 4.6,
    students: "6,900",
    image: Course9,
  },
  {
    id: 10,
    slug: "figma-for-product-designers",
    categorySlug: "design",
    title: "Figma for Product Designers",
    instructor: "Lamia Akter",
    price: "$32",
    rating: 4.8,
    students: "7,450",
    image: Course10,
  },
  {
    id: 11,
    slug: "digital-marketing-strategy",
    categorySlug: "marketing",
    title: "Digital Marketing Strategy",
    instructor: "Farhan Kabir",
    price: "$35",
    rating: 4.5,
    students: "6,200",
    image: Course11,
  },
  {
    id: 12,
    slug: "seo-fundamentals-growth-hacking",
    categorySlug: "marketing",
    title: "SEO Fundamentals & Growth Hacking",
    instructor: "Sabbir Rahman",
    price: "$33",
    rating: 4.6,
    students: "5,600",
    image: Course12,
  },
  {
    id: 13,
    slug: "social-media-marketing-mastery",
    categorySlug: "marketing",
    title: "Social Media Marketing Mastery",
    instructor: "Ishrat Jahan",
    price: "$30",
    rating: 4.4,
    students: "7,100",
    image: Course13,
  },
  {
    id: 14,
    slug: "productivity-goal-setting",
    categorySlug: "personal-development",
    title: "Productivity & Goal Setting",
    instructor: "Sadia Rahman",
    price: "$29",
    rating: 4.7,
    students: "4,100",
    image: Course14,
  },
  {
    id: 15,
    slug: "public-speaking-communication-skills",
    categorySlug: "personal-development",
    title: "Public Speaking & Communication Skills",
    instructor: "Tanvir Ahmed",
    price: "$27",
    rating: 4.8,
    students: "3,600",
    image: Course15,
  },
];

export function getCoursesByCategory(slug) {
  return COURSES_DATA.filter((course) => course.categorySlug === slug);
}

// শুধু slug দিয়ে খোঁজা হবে — internal numeric id বাইরে থেকে ব্যবহারযোগ্য নয়
export function getCourseBySlug(slug) {
  if (typeof slug !== "string" || slug.trim() === "") return null;
  return COURSES_DATA.find((course) => course.slug === slug) ?? null;
}