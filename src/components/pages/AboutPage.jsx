import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import Milestones from "@/components/about/Milestones";
import TeamSection from "@/components/about/TeamSection";
import CtaSection from "@/components/about/CtaSection";

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