import About from "@/components/About.jsx";
import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import QuickBooking from "@/components/QuickBooking.jsx";
import ReviewsSection from "@/components/ReviewsSection.jsx";
import SeoContent from "@/components/SeoContent.jsx";
import ServicesCarousel from "@/components/Services-Caroussel.jsx";
import Services from "@/components/Services.jsx";
import VehicleSelection from "@/components/VehicleSelection.jsx";
import { getAllPosts } from "@/lib/blog";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Page d'accueil - Server Component pour SEO optimal
 * Tout le contenu (H1/H2, textes, image) est rendu côté serveur
 * pour être visible dans le HTML initial pour les crawlers
 */
export default function Page() {
  const recentPosts = getAllPosts().slice(0, 3);
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const citySectors = [
    {
      slug: "cannes",
      name: "Taxi Nice vers Cannes",
      tagline: "Festival & congrès depuis Nice",
      description:
        "Transferts Palais des Festivals, Croisette et hôtels de prestige.",
      image: "/cannes1-GLC.jpeg",
      alt: "Mercedes GLC pour transferts Nice vers Cannes",
      gradient: "from-pink-500 via-orange-400 to-rose-500",
      overlay: "from-rose-900/80 via-orange-700/20 to-transparent",
      badgeClass: "bg-rose-500/25 border-rose-200 text-rose-50",
      linkColor: "text-rose-600 hover:text-rose-800",
    },
    {
      slug: "antibes",
      name: "Taxi Nice vers Antibes",
      tagline: "Port Vauban & Sophia Antipolis",
      description:
        "Dessertes Juan-les-Pins, technopole et trajets médicaux conventionnés.",
      image: "/taxi-antibes-secteur.jpeg",
      alt: "Van premium à Antibes",
      gradient: "from-emerald-500 via-teal-400 to-emerald-600",
      overlay: "from-emerald-900/80 via-teal-700/20 to-transparent",
      badgeClass: "bg-emerald-500/25 border-emerald-200 text-emerald-50",
      linkColor: "text-emerald-600 hover:text-emerald-800",
    },
    {
      slug: "menton",
      name: "Taxi Nice vers Menton",
      tagline: "Frontière italienne & jardins remarquables",
      description:
        "Transferts vers Menton, villas Belle Époque et frontière italienne 24/7.",
      image: "/taxi-nice-Menton.png",
      alt: "Taxi vers Menton depuis Nice",
      gradient: "from-amber-500 via-orange-400 to-red-500",
      overlay: "from-red-900/80 via-orange-700/20 to-transparent",
      badgeClass: "bg-amber-500/25 border-amber-200 text-amber-50",
      linkColor: "text-amber-600 hover:text-amber-800",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section - Rendu côté serveur avec H1 visible */}
        <section className="relative w-full min-h-[600px] sm:min-h-[650px] md:h-[80vh] md:min-h-[750px] overflow-hidden">
          {/* Image de fond */}
          <div className="absolute inset-0">
            <Image
              src="/bgimage10.png"
              alt="Taxi Mercedes GLC à Nice pour transferts aéroport et gares"
              fill
              priority
              quality={75}
              sizes="100vw"
              fetchPriority="high"
              className="object-cover"
              loading="eager"
            />
          </div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/25 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Effets décoratifs - Désactivés sur mobile pour améliorer les performances */}
          <div className="absolute inset-0 opacity-30 hidden md:block">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          {/* Contenu */}
          <div className="relative min-h-full flex flex-col items-center justify-center px-4 lg:px-8 text-center py-20 sm:py-10 lg:py-2 md:py-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4 animate-fade-in">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-white">
                Service Premium à Nice
              </span>
            </div>

            {/* H1 SEO optimisé - Structure sur 2 lignes avec dégradé et contour blanc */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 drop-shadow-2xl">
              <span className="block h1-with-stroke" data-text="Taxi Nice">
                <span className="h1-gradient">Taxi Nice</span>
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-100">
                Transferts Aéroport & VSL Conventionnés
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 max-w-3xl text-white/95 leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Transferts aéroport de Nice, gares, VSL et excursions à Nice et
              dans les Alpes-Maritimes
            </p>

            <p
              className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl text-white/90 font-light animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              Chauffeurs professionnels, véhicules Mercedes, réservation simple
              en ligne.
            </p>

            {/* Boutons */}
            <div
              className="flex flex-col sm:flex-row gap-4 items-center animate-slide-up max-w-md sm:max-w-none mx-auto"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="/reservation"
                aria-label="Réserver un taxi à Nice"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Réserver un Taxi
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="/tarifs"
                aria-label="Consulter nos tarifs de taxi à Nice"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
              >
                Voir les Tarifs
              </a>
            </div>

            {/* Indicateur de scroll */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg
                className="w-6 h-6 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* SECTION 1 : Présentation / SEO principale */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-5xl mx-auto px-4 lg:px-8">
            {/* H2 n°1 */}
            <div className="text-center mb-12 relative">
              {/* Badge */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 mt-12 sm:mt-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-lg border border-blue-200 animate-pulse">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
                  Service de taxi à Nice depuis 2008
                </div>
              </div>

              <div className="relative inline-block mt-24 sm:mt-8">
                <h2 className="text-4xl md:text-xl font-black text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
                    Taxi à Nice & Transports Privés
                  </span>
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>

              <p className="text-lg md:text-xl text-gray-600 mt-8 font-light tracking-wide">
                Transferts aéroport, taxis conventionnés CPAM, trajets toutes
                distances sur la Côte d&apos;Azur
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Colonne gauche */}
              <div className="space-y-8">
                {/* Encadré */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl font-bold">10</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-900">
                        Années d&apos;expérience
                      </p>
                      <p className="text-xs text-blue-700">
                        Service certifié et fiable
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-800 leading-relaxed">
                    <strong className="text-blue-900">
                      Taxi aéroport de Nice
                    </strong>{" "}
                    – transferts toutes distances vers Cannes, Antibes,
                    Saint-Tropez, Menton et toute la Côte d'Azur. Suivi de vol,
                    accueil personnalisé, véhicules haut de gamme. Découvrez
                    notre{" "}
                    <Link
                      href="/"
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      service de taxi Nice 24/7
                    </Link>{" "}
                    pour tous vos déplacements.
                  </p>
                </div>

                {/* Pourquoi nous choisir */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Pourquoi choisir Taxi Nice 06 ?
                  </h2>

                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">
                        Véhicules Mercedes récents (GLC, Classe V) pour votre
                        confort
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">
                        Transferts aéroport de Nice – Terminal 1 et 2, toutes
                        distances, Saint-Tropez, Cannes, Antibes, Menton
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">
                        <a
                          href="/tarifs"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          Tarifs clairs et fixes
                        </a>{" "}
                        – aucun frais caché
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 italic pt-2 mb-6">
                    Déplacements professionnels, RDV médicaux, événements,
                    excursions privées – nous couvrons tout le 06.
                  </p>

                  <div className="pt-4 flex justify-center md:justify-start">
                    <a
                      href="/reservation"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Réserver maintenant
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Colonne droite : services */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">✓</span>
                  </span>
                  Nos Services de Taxi à Nice
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Transferts aéroport Nice",
                      text: "Terminal 1 et 2 avec suivi en temps réel",
                    },
                    {
                      title: "Taxi Nice & chauffeur privé",
                      text: "Service 24h/24 et 7j/7",
                      link: "/",
                    },
                    {
                      title: "Transport médical VSL / conventionné",
                      text: "Véhicules agréés CPAM",
                    },
                    {
                      title: "Événements et mariages",
                      text: "Service de prestige personnalisé",
                    },
                    {
                      title: "Excursions Côte d’Azur",
                      text: "Saint-Tropez, Cannes, Antibes, arrière-pays",
                    },
                  ].map((item, idx) => (
                    <div
                      key={item.title}
                      className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 text-xs font-bold">
                          {idx + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        {item.link ? (
                          <Link
                            href={item.link}
                            className="text-gray-900 hover:text-blue-600 transition-colors font-semibold block leading-tight"
                          >
                            {item.title}
                          </Link>
                        ) : (
                          <strong className="text-gray-900 block leading-tight">
                            {item.title}
                          </strong>
                        )}
                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secteurs desservis */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl lg:max-w-5xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-xl font-black text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
                  Nos secteurs desservis
                </span>
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
                Taxi privé Nice ↔ Côte d&apos;Azur
              </h3>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Nos pages dédiées détaillent nos trajets Nice ↔ Cannes et
                Antibes : tarifs estimatifs, zones couvertes, établissements
                desservis, FAQ et ressources locales pour planifier vos
                déplacements.
              </p>
              <Link
                href="/secteurs"
                className="inline-flex items-center gap-2 px-5 py-3 mt-6 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Tous nos secteurs
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 12h14"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {citySectors.map((city) => (
                <article
                  key={city.slug}
                  className="group relative overflow-hidden rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow bg-white"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${city.gradient}`}
                  />
                  <div className="relative h-56">
                    <Image
                      src={city.image}
                      alt={city.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={80}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${city.overlay}`}
                    />
                    <div className="absolute bottom-5 left-5 right-5">
                      <span
                        className={`inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full border backdrop-blur ${city.badgeClass}`}
                      >
                        {city.tagline}
                      </span>
                      <h3 className="mt-3 text-2xl font-bold text-white drop-shadow-lg">
                        {city.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-gray-600">{city.description}</p>
                    <Link
                      href={`/secteurs/${city.slug}`}
                      className={`inline-flex items-center gap-2 font-semibold transition-colors ${city.linkColor}`}
                    >
                      Découvrir la page
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Derniers articles */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl lg:max-w-5xl mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-4xl font-black text-gray-900">
                  Guides & actualités récentes
                </h2>
                <p className="text-gray-600 mt-3 max-w-xl">
                  Conseils transfert, bonnes pratiques aéroport et infos VSL
                  rédigés par notre équipe Taxi Nice 06 pour préparer vos
                  déplacements.
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Tous les articles
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {recentPosts.length === 0 ? (
                <div className="md:col-span-3 bg-white rounded-3xl border border-dashed border-gray-200 p-10 text-center text-gray-500">
                  Aucun article publié pour le moment. Revenez bientôt pour nos
                  prochains guides.
                </div>
              ) : (
                recentPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {post.category && (
                        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-semibold uppercase tracking-wide text-primary">
                          {post.category}
                        </span>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </span>
                      <h3 className="mt-3 text-2xl font-bold text-gray-900 leading-tight">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-3 text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-6">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                        >
                          Lire l&apos;article
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.8}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Section Avis Clients */}
        <ReviewsSection />

        {/* Autres sections */}
        <Services />
        <ServicesCarousel />
        <SeoContent />
        <About />
        <VehicleSelection />

        {/* Réservation */}
        <section id="reservation">
          <QuickBooking />
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-6xl lg:max-w-5xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Questions{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  fréquentes
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Tout ce que vous devez savoir sur nos services de taxi à Nice
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* FAQ 1 */}
              <div className="group bg-white rounded-2xl p-8 shadow-xl border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Comment réserver un taxi à l'aéroport de Nice ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Vous pouvez réserver votre{" "}
                  <Link
                    href="/"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    taxi à Nice
                  </Link>{" "}
                  en ligne sur notre site via le formulaire de réservation, ou
                  simplement par téléphone. Il suffit d'indiquer votre numéro de
                  vol, la date et l'heure d'arrivée, et nous vous confirmons
                  votre transfert immédiatement.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="group bg-white rounded-2xl p-8 shadow-xl border-l-4 border-purple-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Quels sont vos tarifs pour un transfert aéroport ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Nos <strong>tarifs de taxi à Nice</strong> sont fixes et
                  transparents. Ils varient selon la destination (Cannes,
                  Saint-Tropez, Antibes...) et le type de véhicule choisi
                  (Mercedes GLC ou Van Premium). Consultez la{" "}
                  <a
                    href="/tarifs"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    page tarifs
                  </a>{" "}
                  pour les détails complets.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="group bg-white rounded-2xl p-8 shadow-xl border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  Proposez-vous un service VSL à Nice ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oui, nous proposons un{" "}
                  <a
                    href="/services/vsl"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    service VSL conventionné CPAM
                  </a>{" "}
                  à Nice et sur toute la Côte d'Azur. Nos chauffeurs sont agréés
                  et formés pour le transport médical assis, disponibles 24h/24
                  et 7j/7.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="group bg-white rounded-2xl p-8 shadow-xl border-l-4 border-indigo-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  Quels types de véhicules proposez-vous ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Nous disposons de <strong>Mercedes GLC</strong> pour les
                  trajets privés (jusqu'à 4 passagers) et de{" "}
                  <strong>Vans Premium</strong> jusqu'à 8 places. Tous nos
                  véhicules sont récents, climatisés, spacieux et parfaitement
                  entretenus.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="group bg-white rounded-2xl p-8 shadow-xl border-l-4 border-orange-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Faites-vous des excursions touristiques ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oui, nous proposons des{" "}
                  <strong>excursions privées sur la Côte d'Azur</strong> :
                  Cannes, Saint-Tropez, Antibes ou Grasse. Nos chauffeurs vous
                  accompagnent pour découvrir les plus beaux sites de la région
                  à votre rythme.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="group bg-white rounded-2xl p-8 shadow-xl border-l-4 border-cyan-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  Comment puis-je vous contacter ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Vous pouvez nous contacter par téléphone 24h/24 et 7j/7, via
                  notre{" "}
                  <a
                    href="/contact"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    page contact
                  </a>{" "}
                  ou par WhatsApp. Réponse rapide garantie en français et en
                  anglais.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <a
                href="/reservation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Réserver votre taxi maintenant
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Bloc SEO additionnel pour améliorer le ratio contenu/code */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Taxi à Nice, Aéroport de Nice et{" "}
              <span className="text-blue-600">Côte d&apos;Azur</span>
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                Notre société de{" "}
                <Link
                  href="/"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  taxi basée à Nice
                </Link>{" "}
                assure vos déplacements{" "}
                <strong className="text-blue-600">7j/7</strong> dans tout le
                département des Alpes-Maritimes : <strong>Nice</strong>,
                Saint-Laurent du Var, Cagnes-sur-Mer, Villefranche-sur-Mer,
                Beaulieu, Eze, Menton, <strong>Antibes</strong> et{" "}
                <strong>Cannes</strong>. Nous prenons en charge aussi bien les
                arrivées à l&apos;aéroport de Nice que les départs vers les
                hôtels, ports, gares et cliniques. Nos chauffeurs sont
                expérimentés et parlent <strong>français et anglais</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Si vous recherchez un{" "}
                <Link
                  href="/"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  taxi à Nice
                </Link>{" "}
                fiable, ponctuel et avec un véhicule haut de gamme, Taxi Nice 06
                est le bon choix. Pour vous aider à choisir entre taxi, bus et
                tramway selon vos besoins, consultez notre{" "}
                <Link
                  href="/blog/taxi-nice-guide-complet-2025"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  guide complet pour choisir le meilleur transport à Nice
                </Link>
                . Nous proposons aussi un service de{" "}
                <strong className="text-blue-600">taxi conventionné</strong>{" "}
                pour vos trajets médicaux vers les hôpitaux ou centres de soins
                (sous conditions CPAM). La réservation est possible{" "}
                <a
                  href="/reservation"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  en ligne
                </a>{" "}
                ou par téléphone. Consultez aussi nos{" "}
                <a
                  href="/tarifs"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  tarifs de taxi à Nice
                </a>{" "}
                pour connaître nos prix transparents.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nous réalisons aussi des{" "}
                <strong className="text-blue-600">
                  transferts touristiques
                </strong>{" "}
                sur la Côte d&apos;Azur : Cannes, Antibes, Saint-Tropez,
                Saint-Paul-de-Vence, Eze, Gourdon, Grasse. Idéal pour les
                croisiéristes, familles et voyageurs d&apos;affaires.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Force le rendu statique pour meilleur SEO
export const dynamic = "force-static";
export const revalidate = 3600;
