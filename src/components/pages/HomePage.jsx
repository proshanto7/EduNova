import BannerSection from "@/components/home/BannerSection";
import MenuHighlights from "@/components/home/MenuHighlights";
import CulinaryExperiences from "@/components/home/CulinaryExperiences";
import LocationContact from "@/components/home/LocationContact";
import PrivateEvents from "../home/PrivateEvents";
import ChefProfiles from "@/components/home/ChefProfiles";
import StatsSection from "../home/StatsSection";
import CategoriesSection from "../categories/CategoriesSection";
import AboutSection from "../home/AboutSection";
import MentorsSlider from "../home/MentorsSlider";

export default function HomePage() {
  return (
    <>
      <BannerSection />;
      <StatsSection/>
      <CategoriesSection/>
      <AboutSection/>
      <MentorsSlider/>
      <CulinaryExperiences />
      <ChefProfiles />
      <MenuHighlights />
      <PrivateEvents />
      <LocationContact />
    </>
  );
}
