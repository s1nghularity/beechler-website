import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/HomeCategories.css";
import USA from "../../../assets/img/home/american-flag.svg";
import beechlerArb from "../../../assets/img/home/beechler-arb.png";
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
  { name: "Beechler White Diamond", type: "beechler", image: b07 },
  { name: "Beechler Tonalex", type: "beechler", image: b21 },
  { name: "Beechler Legacy", type: "beechler", image: c88 },
  { name: "Beechler Custom Bellite", type: "beechler", image: c32 },
  { name: "Beechler Bellite", type: "beechler", image: b82 },
  { name: "ARB Metal", type: "arb", image: a83 },
  { name: "ARB Custom Metal", type: "arb", image: c13 },
  { name: "Ligatures", type: "both", image: l01p },
  { name: "Caps", type: "both", image: t02 },
  { name: "Pegs", type: "beechler" },
  { name: "Accessories", type: "both" },
];

function HomeCategories() {
  return (
    
    <div className="home-categories">
      <h2>Our Categories</h2> 
    <div className="container">


    <div className="categories-grid">
      {categories.map((category, index) => (
        <Link key={index} to={`/products?category=${encodeURIComponent(category.name)}`}>
          <div className="category">
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        </Link>
      ))}
    </div>

        <div className="beechler-arb-logo">
          <img
            className="beechler-arb-logo"
            src={beechlerArb}
            alt="beechler-arb logo"
          />
        </div>

        <div className="row usa-container">
          <div className="made-in-usa">
            <p>
              Made in
              <br />
              <img className="usa-flag" src={USA} alt="Made in the USA" />
              <br />
              since 1942
            </p>
          </div>          
        </div>


    </div>
    </div>
  );
}

export default HomeCategories;
