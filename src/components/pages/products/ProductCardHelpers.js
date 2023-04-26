import { Chip, Avatar } from "@mui/material";
import { Card, Row, Col } from "react-bootstrap";
import { styled } from "@mui/system";
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

const ProductHeader = ({ product }) => (
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
      {product.subtype && (
        <CustomChip
          className="subtype-chip"
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
    </Col>
  </Row>
);

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
  
const ProductDescription = ({ product }) => {
const { bore, facing, price } = product;
    return (
            <Card className="product-description">
                <Card.Body>
                    <ProductHeader product={product} />

                        <Row className="product-info-row">
                            <FacingSection facing={facing} />
                            {bore && <BoreSection bore={bore} />}
                        </Row>
                    
                    <Card.Text className="price mt-auto">USD ${price}</Card.Text>
                </Card.Body>
            </Card>
    );
};
  
  export { ProductDescription };