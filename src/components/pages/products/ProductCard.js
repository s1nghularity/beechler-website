import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../../../styles/ProductsPage.css";

import {
  ProductIconRow,
  AccessoriesSection,
  ModelSection,
  LigatureTypeSection,
  FinishSection,
  BoreSection,
  CustomBubble,
} from "../products/ProductCardSpecs";


const selectedProductIds = [
  "B10",
  "B11",
  "B12",
  "B14",
  "B19",
  "B18",
  "B20",
  "B21",
];

const ProductDescription = ({ product }) => {
  const {
    id,
    name,
    price,
    category,
    ligatureType,
    finish,
    accessories,
    model,
    bore,
  } = product;

  const isCustomModel = (id) => {
    return id && (id.startsWith("C") || id.includes("/C"));
  };

  return (
    <Card
      className="product-card-description"
      itemScope
      itemType="http://schema.org/Product"
    >
      <meta itemProp="name" content={name} />
      <meta itemProp="category" content={category} />
      <meta itemProp="price" content={price} />
      <meta itemProp="priceCurrency" content="USD" />
      <meta itemProp="availability" content="InStock" />
      <Row className="product-icon-row">
        <ProductIconRow product={product} />
      </Row>

      <Row className="product-info-row">

        {ligatureType && (
          <LigatureTypeSection
            ligatureType={ligatureType}
            itemProp="additionalProperty"
          />
        )}

        {finish && (
          <FinishSection finish={finish} itemProp="additionalProperty" />
        )}

        {accessories && (
          <AccessoriesSection
            accessories={accessories}
            itemProp="additionalProperty"
          />
        )}

        {model && <ModelSection model={model} itemProp="model" />}
        {selectedProductIds.includes(id) && bore && (
          <BoreSection bore={bore} itemProp="additionalProperty" />
        )}

      </Row>

      {isCustomModel(id) && (
        <Row className="custom-bubble-row">
          <CustomBubble />
        </Row>
      )}

      <Row className="price-row">
        <Card.Text
          className="price"
          aria-label={`Product price: ${price}`}
          itemProp="price"
        >
          MSRP ${price}
        </Card.Text>
      </Row>
    </Card>
  );
};

const ProductCard = ({ product }) => (
  <Col xs={12} md={4} key={product.id}>
    <Card
      className="product-card"
      itemScope
      itemType="http://schema.org/Product"
    >
      <div className="product-card-container">
        <div className="product-image">
          <img
            src={product.image}
            alt={`Product ${product.name}`}
            itemProp="image"
          />
        </div>
        <ProductDescription product={product} />
      </div>
    </Card>
  </Col>
);

export default ProductCard;
