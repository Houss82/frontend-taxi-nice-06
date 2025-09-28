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
      paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
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
        "https://www.facebook.com/taxi-nice-cote-dazur",
        "https://www.instagram.com/taxi_nice_cote_dazur",
        "https://www.linkedin.com/company/taxi-nice-cote-dazur",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "127",
        bestRating: "5",
        worstRating: "1",
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
            ratingValue: "5",
            bestRating: "5",
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
            ratingValue: "5",
            bestRating: "5",
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
    // Données structurées pour les FAQ
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quels sont vos horaires d'ouverture ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nous sommes disponibles 24h/24 et 7j/7 pour tous vos besoins de transport.",
          },
        },
        {
          "@type": "Question",
          name: "Proposez-vous des véhicules adaptés aux personnes à mobilité réduite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous disposons de VSL (Véhicules Sanitaires Légers) adaptés au transport de personnes à mobilité réduite.",
          },
        },
        {
          "@type": "Question",
          name: "Comment réserver un taxi ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vous pouvez réserver directement en ligne via notre formulaire de réservation, par téléphone au +33 6 51 68 36 87, ou par email à taxiniceca@gmail.com",
          },
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
