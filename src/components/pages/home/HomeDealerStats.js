import "../../../styles/theme.css";
import "../../../styles/HomeDealerStats.css";

import React, { useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import globe from "../../../assets/img/home/globe.png";
import liberty from "../../../assets/img/home/liberty.png";
import store from "../../../assets/img/home/store.png";

const HomeDealerStats = () => {
  const countCountry = useMotionValue(0);
  const roundedCountry = useTransform(countCountry, value => Math.round(value));

  const countState = useMotionValue(0);
  const roundedState = useTransform(countState, value => Math.round(value));

  const countDealers = useMotionValue(0);
  const roundedDealers = useTransform(countDealers, value => Math.round(value));

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const controlsCountry = animate(countCountry, 27, { duration: 5 });
      const controlsState = animate(countState, 34, { duration: 5 });
      const controlsDealers = animate(countDealers, 130, { duration: 5 });

      return () => {
        controlsCountry.stop();
        controlsState.stop();
        controlsDealers.stop();
      }
    }
  }, [countCountry, countState, countDealers, inView]);

  return (
    <div className="stripe-home-dealer-stats">
      <Row ref={ref} className="home-dealer-stats">
        <Col>
          <Card className="stats-card">
            <Card.Body>
              <motion.h1 className="gradient-text">{roundedCountry}</motion.h1>
              <Card.Title className="stats-title">Countries</Card.Title>
              <img src={globe} alt="globe" className="stats-icon" />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="stats-card">
            <Card.Body>
              <motion.h1 className="gradient-text">{roundedDealers}</motion.h1>
              <Card.Title className="stats-title">Dealers Worldwide</Card.Title>
              <img src={store} alt="store" className="stats-icon"/>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="stats-card">
            <Card.Body>
              <motion.h1 className="gradient-text">{roundedState}</motion.h1>
              <Card.Title className="stats-title">States</Card.Title>
              <img src={liberty} alt="liberty" className="stats-icon"/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomeDealerStats;