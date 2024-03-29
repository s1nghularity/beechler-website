// DealersMap.js
import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Container } from "react-bootstrap";
import L from "leaflet";
import { locationData } from "./DealerData";
import "../../../styles/DealersPage.css";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import DealerSearch from "./DealerSearch";
import DealerList from "./DealerList";
import DealerMarker from "./DealerMarker";



const DealersMap = () => {
  const [search, setSearch] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(locationData);

  const mapRef = useRef(null);
  const markerRefs = useRef({});

  library.add(faMusic);
  const musicIconSvg = icon({ prefix: "fas", iconName: "music" }).html;
  const musicalNoteIcon = L.divIcon({
    html: `<div class="musical-note-icon">${musicIconSvg}</div>`,
    iconSize: [25, 25],
    className: "leaflet-marker-icon",
  });

  useEffect(() => {
    const result = locationData.filter((location) => {
      const searchLower = search.toLowerCase();
      return (
        location.name?.toLowerCase().includes(searchLower) ||
        location.address?.toLowerCase().includes(searchLower) ||
        location.city?.toLowerCase().includes(searchLower) ||
        location.state?.toLowerCase().includes(searchLower) ||
        location.zip?.toLowerCase().includes(searchLower) ||
        location.country?.toLowerCase().includes(searchLower) ||
        location.phone?.toLowerCase().includes(searchLower) ||
        location.website?.toLowerCase().includes(searchLower)
      );
    });
    setFilteredLocations(result);
  }, [search]);

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

  const handleTouchStart = () => {
    const map = mapRef.current;
    if (map) {
      map.scrollWheelZoom.disable(); // Disable scroll wheel zoom on touch start
    }
  };

  const handleTouchEnd = () => {
    const map = mapRef.current;
    if (map) {
      map.scrollWheelZoom.enable(); // Enable scroll wheel zoom on touch end
    }
  };

  const handleLocationClick = (location) => {
    const map = mapRef.current;
    const markerRef = markerRefs.current[location.name];
    if (map && markerRef) {
      map.flyTo([location.latitude, location.longitude], 15, {
        animate: true,
        duration: 3,
      });
      setTimeout(() => {
        markerRef.openPopup();
      }, 3000);
    }
  };



  return (
    <Container fluid>
      <h1 className="dealer-map-title">Making Music All Over The World</h1>
      <MapContainer
        center={[38, -95]}
        zoom={4}
        style={{ height: "80vh", width: "100%" }}
        ref={mapRef}
        touchZoom={true}
        tap={false}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-label="Interactive map showing dealer locations"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredLocations.map((location, index) => (
          <DealerMarker
            key={index}
            location={location}
            musicalNoteIcon={musicalNoteIcon}
            handleLocationClick={handleLocationClick}
            markerRefs={markerRefs}
          />
        ))}

        <div
          className="dealer-search-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label="Dealer search and list section"
        >
          <DealerSearch search={search} setSearch={setSearch} />
          <DealerList
            filteredLocations={filteredLocations}
            handleLocationClick={handleLocationClick}
          />
        </div>
      </MapContainer>
    </Container>
  );
};

export default DealersMap;
