import "../../../styles/ProductsPage.css";

//DIAMOND
import wdAlto from "../../../assets/img/products/diamond/white-diamond-alto.png";
import wdTenor from "../../../assets/img/products/diamond/white-diamond-tenor.png";
import wdBaritone from "../../../assets/img/products/diamond/white-diamond-baritone.png";
import wdClarinet from "../../../assets/img/products/diamond/white-diamond-clarinet.png";

//TONALEX
import taAlto from "../../../assets/img/products/tonalex/tonalex-alto.png";
import taTenor from "../../../assets/img/products/tonalex/tonalex-tenor.png";
import taClarinet from "../../../assets/img/products/tonalex/tonalex-clarinet.png";

//BELLITE
import belliteSoprano from "../../../assets/img/products/bellite/bellite-soprano.png";
import belliteAlto from "../../../assets/img/products/bellite/bellite-alto.png";
import belliteTenor from "../../../assets/img/products/bellite/bellite-tenor.png";
import belliteBaritone from "../../../assets/img/products/bellite/bellite-baritone.png";
import customBelliteS from "../../../assets/img/products/bellite/custom-bellite-soprano.png";
import customBelliteA from "../../../assets/img/products/bellite/custom-bellite-alto.png";
import customBelliteT from "../../../assets/img/products/bellite/custom-bellite-tenor.png";
import customBelliteB from "../../../assets/img/products/bellite/custom-bellite-baritone.png";

//TODO:HARD RUBBER

//CUSTOMIZED
import beechlerDAlto from "../../../assets/img/products/beechler-custom/beechler-custom-d.png";
import beechlerJazzAlto from "../../../assets/img/products/beechler-custom/beechler-custom-jazz-alto.png";
import beechlerJazzTenor from "../../../assets/img/products/beechler-custom/beechler-custom-jazz-tenor.png";
import beechler110 from "../../../assets/img/products/beechler-custom/beechler-custom-110.png";
import beechlerPell from "../../../assets/img/products/beechler-custom/beechler-custom-pell.png";

//ARB METAL
import arbAlto from "../../../assets/img/products/arb-metal/arb-metal-alto.png";
import arbTenor from "../../../assets/img/products/arb-metal/arb-metal-tenor.png";
import arbBaritone from "../../../assets/img/products/arb-metal/arb-metal-baritone.png";
import arbCustomAlto from "../../../assets/img/products/arb-custom/arb-custom-alto.png";
import arbCustomTenor from "../../../assets/img/products/arb-custom/arb-custom-tenor.png";
import arbCustomBaritone from "../../../assets/img/products/arb-custom/arb-custom-baritone.png";

//GREAT NECK ORIGINAL
import A29 from "../../../assets/img/products/greatneck/A29.png";
import A30 from "../../../assets/img/products/greatneck/A30.png";
import C15 from "../../../assets/img/products/greatneck/C15.png";
import C16 from "../../../assets/img/products/greatneck/C16.png";

//ACCESSORIES & SERVICES
//Caps
import T01A from "../../../assets/img/products/accessories-services/T01A.png";
import T01B from "../../../assets/img/products/accessories-services/T01B.png";
import T02 from "../../../assets/img/products/accessories-services/T02.png";
//Pegs
import P01 from "../../../assets/img/products/accessories-services/P01.png";
import P02 from "../../../assets/img/products/accessories-services/P02.png";
import P03 from "../../../assets/img/products/accessories-services/P03.png";
//Ligatures
import ligAntique from "../../../assets/img/products/ligatures/lig-antique.png";
import ligBlack from "../../../assets/img/products/ligatures/lig-black.png";
import ligChrome from "../../../assets/img/products/ligatures/lig-chrome.png";
import ligGold from "../../../assets/img/products/ligatures/lig-gold.png";
import ligMetal from "../../../assets/img/products/ligatures/lig-metal.png";
import ligPrismatic from "../../../assets/img/products/ligatures/lig-prismatic.png";
import eboniteT02 from "../../../assets/img/products/caps/ebonite-t02.png";
//Services
import BP from "../../../assets/img/products/accessories-services/BP.png";
import CE from "../../../assets/img/products/accessories-services/CE.png";
import LC from "../../../assets/img/products/accessories-services/LC.png";
import M03 from "../../../assets/img/products/accessories-services/M03.png";
import RE from "../../../assets/img/products/accessories-services/RE.png";

