import "../../../styles/Gallery.css";
import Masonry from "react-masonry-css";
import React, { useEffect, useRef } from 'react';
import { Container, Row } from "react-bootstrap";


import img1 from "../../../assets/img/gallery/IMG_5687.webp";
import img2 from "../../../assets/img/gallery/IMG_5689.webp";
import img3 from "../../../assets/img/gallery/IMG_5690.webp";
import img4 from "../../../assets/img/gallery/IMG_5694.webp";

import vibesImg from "../../../assets/img/gallery/vibes.webp";
import ad1953Img from "../../../assets/img/gallery/1953ad.webp";
import adrianChiaImg from "../../../assets/img/gallery/adrianchia.webp";
import alanJamieImg from "../../../assets/img/gallery/alanjamie.webp";
import alexHanImg from "../../../assets/img/gallery/alexhan.webp";
import anthonyTerryBwImg from "../../../assets/img/gallery/anthonyterrybw.webp";
import betterSaxImg from "../../../assets/img/gallery/bettersax.webp";
import billBergmanJimImg from "../../../assets/img/gallery/billbergmanjim.webp";
import blondGuyImg from "../../../assets/img/gallery/blondguy.webp";
import charlesImg from "../../../assets/img/gallery/Charles.webp";
import charlesMcNealImg from "../../../assets/img/gallery/charlesmcneal.webp";
import dHayesMMillerImg from "../../../assets/img/gallery/dhayesmmiller.webp";
import docWhiteImg from "../../../assets/img/gallery/docwhite.webp";
import donaldHayes2Img from "../../../assets/img/gallery/donaldhayes2.webp";
import everetteImg from "../../../assets/img/gallery/everette.webp";
import franckJimImg from "../../../assets/img/gallery/franckjim.webp";
import fridaHidalgoImg from "../../../assets/img/gallery/fridahidalgo.webp";
import funJimImg from "../../../assets/img/gallery/funjim.webp";
import ikechiOnyenakaImg from "../../../assets/img/gallery/ikechionyenaka.webp";
import joeNunezImg from "../../../assets/img/gallery/joenunez.webp";

import johnDoeImg from "../../../assets/img/gallery/johndoe.webp";
import kellyMooreImg from "../../../assets/img/gallery/kellymoore.webp";
import kunlePeaceOlusesiImg from "../../../assets/img/gallery/kunlepeaceolusesi.webp";
import lawrenceTamezImg from "../../../assets/img/gallery/lawrencetamez.webp";
import loomisJimMcNealImg from "../../../assets/img/gallery/loomisjimmcneal.webp";
import marcoMacissoImg from "../../../assets/img/gallery/marcomacisso.webp";
import maryWhiteImg from "../../../assets/img/gallery/marywhite.webp";
import michaelPauloImg from "../../../assets/img/gallery/michaelpaulo.webp";
import mikePotterImg from "../../../assets/img/gallery/mikepotter.webp";
import nelsonRangellImg from "../../../assets/img/gallery/nelsonrangell.webp";
import pabloOchoaImg from "../../../assets/img/gallery/pabloochoa.webp";

import roccoVentrellaImg from "../../../assets/img/gallery/roccoventrella.webp";
import saxMaxImg from "../../../assets/img/gallery/saxmax.webp";
import stabewilsonImg from "../../../assets/img/gallery/stabewilson.webp";
import stabewilson2Img from "../../../assets/img/gallery/stabewilson2.webp";

import bwTrio1Img from "../../../assets/img/gallery/bw-trio1.webp";
import hands1Img from "../../../assets/img/gallery/hands1.webp";
import hands2Img from "../../../assets/img/gallery/hands2.webp";
import isaacImg from "../../../assets/img/gallery/Isaac.webp";
import jimImg from "../../../assets/img/gallery/Jim.webp";
import jim2Img from "../../../assets/img/gallery/Jim2.webp";
import kennyImg from "../../../assets/img/gallery/kenny.webp";
import kidImg from "../../../assets/img/gallery/kid.webp";
import larryWilliamsImg from "../../../assets/img/gallery/larrywilliams.webp";
import maxImg from "../../../assets/img/gallery/Max.webp";
import namm2019Img from "../../../assets/img/gallery/NAMM-2019.webp";

/*import judy group*/
import judygroup from "../../../assets/img/about/judy-group.webp";
import judyAdrian from "../../../assets/img/gallery/judy-adrian.webp";

const masonryImages = [
  img1,
  judygroup,
  namm2019Img,
  kennyImg,
  kunlePeaceOlusesiImg,
  img2,
  judyAdrian,
  img3,
  img4,
  fridaHidalgoImg,
  vibesImg,
  ad1953Img,
  adrianChiaImg,
  maryWhiteImg,
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
  donaldHayes2Img,
  everetteImg,
  franckJimImg,
  funJimImg,
  ikechiOnyenakaImg,
  joeNunezImg,
  johnDoeImg,
  kellyMooreImg,
  lawrenceTamezImg,
  loomisJimMcNealImg,
  marcoMacissoImg,
  michaelPauloImg,
  mikePotterImg,
  nelsonRangellImg,
  pabloOchoaImg,
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
  kidImg,
  larryWilliamsImg,
  maxImg,

];

const Gallery = () => {

  const masonryRef = useRef(null);

  useEffect(() => {
    const images = masonryRef.current.querySelectorAll('img');
    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add('ready-to-animate');
      }, index * 200);
    });
  }, []);


  return (
<Container>
      <Row className="gallery-title-card">
        <h1 className="gallery-title">
          Serving musicians since 1942, <br /> Remle Musical Products is honored{" "}
          <br /> to be part of your musical journey.
        </h1>
      </Row>
      <Row>
        <div className="masonry-container" ref={masonryRef}>
          <Masonry
            breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {masonryImages.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Image ${index + 1} in the gallery`}
                className="swing-in-top-fwd"
                style={{ '--animation-delay': `${index * 0.2}s` }}
                loading="lazy"
              />
            ))}
          </Masonry>
        </div>
      </Row>
    </Container>
  );
};



export default Gallery;
