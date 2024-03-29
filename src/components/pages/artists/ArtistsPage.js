import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import KeyboardDoubleArrowRightTwoToneIcon from "@mui/icons-material/KeyboardDoubleArrowRightTwoTone";
import KeyboardDoubleArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardDoubleArrowLeftTwoTone";

import "../../../styles/ArtistsPage.css";
import artistsData from "./ArtistData";
import ArtistCard from "./ArtistCard";

const Grid = ({ currentArtists }) => {
  return (
    <Row xs={1} sm={2} md={2} lg={3} xl={5} className="g-3">
      {currentArtists.map((artist) => (
        <Col key={artist.id}>
          <ArtistCard artist={artist} className="artist-page-card" />
        </Col>
      ))}
    </Row>
  );
};

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
            aria-label="Previous Page"
          >
            <KeyboardDoubleArrowLeftTwoToneIcon />
          </button>
          <div className="music-note">&#9835;</div>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="artist-chevron"
            aria-label="Next Page"
          >
            <KeyboardDoubleArrowRightTwoToneIcon />
          </button>
        </div>
      </Col>

      <Grid currentArtists={currentArtists} />
    </Container>
  );
};

export default ArtistsPage;
