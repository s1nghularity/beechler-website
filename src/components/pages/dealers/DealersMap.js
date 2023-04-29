import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { locationData } from './DealerData';
import "../../../styles/DealersPage.css";


const musicNoteIcon = L.icon({
  iconUrl: '/path/to/music-note-icon.png',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
});

const DealersMap = () => {
    console.log('Dealers component rendered'); 
  return (
    <MapContainer className="map" center={[51.505, -0.09]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      {locationData.map((location) => (
        <Marker
          key={location.name}
          position={[location.latitude, location.longitude]}
          icon={musicNoteIcon}
        >
          <Popup>
            <h2>{location.name}</h2>
            <p>{location.address}</p>
            <p>
              {location.city}, {location.state} {location.zip}
            </p>
            <a href={location.website}>Website</a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default DealersMap;
