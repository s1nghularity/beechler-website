
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay }  from "swiper";
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
      if (window.innerWidth <= "43em") {
        setSlidesPerView(1); // Adjust this value for mobile screens
        setSpaceBetween(10); // Adjust this value for mobile screens
      } else if (window.innerWidth <= "62em") {
        setSlidesPerView(1.3); // Adjust this value for medium screens
        setSpaceBetween(70); // Adjust this value for medium screens
      } else if (window.innerWidth <= "82em") {
        setSlidesPerView(1.5); // Adjust this value for large screens
        setSpaceBetween(90); // Adjust this value for large screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (

    <div className="stripe-carousel" >
        <div className="carousel-fade"></div>
  <div className="carousel-fade carousel-fade-right"></div>
    <div className="swiper-container">
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