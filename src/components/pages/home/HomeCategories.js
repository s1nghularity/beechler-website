import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../../styles/HomeCategories.css";


import diamond from "../../../assets/img/home/categories/diamond-family.png";
import tonalex from "../../../assets/img/home/categories/tonalex-family.png";
import bellite from "../../../assets/img/home/categories/bellite-family.png";
/*TODO:NEED HARD RUBBER*/
import customized from "../../../assets/img/home/categories/custom-family.png";
import arb from "../../../assets/img/home/categories/arb-metal-family.png";
import gnog from "../../../assets/img/home/categories/gnog-family.png";
import accessories from "../../../assets/img/home/categories/accessories.png";




const categories = [
  { name: "Beechler Diamond", type: "beechler", image: diamond },
  { name: "Beechler Tonalex", type: "beechler", image: tonalex },
  { name: "Beechler Bellite", type: "beechler", image: bellite },
  { name: "Beechler Hard Rubber", type: "beechler", image: diamond },  /*TODO:NEED HARD RUBBER*/
  { name: "Beechler Customized", type: "beechler", image: customized },
  { name: "ARB Metal", type: "arb", image: arb },
  { name: "ARB Great Neck Originals", type: "arb", image: gnog },
  { name: "Accessories & Services", type: "both", image: accessories },
];

function HomeCategories() {
  return (
    <div className="stripe-categories">
      <div className="home-categories">
        <h2>Our Mouthpieces</h2>
        <Container>
        <Row className="categories-grid">
            {categories.map((category, index) => (
              <Col key={index} lg={6} md={6} sm={12} className="category-col">
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
