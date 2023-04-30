import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { locationData } from "./DealerData";
import "../../../styles/DealersPage.css";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const DealersMap = () => {
  const [search, setSearch] = useState("");

  // Add the faMusic icon to the library
  library.add(faMusic);

  // Create an SVG string for the faMusic icon
  const musicIconSvg = icon({ prefix: "fas", iconName: "music" }).html;

  const musicalNoteIcon = L.divIcon({
    html: `<div style="color: var(--nav-accent); font-size: 1rem;">${musicIconSvg}</div>`,
    iconSize: [25, 25],
    className: "leaflet-marker-icon",
  });
  const filteredLocations = locationData.filter((location) => {
    return location.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    console.log(locationData);
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col lg={3}>

        <h1>Making Music All Over The World</h1>

          <InputGroup className="mb-3">
            <InputGroup.Text id="search-addon">Search</InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Search for dealers"
              aria-label="Search"
              aria-describedby="search-addon"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>


          
          {filteredLocations.map((location) => (
            <div key={location.name}>
              <strong>{location.name}</strong>
              <p>
                {location.address}, {location.city}, {location.state}{" "}
                {location.zip}, {location.country}
              </p>
            </div>
          ))}

        </Col>
        <Col lg={9}>
          <MapContainer
            center={[38, -95]}
            zoom={4}
            style={{ height: "80vh", width: "100%" }}
          >
            console.log(locationData);
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {filteredLocations.map((location) => (
              <Marker
                key={location.name}
                position={[location.latitude, location.longitude]}
                icon={musicalNoteIcon}
              >
                <Popup>
                  <strong>{location.name}</strong>
                  <br />
                  {location.address}, {location.city}, {location.state}{" "}
                  {location.zip}, {location.country}
                  <br />
                  <a href={location.website} target="_blank" rel="noreferrer">
                    {location.website}
                  </a>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default DealersMap;
