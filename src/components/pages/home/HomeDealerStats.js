import "../../../styles/theme.css";
import "../../../styles/HomeDealerStats.css";

import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import globe from "../../../assets/img/home/globe.webp";
import liberty from "../../../assets/img/home/liberty.webp";
import store from "../../../assets/img/home/store.webp";

const HomeDealerStats = () => {
  const countCountry = useMotionValue(0);
  const roundedCountry = useTransform(countCountry, (value) =>
    Math.round(value)
  );

  const countState = useMotionValue(0);
  const roundedState = useTransform(countState, (value) => Math.round(value));

  const countDealers = useMotionValue(0);
  const roundedDealers = useTransform(countDealers, (value) =>
    Math.round(value)
  );

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const controlsCountry = animate(countCountry, 28, { duration: 5 });
      const controlsState = animate(countState, 26, { duration: 5 });
      const controlsDealers = animate(countDealers, 147, { duration: 5 });

      return () => {
        controlsCountry.stop();
        controlsState.stop();
        controlsDealers.stop();
      };
    }
  }, [countCountry, countState, countDealers, inView]);

  return (
    <div
      className="stripe-home-dealer-stats"
      itemScope
      itemType="http://schema.org/ItemList"
    >
      <Row ref={ref} className="home-dealer-stats">
        <Col>
          <div
            className="stats-card"
            itemScope
            itemType="http://schema.org/QuantitativeValue"
          >
            <motion.h1
              className="gradient-text"
              aria-label={`${roundedCountry} countries`}
              itemProp="value"
            >
              {roundedCountry}
            </motion.h1>
            <img
              src={globe}
              alt="globe"
              className="stats-icon"
              itemProp="image"
            />
            <h2 className="stats-title" itemProp="name">
              Countries
            </h2>
          </div>
        </Col>
        <Col>
          <div
            className="stats-card"
            itemScope
            itemType="http://schema.org/QuantitativeValue"
          >
            <motion.h1
              className="gradient-text"
              aria-label={`${roundedDealers} dealers worldwide`}
              itemProp="value"
            >
              {roundedDealers}
            </motion.h1>
            <img
              src={store}
              alt="store"
              className="stats-icon"
              itemProp="image"
            />
            <h2 className="stats-title" itemProp="name">
              Dealers Worldwide
            </h2>
          </div>
        </Col>
        <Col>
          <div
            className="stats-card"
            itemScope
            itemType="http://schema.org/QuantitativeValue"
          >
            <motion.h1
              className="gradient-text"
              aria-label={`${roundedState} U.S. states`}
              itemProp="value"
            >
              {roundedState}
            </motion.h1>
            <img
              src={liberty}
              alt="liberty"
              className="stats-icon"
              itemProp="image"
            />
            <h2 className="stats-title" itemProp="name">
              U.S. States
            </h2>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeDealerStats;
