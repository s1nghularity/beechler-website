import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";


import AdrianChia from '../../../assets/img/home/top-carousel/adrian-chia.png';
import DaveKoz from '../../../assets/img/home/top-carousel/dave-koz.png';
import EveretteHarp from '../../../assets/img/home/top-carousel/everette-harp.png';
import GeraldAlbright from '../../../assets/img/home/top-carousel/gerald-albright.png';
import HanDurst from '../../../assets/img/home/top-carousel/han-durst.png';
import HarpPaulo from '../../../assets/img/home/top-carousel/harp-paulo.png';
import IkechiOnyenaka from '../../../assets/img/home/top-carousel/ikechi-onyenaka.png';
import JayBeckenstein from '../../../assets/img/home/top-carousel/jay-beckenstein.png';
import PabloOchoa from '../../../assets/img/home/top-carousel/pablo-ochoa.png';
import TedNash from '../../../assets/img/home/top-carousel/ted-nash.png';




import "swiper/css";
import "swiper/css/navigation";
import "../../../styles/HomeCarousel.css";

const HomeCarousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(1.9);
  const [spaceBetween, setSpaceBetween] = useState(90);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 440) {
        setSlidesPerView(1.1); 
        setSpaceBetween(20); 
      }     
        else if (window.innerWidth <= 713) {
        setSlidesPerView(1.15); 
        setSpaceBetween(20);
      }  
        else if (window.innerWidth <= 768) {
        setSlidesPerView(1.2); 
        setSpaceBetween(4);
      } else if (window.innerWidth <= 950) {
        setSlidesPerView(1.45); 
        setSpaceBetween(6); 
      } else if (window.innerWidth <= 992) {
        setSlidesPerView(1.2); 
        setSpaceBetween(6);
      } else if (window.innerWidth <= 1200) {
        setSlidesPerView(1.3); 
        setSpaceBetween(50); 
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
            <img src={AdrianChia} alt="Mouthpieces" className="home-carousel-image"/>
          </SwiperSlide>

          <SwiperSlide>
            <img src={DaveKoz} alt="Artists" className="home-carousel-image"/>
          </SwiperSlide>

          <SwiperSlide>
            <img src={EveretteHarp} alt="Mouthpieces" className="home-carousel-image"/>
          </SwiperSlide>

          <SwiperSlide>
            <img src={GeraldAlbright} alt="Tip Openings" className="home-carousel-image" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={HarpPaulo} alt="Artists" className="home-carousel-image"/>
          </SwiperSlide>

          <SwiperSlide>
            <img src={IkechiOnyenaka} alt="Mouthpieces" className="home-carousel-image"/>
          </SwiperSlide>

          <SwiperSlide>
            <img src={HanDurst} alt="Tip Openings" className="home-carousel-image" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={JayBeckenstein} alt="Artists" className="home-carousel-image"/>
          </SwiperSlide>

          <SwiperSlide>
            <img src={PabloOchoa} alt="Artists" className="home-carousel-image"/>
          </SwiperSlide>

          <SwiperSlide>
            <img src={TedNash} alt="Artists" className="home-carousel-image"/>
          </SwiperSlide>

        </Swiper>
      </div>

    </div>
  );
};

export default HomeCarousel;
