import React, { useEffect, useRef } from "react";
import "../../../styles/TipOpeningCarousel.css";
import ig1 from "../../../assets/img/ig/ig1.png";
import ig2 from "../../../assets/img/ig/ig2.png";
import ig3 from "../../../assets/img/ig/ig3.png";
import ig4 from "../../../assets/img/ig/herbie-kae.jpg";
import ig5 from "../../../assets/img/ig/ig5.png";
import ig6 from "../../../assets/img/ig/ig6.png";
import ig7 from "../../../assets/img/ig/ig7.png";
import ig8 from "../../../assets/img/ig/ig8.png";
import ig9 from "../../../assets/img/ig/ig9.png";
import ig10 from "../../../assets/img/ig/stabe-wilson-chest.jpg";
import ig11 from "../../../assets/img/ig/ig11.png";
import ig12 from "../../../assets/img/ig/ig12.png";

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
          scrollAmount++;
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