import React from "react";
import { Card, Col } from "react-bootstrap";
import "../../../styles/ProductsPage.css";

import {

  ProductDescription,
} from "./ProductCardHelpers";

const ProductImage = ({ image }) => (
  <div className="product-image">
    <img src={image} alt="Product" />
  </div>
);


const ProductCard = ({ product }) => (
  <Col xs={12} md={4} key={product.id}>
    <Card className="product-card">
      <div className="product-card-container">
        <ProductImage image={product.image} id={product.id} />
        <ProductDescription product={product} />
      </div>
    </Card>
  </Col>
);

export default ProductCard;
