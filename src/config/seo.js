// Configuration SEO centralisée selon les bonnes pratiques Google

export const seoConfig = {
  // Informations de base
  siteName: "Taxi Nice Côte d'Azur",
  siteUrl: "https://taxi-nice-06.com",
  defaultLanguage: "fr-FR",
  alternateLanguages: ["en-US"],

  // Informations de contact
  contact: {
    phone: "+33 6 51 68 36 87",
    email: "taxiniceca@gmail.com",
    address: {
      street: "Nice, Côte d'Azur",
      city: "Nice",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "06000",
      country: "FR",
    },
    coordinates: {
      latitude: "43.7102",
      longitude: "7.2620",
    },
  },

  // Mots-clés principaux
  keywords: {
    primary: [
      "taxi nice",
      "chauffeur privé nice",
      "transfert aéroport nice",
      "VSL nice",
      "taxi côte d'azur",
    ],
    secondary: [
      "réservation taxi",
      "mercedes glc nice",
      "van premium nice",
      "transport handicapé nice",
      "excursion côte d'azur",
      "taxi 24h nice",
      "chauffeur vtc nice",
      "transport nice monaco",
      "taxi cannes nice",
      "aéroport nice terminal 1 2",
      "transport médical nice",
      "taxi gare nice",
      "chauffeur privé 06",
      "transport groupe nice",
      "taxi premium nice",
    ],
    longTail: [
      "taxi aéroport nice côte d'azur",
      "chauffeur privé nice 24h 24",
      "VSL transport handicapé nice",
      "excursion côte d'azur chauffeur privé",
      "réservation taxi nice en ligne",
      "transfert nice monaco taxi",
      "taxi gare nice centre ville",
      "chauffeur vtc nice cannes",
    ],
  },

  // Pages principales
  pages: {
    home: {
      title:
        "Taxi Nice Côte d'Azur – Transferts & Réservations 24/7 | Chauffeur Privé Premium",
      description:
        "🚗 Chauffeur privé 24h/24 à Nice et Côte d'Azur. Transferts Aéroport Nice, VSL, Excursions. Mercedes GLC et Van Premium. Réservation en ligne instantanée. Service professionnel et fiable.",
      keywords: [
        "taxi nice",
        "chauffeur privé nice",
        "transfert aéroport nice",
        "VSL nice",
        "taxi côte d'azur",
      ],
      priority: 1.0,
      changefreq: "weekly",
    },
    reservation: {
      title: "Réservation de Taxi en Ligne | Taxi Nice Côte d'Azur",
      description:
        "Réservez votre taxi en ligne facilement et rapidement. Service 24h/24 à Nice et Côte d'Azur. Formulaire de réservation simple et sécurisé.",
      keywords: [
        "réservation taxi nice",
        "taxi en ligne",
        "réservation chauffeur privé",
        "booking taxi nice",
      ],
      priority: 0.9,
      changefreq: "weekly",
    },
    tarifs: {
      title: "Tarifs Taxi Nice | Prix Transparent et Compétitif",
      description:
        "Découvrez nos tarifs transparents pour tous nos services de taxi à Nice et Côte d'Azur. Transfert aéroport, VSL, excursions. Prix compétitifs et sans surprise.",
      keywords: [
        "tarifs taxi nice",
        "prix taxi côte d'azur",
        "tarif transfert aéroport nice",
        "prix VSL nice",
      ],
      priority: 0.8,
      changefreq: "monthly",
    },
    services: {
      transfertAeroport: {
        title:
          "Transfert Aéroport Nice | Service 24h/24 | Taxi Nice Côte d'Azur",
        description:
          "Service de transfert aéroport Nice Côte d'Azur 24h/24. Chauffeur professionnel, véhicules premium. Réservation en ligne ou par téléphone.",
        keywords: [
          "transfert aéroport nice",
          "taxi aéroport nice",
          "chauffeur aéroport nice",
          "transport aéroport côte d'azur",
        ],
        priority: 0.8,
        changefreq: "monthly",
      },
      vsl: {
        title: "VSL Nice | Transport Handicapé | Véhicule Sanitaire Léger",
        description:
          "Service VSL (Véhicule Sanitaire Léger) à Nice et Côte d'Azur. Transport médicalisé pour personnes à mobilité réduite. Chauffeurs formés et véhicules adaptés.",
        keywords: [
          "VSL nice",
          "transport handicapé nice",
          "véhicule sanitaire léger",
          "transport médical nice",
        ],
        priority: 0.8,
        changefreq: "monthly",
      },
      excursions: {
        title:
          "Excursions Côte d'Azur | Chauffeur Privé | Visites Touristiques",
        description:
          "Excursions et visites touristiques dans la Côte d'Azur avec chauffeur privé. Monaco, Cannes, Antibes, Saint-Tropez. Service personnalisé et confortable.",
        keywords: [
          "excursion côte d'azur",
          "visite monaco chauffeur",
          "excursion cannes nice",
          "tourisme côte d'azur",
        ],
        priority: 0.7,
        changefreq: "monthly",
      },
    },
    contact: {
      title: "Contact Taxi Nice | Nous Contacter | Taxi Nice Côte d'Azur",
      description:
        "Contactez-nous pour vos besoins de transport à Nice et Côte d'Azur. Téléphone, email, formulaire de contact. Service client disponible 24h/24.",
      keywords: [
        "contact taxi nice",
        "téléphone taxi nice",
        "email taxi côte d'azur",
        "service client taxi",
      ],
      priority: 0.6,
      changefreq: "monthly",
    },
  },

  // Configuration des réseaux sociaux et Google Business
  social: {
    googleBusiness: "https://maps.app.goo.gl/UzPCMHMeFYZaeZNH8",
    facebook: "https://www.facebook.com/taxi-nice-cote-dazur",
    instagram: "https://www.instagram.com/taxi_nice_cote_dazur",
    linkedin: "https://www.linkedin.com/company/taxi-nice-cote-dazur",
    twitter: "@TaxiNice06",
  },

  // Configuration des images
  images: {
    default: {
      url: "/bg-image.png",
      width: 1200,
      height: 630,
      alt: "Taxi Nice Côte d'Azur - Chauffeur privé 24/7 - Service premium de transport",
    },
    logo: {
      url: "/logo.png",
      width: 200,
      height: 100,
      alt: "Logo Taxi Nice Côte d'Azur",
    },
    services: {
      mercedes: {
        url: "/imageGLC.png",
        width: 400,
        height: 300,
        alt: "Mercedes GLC - Taxi Premium Nice - Véhicule haut de gamme",
      },
      van: {
        url: "/image-van.png",
        width: 400,
        height: 300,
        alt: "Van Premium - Transport de groupe Nice - Idéal pour familles",
      },
      reservation: {
        url: "/image-résa.jpeg",
        width: 800,
        height: 600,
        alt: "Réservation de taxi en ligne - Interface simple et intuitive",
      },
    },
  },

  // Configuration des données structurées
  structuredData: {
    business: {
      name: "Taxi Nice Côte d'Azur",
      alternateName: "Taxi Nice 06",
      description:
        "Chauffeur privé 24/7 à Nice et Côte d'Azur. Transferts Aéroport Nice, Hôtels, VSL, Excursions. Mercedes GLC et Van Premium. Service professionnel et fiable.",
      url: "https://taxi-nice-06.com",
      logo: "https://taxi-nice-06.com/logo.png",
      image: "https://taxi-nice-06.com/bg-image.png",
      openingHours: "Mo-Su 00:00-23:59",
      priceRange: "€€",
      paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
      currenciesAccepted: "EUR",
      aggregateRating: {
        ratingValue: "4.8",
        reviewCount: "127",
        bestRating: "5",
        worstRating: "1",
      },
    },
  },

  // Configuration du sitemap
  sitemap: {
    changefreq: {
      home: "weekly",
      reservation: "weekly",
      tarifs: "monthly",
      services: "monthly",
      contact: "monthly",
      legal: "yearly",
    },
    priority: {
      home: 1.0,
      reservation: 0.9,
      tarifs: 0.8,
      services: 0.8,
      contact: 0.6,
      legal: 0.3,
    },
  },

  // Configuration des robots
  robots: {
    userAgent: "*",
    allow: "/",
    disallow: ["/api/", "/_next/", "/admin/", "/private/"],
    sitemap: "https://taxi-nice-06.com/sitemap.xml",
    crawlDelay: 1,
  },
};

