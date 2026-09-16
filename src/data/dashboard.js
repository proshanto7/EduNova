import { BookOpen, Award, Clock, Flame } from "lucide-react";
import Course1 from "@/imports/courses/web-dev-bootcamp.jpg";
import Course2 from "@/imports/courses/react-nextjs.jpg";
import Course3 from "@/imports/courses/ui-ux-design.jpg";

export const DASHBOARD_STATS = [
  { icon: BookOpen, label: "Enrolled Courses", value: "3" },
  { icon: Award, label: "Certificates Earned", value: "1" },
  { icon: Clock, label: "Hours Learned", value: "24" },
  { icon: Flame, label: "Day Streak", value: "7" },
];

export const ENROLLED_COURSES_DATA = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Rafiul Islam",
    image: Course1,
    progress: 68,
  },
  {
    id: 2,
    title: "React & Next.js Masterclass",
    instructor: "Tania Ahmed",
    image: Course2,
    progress: 32,
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    instructor: "Nusrat Jahan",
    image: Course3,
    progress: 90,
  },
];

export const DASHBOARD_NAV = [
  { label: "Overview", href: "/dashboard", key: "overview" },
  { label: "My Courses", href: "/dashboard/courses", key: "courses" },
  { label: "Certificates", href: "/dashboard/certificates", key: "certificates" },
  { label: "Settings", href: "/dashboard/settings", key: "settings" },
];