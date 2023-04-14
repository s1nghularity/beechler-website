import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import { faStar, faCrown, faHistory, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/HomePage.css";
import "../../../styles/theme.css"; // Import your theme.css

function HomeTrio() {
  const traits = [
    { icon: faStar, text: "Musicians Choice" },
    { icon: faCrown, text: "Unrivaled Handmade Quality" },
    { icon: faHistory, text: "Industry Veteran" },
    { icon: faGlobe, text: "Internationally Adored" },
  ];

  return (
    <Container className="my-5 homeTrioContainer">
      <Row className="justify-content-center">
        {traits.map((trait, index) => (
          <div key={index} className="trioCard">
            <div className="hexagon">
              <svg className="icon-svg" viewBox="0 0 32 32" style={{ width: "2.5rem", height: "2.5rem" }}>
                <FontAwesomeIcon icon={trait.icon} className="homeTrioIcon icon-gradient" />
              </svg>
            </div>
            <p className="homeTrioText">{trait.text}</p>
          </div>
        ))}
      </Row>
      <Carousel className="d-md-none">
        {traits.map((trait, index) => (
          <Carousel.Item key={index}>
            <div className="trioCard d-flex justify-content-center">
              <div className="hexagon">
                <svg className="icon-svg" viewBox="0 0 32 32" style={{ width: "2.5rem", height: "2.5rem" }}>
                  <FontAwesomeIcon icon={trait.icon} className="homeTrioIcon icon-gradient" />
                </svg>
              </div>
              <p className="homeTrioText">{trait.text}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default HomeTrio;