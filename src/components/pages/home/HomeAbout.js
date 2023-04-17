import React from 'react';
import { Carousel } from 'react-bootstrap';
import about1 from '../../../assets/img/home/about/about1.jpg';
import about2 from '../../../assets/img/home/about/about2.jpg';
import about3 from '../../../assets/img/home/about/about3.jpg';

const HomeAbout = () => {
  return (
    <div className="home-about">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={about1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Since 1942, We've Been Crafting Exceptional Mouthpieces</h3>
            <p>Our hand-finished mouthpieces are crafted to precise specifications and play tested by professionals.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={about2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Infinite Choice of Fine Mouthpieces to Suit Varying Styles</h3>
            <p>We provide musicians an almost infinite choice of fine mouthpieces to suit varying styles and situations.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={about3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Crafted with Excellent Craftsmanship and Attention to Detail</h3>
            <p>Our mouthpieces are crafted with excellent craftsmanship and extraordinary attention to detail.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeAbout;
