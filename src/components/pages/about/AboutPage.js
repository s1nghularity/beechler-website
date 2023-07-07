import "../../../styles/AboutPage.css";
import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";

import "animate.css";

import Masonry from "react-masonry-css";
import arbLoop from "../../../assets/img/about/arb-loop.gif";
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
import elmerT from "../../../assets/img/about/elmer-t.png";

import AboutTimelineNew from "../../../components/pages/about/AboutTimelineNew";
import AboutTimeline from "../../../components/pages/about/AboutTimeline";
import AboutCarousel from "./AboutCarousel";

import { ReactComponent as BackgroundSVG } from "../../pages/about/animatedwaves.svg";

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
    <Container className="about-page">
      <Row className="about-header">
        <Col xs={12}>
          <h1>Remlé Musical Products</h1>
        </Col>
        <Row>
          <Col xs={12} md={9}>
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
                joyful expression of life. That's why we pour our hearts and
                souls into every mouthpiece we create, meticulously handcrafting
                them to precise design specifications. Our mouthpieces are then
                play-tested by professional musicians and finished by skilled
                artisans to ensure the highest quality.
              </p>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="image-container">
              <Figure>
                <Figure.Image
                  className="figure-img elmer-image"
                  alt="Elmer Beechler"
                  src={elmerT}
                />
                <Figure.Caption>Elmer Beechler</Figure.Caption>
              </Figure>
            </div>
          </Col>
        </Row>
        <div className="background-svg-container">
          <BackgroundSVG
            className="background-svg"
            style={{ width: "100vw" }}
          />
        </div>
      </Row>

      <div>
        <AboutCarousel />
      </div>

      <Row className="about-footer">
        <Col sm={8}>
          <h1>American Made Since 1942</h1>
          <div className="about-text2">
            <p>
              Discover the joy of playing at your full potential with Remlé
              Musical Products.
              {/* <br />
              <FaHeart className="animate__animated animate__heartBeat animate__infinite	infinite about-heart" /> */}
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <img src={arbLoop} alt="Animated GIF" className="about-video" />
        </Col>
      </Row>

      <Row>
        <Col>
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
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
