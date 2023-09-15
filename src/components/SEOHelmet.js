import React from 'react';
import { Helmet } from 'react-helmet-async';
import { preloadedProductSchemas, preloadedDealerSchema, preloadedHomeDealerSchema } from '../components/preloadSchemaData';

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
            {JSON.stringify(preloadedHomeDealerSchema)}
        </script>

    </Helmet>
  );
};

export default SEOHelmet;
