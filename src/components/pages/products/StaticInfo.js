import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const StaticInfo = () => {
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
              <li>
              Bellite & Metal mouthpieces cast by the Lost Wax method in surgical stainless steel.
              </li>
              <li>Saxophone tip openings range from 4-10. </li>
              <li>Clarinet tip openings range from 1-12. </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default StaticInfo;
