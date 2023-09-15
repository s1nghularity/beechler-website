
const generateOfferSchema = ({ price, priceCurrency }) => ({
  "@type": "Offer",
  priceCurrency: priceCurrency,
  price: price,
  availability: "https://schema.org/InStock",
  itemCondition: "https://schema.org/NewCondition",
});

export const generateProductJSONLD = (
  { category, id, gtin14, price, image },
  productInfo
) => {
  const description = productInfo[category].description;

  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: `${category} - ${id}`,
    description,
    sku: id,
    gtin14: gtin14,
    brand: {
      "@type": "Brand",
      name: "Beechler",
    },
    offers: generateOfferSchema({ price, priceCurrency: "USD" }),
    image: {
      "@type": "ImageObject",
      contentUrl: image,
    },
  };
};

export const generateDealerJSONLD = (locations) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: locations.map((location, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Store",
        name: location.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: location.address,
          addressLocality: location.city,
          addressRegion: location.state,
          postalCode: location.zip,
          addressCountry: location.country,
        },
        telephone: location.phone,
        url: location.website,
        geo: {
          "@type": "GeoCoordinates",
          latitude: location.latitude,
          longitude: location.longitude,
        },
      },
    })),
  };
};

export const generateHomeDealerJSONLD = (homeDealerCountryData) => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Beechler Dealers Global Presence",
      description: "Interactive map data layer for Beechler dealers worldwide.",
      numberOfItems: 3,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Thing",
            name: "Countries",
            description: "Dealers are present in 28 countries.",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Thing",
            name: "U.S. States",
            description: "Dealers are present in 26 U.S. states.",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Thing",
            name: "Total Dealers",
            description: "147 Beechler/Arb dealers worldwide.",
          },
        },
      ],
      additionalProperty: homeDealerCountryData.map((data, index) => ({
        "@type": "PropertyValue",
        "propertyID": `country-${index + 1}`,
        "name": data.name,
        "value": `${data.value} dealer${data.value > 1 ? 's' : ''} in ${data.name}`
      }))
    };
  };
  
  
