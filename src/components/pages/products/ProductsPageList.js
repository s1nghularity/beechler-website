import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Chip, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import FacingIcon from "@mui/icons-material/TextFields";
import saxIcon from "../../../assets/img/products/saxophone.png";
import clarinetIcon from "../../../assets/img/products/clarinet.png";
import "../../../styles/ProductsPage.css";

const getBoreSize = (bore) => {
  let size = 8; // Default bore size (small)

  if (bore === "Medium") {
    size = 12;
  } else if (bore === "Large") {
    size = 16;
  }

  return size;
};

const getFacingCurve = (facing) => {
  switch (facing) {
    case "Standard":
      return "M0,20 Q10,0 20,20";
    case "Medium":
      return "M0,20 Q10,5 20,20";
    case "Long":
      return "M0,20 Q10,10 20,20";
    default:
      return "M0,20 Q10,0 20,20";
  }
};


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
  <div className="product-description">
    <Card.Body className="d-flex flex-column ">
      <div className="header-section">
        <img
          className="instrument-icon"
          src={product.instrument === "Saxophone" ? saxIcon : clarinetIcon}
          alt={product.instrument}
        />

        <div className="product-id">{product.id}</div>

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

      <div className="product-info-row">

      {product.bore && (
        <p className="bore-specification">
          {product.bore} Bore{" "}
          <span
            style={{
              display: "inline-block",
              width: getBoreSize(product.bore),
              height: getBoreSize(product.bore),
              backgroundColor: "grey",
              borderRadius: "50%",
              marginRight: "4px",
            }}
          />
        </p>
      )}

      <div className="facing">
        Facing:{" "}
        {product.facing.map((facing, index) => (
          <svg
            key={index}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={getFacingCurve(facing)}
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        ))}
      </div>

      </div>

      <div className="price-box">
      <Card.Text className="price mt-auto">USD ${product.price}</Card.Text>
      </div>

    </Card.Body>
  </div>
);

const ProductCard = ({ product }) => (
  <Col md={4} className="mb-4" key={product.id}>
    <Card className=" border-0 shadow-sm product-card">
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
