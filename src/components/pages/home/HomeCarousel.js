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
      if (window.innerWidth <= 767) {
        setSlidesPerView(1.15); 
        setSpaceBetween(22.5); 
      } else if (window.innerWidth <= 992) {
        setSlidesPerView(1.2); 
        setSpaceBetween(6); 
      } else if (window.innerWidth <= 1440) {
        setSlidesPerView(1.25); 
        setSpaceBetween(70); 
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
          pagination={false}
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
            <img src={tonalex} alt="Mouthpieces" className="home-carousel-image"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={mouthpiece} alt="Mouthpieces" className="home-carousel-image"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={artist} alt="Artists" className="home-carousel-image"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={dealer} alt="Artists" className="home-carousel-image"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={artist2} alt="Tip Openings" className="home-carousel-image" />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
};

export default HomeCarousel;
