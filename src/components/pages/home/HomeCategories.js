import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../../styles/HomeCategories.css";
import beechlerArb from "../../../assets/img/home/beechler-arb.png";
// Import the images
import c13 from "../../../assets/img/home/categories/arb-custom-metal-C13.png";
import a83 from "../../../assets/img/home/categories/arb-metal-A83.png";
import t02 from "../../../assets/img/home/categories/beechler-arb-caps-T02.png";
import l01p from "../../../assets/img/home/categories/beechler-arb-ligatures-L01P.png";
import b82 from "../../../assets/img/home/categories/beechler-bellite-B82.png";
import c32 from "../../../assets/img/home/categories/beechler-custom-bellite-C32.png";
import c88 from "../../../assets/img/home/categories/beechler-legacy-C88.png";
import b21 from "../../../assets/img/home/categories/beechler-tonalex-B21.png";
import b07 from "../../../assets/img/home/categories/beechler-white-diamond-B07.png";

import diamond from "../../../assets/img/home/categories/diamond-family.png";
import tonalex from "../../../assets/img/home/categories/tonalex-family.png";
import bellite from "../../../assets/img/home/categories/bellite-family.png";
/*TODO:NEED HARD RUBBER*/
import customized from "../../../assets/img/home/categories/custom-family.png";
import arb from "../../../assets/img/home/categories/arb-metal-family.png";
import gnog from "../../../assets/img/home/categories/gnog-family.png";

const categories = [
  { name: "Beechler Diamond", type: "beechler", image: diamond },
  { name: "Beechler Tonalex", type: "beechler", image: tonalex },
  { name: "Beechler Bellite", type: "beechler", image: bellite },
 { name: "Beechler Hard Rubber", type: "beechler", image: diamond },  /*TODO:NEED HARD RUBBER*/

  { name: "Beechler Customized", type: "beechler", image: customized },
  { name: "ARB Metal", type: "arb", image: arb },
  { name: "Great Neck Original", type: "arb", image: gnog },

  { name: "Beechler Legacy", type: "beechler", image: c88 },
  { name: "Custom Beechler Bellite", type: "beechler", image: c32 },

  { name: "ARB Custom Metal", type: "arb", image: c13 },
  { name: "Beechler & ARB Ligatures", type: "both", image: l01p },
  { name: "Beechler & ARB Caps", type: "both", image: t02 },
  { name: "Pegs", type: "beechler", image: t02 },
  { name: "Accessories", type: "both", image: t02 },
  { name: "", type: "both", image: beechlerArb, className:"beechler-arb-logo"},
];

function HomeCategories() {
  return (
    <div className="stripe-categories">
      <div className="home-categories">
        <h2>Our Mouthpieces</h2>
        <Container>
        <Row className="categories-grid">
            {categories.map((category, index) => (
              <Col key={index} md={4} sm={6} className="category-col">
                <Link
                  key={index}
                  to={`/products?category=${encodeURIComponent(category.name)}`}
                  className="category-link"
                >
                  <Card className="category-card">
                    <Card.Body>
                      <div className="category-content">
                        <img
                          src={category.image}
                          alt={category.name}
                          className={`category-image ${category.className || ""}`}
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
