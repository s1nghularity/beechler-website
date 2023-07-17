import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import treble2 from "../../../components/pages/about/treble2.png";

export default function Wave() {
  const pathsRef = useRef([]);

  // Cubic easing function
  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  // Generate a sine wave path
  const generateSineWavePath = (amplitude, frequency, phase, offset) => {
    let path = "";
    for (let x = 0; x <= 1440; x++) {
      const t = (x - phase) / frequency;
      const easedT = easeInOutCubic(t);
      const y =
        x >= phase && x <= phase + frequency
          ? amplitude * Math.sin(2 * Math.PI * easedT) + offset
          : offset;
      path += x === 0 ? `M ${x},${y} ` : `L ${x},${y} `;
    }
    return path;
  };

  // Update the phase of the sine wave every frame to create a wave effect
  useEffect(() => {
    const animateWave = () => {
      let frame = -5000; // Start the frame count at -200 to delay the start of the animation
      const interval = setInterval(() => {
        pathsRef.current.forEach((path, i) => {
          path.setAttribute(
            "d",
            generateSineWavePath(15, 200, frame + i * 15, 100 + i * 15)
          );
        });
        frame += 10; // Increase this to make the wave move faster
        if (frame > 1440 + 200) {
          // 1440 is the width of the SVG, 200 is the frequency of the sine wave
          clearInterval(interval);
          frame = -200;
          setTimeout(animateWave, 15000); // Start the next animation in 10 seconds
        }
      }, 1000 / 60); // 60 frames per second
      return () => clearInterval(interval);
    };
    animateWave();
  }, []);

  return (
    <svg viewBox="0 0 1440 600" width="1440" height="600" className="wave-about">
      {Array.from(Array(5), (_, i) => (
        <motion.path
          key={i}
          ref={(ref) => (pathsRef.current[i] = ref)}
          d={generateSineWavePath(15, 200, i * 15, 100 + i * 15)}
          fill="none"
          stroke="#FCAF3C"
          strokeWidth="3"
        />
      ))}
      <image href={treble2} x="5rem" y="4.75rem" width="100" height="100" />
    </svg>
  );
}
