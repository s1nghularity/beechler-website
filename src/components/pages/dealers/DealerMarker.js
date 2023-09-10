import React from 'react';
import { Marker, Popup } from 'react-leaflet-universal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";

const DealerMarker = ({ location, musicalNoteIcon, handleLocationClick, markerRefs }) => (
  <Marker
    position={[location.latitude, location.longitude]}
    icon={musicalNoteIcon}
    ref={(ref) => {
      if (ref) {
        markerRefs.current[location.name] = ref;
      }
    }}
    eventHandlers={{
      click: () => handleLocationClick(location),
    }}
  >
    <Popup className="dealer-map-popup">
      <div className="popup-content">
        <strong>{location.name}</strong>
        <div className="popup-detail">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="dealer-popup-icon"
            onClick={() => handleLocationClick(location)}
          />
          {location.address}, {location.city}, {location.state}{" "}
          {location.zip}, {location.country}
        </div>
        <div className="popup-detail">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            className="dealer-popup-icon"
          />
          {location.phone}
        </div>
        <div className="popup-detail">
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
