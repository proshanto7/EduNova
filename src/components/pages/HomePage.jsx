import BannerSection from "@/components/home/BannerSection";
import AboutRestaurant from "@/components/home/AboutRestaurant";
import MenuHighlights from "@/components/home/MenuHighlights";
import CulinaryExperiences from "@/components/home/CulinaryExperiences";
import LocationContact from "@/components/home/LocationContact";
import PrivateEvents from "../home/PrivateEvents";
import CustomerReviewsPage from "./CustomerReviewsPage";
import ChefProfiles from "@/components/home/ChefProfiles";
import Manu from "@/components/home/Manu";
import StatsSection from "../home/StatsSection";

export default function HomePage() {
  return (
    <>
      <BannerSection />;
      <StatsSection/>
      <AboutRestaurant />
      <Manu />
      <CulinaryExperiences />
      <ChefProfiles />
      <MenuHighlights />
      <CustomerReviewsPage />
      <PrivateEvents />
      <LocationContact />
    </>
  );
}
