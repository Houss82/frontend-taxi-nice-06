export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Taxi Nice Côte d'Azur",
    description:
      "Chauffeur privé 24/7 à Nice et Côte d'Azur. Transferts Aéroport Nice, Hôtels, VSL, Excursions. Mercedes GLC et Van Premium.",
    url: "https://taxi-nice-cote-dazur.vercel.app",
    telephone: "+33-6-XX-XX-XX-XX", // Remplacez par votre vrai numéro
    email: "contact@taxi-nice-cote-dazur.com", // Remplacez par votre vrai email
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nice, Côte d'Azur",
      addressLocality: "Nice",
      addressRegion: "Provence-Alpes-Côte d'Azur",
      postalCode: "06000",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "43.7102",
      longitude: "7.2620",
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "€€",
    paymentAccepted: "Cash, Credit Card",
    currenciesAccepted: "EUR",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "43.7102",
        longitude: "7.2620",
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de Transport",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Transfert Aéroport Nice",
            description: "Transfert depuis et vers l'aéroport de Nice",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "VSL (Véhicule Sanitaire Léger)",
            description:
              "Transport médicalisé pour personnes à mobilité réduite",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Excursions Côte d'Azur",
            description: "Visites touristiques et excursions dans la région",
          },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/taxi-nice-cote-dazur",
      "https://www.instagram.com/taxi_nice_cote_dazur",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
