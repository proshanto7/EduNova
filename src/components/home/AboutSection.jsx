import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import AboutImage from "@/imports/about/about-hero.jpg";

const FEATURES = [
  "Expert instructors with real industry experience",
  "Lifetime access to all course materials",
  "Hands-on projects, not just theory",
  "Certificate on course completion",
];

export default function AboutSection() {
  return (
    <section className="bg-background px-6 py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96">
          <Image
            src={AboutImage}
            alt="Students learning together"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          {/* Floating stat badge */}
          <div className="absolute bottom-5 left-5 rounded-2xl border border-(--border) bg-(--background-card)/90 px-5 py-4 backdrop-blur-md">
            <p className="text-2xl font-bold text-(--accent)">50,000+</p>
            <p className="text-xs text-(--text-secondary)">Happy Students</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-(--accent)">
            About Us
          </p>
          <h2 className="text-3xl font-bold leading-tight text-(--text-primary) md:text-4xl">
            Learn skills that actually matter, taught by people who use them
          </h2>
          <p className="mt-5 leading-relaxed text-(--text-secondary)">
            We believe education should be practical, accessible, and
            genuinely engaging. That&apos;s why every course on our platform
            is built around real projects and taught by instructors who work
            in the field — not just people reading from a script.
          </p>

          {/* Feature List */}
          <ul className="mt-6 space-y-3">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-(--accent)"
                />
                <span className="text-sm text-(--text-secondary)">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold text-(--accent-text) transition-opacity hover:opacity-90"
          >
            Learn More About Us
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