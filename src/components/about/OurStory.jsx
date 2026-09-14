import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AboutHeroImage from "@/imports/about/about-hero.jpg";

export default function OurStory() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96">
          <Image
            src={AboutHeroImage}
            alt="Our team working together"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-(--accent)">
            Our Story
          </p>
          <h2 className="text-3xl font-bold text-(--text-primary) md:text-4xl">
            Built by learners, for learners
          </h2>
          <p className="mt-5 leading-relaxed text-(--text-secondary)">
            We started this platform because we struggled to find courses
            that were both practical and genuinely well-taught. So we set out
            to build the kind of learning experience we always wished
            existed — one focused on real skills, not just certificates.
          </p>
          <p className="mt-4 leading-relaxed text-(--text-secondary)">
            Today, thousands of instructors and students are part of our
            community, and we&apos;re just getting started.
          </p>

          <Link
            href="/courses"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-(--accent) transition-colors hover:text-(--accent-hover)"
          >
            Explore our courses
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}