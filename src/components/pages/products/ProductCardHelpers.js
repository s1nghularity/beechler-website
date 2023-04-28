import { Chip, Avatar } from "@mui/material";
import { Card, Row, Col } from "react-bootstrap";
import { styled } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import saxIcon from "../../../assets/img/products/saxophone.png";
import clarinetIcon from "../../../assets/img/products/clarinet.png";

const getProductSpecs = (type, value) => {
  switch (type) {
    case "boreSize":
      return value === "Medium" ? 12 : value === "Large" ? 16 : 8;
    case "facingCurve":
      return value === "Standard"
        ? "M0,20 Q10,0 20,20"
        : value === "Medium"
        ? "M0,20 Q10,5 20,20"
        : value === "Long"
        ? "M0,20 Q10,10 20,20"
        : "M0,20 Q10,0 20,20";
    default:
      return "";
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

const ProductHeader = ({ product }) => {
  const subtypes = Array.isArray(product.subtype)
    ? product.subtype
    : [product.subtype];

  return (
    <Row className="header-section">
      <Col xs="auto">
        <div className="product-id">{product.id}</div>
      </Col>
      <Col xs="auto">
        <img
          className="instrument-icon"
          src={product.instrument === "Saxophone" ? saxIcon : clarinetIcon}
          alt={product.instrument}
        />
      </Col>
      <Col xs="auto">
        {subtypes.map((subtypeValue, index) => (
          <CustomChip
            key={index}
            className="subtype-chip"
            variant="outlined"
            size="small"
            label={subtypeValue}
            avatar={<Avatar>{subtypeValue[0]}</Avatar>}
            style={{
              borderColor: getChipColor(subtypeValue),
              color: getChipColor(subtypeValue),
            }}
          />
        ))}
      </Col>
    </Row>
  );
};


const FacingSection = ({ facing }) => (
  <Col className="facing">
    <p className="facing-text">Facings</p>
    <div className="facing-angles">
      {facing.map((facingValue, index) => (
        <span className="facing-angles" key={index}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={getProductSpecs("facingCurve", facingValue)}
              fill="none"
              stroke="gold"
              strokeWidth="3"
            />
          </svg>
        </span>
      ))}
    </div>
  </Col>
);

const BoreSection = ({ bore }) => (
  <Col className="bore-specification">
    {bore} Bore{" "}
    <span
      className="bore-circle"
      style={{
        width: getProductSpecs("boreSize", bore),
        height: getProductSpecs("boreSize", bore),
        backgroundColor: "burlywood",
      }}
    />
  </Col>
);

const AccessoriesSection = ({ accessories }) => (
  <Col className="accessories">
    <p>Accessories</p>
    <p>{accessories}</p>
  </Col>
);

const TipOpeningSection = ({ tipOpening }) => (
  <Col className="tip-openings">
    {tipOpening ? (
      <>
        <p className="tip-openings-text">Tips Available</p>

        <CheckCircleIcon
          className="tip-openings-checkmark"
          style={{ color: "limegreen" }}
        />
      </>
    ) : null}
  </Col>
);


const ModelSection = ({ model }) => (
  <Col className="model">
    <p>Model</p>
    <p>{model}</p>
  </Col>
);


  
const ProductDescription = ({ product }) => {
  const { bore, facing, price, accessories, tipOpening, model } = product;

  return (
    <Card className="product-description">
      <Card.Body>
        <ProductHeader product={product} />

        <Row className="product-info-row">
          {facing && <FacingSection facing={facing} />}
          {bore && <BoreSection bore={bore} />}
          {accessories && <AccessoriesSection accessories={accessories} />}
          {tipOpening && <TipOpeningSection tipOpening={tipOpening} />}
          {model && <ModelSection model={model} />}
        </Row>

        <Card.Text className="price mt-auto">USD ${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export { ProductDescription };
