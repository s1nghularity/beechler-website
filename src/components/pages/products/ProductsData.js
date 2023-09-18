import "../../../styles/ProductsPage.css";

//DIAMOND
import wdAlto from "../../../assets/img/products/diamond/white-diamond-alto.webp";
import wdTenor from "../../../assets/img/products/diamond/white-diamond-tenor.webp";
import wdBaritone from "../../../assets/img/products/diamond/white-diamond-baritone.webp";
import wdClarinet from "../../../assets/img/products/diamond/white-diamond-clarinet.webp";

//TONALEX
import taAlto from "../../../assets/img/products/tonalex/tonalex-alto.webp";
import taTenor from "../../../assets/img/products/tonalex/tonalex-tenor.webp";
import taClarinet from "../../../assets/img/products/tonalex/tonalex-clarinet.webp";

//BELLITE
import b80 from "../../../assets/img/products/bellite/b80.webp";
import b81 from "../../../assets/img/products/bellite/b81.webp";
import b82 from "../../../assets/img/products/bellite/b82.webp";
import c32 from "../../../assets/img/products/bellite/c32.webp";
import c33 from "../../../assets/img/products/bellite/c33.webp";
import belliteBaritone from "../../../assets/img/products/bellite/bellite-baritone.webp";
import customBelliteS from "../../../assets/img/products/bellite/custom-bellite-soprano.webp";
import customBelliteB from "../../../assets/img/products/bellite/custom-bellite-baritone.webp";

//HARD RUBBER
import b22 from "../../../assets/img/products/hard-rubber/b22.webp";
import b25 from "../../../assets/img/products/hard-rubber/b25.webp";
import b25c from "../../../assets/img/products/hard-rubber/b25c.webp";
import b26 from "../../../assets/img/products/hard-rubber/b26.webp";
import b26c from "../../../assets/img/products/hard-rubber/b26c.webp";
import b27 from "../../../assets/img/products/hard-rubber/b27.webp";
import b29 from "../../../assets/img/products/hard-rubber/b29.webp";

//CUSTOMIZED
import beechlerDAlto from "../../../assets/img/products/beechler-custom/beechler-custom-d.webp";
import beechlerJazzAlto from "../../../assets/img/products/beechler-custom/beechler-custom-jazz-alto.webp";
import beechlerJazzTenor from "../../../assets/img/products/beechler-custom/beechler-custom-jazz-tenor.webp";
import beechler110 from "../../../assets/img/products/beechler-custom/beechler-custom-110.webp";
import beechlerPell from "../../../assets/img/products/beechler-custom/beechler-custom-pell.webp";

//ARB METAL
import arbAlto from "../../../assets/img/products/arb-metal/arb-metal-alto.webp";
import arbTenor from "../../../assets/img/products/arb-metal/arb-metal-tenor.webp";
import arbBaritone from "../../../assets/img/products/arb-metal/arb-metal-baritone.webp";
import arbCustomAlto from "../../../assets/img/products/arb-custom/arb-custom-alto.webp";
import arbCustomTenor from "../../../assets/img/products/arb-custom/arb-custom-tenor.webp";
import arbCustomBaritone from "../../../assets/img/products/arb-custom/arb-custom-baritone.webp";

//GREAT NECK ORIGINAL
import A29 from "../../../assets/img/products/greatneck/A29.webp";
import A30 from "../../../assets/img/products/greatneck/A30.webp";
import C15 from "../../../assets/img/products/greatneck/C15.webp";
import C16 from "../../../assets/img/products/greatneck/C16.webp";

