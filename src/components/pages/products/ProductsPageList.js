import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../../../styles/ProductsPage.css';

const ProductsPageList = ({ products }) => {
  return (
    <Row>
      {products.map((product) => (
        <Col md={4} className="mb-4" key={product.id}>
          <Card className="h-100 border-0 shadow-sm rounded">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.category}</Card.Title>
              <Card.Text>ID: {product.id}</Card.Text>
              <Card.Text>Instrument: {product.instrument}</Card.Text>
              <Card.Text>Subtype: {product.subtype}</Card.Text>
              <Card.Text>Bore: {product.bore}</Card.Text>
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
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductsPageList;
