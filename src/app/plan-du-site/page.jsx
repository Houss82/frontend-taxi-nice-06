import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import { getAllPosts } from "@/lib/blog";
import {
  Award,
  Calendar,
  Car,
  Compass,
  Euro,
  Heart,
  Home,
  MapPin,
  Phone,
  Plane,
  Stethoscope,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Plan du Site | Taxi Nice 06 - Toutes les Pages",
  description:
    "Plan du site complet de Taxi Nice 06 : accès rapide à toutes nos pages (services, secteurs, blog, tarifs, réservation).",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PlanDuSitePage() {
  const allPosts = getAllPosts();

  const breadcrumbItems = [{ name: "Plan du Site", url: "/plan-du-site" }];

  const mainPages = [
    {
      title: "Accueil",
      url: "/",
      description: "Page d'accueil - Service de taxi Nice 24/7",
      icon: Home,
      color: "text-cyan-600",
    },
    {
      title: "Taxi Nice 24/7",
      url: "/taxi-nice",
      description: "Page principale Taxi Nice avec tous nos services",
      icon: Car,
      color: "text-blue-600",
    },
    {
      title: "Réservation",
      url: "/reservation",
      description: "Réservez votre taxi Nice en ligne",
      icon: Calendar,
      color: "text-green-600",
    },
    {
      title: "Tarifs",
      url: "/tarifs",
      description: "Tarifs transparents pour tous nos services",
      icon: Euro,
      color: "text-orange-600",
    },
    {
      title: "Contact",
      url: "/contact",
      description: "Contactez-nous pour vos demandes",
      icon: Phone,
      color: "text-purple-600",
    },
  ];

  const servicesPages = [
    {
      title: "Transferts Aéroport",
      url: "/services/transferts-aeroport",
      description: "Transferts vers et depuis l'aéroport Nice Côte d'Azur",
      icon: Plane,
      color: "text-blue-600",
    },
    {
      title: "VSL Transport Médicalisé",
      url: "/services/vsl",
      description: "Véhicule Sanitaire Léger pour personnes à mobilité réduite",
      icon: Stethoscope,
      color: "text-pink-600",
    },
    {
      title: "Arrivées & Destinations",
      url: "/services/arrivees-destinations",
      description: "Accueil personnalisé à votre arrivée",
      icon: MapPin,
      color: "text-indigo-600",
    },
    {
      title: "Van Premium",
      url: "/services/van-premium",
      description: "Véhicule premium pour groupes jusqu'à 8 personnes",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Excursions",
      url: "/services/excursions",
      description: "Excursions et découvertes sur la Côte d'Azur",
      icon: Compass,
      color: "text-orange-600",
    },
    {
      title: "Événements & Mariages",
      url: "/services/evenements-mariages",
      description: "Transport pour événements et mariages",
      icon: Heart,
      color: "text-rose-600",
    },
    {
      title: "Flotte Récente",
      url: "/services/flotte-recente",
      description: "Véhicules Mercedes récents et premium",
      icon: Award,
      color: "text-amber-600",
    },
  ];

  const secteursPages = [
    {
      title: "Taxi Nice",
      url: "/secteurs/nice",
      description: "Guide complet : zones, hôpitaux et établissements",
    },
    {
      title: "Taxi Nice Gare",
      url: "/secteurs/nice-gare",
      description: "Transferts depuis les gares SNCF de Nice",
    },
    {
      title: "Taxi Nice Centre-Ville",
      url: "/secteurs/nice-centre-ville",
      description: "Courses locales dans le centre-ville de Nice",
    },
    {
      title: "Taxi Monaco",
      url: "/secteurs/monaco",
      description: "Transferts Nice vers Monaco et Principauté",
    },
    {
      title: "Taxi Cannes",
      url: "/secteurs/cannes",
      description: "Transferts Nice vers Cannes et Palais des Festivals",
    },
    {
      title: "Taxi Antibes",
      url: "/secteurs/antibes",
      description: "Transferts Nice vers Antibes et Juan-les-Pins",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b mt-20 sm:mt-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Plan du Site
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accès rapide à toutes les pages de Taxi Nice 06 : services,
            secteurs, blog et informations pratiques
          </p>
        </div>
      </section>

      {/* Pages Principales */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Car className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-gray-900">
              Pages Principales
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPages.map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className="group bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <page.icon className={`w-6 h-6 ${page.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{page.description}</p>
                    <div className="mt-3 text-primary text-sm font-semibold group-hover:underline">
                      Accéder →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Plane className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-gray-900">Nos Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicesPages.map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className="group bg-white rounded-lg p-5 shadow-md border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform bg-gradient-to-br from-white to-gray-50 border border-gray-200`}
                  >
                    <page.icon className={`w-5 h-5 ${page.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {page.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{page.description}</p>
                <div className="text-primary text-xs font-medium group-hover:underline">
                  Voir le service →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-gray-900">Nos Secteurs</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {secteursPages.map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className="group bg-gradient-to-br from-white to-primary/5 rounded-lg p-5 shadow-md border-2 border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                  {page.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{page.description}</p>
                <div className="text-primary text-xs font-medium group-hover:underline">
                  Découvrir le secteur →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      {allPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-gray-900">
                Blog & Articles
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/blog"
                className="group bg-white rounded-lg p-5 shadow-md border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                  Tous les Articles
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Consultez tous nos guides et conseils
                </p>
                <div className="text-primary text-xs font-medium group-hover:underline">
                  Voir le blog →
                </div>
              </Link>
              {allPosts.slice(0, 5).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-lg p-5 shadow-md border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="text-primary text-xs font-medium group-hover:underline">
                    Lire l'article →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pages Légales */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Pages Légales
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/cgv"
              className="group bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                Conditions Générales de Vente
              </h3>
              <div className="text-gray-600 text-sm">CGV</div>
            </Link>
            <Link
              href="/mentions-legales"
              className="group bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                Mentions Légales
              </h3>
              <div className="text-gray-600 text-sm">Informations légales</div>
            </Link>
            <Link
              href="/politique-confidentialite"
              className="group bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                Politique de Confidentialité
              </h3>
              <div className="text-gray-600 text-sm">
                Protection des données
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
