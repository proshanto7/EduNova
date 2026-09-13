export const COURSES_DATA = [
  {
    id: 1,
    categorySlug: "development",
    title: "Complete Web Development Bootcamp",
    instructor: "Rafiul Islam",
    price: "$49",
    rating: 4.7,
    students: "12,400",
  },
  {
    id: 2,
    categorySlug: "development",
    title: "React & Next.js Masterclass",
    instructor: "Tania Ahmed",
    price: "$59",
    rating: 4.8,
    students: "9,120",
  },
  {
    id: 3,
    categorySlug: "business",
    title: "Business Leadership Fundamentals",
    instructor: "Kamal Hossain",
    price: "$39",
    rating: 4.6,
    students: "5,300",
  },
  {
    id: 4,
    categorySlug: "design",
    title: "UI/UX Design Fundamentals",
    instructor: "Nusrat Jahan",
    price: "$45",
    rating: 4.9,
    students: "8,750",
  },
  {
    id: 5,
    categorySlug: "marketing",
    title: "Digital Marketing Strategy",
    instructor: "Farhan Kabir",
    price: "$35",
    rating: 4.5,
    students: "6,200",
  },
  {
    id: 6,
    categorySlug: "personal-development",
    title: "Productivity & Goal Setting",
    instructor: "Sadia Rahman",
    price: "$29",
    rating: 4.7,
    students: "4,100",
  },
];

export function getCoursesByCategory(slug) {
  return COURSES_DATA.filter((course) => course.categorySlug === slug);
}