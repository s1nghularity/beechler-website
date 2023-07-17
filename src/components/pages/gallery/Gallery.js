import "../../../styles/Gallery.css";
import Masonry from "react-masonry-css";
import React from "react";
import { Container, Row } from "react-bootstrap";

import img1 from "../../../assets/img/gallery/IMG_5687.png";
import img2 from "../../../assets/img/gallery/IMG_5689.png";
import img3 from "../../../assets/img/gallery/IMG_5690.png";
import img4 from "../../../assets/img/gallery/IMG_5694.png";
import img5 from "../../../assets/img/gallery/IMG_5697.png";
import vibesImg from "../../../assets/img/gallery/vibes.jpg";
import ad1953Img from "../../../assets/img/gallery/1953ad.JPG";
import adrianChiaImg from "../../../assets/img/gallery/adrianchia.jpg";
import alanJamieImg from "../../../assets/img/gallery/alanjamie.jpg";
import alexHanImg from "../../../assets/img/gallery/alexhan.jpg";
import anthonyTerryBwImg from "../../../assets/img/gallery/anthonyterrybw.jpg";
import betterSaxImg from "../../../assets/img/gallery/bettersax.jpg";
import billBergmanJimImg from "../../../assets/img/gallery/billbergmanjim.jpg";
import blondGuyImg from "../../../assets/img/gallery/blondguy.jpg";
import charlesImg from "../../../assets/img/gallery/Charles.jpg";
import charlesMcNealImg from "../../../assets/img/gallery/charlesmcneal.jpg";
import dHayesMMillerImg from "../../../assets/img/gallery/dhayesmmiller.jpg";
import docWhiteImg from "../../../assets/img/gallery/docwhite.jpg";
import donaldHayesImg from "../../../assets/img/gallery/donaldhayes.jpg";
import donaldHayes2Img from "../../../assets/img/gallery/donaldhayes2.jpg";
import everetteImg from "../../../assets/img/gallery/everette.jpg";
import franckJimImg from "../../../assets/img/gallery/franckjim.jpg";
import fridaHidalgoImg from "../../../assets/img/gallery/fridahidalgo.jpg";
import funJimImg from "../../../assets/img/gallery/funjim.jpg";
import ikechiOnyenakaImg from "../../../assets/img/gallery/ikechionyenaka.jpg";
import joeNunezImg from "../../../assets/img/gallery/joenunez.jpg";
import joeNunezCImg from "../../../assets/img/gallery/joenunezc.jpg";
import johnDoeImg from "../../../assets/img/gallery/johndoe.jpg";
import kellyMooreImg from "../../../assets/img/gallery/kellymoore.jpg";
import kunlePeaceOlusesiImg from "../../../assets/img/gallery/kunlepeaceolusesi.jpg";
import lawrenceTamezImg from "../../../assets/img/gallery/lawrencetamez.jpg";
import loomisJimMcNealImg from "../../../assets/img/gallery/loomisjimmcneal.jpg";
import marcoMacissoImg from "../../../assets/img/gallery/marcomacisso.jpg";
import maryWhiteImg from "../../../assets/img/gallery/marywhite.jpg";
import michaelPauloImg from "../../../assets/img/gallery/michaelpaulo.jpg";
import mikePotterImg from "../../../assets/img/gallery/mikepotter.jpg";
import nelsonRangellImg from "../../../assets/img/gallery/nelsonrangell.jpg";
import pabloOchoaImg from "../../../assets/img/gallery/pabloochoa.jpg";
import patLoomisScottPageImg from "../../../assets/img/gallery/patloomisscottpage.jpg";
import roccoVentrellaImg from "../../../assets/img/gallery/roccoventrella.jpg";
import saxMaxImg from "../../../assets/img/gallery/saxmax.jpg";
import stabewilsonImg from "../../../assets/img/gallery/stabewilson.jpg";
import stabewilson2Img from "../../../assets/img/gallery/stabewilson2.jpg";

import bwTrio1Img from "../../../assets/img/gallery/bw-trio1.png";
import hands1Img from "../../../assets/img/gallery/hands1.png";
import hands2Img from "../../../assets/img/gallery/hands2.png";
import isaacImg from "../../../assets/img/gallery/Isaac.jpg";
import jimImg from "../../../assets/img/gallery/Jim.jpg";
import jim2Img from "../../../assets/img/gallery/Jim2.png";
import kennyImg from "../../../assets/img/gallery/kenny.jpg";
import kidImg from "../../../assets/img/gallery/kid.jpg";
import larryWilliamsImg from "../../../assets/img/gallery/larrywilliams.png";
import maxImg from "../../../assets/img/gallery/Max.jpg";
import mouthpieceAboutImg from "../../../assets/img/gallery/mouthpieceAbout.jpg";
import namm2019Img from "../../../assets/img/gallery/NAMM-2019.jpg";
import namm20Img from "../../../assets/img/gallery/namm20.jpg";
import nbcElmerImg from "../../../assets/img/gallery/nbc-elmer.png";
import nbcImg from "../../../assets/img/gallery/nbc.png";
import reginaJimImg from "../../../assets/img/gallery/reginajim.jpg";
import tedNashImg from "../../../assets/img/gallery/tednash.jpg";


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
  bwTrio1Img,
  hands1Img,
  hands2Img,
  isaacImg,
  jimImg,
  jim2Img,
  kennyImg,
  kidImg,
  larryWilliamsImg,
  maxImg,
  mouthpieceAboutImg,
  namm2019Img,
  namm20Img,
  nbcElmerImg,
  nbcImg,
  reginaJimImg,
  tedNashImg,
  mouthpieceAboutImg,

];

const Gallery = () => {
  return (
    <Container>
      <Row className="gallery-title-card">
        <h1 className="gallery-title">
          Serving musicians since 1942, <br /> Remle Musical Products is honored{" "}
          <br /> to be part of your musical journey.
        </h1>
      </Row>
      <Row>
        <div className="masonry-container">
          <Masonry
            breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {masonryImages.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt="" 
                className="swing-in-top-fwd"
                style={{ '--animation-delay': `${index * 0.2}s` }}
              />
            ))}
          </Masonry>
        </div>
      </Row>
    </Container>
  );
};



export default Gallery;
