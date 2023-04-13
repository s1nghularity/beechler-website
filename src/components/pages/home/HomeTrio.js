import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faStar, faCrown, faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/HomePage.css";


function HomeTrio() {
  return (
    <Container className={`my-5 homeTrioContainer`}>
      <Row>
        <Col xs={12} md={4}>
          <div className={`trioCard`}>
            <FontAwesomeIcon
              icon={faStar}
              className={`homeTrioIcon`}
              style={{ color: "var(--accent)" }}
            />
            <p className={`homeTrioText`}>Excellent Service</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className={`trioCard`}>
            <FontAwesomeIcon
              icon={faCrown}
              className={`homeTrioIcon`}
              style={{ color: "var(--accent)" }}
            />
            <p className={`homeTrioText`}>Quality</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className={`trioCard`}>
            <FontAwesomeIcon
              icon={faHistory}
              className={`homeTrioIcon`}
              style={{ color: "var(--accent)" }}
            />
            <p className={`homeTrioText`}>Maturity</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeTrio;
