import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarIcon from "@mui/icons-material/Star";
import CrownIcon from "@mui/icons-material/MilitaryTech";
import GlobeIcon from "@mui/icons-material/Public";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

import hexagon from "../../../assets/img/home/hexagon.png";
import "../../../styles/HomeTrio.css";
import "../../../styles/theme.css";

const GradientIcon = ({ icon: Icon }) => {
  return (
    <>
      <svg width="0" height="0">
        <linearGradient
          id="accent-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="#fbb034" offset="0%" />
          <stop stopColor="#ffdd00" offset="75%" />
        </linearGradient>
      </svg>
      <Icon sx={{ fill: "url(#accent-gradient)" }} style={{ fontSize: 30 }} />
    </>
  );
};

const CustomHexagon = ({ icon: Icon, text }) => {
  return (
    <div className="hilightCard">
      <div
        className="hexagon-container"
        style={{ backgroundImage: `url(${hexagon})` }}
      >
        <div className="hexagon-inner">
          <GradientIcon icon={Icon} className="hilightIcon" />
        </div>
      </div>
      <div className="hilight-text">{text}</div>
    </div>
  );
};

function HomeTrio() {
  const [isMobile, setIsMobile] = useState(false);
  const traits = [
    { icon: StarIcon, text: "Handcrafted Perfection" },
    { icon: CrownIcon, text: "Industry Veteran" },
    { icon: VolumeUpIcon, text: "Sensational Sound" },
    { icon: GlobeIcon, text: "Internationally Adored" },
  ];

  const updateWindowDimensions = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const renderDesktop = () => (
    <div className="d-flex justify-content-center">
      {traits.map((trait, index) => (
        <CustomHexagon key={index} icon={trait.icon} text={trait.text} />
      ))}
    </div>
  );

  const renderMobile = () => (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      showArrows={false}
      emulateTouch={true}
      infiniteLoop={false}
      centerMode={true}
      centerSlidePercentage={100}
    >
      {traits.map((trait, index) => (
        <div key={index} className="carousel-slide">
          <CustomHexagon icon={trait.icon} text={trait.text} />
        </div>
      ))}
    </Carousel>
  );
  
  

  return (
    <Container fluid className="hilightContainer stripe-trio">
      {isMobile ? renderMobile() : renderDesktop()}
    </Container>
  );
}

export default HomeTrio;
