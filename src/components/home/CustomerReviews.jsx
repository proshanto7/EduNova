"use client";

import { SwiperSlide } from "swiper/react";

import SwiperSlider from "@/components/common/SwiperSlider";
import ReviewCard from "@/components/common/ReviewCard";
import { CUSTOMER_REVIEWS_DATA } from "@/data/home";

export default function CustomerReviews() {
  return (
    <section className="overflow-hidden bg-background py-16 md:py-20">
      
      <h2 className="mb-8 text-center font-serif text-[28px] text-(--primary) sm:text-[32px] md:mb-10 md:text-[36px]">
        Customer Reviews
      </h2>

      <SwiperSlider
        slidesPerView="auto"
        spaceBetween={10}
        autoplay
        loop
      >
        {CUSTOMER_REVIEWS_DATA.map((review) => (
          <SwiperSlide
            key={review.id}
            className="w-65! sm:w-67.5! md:w-70! lg:w-71.75!"
          >
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </SwiperSlider>

    </section>
  );
}