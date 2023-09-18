
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


export const generateHomeCategoriesJSONLD = (categories) => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Beechler Mouthpieces Categories",
      description: "List of mouthpiece categories offered by Beechler.",
      numberOfItems: categories.length,
      itemListElement: categories.map((category, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "ProductGroup",  // Changed from "Product" to "ProductGroup"
          name: category.name,
          image: category.image,
          additionalType: category.type,
          description: `Explore ${category.name} mouthpieces by Beechler.`,
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
  
export const generateContactPageJSONLD = () => {
    return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Us",
        description: "Contact form for inquiries about Beechler Mouthpieces.",
        url: "https://beecher.com/#contact",
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: "+1-800-555-5555",
            availableLanguage: "en",
            areaServed: "Global",
            contactOption: [
                {
                    "@type": "ContactPointOption",
                    name: "TollFree",
                    value: "Toll-free customer support is available.",
                },
                {
                    "@type": "ContactPointOption",
                    name: "HearingImpairedSupported",
                    value: "We offer support for the hearing impaired.",
                },
            ],
        },
    };
};



export const generateTestimonialsJSONLD = (testimonials) => {
        return {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Customer Testimonials",
            description: "Testimonials from Beechler customers.",
            numberOfItems: testimonials.length,
            itemListElement: testimonials.map((testimonial, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                    "@type": "Review",
                    reviewBody: testimonial.reviewBody,
                    author: {
                        "@type": "Person",
                        name: testimonial.author.replace(/^- /, ""), 
                    },
                    itemReviewed: {
                        "@type": "Product",
                        name: testimonial.itemReviewed,
                        image: "src/assets/img/home/beechler-logo-b.webp",
                        offers: {
                            "@type": "Offer",
                            price: 150,
                            priceCurrency: "USD",
                        },
                    },
                    reviewRating: {
                        "@type": "Rating",
                        ratingValue: 5,
                        bestRating: 5,
                    },
                },
            })),
        };
    };
  


export const generateArtistsJSONLD = (artists) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Beechler Artists",
    description: "List of musicians and the Beechler mouthpieces they use.",
    numberOfItems: artists.length,
    itemListElement: artists.map((artist, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: artist.name,
        instrument: artist.mouthpieces.map((mouthpiece) => ({
          "@type": "Product",
          name: mouthpiece,
          image: "src/assets/img/home/beechler-logo-b.webp",
          offers: {
            "@type": "Offer",
            price: "300",
            priceCurrency: "USD",
          },
        })),
      },
    })),
  };
};

export const generateFAQsJSONLD = (faqsData) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq, index) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
