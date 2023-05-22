import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import USA from "../assets/img/home/american-flag.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="stripe-footer">
      <footer className="footer">
        <Container>
          <Row>
            <Col md={3} className="footer-section">
              <h4>Company Overview</h4>
              <ul>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/commitment">Our Commitment</a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="footer-section">
              <h4>FAQ</h4>
              <ul>
                <li>
                  <a href="/faq">Frequently Asked Questions</a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="footer-section">
              <h4>Follow us</h4>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/beechlermouthpieces/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FontAwesomeIcon icon={faFacebookF} size="lg" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/beechler_mouthpieces/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="/data-rights-request">Data Rights Request</a>
                </li>
                <li>
                  <a href="/terms">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/privacy">Your Privacy Rights</a>
                </li>
                <li>
                  <a href="/ca-transparency">CA Transparency Act</a>
                </li>
                <li>
                  <a href="/sitemap">Sitemap</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Col lg={12} className="usa-container">
            <div className="made-in-usa">
              <p>
                Made in
                <br />
                <img className="usa-flag" src={USA} alt="Made in the USA" />
                <br />
                since 1942
              </p>
            </div>
          </Col>
          <div className="footer-bottom">
            <p>Accessibility Statement</p>
            <p>
              ©2023 All rights reserved. | beechler.com | Saxophone Mouthpieces,
              Clarinet Mouthpieces | Crafted with care by S1nghularity
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
