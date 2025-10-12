export default function sitemap() {
  const baseUrl = "https://taxi-nice-06.com";
  const currentDate = new Date();

  return [
    // Page d'accueil
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Page de réservation
    {
      url: `${baseUrl}/reservation`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Page des tarifs
    {
      url: `${baseUrl}/tarifs`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Tarifs Mercedes GLC
    {
      url: `${baseUrl}/tarifs?vehicle=glc`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Tarifs Van Premium
    {
      url: `${baseUrl}/tarifs?vehicle=van`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Pages de services (à créer)
    {
      url: `${baseUrl}/services/transfert-aeroport`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/vsl`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/excursions`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Page de contact
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Page blog
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Page partenaires
    {
      url: `${baseUrl}/partenaires`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Page à propos
    {
      url: `${baseUrl}/a-propos`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Pages légales
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cgv`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
