import React from "react";
import { WorldMap } from "react-svg-worldmap";
import "../../../styles/theme.css";
import "../../../styles/HomeDealerCard.css";

const HomeDealerCard = () => {
  const data = [
    { country: "AU", value: 4 },
    { country: "AT", value: 2 },
    { country: "BR", value: 2 },
    { country: "CA", value: 10 },
    { country: "CN", value: 3 },
    { country: "CO", value: 1 },
    { country: "DK", value: 1 },
    { country: "GB", value: 2 },
    { country: "FI", value: 1 },
    { country: "FR", value: 1 },
    { country: "DE", value: 4 },
    { country: "HK", value: 1 },
    { country: "HU", value: 1 },
    { country: "IL", value: 1 },
    { country: "IT", value: 2 },
    { country: "JP", value: 1 },
    { country: "KR", value: 3 },
    { country: "MX", value: 4 },
    { country: "NZ", value: 1 },
    { country: "PE", value: 1 },
    { country: "PH", value: 2 },
    { country: "PL", value: 2 },
    { country: "RO", value: 1 },
    { country: "ES", value: 1 },
    { country: "CH", value: 6 },
    { country: "TW", value: 2 },
    { country: "TH", value: 1 },
    { country: "NL", value: 1 },
    { country: "US", value: 34 },
    // more country data...
  ];

  return (
    <div className="home-dealer-card stripe-home-dealer">
      <h2>Musician's Choice All Over The World</h2>
      <WorldMap
        color="#faaf33"
        tooltipBgColor="black"
        tooltipTextColor="white"
        valueSuffix=" Dealers"
        size="xxl"
        data={data}
        backgroundColor="var(--grey)"
        borderColor="#fcbb28"
        className="home-dealer-map"
      />
    </div>
  );
};

export default HomeDealerCard;
