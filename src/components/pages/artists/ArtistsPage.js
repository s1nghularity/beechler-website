import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Avatar from "react-avatar";
import "../../../styles/ArtistsPage.css";

const artistsData = [
  {
    name: "Artist 1",
    avatar: "https://example.com/avatar1.jpg",
    mouthpiece: "Beechler Mouthpiece 1",
    quote: "Quote 1",
  },
  {
    name: "Artist 2",
    avatar: "https://example.com/avatar2.jpg",
    mouthpiece: "Beechler Mouthpiece 2",
    quote: "Quote 2",
  },
    {
    name: "Artist 3",
    avatar: "https://example.com/avatar3.jpg",
    mouthpiece: "Beechler Mouthpiece 3",
    quote: "Quote 3",
    },
    {
    name: "Artist 4",
    avatar: "https://example.com/avatar4.jpg",
    mouthpiece: "Beechler Mouthpiece 4",
    quote: "Quote 4",
    },
    {
    name: "Artist 5",
    avatar: "https://example.com/avatar5.jpg",
    mouthpiece: "Beechler Mouthpiece 5",
    quote: "Quote 5",
    },
    {
    name: "Artist 6",
    avatar: "https://example.com/avatar6.jpg",
    mouthpiece: "Beechler Mouthpiece 6",
    quote: "Quote 6",
    },
    {
    name: "Artist 7",
    avatar: "https://example.com/avatar7.jpg",
    mouthpiece: "Beechler Mouthpiece 7",
    quote: "Quote 7",
    },
    {
    name: "Artist 8",
    avatar: "https://example.com/avatar8.jpg",
    mouthpiece: "Beechler Mouthpiece 8",
    quote: "Quote 8",
    },
    {
    name: "Artist 9",
    avatar: "https://example.com/avatar9.jpg",
    mouthpiece: "Beechler Mouthpiece 9",
    quote: "Quote 9",
    },
 
];

const ArtistsPage = () => {
  return (
    <Container>
      <Row className="artists-page">
        {artistsData.map((artist) => (
          <Col md={4} className="artist-col">
            <Avatar src={artist.avatar} size="100" round className="artist-avatar" />
            <h3 className="artist-name">{artist.name}</h3>
            <p className="artist-mouthpiece">{artist.mouthpiece}</p>
            <p className="artist-quote">{artist.quote}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArtistsPage;
