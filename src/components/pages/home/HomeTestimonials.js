import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "../../../styles/theme.css";
import "../../../styles/HomeTestimonials.css";

const HomeTestimonials = () => {
    return (
        <Container fluid className="home-testimonials stripe-home-dealer">
          <Row className="justify-content-center align-items-center">
        <Col md={3} className="testimonial-card">
          <blockquote>
            <p>
              Beechler makes the best mouthpieces in the world. Achieve a warm,
              rich, and bright tone with just the right reed and ligature setup.
              Every note sings beautifully.
            </p>
            <footer>- Edwin Tan</footer>
          </blockquote>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} color="gold" />
            <FontAwesomeIcon icon={faStar} color="gold" />
            <FontAwesomeIcon icon={faStar} color="gold" />
            <FontAwesomeIcon icon={faStar} color="gold" />
            <FontAwesomeIcon icon={faStar} color="gold" />
          </div>
        </Col>

        <Col md={3} className="testimonial-card">
          <blockquote>
            <p>
              Beechler's rubber mouthpiece is a steal for its bright sound and
              amazing price. Comparable to expensive brands like SR Technologies
              and Jody Jazz. Used by popular saxophonists like Gerald Albright
              and Kenny G.
            </p>
            <footer>- Michael</footer>
          </blockquote>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} color="gold" />
            <FontAwesomeIcon icon={faStar} color="gold" />
            <FontAwesomeIcon icon={faStar} color="gold" />
            <FontAwesomeIcon icon={faStar} color="gold" />
            <FontAwesomeIcon icon={faStar} color="gold" />
          </div>
        </Col>

        <Col md={3} className="testimonial-card">
          <blockquote>
            <p>
              he 8m Beechler mouthpiece is perfect for those who want a big,
              bright sound or a powerful low sub tone. Gives everything a Lakey
              has with more excitement than metal.
            </p>
            <footer>- Elliot Chavers</footer>
          </blockquote>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} color="gold" />
            <FontAwesomeIcon icon={faStar} color="gold" />
            <FontAwesomeIcon icon={faStar} color="gold" />
            <FontAwesomeIcon icon={faStar} color="gold" />
            <FontAwesomeIcon icon={faStar} color="gold" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeTestimonials;
