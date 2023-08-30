import { Card, Row, Col } from "react-bootstrap";
import { Chip } from "@mui/material";
import { styled } from "@mui/system";
import "../../../styles/ProductsPage.css";

export const AccessoriesSection = ({ accessories }) => (
  <Col className="accessories" itemprop="additionalProperty">
    <p>{accessories} included!</p>
  </Col>
);

export const ModelSection = ({ model }) => (
  <Col className="model" itemprop="model">
    {model}
  </Col>
);

export const LigatureTypeSection = ({ ligatureType }) => (
  <Col className="ligature-type" itemprop="additionalProperty">
    <p>{ligatureType}</p>
  </Col>
);

export const FinishSection = ({ finish }) => (
  <Col className="finish" itemprop="additionalProperty">
    <p className="finish-text">{finish} Finish</p>
  </Col>
);

export const BoreSection = ({ bore }) => (
  <Col className="bore-section" itemprop="additionalProperty">
    <Card.Text className="spec">{bore} Bore</Card.Text>
  </Col>
);

const chipColors = {
  Bb: "skyblue",
  Soprano: "tomato",
  Alto: "gold",
  Tenor: "green",
  Baritone: "rebeccapurple",
};

export const getChipColor = (subtype) => {
  const color = chipColors[subtype] || "#000000";
  const brightness =
    parseInt(color.replace("#", ""), 16) > 0xffffff / 2 ? "#000000" : "#ffffff";
  return { backgroundColor: color, color: brightness };
};

const StyledChip = styled(Chip)(({ theme, subtype }) => {
  const { backgroundColor, color } = getChipColor(subtype);
  return {
    backgroundColor,
    color,
    fontSize: "1rem",
    fontWeight: "bold",
    "& .MuiAvatar-root": {
      backgroundColor,
      color,
    },
  };
});

export const CustomChip = ({ subtype, ...rest }) => (
  <StyledChip
    role="listitem"
    subtype={subtype}
    {...rest}
    itemprop="additionalProperty"
  />
);

export const ProductIconRow = ({ product }) => {
  const subtypes = Array.isArray(product.subtype)
    ? product.subtype
    : [product.subtype];

  return (
    <Row className="product-icon-row" role="list">
      <Col xs="auto">
        <div className="product-id" itemprop="sku">
          {product.id}
        </div>
      </Col>

      <Col xs="auto">
        {subtypes.map((subtypeValue, index) => (
          <CustomChip
            key={index}
            className="subtype-chip"
            variant="filled"
            size="large"
            label={subtypeValue}
            subtype={subtypeValue}
          />
        ))}
      </Col>
    </Row>
  );
};

export const CustomBubble = () => (
  <div className="custom-bubble" itemprop="additionalProperty">
    <p>Custom</p>
  </div>
);