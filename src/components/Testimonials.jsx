import Heading from "./Heading";
import person1 from "../assets/testimonials/person1.png";
import person2 from "../assets/testimonials/person2.png";
import person3 from "../assets/testimonials/person3.png";
import person4 from "../assets/testimonials/person4.png";
import person5 from "../assets/testimonials/person5.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa6";
import { testimonials } from "../constants";

function Testimonials() {
  return (
    <section className="container mx-auto mb-44 ">
      <Heading>Testimonials</Heading>
      <div className="flex flex-col items-center justify-left gap-8 px-4 lg:px-4 lg:gap-40 lg:flex-row  ">
        <div className=" flex flex-wrap items-center w-full justify-center xl:w-2/4 ">
          <img src={person1} className="lg:order-4" />
          <img src={person2} className=" lg:order-3" />
          <img src={person3} className="lg:order-2" />
          <img src={person4} className="lg:order-1" />
          <img src={person5} className="lg:order-0" />
        </div>
        <div className="w-full">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Mousewheel, Pagination]}
            className="mySwiperVertical h-80 "
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="ml-8 flex items-center gap-6 lg:ml-12 2xl:ml-32 "
              >
                <span>
                  <FaQuoteLeft
                    size={48}
                    className=" scale-75 md:scale-100"
                    color="#ffb800"
                  />
                </span>
                <p className="w-2/3 md:text-lg md:leading-8">
                  {testimonial.text}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
