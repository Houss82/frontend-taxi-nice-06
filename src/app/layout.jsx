import AnimatedButtons from "@/components/AnimatedButtons.jsx";
import CriticalCSS from "@/components/CriticalCSS.jsx";
import LazyScripts from "@/components/LazyScripts.jsx";
import StructuredData from "@/components/StructuredData.jsx";
import WhatsAppButton from "@/components/WhatsAppButton.jsx";
import { generateSEOMetadata } from "@/lib/seo.js";
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

// Les métadonnées sont maintenant générées dynamiquement
export async function generateMetadata() {
  return await generateSEOMetadata();
}

export default async function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Google Analytics - Code standard */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L3Q6HXNYDD"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L3Q6HXNYDD');
            `,
          }}
        />

        {/* Google Ads - Chargement ultra-différé */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Protection contre le double chargement
              let gtmLoaded = false;
              let gtmLoading = false;
              
              // Charger Google Ads de manière ultra-différée
              function loadGoogleAds() {
                // Éviter le double chargement
                if (gtmLoaded || gtmLoading) {
                  return;
                }
                
                // Vérifier si le script n'est pas déjà présent
                if (document.querySelector('script[src*="googletagmanager.com/gtag/js?id=AW-"]')) {
                  gtmLoaded = true;
                  return;
                }
                
                gtmLoading = true;
                
                const script = document.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17599375066';
                
                // Configurer gtag après chargement
                script.onload = function() {
                  gtmLoaded = true;
                  gtmLoading = false;
                  gtag('config', 'AW-17599375066');
                };
                
                script.onerror = function() {
                  gtmLoading = false;
                };
                
                document.head.appendChild(script);
              }
              
              // Charger Google Ads après que la page soit complètement chargée et interactive
              if (document.readyState === 'complete') {
                setTimeout(loadGoogleAds, 3000); // Délai augmenté à 3s pour améliorer les performances
              } else {
                window.addEventListener('load', function() {
                  setTimeout(loadGoogleAds, 3000);
                });
              }
              
              // Prioriser l'interactivité - charger Google Ads seulement si l'utilisateur scroll
              let userInteracted = false;
              const handleUserInteraction = function() {
                if (!userInteracted) {
                  userInteracted = true;
                  setTimeout(loadGoogleAds, 1000);
                  window.removeEventListener('scroll', handleUserInteraction);
                  window.removeEventListener('click', handleUserInteraction);
                }
              };
              window.addEventListener('scroll', handleUserInteraction, { once: true, passive: true });
              window.addEventListener('click', handleUserInteraction, { once: true });
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <CriticalCSS />
        <StructuredData />
        {children}
        {/* Composants chargés de manière différée pour améliorer les performances */}
        <AnimatedButtons />
        <WhatsAppButton />
        <LazyScripts />
      </body>
    </html>
  );
}
