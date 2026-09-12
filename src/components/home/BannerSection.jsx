import Image from "next/image";
import HomeBG from "@/imports/banner.jpg";

const BANNER_DATA = {
  image: HomeBG,
  title: "THE PALATE",
  subtitle: "EXQUISITE DINING",
  cards: [
    {
      label: "Head Chef",
      description: "Where flavors meet culinary excellence.",
    },
    {
      label: "Menu",
      description: "A curated selection of exquisite dishes.",
    },
  ],
};

export default function BannerSection() {
  return (
    <section className="relative min-h-155 overflow-hidden bg-background">
      {/* Background Image */}
      <Image
        src={BANNER_DATA.image}
        alt="Exquisite dining at The Palate"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />

      {/* Left to Right Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-(--background)/90 via-(--background)/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-155 max-w-7xl items-center justify-center px-6">
        {/* Center Text */}
        <div className="text-center">
          <p className="mb-3 text-[10px] uppercase tracking-[0.45em] text-(--secondary)">
            Welcome to
          </p>

          <h1 className="font-serif text-5xl leading-tight tracking-[0.08em] text-(--primary) md:text-7xl">
            {BANNER_DATA.title}
          </h1>

          <h2 className="mt-2 font-serif text-2xl tracking-[0.12em] text-(--secondary-light) md:text-4xl">
            {BANNER_DATA.subtitle}
          </h2>

          {/* Divider */}
          <div className="mx-auto mt-7 h-px w-16 bg-(--accent)" />
        </div>

        {/* Head Chef Card */}
        <div className="absolute right-6 top-1/2 hidden w-48 -translate-y-28 lg:block">
          <InfoCard data={BANNER_DATA.cards[0]} />
        </div>

        {/* Menu Card */}
        <div className="absolute right-6 top-1/2 hidden w-48 translate-y-16 lg:block">
          <InfoCard data={BANNER_DATA.cards[1]} />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ data }) {
  return (
    <div className="rounded-xl border border-(--border) bg-(--background-card)/80 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl">
      {/* Card Header */}
      <div className="mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />

        <span className="text-[10px] uppercase tracking-[0.15em] text-(--secondary-light)">
          {data.label}
        </span>
      </div>

      {/* Card Description */}
      <p className="text-[11px] leading-relaxed text-(--text-muted)">
        {data.description}
      </p>
    </div>
  );
}