import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard.js";

const ProductsGrid = ({ products }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const hasProducts = products.length > 0;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Row className={`products-grid ${isLoaded ? "loaded" : ""}`}>
      {hasProducts ? (
        Object.entries(productsByCategory).map(
          ([category, categoryProducts], categoryIndex) => (
            <React.Fragment key={`category-${categoryIndex}`}>
              <Col>
                <h2 className="category-title">{category}</h2>
              </Col>
              <Row className="product-row">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </Row>
            </React.Fragment>
          )
        )
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