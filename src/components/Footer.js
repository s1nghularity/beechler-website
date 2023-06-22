import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import USA from "../assets/img/home/american-flag.svg";
import "../styles/Footer.css";

function Footer() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sections = [
    {
      title: "Company Overview",
      links: [
        { path: "/about", label: "About Us" },
        { path: "/commitment", label: "Our Commitment" },
      ],
    },
    {
      title: "FAQ",
      links: [{ path: "/faq", label: "Frequently Asked Questions" }],
    },
    {
      title: "Follow us",
      links: [
        {
          path: "https://www.facebook.com/beechlermouthpieces/",
          label: <FontAwesomeIcon icon={faFacebookF} size="lg" />,
          external: true,
        },
        {
          path: "https://www.instagram.com/beechler_mouthpieces/",
          label: <FontAwesomeIcon icon={faInstagram} size="lg" />,
          external: true,
        },
      ],
    },
    {
      title: "Legal",
      links: [
        { path: "/ca-transparency", label: "CA Transparency Act" },
        { path: "/sitemap", label: "Sitemap" },
      ],
    },
  ];

  return (
    <div className="stripe-footer">
      <footer className="footer">
        <Container>
          <Row>
            {sections.map((section) => (
              <Col md={3} className="footer-section" key={section.title}>
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.path}>
                      {link.external ? (
                        <a
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link to={link.path}>{link.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
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
