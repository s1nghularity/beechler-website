import React, { useEffect, useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/theme.css";
import "../../../styles/HomeDealer.css";
import reachCompliantSticker from "../../../assets/img/home/dealermap/reach-compliant.webp";
import reach2 from "../../../assets/img/home/dealermap/reach2.webp";
import euFlag from "../../../assets/img/home/dealermap/eu-flag.webp";

import HomeDealerStats from "./HomeDealerStats";
import HomeDealerMap from "./HomeDealerMap";
import Modal from "react-modal";
import "animate.css";

Modal.setAppElement("#root");

const HomeDealer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalAnimation, setModalAnimation] = useState("animate__fadeIn");

  const openModal = () => {
    setModalAnimation("animate__fadeIn");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalAnimation("animate__fadeOut");
    setTimeout(() => {
      setModalIsOpen(false);
      setModalAnimation("animate__fadeIn");
    }, 700);
  };

  return (
    <div className="stripe-home-dealer" role="region" aria-labelledby="dealer-heading">
      <h1 id="dealer-heading" className="home-dealer-title">OUR REACH</h1>

      <HomeDealerStats />

      <HomeDealerMap className="home-dealer-map" aria-label="Dealer Locations Map" />
      
      <img
        src={reach2}
        alt="Reach compliant sticker"
        className="reach-compliant-sticker"
        role="img"
        aria-label="Reach compliant sticker"
        style={{
          display: "block",
          width: "250px",
          padding: "1rem",
        }}
        onClick={openModal}
        tabIndex="0"
        aria-pressed="false"
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        contentLabel="Compliance Information"
        className={`react-modal-content animate__animated ${modalAnimation}`}
        overlayClassName="react-modal-overlay"
        role="dialog"
        aria-modal="true"
        style={{
          content: {
            backgroundImage: `url(${euFlag})`,
            backgroundSize: "auto 300px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            border: "none",
            outline: "none",
            borderRadius: "1rem",
          },
        }}
      >
        <div className="modal-body">
          <h5>
            All Beechler and ARB mouthpieces have been lab tested and proven
            safe for all long and short term human contact according to E.U.
            compliance standards.
          </h5>
          <button className="close-button" onClick={closeModal} aria-label="Close modal">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default HomeDealer;