// DealerList.js
import React from 'react';

const DealerList = ({ filteredLocations, handleLocationClick }) => (
  <div className="dealer-list-container">
    {filteredLocations.map((location) => (
      <div
        key={location.name}
        className="dealer-info-container"
        onClick={() => handleLocationClick(location)}
      >
        <strong className="dealer-name">{location.name}</strong>
        <p className="dealer-info">
          {location.address}, {location.city}, {location.state}{" "}
          {location.zip}, {location.country}
        </p>
      </div>
    ))}
  </div>
);

export default DealerList;