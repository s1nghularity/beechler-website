import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import about1 from "../../../assets/img/home/about/about1.jpg";
import about2 from "../../../assets/img/home/about/about2.jpg";
import about2h from "../../../assets/img/home/about/hands2.png";
import about3 from "../../../assets/img/home/about/about3.jpg";
import about4 from "../../../assets/img/home/about/nbc-elmer.png";
import about4bw from "../../../assets/img/home/about/nbc.png";
import about5 from "../../../assets/img/home/about/hands2.png";

const images = [
  { id: 1, src: about1, alt: "Unleash your sound." },
  { id: 2, src: about2, alt: "Crafted to perfection." },
  { id: 3, src: about2h, alt: "Crafted to perfection." },
  { id: 4, src: about3, alt: "Experience the difference." },
  { id: 5, src: about4, alt: "Unmatched in the industry." },
  { id: 6, src: about4bw, alt: "Timeless style and design." },
  { id: 7, src: about5, alt: "Pioneers of technique." },
];

const HomeOurStoryCarousel = () => {
  return (
    <ParallaxProvider>
      <div style={{ height: '100vh', overflowY: 'scroll', backgroundColor: 'black' }}>
        {images.map((image, index) => (
          <div key={index} style={{ height: '200vh', position: 'relative' }}>
            <Parallax y={[50, -50]}>
              <img src={image.src} alt={image.alt} style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </Parallax>
            <Parallax y={[100, -100]}>
              <div style={{ position: 'absolute', top: '75%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>{image.alt}</div>
            </Parallax>
          </div>
        ))}
      </div>
    </ParallaxProvider>
  );
};

export default HomeOurStoryCarousel;
