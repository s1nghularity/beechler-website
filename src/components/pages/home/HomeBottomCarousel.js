import 'animate.css';

import { Carousel } from "react-responsive-carousel";
import { Container, Row, Col } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import about1 from "../../../assets/img/home/about/about1.webp";
import about2 from "../../../assets/img/home/about/about2.webp";
import about2h from "../../../assets/img/home/about/judy-group.webp";
import about3 from "../../../assets/img/home/about/about3.webp";
import about4 from "../../../assets/img/home/about/nbc-elmer.webp";
import about4bw from "../../../assets/img/home/about/nbc.webp";
import about5 from "../../../assets/img/home/about/hands2.webp";

import "../../../styles/HomeBottomCarousel.css";

function HomeBottomCarousel() {

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
                <img src={about4} alt="your alt text" />
                <p className="our-story-tag">Timeless style.</p>
              </div>
              <div className="our-story-slide">
                <img src={about2} alt="your alt text" />
                <p className="our-story-tag">Bespoke mouthpieces.</p>
              </div>
              <div className="our-story-slide">
                <img src={about2h} alt="your alt text" />
                <p className="our-story-tag">Technical excellence.</p>
              </div>
              <div className="our-story-slide">
                <img src={about3} alt="your alt text" />
                <p className="our-story-tag">Experience the difference.</p>
              </div>
            </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeBottomCarousel;