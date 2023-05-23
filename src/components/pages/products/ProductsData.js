import "../../../styles/ProductsPage.css";

import wdAlto from "../../../assets/img/products/white-diamond/white-diamond-alto.png";
import wdTenor from "../../../assets/img/products/white-diamond/white-diamond-tenor.png";
import wdBaritone from "../../../assets/img/products/white-diamond/white-diamond-baritone.png";
import wdClarinet from "../../../assets/img/products/white-diamond/white-diamond-clarinet.png";

import taAlto from "../../../assets/img/products/tonalex/tonalex-alto.png";
import taTenor from "../../../assets/img/products/tonalex/tonalex-tenor.png";
import taClarinet from "../../../assets/img/products/tonalex/tonalex-clarinet.png";

import arbAlto from "../../../assets/img/products/arb-metal/arb-metal-alto.png";
import arbTenor from "../../../assets/img/products/arb-metal/arb-metal-tenor.png";
import arbBaritone from "../../../assets/img/products/arb-metal/arb-metal-baritone.png";

import arbCustomAlto from "../../../assets/img/products/arb-custom/arb-custom-alto.png";
import arbCustomTenor from "../../../assets/img/products/arb-custom/arb-custom-tenor.png";
import arbCustomBaritone from "../../../assets/img/products/arb-custom/arb-custom-baritone.png";

import beechlerDAlto from "../../../assets/img/products/beechler-custom/beechler-custom-d.png";
import beechlerJazzAlto from "../../../assets/img/products/beechler-custom/beechler-custom-jazz-alto.png";
import beechlerJazzTenor from "../../../assets/img/products/beechler-custom/beechler-custom-jazz-tenor.png";
import beechler110 from "../../../assets/img/products/beechler-custom/beechler-custom-110.png";
import beechlerPell from "../../../assets/img/products/beechler-custom/beechler-custom-pell.png";

import belliteSoprano from "../../../assets/img/products/bellite/bellite-soprano.png";
import belliteAlto from "../../../assets/img/products/bellite/bellite-alto.png";
import belliteTenor from "../../../assets/img/products/bellite/bellite-tenor.png";
import belliteBaritone from "../../../assets/img/products/bellite/bellite-baritone.png";

import customBelliteS from "../../../assets/img/products/custom-bellite/custom-bellite-soprano.png";
import customBelliteA from "../../../assets/img/products/custom-bellite/custom-bellite-alto.png";
import customBelliteT from "../../../assets/img/products/custom-bellite/custom-bellite-tenor.png";
import customBelliteB from "../../../assets/img/products/custom-bellite/custom-bellite-baritone.png";

import ligAntique from "../../../assets/img/products/ligatures/lig-antique.png";
import ligBlack from "../../../assets/img/products/ligatures/lig-black.png";
import ligChrome from "../../../assets/img/products/ligatures/lig-chrome.png";
import ligGold from "../../../assets/img/products/ligatures/lig-gold.png";
import ligMetal from "../../../assets/img/products/ligatures/lig-metal.png";
import ligPrismatic from "../../../assets/img/products/ligatures/lig-prismatic.png";

