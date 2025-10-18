import AnimatedButtons from "@/components/AnimatedButtons.jsx";
import StructuredData from "@/components/StructuredData.jsx";
import WhatsAppButton from "@/components/WhatsAppButton.jsx";
import { LanguageProvider } from "@/contexts/LanguageContext.jsx";
import { generateSEOMetadata } from "@/lib/seo.js";
import { loadTranslations } from "@/lib/translations.js";
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

// Les métadonnées sont maintenant générées dynamiquement avec les traductions
export async function generateMetadata() {
  return await generateSEOMetadata("fr");
}

export default async function RootLayout({ children }) {
  // Précharger les traductions françaises côté serveur
  const initialTranslations = await loadTranslations("fr");

  return (
    <html lang="fr">
      <head>
        {/* Google Analytics / Google Ads */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17599375066"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17599375066');
            `,
          }}
        />
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
        <LanguageProvider initialTranslations={initialTranslations}>
          {children}
        </LanguageProvider>
        <AnimatedButtons />
        <WhatsAppButton />
      </body>
    </html>
  );
}
