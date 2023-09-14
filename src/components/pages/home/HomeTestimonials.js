import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "../../../styles/theme.css";
import "../../../styles/HomeTestimonials.css";

const HomeTestimonials = () => {
  return (
    <Container
      className="home-testimonials stripe-home-testimonials"
      itemScope
      itemType="http://schema.org/ItemList"
    >
      <Row className="justify-content-center align-items-center">
        {[
          {
            reviewBody: "Beechler makes the best mouthpieces in the world. Achieve a warm, rich, and bright tone with just the right reed and ligature setup. Every note sings beautifully.",
            author: "- Edwin Tan",
            itemReviewed: "Beechler Mouthpiece",
            price: 150,
            priceCurrency: "USD"
          },
          {
            reviewBody: "Beechler's rubber mouthpiece is a steal for its bright sound and amazing price. Comparable to expensive brands like SR Technologies and Jody Jazz. Used by popular saxophonists like Gerald Albright and Kenny G.",
            author: "- Michael",
            itemReviewed: "Beechler Mouthpiece",
            price: 150,
            priceCurrency: "USD"
          },
          {
            reviewBody: "The 8m Beechler mouthpiece is perfect for those who want a big, bright sound or a powerful low sub tone. Gives everything a Lakey has with more excitement than metal.",
            author: "- Elliot Chavers",
            itemReviewed: "Beechler Mouthpiece",
            price: 150,
            priceCurrency: "USD"
          }
        ].map((testimonial, index) => (
          <Col
            key={index}
            md={3}
            className="testimonial-card"
            itemScope
            itemType="http://schema.org/Review"
          >
            <blockquote>
              <p itemProp="reviewBody">{testimonial.reviewBody}</p>
              <footer itemProp="author">{testimonial.author}</footer>
            </blockquote>
            <div
              className="stars"
              aria-label="5 out of 5 stars"
              itemProp="reviewRating"
            >
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
              <FontAwesomeIcon icon={faStar} color="gold" />
            </div>
            <div itemProp="itemReviewed" itemScope itemType="http://schema.org/Product">
              <meta itemProp="name" content={testimonial.itemReviewed} />
              <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
                <meta itemProp="price" content={testimonial.price} />
                <meta itemProp="priceCurrency" content={testimonial.priceCurrency} />
                <meta itemProp="availability" content="http://schema.org/InStock" />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeTestimonials;