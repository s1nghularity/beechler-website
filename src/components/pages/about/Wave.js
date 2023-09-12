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

  /* 
    To manipulate the animation:
    - amplitude: ↑ wave height, ↓ wave shortness
    - frequency: ↑ wave width, ↓ wave narrowness
    - phase: ← wave left, → wave right
    - offset: ↑ wave up, ↓ wave down
    - frame: ↑ wave speed, ↓ wave slowness
  */

  const animateWave = (frame) => {
    pathsRef.current.forEach((path, i) => {
      if (path) {
        path.setAttribute(
          "d",
          generateSineWavePath(10, 200, frame + i * 15, 100 + i * 15)
        );
      }
    });
    if (frame > 1440 + 200) {
      // 1440 is the width of the SVG, 200 is the frequency of the sine wave
      frame = -200;
      setTimeout(() => requestAnimationFrame(() => animateWave(frame + 7)), 7000); // Delay animation
    } else {
      requestAnimationFrame(() => animateWave(frame + 7));
    }
  };

  useEffect(() => {
    animateWave(-7000); // Delay animation
  }, []);

  return (
    <svg viewBox="0 0 1440 600" width="1440" height="600" className="wave-about" role="img" aria-label="Wave Animation">
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

      <image href={treble2} x="5rem" y="4.75rem" width="100" height="100" className="treble2" alt="Treble Clef" />
    </svg>
  );
}