import About from "@/components/About.jsx";
import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import QuickBooking from "@/components/QuickBooking.jsx";
import SeoContent from "@/components/SeoContent.jsx";
import ServicesCarousel from "@/components/Services-Caroussel.jsx";
import Services from "@/components/Services.jsx";
import VehicleSelection from "@/components/VehicleSelection.jsx";
import Image from "next/image";

/**
 * Page d'accueil - Server Component pour SEO optimal
 * Tout le contenu (H1/H2, textes, image) est rendu côté serveur
 * pour être visible dans le HTML initial pour les crawlers
 */
export default async function Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section - Rendu côté serveur avec H1 visible */}
        <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[500px] sm:min-h-[600px] md:min-h-[750px] overflow-hidden">
          {/* Image de fond avec effet parallaxe */}
          <div className="absolute inset-0">
            <Image
              src="/bgimage10.png"
              alt="Taxi Mercedes GLC à Nice pour transferts aéroport et gares"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover scale-110 hover:scale-105 transition-transform duration-[20s]"
            />
          </div>

          {/* Overlay avec gradient moderne */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/25 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Effet de particules subtil */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-40 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Contenu textuel - Design moderne */}
          <div className="relative h-full flex flex-col items-center justify-start px-4 text-center pt-24 sm:pt-16 ">
            {/* Badge Premium */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4 animate-fade-in">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-white">
                Service Premium Reconnu
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-100 animate-slide-up">
              TAXI NICE
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CÔTE D'AZUR
              </span>
            </h1>

            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-8 max-w-3xl text-white/95 leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Transferts aéroport Nice, gares, VSL et excursions à Nice et sur
              la Côte d'Azur
            </p>

            <p
              className="text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl text-white/90 font-light animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              Service de taxi officiel à Nice et sur toute la côte d'azur
            </p>

            {/* Boutons d'action modernes */}
            <div
              className="flex flex-col sm:flex-row gap-4 items-center animate-slide-up"
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

        {/* Section SEO Principale - Contenu texte visible */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-5xl mx-auto px-4">
            {/* Titre principal avec badge */}
            <div className="text-center mb-12 relative">
              {/* Badge au-dessus du titre */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 mt-12 sm:mt-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-lg border border-blue-200 animate-pulse">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
                  Service Officiel depuis 2008
                </div>
              </div>

              {/* Titre avec effet visuel */}
              <div className="relative inline-block mt-24 sm:mt-8">
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Transport Privé
                  </span>
                  <br />
                  <span className="text-gray-800">sur la Côte d'Azur</span>
                </h2>

                {/* Decorative line */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>

              {/* Sous-titre */}
              <p className="text-xl md:text-2xl text-gray-600 mt-8 font-light tracking-wide">
                Service de{" "}
                <span className="font-semibold text-blue-600 relative">
                  Taxi Officiel
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 opacity-30"></span>
                </span>{" "}
                à Nice et dans les Alpes-Maritimes
              </p>
            </div>

            {/* Contenu principal */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Texte principal */}
              <div className="space-y-8">
                {/* Encadré notable */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl font-bold">10</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-900">
                        Années d'expérience
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
                    - Transferts <strong>toutes distances</strong> vers{" "}
                    <a
                      href="/services/transferts-aeroport"
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      l'aéroport de Nice
                    </a>
                    , Cannes, Monaco et la Côte d'Azur. Service officiel
                    certifié, véhicules Mercedes et chauffeurs professionnels.
                  </p>
                </div>

                {/* Description principale */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Pourquoi nous choisir ?
                  </h2>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">
                        <strong>Véhicules Mercedes récents</strong> - GLC et
                        vans premium pour votre confort
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">
                        <strong>
                          <a
                            href="/services/transferts-aeroport"
                            className="text-blue-600 hover:text-blue-800 underline font-medium"
                          >
                            Transferts aéroport de Nice
                          </a>
                        </strong>{" "}
                        - Terminal 1, Terminal 2,{" "}
                        <strong>toutes distances</strong>, Cannes, Monaco.{" "}
                        <a
                          href="/services/vsl"
                          className="text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                          Service VSL
                        </a>{" "}
                        et excursions disponibles 24/7
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">
                        <strong>
                          <a
                            href="/tarifs"
                            className="text-blue-600 hover:text-blue-800 underline"
                          >
                            Tarifs transparents
                          </a>
                        </strong>{" "}
                        - Aucun frais caché, prix fixes affichés
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 italic pt-2 mb-6">
                    <strong>Taxi aéroport de Nice</strong> et{" "}
                    <strong>transferts toutes distances</strong> - Rendez-vous
                    d'affaires, escapades touristiques ou événements spéciaux.
                    Nous assurons vos déplacements partout sur la Côte d'Azur.
                  </p>

                  {/* Lien vers réservation */}
                  <div className="pt-4 flex justify-center">
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

              {/* Services avec design moderne */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">✓</span>
                  </span>
                  Nos Services Premium
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">
                        Transferts aéroport Nice
                      </strong>
                      <p className="text-gray-600 text-sm">
                        Terminal 1 et 2 avec suivi en temps réel
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">
                        Taxi Nice et chauffeur privé
                      </strong>
                      <p className="text-gray-600 text-sm">
                        Service 24h/24 et 7j/7
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">
                        Transport médical VSL
                      </strong>
                      <p className="text-gray-600 text-sm">
                        Véhicules sanitaires agréés
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">
                        Événements et mariages
                      </strong>
                      <p className="text-gray-600 text-sm">
                        Service de prestige personnalisé
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">5</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">
                        Excursions touristiques
                      </strong>
                      <p className="text-gray-600 text-sm">
                        Découverte de la Côte d'Azur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <ServicesCarousel />
        <SeoContent />
        <About />
        <VehicleSelection />

        {/* Section Réservation avec ancre */}
        <section id="reservation">
          <QuickBooking />
        </section>

        {/* Section FAQ - Contenu SEO */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-sm">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Foire aux Questions
              </div>

              <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Questions Fréquentes
                </span>
              </h3>

              <div className="flex justify-center items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
              </div>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Tout ce que vous devez savoir sur nos services de taxi à Nice
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Colonne gauche */}
              <div className="space-y-6">
                <div className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Comment réserver un taxi à l'aéroport de Nice ?
                      </h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Vous pouvez réserver votre{" "}
                      <strong>transfert aéroport Nice</strong> en ligne sur
                      notre site, par téléphone ou via notre formulaire de
                      réservation. Il suffit de nous indiquer votre numéro de
                      vol, la date et l'heure d'arrivée. Nous vous confirmons
                      immédiatement et vous envoyons un SMS de confirmation avec
                      le nom du chauffeur.
                    </p>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Quels sont vos tarifs pour un transfert aéroport ?
                      </h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Nos tarifs pour les{" "}
                      <strong>transferts aéroport Nice</strong> sont
                      transparents et fixes. Le prix dépend de votre destination
                      (Nice centre, Cannes, Monaco, etc.) et du type de véhicule
                      choisi (Mercedes GLC ou Van Premium). Consultez notre{" "}
                      <a
                        href="/tarifs"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        page tarifs
                      </a>{" "}
                      pour connaître les prix détaillés.
                    </p>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Proposez-vous un service VSL à Nice ?
                      </h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Oui, nous proposons un{" "}
                      <strong>
                        <a
                          href="/services/vsl"
                          className="text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                          service VSL (Véhicule Sanitaire Léger)
                        </a>
                      </strong>{" "}
                      à Nice et sur toute la Côte d'Azur. Nos véhicules sont
                      agréés par l'ARS et nos chauffeurs sont formés pour
                      transporter des patients en toute sécurité. Le service est
                      disponible 24h/24 et 7j/7.
                    </p>
                  </div>
                </div>
              </div>

              {/* Colonne droite */}
              <div className="space-y-6">
                <div className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Quels types de véhicules sont disponibles ?
                      </h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Notre flotte comprend des <strong>Mercedes GLC</strong>{" "}
                      pour 4 passagers maximum et des{" "}
                      <strong>Vans Premium</strong> pour jusqu'à 8 passagers.
                      Tous nos véhicules sont récents, climatisés et
                      confortables. Nous proposons également des équipements
                      spéciaux comme des sièges bébé sur demande.
                    </p>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Proposez-vous des excursions sur la Côte d'Azur ?
                      </h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Absolument ! Nous organisons des{" "}
                      <strong>excursions touristiques</strong> sur toute la Côte
                      d'Azur : Monaco, Cannes, Antibes, Saint-Tropez, les
                      villages perchés. Notre chauffeur vous emmène découvrir
                      les plus beaux endroits de la région à votre rythme.
                      N'hésitez pas à nous contacter pour personnaliser votre
                      circuit.
                    </p>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Comment puis-je vous contacter ?
                      </h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Vous pouvez nous contacter par téléphone 24h/24 et 7j/7,
                      via notre{" "}
                      <a
                        href="/contact"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        formulaire de contact
                      </a>{" "}
                      ou directement par WhatsApp. Notre équipe est disponible
                      en français et en anglais pour répondre à toutes vos
                      questions et prendre votre réservation.
                    </p>
                  </div>
                </div>
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
      </main>
      <Footer />
    </>
  );
}

// Force le rendu statique pour meilleur SEO
export const dynamic = "force-static";
export const revalidate = 3600; // Revalider toutes les heures
