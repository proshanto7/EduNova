import { Target, Heart, Lightbulb } from "lucide-react";

import TeamMember1 from "@/imports/about/team-1.jpg";
import TeamMember2 from "@/imports/about/team-2.jpg";
import TeamMember3 from "@/imports/about/team-3.jpg";
import TeamMember4 from "@/imports/about/team-4.jpg";

export const VALUES_DATA = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make high-quality education accessible to anyone, anywhere, regardless of background or circumstance.",
  },
  {
    icon: Heart,
    title: "Our Passion",
    description:
      "We believe learning should be engaging, practical, and genuinely enjoyable — not a chore.",
  },
  {
    icon: Lightbulb,
    title: "Our Approach",
    description:
      "Real-world projects, expert mentorship, and a community that pushes you to grow every step of the way.",
  },
];

export const TEAM_DATA = [
  {
    name: "Rafiul Islam",
    role: "Founder & CEO",
    image: TeamMember1,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Tania Ahmed",
    role: "Head of Curriculum",
    image: TeamMember2,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Farhan Kabir",
    role: "Lead Instructor",
    image: TeamMember3,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Nusrat Jahan",
    role: "Head of Design",
    image: TeamMember4,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
];

export const MILESTONES_DATA = [
  { year: "2019", label: "Founded with a single course" },
  { year: "2021", label: "Reached 10,000 students" },
  { year: "2023", label: "Expanded to 5 categories" },
  { year: "2025", label: "50,000+ students worldwide" },
];