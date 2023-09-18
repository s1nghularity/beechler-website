// preloadSchemaData.js
import { locationData } from "../components/pages/dealers/DealerData";
import { productInfo } from "../components/pages/products/DataDynamicInfo";
import { products } from "../components/pages/products/ProductsData";
import { homeDealerCountryData } from "../components/pages/home/HomeDealerMap";
import { categories } from "../components/pages/home/HomeCategories"; 
import { testimonials } from "../components/pages/home/HomeTestimonials";
import {ArtistData} from "../components/pages/artists/ArtistData";
import { faqsData } from "./pages/faq/FAQs";

import { generateProductJSONLD, generateDealerJSONLD, generateHomeCategoriesJSONLD, 
    generateHomeDealerJSONLD, generateContactPageJSONLD, generateTestimonialsJSONLD,
generateArtistsJSONLD, generateFAQsJSONLD } from "../components/SchemaGenerators";

export const preloadedProductSchemas = products.map(product => generateProductJSONLD(product, productInfo));
export const preloadedDealerSchema = generateDealerJSONLD(locationData);
export const preloadedHomeCategoriesSchema = generateHomeCategoriesJSONLD(categories);
export const preloadedHomeDealerSchema = generateHomeDealerJSONLD(homeDealerCountryData);
export const preloadedContactPageSchema = generateContactPageJSONLD();
export const preloadedTestimonialsSchema = generateTestimonialsJSONLD(testimonials);
export const preloadedArtistsSchema = generateArtistsJSONLD(ArtistData);
export const preloadedFAQsSchema = generateFAQsJSONLD(faqsData);