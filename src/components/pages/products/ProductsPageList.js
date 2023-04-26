import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Chip, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import FacingIcon from "@mui/icons-material/TextFields";
import saxIcon from "../../../assets/img/products/saxophone.png";
import clarinetIcon from "../../../assets/img/products/clarinet.png";
import "../../../styles/ProductsPage.css";

const getChipColor = (subtype) => {
  switch (subtype) {
    case "BB":
      return "skyblue";
    case "Soprano":
      return "tomato";
    case "Alto":
      return "gold";
    case "Tenor":
      return "greenyellow";
    case "Baritone":
      return "rebeccapurple";
    default:
      return "";
  }
};

const StyledChip = styled(Chip)(({ subtype }) => {
  const chipColor = getChipColor(subtype);
  return {
    backgroundColor: chipColor,
    "& .MuiAvatar-root": {
      backgroundColor: chipColor,
    },
  };
});

const CustomChip = ({ subtype, ...rest }) => (
  <StyledChip subtype={subtype} avatar={<Avatar />} {...rest} />
);

const ProductImage = ({ image }) => (
  <div className="product-image">
    <img src={image} alt="Product" />
  </div>
);


const ProductDescription = ({ product, id }) => (
  <div className="product-details">
    <Card.Body className="d-flex flex-column h-100">

      <div className="header-section">
        
        <img
          className="instrument-icon"
          src={product.instrument === "Saxophone" ? saxIcon : clarinetIcon}
          alt={product.instrument}
        />
    <p className="product-id">{product.id}</p>

        {product.subtype && (
          <CustomChip
            variant="outlined"
            size="small"
            label={product.subtype}
            avatar={<Avatar>{product.subtype[0]}</Avatar>}
            style={{
              borderColor: getChipColor(product.subtype),
              color: getChipColor(product.subtype),
            }}
          />
        )}
      </div>
      {product.bore && <p className="bore-specification">Bore: {product.bore}</p>}

      <Card.Text className="price mt-auto">Price: {product.price}</Card.Text>
      <Card.Text>Tip Opening: 1-10</Card.Text>
      <Card.Text className="facing">
        Facing:{" "}
        {product.facing.map((facing, index) => (
          <FacingIcon key={index} titleAccess={facing} />
        ))}
      </Card.Text>
    </Card.Body>
  </div>
);

const ProductCard = ({ product }) => (
  <Col md={4} className="mb-4" key={product.id}>
    <Card className="h-100 border-0 shadow-sm product-card">
      <div className="d-flex flex-column product-card-container">
        <ProductImage image={product.image} id={product.id} />
        <ProductDescription product={product} />
      </div>
    </Card>
  </Col>
);


const ProductsPageList = ({ products }) => {
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <Row className="products-page">
      {Object.entries(productsByCategory).map(
        ([category, categoryProducts]) => (
          <>
            <Col xs={12}>
              <h2 className="category-title">{category}</h2>
            </Col>
            {categoryProducts.map((product) => (
              <ProductCard product={product} />
            ))}
          </>
        )
      )}
    </Row>
  );
};

export default ProductsPageList;

 
