import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard.js";

const ProductsGrid = ({ products, selectedCategory, selectedSubtype }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const hasProducts = products.length > 0;

  const getCategoryTitleAnimation = (category, subtype) => {
    if (category === selectedCategory || subtype === selectedSubtype) {
      return "animate__flipInX";
    }
    return "animate__fadeIn";
  };

  const getProductRowAnimation = (category, subtype) => {
    if (category === selectedCategory || subtype === selectedSubtype) {
      return "animate__fadeIn";
    }
    return "animate__flipInUp";
  };


  return (
    <Row className={`products-grid ${isLoaded ? "loaded" : ""}`}>
      {hasProducts ? (
        <>
          {Object.entries(productsByCategory).map(
            ([category, categoryProducts], categoryIndex) => (
              <React.Fragment key={`category-${categoryIndex}`}>
                <Col>
                  <h2 className={`category-title animate__animated ${getCategoryTitleAnimation(category)}`}>{category}</h2>
                </Col>
                <Row className={`product-row animate__animated ${getProductRowAnimation(category, selectedSubtype)}`} role="list">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                  ))}
                </Row>
              </React.Fragment>
            )
          )}
        </>
      ) : (
        <Col>
          <div className="empty-message">
            No products available for the selected combination of instrument and
            category.
          </div>
        </Col>
      )}
    </Row>
  );
};

export default ProductsGrid;

