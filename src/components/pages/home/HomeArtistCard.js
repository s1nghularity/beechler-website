import React, { useEffect } from 'react';
import { animate, stagger } from 'motion';
import "../../../styles/theme.css";
import "../../../styles/HomeArtistCard.css";


import alexhan from '../../../assets/img/home/artists/artist-alex-han.png';
import anthony from '../../../assets/img/home/artists/artist-anthony-terry.png';
import caryg from '../../../assets/img/home/artists/artist-cary-simms.png';
import yellowBlob1 from '../../../assets/img/home/artists/y-blob-1.svg';
import orangeBlob1 from '../../../assets/img/home/artists/o-blob-1.svg';
import yellowBlob2 from '../../../assets/img/home/artists/y-blob-2.svg';

function HomeArtistCard () {
    useEffect(() => {
        const targets = document.querySelectorAll(".artist-card");
        
        targets.forEach((target, index) => {
          animate(target, { y: -100, opacity: 1 }, {
            delay: index * 0.3, 
            duration: 1.8,
            y: 0,
            opacity: 0,
            easing: "ease-out",
          });
        });
      }, []);
      
      

  return (
    <div className="artist-cards-container">

        <div className="artist-card">
            <div className="image-container">
                <img className="artist-image" src={alexhan} alt="Alex Han" />
                <div className="svg-background">
                <img src={yellowBlob1} alt="Alex Han blob" />
           
                <span className='artist-name'>
                <h3>Alex Han</h3>
                </span>

                </div>
            </div>
        </div>

        <div className="artist-card">
            <div className="image-container">
                <img className="artist-image" src={anthony} alt="Anthony Terry" />
                <div className="svg-background">
                    <img src={orangeBlob1} alt="Anthony Terry blob" />
                    <h3>Anthony Terry</h3>
                </div>
            </div>
        </div>

        <div className="artist-card">
            <div className="image-container">
                <img className="artist-image" src={caryg} alt="Cary Simms" />
                <div className="svg-background">
                    <img src={yellowBlob2} alt="Cary Simms blob" />
                    <h3>Cary Simms</h3>
                </div>
            </div>
        </div>
        <span>
        <h2 className="artist-card-header">Featured Artists</h2>
        </span>

    </div>
  );
};

export default HomeArtistCard;
