import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./Home.module.css"; 

import HomeTrio from "../../../components/pages/home/HomeTrio.js";
import tonalex from "../../../assets/img/home/carousel-tonalex.jpg";
import mouthpiece from "../../../assets/img/home/carousel-mouth.jpg";
import artist2 from "../../../assets/img/home/carousel-artist2.jpg";
import artist from "../../../assets/img/home/carousel-artist.jpg";
import dealer from "../../../assets/img/home/carousel-dealer.jpg";


function HomeCarousel() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        centerMode: true,
        centerPadding: "10px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        beforeChange: (current, next) => {
          const selectedElement = document.querySelector(`.${styles.selected}`);
          if (selectedElement) {
            selectedElement.classList.remove(styles.selected);
          }
          const nextSelectedElement = document.querySelector(
            `.slick-slide[data-index="${next}"]`
          );
          if (nextSelectedElement) {
            nextSelectedElement.classList.add(styles.selected);
          }
        },
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
    return (
    <div className={styles.carouselContainer}>
     <Slider {...settings} className={`${styles.customCarousel} ${styles.homeCarousel}`}>

        <div>
            <img src={tonalex} alt="Mouthpieces" />
            <p className={styles.carouselCaption}>
            Mouthpieces Tonalex
            </p>
        </div>



        <div>
            <img src={mouthpiece} alt="Mouthpieces" />
            <p className={styles.carouselCaption}>
            Mouthpieces 1
            </p>
        </div>



        <div>
            <img src={artist} alt="Artists" />
            <p className={styles.carouselCaption}>
            Artists
            </p>
        </div>



        <div>
            <img src={dealer} alt="Artists" />
            <p className={styles.carouselCaption}>
            Dealers
            </p>
        </div>

    

        <div>
            <img src={artist2} alt="Tip Openings" />
            <p className={styles.carouselCaption}>
            Tip Openings
            </p>
        </div>

    </Slider>
    <HomeTrio />
    </div>
    );
    }

export default HomeCarousel;
