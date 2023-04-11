import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faStar, faCrown, faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Home.module.css"; // Import styles

function HomeTrio() {
  return (
    <Container className={`my-5 ${styles.homeTrioContainer}`}>
      <Row>
        <Col xs={12} md={4}>
          <div className={styles.trioCard}>
            <FontAwesomeIcon
              icon={faStar}
              className={styles.homeTrioIcon}
              style={{ color: "var(--accent)" }}
            />
            <p className={styles.homeTrioText}>Excellent Service</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className={styles.trioCard}>
            <FontAwesomeIcon
              icon={faCrown}
              className={styles.homeTrioIcon}
              style={{ color: "var(--accent)" }}
            />
            <p className={styles.homeTrioText}>Quality</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className={styles.trioCard}>
            <FontAwesomeIcon
              icon={faHistory}
              className={styles.homeTrioIcon}
              style={{ color: "var(--accent)" }}
            />
            <p className={styles.homeTrioText}>Maturity</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeTrio;
