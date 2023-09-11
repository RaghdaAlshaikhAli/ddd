import React from "react";
import ServiceComponent from "../../Services/serviceComponent";
import "./style.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Scroll = ({ title }) => {
  return (
    <div className="scroll-container">
      <h2>{title} </h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <ServiceComponent
            src="https://placehold.co/400x400"
            img="https://placehold.co/400x400"
            name="john"
            desc="description"
            price="300$"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceComponent
            src="https://placehold.co/400x400"
            img="https://placehold.co/400x400"
            name="john"
            desc="description"
            price="300$"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceComponent
            src="https://placehold.co/400x400"
            img="https://placehold.co/400x400"
            name="john"
            desc="description"
            price="300$"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceComponent
            src="https://placehold.co/400x400"
            img="https://placehold.co/400x400"
            name="john"
            desc="description"
            price="300$"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceComponent
            src="https://placehold.co/400x400"
            img="https://placehold.co/400x400"
            name="john"
            desc="description"
            price="300$"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceComponent
            src="https://placehold.co/400x400"
            img="https://placehold.co/400x400"
            name="john"
            desc="description"
            price="300$"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Scroll;
