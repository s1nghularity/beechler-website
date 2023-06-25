import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

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
      const layers = document.querySelectorAll('.parallax-section');
      layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const yPos = -(scrollY * speed / 100);
        layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="background-svg">
      <div ref={ref1} className={`parallax-section ${inView1 ? 'animate' : ''}`}>
        <img className="parallax-image" src={elmer} alt="Elmer Beechler" />
        <figcaption>
          <p className="parallax-text">
            Founded by Elmer Beechler in 1942, we design, manufacture, and distribute outstanding saxophone and clarinet mouthpieces and woodwind accessories.
          </p>
        </figcaption>
      </div>
      <div ref={ref2} className={`parallax-section ${inView2 ? 'animate' : ''}`}>
        <img className="parallax-image" src={Group} alt="Group" />
        <figcaption>
          <p className="parallax-text">
            Remlé Musical Products, Inc. has been under the direction of Elmer Beechler’s daughter, Judy Roan Beechler, since 1993.
          </p>
        </figcaption>
      </div>
      <div ref={ref3} className={`parallax-section ${inView3 ? 'animate' : ''}`}>
        <img className="parallax-image" src={Jim} alt="Jim" />
        <figcaption>
          <p className="parallax-text">
            We believe we make the best mouthpieces in the world for the professional musician and players who want to play well for the simple pleasure and joy of it.
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
