import BannerSection from "@/components/home/BannerSection";
import AboutRestaurant from "@/components/home/AboutRestaurant";
import MenuHighlights from "@/components/home/MenuHighlights";
import CulinaryExperiences from "@/components/home/CulinaryExperiences";
import LocationContact from "@/components/home/LocationContact";
import PrivateEvents from "../home/PrivateEvents";
import CustomerReviewsPage from "./CustomerReviewsPage";
import ChefProfiles from "@/components/home/ChefProfiles";
import StatsSection from "../home/StatsSection";
import CategoriesSection from "../categories/CategoriesSection";

export default function HomePage() {
  return (
    <>
      <BannerSection />;
      <StatsSection/>
      <CategoriesSection/>
      <AboutRestaurant />
      <CulinaryExperiences />
      <ChefProfiles />
      <MenuHighlights />
      <CustomerReviewsPage />
      <PrivateEvents />
      <LocationContact />
    </>
  );
}
