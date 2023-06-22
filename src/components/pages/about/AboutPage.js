import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "../../../styles/AboutPage.css";
import arbLoop from "../../../assets/img/about/arb-loop.mp4";
import Masonry from 'react-masonry-css';
import NAMM2019 from "../../../assets/img/about/NAMM-2019.jpg";
import Group from "../../../assets/img/about/Group.jpg";
import Jim from "../../../assets/img/about/Jim.jpg";

const timelineData = [
  {
    type: "text",
    content: "Founded by Elmer Beechler in 1942, we design, manufacture, and distribute outstanding saxophone and clarinet mouthpieces and woodwind accessories.",
  },
  {
    type: "image",
    src: NAMM2019,
  },
  {
    type: "text",
    content: "Remlé Musical Products, Inc. has been under the direction of Elmer Beechler’s daughter, Judy Beechler Roan, since 1993.",
  },
  {
    type: "image",
    src: Group,
  },
  {
    type: "text",
    content: "We believe we make the best mouthpieces in the world for the professional musician and players who want to play well for the simple pleasure and joy of it.",
  },
  {
    type: "image",
    src: Jim,
  },
];

const gridImages = Array(12).fill().map((_, i) => `https://picsum.photos/400/300?random=${i+3}`);

const TimelineItem = ({ item }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateX(0)"
      : item.direction === "left"
      ? "translateX(-100px)"
      : "translateX(100px)",
    config: { mass: 5, tension: 500, friction: 80 },
  });

  switch (item.type) {
    case "text":
      return <p>{item.content}</p>;
    case "image":
      return <img src={item.src} alt="" />;
    default:
      return null;
  }
};

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Remle Musical Products</h1>
        <div className="about-video">
          <video src={arbLoop} autoPlay loop muted />
        </div>
        <div className="about-text">
          <p>
            We are a women-owned, family-owned, handcrafted artisans business.
          </p>
        </div>
      </div>
      <div className="about-timeline">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
      <div className="about-grid">
        {gridImages.map((src, index) => (
          <img key={index} src={src} alt="" className="grid-image" />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
