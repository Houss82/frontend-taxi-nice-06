// Configuration des métadonnées globales pour résoudre les problèmes de pages en double
export const metadata = {
  metadataBase: new URL("https://taxi-nice-06.com"),
  title: {
    default: "Taxi Nice – Transferts Aéroport, Courses Locales & Conventionné",
    template: "%s | Taxi Nice ",
  },
  description:
    "Taxi Nice : transferts Aéroport Nice, courses locales et trajets médicaux conventionnés CPAM. Réservation 24/7. Mercedes GLC & Van.",

  authors: [{ name: "Taxi Nice" }],
  creator: "Taxi Nice",
  publisher: "Taxi Nice ",
  alternates: {
    canonical: "/", // évite les variantes en doublon
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://taxi-nice-06.com",
    siteName: "Taxi Nice ",
    title: "Taxi Nice – Transferts Aéroport, Courses Locales & Conventionné",
    description:
      "Taxi à Nice 24/7. Aéroport Nice, courses locales, trajets conventionnés CPAM. Mercedes GLC & Van.",
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
    title: "Taxi Nice – Transferts Aéroport, Courses Locales & Conventionné",
    description:
      "Taxi à Nice 24/7 : Aéroport, local, CPAM. Mercedes GLC & Van.",
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
    google:
      "google-site-verification=cbmoVT_5GP607cQG1x7wxzQf6_RWvC6xGutXk9KfECw",
  },
};
