// GoldenSticker.js
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const GoldenSticker = ({ isSubmenuOpen }) => {
  const stickerVariants = {
    open: {
      marginTop: '150px',
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: {
      marginTop: '0px',
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="golden-sticker"
        variants={stickerVariants}
        initial="closed"
        animate={isSubmenuOpen ? 'open' : 'closed'}
      >
        <p>
          All Beechler and ARB mouthpieces have been lab tested and proven safe
          for all long and short term human contact according to Reach
          compliance standards.
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default GoldenSticker;