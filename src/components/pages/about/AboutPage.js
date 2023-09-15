import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";

import arbLoop from "../../../assets/img/about/arb-loop.gif";
import elmerT from "../../../assets/img/about/elmer-oval.webp";
import AboutCarousel from "./AboutCarousel";

import Wave from "./Wave";

const AboutPage = () => {
  return (
    <Container className="about-page" role="main">
      <Row className="about-header">
        <Col xs={12}>
          <h1>Remlé Musical Products</h1>
        </Col>
        <Row>
          <Col xs={12} md={8}>
            <div className="elmer-about-container float-right">
              <Figure>
                <Figure.Image
                  className="elmer-about"
                  alt="Elmer Beechler"
                  src={elmerT}
                />
                <Figure.Caption className="elmer-tag">
                  Elmer Beechler
                </Figure.Caption>
              </Figure>
            </div>

            <div className="about-header-text">
              <p className="intro-letter">
                Founded by Elmer Beechler in 1942, we design, manufacture, and
                distribute outstanding saxophone and clarinet mouthpieces and
                woodwind accessories. Elmer's passion for music and vision for
                creating mouthpieces continues to inspire and enhance the
                playing experience of professional musicians all over the world
                today. <br />
                <br />
                At Remlé, we believe that music is not just a profession, but a
                joyful expression of life. That is why we pour our hearts and
                souls into every mouthpiece we create, meticulously handcrafting
                them to precise design specifications. Our mouthpieces are then
                play-tested by professional musicians and finished by skilled
                artisans to ensure the highest quality.
                <br />
                <br />
                Remlé Musical Products, Inc. has been under the direction of
                Elmer Beechler's daughter, Judy Beechler Roan, since 1993. We
                believe we make the best mouthpieces in the world for the
                professional musician and players who want to play well for the
                simple pleasure and joy of it.
                <br />
                <br />
              </p>
            </div>
          </Col>
        </Row>
      </Row>

      <Wave />

      <div>
        <AboutCarousel />
      </div>

      <Row className="about-footer">
        <Col sm={12} lg={8} className="about-footer-text-container">
          <div className="about-text2">
            <p>
              Discover the joy of playing at your full potential with Remlé
              Musical Products.
            </p>
          </div>
        </Col>
        <Col sm={12} lg={4}>
          <img src={arbLoop} alt="Animated GIF" className="about-video" />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
