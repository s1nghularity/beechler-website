import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import bwgroup from '../../../assets/img/gallery/IMG_5689.png'
import bwsolo from '../../../assets/img/gallery/IMG_5687.png'
import Jim from '../../../assets/img/about/Jim.jpg';
import '../../../styles/AboutPage.css';

const AboutCarousel = () => {
  const data = [
    {
      image: bwgroup,
      text:
      'Our mouthpieces provide the variations needed to produce an      individual richness and quality of voice. All surfaces are hand      finished by skilled artisans, some of whom have been with us for over twenty years.',
    },
    {
      image: bwsolo,
      text:
        ' Because of our years of experience, excellent craftsmanship, and extraordinary attention to detail, we can offer musicians an almost infinite choice of fine mouthpieces to suit varying embouchures, reed preferences, choice of materials, playing styles, and situations.',
    },
    {
      image: Jim,
      text:
        'We can also make custom mouthpieces to suit individual preferences.',
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