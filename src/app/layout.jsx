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

// Les métadonnées sont maintenant générées dynamiquement avec les traductions
export async function generateMetadata() {
  return await generateSEOMetadata("fr");
}

export default async function RootLayout({ children }) {
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
              
              // Charger GTM après que la page soit complètement chargée et interactive
              if (document.readyState === 'complete') {
                setTimeout(loadGTM, 3000); // Délai augmenté à 3s pour améliorer les performances
              } else {
                window.addEventListener('load', function() {
                  setTimeout(loadGTM, 3000);
                });
              }
              
              // Prioriser l'interactivité - charger GTM seulement si l'utilisateur scroll
              let userInteracted = false;
              const handleUserInteraction = function() {
                if (!userInteracted) {
                  userInteracted = true;
                  setTimeout(loadGTM, 1000);
                  window.removeEventListener('scroll', handleUserInteraction);
                  window.removeEventListener('click', handleUserInteraction);
                }
              };
              window.addEventListener('scroll', handleUserInteraction, { once: true, passive: true });
              window.addEventListener('click', handleUserInteraction, { once: true });
            `,
          }}
        />
        {/* Logo pour les résultats de recherche Google (Site Icon) */}
        <link rel="icon" type="image/png" sizes="512x512" href="/logo1.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        {/* Empêcher l'indexation du favicon */}
        <meta name="robots" content="noindex" data-favicon="true" />
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
