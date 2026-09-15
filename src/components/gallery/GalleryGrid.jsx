"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_CATEGORIES, GALLERY_DATA } from "@/data/gallery";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-7xl">
        {/* Filter Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-(--accent) bg-(--accent) text-(--accent-text)"
                    : "border-(--border) text-(--text-secondary) hover:border-(--accent)"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-(--border) bg-(--background-card) text-left"
            >
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/70 via-black/0 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium text-white">
                    {item.caption}
                  </p>
                </div>

                <span className="absolute left-3 top-3 rounded-full bg-(--accent) px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-(--accent-text)">
                  {item.category}
                </span>
              </div>
            </button>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="rounded-2xl border border-dashed border-(--border) py-16 text-center">
            <p className="text-(--text-secondary)">
              No photos found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          items={filteredItems}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}