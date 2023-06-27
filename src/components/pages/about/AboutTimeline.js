import * as React from "react";
import { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container, Image, Figure } from "react-bootstrap";

import elmer from "../../../assets/img/about/elmer.jpg";
import Group from "../../../assets/img/about/Group.jpg";
import Jim from "../../../assets/img/about/Jim.jpg";
import jazzlight from "../../../assets/img/about/jazzlight.mp4";

const AboutTimeline = () => {
  const [activeSection, setActiveSection] = useState(1);

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  const { scrollYProgress } = useViewportScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, activeSection / 3]);

  return (
    <Container className="about-timeline">
<motion.svg
  id="visual"
  viewBox="0 0 900 675"
  width="100%"
  height="100%"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  version="1.1"
  style={{ position: "absolute", zIndex: -1 }}
  className="timeline-svg"
>
  <rect x="0" y="0" width="900" height="675" fill="black"></rect>

  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(45)">
      <stop offset="5%" stopColor="#fbb035"></stop>
      <stop offset="74%" stopColor="#ffdd00"></stop>
    </linearGradient>
  </defs>
  <motion.path
    d="M0 548L8.8 545.5C17.7 543 35.3 538 53 545.7C70.7 553.3 88.3 573.7 106 576.5C123.7 579.3 141.3 564.7 159 567.3C176.7 570 194.3 590 212 596.3C229.7 602.7 247.3 595.3 265 582.5C282.7 569.7 300.3 552.3 318 551.8C335.7 551.3 353.3 568.7 371 582.2C388.7 595.7 406.3 605.3 423.8 606.7C441.3 608 458.7 601 476.2 597.8C493.7 594.7 511.3 595.3 529 595.2C546.7 595 564.3 594 582 586.3C599.7 578.7 617.3 564.3 635 553.8C652.7 543.3 670.3 536.7 688 545.2C705.7 553.7 723.3 577.3 741 579.8C758.7 582.3 776.3 563.7 794 561.2C811.7 558.7 829.3 569.7 847 581.8C864.7 593.7 882.3 606.3 891.2 615.8L900 624"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="miter"
    stroke="url(#gradient)"
    strokeWidth="16"
    style={{ pathLength }}
  ></motion.path>
</motion.svg>



      <Figure
        ref={ref1}
        className={`timeline-section ${inView1 ? "animate" : ""}`}
        onClick={() => setActiveSection(1)}
      >
        <Image className="timeline-image" src={elmer} alt="Elmer Beechler" />
        <Figure.Caption>
          <p className="timeline-text">
            Founded by Elmer Beechler in 1942, we design, manufacture, and
            distribute outstanding saxophone and clarinet mouthpieces and
            woodwind accessories. Elmer's passion for music and vision for
            creating mouthpieces continues to inspire and enhance the playing
            experience of professional musicians all over the world today.
          </p>
        </Figure.Caption>
      </Figure>

      <Figure
        ref={ref2}
        className={`timeline-section ${inView2 ? "animate" : ""}`}
        onClick={() => setActiveSection(2)}
      >
        <Image className="timeline-image" src={Group} alt="Group" />
        <Figure.Caption>
          <p className="timeline-text">
            Remlé Musical Products, Inc. has been under the direction of Elmer
            Beechler’s daughter, Judith Roan Beechler, since 1993. Judy carries on her father's legacy of excellence and innovation in mouthpiece design and manufacturing.
          </p>
        </Figure.Caption>
      </Figure>
      <Figure
        ref={ref3}
        className={`timeline-section ${inView3 ? "animate" : ""}`}
        onClick={() => setActiveSection(1)}
      >
        <Image className="timeline-image" src={Jim} alt="Jim" />
        <Figure.Caption>
          <p className="timeline-text">
            We believe we make the best mouthpieces in the world for the
            professional musician and players who want to play well for the
            simple pleasure and joy of it.
          </p>
        </Figure.Caption>
      </Figure>
    </Container>
  );
};

export default AboutTimeline;






