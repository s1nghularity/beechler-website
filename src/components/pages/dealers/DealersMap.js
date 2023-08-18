// DealersMap.js
import React, { useState, useEffect, useMemo, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Container } from "react-bootstrap";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { locationData } from "./DealerData";
import "../../../styles/DealersPage.css";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import DealerSearch from "./DealerSearch";
import DealerList from "./DealerList";
import DealerMarker from "./DealerMarker";

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
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredLocations.map((location) => (
          <DealerMarker
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
