import React from "react";
import { Container} from "react-bootstrap";
import "../../../styles/ProductInfo.css";


const StaticInfo = () => {
  return (
    <Container>

          <div className="static-info">
            <h2>General FAQs</h2>
            <ul>
              <li>
                All Beechler and ARB mouthpieces have been lab tested and proven
                safe for all long and short term human contact according to
                Reach compliance standards.<br/><br/>
              </li>

            </ul>
          </div>

    </Container>
  );
};

export default StaticInfo;
