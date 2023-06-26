import * as React from "react";
import { useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

import elmer from "../../../assets/img/about/elmer.jpg";
import Group from "../../../assets/img/about/Group.jpg";
import Jim from "../../../assets/img/about/Jim.jpg";
import jazzlight from "../../../assets/img/about/jazzlight.mp4";

const AboutTimeline = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const layers = document.querySelectorAll(".parallax-section");
      layers.forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const yPos = -((scrollY * speed) / 100);
        layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useViewportScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="about-timeline">
      <motion.svg
        id="visual"
        viewBox="0 0 675 900"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        style={{ position: "absolute", zIndex: -1 }}
        className="timeline-svg"
      >
        {/* Background */}
        <rect x="0" y="0" width="675" height="900" fill="black"></rect>

        {/* Path with linear gradient stroke */}
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(315)">
            <stop offset="5%" stopColor="#fbb035"></stop>
            <stop offset="74%" stopColor="#ffdd00"></stop>
          </linearGradient>
        </defs>
        <motion.path
          d="M127 0L129.5 8.8C132 17.7 137 35.3 129.3 53C121.7 70.7 101.3 88.3 98.5 106C95.7 123.7 110.3 141.3 107.7 159C105 176.7 85 194.3 78.7 212C72.3 229.7 79.7 247.3 92.5 265C105.3 282.7 123.7 300.3 124.2 318C124.7 335.7 107.3 353.3 93.8 371C80.3 388.7 70.7 406.3 69.3 423.8C68 441.3 75 458.7 78.2 476.2C81.3 493.7 80.7 511.3 80.8 529C81 546.7 82 564.3 89.7 582C97.3 599.7 111.7 617.3 122.2 635C132.7 652.7 139.3 670.3 130.8 688C122.3 705.7 98.7 723.3 96.2 741C93.7 758.7 112.3 776.3 116.2 794C120 811.7 109 829.3 97.8 847C86.7 864.7 75.3 882.3 69.7 891.2L64 900"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="miter"
          stroke="url(#gradient)"
          strokeWidth="16"
          style={{ pathLength }}
        ></motion.path>
      </motion.svg>

      <div
        ref={ref1}
        className={`parallax-section ${inView1 ? "animate" : ""}`}
      >
        <img className="parallax-image" src={elmer} alt="Elmer Beechler" />
        <figcaption>
          <p className="parallax-text">
            Founded by Elmer Beechler in 1942, we design, manufacture, and
            distribute outstanding saxophone and clarinet mouthpieces and
            woodwind accessories.
          </p>
        </figcaption>
      </div>
      <div
        ref={ref2}
        className={`parallax-section ${inView2 ? "animate" : ""}`}
      >
        <img className="parallax-image" src={Group} alt="Group" />
        <figcaption>
          <p className="parallax-text">
            Remlé Musical Products, Inc. has been under the direction of Elmer
            Beechler’s daughter, Judy Roan Beechler, since 1993.
          </p>
        </figcaption>
      </div>
      <div
        ref={ref3}
        className={`parallax-section ${inView3 ? "animate" : ""}`}
      >
        <img className="parallax-image" src={Jim} alt="Jim" />
        <figcaption>
          <p className="parallax-text">
            We believe we make the best mouthpieces in the world for the
            professional musician and players who want to play well for the
            simple pleasure and joy of it.
          </p>
        </figcaption>
      </div>
      <div className="about-video2">
        <video src={jazzlight} autoPlay loop muted className="about-video2" />
      </div>
    </div>
  );
};

export default AboutTimeline;
