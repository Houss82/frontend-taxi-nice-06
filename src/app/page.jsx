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
        <section className="relative w-full min-h-[600px] sm:min-h-[650px] md:h-[80vh] md:min-h-[750px] overflow-hidden">
          {/* Image de fond */}
          <div className="absolute inset-0">
            <Image
              src="/bgimage10.png"
              alt="Taxi Mercedes GLC à Nice pour transferts aéroport et gares"
              fill
              priority
              quality={85}
              sizes="100vw"
              fetchPriority="high"
              className="object-cover scale-110 hover:scale-105 transition-transform duration-[20s]"
            />
          </div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/25 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Effets décoratifs */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-40 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Contenu */}
          <div className="relative min-h-full flex flex-col items-center justify-center px-4 text-center py-20 sm:py-16">
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

            {/* H1 SEO plus clair */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-100 animate-slide-up">
              Taxi à Nice
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
                Aéroport & conventionnés CPAM
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
          <div className="max-w-5xl mx-auto px-4">
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
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
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
                    – transferts toutes distances vers Cannes, Monaco, Antibes
                    et toute la Côte d’Azur. Suivi de vol, accueil personnalisé,
                    véhicules haut de gamme.
                  </p>
                </div>

                {/* Pourquoi nous choisir */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Pourquoi choisir Taxi Nice 06 ?
                  </h2>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">
                        Véhicules Mercedes récents (GLC, Classe V) pour votre
                        confort
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">
                        Transferts aéroport de Nice – Terminal 1 et 2, toutes
                        distances, Monaco, Cannes
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">
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
                      text: "Monaco, Cannes, Antibes, arrière-pays",
                    },
                  ].map((item, idx) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-xs font-bold">
                          {idx + 1}
                        </span>
                      </div>
                      <div>
                        <strong className="text-gray-900">{item.title}</strong>
                        <p className="text-gray-600 text-sm">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

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
          <div className="max-w-6xl mx-auto px-4">
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
                  Vous pouvez réserver votre <strong>taxi à Nice</strong> en
                  ligne sur notre site via le formulaire de réservation, ou
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
                  Monaco, Antibes...) et le type de véhicule choisi (Mercedes
                  GLC ou Van Premium). Consultez la{" "}
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
                  Monaco, Cannes, Saint-Tropez, Antibes ou Grasse. Nos
                  chauffeurs vous accompagnent pour découvrir les plus beaux
                  sites de la région à votre rythme.
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
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Taxi à Nice, Aéroport de Nice et{" "}
              <span className="text-blue-600">Côte d&apos;Azur</span>
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                Notre société de taxi basée à Nice assure vos déplacements{" "}
                <strong className="text-blue-600">7j/7</strong> dans tout le
                département des Alpes-Maritimes : <strong>Nice</strong>,
                Saint-Laurent du Var, Cagnes-sur-Mer, Villefranche-sur-Mer,
                Beaulieu, Eze, <strong>Monaco</strong>, Menton,{" "}
                <strong>Antibes</strong> et <strong>Cannes</strong>. Nous
                prenons en charge aussi bien les arrivées à l&apos;aéroport de
                Nice que les départs vers les hôtels, ports, gares et cliniques.
                Nos chauffeurs sont expérimentés et parlent{" "}
                <strong>français et anglais</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Si vous recherchez un{" "}
                <strong className="text-blue-600">taxi à Nice</strong> fiable,
                ponctuel et avec un véhicule haut de gamme, Taxi Nice 06 est le
                bon choix. Nous proposons aussi un service de{" "}
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
                sur la Côte d&apos;Azur : Monaco, Cannes, Antibes,
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
