import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import the chevron icons

import "../../../styles/ArtistsPage.css";
import artistsData from "./ArtistData";
import ArtistCard from "./ArtistCard";

const ArtistsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const artistsPerPage = 25;

  const lastIndex = currentPage * artistsPerPage;
  const firstIndex = lastIndex - artistsPerPage;
  const currentArtists = artistsData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(artistsData.length / artistsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Container className="artist-page">
      <Col className="artist-page-header">
        <h1 className="text-center artist-title-header">
          The Musicians Choice
        </h1>
        <div className="pagination-buttons">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="artist-chevron"
          >
            <FaChevronLeft />
          </button>
          <div className="music-note">&#9835;</div>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="artist-chevron"
          >
            <FaChevronRight />
          </button>
        </div>
      </Col>

      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {currentArtists.map((artist, index) => (
          <Col key={index}>
            <ArtistCard artist={artist} className="artist-page-card" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArtistsPage;
