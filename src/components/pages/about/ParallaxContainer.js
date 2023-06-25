import React from "react";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import AnimatedBackground from "../../../components/pages/about/AnimatedBackground.js";

import "../../../styles/AboutPage.css";

const ParallaxSection = ({ image, content, background }) => {
const parallax = useParallax({ speed: -0.5 });

return (
<div
    className="parallax-section"
    style={{
    position: "relative",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    }}
>
    <img
    src={image}
    alt=""
    className="parallax-image image-animation"
    ref={parallax.ref}
    style={{
        position: "absolute",
        zIndex: 1,
        transform: `translateY(${parallax.value}px)`,
    }}
    />
    <div
    className="parallax-text-container text-animation"
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
    }}
    >
    <p className="parallax-text">{content}</p>
    </div>
</div>
);
};

const ParallaxContainer = ({ timelineData }) => {
const renderParallaxSections = () =>
    timelineData.map((item, index) => (
    <ParallaxSection key={index} image={item.image} content={item.content} />
    ));

return (
    <ParallaxProvider>
    <div className="parallax-container">
        <AnimatedBackground />
        {renderParallaxSections()}
    </div>
    </ParallaxProvider>
);
};


export default ParallaxContainer;
