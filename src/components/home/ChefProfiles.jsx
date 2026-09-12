"use client";

import Image from "next/image";
import { CHEFS } from "@/data/home";


export default function ChefProfiles() {
  return (
    <section className="relative py-20 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <h2 className="mb-16 text-center font-serif text-4xl tracking-wide text-(--text-primary)">
          Chef&apos;s Profiles
        </h2>

        {/* Chef Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {CHEFS.map((chef) => (
            <div
              key={chef.id}
              className="group flex flex-col items-center rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(36,37,34,0.4)] px-8 py-10 backdrop-blur-md transition-all duration-500 hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(36,37,34,0.6)]"
            >
              {/* Chef Image */}
              <div className="mb-6 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-2 border-[rgba(232,216,189,0.5)] shadow-lg shadow-[rgba(232,216,189,0.1)]">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Chef Name */}
              <h3 className="mb-2 font-serif text-xl tracking-wide text-(--text-primary)">
                {chef.name}
              </h3>

              {/* Chef Title */}
              <p className="mb-4 text-sm font-medium tracking-wide text-(--accent)">
                {chef.title}
              </p>

              {/* Chef Description */}
              <p className="text-center text-sm leading-relaxed text-(--text-secondary)">
                {chef.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}