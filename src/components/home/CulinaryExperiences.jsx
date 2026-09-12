"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ExperienceImage from "@/imports/image.png";

const experiences = [
  {
    id: 1,
    title: "Tasting Menu",
    description: "A curated journey through seasonal dishes paired with fine wines.",
    image: ExperienceImage,
  },
  {
    id: 2,
    title: "Chef's Event",
    description: "An exclusive dining experience right next to our master chefs.",
    image: ExperienceImage,
  },
  {
    id: 3,
    title: "Chef's Table",
    description: "Tailored culinary experiences designed for your special occasions.",
    image: ExperienceImage,
  },
];

export default function CulinaryExperiences() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen bg-(--background) text-(--primary) px-6 py-24 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-(--accent)/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Section */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 z-10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-(--accent)/60" />
            <span className="text-(--accent)/80 text-xs tracking-[0.25em] uppercase font-light">
              Our Experiences
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-(--primary)">
            Culinary experiences made for you
          </h2>
        </div>
        <p className="text-(--text-muted) text-sm max-w-xs leading-relaxed">
          From memorable chef events to masterfully crafted menus, every experience is designed to feel extraordinary.
        </p>
      </div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 z-10"
      >
        {experiences.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group backdrop-blur-xl bg-(--primary)/[0.03] border border-(--border) rounded-2xl p-4 flex flex-col justify-between shadow-2xl hover:border-(--accent)/40 hover:bg-(--primary)/[0.06] transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative h-60 w-full rounded-xl overflow-hidden mb-5">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Content */}
            <div className="px-2 pb-3">
              <h3 className="text-xl font-serif text-(--primary) mb-2">
                {item.title}
              </h3>
              <p className="text-(--text-muted) text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-14 z-10"
      >
        <button className="bg-(--accent) text-(--accent-text) font-semibold text-xs tracking-widest uppercase px-8 py-3.5 rounded-full hover:bg-(--accent-hover) hover:scale-105 transition-all duration-300 shadow-lg">
          Explore The Menu
        </button>
      </motion.div>
    </section>
  );
}