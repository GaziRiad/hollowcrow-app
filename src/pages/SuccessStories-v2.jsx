// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation as swiperNavigation } from "swiper/modules";

import useContent from "../hooks/useContent";
import Loader from "../ui/Loader";

import { navigation } from "../constants/navigation";
import Navigation from "../components/Navigation";

function SuccessStories() {
  const { content } = useContent();

  if (!content) return <Loader />;

  return (
    <>
      <div>
        <Navigation content={navigation} />
      </div>
      <section className=" flex items-center">
        <Swiper
          modules={[Pagination, swiperNavigation]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          effect="coverflow"
          centeredSlides
          initialSlide={1}
          className="storiesSlider w-[95%] lg:w-[80%] xl:w-[65%] shadow-2xl rounded-2xl"
        >
          {content.stories.map((story, index) => (
            <SwiperSlide
              // !w-[600px]
              className={`transition-transform duration-300 transform  `}
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
      </section>
    </>
  );
}

export default SuccessStories;
