import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "../../../styles/theme.css";
import "../../../styles/HomeTestimonials.css";

export const testimonials = [
  {
    reviewBody:
      "Beechler makes the best mouthpieces in the world. Achieve a warm, rich, and bright tone with just the right reed and ligature setup. Every note sings beautifully.",
    author: "- Edwin Tan",
    itemReviewed: "Beechler Mouthpiece",
  },
  {
    reviewBody:
      "Beechler's rubber mouthpiece is a steal for its bright sound and amazing price. Comparable to expensive brands like SR Technologies and Jody Jazz. Used by popular saxophonists like Gerald Albright and Kenny G.",
    author: "- Michael",
    itemReviewed: "Beechler Mouthpiece",
  },
  {
    reviewBody:
      "The 8m Beechler mouthpiece is perfect for those who want a big, bright sound or a powerful low sub tone. Gives everything a Lakey has with more excitement than metal.",
    author: "- Elliot Chavers",
    itemReviewed: "Beechler Mouthpiece",
  },
]

const HomeTestimonials = () => {
  return (
    <Container
      className="home-testimonials stripe-home-testimonials"
      aria-label="Testimonials from Beechler customers"
    >
      <Row className="justify-content-center align-items-center">
        {[
          {
            reviewBody:
              "Beechler makes the best mouthpieces in the world. Achieve a warm, rich, and bright tone with just the right reed and ligature setup. Every note sings beautifully.",
            author: "- Edwin Tan",
            itemReviewed: "Beechler Mouthpiece",
          },
          {
            reviewBody:
              "Beechler's rubber mouthpiece is a steal for its bright sound and amazing price. Comparable to expensive brands like SR Technologies and Jody Jazz. Used by popular saxophonists like Gerald Albright and Kenny G.",
            author: "- Michael",
            itemReviewed: "Beechler Mouthpiece",
          },
          {
            reviewBody:
              "The 8m Beechler mouthpiece is perfect for those who want a big, bright sound or a powerful low sub tone. Gives everything a Lakey has with more excitement than metal.",
            author: "- Elliot Chavers",
            itemReviewed: "Beechler Mouthpiece",
          },
        ].map((testimonial, index) => (
          <Col key={index} md={3} className="testimonial-card">
            <blockquote>
              <p>{testimonial.reviewBody}</p>
              <footer>{testimonial.author}</footer>
            </blockquote>
            <div className="stars" aria-label="5 out of 5 stars">
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeTestimonials;
