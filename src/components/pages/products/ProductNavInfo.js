import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ProductNavInfo = ({ infoContent, selectedInstrument }) => {
  return (
    <Container>
      <Row className="product-nav-info-container">
        <Col>
          <div className="static-info">
            <h3>General Product Information</h3>
            <ul>
              <li>
                All Beechler and ARB mouthpieces have been lab tested and proven
                safe for all long and short term human contact according to
                Reach compliance standards.
              </li>
              <li>
                If using Legere reeds please specify. This requires a different
                facing length.
              </li>
              <li>
                All bite plates on metal mouthpieces are inlaid using rubber and
                are not applied with epoxy.
              </li>
              <li>Saxophone tip openings range from 4-10. </li>
              <li>Clarinet tip openings range from 1-12. </li>
            </ul>
          </div>
        </Col>

        <Col>
          <div className="dynamic-info">
            <h3>{infoContent ? infoContent : "Select a Category"}</h3>
            {infoContent === "Saxophones" ||
              (selectedInstrument === "Saxophone" && (
                <ul>
                  <li>
                    We offer a wide range of saxophones for all skill levels.
                  </li>
                  <li>Our saxophones come with a 1-year warranty.</li>
                  <li>
                    Accessories such as reeds and mouthpieces are also
                    available.
                  </li>
                </ul>
              ))}
            {infoContent === "Clarinets" ||
              (selectedInstrument === "Clarinet" && (
                <ul>
                  <li>
                    We offer a wide range of clarinets for all skill levels.
                  </li>
                  <li>Our clarinets come with a 1-year warranty.</li>
                  <li>
                    Accessories such as reeds and mouthpieces are also
                    available.
                  </li>
                </ul>
              ))}
          </div>
        </Col>

        
      </Row>
    </Container>
  );
};

export default ProductNavInfo;
