import React, { useEffect, useState } from "react";
import { WorldMap } from "react-svg-worldmap";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/theme.css";
import "../../../styles/HomeDealerCard.css";
import reachCompliantSticker from "../../../assets/img/home/dealermap/reach-compliant.png";
import euFlag from "../../../assets/img/home/dealermap/eu-flag.png";

import HomeDealerStats from "./HomeDealerStats";
import Modal from "react-modal";
import "animate.css";

Modal.setAppElement("#root");

const HomeDealerCard = () => {
  const data = [
    { country: "AU", value: 4 },
    { country: "AT", value: 2 },
    { country: "BR", value: 2 },
    { country: "CA", value: 10 },
    { country: "CN", value: 3 },
    { country: "CO", value: 1 },
    { country: "DK", value: 1 },
    { country: "GB", value: 2 },
    { country: "FI", value: 1 },
    { country: "FR", value: 1 },
    { country: "DE", value: 4 },
    { country: "HK", value: 1 },
    { country: "HU", value: 1 },
    { country: "IL", value: 1 },
    { country: "IT", value: 2 },
    { country: "JP", value: 1 },
    { country: "KR", value: 3 },
    { country: "MX", value: 4 },
    { country: "NZ", value: 1 },
    { country: "PE", value: 1 },
    { country: "PH", value: 2 },
    { country: "PL", value: 2 },
    { country: "RO", value: 1 },
    { country: "ES", value: 1 },
    { country: "CH", value: 6 },
    { country: "TW", value: 2 },
    { country: "TH", value: 1 },
    { country: "NL", value: 1 },
    { country: "US", value: 34 },
  ];

  const [mapWidth, setMapWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      const width = Math.min(window.innerHeight, window.innerWidth) * 0.75;
      setMapWidth(width);
    };

    handleWindowResize(); // Set initial width on component mount

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [modalAnimation, setModalAnimation] = useState("animate__backInLeft");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalAnimation("animate__backOutRight");
    setTimeout(() => {
      setModalIsOpen(false);
      setModalAnimation("animate__backInLeft");
    }, 700); // Match the duration of your CSS animation
  };

  return (
    <div className="stripe-home-dealer">
      <h1 className="home-dealer-title">OUR REACH</h1>

      <HomeDealerStats />


      <div className="home-dealer-map-wrapper">
        <WorldMap
          color="gold"
          tooltipBgColor="black"
          tooltipTextColor="white"
          valueSuffix=" Dealers"
          size="xxl"
          data={data}
          backgroundColor="#0c0b0b"
          borderColor="#fcbb28"
          className="home-dealer-map"
          style={{ width: mapWidth, height: mapWidth }}
        />

        <img
          src={reachCompliantSticker}
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
    </div>
  );
};

export default HomeDealerCard;
