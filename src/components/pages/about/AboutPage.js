import "../../../styles/AboutPage.css";
import React from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import "animate.css";
import Masonry from "react-masonry-css";
import arbLoop from "../../../assets/img/about/arb-loop.mp4";
import NAMM2019 from "../../../assets/img/about/NAMM-2019.jpg";
import Group from "../../../assets/img/about/Group.jpg";
import Jim from "../../../assets/img/about/Jim.jpg";
import Jim2 from "../../../assets/img/about/Jim2.png";
import Charles from "../../../assets/img/about/Charles.jpg";
import fiftiesAd from "../../../assets/img/about/1953ad.JPG";
import history from "../../../assets/img/about/history.jpg";
import elmer from "../../../assets/img/about/elmer.jpg";
import kenny from "../../../assets/img/about/kenny.jpg";
import namm20 from "../../../assets/img/about/namm20.jpg";
import Max from "../../../assets/img/about/Max.jpg";
import isaac from "../../../assets/img/about/Isaac.jpg";
import kid from "../../../assets/img/about/kid.jpg";
import everette from "../../../assets/img/about/everette.jpg";
import vibes from "../../../assets/img/about/vibes.jpg";
import AboutTimeline from "../../../components/pages/about/AboutTimeline";
import { FaHeart } from "react-icons/fa";

const masonryImages = [
  NAMM2019,
  Group,
  Jim,
  history,
  Jim2,
  fiftiesAd,
  kenny,
  namm20,
  Charles,
  Max,
  isaac,
  elmer,
  kid,
  everette,
  Group,
  vibes,
];

const AboutPage = () => {
  return (

    <div className="about-page">
      <div className="about-header">
        <h1>Remlé Musical Products</h1>

        <div className="about-text">
          <p>
            Family-owned women-led business, <br />
            <div className="about-video">
              <video
                src={arbLoop}
                autoPlay
                loop
                muted
                className="about-video"
              />
            </div>
            making mouthpieces for over 75 years.
          </p>
        </div>
      </div>

      <div >
        <AboutTimeline />
      </div>

      <div className="about-footer">
        <h1>American Made Since 1942</h1>

        <div className="about-text2">
          <p>
            Discover the joy of playing at your full potential with Remlé
            Musical Products.
            <br />
            <FaHeart className="animate__animated animate__heartBeat animate__infinite	infinite about-heart" />
          </p>
        </div>
      </div>

      <div className="masonry-container">
        <Masonry
          breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {masonryImages.map((image, index) => (
            <img key={index} src={image} alt="" />
          ))}
        </Masonry>
      </div>
    </div>

  );
};

export default AboutPage;
