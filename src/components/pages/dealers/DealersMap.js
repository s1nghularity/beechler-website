import React, { useState, useEffect, useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { locationData } from "./DealerData";
import "../../../styles/DealersPage.css";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import {
  faMusic,
  faMapMarkerAlt,
  faPhoneAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DealersMap = () => {
  const [search, setSearch] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  library.add(faMusic);

  const musicIconSvg = icon({ prefix: "fas", iconName: "music" }).html;

  const musicalNoteIcon = L.divIcon({
    html: `<div class="musical-note-icon">${musicIconSvg}</div>`,
    iconSize: [25, 25],
    className: "leaflet-marker-icon",
  });

  const filteredLocations = useMemo(
    () =>
      locationData.filter((location) =>
        location.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const mapRef = useRef(null);

  const handleMouseEnter = () => {
    const map = mapRef.current;
    if (map) {
      map.scrollWheelZoom.disable();
    }
  };

  const handleMouseLeave = () => {
    const map = mapRef.current;
    if (map) {
      map.scrollWheelZoom.enable();
    }
  };

  const markerRefs = useRef({});

  const handleLocationClick = (location) => {
    const map = mapRef.current;
    const markerRef = markerRefs.current[location.name];
    if (map && markerRef) {
      map.flyTo([location.latitude, location.longitude], 15, {
        animate: true,
        duration: 1, // 1 second; adjust as needed
      });
      markerRef.openPopup();
    }
  };

  const getDistance = (location) => {
    if (!userLocation) {
      return Infinity;
    }
    const R = 6371e3; // metres
    const φ1 = (userLocation.latitude * Math.PI) / 180; // φ, λ in radians
    const φ2 = (location.latitude * Math.PI) / 180;
    const Δφ = ((location.latitude - userLocation.latitude) * Math.PI) / 180;
    const Δλ = ((location.longitude - userLocation.longitude) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) *
        Math.cos(φ2) *
        Math.sin(Δλ / 2) *
        Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres
    return d;
  };

  const sortedLocations = useMemo(
    () =>
      filteredLocations
        .map((location) => ({
          ...location,
          distance: getDistance(location),
        }))
        .sort((a, b) => a.distance - b.distance),
    [filteredLocations, userLocation]
  );

  const closestLocation = sortedLocations[0];

  return (
    <Container fluid>
      <h1 className="dealer-map-title">Making Music All Over The World</h1>
      <MapContainer
        center={[38, -95]}
        zoom={4}
        style={{ height: "80vh", width: "100%" }}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredLocations.map((location) => (
          <Marker
            key={location.name}
            position={[location.latitude, location.longitude]}
            icon={musicalNoteIcon}
            ref={(ref) => {
              markerRefs.current[location.name] = ref;
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
      {location.address}, {location.city}, {location.state} {location.zip}, {location.country}
    </div>
    <div className="popup-detail">
      <FontAwesomeIcon icon={faPhoneAlt} className="dealer-popup-icon" />
      {location.phone}
    </div>
    <div className="popup-detail">
      <FontAwesomeIcon icon={faGlobe} className="dealer-popup-icon" />
      <a href={location.website} target="_blank" rel="noreferrer">
        {location.website}
      </a>
    </div>
  </div>
</Popup>
          </Marker>
        ))}
        <div
          className="dealer-search-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="dealer-search-bar">
            <InputGroup className="mb-3">
              <InputGroup.Text id="search-addon">Search</InputGroup.Text>
              <FormControl
                type="text"
                placeholder="Search for dealers"
                aria-label="Search"
                aria-describedby="search-addon"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="dealer-search-input"
              />
            </InputGroup>
          </div>
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
      </MapContainer>
    </Container>
  );
};

export default DealersMap;
