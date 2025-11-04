// Configuration des métadonnées globales pour résoudre les problèmes de pages en double
export const metadata = {
  metadataBase: new URL("https://taxi-nice-06.com"),
  title: {
    default: "Taxi Nice Côte d'Azur - Chauffeur Privé Premium 24/7",
    template: "%s | Taxi Nice Côte d'Azur",
  },
  description:
    "Service de taxi premium à Nice et Côte d'Azur. Transferts Aéroport Nice, VSL, Excursions. Mercedes GLC et Van Premium. Réservation 24/7.",
  keywords: [
    "taxi nice",
    "chauffeur privé nice",
    "vtc nice",
    "transfert aéroport nice",
    "taxi côte d'azur",
    "transport premium nice",
    "vsl nice",
    "excursions nice",
    "mercedes glc nice",
    "van premium nice",
  ],
  authors: [{ name: "Taxi Nice Côte d'Azur" }],
  creator: "Taxi Nice Côte d'Azur",
  publisher: "Taxi Nice Côte d'Azur",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://taxi-nice-06.com",
    siteName: "Taxi Nice Côte d'Azur",
    title: "Taxi Nice Côte d'Azur - Chauffeur Privé Premium 24/7",
    description:
      "Service de taxi premium à Nice et Côte d'Azur. Transferts Aéroport Nice, VSL, Excursions. Mercedes GLC et Van Premium.",
    images: [
      {
        url: "/bg-image.png",
        width: 1200,
        height: 630,
        alt: "Taxi Nice Côte d'Azur - Service Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Nice Côte d'Azur - Chauffeur Privé Premium 24/7",
    description:
      "Service de taxi premium à Nice et Côte d'Azur. Transferts Aéroport Nice, VSL, Excursions.",
    images: ["/bg-image.png"],
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
  verification: {
    google: "votre-code-verification-google",
  },
};





















