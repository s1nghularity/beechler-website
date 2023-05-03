import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import tonalex from "../../../assets/img/home/carousel-1.png";
import mouthpiece from "../../../assets/img/home/carousel-5.png";
import artist2 from "../../../assets/img/home/carousel-3.png";
import artist from "../../../assets/img/home/carousel-4.png";
import dealer from "../../../assets/img/home/carousel-2.png";

import "swiper/css";
import "swiper/css/navigation";
import "../../../styles/HomeCarousel.css";

const HomeCarousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(1.9);
  const [spaceBetween, setSpaceBetween] = useState(90);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 688) {// Adjust values for mobile screens
        setSlidesPerView(1.3); 
        setSpaceBetween(40); 
      } else if (window.innerWidth <= 992) {// Adjust values for medium screens
        setSlidesPerView(1.35); 
        setSpaceBetween(60); 
      } else if (window.innerWidth <= 1312) {// Adjust values for large screens
        setSlidesPerView(1.25); 
        setSpaceBetween(90); 
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="stripe-carousel">
      
      <div className="carousel-fade"></div>
      <div className="carousel-fade carousel-fade-right"></div>

      <div className="home-carousel">
        <Swiper
          className="home-carousel"
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          centeredSlides={true}
          centeredSlidesBounds={true}
          loop={true}
          speed={1250}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide>
            <img src={tonalex} alt="Mouthpieces" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mouthpiece} alt="Mouthpieces" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={artist} alt="Artists" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dealer} alt="Artists" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={artist2} alt="Tip Openings" />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
};

export default HomeCarousel;
