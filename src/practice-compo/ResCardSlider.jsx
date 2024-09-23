import React from "react";
import "./rescardslide.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ronaldo1 from "./images/ronaldo1.jpg";
import ronaldo2 from "./images/ronaldo2.jpg";
import ronaldo3 from "./images/ronaldo3.jpg";
import ronaldo4 from "./images/ronaldo4.jpg";
import ronaldo5 from "./images/ronaldo5.jpg";

const images = [
  { id: 1, src: ronaldo1 },
  { id: 2, src: ronaldo2 },
  { id: 3, src: ronaldo3 },
  { id: 4, src: ronaldo4 },
  { id: 5, src: ronaldo5 },
  { id: 6, src: ronaldo1 },
];

function ResCardSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {images.map((image, id) => (
          <SwiperSlide key={id}>
            <div className="card">
              <img src={image.src} alt={`slide ${image.id}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ResCardSlider;
