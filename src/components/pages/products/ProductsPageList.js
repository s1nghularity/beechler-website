import React from 'react';

const ProductsPageList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.category}</h3>
          <p>ID: {product.id}</p>
          <p>Instrument: {product.instrument}</p>
          <p>Subtype: {product.subtype}</p>
          <p>Bore: {product.bore}</p>
          <p>Price: {product.price}</p>
          <p>Tip Opening: {product.tipOpening.join(', ')}</p>
          <p>Facing: {product.facing.join(', ')}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductsPageList;
