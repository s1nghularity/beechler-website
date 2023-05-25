import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import "../../../styles/AboutPage.css";
import arbLoop from "../../../assets/img/about/arb-loop.mp4";

const timelineData = [
  {
    type: "text",
    content: "Timeline text 1",
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300",
  },
  {
    type: "animation",
    direction: "left",
    content: <img className="animated-content" src="https://picsum.photos/400/300?random=1" alt="Animated content 1" />,
  },
  {
    type: "animation",
    direction: "right",
    content: <img className="animated-content" src="https://picsum.photos/400/300?random=2" alt="Animated content 2" />,
  },
    {
        type: "animation",
        direction: "left",
        content: <img className="animated-content" src="https://picsum.photos/400/300?random=3" alt="Animated content 3" />,
    },

    {
        type: "animation",
        direction: "right",
        content: <img className="animated-content" src="https://picsum.photos/400/300?random=4" alt="Animated content 4" />,
    },

];

const TimelineItem = ({ item }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : (item.direction === "left" ? 'translateX(-100px)' : 'translateX(100px)'),
        config: { mass: 5, tension: 500, friction: 80 },
    });

    switch (item.type) {
        case "text":
            return <p>{item.content}</p>;
        case "image":
            return <img src={item.src} alt="" />;
        case "animation":
            return (
                <animated.div
                    ref={ref}
                    style={animation}
                    className={`timeline-animation ${
                        item.direction === "left"
                            ? "timeline-animation-left"
                            : "timeline-animation-right"
                    }`}
                >
                    {item.content}
                </animated.div>
            );
        default:
            return null;
    }
};


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
            Founded by Elmer Beechler in 1942, we design, manufacture, and
            distribute outstanding saxophone and clarinet mouthpieces and
            woodwind accessories. Remlé Musical Products, Inc. has been under
            the direction of Elmer Beechler’s daughter, Judy Beechler Roan,
            since 1993. We believe we make the best mouthpieces in the world for
            the professional musician and players who want to play well for the
            simple pleasure and joy of it.
            <br />
            <br />
            Our mouthpieces provide the variations needed to produce an
            individual richness and quality of voice. All of our mouthpieces are
            made according to precise design specifications. All surfaces are
            hand finished by skilled artisans and play tested by professional
            musicians. Because of our years of experience, excellent
            craftsmanship, and extraordinary attention to detail, we can offer
            musicians an almost infinite choice of fine mouthpieces to suit
            varying embouchures, reed preferences, choice of materials, playing
            styles, and situations. We can also make custom mouthpieces to suit
            individual preferences.
            <br />
            <br />
            We use Rico Jazz Select Reeds to play test all of our mouthpieces as
            we have found them to be consistent in quality and performance.
          </p>
        </div>
      </div>
      <div className="about-timeline">
                {timelineData.map((item, index) => (
                    <TimelineItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default AboutPage;
