import "../../../styles/ProductsPage.css";

import wdAlto from "../../../assets/img/products/white-diamond/white-diamond-alto.png";
import wdTenor from "../../../assets/img/products/white-diamond/white-diamond-tenor.png";
import wdBaritone from "../../../assets/img/products/white-diamond/white-diamond-baritone.png";
import wdClarinet from "../../../assets/img/products/white-diamond/white-diamond-clarinet.png";

import taAlto from "../../../assets/img/products/tonalex/tonalex-alto.png";
import taTenor from "../../../assets/img/products/tonalex/tonalex-tenor.png";
import taClarinet from "../../../assets/img/products/tonalex/tonalex-clarinet.png";

export const products = [
  //BEECHLER WHITE DIAMOND//
  {
    category: "Beechler White Diamond",
    id: "B07",
    instrument: "Clarinet",
    subtype: 'BB',
    bore: null,
    tipOpening: Array.from({ length: 12 }, (_, i) => i + 1), // Clarinet: Tip Openings up to 12
    facing: ["Standard", "Medium", "Long"],
    image: wdClarinet,
    price: 199.38,
  },
  {
    category: "Beechler White Diamond",
    id: "B10",
    instrument: "Saxophone",
    subtype: "Alto",
    bore: "Small",
    tipOpening: Array.from({ length: 7 }, (_, i) => i + 4), // Saxophoneophone: Tip Openings from 4-10
    facing: ["Standard", "Medium", "Long"],
    image: wdAlto,
    price: 182.76,
  },
  {
    category: "Beechler White Diamond",
    id: "B11",
    instrument: "Saxophone",
    subtype: "Alto",
    bore: "Medium",
    tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
    facing: ["Standard", "Medium", "Long"],
    image: wdAlto,
    price: 182.76,
  },
  {
    category: "Beechler White Diamond",
    id: "B12",
    instrument: "Saxophone",
    subtype: "Alto",
    bore: "Large",
    tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
    facing: ["Standard", "Medium", "Long"],
    image: wdAlto,
    price: 182.76,
  },
  {
    category: "Beechler White Diamond",
    id: "B14",
    instrument: "Saxophone",
    subtype: "Tenor",
    bore: "Medium",
    tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
    facing: ["Standard", "Medium", "Long"],
    image: wdTenor,
    price: 182.76,
  },
  {
    category: "Beechler White Diamond",
    id: "B16",
    instrument: "Saxophone",
    subtype: "Baritone",
    bore: null,
    tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
    facing: ["Standard", "Medium", "Long"],
    extras: ["Cap", "Ligature"],
    image: wdBaritone,
    price: 231.56,
  },

  //BEECHLER TONALEX//
  {
    category: "Beechler Tonalex",
    id: "B17",
    instrument: "Clarinet",
    subtype: "BB",
    bore: null,
    tipOpening: Array.from({ length: 12 }, (_, i) => i + 1),
    facing: ["Standard", "Medium", "Long"],
    image: taClarinet,
    price: 210.54,
  },
  {
    category: "Beechler Tonalex",
    id: "B18",
    instrument: "Saxophone",
    subtype: "Alto",
    bore: "Large",
    tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
    facing: ["Standard", "Medium", "Long"],
    image: taAlto,
    price: 189.17,
  },
  {
    category: "Beechler Tonalex",
    id: "B20",
    instrument: "Saxophone",
    subtype: "Alto",
    bore: "Small",
    tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
    facing: ["Standard", "Medium", "Long"],
    image: taAlto,
    price: 189.17,
  },
  {
    category: "Beechler Tonalex",
    id: "B21",
    instrument: "Saxophone",
    subtype: "Alto",
    bore: "Medium",
    tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
    facing: ["Standard", "Medium", "Long"],
    image: taAlto,
    price: 189.17,
  },
  {
    category: "Beechler Tonalex",
    id: "B19",
    instrument: "Saxophone",
    subtype: "Tenor",
    bore: "Medium",
    tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
    facing: ["Standard", "Medium", "Long"],
    image: taTenor,
    price: 189.17,
  },
];
