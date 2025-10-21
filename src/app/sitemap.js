export default function sitemap() {
  const baseUrl = "https://taxi-nice-06.com";
  const currentDate = new Date();

  // Pages principales
  const staticPages = [
    "",
    "/reservation",
    "/tarifs",
    "/tarifs?vehicle=glc",
    "/tarifs?vehicle=van",
    "/services",
    // Toutes les pages de services
    "/services/transferts-aeroport",
    "/services/arrivees-destinations",
    "/services/van-premium",
    "/services/flotte-recente",
    "/services/excursions-decouvertes",
    "/services/evenements-mariages",
    "/services/transferts-evenements",
    "/services/vsl",
    "/services/excursions",
    "/contact",
    "/blog",
    "/partenaires",
    "/a-propos",
    "/mentions-legales",
    "/politique-confidentialite",
    "/cgv",
    // Articles de blog
    "/blog/guide-transfert-aeroport-nice",
    "/blog/choisir-chauffeur-prive-nice",
    "/blog/excursions-cote-azur",
    "/blog/choosing-private-driver-nice",
    "/blog/french-riviera-tours",
    "/blog/nice-airport-transfer-guide",
  ];

  // Générer les URLs pour chaque langue
  const urls = [];

  staticPages.forEach((page) => {
    // Version française (par défaut) - URL principale
    urls.push({
      url: `${baseUrl}${page}`,
      lastModified: currentDate,
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1.0 : 0.8,
      alternates: {
        languages: {
          "fr-FR": `${baseUrl}${page}`,
          "en-US": `${baseUrl}${page}?lang=en`,
        },
      },
    });

    // Version anglaise (avec paramètre) - URL alternative
    urls.push({
      url: `${baseUrl}${page}?lang=en`,
      lastModified: currentDate,
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 0.9 : 0.7, // Priorité légèrement inférieure
      alternates: {
        languages: {
          "fr-FR": `${baseUrl}${page}`,
          "en-US": `${baseUrl}${page}?lang=en`,
        },
      },
    });
  });

  return urls;
}
/*salut les amis*/
