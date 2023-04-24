import '../../../styles/ProductsPage.css';

import wdAlto from '../../../assets/img/products/white-diamond/white-diamond-alto.png';
import wdTenor from '../../../assets/img/products/white-diamond/white-diamond-tenor.png';
import wdBaritone from '../../../assets/img/products/white-diamond/white-diamond-baritone.png';
import wdClarinet from '../../../assets/img/products/white-diamond/white-diamond-clarinet.png';

import taAlto from '../../../assets/img/products/tonalex/tonalex-alto.png';
import taTenor from '../../../assets/img/products/tonalex/tonalex-tenor.png';
import taClarinet from '../../../assets/img/products/tonalex/tonalex-clarinet.png';



export const products = [

    //BEECHLER WHITE DIAMOND//
    {
      category: "Beechler White Diamond",
      id: "B07",
      instrument: "Bb Clarinet",
      bore: null,
      price: 199.38,
      tipOpening: Array.from({ length: 12 }, (_, i) => i + 1), // Clarinet: Tip Openings up to 12
      facing: ["Standard", "Medium", "Long"],
      image: wdClarinet,
    },
    {
      category: "Beechler White Diamond",
      id: "B10",
      instrument: "Saxophone",
      subtype: "Alto", 
      bore: "Small",
      price: 182.76,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4), // Saxophoneophone: Tip Openings from 4-10
      facing: ["Standard", "Medium", "Long"],
      image: wdAlto,
    },
    {
      category: "Beechler White Diamond",
      id: "B11",
      instrument: "Saxophone",
      subtype: "Alto",
      bore: "Medium",
      price: 182.76,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
      facing: ["Standard", "Medium", "Long"],
      image: wdAlto,
    },
    {
      category: "Beechler White Diamond",
      id: "B12",
      instrument: "Saxophone",
      subtype: "Alto",
      bore: "Large",
      price: 182.76,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
      facing: ["Standard", "Medium", "Long"],
      image: wdAlto,
    },
    {
      category: "Beechler White Diamond",
      id: "B14",
      instrument: "Saxophone",
      subtype: "Tenor",
      bore: "Medium",
      price: 182.76,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
      facing: ["Standard", "Medium", "Long"],
      image: wdTenor,
    },
    {
      category: "Beechler White Diamond",
      id: "B16",
      instrument: "Saxophone",
      subtype: "Baritone",
      bore: null,
      price: 231.56,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
      facing: ["Standard", "Medium", "Long"],
      extras: ["Cap", "Ligature"],
      image: wdBaritone,
    },

    //BEECHLER TONALEX//
    {
      category: "Beechler Tonalex",
      id: "B17",
      instrument: "Clarinet",
      subtype: "BB",
      bore: null,
      price: 210.54,
      tipOpening: Array.from({ length: 12 }, (_, i) => i + 1),
      facing: ["Standard", "Medium", "Long"],
      image: taClarinet,
    },
    {
      category: "Beechler Tonalex",
      id: "B18",
      instrument: "Saxophone",
      subtype: "Alto",
      bore: "Large",
      price: 189.17,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
      facing: ["Standard", "Medium", "Long"],
      image: taAlto,
    },
    {
      category: "Beechler Tonalex",
      id: "B20",
      instrument: "Saxophone",
      subtype: "Alto",
      bore: "Small",
      price: 189.17,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
      facing: ["Standard", "Medium", "Long"],
      image: taAlto,
    },
    {
      category: "Beechler Tonalex",
      id: "B21",
      instrument: "Saxophone",
      subtype: "Alto",
      bore: "Medium",
      price: 189.17,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
      facing: ["Standard", "Medium", "Long"],
      image: taAlto,
    },
    {
      category: "Beechler Tonalex",
      id: "B19",
      instrument: "Saxophone",
      subtype: "Tenor",
      bore: "Medium",
      price: 189.17,
      tipOpening: Array.from({ length: 7 }, (_, i) => i + 4),
      facing: ["Standard", "Medium", "Long"],
      image: taTenor,
    },









  ];
  