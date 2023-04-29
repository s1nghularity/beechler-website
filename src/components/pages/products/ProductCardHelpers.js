import { Chip, Avatar } from "@mui/material";
import { Card, Row, Col } from "react-bootstrap";
import { styled } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../../../styles/ProductsPage.css";

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
      return "green";
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

const ProductIconRow = ({ product }) => {
  const subtypes = Array.isArray(product.subtype)
    ? product.subtype
    : [product.subtype];

  return (
    <Row className="product-icon-row">
      <Col xs="auto">
        <div className="product-id">{product.id}</div>
      </Col>
      
      <Col xs="auto">
        {product.instrument && (
          <img
            className="instrument-icon"
            src={
              product.instrument === "Saxophone"
                ? saxIcon
                : product.instrument === "Clarinet"
                ? clarinetIcon
                : null
            }
            alt={product.instrument}
          />
        )}
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
    Bore{" "}
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
    <p>{accessories} included! </p>
  </Col>
);

const TipOpeningSection = ({ tipOpening }) => (
  <Col className="tip-openings">
    {tipOpening ? (
      <>
        <div className="tip-openings-text">Tips</div>
        <CheckCircleIcon
          className="tip-openings-checkmark"
          style={{ color: "limegreen" }}
        />
      </>
    ) : null}
  </Col>
);

const ModelSection = ({ model }) => <Col className="model">{model}</Col>;

const LigatureTypeSection = ({ ligatureType }) => (
  <Col className="ligature-type">
    <p className="ligature-type-text">{ligatureType}</p>
  </Col>
);

const FinishSection = ({ finish }) => (
  <Col className="finish">
    <p className="finish-text">{finish} Finish</p>
  </Col>
);

const ProductDescription = ({ product }) => {
  const {
    bore,
    facing,
    tipOpening,
    price,
    ligatureType,
    finish,
    accessories,
    model,
  } = product;
  return (
    <Card className="product-description">
      <Row className="product-icon-row">
        <ProductIconRow product={product} />
      </Row>

      <Row className="product-info-row">
        {facing && <FacingSection facing={facing} />}
        {bore && <BoreSection bore={bore} />}
        {tipOpening && <TipOpeningSection tipOpening={tipOpening} />}
        {ligatureType && <LigatureTypeSection ligatureType={ligatureType} />}
        {finish && <FinishSection finish={finish} />}
        {accessories && <AccessoriesSection accessories={accessories} />}
        {model && <ModelSection model={model} />}
      </Row>

      <Card.Text className="price mt-auto">USD ${price}</Card.Text>
    </Card>
  );
};

export { ProductDescription };
