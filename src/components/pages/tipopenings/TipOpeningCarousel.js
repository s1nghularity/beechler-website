import React, { useEffect, useRef } from "react";
import "../../../styles/TipOpeningCarousel.css";
import ig1 from "../../../assets/img/ig/ig1.webp";
import ig2 from "../../../assets/img/ig/ig2.webp";
import ig3 from "../../../assets/img/ig/ig3.webp";
import ig4 from "../../../assets/img/ig/herbie-kae.webp";
import ig5 from "../../../assets/img/ig/ig5.webp";
import ig6 from "../../../assets/img/ig/ig6.webp";
import ig7 from "../../../assets/img/ig/ig7.webp";
import ig8 from "../../../assets/img/ig/ig8.webp";
import ig9 from "../../../assets/img/ig/ig9.webp";
import ig10 from "../../../assets/img/ig/stabe-wilson-chest.webp";
import ig11 from "../../../assets/img/ig/ig11.webp";
import ig12 from "../../../assets/img/ig/ig12.webp";

const images = [ig1, ig7, ig2, ig3, ig4, ig5, ig9, ig10, ig11, ig12, ig6, ig8];
const infiniteImages = [...images, ...images]; // duplicate the images array

const TipOpeningCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    let scrollAmount = 0;
    function autoScroll() {
      if (carouselRef.current) {
        carouselRef.current.scrollTo(scrollAmount, 0);
        if (scrollAmount < carouselRef.current.scrollWidth / 2) {
          scrollAmount += .5; // Increase this number to make the carousel scroll faster
        } else {
          scrollAmount = 0; // reset scrollAmount to 0 when halfway is reached
        }
      }
      requestAnimationFrame(autoScroll);
    }
    autoScroll();
  }, []);

  return (
    <div ref={carouselRef} className="tip-opening-carousel">
      {infiniteImages.map((img, idx) => (
        <div key={idx} className={`tip-opening-carousel-item carousel-item-${idx}`}>
          <img src={img} alt={`Image ${idx + 1}`} className="tip-opening-carousel-image" />
        </div>
      ))}
    </div>
  );
};

export default TipOpeningCarousel;