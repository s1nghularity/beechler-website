import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { Container, Row, Col } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import about1 from "../../../assets/img/home/about/about1.jpg";
import about2 from "../../../assets/img/home/about/about2.jpg";
import about2h from "../../../assets/img/home/about/hands2.png";
import about3 from "../../../assets/img/home/about/about3.jpg";
import about4 from "../../../assets/img/home/about/nbc-elmer.png";
import about4bw from "../../../assets/img/home/about/nbc.png";
import about5 from "../../../assets/img/home/about/hands2.png";

import "../../../styles/HomeAbout.css";

function HomeAbout() {


function handleSlideChange(index) {
  const slides = document.querySelectorAll(".our-story-slide");
  slides.forEach((slide, i) => {
    const caption = slide.querySelector(".our-story-tag");
    if (caption) {
      if (i === index) {
        slide.classList.add("fadeInMoveRight");
        caption.classList.add("fadeInMoveRight");
      } else {
        caption.addEventListener("transitionend", () => {
          slide.classList.remove("fadeInMoveRight");
          caption.classList.remove("fadeInMoveRight");
        }, { once: true });
        slide.classList.add("fadeOutMoveLeft");
        caption.classList.add("fadeOutMoveLeft");
      }
    }
  });
}

  return (
    <Container fluid className="home-about stripe-home-about">
      <Row className="home-about-row">
        <Col md={12} lg={12} className="home-about-left">
          <div>
            <h2 className="home-about-left-title">OUR STORY</h2>
            <p className="about-main-text">
            For over 77 years professional musicians and those who play for the joy and pleasure of the music have favored Beechler Mouthpieces.
            <br/><br/> 
            Join the ranks of saxophonists and woodwind players who trust Beechler for their mouthpieces and accessory needs.
            </p>
          </div>
        </Col>

        <Col md={12} lg={12} className="home-about-right">
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop
              autoPlay
              interval={8000}
              transitionTime={2000}
              onChange={handleSlideChange}
              stopOnHover={false}
              draggable={true}
              swipeable={true}
              className="our-story-carousel"
            >
              <div className="our-story-slide">
                <img src={about1} alt="your alt text" />
                <p className="our-story-tag">Unleash your sound.</p>
              </div>
              <div className="our-story-slide">
                <img src={about2} alt="your alt text" />
                <p className="our-story-tag">Crafted to perfection.</p>
              </div>
              <div className="our-story-slide">
                <img src={about2h} alt="your alt text" />
                <p className="our-story-tag">Crafted to perfection.</p>
              </div>
              <div className="our-story-slide">
                <img src={about3} alt="your alt text" />
                <p className="our-story-tag">Experience the difference.</p>
              </div>
              <div className="our-story-slide-nbc">
                <img src={about4} alt="your alt text" />
                <p className="our-story-tag">Unmatched in the industry.</p>
              </div>
              <div className="our-story-slide">
                <img src={about4bw} alt="your alt text" />
                <p className="our-story-tag">Timeless style and design.</p>
              </div>
              <div className="our-story-slide">
                <img src={about5} alt="your alt text" />
                <p className="our-story-tag">Pioneers of technique.</p>
              </div>
            </Carousel>

        </Col>
      </Row>
    </Container>
  );
}

export default HomeAbout;
