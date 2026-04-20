/**
 * Génère les métadonnées SEO optimisées 100% compatible Next.js
 */
export async function generateSEOMetadata() {
  const baseUrl = "https://taxi-nice-06.com";
  const siteName = "Taxi Nice 06";
  const titleBase =
    "Taxi Nice – Aéroport, gare, CPAM & VSL 24h/24 | Taxi Nice 06";
  const description =
    "Taxi à Nice : transferts aéroport & gare, conventionné CPAM et VSL. Mercedes GLC & van premium, 24h/24 sur la Côte d'Azur. Réservez en ligne ou au 06 51 68 36 87.";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: titleBase,
      template: `%s | ${siteName}`,
    },
    description,

    alternates: {
      canonical: `${baseUrl}/`,
      languages: {
        "x-default": `${baseUrl}/`,
        "fr-FR": `${baseUrl}/`,
      },
    },

    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: "/",
      siteName,
      title: titleBase,
      description,
      images: [
        {
          url: new URL("/bg-image.png", baseUrl).toString(),
          width: 1200,
          height: 630,
          alt: `${siteName} – Taxi & Transferts Aéroport`,
          type: "image/png",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@TaxiNice06",
      creator: "@TaxiNice06",
      title: titleBase,
      description,
      images: [new URL("/bg-image.png", baseUrl).toString()],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        maxImagePreview: "large",
        maxVideoPreview: -1,
        maxSnippet: -1,
      },
    },

    icons: {
      icon: [
        { url: "/logo1.png", sizes: "512x512", type: "image/png" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: [{ url: "/logo1.png", sizes: "180x180", type: "image/png" }],
      shortcut: [{ url: "/logo1.png", type: "image/png" }],
    },
  };
}
