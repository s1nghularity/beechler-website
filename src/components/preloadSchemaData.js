// preloadSchemaData.js
import { locationData } from "../components/pages/dealers/DealerData";
import { productInfo } from "../components/pages/products/DataDynamicInfo";
import { products } from "../components/pages/products/ProductsData";
import { homeDealerCountryData } from "../components/pages/home/HomeDealerMap";
import { categories } from "../components/pages/home/HomeCategories"; 
import { generateProductJSONLD, generateDealerJSONLD, generateHomeCategoriesJSONLD, generateHomeDealerJSONLD, generateContactPageJSONLD } from "../components/SchemaGenerators";

export const preloadedProductSchemas = products.map(product => generateProductJSONLD(product, productInfo));
export const preloadedDealerSchema = generateDealerJSONLD(locationData);
export const preloadedHomeCategoriesSchema = generateHomeCategoriesJSONLD(categories);
export const preloadedHomeDealerSchema = generateHomeDealerJSONLD(homeDealerCountryData);
export const preloadedContactPageSchema = generateContactPageJSONLD();