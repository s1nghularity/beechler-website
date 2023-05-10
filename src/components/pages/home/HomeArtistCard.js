import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "../../../styles/theme.css";
import "../../../styles/HomeArtistCard.css";
import alexhan from '../../../assets/img/home/artists/artist-alex-han.png';
import anthony from '../../../assets/img/home/artists/artist-anthony-terry.png';
import caryg from '../../../assets/img/home/artists/artist-cary-simms.png';
import yellowBlob1 from '../../../assets/img/home/artists/y-blob-1.svg';
import orangeBlob1 from '../../../assets/img/home/artists/o-blob-1.svg';
import yellowBlob2 from '../../../assets/img/home/artists/y-blob-2.svg';

const artists = [
  { name: "Alex Han", img: alexhan, blob: yellowBlob1 },
  { name: "Anthony Terry", img: anthony, blob: orangeBlob1 },
  { name: "Cary Simms", img: caryg, blob: yellowBlob2 },
];

const ArtistCard = ({ artist, index }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ y: -100, opacity: 1 });
  }, []);

  return (
    <motion.div
      className="artist-card"
      animate={controls}
      initial={{ y: 0, opacity: 0 }}
      transition={{ delay: index * 0.3, duration: 1.8, easing: "ease-out" }}
    >
      <div className="image-container">
        <img className="artist-image" src={artist.img} alt={artist.name} />
        <div className="svg-background">
          <img src={artist.blob} alt={`${artist.name} blob`} />
          <h3>{artist.name}</h3>
        </div>
      </div>
    </motion.div>
  );
};

function HomeArtistCard() {
  return (
    <div className="artist-cards-container">
      <h2 className="artist-card-header">Featured Artists</h2>
      {artists.map((artist, index) => (
        <ArtistCard key={artist.name} artist={artist} index={index} />
      ))}
    </div>
  );
}

export default HomeArtistCard;