// Fonction utilitaire pour générer les métadonnées
export function generateMetadata(page, customData = {}) {
  const pageData = seoConfig.pages[page] || seoConfig.pages.home;
  const mergedData = { ...pageData, ...customData };

  return {
    title: mergedData.title,
    description: mergedData.description,
    keywords: mergedData.keywords,
    openGraph: {
      title: mergedData.title,
      description: mergedData.description,
      url: `${seoConfig.siteUrl}${page === "home" ? "" : `/${page}`}`,
      siteName: seoConfig.siteName,
      images: [
        {
          url: mergedData.image || seoConfig.images.default.url,
          width: seoConfig.images.default.width,
          height: seoConfig.images.default.height,
          alt: mergedData.imageAlt || seoConfig.images.default.alt,
        },
      ],
      locale: seoConfig.defaultLanguage,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: mergedData.title,
      description: mergedData.description,
      images: [mergedData.image || seoConfig.images.default.url],
      site: seoConfig.social.twitter,
      creator: seoConfig.social.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${seoConfig.siteUrl}${page === "home" ? "" : `/${page}`}`,
      languages: {
        "fr-FR": "/",
        "en-US": "/en",
      },
    },
  };
}

// Fonction pour générer les données structurées
export function generateStructuredData(type, data = {}) {
  const baseData =
    seoConfig.structuredData[type] || seoConfig.structuredData.business;
  return { ...baseData, ...data };
}
