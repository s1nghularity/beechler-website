import React, { useState } from "react";
import { Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import "../../../styles/FAQs.css";

function FAQs() {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    {
      question: "What materials are used in Beechler mouthpieces?",
      answer:
        "All Beechler and ARB mouthpieces have been lab tested and proven safe for all long and short term human contact according to Reach compliance standards. Bellite & Metal mouthpieces are cast by the Lost Wax method in surgical stainless steel. All bite plates on metal mouthpieces are inlaid using rubber and are not applied with epoxy. Beechler Black mouthpieces are available on request.",
    },
    {
      question: "What materials are used for Beechler and ARB caps?",
      answer: "Metal/Bellite caps are made of spun aluminum then powder coated. Ebonite Alto, Tenor and Baritone caps are lacquered brass. Ebonite Clarinet and Soprano caps are silver."
    },
    {
      question:
        "What are the tip openings for saxophone and clarinet mouthpieces?",
      answer:
        "Saxophone tip openings range from 4-10. Clarinet tip openings range from 1-12.",
    },
    {
      question: "Can I use Legere reeds with Beechler mouthpieces?",
      answer:
        "Yes, you can use Legere reeds with our mouthpieces. However, this requires a different facing length. Please specify if you are using Legere reeds when ordering.",
    },
    {
      question: "What is the warranty on Beechler mouthpieces and accessories?",
      answer:
        "Our mouthpieces, accessories, and services come with a 1-year warranty.",
    },
    {
      question: "Can I get a custom mouthpiece made?",
      answer:
        "Yes! We offer the service of creating a custom mouthpiece just for you. Please contact us for more details.",
    },
    {
      question: "Exactly how customized can I make it?",
      answer: "Facing, Bore Size, Tip Openings, and Engravings are fully customizable, the materials we use are not. In over 75 years of serving musicians, we believe we have found the most natural combination of materials for artists and do not compromise on the quality of those materials."
    }
  ];

  return (

<Container className="root">
  <h1 className="title">Frequently Asked Questions</h1>

  {faqs.map((faq, index) => (
    <motion.div
      key={index}
      className="accordion"
      initial={false}
      positionTransition
    >
      <motion.header
        initial={false}
        className="accordionSummary"
        onClick={() => setExpanded(expanded === index ? null : index)}
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2 className="heading">{faq.question}</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: expanded === index ? 1 : 0 }}
          transition={{ duration: .5 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)",
            zIndex: -1,
            borderRadius: ".75rem",
          }}
        />
      </motion.header>

      <AnimatePresence initial={false}>
        {expanded === index && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98], when: "afterChildren" }}
            className="accordionDetails"
          >
            <h5 className="answer">{faq.answer}</h5>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  ))}
</Container>


  );
}

export default FAQs;