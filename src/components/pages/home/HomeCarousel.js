import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../styles/HomeCarousel.css";

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

const HomeCarousel = () => {
  return (
    <div className="stripe-carousel">
      <div className="carousel-fade"></div>
      <div className="carousel-fade carousel-fade-right"></div>


        <Carousel
        
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          interval={7000}
          transitionTime={1250}
          speed={5000}
          centerMode={true}
          infiniteLoop={true}
          draggable={true}
          swipeable={true}
          emulateTouch={true}
          className="home-top-carousel"
        >
          <div className="home-top-carousel-slide">
            <img src={DaveKoz} alt="Dave Koz" className="home-top-carousel-image" />
          </div>

          <div className="home-top-carousel-slide">
            <img src={EveretteHarp} alt="Everette Harp" className="home-top-carousel-image" />
          </div>

          <div className="home-top-carousel-slide">
            <img src={GeraldAlbright} alt="Gerald Albright" className="home-top-carousel-image" />
          </div>

          <div className="home-top-carousel-slide">
            <img src={AdrianChia} alt="Adrian Chia" className="home-top-carousel-image" />
          </div>

          <div className="home-top-carousel-slide">
            <img src={HarpPaulo} alt="Everette Harp & Michael Paulo" className="home-top-carousel-image" />
          </div>

          <div className="home-top-carousel-slide">
            <img src={IkechiOnyenaka} alt="Ikechi Onyenaka" className="home-top-carousel-image" />
          </div>

          <div className="home-top-carousel-slide">
            <img src={AdrianChia} alt="Adrian Chia" className="home-top-carousel-image" />
          </div>

          <div className="home-top-carousel-slide">
            <img src={HanDurst} alt="Alex Han & Craig Durst" className="home-top-carousel-image" />
          </div>

          <div className="home-top-carousel-slide">
            <img src={JayBeckenstein} alt="Jay Beckenstein" className="home-top-carousel-image" />
          </div>

          <div className="home-top-carousel-slide">
            <img src={PabloOchoa} alt="Pablo Ochoa" className="home-top-carousel-image" />
          </div>

          <div className="home-top-carousel-slide">
            <img src={TedNash} alt="Ted Nash" className="home-top-carousel-image" />
          </div>
        </Carousel>
      </div>

  );
};

export default HomeCarousel;