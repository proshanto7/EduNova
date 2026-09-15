import { notFound } from "next/navigation";
import { MENTORS_DATA, getMentorBySlug } from "@/data/mentors";
import Breadcrumb from "@/components/common/Breadcrumb";
import MentorProfile from "@/components/mentors/MentorProfile";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function generateStaticParams() {
  return MENTORS_DATA.map((mentor) => ({ slug: mentor.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!SLUG_PATTERN.test(slug)) return {};

  const mentor = getMentorBySlug(slug);
  if (!mentor) return {};

  return {
    title: mentor.name,
    description: `${mentor.title} — ${mentor.expertise} mentor`,
  };
}

export default async function MentorDetailsPage({ params }) {
  const { slug } = await params;

  if (!SLUG_PATTERN.test(slug)) {
    notFound();
  }

  const mentor = getMentorBySlug(slug);

  if (!mentor) {
    notFound();
  }

  return (
    <main className="bg-background">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Mentors", href: "/mentors" },
          { label: mentor.name },
        ]}
      />
      <MentorProfile mentor={mentor} />
    </main>
  );
}
