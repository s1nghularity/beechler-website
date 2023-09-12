import 'animate.css';
import { Carousel } from "react-responsive-carousel";
import { Container, Row, Col } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import about1 from "../../../assets/img/home/about/about1.webp";
import about2 from "../../../assets/img/home/about/about2.webp";
import about2h from "../../../assets/img/home/about/judy-group.webp";
import about3 from "../../../assets/img/home/about/about3.webp";
import about4 from "../../../assets/img/home/about/nbc-elmer.webp";
import about5 from "../../../assets/img/home/about/hands2.webp";

import "../../../styles/HomeBottomCarousel.css";

const carouselImages = [
  { src: about1, alt: "Unleash your sound", tag: "Unleash your sound." },
  { src: about4, alt: "Timeless style", tag: "Timeless style." },
  { src: about2, alt: "Bespoke mouthpieces", tag: "Bespoke mouthpieces." },
  { src: about2h, alt: "Technical excellence", tag: "Technical excellence." },
  { src: about3, alt: "Experience the difference", tag: "Experience the difference." },
];

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
    <Container fluid className="home-about stripe-home-about" itemScope itemType="http://schema.org/ImageGallery">
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
            {carouselImages.map((image, index) => (
              <div className="our-story-slide" key={index}>
                <img src={image.src} alt={image.alt} itemProp="image" />
                <p className="our-story-tag" aria-label={image.tag}>{image.tag}</p>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeBottomCarousel;
