import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <main className="bg-background">
      <GalleryHero />
      <GalleryGrid />
    </main>
  );
}
