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
      <Card.Header className="info-card-header">{title}</Card.Header>
      <Card.Body className="info-card-body">
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const DynamicInfo = ({ infoContent }) => {
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

  const BoreSection = ({ bores }) => {
    if (!bores || bores.length === 0) {
      return null;
    }
    return (
      <Row className={`bore-row ${bores.length === 1 ? "single-bore" : ""}`}>
        {bores.map((bore) => (
          <Col md={4} key={bore}>
            <Card className="bore-card">
              <Card.Header className="bore-card-title">{bore} Bore</Card.Header>
              <Card.Img
                className="bore-card-image"
                variant="top"
                src={boreImages[bore].image}
                alt={bore}
              />
              <Card.Body className="bore-card-body">
                <Card.Text>{boreImages[bore].description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  const currentProduct = productInfo[infoContent] || {};

  return (
    <Container className="dynamic-info">
      <Row className="dynamic-info-row">
        <h3>{infoContent ? infoContent : "Select a Category"}</h3>
        {currentProduct ? (
          <>
            <Col md={12}>
              <Card className="product-description">
                <Card.Body>
                  <Card.Text>{currentProduct.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {currentProduct.bores && currentProduct.bores.length === 1 && (
              <Row className="info-row">
                <Col md={4}>
                  <InfoCard
                    title="Facings"
                    text={currentProduct.facings?.join(", ")}
                  />
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
            )}


                        {/* SECONDARY MENU LAYOUT BASED ON BORES */}


            {currentProduct.bores && currentProduct.bores.length > 1 && (
              <Row className="info-row">
                <Col md={3}>
                  <InfoCard
                    title="Facings"
                    text={currentProduct.facings?.join(", ")}
                  />
                </Col>

                <Col md={3}>
                  <InfoCard
                    title="Tip Openings"
                    text={Object.entries(currentProduct.tipOpenings || {})
                      .map(([key, val]) => `${key}: ${val}`)
                      .join(", ")}
                  />
                </Col>

                <Col md={3}>
                  <InfoCard title="Material" text={currentProduct.material} />
                </Col>

                {/* For the additional features, make sure to handle when it is not present */}
                {currentProduct.additionalFeatures && (
                  <Col md={3}>
                    <InfoCard
                      title="Additional Features"
                      text={currentProduct.additionalFeatures.join(", ")}
                    />
                  </Col>
                )}
              </Row>
            )}
          </>
        ) : (
          <Card className="product-description-card">
            <Card.Body>
              <Card.Text>Please select a category</Card.Text>
            </Card.Body>
          </Card>
        )}

        {/* Separate Bore Section */}
        <Row className="bore-and-info-row justify-content-center">
          {currentProduct.bores && currentProduct.bores.length === 1 ? (
            <Col>
              <BoreSection bores={currentProduct.bores} />
            </Col>
          ) : (
            <Col md={12}>
              <BoreSection bores={currentProduct.bores} />
            </Col>
          )}
        </Row>
      </Row>
    </Container>
  );
};

export default DynamicInfo;
