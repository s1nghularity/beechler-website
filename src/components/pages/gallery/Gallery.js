import "../../../styles/Gallery.css";
import Masonry from "react-masonry-css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../../../assets/img/gallery/IMG_5687.png";
import img2 from "../../../assets/img/gallery/IMG_5689.png";
import img3 from "../../../assets/img/gallery/IMG_5690.png";
import img4 from "../../../assets/img/gallery/IMG_5694.png";
import img5 from "../../../assets/img/gallery/IMG_5697.png";
import vibesImg from "../../../assets/img/about/vibes.jpg";
import ad1953Img from "../../../assets/img/about/1953ad.JPG";
import adrianChiaImg from "../../../assets/img/about/adrianchia.jpg";
import alanJamieImg from "../../../assets/img/about/alanjamie.jpg";
import alexHanImg from "../../../assets/img/about/alexhan.jpg";
import anthonyTerryBwImg from "../../../assets/img/about/anthonyterrybw.jpg";
import betterSaxImg from "../../../assets/img/about/bettersax.jpg";
import billBergmanJimImg from "../../../assets/img/about/billbergmanjim.jpg";
import blondGuyImg from "../../../assets/img/about/blondguy.jpg";
import charlesImg from "../../../assets/img/about/Charles.jpg";
import charlesMcNealImg from "../../../assets/img/about/charlesmcneal.jpg";
import dHayesMMillerImg from "../../../assets/img/about/dhayesmmiller.jpg";
import docWhiteImg from "../../../assets/img/about/docwhite.jpg";
import donaldHayesImg from "../../../assets/img/about/donaldhayes.jpg";
import donaldHayes2Img from "../../../assets/img/about/donaldhayes2.jpg";
import everetteImg from "../../../assets/img/about/everette.jpg";
import franckJimImg from "../../../assets/img/about/franckjim.jpg";
import fridaHidalgoImg from "../../../assets/img/about/fridahidalgo.jpg";
import funJimImg from "../../../assets/img/about/funjim.jpg";
import ikechiOnyenakaImg from "../../../assets/img/about/ikechionyenaka.jpg";
import joeNunezImg from "../../../assets/img/about/joenunez.jpg";
import joeNunezCImg from "../../../assets/img/about/joenunezc.jpg";
import johnDoeImg from "../../../assets/img/about/johndoe.jpg";
import kellyMooreImg from "../../../assets/img/about/kellymoore.jpg";
import kunlePeaceOlusesiImg from "../../../assets/img/about/kunlepeaceolusesi.jpg";
import lawrenceTamezImg from "../../../assets/img/about/lawrencetamez.jpg";
import loomisJimMcNealImg from "../../../assets/img/about/loomisjimmcneal.jpg";
import marcoMacissoImg from "../../../assets/img/about/marcomacisso.jpg";
import maryWhiteImg from "../../../assets/img/about/marywhite.jpg";
import michaelPauloImg from "../../../assets/img/about/michaelpaulo.jpg";
import mikePotterImg from "../../../assets/img/about/mikepotter.jpg";
import nelsonRangellImg from "../../../assets/img/about/nelsonrangell.jpg";
import pabloOchoaImg from "../../../assets/img/about/pabloochoa.jpg";
import patLoomisScottPageImg from "../../../assets/img/about/patloomisscottpage.jpg";
import roccoVentrellaImg from "../../../assets/img/about/roccoventrella.jpg";
import saxMaxImg from "../../../assets/img/about/saxmax.jpg";
import stabewilsonImg from "../../../assets/img/about/stabewilson.jpg";
import stabewilson2Img from "../../../assets/img/about/stabewilson2.jpg";


const masonryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  vibesImg,
  ad1953Img,
  adrianChiaImg,
  alanJamieImg,
  alexHanImg,
  anthonyTerryBwImg,
  betterSaxImg,
  billBergmanJimImg,
  blondGuyImg,
  charlesImg,
  charlesMcNealImg,
  dHayesMMillerImg,
  docWhiteImg,
  donaldHayesImg,
  donaldHayes2Img,
  everetteImg,
  franckJimImg,
  fridaHidalgoImg,
  funJimImg,
  ikechiOnyenakaImg,
  joeNunezImg,
  joeNunezCImg,
  johnDoeImg,
  kellyMooreImg,
  kunlePeaceOlusesiImg,
  lawrenceTamezImg,
  loomisJimMcNealImg,
  marcoMacissoImg,
  maryWhiteImg,
  michaelPauloImg,
  mikePotterImg,
  nelsonRangellImg,
  pabloOchoaImg,
  patLoomisScottPageImg,
  roccoVentrellaImg,
  saxMaxImg,
  stabewilsonImg,
  stabewilson2Img,

]

const Gallery = () => {
  return (
    <Container>
      <Row>
        <h1>Gallery</h1>
      </Row>
    <Row>
      <div className="masonry-container">
        <Masonry
          breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {masonryImages.map((image, index) => (
            <img key={index} src={image} alt="" />
          ))}
        </Masonry>
      </div>
    </Row>
  </Container>
  );
};

export default Gallery;