import { Row, Col } from "react-bootstrap";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Chip } from "@mui/material";
import { styled } from "@mui/system";
import "../../../styles/ProductsPage.css";



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
  let color;
  switch (subtype) {
    case "BB":
      color = "skyblue";
      break;
    case "Soprano":
      color = "tomato";
      break;
    case "Alto":
      color = "gold";
      break;
    case "Tenor":
      color = "green";
      break;
    case "Baritone":
      color = "rebeccapurple";
      break;
    default:
      color = "#000000";
  }
  const brightness = parseInt(color.replace("#", ""), 16) > 0xffffff / 2 ? '#000000' : '#ffffff';
  return { backgroundColor: color, color: brightness };
};

const StyledChip = styled(Chip)(({ theme, subtype }) => {
  const { backgroundColor, color } = getChipColor(subtype);
  return {
    backgroundColor,
    color,
    fontSize: '1rem', // You can adjust this to increase or decrease the font size
    fontWeight: 'bold', // Use 'bold' or a numeric value like '700' to increase the font weight
    "& .MuiAvatar-root": {
      backgroundColor,
      color,
    },
  };
});


export const CustomChip = ({ subtype, ...rest }) => (
  <StyledChip subtype={subtype} {...rest} />
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