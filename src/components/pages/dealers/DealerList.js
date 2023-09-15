// DealerList.js
import React from "react";

const DealerList = ({ filteredLocations, handleLocationClick }) => (
  <div
    className="dealer-list-container"

  >
    {filteredLocations.length > 0 ? (
      filteredLocations.map((location, index) => (
        <div
          key={index}
          className="dealer-info-container"
          onClick={() => handleLocationClick(location)}

        >
          <strong className="dealer-name">
            {location.name}
          </strong>
          <p className="dealer-info">
            {location.address}, {location.city}, {location.state} {location.zip}
            , {location.country}
          </p>
        </div>
      ))
    ) : (
      <div className="no-results-placeholder">
        No dealers found for the given search criteria.
      </div>
    )}
  </div>
);

export default DealerList;
