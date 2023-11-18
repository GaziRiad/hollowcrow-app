import Hero from "../components/Hero";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import useContent from "../hooks/useContent";
import Loader from "../ui/Loader";
import { useState } from "react";

function SuccessStories() {
  const { content } = useContent();
  const [activeIndex, setActiveIndex] = useState(1);

  if (!content) return <Loader />;

  function handleSlideChange(swiper) {
    setActiveIndex(swiper.activeIndex);
  }

  return (
    <div className="relative mb-44">
      <Hero herobg="hero-solutions" noPattern={true} />
      <section className="absolute top-0 w-full h-full">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          effect="coverflow"
          centeredSlides
          initialSlide={1}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          className="storiesSlider w-[95%] absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/3 lg:w-[80%] xl:w-[65%] shadow-2xl rounded-2xl"
        >
          {content.stories.map((story, index) => (
            <SwiperSlide
              // !w-[600px]
              className={`transition-transform duration-300 transform  ${
                index === activeIndex ? "scale-100" : "scale-75"
              }`}
              key={index}
            >
              <div className="bg-white/50 flex flex-col items-center justify-center gap-6 px-6 py-12 xl:flex-row xl:p-20 xl:gap-24">
                <div className="xl:w-1/2">
                  <p className="text">{story.text}</p>
                </div>
                <div className=" flex flex-col items-center gap-6 xl:w-1/2">
                  <img src={story.img} />
                  <img src={story.logo} className="w-fit" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute -bottom-20 right-1/2 translate-x-1/2 ">
          <p className=" text-primary text-3xl font-semibold mb-4">
            Directorate of Forestry
          </p>
          <p className=" flex items-center justify-center">
            <span className="text-3xl">{"{"}</span>
            <span className="px-2 text-lg lg:text-xl">2017 / Turkey</span>
            <span className="text-3xl">{"}"}</span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default SuccessStories;
