import React from "react";
import { Container} from "react-bootstrap";
import "../../../styles/ProductInfo.css";
import saxIcon from "../../../assets/img/products/sax2.png";
import clarinetIcon from "../../../assets/img/products/clarinet2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



const StaticInfo = () => {
  return (
    <Container>

          <div className="static-info">
            <h2>General FAQs</h2>
            <ul>
              <li>
                All Beechler and ARB mouthpieces have been lab tested and proven
                safe for all long and short term human contact according to
                Reach compliance standards.
              </li>
              <li>
                If using Legere reeds please specify. This requires a different
                facing length.
              </li>
              <li>
                All bite plates on metal mouthpieces are inlaid using rubber and
                are not applied with epoxy.
              </li>
              <li>
              Bellite & Metal mouthpieces cast by the Lost Wax method in surgical stainless steel.
              </li>
              <li>
                <img src={saxIcon} alt="Saxophone" className="tip-sax" /> Saxophone tip openings: 4-10 <br/><br/>
                <img src={clarinetIcon} alt="Clarinet" className="tip-clar"/> Clarinet tip openings: 1-12
              </li> <br/>
              <li>
              <FontAwesomeIcon icon={faStar} className="warranty-star" /> Our mouthpieces, accessories and services come with a 1-year warranty.</li>
            </ul>
          </div>

    </Container>
  );
};

export default StaticInfo;
