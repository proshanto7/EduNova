"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MenuImage from "@/imports/image.png";

const menuItems = [
  {
    id: 1,
    name: "Lamb Dish",
    description: "A tender, savory dish with seasonal vegetables and perfect sauce.",
    price: "$2.90",
    image: MenuImage,
  },
  {
    id: 2,
    name: "Seafood Platter",
    description: "Selected ocean treasures served with our signature preparation.",
    price: "$1.00",
    image: MenuImage,
  },
  {
    id: 3,
    name: "Kneefle Pasta",
    description: "Fresh handmade pasta tossed with our special creamy sauce.",
    price: "$2.00",
    image: MenuImage,
  },
  {
    id: 4,
    name: "Dessert",
    description: "A delicate dessert finished with fresh berries and sweet sauce.",
    price: "$3.50",
    image: MenuImage,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Manu() {
  return (
    <section className="relative overflow-hidden bg-(--background) px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-white/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          {/* Small Label */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-4 bg-(--primary)/30" />

            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-(--primary)/45">
              About Profile
            </span>

            <span className="h-px w-4 bg-(--primary)/30" />
          </div>

          {/* Title */}
          <h2 className="font-serif text-4xl font-medium tracking-tight text-(--primary) sm:text-5xl">
            Full Menu Highlights
          </h2>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {menuItems.map((item) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-[10px] border border-(--border) bg-(--background-card)/60 shadow-xl backdrop-blur-xl"
            >
              {/* Image */}
              <div className="relative aspect-[1.75/1] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-(--background)/20 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="relative bg-(--background-card)/75 px-3 py-3 backdrop-blur-xl">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-[15px] text-(--primary)/90 sm:text-base">
                    {item.name}
                  </h3>

                  <span className="shrink-0 font-serif text-[12px] font-medium text-(--primary)/65">
                    {item.price}
                  </span>
                </div>

                <p className="mt-1 max-w-[90%] text-[10px] leading-4 text-(--text-muted) sm:text-[11px]">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}