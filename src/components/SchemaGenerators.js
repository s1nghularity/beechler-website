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

  export const generateProductJSONLD = (productArray, productInfo) => {
    return {
      "@context": "https://schema.org/",
      "@type": "ItemList",
      itemListElement: productArray.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          "name": `${product.category} - ${product.id}`,
          "description": productInfo[product.category].description,
          "sku": product.id,
          "gtin14": product.gtin14,
          "brand": generateBrandSchema("Beechler"),
          "offers": generateOfferSchema({ price: product.price, priceCurrency: "USD" }),
          "image": generateImageSchema(product.image),
        }
      }))
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
