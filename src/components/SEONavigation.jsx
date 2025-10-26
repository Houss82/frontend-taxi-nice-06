import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SEONavigation() {
  const pathname = usePathname();

  const navigationItems = [
    {
      href: "/",
      label: "Accueil",
      title: "Taxi Nice Côte d'Azur - Accueil",
      description: "Service de taxi premium à Nice et Côte d'Azur",
    },
    {
      href: "/reservation",
      label: "Réservation",
      title: "Réservation de taxi en ligne",
      description: "Réservez votre transport facilement et rapidement",
    },
    {
      href: "/tarifs",
      label: "Tarifs",
      title: "Tarifs des services de taxi",
      description: "Découvrez nos tarifs transparents et compétitifs",
    },
    {
      href: "/services/transfert-aeroport",
      label: "Transfert Aéroport",
      title: "Transfert Aéroport Nice Côte d'Azur",
      description: "Service de transfert depuis et vers l'aéroport de Nice",
    },
    {
      href: "/services/vsl",
      label: "VSL",
      title: "VSL Nice - Transport médicalisé",
      description:
        "Véhicules sanitaires légers pour personnes à mobilité réduite",
    },
    {
      href: "/services/excursions",
      label: "Excursions",
      title: "Excursions Côte d'Azur",
      description: "Visites touristiques et excursions dans la région",
    },
    {
      href: "/contact",
      label: "Contact",
      title: "Contact Taxi Nice Côte d'Azur",
      description: "Nous contacter pour vos besoins de transport",
    },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Navigation principale"
      className="hidden md:flex space-x-8"
    >
      {navigationItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            title={item.title}
            className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "text-primary border-b-2 border-primary"
                : "text-gray-700 hover:text-primary hover:border-b-2 hover:border-primary"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            <span className="block">{item.label}</span>
            <span className="sr-only">{item.description}</span>
          </Link>
        );
      })}
    </nav>
  );
}

// Composant pour le breadcrumb SEO
export function SEOBreadcrumb({ items = [], hideVisual = false }) {
  if (items.length === 0) return null;

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url || item.href,
    })),
  };

  return (
    <>
      <script
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
                  href={item.url || item.href}
                  className="hover:text-primary transition-colors"
                  title={item.title}
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

// Composant pour les liens de footer SEO
export function SEOFooterLinks() {
  const footerSections = [
    {
      title: "Services",
      links: [
        {
          href: "/services/transfert-aeroport",
          label: "Transfert Aéroport",
          title: "Transfert Aéroport Nice",
        },
        {
          href: "/services/vsl",
          label: "VSL Nice",
          title: "Véhicule Sanitaire Léger",
        },
        {
          href: "/services/excursions",
          label: "Excursions",
          title: "Excursions Côte d'Azur",
        },
      ],
    },
    {
      title: "Informations",
      links: [
        {
          href: "/tarifs",
          label: "Tarifs",
          title: "Tarifs des services",
        },
        {
          href: "/a-propos",
          label: "À propos",
          title: "À propos de notre entreprise",
        },
        {
          href: "/contact",
          label: "Contact",
          title: "Nous contacter",
        },
      ],
    },
    {
      title: "Légal",
      links: [
        {
          href: "/mentions-legales",
          label: "Mentions légales",
          title: "Mentions légales",
        },
        {
          href: "/politique-confidentialite",
          label: "Confidentialité",
          title: "Politique de confidentialité",
        },
        {
          href: "/cgv",
          label: "CGV",
          title: "Conditions générales de vente",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {footerSections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h3 className="text-lg font-semibold text-white mb-4">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link
                  href={link.href}
                  title={link.title}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
