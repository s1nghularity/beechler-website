import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const canonicalUrl = `https://www.beechler.com${location.pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
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
