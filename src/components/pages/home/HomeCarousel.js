import React from "react";
import "../../../styles/HomePage.css";

import HomeTrio from "../../../components/pages/home/HomeTrio.js";
import tonalex from "../../../assets/img/home/carousel-tonalex.jpg";
import mouthpiece from "../../../assets/img/home/carousel-mouth.jpg";
import artist2 from "../../../assets/img/home/carousel-artist2.jpg";
import artist from "../../../assets/img/home/carousel-artist.jpg";
import dealer from "../../../assets/img/home/carousel-dealer.jpg";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const HomeCarousel = () => {
  const [slidesPerView, setSlidesPerView] = React.useState(1.7);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setSlidesPerView(1.3);
      } else {
        setSlidesPerView(1.7);
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
      <div>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={75}
          centeredSlides={true}
          centeredSlidesBounds={true}
          loop={true}
          speed={1500}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
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
      <HomeTrio />
    </div>
  );
};

export default HomeCarousel;