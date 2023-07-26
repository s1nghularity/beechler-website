import { Container, Row, Col } from 'react-bootstrap';
import "../../../styles/HomeAbout.css";

function HomeAbout() {
  return (
    <Container fluid className="home-about stripe-home-about">
      <Row className="home-about-row">
        <Col className="home-about-left">
          <div className="our-story-carousel">
            <h2 className="home-about-left-title">OUR STORY</h2>
            <p className="about-main-text">
              For over 77 years professional musicians and those who play for the joy and pleasure of the music have favored Beechler Mouthpieces.
              <br/><br/> 
              Join the ranks of saxophonists and woodwind players who trust Beechler for their mouthpieces and accessory needs.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeAbout;