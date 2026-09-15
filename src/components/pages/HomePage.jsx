import BannerSection from "@/components/home/BannerSection";
import LocationContact from "@/components/home/LocationContact";
import StatsSection from "../home/StatsSection";
import CategoriesSection from "../categories/CategoriesSection";
import AboutSection from "../home/AboutSection";
import MentorsSlider from "../home/MentorsSlider";
import ProcessSection from "../home/ProcessSection";

export default function HomePage() {
  return (
    <>
      <BannerSection />;
      <StatsSection/>
      <CategoriesSection/>
      <AboutSection/>
      <MentorsSlider/>
      <ProcessSection/>
      <LocationContact />
    </>
  );
}
