"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperSlider({
  children,
  slidesPerView = "auto",
  spaceBetween = 10,
  autoplay = true,
  loop = true,
  showNavigation = true,
  showPagination = true,
  slideClassName = "",
}) {
  return (
    <div className="relative mx-auto w-full max-w-295">
      {showNavigation && (
        <>
          {/* Previous Button */}
          <button
            type="button"
            className="swiper-prev absolute left-3 top-1/2 z-30 flex h-7 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-(--nav-circle-border) bg-(--nav-circle-bg) text-(--nav-circle-text) transition-all duration-200 hover:scale-105 hover:bg-(--nav-circle-hover) hover:text-(--primary-hover) active:scale-95 md:left-5"
            aria-label="Previous"
          >
            <ChevronLeft size={13} />
          </button>

          {/* Next Button */}
          <button
            type="button"
            className="swiper-next absolute right-3 top-1/2 z-30 flex h-7 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-(--nav-circle-border) bg-(--nav-circle-bg) text-(--nav-circle-text) transition-all duration-200 hover:scale-105 hover:bg-(--nav-circle-hover) hover:text-(--primary-hover) active:scale-95 md:right-5"
            aria-label="Next"
          >
            <ChevronRight size={13} />
          </button>
        </>
      )}

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={
          showNavigation
            ? {
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
              }
            : false
        }
        pagination={
          showPagination
            ? {
                clickable: true,
              }
            : false
        }
        autoplay={
          autoplay
            ? {
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        loop={loop}
        centeredSlides
        grabCursor
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        className="overflow-visible!"
      >
        {children}
      </Swiper>
    </div>
  );
}