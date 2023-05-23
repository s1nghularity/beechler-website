import React from "react";
import PropTypes from 'prop-types';
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
    <Row className="products-grid">
      {hasProducts ? (
        Object.entries(productsByCategory).map(([category, categoryProducts], categoryIndex) => (
          <React.Fragment key={`category-${categoryIndex}`}>
            <Col >
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
        <Col >
          <div className="empty-message">No products available for the selected combination of instrument and category.</div>
        </Col>
      )}
    </Row>
  );
};

ProductsGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
    })
  ).isRequired,
};

export default ProductsGrid;
