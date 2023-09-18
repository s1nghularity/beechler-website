import React from "react";
import { Helmet } from "react-helmet-async";
import {
  preloadedProductSchemas,
  preloadedDealerSchema,
  preloadedHomeCategoriesSchema,
  preloadedHomeDealerSchema,
  preloadedContactPageSchema,
    preloadedTestimonialsSchema,
    preloadedArtistsSchema,
    preloadedFAQsSchema
} from "../components/preloadSchemaData";

const SEOHelmet = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(preloadedProductSchemas)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(preloadedDealerSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(preloadedHomeCategoriesSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(preloadedHomeDealerSchema)}
      </script>

        <script type="application/ld+json">
        {JSON.stringify(preloadedContactPageSchema)}
        </script>

        <script type="application/ld+json">
        {JSON.stringify(preloadedTestimonialsSchema)}
        </script>
        
        <script type="application/ld+json">
        {JSON.stringify(preloadedArtistsSchema)}
        </script>

        <script type="application/ld+json">
        {JSON.stringify(preloadedFAQsSchema)}
        </script>

    </Helmet>
  );
};

export default SEOHelmet;
