import Mentor1 from "@/imports/mentors/1.jpg";
import Mentor2 from "@/imports/mentors/2.jpg";
import Mentor3 from "@/imports/mentors/3.jpg";
import Mentor4 from "@/imports/mentors/4.jpg";
import Mentor5 from "@/imports/mentors/5.jpg";
import Mentor6 from "@/imports/mentors/6.jpg";
import Mentor7 from "@/imports/mentors/7.jpg";
import Mentor8 from "@/imports/mentors/2.jpg";
import Mentor9 from "@/imports/mentors/5.jpg";
import Mentor10 from "@/imports/mentors/3.jpg";

export const MENTORS_DATA = [
  {
    slug: "rafiul-islam",
    name: "Rafiul Islam",
    title: "Senior Full-Stack Developer",
    expertise: "Web Development",
    image: Mentor1,
    rating: 4.9,
    students: "12,400",
    bio: "Rafiul has over 8 years of experience building scalable web applications. He specializes in React, Next.js, and Node.js, and has mentored hundreds of developers into their first tech job.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },

  {
    slug: "tania-ahmed",
    name: "Tania Ahmed",
    title: "Product Manager",
    expertise: "Business",
    image: Mentor2,
    rating: 4.8,
    students: "9,120",
    bio: "Tania has led product teams at multiple startups, taking ideas from zero to launch. She teaches practical product strategy, leadership, and stakeholder management.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },

  {
    slug: "farhan-kabir",
    name: "Farhan Kabir",
    title: "Digital Marketing Strategist",
    expertise: "Marketing",
    image: Mentor3,
    rating: 4.6,
    students: "6,200",
    bio: "Farhan has run growth campaigns for brands across e-commerce and SaaS. He focuses on SEO, paid acquisition, and data-driven marketing decisions.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },

  {
    slug: "nusrat-jahan",
    name: "Nusrat Jahan",
    title: "UI/UX Design Lead",
    expertise: "Design",
    image: Mentor4,
    rating: 4.9,
    students: "8,750",
    bio: "Nusrat has designed products used by millions, with a strong focus on accessibility and usability. She teaches design systems, prototyping, and user research.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },

  {
    slug: "kamal-hossain",
    name: "Kamal Hossain",
    title: "Business Consultant",
    expertise: "Business",
    image: Mentor5,
    rating: 4.6,
    students: "5,300",
    bio: "Kamal advises founders on scaling operations and building sustainable businesses. His mentorship blends real case studies with actionable frameworks.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },

  {
    slug: "sadia-rahman",
    name: "Sadia Rahman",
    title: "Life & Career Coach",
    expertise: "Personal Development",
    image: Mentor6,
    rating: 4.7,
    students: "4,100",
    bio: "Sadia helps students build better habits, set meaningful goals, and improve productivity. Her sessions combine psychology-backed methods with practical exercises.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },

  // Mentor 7
  {
    slug: "mahin-chowdhury",
    name: "Mahin Chowdhury",
    title: "Data Science Instructor",
    expertise: "Data Science",
    image: Mentor7,
    rating: 4.8,
    students: "7,850",
    bio: "Mahin is a data scientist with extensive experience working with machine learning and analytics. He helps students understand Python, data analysis, machine learning, and real-world data projects.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },

  // Mentor 8
  {
    slug: "samira-hasan",
    name: "Samira Hasan",
    title: "Frontend Engineering Lead",
    expertise: "Web Development",
    image: Mentor8,
    rating: 4.9,
    students: "10,300",
    bio: "Samira specializes in modern frontend development and scalable UI architecture. She teaches JavaScript, React, Next.js, TypeScript, and best practices for building production-ready applications.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },

  // Mentor 9
  {
    slug: "arif-mahmud",
    name: "Arif Mahmud",
    title: "SEO & Growth Consultant",
    expertise: "Marketing",
    image: Mentor9,
    rating: 4.7,
    students: "6,950",
    bio: "Arif helps businesses grow their online presence through SEO, content strategy, and organic growth. His mentorship focuses on practical strategies that produce measurable results.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },

  // Mentor 10
  {
    slug: "mehedi-hasan",
    name: "Mehedi Hasan",
    title: "Cloud & DevOps Engineer",
    expertise: "Cloud Computing",
    image: Mentor10,
    rating: 4.8,
    students: "5,680",
    bio: "Mehedi is a cloud and DevOps engineer focused on modern infrastructure and deployment workflows. He teaches AWS, Docker, CI/CD, cloud architecture, and production deployment practices.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
];

export function getMentorBySlug(slug) {
  if (typeof slug !== "string" || slug.trim() === "") {
    return null;
  }

  return MENTORS_DATA.find((mentor) => mentor.slug === slug) ?? null;
}
