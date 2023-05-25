import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/InstagramCarousel.css";

import ig1 from "../../../assets/img/ig/ig1.png";
import ig2 from "../../../assets/img/ig/ig2.png";
import ig3 from "../../../assets/img/ig/ig3.png";
import ig4 from "../../../assets/img/ig/ig4.png";
import ig5 from "../../../assets/img/ig/ig5.png";
import ig6 from "../../../assets/img/ig/ig6.png";
import ig7 from "../../../assets/img/ig/ig7.png";
import ig8 from "../../../assets/img/ig/ig8.png";
import ig9 from "../../../assets/img/ig/ig9.png";
import ig10 from "../../../assets/img/ig/ig10.png";
import ig11 from "../../../assets/img/ig/ig11.png";
import ig12 from "../../../assets/img/ig/ig12.png";

export default class InstagramCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 8000,
      autoplaySpeed: 8000,
      cssEase: "linear",
      centerpadding: "100px",
      responsive: [
        {
          breakpoint: 1312, // Corresponds to your media query (min-width: 1312px)
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 993, // Corresponds to your media query (min-width: 993px) and (max-width: 1312px)
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplaySpeed: 8000,
            speed: 8000,
          },
        },
        {
          breakpoint: 768, // Corresponds to your media query (min-width: 768px) and (max-width: 992px)
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplaySpeed: 8000,
            speed: 8000,
          },
        },
        {
          breakpoint: 441, // Corresponds to your media query (min-width: 441px) and (max-width: 767px)
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplaySpeed: 8000,
            speed: 8000,
          },
        },
        {
          breakpoint: 440, // Corresponds to your media query (max-width: 440px)
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 8000,
            speed: 8000,
          },
        },
      ],
    
    };

    return (
      <Slider {...settings} className="instagram-carousel">
        <div className="ig-slide">
          <img src={ig1} alt="adobe illustrator"  />
        </div>
        <div className="ig-slide">
          <img src={ig2} alt="adobe illustrator" />
        </div>
        <div className="ig-slide">
          <img src={ig3} alt="adobe illustrator" />
        </div>
        <div className="ig-slide">
          <img src={ig4} alt="adobe illustrator" />
        </div>
        <div className="ig-slide">
          <img src={ig5} alt="adobe illustrator" />
        </div>
        <div className="ig-slide">
          <img src={ig6} alt="adobe illustrator" />
        </div>
        <div className="ig-slide">
          <img src={ig7} alt="adobe illustrator" />
        </div>
        <div className="ig-slide">
          <img src={ig8} alt="adobe illustrator" />
        </div>
        <div className="ig-slide">
          <img src={ig9} alt="adobe illustrator" />
        </div>
        <div className="ig-slide">
          <img src={ig10} alt="adobe illustrator" />
        </div>
        <div className="ig-slide">
          <img src={ig11} alt="adobe illustrator" />
        </div>
        <div className="ig-slide">
          <img src={ig12} alt="adobe illustrator" />
        </div>
      </Slider>
    );
  }
}
