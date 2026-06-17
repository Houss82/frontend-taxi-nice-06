export default function StructuredData() {
  const structuredData = [
    // Données structurées principales de l'entreprise
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://taxi-nice-06.com/#organization",
      name: "Taxi Nice Côte d'Azur",
      alternateName: "Taxi Nice 06",
      description:
        "Chauffeur privé 24/7 à Nice et Côte d'Azur. Transferts Aéroport Nice, Hôtels, VSL, Excursions. Mercedes GLC et Van Premium. Service professionnel et fiable.",
      url: "https://taxi-nice-06.com",
      telephone: "+33 6 51 68 36 87",
      email: "taxiniceca@gmail.com",
      logo: "https://taxi-nice-06.com/logo.png",
      image: "https://taxi-nice-06.com/bg-image.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "10 rue Blacas",
        addressLocality: "Nice",
        addressRegion: "Provence-Alpes-Côte d'Azur",
        postalCode: "06000",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.70082,
        longitude: 7.27022,
      },
      openingHours: "Mo-Su 00:00-23:59",
      priceRange: "€€",
      paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
      currenciesAccepted: "EUR",
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 43.70082,
          longitude: 7.27022,
        },
        geoRadius: 50000,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Nice",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Alpes-Maritimes",
          },
        },
        {
          "@type": "City",
          name: "Cannes",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Alpes-Maritimes",
          },
        },
        {
          "@type": "City",
          name: "Monaco",
          containedInPlace: {
            "@type": "Country",
            name: "Monaco",
          },
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de Transport",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Transfert Aéroport Nice",
              description:
                "Transfert depuis et vers l'aéroport de Nice Côte d'Azur",
              provider: {
                "@type": "LocalBusiness",
                name: "Taxi Nice Côte d'Azur",
              },
            },
            price: "À partir de 25€",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VSL (Véhicule Sanitaire Léger)",
              description:
                "Transport médicalisé pour personnes à mobilité réduite",
              provider: {
                "@type": "LocalBusiness",
                name: "Taxi Nice Côte d'Azur",
              },
            },
            price: "Sur devis",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Excursions Côte d'Azur",
              description: "Visites touristiques et excursions dans la région",
              provider: {
                "@type": "LocalBusiness",
                name: "Taxi Nice Côte d'Azur",
              },
            },
            price: "À partir de 50€/heure",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
        ],
      },
      sameAs: [
        "https://maps.app.goo.gl/UzPCMHMeFYZaeZNH8",
        "https://www.facebook.com/taxi-nice-cote-dazur",
        "https://www.instagram.com/taxi_nice_cote_dazur",
        "https://www.linkedin.com/company/taxi-nice-cote-dazur",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 5,
        reviewCount: 21,
        bestRating: 5,
        worstRating: 1,
      },
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Marie L.",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: 5,
            bestRating: 5,
          },
          reviewBody:
            "Service excellent, chauffeur très professionnel et ponctuel. Je recommande vivement !",
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Jean-Pierre M.",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: 5,
            bestRating: 5,
          },
          reviewBody:
            "Très bon service pour les transferts aéroport. Véhicules impeccables.",
        },
      ],
    },
    // Données structurées pour le site web
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://taxi-nice-06.com/#website",
      url: "https://taxi-nice-06.com",
      name: "Taxi Nice Côte d'Azur",
      description:
        "Site officiel du service de taxi premium à Nice et Côte d'Azur",
      publisher: {
        "@id": "https://taxi-nice-06.com/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://taxi-nice-06.com/reservation?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
      inLanguage: "fr-FR",
    },
    // Note: Les schémas FAQPage sont définis individuellement sur chaque page pour éviter les doublons
    // Breadcrumb pour la navigation
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://taxi-nice-06.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://taxi-nice-06.com/services",
        },
      ],
    },
    // Données structurées TaxiService pour le référencement local
    {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "@id": "https://taxi-nice-06.com/#taxiservice",
      name: "Taxi Nice Côte d'Azur",
      description: "Service de taxi premium 24/7 à Nice et sur la Côte d'Azur",
      provider: {
        "@id": "https://taxi-nice-06.com/#organization",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Nice",
        },
        {
          "@type": "City",
          name: "Cannes",
        },
        {
          "@type": "City",
          name: "Monaco",
        },
        {
          "@type": "City",
          name: "Antibes",
        },
      ],
      availableChannel: [
        {
          "@type": "ServiceChannel",
          serviceUrl: "https://taxi-nice-06.com/reservation",
          serviceType: "OnlineReservation",
        },
        {
          "@type": "ServiceChannel",
          telephone: "+33 6 51 68 36 87",
          serviceType: "Phone",
        },
      ],
    },
  ];

  return (
    <>
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
