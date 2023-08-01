import React, { useEffect, useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/theme.css";
import "../../../styles/HomeDealer.css";
import reachCompliantSticker from "../../../assets/img/home/dealermap/reach-compliant.png";
import reach2 from "../../../assets/img/home/dealermap/reach2.png";
import euFlag from "../../../assets/img/home/dealermap/eu-flag.png";

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
    }, 700); // Match the duration of your CSS animation
  };

  return (
    <div className="stripe-home-dealer">
      <h1 className="home-dealer-title">OUR REACH</h1>

      <HomeDealerStats />


        <HomeDealerMap className="home-dealer-map"  />
        <img
          src={reach2}
          alt="Reach compliant sticker"
          className="reach-compliant-sticker"
          style={{
            display: "block",
            width: "250px",
            padding: "1rem",
          }}
          onClick={openModal}
        />

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={false} // Prevent modal from closing when clicking outside
          contentLabel="Compliance Information"
          className={`react-modal-content animate__animated ${modalAnimation}`}
          overlayClassName="react-modal-overlay"
          style={{
            content: {
              backgroundImage: `url(${euFlag})`,
              backgroundSize: "auto 300px", // cover makes sure it always covers the whole area
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center", // This should always center your image
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
            <button className="close-button" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </Modal>
      </div>

  );
};

export default HomeDealer;
