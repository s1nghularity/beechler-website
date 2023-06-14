import React from "react";
import { Container} from "react-bootstrap";
import "../../../styles/ProductInfo.css";
import saxIcon from "../../../assets/img/products/sax2.png";
import clarinetIcon from "../../../assets/img/products/clarinet2.png";

/*TO ADD: a clarinet or saxophone icon next to the text in tipopenings where apprioriate 
*/


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
              <li>Saxophone tip openings: 4-10 <img alt="saxophone icon"> {saxIcon} </img> </li>
              <li>Clarinet tip openings: 1-12 <img alt="clarinet icon"> {clarinetIcon} </img></li>
            </ul>
          </div>

    </Container>
  );
};

export default StaticInfo;
