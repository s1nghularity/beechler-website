import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../../styles/HomeCategories.css";

import diamond from "../../../assets/img/products/diamond/diamond-family.webp";
import tonalex from "../../../assets/img/products/tonalex/tonalex-family.webp";
import bellite from "../../../assets/img/products/bellite/bellite-family.webp";
import hardRubber from "../../../assets/img/products/hard-rubber/hard-rubber-family.webp";
import customized from "../../../assets/img/home/categories/custom-family.webp";
import arb from "../../../assets/img/products/arb-metal/arb-metal-family.webp";
import gnog from "../../../assets/img/products/greatneck/og-family.webp";
import accessories from "../../../assets/img/home/categories/accessories.webp";

const categories = [
  { name: "Beechler Diamond", type: "beechler", image: diamond },
  { name: "Beechler Tonalex", type: "beechler", image: tonalex },
  { name: "Beechler Bellite", type: "beechler", image: bellite },
  { name: "Beechler Hard Rubber", type: "beechler", image: hardRubber },
  { name: "Beechler Customized", type: "beechler", image: customized },
  { name: "ARB Metal", type: "arb", image: arb },
  { name: "ARB Great Neck Originals", type: "arb", image: gnog },
  { name: "Accessories & Services", type: "both", image: accessories },
];

function HomeCategories() {
  return (
    <div className="stripe-categories">
      <div className="home-categories">
        <h2>OUR MOUTHPIECES</h2>
        <Container>
          <Row className="categories-grid">
            {categories.map((category, index) => (
              <Col key={index} lg={6} md={12} sm={12} className="category-col">
                <Link
                  key={index}
                  to={`/products?category=${encodeURIComponent(category.name)}`}
                  className="category-link"
                  aria-label={`View products in ${category.name} category`}
                >
                  <Card className="category-card">
                    <Card.Body>
                      <div className="category-content">
                        <img
                          src={category.image}
                          alt={category.name}
                          className={`category-image ${
                            category.className || ""
                          }`}
                        />
                        <div className="category-text">{category.name}</div>
                      </div>
                    </Card.Body>
                  </Card>
                  <div className="category-line"></div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomeCategories;
