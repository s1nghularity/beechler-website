import "../../../styles/Gallery.css";
import Masonry from "react-masonry-css";
import React, { useEffect, useRef } from "react";
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
  { src: img1, alt: "IMG_5687" },
  { src: judygroup, alt: "Judy Group" },
  { src: img2, alt: "IMG_5689" },
  { src: img3, alt: "IMG_5690" },
  { src: img4, alt: "IMG_5694" },
  { src: vibesImg, alt: "Vibes" },
  { src: ad1953Img, alt: "1953 Ad" },
  { src: adrianChiaImg, alt: "Adrian Chia" },
  { src: alanJamieImg, alt: "Alan Jamie" },
  { src: alexHanImg, alt: "Alex Han" },
  { src: anthonyTerryBwImg, alt: "Anthony Terry BW" },
  { src: betterSaxImg, alt: "Better Sax" },
  { src: billBergmanJimImg, alt: "Bill Bergman Jim" },
  { src: blondGuyImg, alt: "Blond Guy" },
  { src: charlesImg, alt: "Charles" },
  { src: charlesMcNealImg, alt: "Charles McNeal" },
  { src: dHayesMMillerImg, alt: "D Hayes M Miller" },
  { src: docWhiteImg, alt: "Doc White" },
  { src: donaldHayes2Img, alt: "Donald Hayes 2" },
  { src: everetteImg, alt: "Everette" },
  { src: franckJimImg, alt: "Franck Jim" },
  { src: fridaHidalgoImg, alt: "Frida Hidalgo" },
  { src: funJimImg, alt: "Fun Jim" },
  { src: ikechiOnyenakaImg, alt: "Ikechi Onyenaka" },
  { src: joeNunezImg, alt: "Joe Nunez" },
  { src: johnDoeImg, alt: "John Doe" },
  { src: kellyMooreImg, alt: "Kelly Moore" },
  { src: kunlePeaceOlusesiImg, alt: "Kunle Peace Olusesi" },
  { src: lawrenceTamezImg, alt: "Lawrence Tamez" },
  { src: loomisJimMcNealImg, alt: "Loomis Jim McNeal" },
  { src: marcoMacissoImg, alt: "Marco Macisso" },
  { src: maryWhiteImg, alt: "Mary White" },
  { src: michaelPauloImg, alt: "Michael Paulo" },
  { src: mikePotterImg, alt: "Mike Potter" },
  { src: nelsonRangellImg, alt: "Nelson Rangell" },
  { src: pabloOchoaImg, alt: "Pablo Ochoa" },
  { src: roccoVentrellaImg, alt: "Rocco Ventrella" },
  { src: saxMaxImg, alt: "Sax Max" },
  { src: stabewilsonImg, alt: "Stabe Wilson" },
  { src: stabewilson2Img, alt: "Stabe Wilson 2" },
  { src: bwTrio1Img, alt: "BW Trio 1" },
  { src: hands1Img, alt: "Hands 1" },
  { src: hands2Img, alt: "Hands 2" },
  { src: isaacImg, alt: "Isaac" },
  { src: jimImg, alt: "Jim" },
  { src: jim2Img, alt: "Jim 2" },
  { src: kennyImg, alt: "Kenny G" },
  { src: kidImg, alt: "Kid" },
  { src: larryWilliamsImg, alt: "Larry Williams" },
  { src: maxImg, alt: "Max" },
  { src: namm2019Img, alt: "NAMM 2019" },
  { src: judyAdrian, alt: "Judy Adrian" },
];

const Gallery = () => {
  const masonryRef = useRef(null);

  useEffect(() => {
    const images = masonryRef.current.querySelectorAll("img");
    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("ready-to-animate");
      }, index * 200);
    });
  }, []);

  return (
    <Container itemScope itemType="http://schema.org/ImageGallery">
      <Row className="gallery-title-card">
        <h1 className="gallery-title">
          Serving musicians since 1942, <br />
          Remle Musical Products is honored <br />
          to be part of your musical journey.
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
                src={image.src}
                alt={image.alt}
                className="swing-in-top-fwd"
                style={{ "--animation-delay": `${index * 0.2}s` }}
                loading="lazy"
                itemProp="image"
              />
            ))}
          </Masonry>
        </div>
      </Row>
    </Container>
  );
};

export default Gallery;
