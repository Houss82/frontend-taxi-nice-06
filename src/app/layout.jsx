import StructuredData from "@/components/StructuredData.jsx";
import { LanguageProvider } from "@/contexts/LanguageContext.jsx";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Taxi Nice Côte d'Azur – Transferts & Réservations 24/7",
    template: "%s | Taxi Nice Côte d'Azur",
  },
  description:
    "Chauffeur privé 24/7 à Nice et Côte d'Azur. Transferts Aéroport Nice, Hôtels, VSL, Excursions. Mercedes GLC et Van Premium. Réservation en ligne facile et rapide.",
  keywords: [
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
  ],
  authors: [{ name: "Taxi Nice Côte d'Azur" }],
  creator: "Taxi Nice Côte d'Azur",
  publisher: "Taxi Nice Côte d'Azur",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://taxi-nice-cote-dazur.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://taxi-nice-cote-dazur.vercel.app",
    title: "Taxi Nice Côte d'Azur – Transferts & Réservations 24/7",
    description:
      "Chauffeur privé 24/7 à Nice et Côte d'Azur. Transferts Aéroport Nice, Hôtels, VSL, Excursions. Mercedes GLC et Van Premium.",
    siteName: "Taxi Nice Côte d'Azur",
    images: [
      {
        url: "/bg-image.png",
        width: 1200,
        height: 630,
        alt: "Taxi Nice Côte d'Azur - Chauffeur privé 24/7",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Nice Côte d'Azur – Transferts & Réservations 24/7",
    description:
      "Chauffeur privé 24/7 à Nice et Côte d'Azur. Transferts Aéroport Nice, Hôtels, VSL, Excursions.",
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
    google: "VOTRE_CODE_DE_VERIFICATION_GOOGLE_ICI", // Remplacez par votre code de vérification Google
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@300..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <StructuredData />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
