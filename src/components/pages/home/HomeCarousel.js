
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay }  from "swiper";
import tonalex from "../../../assets/img/home/carousel-tonalex.jpg";
import mouthpiece from "../../../assets/img/home/carousel-mouth.jpg";
import artist2 from "../../../assets/img/home/carousel-artist2.jpg";
import artist from "../../../assets/img/home/carousel-artist.jpg";
import dealer from "../../../assets/img/home/carousel-dealer.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "../../../styles/theme.css";
import "../../../styles/HomeCarousel.css";




const HomeCarousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(1.9);
  const [spaceBetween, setSpaceBetween] = useState(90);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {

        setSlidesPerView(1.1875);
        setSpaceBetween(50);
      } else if (window.innerWidth <= 1366) {
        setSlidesPerView(1.9);
      } else {
        setSlidesPerView(3.0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (

    <div>
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
            <p>Mouthpieces Tonalex</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={mouthpiece} alt="Mouthpieces" />
            <p>Mouthpieces 1</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={artist} alt="Artists" />
            <p>Artists</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={dealer} alt="Artists" />
            <p>Dealers</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={artist2} alt="Tip Openings" />
            <p>Tip Openings</p>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
};

export default HomeCarousel;