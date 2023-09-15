const generateOfferSchema = ({ price, priceCurrency }) => ({
    "@type": "Offer",
    "priceCurrency": priceCurrency,
    "price": price,
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
  });
  
  export const generateProductJSONLD = (products, productInfo) => {
    return {
      "@context": "https://schema.org/",
      "@type": "ItemList",
      "itemListElement": products.map((product, index) => {
        const { category, id, gtin14, price, image } = product;
        const description = productInfo[category].description;
  
        return {
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": `${category} - ${id}`,
            description,
            "sku": id,
            "gtin14": gtin14,
            "brand": {
              "@type": "Brand",
              "name": "Beechler",
            },
            "offers": generateOfferSchema({ price, priceCurrency: "USD" }),
            "image": {
              "@type": "ImageObject",
              "contentUrl": image,
            },
          },
        };
      }),
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
