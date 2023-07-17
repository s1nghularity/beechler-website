import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SineWave() {
  const [path, setPath] = useState("");
  function generateSineWavePath() {
    const amplitude = 50; // Set the amplitude of the wave
    const frequency = 0.01; // Set the frequency of the wave
    const phaseShift = 0; // Set the phase shift of the wave
    const verticalShift = 240; // Set the vertical shift of the wave
  
    let path = "M0," + verticalShift;
  
    for (let x = 0; x <= 480; x += 10) {
      const y = amplitude * Math.sin(frequency * x + phaseShift) + verticalShift;
      path += ` L${x},${y}`;
    }
  
    return path;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newPath = generateSineWavePath(); // You'll need to implement this function
      setPath(newPath);
    }, 100); // Update the path every 100ms

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d={path}
        fill="none"
        stroke="black"
        strokeWidth={4}
      />
    </motion.svg>
  );
}
