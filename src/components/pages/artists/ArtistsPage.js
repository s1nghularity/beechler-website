import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../styles/ArtistsPage.css";
import artistsData from "./ArtistData";
import ArtistCard from "./ArtistCard";

const ArtistsPage = () => {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={6} xl={6} className="g-4">
        {artistsData.map((artist, index) => (
          <Col key={index}>
            <ArtistCard artist={artist} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArtistsPage;
