import "../../../styles/AboutPage.css";


import React from 'react';
import { motion } from 'framer-motion';
import { FiMusic } from "react-icons/fi";
import { Container, Row, Col } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import arbLoop from "../../../assets/img/about/arb-loop.mp4";
import NAMM2019 from "../../../assets/img/about/NAMM-2019.jpg";
import Group from "../../../assets/img/about/Group.jpg";
import Jim from "../../../assets/img/about/Jim.jpg";
import './AboutPage.css'; // Assuming you have a separate CSS file

const timelineData = [
  {
    type: "text",
    content: "Founded by Elmer Beechler in 1942, we design, manufacture, and distribute outstanding saxophone and clarinet mouthpieces and woodwind accessories.",
    image: NAMM2019,
  },
  {
    type: "text",
    content: "Remlé Musical Products, Inc. has been under the direction of Elmer Beechler’s daughter, Judy Beechler Roan, since 1993.",
    image: Group,
  },
  {
    type: "text",
    content: "We believe we make the best mouthpieces in the world for the professional musician and players who want to play well for the simple pleasure and joy of it.",
    image: Jim,
  },
];

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Remle Musical Products</h1>
        <div className="about-video">
          <video src={arbLoop} autoPlay loop muted />
        </div>
        <div className="about-text">
          <p>
            We are a women-owned, family-owned, handcrafted artisans business.
          </p>
        </div>
      </div>

      <Container fluid>
        {timelineData.map((item, index) => (
          <Row className={`timeline-section ${index % 2 === 0 ? 'left' : 'right'}`}>
            <Col md={6}>
              <motion.div className="timeline-image" whileHover={{ scale: 1.1 }}>
                <img src={item.image} alt="Timeline" />
              </motion.div>
            </Col>
            <Col md={6}>
              <motion.div className="timeline-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <p>{item.content}</p>
              </motion.div>
            </Col>
          </Row>
        ))}
      </Container>

      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* Add your images here */}
      </Masonry>
    </div>
  );
};

export default AboutPage;
