// preloadSchemaData.js
import { locationData } from "../components/pages/dealers/DealerData";
import { productInfo } from "../components/pages/products/DataDynamicInfo";
import { products } from "../components/pages/products/ProductsData";
import { data } from "../components/pages/home/HomeDealerMap";
import { generateProductJSONLD, generateDealerJSONLD } from "../components/SchemaGenerators";

export const preloadedProductSchemas = products.map(product => generateProductJSONLD(product, productInfo));
export const preloadedDealerSchema = generateDealerJSONLD(locationData);
export const preloadedHomeDealerSchema = generateDealerJSONLD(data);