import Image from "next/image";
import { TECH_STACK_DATA } from "@/data/home";
import DeskBackground from "@/imports/desk-background.jpg";

export default function TechStackSection() {
  return (
    <section className="relative overflow-hidden py-14 md:py-16">
      {/* Background Image */}
      <Image
        src={DeskBackground}
        alt=""
        fill
        sizes="100vw"
        priority={false}
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-(--background)/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-8 sm:gap-x-14 md:justify-between md:gap-x-6">
          {TECH_STACK_DATA.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.label}
                className="group flex flex-col items-center gap-2.5"
              >
                {/* Icon */}

                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
                  style={{
                    backgroundColor: tech.color,
                  }}
                >
                  <Icon />
                </div>
                {/* Label */}
                <span className="text-xs font-medium text-(--text-primary) sm:text-sm">
                  {tech.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
