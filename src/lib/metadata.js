/**
 * Génère les métadonnées SEO pour les pages de services
 * Compatible avec les Client Components
 */

export function generateServiceMetadata(serviceKey, locale = "fr") {
  const baseUrl = "https://taxi-nice-06.com";

  // Métadonnées par service (statiques pour le SEO)
  const serviceMetadata = {
    "taxi-aeroport-nice": {
      fr: {
        title:
          "Taxi Aéroport Nice | Suivi Vol & Accueil Nominatif | Taxi Nice-06",
        description:
          "Service de taxi fiable vers l'aéroport de Nice et toutes destinations. Accueil avec panneau nominatif, suivi de vol en temps réel et ponctualité garantie.",
        keywords: [
          "transfert aéroport nice",
          "aéroport taxi nice",
          "accueil aéroport nice",
          "transport aéroport côte d'azur",
          "suivi vol nice",
          "panneau nominatif nice",
          "taxi nice terminal 1 2",
          "chauffeur privé aéroport nice",
        ],
      },
      en: {
        title:
          "Nice Airport Transfers | Flight Tracking & Personal Welcome | Taxi Nice-06",
        description:
          "Reliable service to Nice airport and all destinations. Personal welcome with name sign, real-time flight tracking and guaranteed punctuality.",
        keywords: [
          "nice airport transfer",
          "airport taxi nice",
          "airport welcome nice",
          "côte d'azur airport transport",
          "flight tracking nice",
          "name sign nice airport",
          "nice terminal 1 2 taxi",
          "private driver airport nice",
        ],
      },
    },
    "arrivees-destinations": {
      fr: {
        title:
          "Arrivées & Destinations Nice | Transport Premium | Taxi Nice-06",
        description:
          "Service d'accueil et transport vers toutes destinations depuis Nice. Chauffeur professionnel et véhicules premium pour vos déplacements.",
        keywords: [
          "arrivée nice",
          "destination nice",
          "transport arrivée nice",
          "accueil gare nice",
          "chauffeur arrivée nice",
        ],
      },
      en: {
        title:
          "Arrivals & Destinations Nice | Premium Transport | Taxi Nice-06",
        description:
          "Welcome and transport service to all destinations from Nice. Professional driver and premium vehicles for your trips.",
        keywords: [
          "nice arrival",
          "nice destination",
          "nice arrival transport",
          "nice station welcome",
          "nice arrival driver",
        ],
      },
    },
    "van-premium": {
      fr: {
        title:
          "Van Premium Nice | Transport Groupe jusqu'à 8 Passagers | Taxi Nice-06",
        description:
          "Van Premium Mercedes pour groupes jusqu'à 8 personnes. Confort et espace pour vos déplacements familiaux ou professionnels à Nice.",
        keywords: [
          "van premium nice",
          "transport groupe nice",
          "van 8 personnes nice",
          "mercedes van nice",
          "transport famille nice",
        ],
      },
      en: {
        title:
          "Premium Van Nice | Group Transport up to 8 Passengers | Taxi Nice-06",
        description:
          "Mercedes Premium Van for groups up to 8 people. Comfort and space for your family or business trips in Nice.",
        keywords: [
          "premium van nice",
          "group transport nice",
          "8 passenger van nice",
          "mercedes van nice",
          "family transport nice",
        ],
      },
    },
  };

  const metadata = serviceMetadata[serviceKey]?.[locale] ||
    serviceMetadata[serviceKey]?.fr || {
      title: "Service Taxi Nice | Transport Premium | Taxi Nice-06",
      description: "Service de transport premium à Nice et sur la Côte d'Azur.",
      keywords: ["taxi nice", "transport nice", "chauffeur privé nice"],
    };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/services/${serviceKey}`,
      siteName: "Taxi Nice-06",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: [
        {
          url: `/services/${serviceKey}-og.jpg`,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [`/services/${serviceKey}-og.jpg`],
    },
    alternates: {
      canonical: `https://taxi-nice-06.com/services/${serviceKey}`,
      languages: {
        "fr-FR": `https://taxi-nice-06.com/services/${serviceKey}`,
      },
    },
  };
}

/**
 * Génère les données structurées Schema.org pour les services
 */
export function generateServiceStructuredData(serviceKey, locale = "fr") {
  const baseUrl = "https://taxi-nice-06.com";

  const serviceData = {
    "taxi-aeroport-nice": {
      fr: {
        name: "Taxi Aéroport Nice",
        description:
          "Service de taxi aéroport professionnel avec accueil nominatif et suivi de vol",
        serviceType: "Transport aéroport",
      },
      en: {
        name: "Nice Airport Transfers",
        description:
          "Professional airport transfer service with personal welcome and flight tracking",
        serviceType: "Airport transport",
      },
    },
  };

  const data = serviceData[serviceKey]?.[locale] ||
    serviceData[serviceKey]?.fr || {
      name: "Service Taxi Nice",
      description: "Service de transport premium",
      serviceType: "Transport",
    };

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Taxi Nice-06",
      url: baseUrl,
      telephone: "+33-4-93-XX-XX-XX",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nice",
        addressRegion: "Alpes-Maritimes",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.7102,
        longitude: 7.2620,
      },
      openingHours: "Mo-Su 00:00-23:59",
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 43.7102,
          longitude: 7.2620,
        },
        geoRadius: 50000,
      },
    },
    serviceType: data.serviceType,
    areaServed: {
      "@type": "City",
      name: "Nice",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${baseUrl}/services/${serviceKey}`,
      serviceSmsNumber: "+33-4-93-XX-XX-XX",
    },
  };
}
