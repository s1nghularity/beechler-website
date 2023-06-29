import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../../styles/OurCommitment.css";

const OurCommitment = () => {
  return (
    <div
      className="our-commitment-container"
    >

        <Row>
          <Col>
            <h1>Our Commitment</h1>
            <p>
              Anything wrong with your mouthpiece or accessory? Send it in! We
              want you to come to US before reaching out to other dealers.
              Beechler is committed to the fidelity and quality of our products
              and outside modifications make future quality control impossible.
              This is why we recommend you reach out to us if you have any
              issues before searching for other solutions.
            </p>
          </Col>
        </Row>

    </div>
  );
};

export default OurCommitment;