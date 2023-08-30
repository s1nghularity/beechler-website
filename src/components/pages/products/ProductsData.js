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
import b80 from "../../../assets/img/products/bellite/b80.png";
import b81 from "../../../assets/img/products/bellite/b81.png";
import b82 from "../../../assets/img/products/bellite/b82.png";
import c32 from "../../../assets/img/products/bellite/c32.png";
import c33 from "../../../assets/img/products/bellite/c33.png";
import belliteBaritone from "../../../assets/img/products/bellite/bellite-baritone.png";
import customBelliteS from "../../../assets/img/products/bellite/custom-bellite-soprano.png";
import customBelliteB from "../../../assets/img/products/bellite/custom-bellite-baritone.png";

//TODO:HARD RUBBER
import b22 from "../../../assets/img/products/hard-rubber/b22.png";
import b25 from "../../../assets/img/products/hard-rubber/b25.png";
import b25c from "../../../assets/img/products/hard-rubber/b25c.png";
import b26 from "../../../assets/img/products/hard-rubber/b26.png";
import b26c from "../../../assets/img/products/hard-rubber/b26c.png";
import b27 from "../../../assets/img/products/hard-rubber/b27.png";
import b29 from "../../../assets/img/products/hard-rubber/b29.png";


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
//Pegs
import P01 from "../../../assets/img/products/accessories-services/P01.png";
import P02 from "../../../assets/img/products/accessories-services/P02.png";
import P03 from "../../../assets/img/products/accessories-services/P03.png";
import L52 from "../../../assets/img/products/accessories-services/L52.png";
import L53 from "../../../assets/img/products/accessories-services/L53.png";
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
import RE from "../../../assets/img/products/accessories-services/RE.png";
import tuffbite from "../../../assets/img/products/accessories-services/tuffbite.png";

const saxTipOpening = true;
const clarinetTipOpening = true;


