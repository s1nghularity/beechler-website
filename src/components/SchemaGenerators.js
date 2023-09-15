const generateBrandSchema = (name) => ({
    "@type": "Brand",
    "name": name,
  });
  
  const generateOfferSchema = ({ price, priceCurrency }) => ({
    "@type": "Offer",
    "priceCurrency": priceCurrency,
    "price": price,
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
  });
  
  const generateImageSchema = (contentUrl) => ({
    "@type": "ImageObject",
    "contentUrl": contentUrl,
  });

export const generateProductJSONLD = ({ category, id, gtin14, price, image }, productInfo) => {
    const description = productInfo[category].description;
  
    return {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": `${category} - ${id}`,
      description,
      "sku": id,
      "gtin14": gtin14,
      "brand": generateBrandSchema("Beechler"),
      "offers": generateOfferSchema({ price, priceCurrency: "USD" }),
      "image": generateImageSchema(image),
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
