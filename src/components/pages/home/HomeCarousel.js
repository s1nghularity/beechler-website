import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Card } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../styles/HomeCarousel.css";

import AdrianChia from "../../../assets/img/home/top-carousel/adrian-chia.png";
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
                centerSlidePercentage={40}
                infiniteLoop={true}
                draggable={true}
                swipeable={true}
                emulateTouch={true}
                className="home-top-carousel"
            >
                {renderCard(DaveKoz, 'Dave Koz')}
                {renderCard(EveretteHarp, 'Everette Harp')}
                {renderCard(GeraldAlbright, 'Gerald Albright')}
                {renderCard(AdrianChia, 'Adrian Chia')}
                {renderCard(HarpPaulo, 'Everette Harp & Michael Paulo')}
                {renderCard(IkechiOnyenaka, 'Ikechi Onyenaka')}
                {renderCard(AdrianChia, 'Adrian Chia')}
                {renderCard(HanDurst, 'Alex Han & Craig Durst')}
                {renderCard(JayBeckenstein, 'Jay Beckenstein')}
                {renderCard(PabloOchoa, 'Pablo Ochoa')}
                {renderCard(TedNash, 'Ted Nash')}
            </Carousel>
        </div>
    );
};

export default HomeCarousel;
