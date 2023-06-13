import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CheckCircle from "@mui/icons-material/CheckCircle";
import smallBore from "../../../assets/img/products/accessories-services/small-bore.png";
import mediumBore from "../../../assets/img/products/accessories-services/medium-bore.png";
import largeBore from "../../../assets/img/products/accessories-services/large-bore.png";

import "../../../styles/ProductNav.css";

const DynamicInfo = ({ infoContent }) => {
  const productInfo = {
    "Beechler Diamond": {
      description:
        "Beechler Diamond Inlay alto and tenor mouthpieces come in three bore sizes. The Small bore has a medium high baffle and horseshoe shaped chamber producing a fast air column and generating a powerful and brilliant sound rich in overtones. The Medium bore has an open style baffle and open chamber producing a medium fast air column allowing for the production of subtleties of sound while maintaining ease of projection. The Large Bore has a medium baffle and open chamber which produce a rich saxophone sound. The Clarinet and Baritone are designed with a medium open chamber and medium baffle. The material used for these mouthpieces is a sturdy combination of the qualities of traditional hard rubber and new age plastics designed to utilize the full dynamic range of the instrument.",
      bores: ["Small", "Medium", "Large"],
      facings: ["Standard", "Medium", "Long"],
      tipOpenings: {
        Sax: "4-10",
        Clarinets: "Up to 12",
      },
      material: "Hard Rubber and Plastics",
    },

    "Beechler Tonalex": {
      description:
        "Beechler Tonalex Alto and Tenor mouthpieces have medium baffles with open chambers. The Clarinet mouthpiece has a medium open chamber. The white acoustic resin in these mouthpieces favors the softer singing qualities of the instrument.",
      bores: ["Small", "Medium", "Large"],
      facings: ["Standard", "Medium", "Long"],
      tipOpenings: {
        Sax: "4-10",
        Clarinets: "Up to 12",
      },
      material: "White Acoustic Resin",
    },

    "Beechler Bellite": {
      description:
        "The Beechler Bellite Metal Mouthpiece is cast from the finest surgical stainless steel. This material is free from corrosion, breakage, or change in playing characteristics. They are cast at a temperature of 2000 degrees and will maintain consistent durability. The hardness of this metal provides an ultra fast response time to bring out the brilliance of the overtone series. The Bellite alto and tenor models feature a medium high baffle and open chamber which supports a brilliant contemporary sound as well as a subdued ballad sound. The Bellite Soprano and Baritone have an open baffle. Ligatures and caps are provided with all Beechler Bellite mouthpieces.",
      bores: ["Medium"],
      facings: ["Medium", "Long"],
      tipOpenings: "4-10",
      additionalFeatures: [
        "Cast by the Lost Wax method in surgical stainless steel.",
        "Cap & Ligature included",
      ],
      material: "Surgical Stainless Steel",
    },

    "Beechler Hard Rubber": {
      description:
        "Made from quality hard rubber. The hardness of the rubber and the size and shape of the chamber produce a dark, traditional sound.",
      bores: ["Medium"],
      facings: ["Medium", "Long"],
      tipOpenings: {
        Sax: "4-10",
      },
      material: "Hard Rubber",
    },

    "ARB Metal": {
      description:
        "The ARB metal mouthpieces feature high baffles and step off chambers for the Alto, Tenor, and Baritone. The Soprano has a medium open chamber and medium baffle. They are extremely versatile and can be played with extraordinary brightness or with a soft afid mellow sound. These mouthpieces are the culmination of years of development in arriving at the best playing combination of tone chambers, facings, and density of metal. They have excellent brilliance, response, and depth of tone.",
      bores: ["Large"],
      facings: ["Medium", "Long"],
      tipOpenings: "4-10",
      additionalFeatures: [
        "Cast by the Lost Wax method in surgical stainless steel.",
        "Cap & Ligature included",
      ],
      material: "Surgical Stainless Steel",
    },

    "ARB Great Neck Originals": {
      description:
        "The Great Neck Original Mouthpiece is made from the blanks of the 1940S. These mouthpieces were given this name by Arnold Brilhart because of the location of his original factoty in Great Neck, New York. The Alto and Tenor are large bore, medium baffle mouthpieces. The Clarinet has a medium open bore. The white pigment in these mouthpieces helps to produce the compact and subtle sound of those years. These are limited edition mouthpieces. They will never be available again after the current stock is gone.",
      bores: ["Large"],
      facings: ["Medium", "Long"],
      tipOpenings: {
        Sax: "4-10",
        Clarinets: "Up to 12",
      },
      material: "1940s Blanks",
    },

    "Beechler Customized": {
      description:
        "The Musicians and artisans at Remlé Musical Products have worked with many outstanding professional musicians over the years. We have created uthpieces for these gifted and supremely talented individuals  and have learned from them in the process. This experience has helped us create a customized series of Beechler & Arb lines. The custom mouthpieces offer a specialized contour applied to the baffle of a small bore mouthpiece or a metal mouthpiece. This alternate approach to the creating of a mouthpiece provides specialized acoustic and dynamic featurews desired by professionals. It allows fo the subtleties and nuances that can enhance musicianship and give the individual player the confidence to experiment, experience, and to explore.",
      bores: ["Medium"],
      facings: ["Standard", "Medium"],
      tipOpenings: {
        Sax: "4-19",
      },
      material: "Custom Material",
    },

    "Accessories & Services": {
      description:
        "All customizations are done by hand. We offer a variety of services to customize and provide the best playing experience. We also offer a variety of accessories to help you maintain your mouthpiece.",
    },
  };

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

  const BoreSection = ({ bore }) => {
    if (!bore) {
      return null;
    }
    return (
      <div>
        <p>{bore}</p>
        <img
          src={boreImages[bore].image}
          alt={bore}
          style={{ width: "100%", height: "auto" }}
        />
        <p>{boreImages[bore].description}</p>
      </div>
    );
  };

  const FacingSection = ({ facing }) => {
    if (!facing || facing.length === 0) {
      return null;
    }
    return <Card.Text>{facing.join(", ")} available</Card.Text>;
  };

  const TipOpeningSection = ({ tipOpening }) => {
    if (!tipOpening) {
      return null;
    }
    const tipOpenings = Object.keys(tipOpening).map(
      (key) => `${key}: ${tipOpening[key]}`
    );
    return <Card.Text>{tipOpenings.join(", ")}</Card.Text>;
  };

  const AdditionalFeaturesSection = ({ additionalFeatures }) => {
    if (!additionalFeatures) {
      return null;
    }
    return <Card.Text>{additionalFeatures.join(", ")}</Card.Text>;
  };

  const currentProduct = productInfo[infoContent];

  return (
    <Container>
      <Row className="dynamic-info-container">
        <Col md={12}>
          <div className="dynamic-info">
            <h3>{infoContent ? infoContent : "Select a Category"}</h3>
            <Row>
              <Col md={12}>
                <Card className="product-description-card">
                  <Card.Body>
                    <Card.Text>
                      {currentProduct
                        ? currentProduct.description
                        : "Please select a category"}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={2}>
                <Card className="bore-sizes-card">
                  <Card.Body>
                    <Card.Title>Bore Sizes</Card.Title>
                    {currentProduct &&
                      currentProduct.bores.map((bore) => (
                        <BoreSection key={bore} bore={bore} />
                      ))}
                  </Card.Body>
                </Card>
              </Col>
              <Col md={2}>
                <Card className="facings-card">
                  <Card.Body>
                    <Card.Title>Facings</Card.Title>
                    {currentProduct && (
                      <FacingSection facing={currentProduct.facings} />
                    )}
                  </Card.Body>
                </Card>
              </Col>
              <Col md={2}>
                <Card className="tip-openings-card">
                  <Card.Body>
                    <Card.Title>Tip Openings</Card.Title>
                    {currentProduct && (
                      <TipOpeningSection
                        tipOpening={currentProduct.tipOpenings}
                      />
                    )}
                  </Card.Body>
                </Card>
              </Col>
              <Col md={2}>
                <Card className="material-card">
                  <Card.Body>
                    <Card.Title>Material</Card.Title>
                    <Card.Text>
                      {currentProduct ? currentProduct.material : ""}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={2}>
                <Card className="additional-features-card">
                  <Card.Body>
                    <Card.Title>Additional Features</Card.Title>
                    <AdditionalFeaturesSection
                      additionalFeatures={
                        currentProduct && currentProduct.additionalFeatures
                      }
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DynamicInfo;
