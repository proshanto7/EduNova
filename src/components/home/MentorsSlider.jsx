"use client";

import { SwiperSlide } from "swiper/react";

import SwiperSlider from "@/components/common/SwiperSlider";
import MentorSliderCard from "@/components/home/MentorSliderCard";
import { MENTORS_DATA } from "@/data/mentors";
import Container from "../layout/container";

export default function MentorsSlider() {
  return (
    <Container>
      <section className="overflow-hidden bg-background py-16 md:py-20">
        <h2 className="mb-8 text-center font-serif text-[28px] text-(--primary) sm:text-[32px] md:mb-10 md:text-[36px]">
          Our Mentors
        </h2>

        <SwiperSlider slidesPerView="auto" spaceBetween={16} autoplay loop>
          {MENTORS_DATA.map((mentor) => (
            <SwiperSlide
              key={mentor.slug}
              className="w-50! sm:w-52.5! md:w-55! lg:w-57.5!"
            >
              <MentorSliderCard mentor={mentor} />
            </SwiperSlide>
          ))}
        </SwiperSlider>
      </section>
    </Container>
  );
}