const saxTipOpening = true;
const clarinetTipOpening = true;

export const products = [
  //DIAMOND
  {
    category: "Beechler Diamond",
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
    category: "Beechler Diamond",
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
    category: "Beechler Diamond",
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
    category: "Beechler Diamond",
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
    category: "Beechler Diamond",
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
    category: "Beechler Diamond",
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

  //TONALEX//
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

  //BELLITE

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
    category: "Beechler Bellite",
    id: "C31",
    instrument: "Saxophone",
    subtype: "Soprano",
    accessories: "Cap & Ligature",
    price: 451.84,
    image: customBelliteS,
  },
  {
    category: "Beechler Bellite",
    id: "C32",
    instrument: "Saxophone",
    subtype: "Alto",
    accessories: "Cap & Ligature",
    price: 554.09,
    image: customBelliteA,
  },
  {
    category: "Beechler Bellite",
    id: "C33",
    instrument: "Saxophone",
    subtype: "Tenor",
    accessories: "Cap & Ligature",
    price: 552.19,
    image: customBelliteT,
  },
  {
    category: "Beechler Bellite",
    id: "C34",
    instrument: "Saxophone",
    subtype: "Baritone",
    accessories: "Cap & Ligature",
    price: 533.19,
    image: customBelliteB,
  },

  //TODO:ADD HARD RUBBERB25 B25/C B26 B26/C B22 B28 B29

  //CUSTOMIZED

  {
    category: "Beechler Customized",
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
    category: "Beechler Customized",
    id: "C22",
    instrument: "Saxophone",
    subtype: "Alto",
    model: "Custom 'Jazz' Model",
    settings: "Professional",
    price: 210.19,
    image: beechlerJazzAlto,
  },
  {
    category: "Beechler Customized",
    id: "C24",
    instrument: "Saxophone",
    subtype: "Tenor",
    model: "Jazz Model",
    bore: "Medium",
    price: 241.06,
    image: beechlerJazzTenor,
  },
  {
    category: "Beechler Customized",
    id: "C27",
    instrument: "Saxophone",
    subtype: "Tenor",
    model: "Dave Pell Model",
    tipOpenings: "4 to 9",
    price: 241.06,
    image: beechlerPell,
  },
  {
    category: "Beechler Customized",
    id: "C26",
    instrument: "Saxophone",
    subtype: "Tenor",
    model: "110+ Model",
    price: 241.06,
    image: beechler110,
  },

  //ARB METAL

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
    category: "ARB Metal",
    id: "C12",
    instrument: "Saxophone",
    subtype: "Alto",
    accessories: "Cap & Ligature",
    price: 554.09,
    image: arbCustomAlto,
  },
  {
    category: "ARB Metal",
    id: "C13",
    instrument: "Saxophone",
    subtype: "Tenor",
    accessories: "Cap & Ligature",
    price: 552.19,
    image: arbCustomTenor,
  },
  {
    category: "ARB Metal",
    id: "C14",
    instrument: "Saxophone",
    subtype: "Baritone",
    accessories: "Cap & Ligature",
    price: 533.19,
    image: arbCustomBaritone,
  },

  //GREAT NECK ORIGINALS

  {
    category: "ARB Great Neck Originals",
    id: "A29",
    instrument: "Clarinet",
    subtype: "BB",
    price: 180.5,
    image: A29,
  },
  {
    category: "ARB Great Neck Originals",
    id: "A30",
    instrument: "Saxophone",
    subtype: "Alto",
    bore: "Large",
    price: 180.5,
    image: A30,
  },
  {
    category: "ARB Great Neck Originals",
    id: "C15",
    instrument: "Clarinet",
    subtype: "BB",
    price: 180.5,
    image: C15,
  },
  {
    category: "ARB Great Neck Originals",
    id: "C16",
    instrument: "Saxophone",
    subtype: "Alto",
    price: 280,
    image: C16,
  },

  //ACCESSORIES & SERVICES
  //Caps
  {
    category: "Accessories & Services",
    id: "T01S",
    subtype: ["Soprano"],
    finish: "Ebonite",
    price: 27.91,
    image: T01A,
  },

  {
    category: "Accessories & Services",
    id: "T01A",
    subtype: ["Alto"],
    finish: "Ebonite",
    image: T01A,
    price: 27.91,
  },
  {
    category: "Accessories & Services",
    id: "T01T",
    subtype: ["Tenor"],
    finish: "Metal/Bellite",
    image: T02,
    price: 27.91,
  },
  {
    category: "Accessories & Services",
    id: "T01B",
    subtype: ["Baritone"],
    finish: "Ebonite",
    image: T01B,
    price: 27.91,
  },

  {
    category: "Accessories & Services",
    id: "T02S",
    subtype: ["Soprano"],
    finish: "Ebonite",
    image: T01B,
    price: 28.5,
  },

  {
    category: "Accessories & Services",
    id: "T02C",
    subtype: ["BB"],
    finish: "Ebonite",
    image: T01A,
    price: 28.5,
  },

  {
    category: "Accessories & Services",
    id: "T02A",
    subtype: ["Alto"],
    finish: "Metal/Bellite",
    image: eboniteT02,
    price: 28.5,
  },

  {
    category: "Accessories & Services",
    id: "T02T",
    subtype: ["Tenor"],
    finish: "Ebonite",
    image: T01A,
    price: 28.5,
  },

  {
    category: "Accessories & Services",
    id: "T02B",
    subtype: ["Baritone"],
    finish: "Metal/Bellite",
    image: eboniteT02,
    price: 28.5,
  },

  {
    category: "Accessories & Services",
    id: "P01",
    subtype: ["Soprano"],
    finish: "Ebonite",
    image: P01,
    price: 11.88,
  },

  {
    category: "Accessories & Services",
    id: "P02",
    subtype: ["BB"],
    finish: "Ebonite",
    image: P02,
    price: 11.88,
  },
  {
    category: "Accessories & Services",
    id: "P03",
    subtype: ["Soprano"],
    finish: "Ebonite",
    image: P03,
    price: 11.88,
  },

  {
    category: "Accessories & Services",
    id: "L01/A",
    subtype: ["Soprano", "Alto", "Tenor", "Baritone"],
    finish: "Antique",
    ligatureType: "Ebonite Inverted",
    price: 63.53,
    image: ligAntique,
  },
  {
    category: "Accessories & Services",
    id: "L01/B",
    instrument: null,
    subtype: ["BB", "Soprano", "Alto", "Tenor", "Baritone"],
    finish: "Black Powder Coat",
    ligatureType: "Ebonite Inverted",
    price: 63.53,
    image: ligBlack,
  },
  {
    category: "Accessories & Services",
    id: "L01/P",
    subtype: ["Alto", "Tenor", "BB"],
    finish: "Red & Silver Vein",
    ligatureType: "Prismatic Inverted",
    price: 63.53,
    image: ligPrismatic,
  },
  {
    category: "Accessories & Services",
    id: "L50/B",
    subtype: ["Soprano", "Alto", "Tenor", "Baritone"],
    finish: "Special Black",
    ligatureType: "Metal/Bellite Inverted",
    price: 63.53,
    image: ligMetal,
  },
  {
    category: "Accessories & Services",
    id: "L50/C",
    subtype: ["Soprano", "Alto", "Tenor", "Baritone"],
    finish: "White Bronze",
    ligatureType: "Metal/Bellite Inverted",
    price: 67.69,
    image: ligChrome,
  },
  {
    category: "Accessories & Services",
    id: "L50/G",
    subtype: ["Soprano", "Alto", "Tenor", "Baritone"],
    finish: "Gold Plated",
    ligatureType: "Metal/Bellite Inverted",
    price: 73.63,
    image: ligGold,
  },
  {
    category: "Accessories & Services",
    id: "BP",
    ligatureType: "Bite Plate Replacement",
    price: 35.0,
    image: BP,
  },
  {
    category: "Accessories & Services",
    id: "CE",
    ligatureType: "Custom Engraving",
    price: 10.0,
    image: CE,
  },
  {
    category: "Accessories & Services",
    id: "LC",
    ligatureType: "Ligature Change",
    price: 6.0,
    image: LC,
  },
  {
    category: "Accessories & Services",
    id: "M03",
    ligatureType: "Tuffbite Mouthpiece Protector",
    price: 5.0,
    image: M03,
  },
  {
    category: "Accessories & Services",
    id: "R",
    ligatureType: "Refacing or Repair",
    price: 50.0,
    image: RE,
  },
];
