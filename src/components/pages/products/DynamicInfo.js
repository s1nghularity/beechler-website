import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import smallBore from "../../../assets/img/products/accessories-services/small-bore.png";
import mediumBore from "../../../assets/img/products/accessories-services/medium-bore.png";
import largeBore from "../../../assets/img/products/accessories-services/large-bore.png";
import { productInfo } from "./DataDynamicInfo";
import "../../../styles/ProductInfo.css";

const InfoCard = ({ title, text }) => {
  if (!text) {
    return null;
  }
  return (
    <Card className="info-card">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text className="info-card-text">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const BoreCard = ({ bore }) => {
  const boreImages = {
    Small: {
      image: smallBore,
      description:
        "A medium high baffle and horseshoe shaped chamber producing a fast air column and generating a powerful and brilliant sound rich in overtones.",
    },
    Medium: {
      image: mediumBore,
      description:
        "An open style baffle and open chamber producing a medium fast air column allowing for the production of subtleties of sound while maintaining ease of projection.",
    },
    Large: {
      image: largeBore,
      description:
        "A medium baffle and open chamber which produce a rich saxophone sound.",
    },
  };

  return (
    <Card className="bore-card">
      <Card.Header>{`${bore} Bore`}</Card.Header>
      <Card.Img
        className="bore-card-image"
        variant="top"
        src={boreImages[bore].image}
        alt={bore}
      />
      <Card.Body>
        <Card.Text>{boreImages[bore].description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const DynamicInfo = ({ infoContent }) => {
  const currentProduct = productInfo[infoContent] || {};

  return (
    <Container className="dynamic-info">
      <Row>
        <h3>{infoContent || "Select a Category"}</h3>
      </Row>

      {currentProduct.description && (
        <Row>
          <Col>
            <Card className="product-description">
              <Card.Body>
                <Card.Text>{currentProduct.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      <Row>
        <Col md={4}>
          <InfoCard title="Facings" text={currentProduct.facings?.join(", ")} />
        </Col>

        <Col md={4}>
          <InfoCard
            title="Tip Openings"
            text={Object.entries(currentProduct.tipOpenings || {})
              .map(([key, val]) => `${key}: ${val}`)
              .join(", ")}
          />
        </Col>

        <Col md={4}>
          <InfoCard title="Material" text={currentProduct.material} />
        </Col>

        {currentProduct.additionalFeatures && (
          <Col md={12}>
            <InfoCard
              title="Additional Features"
              text={currentProduct.additionalFeatures.join(", ")}
            />
          </Col>
        )}
      </Row>

      {currentProduct.bores && (
        <Row className="justify-content-center">
          {currentProduct.bores.map((bore) => (
            <Col md={4} key={bore} className="text-center">
              <BoreCard bore={bore} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default DynamicInfo;
