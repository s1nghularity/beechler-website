import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "../../../styles/ArtistsPage.css";
import artistsData from "./ArtistData";
import ArtistCard from "./ArtistCard";

function GridItem({ delayPerPixel, i, originIndex, originOffset, artist }) {
  const delayRef = useRef(0);
  const offset = useRef({ top: 0, left: 0 });
  const ref = useRef();

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    offset.current = {
      top: element.offsetTop,
      left: element.offsetLeft
    };

    if (i === originIndex) {
      originOffset.current = offset.current;
    }
  }, [delayPerPixel]);

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    delayRef.current = d * delayPerPixel;
  }, [delayPerPixel]);

  return <ArtistCard ref={ref} artist={artist} delayRef={delayRef} />;
}

function Grid({ delayPerPixel = 0.0008, currentArtists, currentPage }) {
  const originOffset = useRef({ top: 0, left: 0 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [currentPage]);

  return (
    <motion.div initial="hidden" animate={controls} variants={{}}>
      {currentArtists.map((artist, i) => (
        <GridItem
          key={i}
          i={i}
          originIndex={13}
          delayPerPixel={delayPerPixel}
          originOffset={originOffset}
          artist={artist}
        />
      ))}
    </motion.div>
  );
}

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
