import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import Milestones from "@/components/about/Milestones";
import TeamSection from "@/components/about/TeamSection";
import CtaSection from "@/components/about/CtaSection";

export const metadata = {
  title: "About Us",
  description:
    "Learn about our mission to make quality education accessible to everyone, everywhere.",
};

export default function AboutPage() {
  return (
    <main className="bg-background">
      <AboutHero />
      <OurStory />
      <OurValues />
      <Milestones />
      <TeamSection />
      <CtaSection />
    </main>
  );
}