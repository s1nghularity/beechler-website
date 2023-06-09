import { Row, Col } from "react-bootstrap";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Chip, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import "../../../styles/ProductsPage.css";
import saxIcon from "../../../assets/img/products/sax2.png";
import clarinetIcon from "../../../assets/img/products/clarinet2.png";


export const AccessoriesSection = ({ accessories }) => (
  <Col className="accessories">
    <p>{accessories} included!</p>
  </Col>
);


export const getProductSpecs = (type, value) => {
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

export const FacingSection = ({ facing }) => (
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

export const BoreSection = ({ bore }) => (
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


export const TipOpeningSection = ({ tipOpening }) => (
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
export const ModelSection = ({ model }) => <Col className="model">{model}</Col>;

export const LigatureTypeSection = ({ ligatureType }) => (
  <Col className="ligature-type">
    <p>{ligatureType}</p>
  </Col>
);

export const FinishSection = ({ finish }) => (
  <Col className="finish">
    <p className="finish-text">{finish} Finish</p>
  </Col>
);



export const getChipColor = (subtype) => {
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

export const CustomChip = ({ subtype, ...rest }) => (
  <StyledChip subtype={subtype} avatar={<Avatar />} {...rest} />
);

export const ProductIconRow = ({ product }) => {
  const subtypes = Array.isArray(product.subtype)
    ? product.subtype
    : [product.subtype];

  return (
    <Row className="product-icon-row">
      <Col xs="auto">
        <div className="product-id">{product.id}</div>
      </Col>
      
      {/* <Col xs="auto">
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
      </Col> */}

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