"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import BannerLight1 from "@/imports/banner-light-1.jpg";
import BannerLight2 from "@/imports/banner-light-2.jpg";
import BannerLight3 from "@/imports/banner-light-3.jpg";
import BannerLight4 from "@/imports/banner-light-4.jpg";

import BannerDark1 from "@/imports/banner-dark-1.png";
import BannerDark2 from "@/imports/banner-dark-2.jpg";
import BannerDark3 from "@/imports/banner-dark-3.jpg";
import BannerDark4 from "@/imports/banner-dark-4.jpg";

const LIGHT_BANNERS = [BannerLight1, BannerLight2, BannerLight3, BannerLight4];
const DARK_BANNERS = [BannerDark1, BannerDark2, BannerDark3, BannerDark4];

export default function BannerSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <section className="relative h-[260px] w-full bg-(--background) sm:h-[380px] md:h-[550px] lg:h-[620px]" />
    );
  }

  const images = resolvedTheme === "dark" ? DARK_BANNERS : LIGHT_BANNERS;

  return (
    <section className="relative h-[260px] w-full overflow-hidden bg-(--background) sm:h-[380px] md:h-[550px] lg:h-[620px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        speed={800}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.params.pagination.el = paginationRef.current;
        }}
        navigation={{ prevEl: null, nextEl: null }}
        pagination={{ el: null, clickable: true }}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={`Banner ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-contain object-center sm:object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev Button */}
      <button
        ref={prevRef}
        type="button"
        aria-label="Previous banner"
        className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-(--border) bg-(--background-card)/70 text-(--text-primary) backdrop-blur-md transition-colors hover:bg-(--background-card) sm:h-9 sm:w-9 md:left-6 md:h-11 md:w-11 lg:left-8"
      >
        <ChevronLeft size={16} className="md:hidden" />
        <ChevronLeft size={20} className="hidden md:block" />
      </button>

      {/* Next Button */}
      <button
        ref={nextRef}
        type="button"
        aria-label="Next banner"
        className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-(--border) bg-(--background-card)/70 text-(--text-primary) backdrop-blur-md transition-colors hover:bg-(--background-card) sm:h-9 sm:w-9 md:right-6 md:h-11 md:w-11 lg:right-8"
      >
        <ChevronRight size={16} className="md:hidden" />
        <ChevronRight size={20} className="hidden md:block" />
      </button>

      {/* Dots */}
      <div
        ref={paginationRef}
        className="absolute! bottom-3! left-1/2! z-20 flex w-auto! -translate-x-1/2 items-center gap-1.5 sm:bottom-4! md:bottom-6!"
      />
    </section>
  );
}