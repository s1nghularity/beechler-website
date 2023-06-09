import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import smallBore from '../../../assets/img/products/accessories-services/small-bore.png';
import mediumBore from '../../../assets/img/products/accessories-services/medium-bore.png';
import largeBore from '../../../assets/img/products/accessories-services/large-bore.png';


const DynamicInfo = ({ infoContent }) => {
  const productInfo = {
    "Beechler Diamond": "Beechler Black and Beechler Diamond Inlay alto and tenor mouthpieces come in three bore sizes. The Small bore has a medium high baffle and horseshoe shaped chamber producing a fast air column and generating a powerful and brilliant sound rich in overtones. The Medium bore has an open style baffle and open chamber producing a medium fast air column allowing for the production of subtleties of sound while maintaining ease of projection. The Large Bore has a medium baffle and open chamber which produce a rich saxophone sound. The Clarinet and Baritone are designed with a medium open chamber and medium baffle. The material used for these mouthpieces is a sturdy combination of the qualities of traditional hard rubber and new age plastics designed to utilize the full dynamic range of the instrument. ",

    "Beechler Tonalex": "Beechler Tonalex Alto and Tenor mouthpieces have medium baffies with open chambers. The Clarinet has a medium open chamber. The white acoustic resin in these mouthpieces favors the softer singing qualities of the instrument.",

    "Beechler Bellite": "The Beechler Bellite Metal Mouthpiece is cast from the finest surgical stainless steel. This material is free from corrosion, breakage, or change in playing characteristics. They are cast at a temperature of 2000 degrees and will maintain consistent durability. The hardness of this metal provides an ultra fast response time to bring out the brilliance of the overtone series. The Bellite alto and tenor models feature a medium high baffle and open chamber which supports a brilliant contemporary sound as well as a subdued ballad sound. The Bellite Soprano and Baritone have an open baffle and open chamber. Ligatures and caps are provided with all Beechler GOLD and Beechler Bellite mouthpieces.",

    "Beechler Hard Rubber": "Beechler Hard Rubber mouthpieces are made from the finest quality hard rubber. They are available for Soprano, Alto, Tenor, Baritone, and C Melody instruments. The hardness of the rubber, combined with the size and shape of the chamber, creates a medium fast response time giving a dark traditional sound to the instrument.",

    "Beechler Customized": "Beechler Customized...", // Add your description for Beechler Customized here

    "ARB Metal": "The ARB metal mouthpieces feature high baffles and step off chambers for the Alto, Tenor, and Baritone. The Soprano has a medium open chamber and medium baffle. They are extremely versatile and can be played with extraordinary brightness or with a soft and mellow sound. These mouthpieces are the culmination of years of development in arriving at the best playing combination of tone chambers, facings, and density of metal. They have excellent brilliance, response, and depth of tone.",

    "ARB Great Neck Originals": "The Great Neck Original Mouthpiece is made from the blanks of the 1940's. These mouthpieces were given this name by Arnold Brilhart because of the location of his original factory in Great Neck, New York. The Alto and Tenor are large bore, medium baffle mouthpieces. The Clarinet has a medium open bore. The white pigment in these mouthpieces helps to produce the compact and subtle sound of those years. These are limited edition mouthpieces. They will never be available again after the current stock is gone.",

    "Accessories": "Accessories...", // Add your description for Accessories here
  };

  return (
<Container>
  <Row className="dynamic-info-container">
    <Col md={12}>
      <div className="dynamic-info">
        <h3>{infoContent ? infoContent : "Select a Category"}</h3>
        <Row>
          <Col md={8}>
            <p>{productInfo[infoContent]}</p>
          </Col>
          {infoContent !== "Accessories" && (
            <Col md={4} className="bore-section">
              <div className="bore-images">
                <div>
                  <p>Small Bore</p>
                  <img src={smallBore} alt="Small Bore" />
                </div>
                <div>
                  <p>Medium Bore</p>
                  <img src={mediumBore} alt="Medium Bore" />
                </div>
                <div>
                  <p>Large Bore</p>
                  <img src={largeBore} alt="Large Bore" />
                </div>
              </div>
            </Col>
          )}
        </Row>
      </div>
    </Col>
  </Row>
</Container>



  );

};

export default DynamicInfo;
