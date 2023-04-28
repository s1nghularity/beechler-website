import "../../../styles/ProductsPage.css";

import wdAlto from "../../../assets/img/products/white-diamond/white-diamond-alto.png";
import wdTenor from "../../../assets/img/products/white-diamond/white-diamond-tenor.png";
import wdBaritone from "../../../assets/img/products/white-diamond/white-diamond-baritone.png";
import wdClarinet from "../../../assets/img/products/white-diamond/white-diamond-clarinet.png";

import taAlto from "../../../assets/img/products/tonalex/tonalex-alto.png";
import taTenor from "../../../assets/img/products/tonalex/tonalex-tenor.png";
import taClarinet from "../../../assets/img/products/tonalex/tonalex-clarinet.png";

const saxTipOpening = true;
const clarinetTipOpening = true;

export const products = [
  {
    category: "ARB Metal",
    id: "A81",
    instrument: "Saxophone",
    subtype: "Alto",
    accessories: "Cap & Ligature",
    price: 498.28,

  },
  {
    category: "ARB Metal",
    id: "A82",
    instrument: "Saxophone",
    subtype: "Tenor",
    accessories: "Cap & Ligature",
    price: 499.94,

  },
  {
    category: "ARB Metal",
    id: "A83",
    instrument: "Saxophone",
    subtype: "Baritone",
    accessories: "Cap & Ligature",
    price: 502.31,

  },
  {
    category: "ARB Custom Metal",
    id: "C12",
    instrument: "Saxophone",
    subtype: "Alto",
    accessories: "Cap & Ligature",
    price: 554.09,

  },
  {
    category: "ARB Custom Metal",
    id: "C13",
    instrument: "Saxophone",
    subtype: "Tenor",
    accessories: "Cap & Ligature",
    price: 552.19,

  },
  {
    category: "ARB Custom Metal",
    id: "C14",
    instrument: "Saxophone",
    subtype: "Baritone",
    accessories: "Cap & Ligature",
    price: 533.19,

  },
  {
    category: "ARB Great Neck Originals",
    id: "A29",
    instrument: "Clarinet",
    subtype: "BB",
    price: 180.5,

  },
  {
    category: "ARB Great Neck Originals",
    id: "A30",
    instrument: "Saxophone",
    subtype: "Alto",
    bore: "Large",
    price: 180.5,
    tipOpening: null,
    facing: null,
    image: null,
    ligatureType: null,
    finish: null,
  },

  {
    category: "Beechler Custom",
    id: "C21",
    instrument: "Saxophone",
    subtype: "Alto",
    model: "Custom 'D' Series Model",
    bore: "Medium",
    facing: ["Medium"],
    price: 210.19,
    tipOpening: null,
    image: null,
    ligatureType: null,
    finish: null,
  },
  {
    category: "Beechler Custom",
    id: "C22",
    instrument: "Saxophone",
    subtype: "Alto",
    model: "Custom 'Jazz' Model",
    settings: "Professional",
    price: 210.19,

  },
  {
    category: "Beechler Custom",
    id: "C24",
    instrument: "Saxophone",
    subtype: "Tenor",
    model: "Jazz Model",
    bore: "Medium",
    price: 241.06,
    tipOpening: null,
    facing: null,
    image: null,
    ligatureType: null,
    finish: null,
  },
  {
    category: "Beechler Custom",
    id: "C27",
    instrument: "Saxophone",
    subtype: "Tenor",
    model: "Dave Pell Model",
    tipOpenings: "4 to 9",
    price: 241.06,

  },
  {
    category: "Beechler Custom",
    id: "C26",
    instrument: "Saxophone",
    subtype: "Tenor",
    model: "110+ Model",
    price: 241.06,

  },
  {
    category: "Beechler Bellite",
    id: "B80",
    instrument: "Saxophone",
    subtype: "Soprano",
    accessories: "Cap & Ligature",
    price: 439.97,

  },
  {
    category: "Beechler Bellite",
    id: "B81",
    instrument: "Saxophone",
    subtype: "Alto",
    accessories: "Cap & Ligature",
    price: 498.28,

  },
  {
    category: "Beechler Bellite",
    id: "B82",
    instrument: "Saxophone",
    subtype: "Tenor",
    accessories: "Cap & Ligature",
    price: 499.94,

  },
  {
    category: "Beechler Bellite",
    id: "B83",
    instrument: "Saxophone",
    subtype: "Baritone",
    accessories: "Cap & Ligature",
    price: 502.31,

  },
  {
    category: "Custom Beechler Bellite",
    id: "C31",
    instrument: "Saxophone",
    subtype: "Soprano",
    accessories: "Cap & Ligature",
    price: 451.84,

  },
  {
    category: "Custom Beechler Bellite",
    id: "C32",
    instrument: "Saxophone",
    subtype: "Alto",
    accessories: "Cap & Ligature",
    price: 554.09,

  },
  {
    category: "Custom Beechler Bellite",
    id: "C33",
    instrument: "Saxophone",
    subtype: "Tenor",
    accessories: "Cap & Ligature",
    price: 552.19,

  },
  {
    category: "Custom Beechler Bellite",
    id: "C34",
    instrument: "Saxophone",
    subtype: "Baritone",
    accessories: "Cap & Ligature",
    price: 533.19,

  },

  //BEECHLER WHITE DIAMOND//
  {
    category: "Beechler White Diamond",
    id: "B07",
    instrument: "Clarinet",
    subtype: "BB",
    bore: null,
    tipOpening: clarinetTipOpening,
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
    tipOpening: saxTipOpening,
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
    tipOpening: saxTipOpening,
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
    tipOpening: saxTipOpening,
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
    tipOpening: saxTipOpening,
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
    tipOpening: saxTipOpening,
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
    tipOpening: clarinetTipOpening,
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
    tipOpening: saxTipOpening,
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
    tipOpening: saxTipOpening,
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
    tipOpening: saxTipOpening,
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
    tipOpening: saxTipOpening,
    facing: ["Standard", "Medium", "Long"],
    image: taTenor,
    price: 189.17,

  },

  {
    category: "Ligatures",
    id: "L01/A",
    subtype: ["Soprano", "Alto", "Tenor", "Baritone"],
    finish: "Antique",
    ligatureType: "Ebonite Inverted",
    price: 63.53,
  },
  {
    category: "Ligatures",
    id: "L01/B",
    instrument: null   ,

    subtype: ["BB", "Soprano", "Alto", "Tenor", "Baritone"],
    finish: "Black Powder Coat",
    ligatureType: "Ebonite Inverted",
    price: 63.53,
  },
  {
    category: "Ligatures",
    id: "L01/P",
    subtype: ["Alto", "Tenor", "BB"],
    finish: "Red & Silver Vein",
    ligatureType: "Prismatic Inverted",
    price: 63.53,
  },
  {
    category: "Ligatures",
    id: "L50/B",
    subtype: ["Soprano", "Alto", "Tenor", "Baritone"],
    finish: "Special Black",
    ligatureType: "Metal/Bellite Inverted",
    price: 63.53,
  },
  {
    category: "Ligatures",
    id: "L50/C",
    subtype: ["Soprano", "Alto", "Tenor", "Baritone"],
    finish: "White Bronze",
    ligatureType: "Metal/Bellite Inverted",
    price: 67.69,
  },
  {
    category: "Ligatures",
    id: "L50/G",
    subtype: ["Soprano", "Alto", "Tenor", "Baritone"],
    finish: "Gold Plated",
    ligatureType: "Metal/Bellite Inverted",
    price: 73.63,
  },
];
