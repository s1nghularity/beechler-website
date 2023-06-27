import React, { useState } from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { motion, AnimatePresence } from "framer-motion";
import elmer from "../../../assets/img/about/elmer.jpg";
import Group from "../../../assets/img/about/Group.jpg";
import Jim from "../../../assets/img/about/Jim.jpg";
import "../../../styles/AboutPage.css";

function AboutTimelineNew() {
    const [index, setIndex] = useState(0);

    /*use elmer image imports*/
    const sections = [
        { image: elmer, text: 'Founded by Elmer Beechler in 1942, we design, manufacture, and distribute outstanding saxophone and clarinet mouthpieces and woodwind accessories. Elmers passion for music and vision for creating mouthpieces continues to inspire and enhance the playing experience of professional musicians all over the world today.' },      
        { image: Group, text: ' Remlé Musical Products, Inc. has been under the direction of Elmer Beechlers daughter, Judith Roan Beechler, since 1993. Judy carries on her fathers legacy of excellence and innovation in mouthpiece design and manufacturing.' },
        { image: Jim, text: 'We believe we make the best mouthpieces in the world for the professional musician and players who want to play well for the simple pleasure and joy of it.' },
    ];

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    let pathData = "M0 548L8.8 545.5C17.7 543 35.3 538 53 545.7C70.7 553.3 88.3 573.7 106 576.5C123.7 579.3 141.3 564.7 159 567.3C176.7 570 194.3 590 212 596.3C229.7 602.7 247.3 595.3 265 582.5C282.7 569.7 300.3 552.3 318 551.8C335.7 551.3 353.3 568.7 371 582.2C388.7 595.7 406.3 605.3 423.8 606.7C441.3 608 458.7 601 476.2 597.8C493.7 594.7 511.3 595.3 529 595.2C546.7 595 564.3 594 582 586.3C599.7 578.7 617.3 564.3 635 553.8C652.7 543.3 670.3 536.7 688 545.2C705.7 553.7 723.3 577.3 741 579.8C758.7 582.3 776.3 563.7 794 561.2C811.7 558.7 829.3 569.7 847 581.8C864.7 593.7 882.3 606.3 891.2 615.8L900 624";


let SVGsections = pathData.split('C');

let section1 = SVGsections.slice(0, SVGsections.length / 3).join('C');
let section2 = SVGsections.slice(0, (SVGsections.length / 3) * 2).join('C');
let section3 = SVGsections.join('C');

const svgPath = () => {
  switch (index) {
      case 0:
          return section1;
      case 1:
          return section2;
      case 2:
          return section3;
      default:
          return "M0 0 L0 0";
  }
};

return (
  <Container className="about-timeline-container"> {/* add a class to the Container */}
      <Row>
          <Col>
              <AnimatePresence>
                  <motion.svg 
                      key={index}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1 }}
                      viewBox="0 0 100 400"
                      style={{ overflow: "visible", width: "100%", background: "black" }}
                  >
                      <defs>
    <linearGradient id="gradient" gradientTransform="rotate(45)">
      <stop offset="5%" stopColor="#fbb035"></stop>
      <stop offset="74%" stopColor="#ffdd00"></stop>
    </linearGradient>
  </defs>
                      <motion.path
                          d={svgPath()}
                          fill="transparent"
                          stroke="white"
                          strokeWidth="1rem"
                          vectorEffect="non-scaling-stroke"
                      />
                  </motion.svg>
              </AnimatePresence>
          </Col>
      </Row>
      <Row>
          <Col>
              <Carousel activeIndex={index} onSelect={handleSelect}>
                  {sections.map((section, idx) => (
                      <Carousel.Item key={idx}>
                          <img
                              className="d-block w-50 timeline-image" 
                              src={section.image}
                              alt="Section slide"
                          />
                          <Carousel.Caption>
                              <h3 className="timeline-text">{section.text}</h3>
                          </Carousel.Caption>
                      </Carousel.Item>
                  ))}
              </Carousel>
          </Col>
      </Row>
  </Container>
);
}

export default AboutTimelineNew;
