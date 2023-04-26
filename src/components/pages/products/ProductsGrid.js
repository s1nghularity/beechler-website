import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard.js";
import "../../../styles/ProductsPage.css";



const ProductsGrid = ({ products }) => {
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <Row className="products-page">
      {Object.entries(productsByCategory).map(([category, categoryProducts], categoryIndex) => (
        <React.Fragment key={`category-${categoryIndex}`}>
          <Col xs={12}>
            <h2 className="category-title">{category}</h2>
          </Col>
          <Row className="product-row"> 
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </Row>
        </React.Fragment>
      ))}
    </Row>
  );
};


export default ProductsGrid;
