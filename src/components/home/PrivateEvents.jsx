"use client";
import Image from "next/image";
import { PRIVATE_EVENTS_DATA } from "@/data/home";

export default function PrivateEvents() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="mx-auto w-[calc(100%-48px)] max-w-295 py-20 md:py-24">
      <div className="grid gap-3 lg:grid-cols-[0.92fr_1.08fr]">
        {/* =========================
            CONTENT / FORM CARD
        ========================== */}
        <div className="flex min-h-85 flex-col justify-between rounded-[15px] border border-(--border) bg-(--background-card) p-6 shadow-[0_18px_50px_rgba(0,0,0,0.2)] sm:p-7 md:min-h-95">
          <div>
            <h2 className="max-w-105 font-serif text-[38px] font-normal leading-[0.95] tracking-[-0.04em] text-(--primary) sm:text-[44px] md:text-[48px]">
              {PRIVATE_EVENTS_DATA.title}
            </h2>

            <p className="mt-5 max-w-105 text-[11px] leading-[1.65] text-(--text-muted) sm:text-[12px]">
              {PRIVATE_EVENTS_DATA.description}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8">
            <label
              htmlFor="event-inquiry"
              className="mb-2 block text-[10px] font-medium text-(--secondary-light)"
            >
              {PRIVATE_EVENTS_DATA.form.label}
            </label>

            <div className="flex items-center gap-3">
              <input
                id="event-inquiry"
                name="inquiry"
                type="text"
                placeholder={PRIVATE_EVENTS_DATA.form.placeholder}
                className="h-11 min-w-0 flex-1 rounded-[3px] border border-(--border-light) bg-(--background-input) px-3 text-[11px] text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/5"
              />

              <button
                type="submit"
                className="h-11 shrink-0 cursor-pointer rounded-full bg-(--accent) px-5 text-[10px] font-bold tracking-[0.03em] text-(--accent-text) transition-all duration-200 hover:-translate-y-px hover:bg-(--accent-hover) active:translate-y-0"
              >
                {PRIVATE_EVENTS_DATA.form.button}
              </button>
            </div>
          </form>
        </div>

        {/* =========================
            IMAGE GRID
        ========================== */}
        <div className="grid min-h-85 gap-3 sm:min-h-95">
          {PRIVATE_EVENTS_DATA.images.map((image, index) => (
            <div
              key={image.alt}
              className="relative min-h-40 overflow-hidden rounded-[15px] border border-(--border) bg-(--background-card)"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              />

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-(--background)/35 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
