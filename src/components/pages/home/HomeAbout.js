import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import about1 from "../../../assets/img/home/about/about1.jpg";
import about2 from "../../../assets/img/home/about/about2.jpg";
import about3 from "../../../assets/img/home/about/about3.jpg";
import "../../../styles/HomeAbout.css";

function HomeAbout () {

  function handleSlideChange(index) {
    console.log("Slide changed to:", index);
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
      const caption = slide.querySelector(".about-section-tag");
      if (caption) {
      if (i === index) {
        caption.classList.add("fadeInMoveRight");
      } else {
        caption.classList.remove("fadeInMoveRight");
      }
    }
    });
  }

  
  return (
    <div className="home-about container-fluid">
      <div className="row home-about-row">

        <div className="col-md-4 home-about-left">
          <div>
            <h2>OUR STORY</h2>
            <p className="about-main-text">
              Beechler mouthpieces and accessories inspire and enhance the
              playing experience of professional musicians. Our handcrafted
              mouthpieces offer infinite choice to suit varying embouchures,
              reed preferences, and playing styles.
            </p>
            <p className="about-supplemental-text">
              Our passion for music and dedication to quality is what makes
              Beechler stand out. Join the ranks of saxophonists and woodwind
              players who trust Beechler for their mouthpiece and accessory
              needs. Elevate your playing experience today.
            </p>
          </div>
        </div>

        <div className="col-md-8 home-about-right">
        <div className="carousel-wrapper">
          <Carousel 
            cssClass="fadeInMoveRight"
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop
            autoPlay
            interval={8000}
            transitionTime={2000}
            onChange={handleSlideChange}
              
          >
            <div className="slide">
              <img src={about1} alt="your alt text" />
              <p className="about-section-tag">Unleash your sound.</p>
            </div>
            <div className="slide">
              <img src={about2} alt="your alt text" />
              <p className="about-section-tag">Crafted to perfection.</p>
            </div>
            <div className="slide">
              <img src={about3} alt="your alt text" />
              <p className="about-section-tag">Experience the difference.</p>
            </div>
          </Carousel>
        </div>
        </div>

      </div>
    </div>
  );
};

export default HomeAbout;
