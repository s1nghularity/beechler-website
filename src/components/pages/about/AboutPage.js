import "../../../styles/AboutPage.css";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Masonry from "react-masonry-css";
import { FiMusic } from "react-icons/fi";
import arbLoop from "../../../assets/img/about/arb-loop.mp4";
import NAMM2019 from "../../../assets/img/about/NAMM-2019.jpg";
import Group from "../../../assets/img/about/Group.jpg";
import Jim from "../../../assets/img/about/Jim.jpg";
import { FaHeart } from "react-icons/fa";

const timelineData = [
  {
    type: "text",
    content:
      "Founded by Elmer Beechler in 1942, we design, manufacture, and distribute outstanding saxophone and clarinet mouthpieces and woodwind accessories.",
    image: NAMM2019,
  },
  {
    type: "text",
    content:
      "Remlé Musical Products, Inc. has been under the direction of Elmer Beechler’s daughter, Judy Beechler Roan, since 1993.",
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
  NAMM2019,
  Group,
  Jim,
  NAMM2019,
  Group,
  Jim,
  NAMM2019,
  Group,
  Jim,
  // Add more images here
];

const AboutPage = () => {
  return (
    <ParallaxProvider>
      <div className="about-page">
        <div className="about-header">
          <h1>Remlé Musical Products</h1>
          <div className="about-video">
            <video src={arbLoop} autoPlay loop muted className="about-video"/>
          </div>
          <div className="about-text">
            <p>
              We are a family-owned <FaHeart className="about-heart" /> women-led business, <br/>
              making mouthpieces for over 75 years.
            </p>
          </div>
        </div>

        <div className="parallax-container">{renderParallaxSections()}</div>

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
