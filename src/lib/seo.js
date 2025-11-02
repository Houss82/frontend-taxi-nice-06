/**
 * Génère les métadonnées SEO optimisées 100% compatible Next.js
 */
export async function generateSEOMetadata(locale = "fr") {
  const baseUrl = "https://taxi-nice-06.com";
  const siteName = "Taxi Nice Côte d'Azur";

  const titleBase =
    locale === "fr"
      ? "Taxi Nice Côte d'Azur – Transferts Aéroport 24/7"
      : "Nice Taxi – Airport Transfers 24/7";

  const description =
    locale === "fr"
      ? "Taxi à Nice et transferts aéroport 24/7. Service officiel sur la Côte d'Azur : aéroport, VSL, excursions. Mercedes GLC & Van premium. Réservation en ligne."
      : "Taxi in Nice and 24/7 airport transfers. Official service on the French Riviera: airport, medical, tours. Mercedes GLC & premium vans. Online booking.";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: titleBase,
      template: `%s | ${siteName}`,
    },
    description,

    alternates: {
      canonical: "/",
      languages: {
        "x-default": "/",
        "fr-FR": "/",
        "en-US": "/en",
      },
    },

    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
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
        { url: "/favicon.ico" },
        { url: "/logo1.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/logo1.png", sizes: "180x180", type: "image/png" }],
      shortcut: [{ url: "/logo1.png" }],
    },
  };
}
