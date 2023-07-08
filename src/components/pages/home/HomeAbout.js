import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { Container, Row, Col } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import about1 from "../../../assets/img/home/about/about1.jpg";
import about2 from "../../../assets/img/home/about/about2.jpg";
import about3 from "../../../assets/img/home/about/about3.jpg";
import about4 from "../../../assets/img/home/the-hair.png";
import "../../../styles/HomeAbout.css";

function HomeAbout() {

  useEffect(() => {
    const handleWindowResize = () => {
      const screenWidth = window.innerWidth;
      const customColumnWidth = getCustomColumnWidth(screenWidth);
      document.documentElement.style.setProperty(
        "--custom-column-width",
        customColumnWidth
      );
    };

    window.addEventListener("resize", handleWindowResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const getCustomColumnWidth = (screenWidth) => {
    if (screenWidth >= 768 && screenWidth <= 1312) {
      return "15%";
    }

    return null;
  };
  
function handleSlideChange(index) {
  const slides = document.querySelectorAll(".slide");
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
        <Col md={4} lg={3} className="home-about-left">
          <div>
            <h2>OUR STORY</h2>
            <p className="about-main-text">
            Musicians have always loved our work.<br/><br/> Join the ranks of saxophonists and woodwind players who trust Beechler for their mouthpiece and accessory needs.<br/><br/> <i> Elevate your playing experience today.</i>
            </p>
          </div>
        </Col>

        <Col md={8} lg={9} className="home-about-right">
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
            >
              <div className="slide">
                <img src={about1} alt="your alt text" />
                <p className="our-story-tag">Unleash your sound.</p>
              </div>
              <div className="slide">
                <img src={about2} alt="your alt text" />
                <p className="our-story-tag">Crafted to perfection.</p>
              </div>
              <div className="slide">
                <img src={about3} alt="your alt text" />
                <p className="our-story-tag">Experience the difference.</p>
              </div>
              <div className="slide">
                <img src={about4} alt="your alt text" />
                <p className="our-story-tag">A firmament of industry.</p>
              </div>
            </Carousel>

        </Col>
      </Row>
    </Container>
  );
}

export default HomeAbout;
