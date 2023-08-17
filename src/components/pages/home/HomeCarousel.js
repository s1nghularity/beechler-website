import React, {useState, useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import { Card } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../styles/HomeCarousel.css";

import DaveKoz from "../../../assets/img/home/top-carousel/dave-koz.png";
import EveretteHarp from "../../../assets/img/home/top-carousel/everette-harp.png";
import GeraldAlbright from "../../../assets/img/home/top-carousel/gerald-albright.png";
import HanDurst from "../../../assets/img/home/top-carousel/han-durst.png";
import HarpPaulo from "../../../assets/img/home/top-carousel/harp-paulo.png";
import IkechiOnyenaka from "../../../assets/img/home/top-carousel/ikechi-onyenaka.png";
import JayBeckenstein from "../../../assets/img/home/top-carousel/jay-beckenstein.png";
import PabloOchoa from "../../../assets/img/home/top-carousel/pablo-ochoa.png";
import TedNash from "../../../assets/img/home/top-carousel/ted-nash.png";

const HomeCarousel = () => {

    const [centerSlidePercentage, setCenterSlidePercentage] = useState(40);

  useEffect(() => {
    const updateCenterSlidePercentage = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth <= 768) {
        setCenterSlidePercentage(100);
      } else if (viewportWidth <= 1024) {
        setCenterSlidePercentage(50);
      } else {
        setCenterSlidePercentage(33.33);
      }
    };

    window.addEventListener("resize", updateCenterSlidePercentage);
    updateCenterSlidePercentage();

    return () => {
      window.removeEventListener("resize", updateCenterSlidePercentage);
    };
  }, []);


    const renderCard = (src, alt) => (
        <Card className="home-top-carousel-slide">
            <Card.Img variant="top" src={src} alt={alt} className="home-top-carousel-image" />
        </Card>
    );

    return (
        <div className="stripe-carousel">
            <div className="carousel-fade"></div>
            <div className="carousel-fade carousel-fade-right"></div>

            <Carousel
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
                interval={7000}
                transitionTime={3000}
                centerMode={true}
                centerSlidePercentage={centerSlidePercentage}
                infiniteLoop={true}
                draggable={true}
                swipeable={true}
                emulateTouch={true}
                className="home-top-carousel"
            >
                {renderCard(DaveKoz, 'Dave Koz')}
                {renderCard(EveretteHarp, 'Everette Harp')}
                {renderCard(GeraldAlbright, 'Gerald Albright')}
                {renderCard(HarpPaulo, 'Everette Harp & Michael Paulo')}
                {renderCard(IkechiOnyenaka, 'Ikechi Onyenaka')}
                {renderCard(HanDurst, 'Alex Han & Craig Durst')}
                {renderCard(JayBeckenstein, 'Jay Beckenstein')}
                {renderCard(PabloOchoa, 'Pablo Ochoa')}
                {renderCard(TedNash, 'Ted Nash')}
            </Carousel>
        </div>
    );
};

export default HomeCarousel;
