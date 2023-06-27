import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import elmer from '../../../assets/img/about/elmer.jpg';
import Group from '../../../assets/img/about/Group.jpg';
import Jim from '../../../assets/img/about/Jim.jpg';
import '../../../styles/AboutPage.css';

const AboutCarousel = () => {
  const data = [
    {
      image: elmer,
      text:
        'Founded by Elmer Beechler in 1942, we design, manufacture, and distribute outstanding saxophone and clarinet mouthpieces and woodwind accessories. Elmer’s passion for music and vision for creating mouthpieces continues to inspire and enhance the playing experience of professional musicians all over the world today.',
    },
    {
      image: Group,
      text:
        'Remlé Musical Products, Inc. has been under the direction of Elmer Beechler’s daughter, Judith Roan Beechler, since 1993. Judy carries on her father’s legacy of excellence and innovation in mouthpiece design and manufacturing.',
    },
    {
      image: Jim,
      text:
        'We believe we make the best mouthpieces in the world for the professional musician and players who want to play well for the simple pleasure and joy of it.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: 'about-carousel',
    appendDots: (dots) => (
      <div>
        <ul className="dots">{dots}</ul>
      </div>
    ),
    customPaging: () => <div className="dot"></div>,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {data.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.image} alt={`slide-${index}`} className="about-carousel-img" />
            <Container>
              <Row>
                <Col>
                  <p className="about-carousel-text">{slide.text}</p>
                </Col>
              </Row>
            </Container>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AboutCarousel;