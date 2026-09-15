import BlogImage1 from "@/imports/blog/1.jpg";
import BlogImage2 from "@/imports/blog/2.jpg";
import BlogImage3 from "@/imports/blog/3.jpg";
import BlogImage4 from "@/imports/blog/4.jpg";
import BlogImage5 from "@/imports/blog/5.jpg";
import BlogImage6 from "@/imports/blog/6.jpg";

export const BLOG_CATEGORIES = [
  "All",
  "Development",
  "Design",
  "Marketing",
  "Career",
  "Business",
];

export const BLOG_POSTS_DATA = [
  {
    slug: "top-web-development-trends-2026",
    title: "Top Web Development Trends to Watch in 2026",
    excerpt:
      "From AI-assisted coding to edge computing, here are the trends shaping how we build for the web this year.",
    content:
      "The web development landscape keeps evolving fast. In this article, we break down the tools, frameworks, and practices gaining momentum — and what they mean for developers at every level. AI-assisted coding tools are becoming standard in daily workflows, helping developers write, review, and debug code faster. Meanwhile, edge computing continues to reshape how applications are deployed, bringing computation closer to users for lower latency and better performance. Frameworks like Next.js keep pushing the boundaries of what's possible with server components and streaming. Staying current with these shifts isn't just about chasing trends — it's about writing better, faster, more maintainable software.",
    category: "Development",
    author: "Rafiul Islam",
    date: "2026-01-15",
    readTime: "6 min read",
    image: BlogImage1,
  },
  {
    slug: "building-a-career-in-ux-design",
    title: "Building a Career in UX Design: Where to Start",
    excerpt:
      "Breaking into UX design can feel overwhelming. Here's a practical roadmap for beginners.",
    content:
      "UX design is one of the most in-demand skills today, but the path to becoming a professional designer isn't always clear. This guide walks through the fundamentals — from understanding user research and wireframing to building a portfolio that gets you hired. We also cover common mistakes beginners make and how to avoid them, along with recommended tools and resources to accelerate your learning. Whether you're switching careers or just starting out, the key is consistent practice and real project experience.",
    category: "Design",
    author: "Nusrat Jahan",
    date: "2026-01-10",
    readTime: "8 min read",
    image: BlogImage2,
  },
  {
    slug: "digital-marketing-tips-for-startups",
    title: "5 Digital Marketing Tips Every Startup Should Know",
    excerpt:
      "Limited budget, big ambitions. Here's how startups can market smart, not just hard.",
    content:
      "Marketing on a startup budget requires focus and creativity. This article covers five actionable strategies: leveraging content marketing for organic growth, using data to guide every decision, building genuine community engagement, prioritizing retention over pure acquisition, and testing small before scaling spend. Real-world examples show how early-stage companies have used these tactics to compete with much larger budgets — and what you can apply starting today.",
    category: "Marketing",
    author: "Farhan Kabir",
    date: "2026-01-05",
    readTime: "5 min read",
    image: BlogImage3,
  },
  {
    slug: "productivity-habits-that-actually-work",
    title: "Productivity Habits That Actually Work",
    excerpt:
      "Forget the hacks. These are the habits backed by real behavioral science.",
    content:
      "Most productivity advice online is noise. This article focuses on habits with actual evidence behind them — time-blocking, the two-minute rule, deep work sessions, and deliberate rest. We also explore why willpower alone isn't a sustainable strategy, and how designing your environment matters more than motivation. Small, consistent changes compound into significant results over time.",
    category: "Career",
    author: "Sadia Rahman",
    date: "2025-12-28",
    readTime: "4 min read",
    image: BlogImage4,
  },
  {
    slug: "scaling-your-business-sustainably",
    title: "How to Scale Your Business Without Burning Out",
    excerpt:
      "Growth doesn't have to come at the cost of your sanity. Here's a healthier approach.",
    content:
      "Scaling a business is often glamorized, but the reality involves difficult trade-offs. This piece discusses sustainable growth strategies — building systems before adding headcount, protecting founder bandwidth, and recognizing when to say no to opportunities that don't align with long-term goals. Case studies from founders who scaled thoughtfully offer a grounded perspective away from hustle-culture narratives.",
    category: "Business",
    author: "Kamal Hossain",
    date: "2025-12-20",
    readTime: "7 min read",
    image: BlogImage5,
  },
  {
    slug: "why-online-learning-works",
    title: "Why Online Learning Works (When Done Right)",
    excerpt:
      "Online education gets criticized often, but the right structure changes everything.",
    content:
      "Skepticism about online learning usually stems from poorly designed courses, not the medium itself. This article explores what makes online education effective: structured pacing, real feedback loops, community accountability, and practical application. We also share data on completion rates and outcomes for well-designed programs versus passive video content, making the case for intentional course design over sheer volume of material.",
    category: "Career",
    author: "Tania Ahmed",
    date: "2025-12-15",
    readTime: "5 min read",
    image: BlogImage6,
  },
];

export function getPostBySlug(slug) {
  if (typeof slug !== "string" || slug.trim() === "") return null;
  return BLOG_POSTS_DATA.find((post) => post.slug === slug) ?? null;
}

export function getRelatedPosts(currentSlug, category, limit = 3) {
  return BLOG_POSTS_DATA.filter(
    (post) => post.slug !== currentSlug && post.category === category,
  ).slice(0, limit);
}