import { loadTranslations } from "./translations.js";

/**
 * Génère les métadonnées SEO optimisées avec les traductions et support multilingue
 */
export async function generateSEOMetadata(locale = "fr") {
  const translations = await loadTranslations(locale);

  const baseUrl = "https://taxi-nice-06.com";
  const siteName =
    translations.navbar?.brand + " " + translations.navbar?.brandSuffix ||
    "Taxi Nice-06";

  return {
    title: {
      default: `${translations.hero?.title || "TAXI NICE CÔTE D'AZUR"} – ${
        translations.hero?.subtitle || "TRANSFERTS & RÉSERVATIONS"
      } 24/7 | Chauffeur Privé Premium`,
      template: `%s | ${siteName}`,
    },
    description: `${
      translations.hero?.description ||
      "Service de taxi officiel à Nice et sur toute la côte d'azur"
    }. ${
      translations.services?.subtitle ||
      "Une gamme complète de services de transport adaptés à tous vos besoins"
    }. Mercedes GLC et Van Premium. Réservation en ligne instantanée.`,
    keywords: [
      // Mots-clés français
      "taxi nice",
      "chauffeur privé nice",
      "transfert aéroport nice",
      "VSL nice",
      "taxi côte d'azur",
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
      // Mots-clés spécifiques du contenu traduit
      ...(translations.seoContent?.title
        ? [translations.seoContent.title.toLowerCase()]
        : []),
      ...(translations.about?.brandHighlight
        ? [translations.about.brandHighlight.toLowerCase()]
        : []),
    ],
    authors: [{ name: siteName, url: baseUrl }],
    creator: siteName,
    publisher: siteName,
    applicationName: siteName,
    category: "Transport",
    classification: "Service de transport",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: "/",
      languages: {
        "fr-FR": "/?lang=fr",
        "en-US": "/?lang=en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: baseUrl,
      title: `${translations.hero?.title || "TAXI NICE CÔTE D'AZUR"} – ${
        translations.hero?.subtitle || "TRANSFERTS & RÉSERVATIONS"
      } 24/7`,
      description: `${
        translations.hero?.description || "Service taxi premium Nice 24h/24"
      } à Nice et Côte d'Azur. ${
        translations.services?.subtitle || "Services premium"
      }. Mercedes GLC et Van Premium.`,
      siteName: siteName,
      images: [
        {
          url: "/bg-image.png",
          width: 1200,
          height: 630,
          alt: `${siteName} - ${
            translations.hero?.title || "Chauffeur privé"
          } 24/7 - Service premium de transport`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@TaxiNice06",
      creator: "@TaxiNice06",
      title: `${translations.hero?.title || "TAXI NICE CÔTE D'AZUR"} – ${
        translations.hero?.subtitle || "TRANSFERTS & RÉSERVATIONS"
      } 24/7`,
      description: `${
        translations.hero?.description ||
        "Votre chauffeur privé disponible 24/7"
      } à Nice et Côte d'Azur. ${
        translations.services?.subtitle || "Services premium"
      }.`,
      images: ["/bg-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "VOTRE_CODE_DE_VERIFICATION_GOOGLE_ICI",
      yandex: "VOTRE_CODE_YANDEX_ICI",
      yahoo: "VOTRE_CODE_YAHOO_ICI",
    },
    other: {
      "geo.region": "FR-06",
      "geo.placename": "Nice",
      "geo.position": "43.7102;7.2620",
      ICBM: "43.7102, 7.2620",
      "DC.title": translations.seoContent?.title || siteName,
      "DC.description":
        translations.seoContent?.intro ||
        `${translations.hero?.description || "Service premium de transport"}`,
      "DC.subject": "Transport, Taxi, Nice, Côte d'Azur",
      "DC.language": locale,
      "DC.coverage": "Nice, Côte d'Azur, France",
      "DC.type": "Service",
      "DC.format": "text/html",
      "DC.identifier": baseUrl,
      "DC.creator": siteName,
      "DC.publisher": siteName,
      "DC.rights": `© ${new Date().getFullYear()} ${siteName}`,
      "DC.date.created": "2025-01-01",
      "DC.date.modified": new Date().toISOString().split("T")[0],
    },
  };
}
