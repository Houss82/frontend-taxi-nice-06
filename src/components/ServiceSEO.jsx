"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import {
  generateServiceMetadata,
  generateServiceStructuredData,
} from "@/lib/metadata.js";
import Head from "next/head";

/**
 * Composant SEO pour les pages de services
 * Utilisable dans les Client Components
 */
export default function ServiceSEO({ serviceKey, additionalMetadata = {} }) {
  const { language } = useLanguage();

  const metadata = generateServiceMetadata(serviceKey, language);
  const structuredData = generateServiceStructuredData(serviceKey, language);

  return (
    <Head>
      {/* Métadonnées de base */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(", ")} />

      {/* Balises hreflang */}
      <link rel="alternate" hrefLang="fr-FR" href={`/services/${serviceKey}`} />
      <link
        rel="alternate"
        hrefLang="en-US"
        href={`/services/${serviceKey}?lang=en`}
      />
      <link
        rel="canonical"
        href={`https://taxi-nice-06.com/services/${serviceKey}`}
      />

      {/* Open Graph */}
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta
        property="og:description"
        content={metadata.openGraph.description}
      />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:site_name" content={metadata.openGraph.siteName} />
      <meta property="og:locale" content={metadata.openGraph.locale} />
      <meta property="og:type" content={metadata.openGraph.type} />
      <meta property="og:image" content={metadata.openGraph.images[0].url} />
      <meta
        property="og:image:width"
        content={metadata.openGraph.images[0].width}
      />
      <meta
        property="og:image:height"
        content={metadata.openGraph.images[0].height}
      />
      <meta
        property="og:image:alt"
        content={metadata.openGraph.images[0].alt}
      />

      {/* Twitter Cards */}
      <meta name="twitter:card" content={metadata.twitter.card} />
      <meta name="twitter:title" content={metadata.twitter.title} />
      <meta name="twitter:description" content={metadata.twitter.description} />
      <meta name="twitter:image" content={metadata.twitter.images[0]} />

      {/* Données structurées */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Métadonnées supplémentaires */}
      {Object.entries(additionalMetadata).map(([key, value]) => (
        <meta key={key} name={key} content={value} />
      ))}
    </Head>
  );
}
