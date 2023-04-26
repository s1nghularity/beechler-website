import { Chip, Avatar } from "@mui/material";
import { Card } from "react-bootstrap";
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

const ProductDescription = ({ product }) => {
  const { bore, facing, instrument, price } = product;

  return (
    <div className="product-description">
      <Card.Body>
        <div className="header-section">
          <div className="product-id">{product.id}</div>

          <img
            className="instrument-icon"
            src={instrument === "Saxophone" ? saxIcon : clarinetIcon}
            alt={instrument}
          />

          {product.subtype && (
            <CustomChip
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

        <div className="product-info-row">

          <div className="facing">
            Facings:{" "}
            {facing.map((facingValue, index) => (
              <svg
                key={index}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={getProductSpecs("facingCurve", facingValue)}
                  fill="none"
                  stroke="gold"
                  strokeWidth="2"
                />
              </svg>
            ))}
          </div>

          {bore && (
            <p className="bore-specification">
              {bore} Bore{" "}
              <span
                style={{
                  width: getProductSpecs("boreSize", bore),
                  height: getProductSpecs("boreSize", bore),
                  backgroundColor: "grey",
                }}
              />
            </p>
          )}



        </div>

          <Card.Text className="price mt-auto">USD ${price}</Card.Text>

      </Card.Body>
    </div>
  );
};

export {

  ProductDescription,
};
