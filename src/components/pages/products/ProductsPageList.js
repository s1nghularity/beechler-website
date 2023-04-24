import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../../../styles/ProductsPage.css";
import { Chip, Avatar } from "@mui/material";
import BoreCircle from "@mui/icons-material/Category";
import FacingIcon from "@mui/icons-material/TextFields";
import saxIcon from "../../../assets/img/products/saxophone.png";
import clarinetIcon from "../../../assets/img/products/clarinet.png";

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
              <Col md={4} className="mb-4" key={product.id}>
                <Card className="h-100 border-0 shadow-sm rounded product-card">
                  <div className="d-flex" style={{ height: "100%" }}>
                    <div className="product-image">
                      <img
                        src={product.image}
                        alt={product.category}
                        style={{ height: "250px", objectFit: "contain" }}
                      />
                      <span className="product-id">{product.id}</span>
                    </div>
                    <div className="product-details" style={{ flex: 1 }}>
                      <Card.Body className="d-flex flex-column h-100">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span
                            className="instrument-icon"
                            style={{
                              backgroundImage: `url(\${product.instrument === 'Saxophone' ? saxIcon : clarinetIcon})`,
                              backgroundSize: "contain",
                              width: "24px",
                              height: "24px",
                            }}
                          />
                          {product.subtype && (
                            <Chip
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
                        {product.bore && (
                          <p className="bore-specification">Bore: {product.bore}</p>

                        )}

                        <Card.Text
                          className="mt-auto"
                          style={{ textAlign: "right" }}
                        >
                          Price: {product.price}
                        </Card.Text>
                        <Card.Text>Tip Opening: 1-10</Card.Text>
                        <Card.Text>
                          Facing:{" "}
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
          </>
        )
      )}
    </Row>
  );
};

export default ProductsPageList;