export const products = [
  //DIAMOND
  {
    category: "Beechler Diamond",
    id: "B07",
    instrument: "Clarinet",
    subtype: "Bb",
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
    accessories: "Cap & Ligature",
    image: wdBaritone,
    price: 231.56,
  },

  //TONALEX//
  {
    category: "Beechler Tonalex",
    id: "B17",
    instrument: "Clarinet",
    subtype: "Bb",
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
    image: b80,
  },
  {
    category: "Beechler Bellite",
    id: "B81",
    instrument: "Saxophone",
    subtype: "Alto",
    accessories: "Cap & Ligature",
    price: 498.28,
    image: b81,
  },
  {
    category: "Beechler Bellite",
    id: "B82",
    instrument: "Saxophone",
    subtype: "Tenor",
    accessories: "Cap & Ligature",
    price: 499.94,
    image: b82,
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
    image: c32,
  },
  {
    category: "Beechler Bellite",
    id: "C33",
    instrument: "Saxophone",
    subtype: "Tenor",
    accessories: "Cap & Ligature",
    price: 552.19,
    image: c33,
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

//Beechler Hard Rubber

  {
    category: "Beechler Hard Rubber",
    id: "B25",
    instrument: "Saxophone",
    subtype: "Soprano",
    price: 219.25,
    image: b25c,
  },

  {
    category: "Beechler Hard Rubber",
    id: "B25/C",
    instrument: "Saxophone",
    subtype: "Soprano",
    price: 226.58,
    image: b25,
  },

  {
    category: "Beechler Hard Rubber",
    id: "B26",
    instrument: "Saxophone",
    subtype: "Alto",
    price: 219.09,
    image: b26,
  },

  {
    category: "Beechler Hard Rubber",
    id: "B26/C",
    instrument: "Saxophone",
    subtype: "Alto",
    price: 219.09,
    image: b26c,
  },

  {
    category: "Beechler Hard Rubber",
    id: "B22",
    instrument: "Clarinet",
    subtype: "Bb",
    price: 216.36,
    image: b22,
  },

  {
    category: "Beechler Hard Rubber",
    id: "B28",
    instrument: "Saxophone",
    subtype: "Tenor",
    price: 232.87,
    image: b27,
  },

  {
    category: "Beechler Hard Rubber",
    id: "B29",
    instrument: "Saxophone",
    subtype: "Baritone",
    accessories: "Cap & Ligature",
    price: 275.03,
    image: b29,
  },


  //CUSTOMIZED

  {
    category: "Beechler Customized",
    id: "C21",
    instrument: "Saxophone",
    subtype: "Alto",
    model: "'D' Series Model",
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
    model: "Jazz Model",
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
    subtype: "Bb",
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
    subtype: "Bb",
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
    id: "T01ARB",
    subtype: ["Metal"],
    finish: "Black Powder Coat",
    price: 27.91,
    image: T01A,
  },

  {
    category: "Accessories & Services",
    id: "T01Beechler",
    subtype: ["Metal"],
    finish: "Black Powder Coat",
    image: T01B,
    price: 28.5,
  },

  {
    category: "Accessories & Services",
    id: "T02ARB/Beechler",
    subtype: ["Composite"],
    finish: "Lacquered Brass",
    image: eboniteT02,
    price: 28.5,
  },
//Pegs
  {
    category: "Accessories & Services",
    id: "P01",
    subtype: ["Flute"],
    finish: "Styrene/Rubber",
    image: P01,
    price: 11.88,
  },

  {
    category: "Accessories & Services",
    id: "P02",
    subtype: ["Clarinet"],
    finish: "Styrene/Rubber",
    image: P02,
    price: 11.88,
  },
  {
    category: "Accessories & Services",
    id: "P03",
    subtype: ["Soprano"],
    finish: "Styrene/Rubber",
    image: P03,
    price: 11.88,
  },
//Ligatures
  {
    category: "Accessories & Services",
    id: "L01/A",
    subtype: ["Any Size"],
    finish: "Antique",
    ligatureType: "Ebonite Inverted",
    price: 63.53,
    image: ligAntique,
  },
  {
    category: "Accessories & Services",
    id: "L01/B",
    instrument: null,
    subtype: ["Any Size"],
    finish: "Black Powder Coat",
    ligatureType: "Ebonite Inverted",
    price: 63.53,
    image: ligBlack,
  },
  {
    category: "Accessories & Services",
    id: "L01/P",
    subtype: ["Any Size"],
    finish: "Red & Silver Vein",
    ligatureType: "Prismatic Inverted",
    price: 63.53,
    image: ligPrismatic,
  },
  {
    category: "Accessories & Services",
    id: "L50/B",
    subtype: ["Any Size"],
    finish: "Special Black",
    ligatureType: "Metal/Bellite Inverted",
    price: 63.53,
    image: ligMetal,
  },
  {
    category: "Accessories & Services",
    id: "L50/C",
    subtype: ["Any Size"],
    finish: "White Bronze",
    ligatureType: "Metal/Bellite Inverted",
    price: 67.69,
    image: ligChrome,
  },
  {
    category: "Accessories & Services",
    id: "L50/G",
    subtype: ["Any Size"],
    finish: "Gold Plated",
    ligatureType: "Metal/Bellite Inverted",
    price: 73.63,
    image: ligGold,
  },
  {
    category: "Accessories & Services",
    id: "L52",
    subtype: ["One Size"],
    ligatureType: "Chrome",
    price: 4.75,
    image: L52,
  },
  {
    category: "Accessories & Services",
    id: "L53",
    subtype: ["One Size"],
    ligatureType: "Brass",
    price: 4.75,
    image: L53,
  },
  {
    category: "Accessories & Services",
    id: "BP",
    ligatureType: "Bite Plate Replacement",
    subtype: ["Service"],
    price: 35.0,
    image: BP,
  },
  {
    category: "Accessories & Services",
    id: "CE",
    ligatureType: "Custom Engraving",
    subtype: ["Service"],
    price: 10.0,
    image: CE,
  },
  {
    category: "Accessories & Services",
    id: "LC",
    ligatureType: "Ligature Change",
    subtype: ["Service"],
    price: 6.0,
    image: LC,
  },
  {
    category: "Accessories & Services",
    id: "M03",
    ligatureType: "Tuffbite Mouthpiece Protector",
    subtype: ["Service"],
    price: 5.0,
    image: tuffbite,
  },
  {
    category: "Accessories & Services",
    id: "R",
    ligatureType: "Refacing or Repair",
    subtype: ["Service"],
    price: 50.0,
    image: RE,
  },
];