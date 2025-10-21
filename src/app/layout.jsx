import AnimatedButtons from "@/components/AnimatedButtons.jsx";
import LazyScripts from "@/components/LazyScripts.jsx";
import StructuredData from "@/components/StructuredData.jsx";
import WhatsAppButton from "@/components/WhatsAppButton.jsx";
import LanguageProviderWrapper from "@/contexts/LanguageProviderWrapper.jsx";
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
        {/* Google Analytics / Google Ads - Chargement ultra-différé */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initialiser dataLayer immédiatement
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Charger Google Tag Manager de manière ultra-différée
              function loadGTM() {
                const script = document.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17599375066';
                document.head.appendChild(script);
                
                // Configurer gtag après chargement
                script.onload = function() {
                  gtag('js', new Date());
                  gtag('config', 'AW-17599375066');
                };
              }
              
              // Charger GTM après que la page soit complètement chargée
              if (document.readyState === 'complete') {
                setTimeout(loadGTM, 1000);
              } else {
                window.addEventListener('load', function() {
                  setTimeout(loadGTM, 1000);
                });
              }
            `,
          }}
        />
        {/* Précharger les polices critiques */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Précharger les polices les plus critiques */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Charger les polices de manière non-bloquante */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Fallback pour les navigateurs sans JavaScript */}
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <StructuredData />
        <LanguageProviderWrapper initialTranslations={initialTranslations}>
          {children}
        </LanguageProviderWrapper>
        <AnimatedButtons />
        <WhatsAppButton />
        <LazyScripts />
      </body>
    </html>
  );
}
