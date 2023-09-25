import React from "react";
import { Link } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { Tooltip } from "react-tooltip";

import "../../../styles/HomeDealer.css";

export const homeDealerCountryData = [
  { name: "Australia", value: 4 },
  { name: "Austria", value: 2 },
  { name: "Brazil", value: 2 },
  { name: "Canada", value: 10 },
  { name: "China", value: 3 },
  { name: "Columbia", value: 1 },
  { name: "Denmark", value: 1 },
  { name: "United Kingdom", value: 2 },
  { name: "Finland", value: 1 },
  { name: "France", value: 1 },
  { name: "Germany", value: 4 },
  { name: "Hong Kong", value: 1 },
  { name: "Hungary", value: 1 },
  { name: "Israel", value: 1 },
  { name: "Italy", value: 2 },
  { name: "Japan", value: 1 },
  { name: "South Korea", value: 3 },
  { name: "Mexico", value: 4 },
  { name: "New Zealand", value: 1 },
  { name: "Peru", value: 1 },
  { name: "Philippines", value: 2 },
  { name: "Poland", value: 2 },
  { name: "Romania", value: 1 },
  { name: "Spain", value: 1 },
  { name: "Switzerland", value: 6 },
  { name: "Taiwan", value: 2 },
  { name: "Thailand", value: 1 },
  { name: "Netherlands", value: 1 },
  { name: "United States", value: 34 },
];


const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const HomeDealerMap = () => {
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

  const colorScale = scaleLinear()
    .domain([0, 50])
    .range(["#fbb034", "#ffdd00"]);

  return (
    <Link to="/dealers">
      <ComposableMap
        className="home-dealer-map-container"
        style={{ width: "95vw", maxWidth: "75rem", height: "auto" }}
        projectionConfig={{ rotate: [-10, 0, 0], scale: 147 }}
        aria-label="World map showing dealer locations"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#FFD700", stopOpacity: 1 }}
            />{" "}
            {/* Gold */}
            <stop
              offset="100%"
              style={{ stopColor: "#FF8C00", stopOpacity: 1 }}
            />{" "}
            {/* Dark Orange */}
          </linearGradient>
        </defs>

        <Sphere stroke="url(#grad1)" strokeWidth={0.5} />
        <Graticule stroke="url(#grad1)" strokeWidth={0.5} />
        {data.length > 0 && (
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = data.find(
                  (s) => s.country === geo.properties["Alpha-2"]
                );
                const tooltipContent = d
                  ? `${geo.properties.name}: ${d.value} dealer${
                      d.value > 1 ? "s" : ""
                    } ${
                      d.value > 1 ? "carry" : "carries"
                    } Beechler/Arb products`
                  : null;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={d ? colorScale(d.value) : "#F5F4F6"}
                    data-tooltip-id={d ? "map-tooltip" : null}
                    data-tooltip-content={tooltipContent}
                  />
                );
              })
            }
          </Geographies>
        )}
      </ComposableMap>
      <Tooltip id="map-tooltip" effect="float" />
    </Link>
  );
};

export default HomeDealerMap;
