import AnimatedButtons from "@/components/AnimatedButtons.jsx";
import StructuredData from "@/components/StructuredData.jsx";
import WhatsAppButton from "@/components/WhatsAppButton.jsx";
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
    default:
      "Taxi Nice Côte d'Azur – Transferts & Réservations 24/7 | Chauffeur Privé Premium",
    template: "%s | Taxi Nice Côte d'Azur",
  },
  description:
    "🚗 Chauffeur privé 24h/24 à Nice et Côte d'Azur. Transferts Aéroport Nice, VSL, Excursions. Mercedes GLC et Van Premium. Réservation en ligne instantanée. Service professionnel et fiable.",
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
  authors: [{ name: "Taxi Nice Côte d'Azur", url: "https://taxi-nice-06.com" }],
  creator: "Taxi Nice Côte d'Azur",
  publisher: "Taxi Nice Côte d'Azur",
  applicationName: "Taxi Nice Côte d'Azur",
  category: "Transport",
  classification: "Service de transport",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://taxi-nice-06.com"),
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
    url: "https://taxi-nice-06.com",
    title: "Taxi Nice Côte d'Azur – Transferts & Réservations 24/7",
    description:
      "Chauffeur privé 24/7 à Nice et Côte d'Azur. Transferts Aéroport Nice, Hôtels, VSL, Excursions. Mercedes GLC et Van Premium. Réservation en ligne facile et rapide.",
    siteName: "Taxi Nice Côte d'Azur",
    images: [
      {
        url: "/bg-image.png",
        width: 1200,
        height: 630,
        alt: "Taxi Nice Côte d'Azur - Chauffeur privé 24/7 - Service premium de transport",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TaxiNice06",
    creator: "@TaxiNice06",
    title: "Taxi Nice Côte d'Azur – Transferts & Réservations 24/7",
    description:
      "Chauffeur privé 24/7 à Nice et Côte d'Azur. Transferts Aéroport Nice, Hôtels, VSL, Excursions.",
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
    "DC.title": "Taxi Nice Côte d'Azur",
    "DC.description": "Service de taxi premium à Nice et Côte d'Azur",
    "DC.subject": "Transport, Taxi, Nice, Côte d'Azur",
    "DC.language": "fr",
    "DC.coverage": "Nice, Côte d'Azur, France",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://taxi-nice-06.com",
    "DC.creator": "Taxi Nice Côte d'Azur",
    "DC.publisher": "Taxi Nice Côte d'Azur",
    "DC.rights": "© 2025 Taxi Nice Côte d'Azur",
    "DC.date.created": "2025-01-01",
    "DC.date.modified": "2025-01-15",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <StructuredData />
        <LanguageProvider>{children}</LanguageProvider>
        <AnimatedButtons />
        <WhatsAppButton />
      </body>
    </html>
  );
}
