import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import "../../../styles/theme.css";
import "../../../styles/HomeArtistCard.css";




const artists = [
    {
      name: "Alex Doronov",
      mouthpieces: ["Bellite Alto #7", "Bellite Soprano #7"]
    },
    {
        name: "Brandon Fields",
        mouthpieces: ["Tonalex Alto 5S", "Bellite Alto #8"]
      },
          {
      name: "Charles McPherson",
      mouthpieces: ["Diamond Alto M5S", "Jazz Model Alto C80"]
    },

];

const ArtistCard = ({ artist }) => {
  return (
    <Card className="text-white bg-secondary artist-card">
      <Card.Body>
        <Card.Title className="artist-name">{artist.name}</Card.Title>
        <Card.Text>
          {artist.mouthpieces.map((mouthpiece, index) => (
            <div key={index} className="mouthpiece">{mouthpiece}</div>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const HomeArtistCard = () => {
    return (
      <Container className="home-artist-card">
        <Row className="artist-row">
          {artists.map((artist, index) => (
            <Col key={index} xs={12} sm={4} className={`artist-col ${index > 2 ? "d-none d-lg-block" : ""}`}>
              <ArtistCard artist={artist} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  

export default HomeArtistCard;