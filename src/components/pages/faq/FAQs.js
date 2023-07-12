import React, { useState } from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: "'Josefin Sans', sans-serif",
    backgroundColor: "#fdfdfe",
    color: "#2a3132",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  heading: {
    borderRadius: ".75rem",
    fontSize: "2rem",
    fontWeight: "600",
    color: "#0c0b0b",
    marginTop: "1rem",
    border: "none",
  },
  answer: {
    color: "#0c0b0b",
    fontSize: "1.5rem",
    fontWeight: "400",
    marginTop: "1rem",
    marginBottom: "0",
    border: "none",
  },
  accordion: {

    marginBottom: "2rem",
    "&:last-child": {
      marginBottom: "1rem",
    },
    "&::before": {
      backgroundColor: "transparent",
    },
  },
  accordionSummary: {
    backgroundColor: "#fbb034",
    color: "#fdfdfe",
  },
  accordionDetails: {
    backgroundColor: "#fdfdfe",
    backgroundImage: "linear-gradient(15deg, #fbb020 15%, #ffdd00 50%)",

  },
});

function FAQs() {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
    <Container className={classes.root}>
      <h1 className={classes.title}>Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          className={classes.accordion}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            className={classes.accordionSummary}
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
          >
            <h2 className={classes.heading}>{faq.question}</h2>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <h5 className={classes.answer}>{faq.answer}</h5>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}

export default FAQs;
