import React from "react";
import { Container } from "react-bootstrap";
import StarIcon from "@mui/icons-material/Star";
import CrownIcon from "@mui/icons-material/MilitaryTech";
import HistoryIcon from "@mui/icons-material/History";
import GlobeIcon from "@mui/icons-material/Public";
import "../../../styles/HomePage.css";
import "../../../styles/theme.css"; // Import your theme.css

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
          <stop stopColor="#ffdd00" offset="74%" />
        </linearGradient>
      </svg>
      <Icon sx={{ fill: "url(#accent-gradient)" }} />
    </>
  );
};

const Hexagon = ({ icon: Icon, text }) => {
  return (
    <div className="hilightCard">
      <div className="hexagon-container">
        <div className="hexagon">
          <div className="hexagon-inner">
            <GradientIcon icon={Icon} className="hilightIcon" />
          </div>
        </div>
      </div>
      <p className="hilight-text">{text}</p>
    </div>
  );
};

function HomeTrio() {
  const traits = [
    { icon: StarIcon, text: "Musicians Choice" },
    { icon: CrownIcon, text: "Unrivaled Handmade Quality" },
    { icon: HistoryIcon, text: "Industry Veteran" },
    { icon: GlobeIcon, text: "Internationally Adored" },
  ];

  return (
    <Container fluid className="hilightContainer">
      <div className="d-flex justify-content-center">
        {traits.map((trait, index) => (
          <Hexagon key={index} icon={trait.icon} text={trait.text} />
        ))}
      </div>
    </Container>
  );
}

export default HomeTrio;
