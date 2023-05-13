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

  const hasProducts = products.length > 0;

  return (
    <div className="stripe-products-grid">
    <Row className="products-grid">
      {hasProducts ? (
        Object.entries(productsByCategory).map(([category, categoryProducts], categoryIndex) => (
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
        ))
      ) : (
        <Col xs={12}>
          <div className="empty-message">No products available for the selected combination of instrument and category.</div>
        </Col>
      )}
    </Row>
    </div>
  );
  
};


export default ProductsGrid;
