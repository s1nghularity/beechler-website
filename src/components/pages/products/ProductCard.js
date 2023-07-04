import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../../../styles/ProductsPage.css";

import {
  ProductIconRow,
  AccessoriesSection,
  ModelSection,
  LigatureTypeSection,
  FinishSection,
} from "../products/ProductCardSpecs";

const ProductDescription = ({ product }) => {
  const {
    price,
    ligatureType,
    finish,
    accessories,
    model,
  } = product;

  return (
    <Card className="product-card-description">
      <Row className="product-icon-row">
        <ProductIconRow product={product} />
      </Row>

      <Row className="product-info-row">
        {ligatureType && <LigatureTypeSection ligatureType={ligatureType} />}
        {finish && <FinishSection finish={finish} />}
        {accessories && <AccessoriesSection accessories={accessories} />}
        {model && <ModelSection model={model} />}
        <Card.Text className="price">MSRP ${price}</Card.Text>
      </Row>
    </Card>
  );
};

const ProductCard = ({ product }) => (
  <Col xs={12} md={4} key={product.id}>
    <Card className="product-card">
      <div className="product-card-container">
        <div className="product-image">
          <img src={product.image} alt="Product" />
        </div>
        <ProductDescription product={product} />
      </div>
    </Card>
  </Col>
);

export default ProductCard;
