import React, { useEffect, useState } from "react";
import { WorldMap } from "react-svg-worldmap";
import "../../../styles/theme.css";
import "../../../styles/HomeDealerCard.css";
import HomeDealerStats from "./HomeDealerStats";

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
  ];

  const [mapWidth, setMapWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      const width = Math.min(window.innerHeight, window.innerWidth) * 0.75;
      setMapWidth(width);
    };

    handleWindowResize(); // Set initial width on component mount

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="stripe-home-dealer">

    <h1 className="home-dealer-title">OUR GLOBAL REACH</h1> 

    <HomeDealerStats />

      <div className="home-dealer-map-wrapper">

      <WorldMap
        color="#faaf33"
        tooltipBgColor="black"
        tooltipTextColor="white"
        valueSuffix=" Dealers"
        size="xxl"
        data={data}
        backgroundColor="#0c0b0b"
        borderColor="#fcbb28"
        className="home-dealer-map"
        style={{ width: mapWidth, height: mapWidth }}
      />

    </div>


    </div>
  );
};

export default HomeDealerCard;
