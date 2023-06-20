import React from 'react';
import { Card} from 'react-bootstrap';

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

export default ArtistCard;
