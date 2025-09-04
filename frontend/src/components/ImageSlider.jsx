import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import poster from "../assets/poster.jpg"
import { Link } from "react-router-dom";
function ImageSlider() {
      const images = [
        poster,
        poster,
        poster
  ];
  return (
    <div className="w-full h-[500px]">
    
      
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
             <Link to={`/moviedetails/${index}`} >
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-[530px] object-cover"
              />
              </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageSlider
