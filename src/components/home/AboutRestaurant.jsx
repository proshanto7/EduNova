"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AboutImage from "@/imports/image.png";

const aboutItems = [
  {
    title: "Est. 1998",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Crafted with Passion",
    description:
      "Creating cuisine with passion and discovering perfect flavors.",
  },
  {
    title: "Multi-Award Winning Chef",
    description:
      "Our experienced chef brings creativity and excellence to every dish.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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

export default function AboutRestaurant() {
  return (
    <section className="relative overflow-hidden bg-(--background) px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-serif text-4xl font-medium tracking-tight text-(--primary) sm:text-5xl lg:text-6xl">
            About Our Restaurant
          </h2>

          <p className="mt-6 text-sm leading-7 text-(--text-muted) sm:text-base sm:leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse potenti. Donec elementum, neque vel consectetur
            tincidunt, sapien mauris vestibulum libero, vitae commodo
            libero lorem vel nisi.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-14 grid items-stretch gap-6 md:mt-16 lg:grid-cols-2 lg:gap-7">
          {/* Glass Information Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-[24px] border border-(--border) bg-(--background-card) p-7 shadow-2xl backdrop-blur-2xl sm:p-9 lg:p-10"
          >
            {/* Glass Highlight */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/[0.06] blur-3xl" />

            <div className="relative space-y-8">
              {aboutItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="group"
                >
                  <h3 className="font-serif text-2xl text-(--primary) transition-colors duration-300 group-hover:text-(--accent) sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-(--text-muted) sm:text-base">
                    {item.description}
                  </p>

                  {index !== aboutItems.length - 1 && (
                    <div className="mt-7 h-px w-full bg-(--border)" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Restaurant Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="group relative min-h-[360px] overflow-hidden rounded-[24px] border border-(--border)"
          >
            <Image
              src={AboutImage}
              alt="Restaurant interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-(--background)/40 via-transparent to-(--background)/10" />

            {/* Glass Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-5 left-5 rounded-full border border-(--border) bg-(--background-card)/80 px-5 py-2.5 text-xs text-(--text-light) backdrop-blur-xl"
            >
              Since 1998
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}