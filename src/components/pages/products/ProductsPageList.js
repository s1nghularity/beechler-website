import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../../../styles/ProductsPage.css';
import { Chip } from '@mui/material';
import BoreIcon from '@mui/icons-material/Category';
import FacingIcon from '@mui/icons-material/TextFields';

const subtypeColors = {
  Soprano: 'blue',
  Alto: 'red',
  Tenor: 'green',
  Baritone: 'purple',
};

const ProductsPageList = ({ products }) => {
  return (
    <Row className='products-page'>
      {products.map((product) => (
        <Col md={4} className='mb-4' key={product.id}>
          <Card className='h-100 border-0 shadow-sm rounded product-card'>
            <div className='d-flex' style={{ height: '100%' }}>
              <div className='product-image'>
                <img
                  src={product.image}
                  alt={product.category}
                  style={{ height: '250px', objectFit: 'contain' }}
                />
                <span className='product-id'>{product.id}</span>
              </div>
              <div className='product-details' style={{ flex: 1 }}>
                <Card.Body className='d-flex flex-column h-100'>
                  <Card.Title>{product.category}</Card.Title>
                  <Card.Text>{product.instrument}</Card.Text>
                  {product.subtype && (
                    <Chip
                      label={product.subtype}
                      style={{
                        backgroundColor: subtypeColors[product.subtype],
                        color: 'white',
                      }}
                    />
                  )}
                  {product.bore && (
                    <Card.Text>
                      <BoreIcon />
                      {product.bore}
                    </Card.Text>
                  )}
                  <Card.Text className='mt-auto' style={{ textAlign: 'right' }}>
                    Price: {product.price}
                  </Card.Text>
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
                      <FacingIcon key={index} titleAccess={facing} />
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
