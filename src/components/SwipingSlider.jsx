import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Heading from "./Heading";

function SwipingSlider({ content }) {
  return (
    <section className=" mb-12 lg:mb-32">
      <Heading type="h2" style="lg:!text-left container mx-auto">
        {content.heading}
      </Heading>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="industrySwiper pb-16 pt-4"
      >
        {content.slides.map((slide) => (
          <SwiperSlide key={slide.title} className="!w-96">
            <div className="w-80 shadow-[5px_-10px_10px_rgb(0,0,0,0.1)] rounded-t-3xl">
              <p className="text-2xl text-center font-semibold py-14">
                {slide.title}
              </p>
              <img src={slide.img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SwipingSlider;