import arbT01 from "../../../assets/img/products/caps/arb-t01.png";
import beechlerT01 from "../../../assets/img/products/caps/beechler-t01.png";
import eboniteT02 from "../../../assets/img/products/caps/ebonite-t02.png";

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
    image: arbAlto,
  },
  {
    category: "ARB Metal",
    id: "A82",
    instrument: "Saxophone",
    subtype: "Tenor",
    accessories: "Cap & Ligature",
    price: 499.94,
    image: arbTenor,
  },
  {
    category: "ARB Metal",
    id: "A83",
    instrument: "Saxophone",
    subtype: "Baritone",
    accessories: "Cap & Ligature",
    price: 502.31,
    image: arbBaritone,
  },
  {
    category: "ARB Custom Metal",
    id: "C12",
    instrument: "Saxophone",
    subtype: "Alto",
    accessories: "Cap & Ligature",
    price: 554.09,
    image: arbCustomAlto,
  },
  {
    category: "ARB Custom Metal",
    id: "C13",
    instrument: "Saxophone",
    subtype: "Tenor",
    accessories: "Cap & Ligature",
    price: 552.19,
    image: arbCustomTenor,
  },
  {
    category: "ARB Custom Metal",
    id: "C14",
    instrument: "Saxophone",
    subtype: "Baritone",
    accessories: "Cap & Ligature",
    price: 533.19,
    image: arbCustomBaritone,
  },
  {
    category: "ARB Great Neck Originals",
    id: "A29",
    instrument: "Clarinet",
    subtype: "BB",
    price: 180.5,
    image: arbCustomBaritone,
  },
  {
    category: "ARB Great Neck Originals",
    id: "A30",
    instrument: "Saxophone",
    subtype: "Alto",
    bore: "Large",
    price: 180.5,
    image: arbCustomBaritone,
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
    image: beechlerDAlto,
  },
  {
    category: "Beechler Custom",
    id: "C22",
    instrument: "Saxophone",
    subtype: "Alto",
    model: "Custom 'Jazz' Model",
    settings: "Professional",
    price: 210.19,
    image: beechlerJazzAlto,
  },
  {
    category: "Beechler Custom",
    id: "C24",
    instrument: "Saxophone",
    subtype: "Tenor",
    model: "Jazz Model",
    bore: "Medium",
    price: 241.06,
    image: beechlerJazzTenor,
  },
  {
    category: "Beechler Custom",
    id: "C27",
    instrument: "Saxophone",
    subtype: "Tenor",
    model: "Dave Pell Model",
    tipOpenings: "4 to 9",
    price: 241.06,
    image: beechlerPell,
  },
  {
    category: "Beechler Custom",
    id: "C26",
    instrument: "Saxophone",
    subtype: "Tenor",
    model: "110+ Model",
    price: 241.06,
    image: beechler110,
  },
  {
    category: "Beechler Bellite",
    id: "B80",
    instrument: "Saxophone",
    subtype: "Soprano",
    accessories: "Cap & Ligature",
    price: 439.97,
    image: belliteSoprano,
  },
  {
    category: "Beechler Bellite",
    id: "B81",
    instrument: "Saxophone",
    subtype: "Alto",
    accessories: "Cap & Ligature",
    price: 498.28,
    image: belliteAlto,
  },
  {
    category: "Beechler Bellite",
    id: "B82",
    instrument: "Saxophone",
    subtype: "Tenor",
    accessories: "Cap & Ligature",
    price: 499.94,
    image: belliteTenor,
  },
  {
    category: "Beechler Bellite",
    id: "B83",
    instrument: "Saxophone",
    subtype: "Baritone",
    accessories: "Cap & Ligature",
    price: 502.31,
    image: belliteBaritone,
  },
  {
    category: "Custom Beechler Bellite",
    id: "C31",
    instrument: "Saxophone",
    subtype: "Soprano",
    accessories: "Cap & Ligature",
    price: 451.84,
    image: customBelliteS,
  },
  {
    category: "Custom Beechler Bellite",
    id: "C32",
    instrument: "Saxophone",
    subtype: "Alto",
    accessories: "Cap & Ligature",
    price: 554.09,
    image: customBelliteA,
  },
  {
    category: "Custom Beechler Bellite",
    id: "C33",
    instrument: "Saxophone",
    subtype: "Tenor",
    accessories: "Cap & Ligature",
    price: 552.19,
    image: customBelliteT,
  },
  {
    category: "Custom Beechler Bellite",
    id: "C34",
    instrument: "Saxophone",
    subtype: "Baritone",
    accessories: "Cap & Ligature",
    price: 533.19,
    image: customBelliteB,
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
    category: "Beechler & ARB Ligatures",
    id: "L01/A",
    subtype: ["Soprano", "Alto", "Tenor", "Baritone"],
    finish: "Antique",
    ligatureType: "Ebonite Inverted",
    price: 63.53,
    image: ligAntique,
  },
  {
    category: "Beechler & ARB Ligatures",
    id: "L01/B",
    instrument: null,

    subtype: ["BB", "Soprano", "Alto", "Tenor", "Baritone"],
    finish: "Black Powder Coat",
    ligatureType: "Ebonite Inverted",
    price: 63.53,
    image: ligBlack,
  },
  {
    category: "Beechler & ARB Ligatures",
    id: "L01/P",
    subtype: ["Alto", "Tenor", "BB"],
    finish: "Red & Silver Vein",
    ligatureType: "Prismatic Inverted",
    price: 63.53,
    image: ligPrismatic,
  },
  {
    category: "Beechler & ARB Ligatures",
    id: "L50/B",
    subtype: ["Soprano", "Alto", "Tenor", "Baritone"],
    finish: "Special Black",
    ligatureType: "Metal/Bellite Inverted",
    price: 63.53,
    image: ligMetal,
  },
  {
    category: "Beechler & ARB Ligatures",
    id: "L50/C",
    subtype: ["Soprano", "Alto", "Tenor", "Baritone"],
    finish: "White Bronze",
    ligatureType: "Metal/Bellite Inverted",
    price: 67.69,
    image: ligChrome,
  },
  {
    category: "Beechler & ARB Ligatures",
    id: "L50/G",
    subtype: ["Soprano", "Alto", "Tenor", "Baritone"],
    finish: "Gold Plated",
    ligatureType: "Metal/Bellite Inverted",
    price: 73.63,
    image: ligGold,
  },

  {
    category: "Beechler & ARB Caps",
    id: "T01A",
    subtype: ["Alto"],
    finish: "Metal/Bellite",
    image: arbT01,
    price: 27.91,
  },
  {
    category: "Beechler & ARB Caps",
    id: "T01B",
    subtype: ["Baritone"],
    finish: "Metal/Bellite",
    image: beechlerT01,
    price: 27.91,
  },
  {
    category: "Beechler & ARB Caps",
    id: "T02A",
    subtype: ["Alto"],
    finish: "Ebonite",
    image: eboniteT02,
    price: 28.50,
  },
  {
    category: "Beechler & ARB Caps",
    id: "T02B",
    subtype: ["Baritone"],
    finish: "Ebonite",
    image: eboniteT02,
    price: 28.50,
  },
];
