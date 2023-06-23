import "../../../styles/AboutPage.css";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Masonry from "react-masonry-css";
import { FiMusic } from "react-icons/fi";
import arbLoop from "../../../assets/img/about/arb-loop.mp4";
import jazzlight from "../../../assets/img/about/jazzlight.mp4";
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

import { FaHeart } from "react-icons/fa";
import beechlerArb from "../../../assets/img/home/beechler-arb.png";
/*import colored american flag icon*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";

/*import family icon*/

import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { FaFamily } from "react-icons/fa";

const timelineData = [
  {
    type: "text",
    content:
      "Founded by Elmer Beechler in 1942, we design, manufacture, and distribute outstanding saxophone and clarinet mouthpieces and woodwind accessories.",
    image: elmer,
  },
  {
    type: "text",
    content:
      "Remlé Musical Products, Inc. has been under the direction of Elmer Beechler’s daughter, Judy Roan Beechler, since 1993.",
    image: Group,
  },
  {
    type: "text",
    content:
      "We believe we make the best mouthpieces in the world for the professional musician and players who want to play well for the simple pleasure and joy of it.",
    image: Jim,
  },
];

const renderParallaxSections = () => {
  return timelineData.map((item, index) => (
    <Parallax
      key={index}
      className={`parallax-section ${index % 2 === 0 ? "inverse" : ""}`}
      y={[-30, 30]}
    >
      <img src={item.image} alt="" className="parallax-image" />
      <div className="parallax-text">
        <p>{item.content}</p>
      </div>
    </Parallax>
  ));
};

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

  // Add more images here
];

const AboutPage = () => {
  return (
    <ParallaxProvider>
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

        <div className="parallax-container">{renderParallaxSections()}</div>

        <div className="about-header">
          <h1>American Made Since 1942</h1>
          <div className="about-video2">
            <video
              src={jazzlight}
              autoPlay
              loop
              muted
              className="about-video2"
            />
          </div>
          <div className="about-text">
            <p>
              Discover the joy of playing at your full potential with Remlé
              Musical Products.
              <br />
              <FaHeart className="about-heart" />
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
    </ParallaxProvider>
  );
};

export default AboutPage;
