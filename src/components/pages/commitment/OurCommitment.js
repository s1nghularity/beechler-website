import React from "react";
import { Row, Col } from "react-bootstrap";
import tonalexGif from "../../../assets/img/tonalex-gif/tonalex-gif.gif";
import "../../../styles/OurCommitment.css";

const OurCommitment = () => {
  return (
    <div className="our-commitment-container" itemScope itemType="https://schema.org/AboutPage">
      <Row>
        <Col>
          <h1 itemProp="headline">Our Commitment</h1>
          <p itemProp="description">
            Anything wrong with your mouthpiece or accessory? Send it in! We
            want you to come to US before reaching out to other dealers.
            Beechler is committed to the fidelity and quality of our products
            and outside modifications make future quality control impossible.
            This is why we recommend you reach out to us if you have any
            issues before searching for other solutions.
          </p>
          <img className="tonalex-gif" src={tonalexGif} alt="Tonalex Gif" itemProp="image" autoPlay loop />
        </Col>
      </Row>
    </div>
  );
};

export default OurCommitment;