//ACCESSORIES & SERVICES
//Caps
import T01A from "../../../assets/img/products/accessories-services/T01A.webp";
import T01B from "../../../assets/img/products/accessories-services/T01B.webp";
//Pegs
import P01 from "../../../assets/img/products/accessories-services/P01.webp";
import P02 from "../../../assets/img/products/accessories-services/P02.webp";
import P03 from "../../../assets/img/products/accessories-services/P03.webp";
import L52 from "../../../assets/img/products/accessories-services/L52.webp";
import L53 from "../../../assets/img/products/accessories-services/L53.webp";
//Ligatures
import ligAntique from "../../../assets/img/products/ligatures/lig-antique.webp";
import ligBlack from "../../../assets/img/products/ligatures/lig-black.webp";
import ligChrome from "../../../assets/img/products/ligatures/lig-chrome.webp";
import ligGold from "../../../assets/img/products/ligatures/lig-gold.webp";
import ligMetal from "../../../assets/img/products/ligatures/lig-metal.webp";
import ligPrismatic from "../../../assets/img/products/ligatures/lig-prismatic.webp";
import eboniteT02 from "../../../assets/img/products/caps/ebonite-t02.webp";
//Services
import BP from "../../../assets/img/products/accessories-services/BP.webp";
import CE from "../../../assets/img/products/accessories-services/CE.webp";
import LC from "../../../assets/img/products/accessories-services/LC.webp";
import RE from "../../../assets/img/products/accessories-services/RE.webp";
import tuffbite from "../../../assets/img/products/accessories-services/tuffbite.webp";

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
    gtin14: "00879281003334",
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
    gtin14: "00879281003440",
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
    gtin14: "00879281005543",
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
    gtin14: "00879281005680",
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
    gtin14: "00879281003686",
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
    gtin14: "00879281003754",
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
    gtin14: "00879281003822",
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
    gtin14: "00879281003907",
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
    gtin14: "00879281004676",
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
    gtin14: "00879281004744",
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
    gtin14: "00879281003976",
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
    gtin14: "00879281001217",
  },
  {
    category: "Beechler Bellite",
    id: "B81",
    instrument: "Saxophone",
    subtype: "Alto",
    accessories: "Cap & Ligature",
    price: 498.28,
    image: b81,
    gtin14: "00879281001286",
  },
  {
    category: "Beechler Bellite",
    id: "B82",
    instrument: "Saxophone",
    subtype: "Tenor",
    accessories: "Cap & Ligature",
    price: 499.94,
    image: b82,
    gtin14: "00879281001354",
  },
  {
    category: "Beechler Bellite",
    id: "B83",
    instrument: "Saxophone",
    subtype: "Baritone",
    accessories: "Cap & Ligature",
    price: 502.31,
    image: belliteBaritone,
    gtin14: "00879281001422",
  },
  {
    category: "Beechler Bellite",
    id: "C31",
    instrument: "Saxophone",
    subtype: "Soprano",
    accessories: "Cap & Ligature",
    price: 451.84,
    image: customBelliteS,
    gtin14: "00879281003068",
  },
  {
    category: "Beechler Bellite",
    id: "C32",
    instrument: "Saxophone",
    subtype: "Alto",
    accessories: "Cap & Ligature",
    price: 554.09,
    image: c32,
    gtin14: "00879281003136",
  },
  {
    category: "Beechler Bellite",
    id: "C33",
    instrument: "Saxophone",
    subtype: "Tenor",
    accessories: "Cap & Ligature",
    price: 552.19,
    image: c33,
    gtin14: "00879281003204",
  },
  {
    category: "Beechler Bellite",
    id: "C34",
    instrument: "Saxophone",
    subtype: "Baritone",
    accessories: "Cap & Ligature",
    price: 533.19,
    image: customBelliteB,
    gtin14: "00879281003273",
  },

  //Beechler Hard Rubber

  {
    category: "Beechler Hard Rubber",
    id: "B25",
    instrument: "Saxophone",
    subtype: "Soprano",
    price: 219.45,
    image: b25c,
    gtin14: "00879281000791",
  },

  {
    category: "Beechler Hard Rubber",
    id: "B25/C",
    instrument: "Saxophone",
    subtype: "Soprano",
    price: 226.58,
    image: b25,
    gtin14: "00879281007097",
  },

  {
    category: "Beechler Hard Rubber",
    id: "B26",
    instrument: "Saxophone",
    subtype: "Alto",
    price: 219.09,
    image: b26,
    gtin14: "00879281000869",
  },

  {
    category: "Beechler Hard Rubber",
    id: "B26/C",
    instrument: "Saxophone",
    subtype: "Alto",
    price: 246.53,
    image: b26c,
    gtin14: "00879281005116",
  },

  {
    category: "Beechler Hard Rubber",
    id: "B22",
    instrument: "Clarinet",
    subtype: "Bb",
    price: 216.36,
    image: b22,
    gtin14: "00879281004812",
  },

  {
    category: "Beechler Hard Rubber",
    id: "B28",
    instrument: "Saxophone",
    subtype: "Tenor",
    price: 232.87,
    image: b27,
    gtin14: "00879281001002",
  },

  {
    category: "Beechler Hard Rubber",
    id: "B29",
    instrument: "Saxophone",
    subtype: "Baritone",
    accessories: "Cap & Ligature",
    price: 275.03,
    image: b29,
    gtin14: "00879281001071",
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
    gtin14: "00879281002672",
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
    gtin14: "00879281002740",
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
    gtin14: "00879281002887",
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
    gtin14: "00879281004935",
  },
  {
    category: "Beechler Customized",
    id: "C26",
    instrument: "Saxophone",
    subtype: "Tenor",
    model: "110+ Model",
    price: 241.06,
    image: beechler110,
    gtin14: "00879281002993",
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
    gtin14: "00879281000067",
  },
  {
    category: "ARB Metal",
    id: "A82",
    instrument: "Saxophone",
    subtype: "Tenor",
    accessories: "Cap & Ligature",
    price: 499.94,
    image: arbTenor,
    gtin14: "00879281000135",
  },
  {
    category: "ARB Metal",
    id: "A83",
    instrument: "Saxophone",
    subtype: "Baritone",
    accessories: "Cap & Ligature",
    price: 502.31,
    image: arbBaritone,
    gtin14: "00879281000203",
  },
  {
    category: "ARB Metal",
    id: "C12",
    instrument: "Saxophone",
    subtype: "Alto",
    accessories: "Cap & Ligature",
    price: 554.09,
    image: arbCustomAlto,
    gtin14: "00879281002191",
  },
  {
    category: "ARB Metal",
    id: "C13",
    instrument: "Saxophone",
    subtype: "Tenor",
    accessories: "Cap & Ligature",
    price: 552.19,
    image: arbCustomTenor,
    gtin14: "00879281002269",
  },
  {
    category: "ARB Metal",
    id: "C14",
    instrument: "Saxophone",
    subtype: "Baritone",
    accessories: "Cap & Ligature",
    price: 533.19,
    image: arbCustomBaritone,
    gtin14: "00879281002337",
  },

  //GREAT NECK ORIGINALS

  {
    category: "ARB Great Neck Originals",
    id: "A29",
    instrument: "Clarinet",
    subtype: "Bb",
    price: 180.50,
    image: A29,
    gtin14: "00879281000654",
  },
  {
    category: "ARB Great Neck Originals",
    id: "A30",
    instrument: "Saxophone",
    subtype: "Alto",
    bore: "Large",
    price: 180.50,
    image: A30,
    gtin14: "00879281000722",
  },
  {
    category: "ARB Great Neck Originals",
    id: "C15",
    instrument: "Clarinet",
    subtype: "Bb",
    price: 223.25,
    image: C15,
    gtin14: "00879281004874",
  },
  {
    category: "ARB Great Neck Originals",
    id: "C16",
    instrument: "Saxophone",
    subtype: "Alto",
    price: 223.25,
    image: C16,
    gtin14: "00879281004843",
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
    gtin14: "00879281005123",
  },

  {
    category: "Accessories & Services",
    id: "T01Beechler",
    subtype: ["Metal"],
    finish: "Black Powder Coat",
    image: T01B,
    price: 27.91,
    gtin14: "00879281005130",
  },

  {
    category: "Accessories & Services",
    id: "T02ARB/Beechler",
    subtype: ["Composite"],
    finish: "Lacquered Brass",
    image: eboniteT02,
    price: 28.5,
    gtin14: "00879281002108",
  },
  //Pegs
  {
    category: "Accessories & Services",
    id: "P01",
    subtype: ["Flute"],
    finish: "Styrene/Rubber",
    image: P01,
    price: 11.88,
    gtin14: "00879281004485",
  },

  {
    category: "Accessories & Services",
    id: "P02",
    subtype: ["Clarinet"],
    finish: "Styrene/Rubber",
    image: P02,
    price: 11.88,
    gtin14: "00879281004508",
  },
  {
    category: "Accessories & Services",
    id: "P03",
    subtype: ["Soprano"],
    finish: "Styrene/Rubber",
    image: P03,
    price: 11.88,
    gtin14: "00879281004522",
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
    gtin14: "00879281004195",
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
    gtin14: "00879281004201",
  },
  {
    category: "Accessories & Services",
    id: "L01/P",
    subtype: ["Any Size"],
    finish: "Red & Silver Vein",
    ligatureType: "Prismatic Inverted",
    price: 63.53,
    image: ligPrismatic,
    gtin14: "00879281004225",
  },
  {
    category: "Accessories & Services",
    id: "L50/B",
    subtype: ["Any Size"],
    finish: "Special Black",
    ligatureType: "Metal/Bellite Inverted",
    price: 63.53,
    image: ligMetal,
    gtin14: "00879281004270",
  },
  {
    category: "Accessories & Services",
    id: "L50/C",
    subtype: ["Any Size"],
    finish: "White Bronze",
    ligatureType: "Metal/Bellite Inverted",
    price: 67.69,
    image: ligChrome,
    gtin14: "00879281004317",
  },
  {
    category: "Accessories & Services",
    id: "L50/G",
    subtype: ["Any Size"],
    finish: "Gold Plated",
    ligatureType: "Metal/Bellite Inverted",
    price: 73.63,
    image: ligGold,
    gtin14: "00879281006960",
  },
  {
    category: "Accessories & Services",
    id: "L52",
    subtype: ["One Size"],
    ligatureType: "Chrome",
    price: 4.75,
    image: L52,
    gtin14: "00879281004379",
  },
  {
    category: "Accessories & Services",
    id: "L53",
    subtype: ["One Size"],
    ligatureType: "Brass",
    price: 4.75,
    image: L53,
    gtin14: "00879281004386",
  },
  {
    category: "Accessories & Services",
    id: "BP",
    ligatureType: "Bite Plate Replacement",
    subtype: ["Service"],
    price: 35.0,
    image: tuffbite,
    gtin14: "00879281004001",
  },
  {
    category: "Accessories & Services",
    id: "CE",
    ligatureType: "Custom Engraving",
    subtype: ["Service"],
    price: 10.0,
    image: CE,
    gtin14: "00879281004018",
  },
  {
    category: "Accessories & Services",
    id: "LC",
    ligatureType: "Ligature Change",
    subtype: ["Service"],
    price: 6.0,
    image: LC,
    gtin14: "00879281004025",
  },
  {
    category: "Accessories & Services",
    id: "M03",
    ligatureType: "Tuffbite Mouthpiece Protector",
    subtype: ["Service"],
    price: 5.0,
    image: tuffbite,
    gtin14: "00879281004591",
  },
  {
    category: "Accessories & Services",
    id: "R",
    ligatureType: "Refacing or Repair",
    subtype: ["Service"],
    price: 50.0,
    image: RE,
    gtin14: "00879281004032",
  },
];
