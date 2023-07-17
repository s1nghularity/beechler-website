import { motion } from "framer-motion";
import treble2 from "../../../components/pages/about/treble2.png";

export default function MusicalStaff() {
  return (
    <svg
      viewBox="0 0 1440 600"
      width="1440"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className="musical-staff"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <motion.path
          key={i}
          d={`M0,${584 - i * 15} L1440,${584 - i * 15}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="miter"
          stroke="#FCAF3C"
          strokeWidth="4"
          animate={{
            y: [0, -10, 0],
            transition: {
              y: {
                delay: i * 0.5,
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
              },
            },
          }}
        />
      ))}
      <image href={treble2} x="0" y="31rem" width="100" height="100" />
    </svg>
  );
}
