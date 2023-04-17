import React from "react";
import "../../../styles/HomeCategories.css";
import USA from "../../../assets/img/home/american-flag.svg";
import beechlerLogo from "../../../assets/img/home/beechler-logo-t.png";
import arbLogo from "../../../assets/img/home/arb-logo-t.png";

// Import the images
import c13 from "../../../assets/img/home/categories/arb-custom-metal-C13.png";
import a83 from "../../../assets/img/home/categories/arb-metal-A83.png";
import t02 from "../../../assets/img/home/categories/beechler-arb-caps-T02.png";
import l01p from "../../../assets/img/home/categories/beechler-arb-ligatures-L01P.png";
import b82 from "../../../assets/img/home/categories/beechler-bellite-B82.png";
import c32 from "../../../assets/img/home/categories/beechler-custom-bellite-C32.png";
import c88 from "../../../assets/img/home/categories/beechler-legacy-C88.png";
import b21 from "../../../assets/img/home/categories/beechler-tonalex-B21.png";
import b07 from "../../../assets/img/home/categories/beechler-white-diamond-B07.png";

const categories = [
  { name: "BEECHLER WHITE DIAMOND", type: "beechler", image: b07 },
  { name: "BEECHLER TONALEX", type: "beechler", image: b21 },
  { name: "BEECHLER LEGACY", type: "beechler", image: c88 },
  { name: "BEECHLER CUSTOM BELLITE", type: "beechler", image: c32 },
  { name: "BEECHLER BELLITE", type: "beechler", image: b82 },
  { name: "ARB METAL", type: "arb", image: a83 },
  { name: "ARB CUSTOM METAL", type: "arb", image: c13 },
  { name: "BEECHLER & ARB LIGATURES", type: "both", image: l01p },
  { name: "BEECHLER & ARB CAPS", type: "both", image: t02 },
  { name: "BEECHLER PEGS", type: "beechler" },
  { name: "ACCESSORIES", type: "both" },
];

function HomeCategories() {
  return (
    <div className="home-categories">
      <h2>Our Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>

        <div className='usa-container'>
          <div className="made-in-usa">
            <img
              className="beechler-logo"
              src={beechlerLogo}
              alt="Beechler Logo"
            />
            
            <p> 
            +      
            </p>
            
            <img className="arb-logo" src={arbLogo} alt="ARB Logo" />

            <p>
              Made in
              <br/>  
              <img className="usa-flag" src={USA} alt="Made in the USA" />
              <br/>
              since 1942
            </p>
          </div>
        </div>

    </div>
  );
}

export default HomeCategories;
