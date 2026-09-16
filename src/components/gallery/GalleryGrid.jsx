"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {GALLERY_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`relative rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-(--accent) text-(--accent-text)"
                    : "border-(--border) text-(--text-secondary) hover:border-(--accent)"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeGalleryTab"
                    className="absolute inset-0 rounded-full bg-(--accent)"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 gap-4 sm:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
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

                  <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/70 via-black/0 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-medium text-white">
                      {item.caption}
                    </p>
                  </div>

                  <span className="absolute left-3 top-3 rounded-full bg-(--accent) px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-(--accent-text)">
                    {item.category}
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border border-dashed border-(--border) py-16 text-center"
          >
            <p className="text-(--text-secondary)">
              No photos found in this category.
            </p>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <GalleryLightbox
            items={filteredItems}
            activeIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
