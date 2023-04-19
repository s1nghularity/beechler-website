import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeArtistCard from '../../../components/pages/home/HomeArtistCard.js';
// import HomeDealerMap from './HomeDealerMap';

const HomeArtistDealer = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <HomeArtistCard />
        </Col>
        <Col md={8}>
          <div>
            <h2>Artists</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae nisl vitae nisl aliquet aliquam. Sed vitae nisl vitae nisl
                </p>
            </div>
            
        </Col>
      </Row>
    </Container>
  );
};

export default HomeArtistDealer;
