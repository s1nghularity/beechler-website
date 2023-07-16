import React, { forwardRef } from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

const colorArray = [
  "rgb(255, 205, 197)",  // Light Red
  "rgb(255, 240, 200)",  // Light Orange
  "rgb(255, 253, 200)",  // Light Yellow
  "rgb(227, 255, 200)",  // Light Green
  "rgb(200, 241, 255)",  // Light Blue
  "rgb(225, 200, 255)",  // Light Indigo
  "rgb(238, 213, 255)",  // Light Violet
  "rgb(255, 205, 230)",  // Light Pink
  "rgb(255, 235, 200)",  // Lighter Orange
  "rgb(239, 233, 207)",  // Darker Yellow
  "rgb(210, 239, 223)",  // Medium Green
  "rgb(200, 249, 255)",  // Cornflower Blue
  "rgb(222, 211, 239)",  // Dark Slate Blue
  "rgb(233, 224, 238)",  // Medium Purple
  "rgb(255, 220, 247)",  // Deep Pink
  "rgb(255, 219, 221)"   // Tomato
];

function getDynamicColor(artist) {
  let index = artist.charCodeAt(0) % 16; // Get the ASCII value of the first character and mod it by 16
  return colorArray[index];
}


const ArtistCard = forwardRef(({ artist }, ref) => {
  return (
    <motion.div ref={ref} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <Card className="artist-card">
        <Card.Body>
          <Card.Title className="artist-name" style={{ color: getDynamicColor(artist.name) }}>
            {artist.name}
          </Card.Title>
          <Card.Text className="mouthpiece-container">
            {artist.mouthpieces.slice(0, 3).map((mouthpiece, index) => (
              <div key={index} className="mouthpiece">
                {mouthpiece}
              </div>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
});

export default ArtistCard;
