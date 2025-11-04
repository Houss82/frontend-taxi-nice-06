import Link from "next/link";
import Script from "next/script";

/**
 * Composant Breadcrumb SEO compatible Server Component
 * À utiliser dans les pages Server Components
 * 
 * @param {Array} items - Tableau d'items { name, url, title }
 * @param {Boolean} hideVisual - Masquer le rendu visuel (garder seulement le JSON-LD)
 */
export default function SEOBreadcrumb({ items = [], hideVisual = false }) {
  if (items.length === 0) return null;

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://taxi-nice-06.com${item.url || item.href || "/"}`,
    })),
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      {!hideVisual && (
        <nav
          aria-label="Fil d'Ariane"
          className="flex items-center space-x-2 text-sm text-gray-600 mb-4"
        >
          <Link
            href="/"
            className="hover:text-primary transition-colors"
            title="Retour à l'accueil"
          >
            Accueil
          </Link>
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url || item.href || "/"}
                  className="hover:text-primary transition-colors"
                  title={item.title || item.name}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      )}
    </>
  );
}
