// DealerMarker.js
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";

const DealerMarker = ({ location, musicalNoteIcon, handleLocationClick, markerRefs }) => (
  <Marker
    key={location.name}
    position={[location.latitude, location.longitude]}
    icon={musicalNoteIcon}
    ref={(ref) => {
        markerRefs.current[location.name] = ref;
    }}
    itemScope itemType="https://schema.org/GeoCoordinates"
  >
    <Popup className="dealer-map-popup">
      <div className="popup-content" itemScope itemType="https://schema.org/Store">
        <strong itemProp="name">{location.name}</strong>
        <div className="popup-detail" itemProp="address">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="dealer-popup-icon"
            onClick={() => handleLocationClick(location)}
          />
          {location.address}, {location.city}, {location.state}{" "}
          {location.zip}, {location.country}
        </div>
        <div className="popup-detail" itemProp="telephone">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            className="dealer-popup-icon"
          />
          {location.phone}
        </div>
        <div className="popup-detail" itemProp="url">
          <FontAwesomeIcon
            icon={faGlobe}
            className="dealer-popup-icon"
          />
          <a href={location.website} target="_blank" rel="noreferrer">
            {location.website}
          </a>
        </div>
      </div>
    </Popup>
  </Marker>
);

export default DealerMarker;
