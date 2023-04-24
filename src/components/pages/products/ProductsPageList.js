import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../../../styles/ProductsPage.css';

const ProductsPageList = ({ products }) => {
  return (
    <Row className='products-page'>
      {products.map((product) => (
        <Col md={4} className='mb-4' key={product.id}>
          <Card className='h-100 border-0 shadow-sm rounded'>
            <div className='d-flex'>
              <div className='product-image'>
                <img
                  src={product.image}
                  alt={product.category}
                  style={{ height: '150px', objectFit: 'contain' }}
                />
                <span className='product-id'>{product.id}</span>
              </div>
              <div className='product-details'>
                <Card.Body>
                  <Card.Title>{product.category}</Card.Title>
                  <Card.Text>{product.instrument}</Card.Text>
                  {product.subtype && (
                    <Card.Text>Subtype: {product.subtype}</Card.Text>
                  )}
                  {product.bore && (
                    <Card.Text>Bore: {product.bore}</Card.Text>
                  )}
                  <Card.Text>Price: {product.price}</Card.Text>
                  <Card.Text>
                    Tip Opening:{' '}
                    {product.tipOpening.map((opening, index) => (
                      <span key={index}>
                        {opening}
                        {index < product.tipOpening.length - 1 && ', '}
                      </span>
                    ))}
                  </Card.Text>
                  <Card.Text>
                    Facing:{' '}
                    {product.facing.map((facing, index) => (
                      <span key={index}>
                        {facing}
                        {index < product.facing.length - 1 && ', '}
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductsPageList;