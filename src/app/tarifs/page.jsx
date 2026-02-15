import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import PricingTable from "@/components/PricingTable.jsx";
import {
  ArrowLeft,
  Car,
  Truck,
  Euro,
  MapPin,
  Clock,
  Route,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

export default function TarifsPage({ searchParams }) {
  const vehicleType = searchParams?.vehicle || "glc";

  return (
    <div className="min-h-screen bg-gray-50 mt-20 sm:mt-0">
      {/* Navbar */}
      <Navbar />

      {/* Contenu principal */}
      <div className="py-8">
        {/* Boutons de navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 max-w-5xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-gray-100 border border-blue-500 hover:bg-gray-200 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour à l'accueil</span>
          </Link>

          {/* Bouton pour basculer entre véhicules */}
          <Link
            href={`/tarifs?vehicle=${vehicleType === "glc" ? "van" : "glc"}`}
            className="inline-flex items-center space-x-2 bg-primary hover:bg-primaryDark text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            {vehicleType === "glc" ? (
              <>
                <Truck className="w-5 h-5" />
                <span>Voir Van Premium</span>
              </>
            ) : (
              <>
                <Car className="w-5 h-5" />
                <span>Voir Mercedes GLC</span>
              </>
            )}
          </Link>
        </div>

        <div className="max-w-6xl mx-auto w-full px-4">
          {/* H1 SEO Optimisé */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Prix Taxi Nice : Tarifs et Estimation des Courses
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primaryDark rounded-full mx-auto"></div>
          </div>

          {/* Bloc SEO EN HAUT - CRITIQUE */}
          <section className="mb-8 bg-gradient-to-br from-primary/5 via-white to-blue-50 rounded-2xl p-6 md:p-10 shadow-xl border-t-4 border-primary relative overflow-hidden">
            {/* Élément décoratif */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-24 -mt-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primaryDark rounded-full flex items-center justify-center">
                  <Euro className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Tarifs Transparents
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
                Vous cherchez le <strong className="text-primary">prix d'un taxi à Nice</strong> ou les{" "}
                <strong className="text-primary">tarifs taxi Nice</strong> ? Découvrez nos tarifs transparents
                pour tous vos déplacements depuis Nice vers l'aéroport, la gare ou
                toute la Côte d'Azur.
              </p>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Le <strong className="text-primary">tarif taxi à Nice</strong> dépend de la distance, de
                l'heure (jour ou nuit) et de la destination. Nos prix sont fixes et
                connus à l'avance pour éviter toute surprise.
              </p>
            </div>
          </section>

          {/* Titre du tableau */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {vehicleType === "glc"
              ? "Nos Tarifs Mercedes GLC Premium"
              : "Nos Tarifs Van Premium 8 Places"}
          </h2>

          {/* Tableau des tarifs */}
          <PricingTable vehicleType={vehicleType} />

          {/* Bloc SEO - Combien coûte un taxi à Nice */}
          <section className="mt-12 bg-gradient-to-br from-green-50 via-white to-blue-50 rounded-2xl p-6 md:p-10 shadow-xl border-l-4 border-green-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Euro className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Combien coûte un taxi à Nice ?
              </h2>
            </div>
            
            <div className="bg-white rounded-xl p-6 mb-6 border-2 border-green-100">
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Le <strong className="text-primary text-xl">prix d'un taxi à Nice</strong> commence à partir de{" "}
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full font-bold text-lg">
                  <Euro className="w-4 h-4" />
                  8
                </span>{" "}
                minimum. Par exemple :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Prix taxi Nice Centre", price: "36", icon: MapPin, color: "from-blue-400 to-blue-600" },
                  { label: "Prix taxi Nice → Aéroport", price: "32", icon: Route, color: "from-purple-400 to-purple-600" },
                  { label: "Tarif taxi Nice → Antibes", price: "76", icon: MapPin, color: "from-orange-400 to-orange-600" },
                  { label: "Tarif taxi Nice → Cannes", price: "89", icon: MapPin, color: "from-pink-400 to-pink-600" },
                  { label: "Prix taxi Nice → Monaco", price: "99", icon: MapPin, color: "from-red-400 to-red-600" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-semibold text-gray-800 mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-600">à partir de</p>
                      </div>
                      <div className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-primary to-primaryDark text-white rounded-lg font-bold text-lg shadow-md">
                        <Euro className="w-4 h-4" />
                        {item.price}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-6 py-4 bg-green-100 rounded-xl border-l-4 border-green-500">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <p className="text-lg text-gray-800 leading-relaxed">
                Ces <strong className="text-green-800">tarifs taxi Nice</strong> sont fixes et garantis.
              </p>
            </div>
          </section>

          {/* Bloc SEO - Fonctionnement des prix */}
          <section className="mt-8 bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-2xl p-6 md:p-10 shadow-xl border-t-4 border-purple-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Route className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Tarif taxi Nice : fonctionnement des prix
              </h2>
            </div>
            
            <p className="text-lg text-gray-800 leading-relaxed mb-8">
              Le <strong className="text-primary text-xl">tarif taxi Nice</strong> est calculé selon plusieurs
              facteurs :
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Distance parcourue", icon: Route, color: "from-blue-400 to-blue-600" },
                { label: "Heure du trajet (jour ou nuit)", icon: Clock, color: "from-orange-400 to-orange-600" },
                { label: "Conditions de circulation", icon: MapPin, color: "from-green-400 to-green-600" },
                { label: "Suppléments éventuels", icon: Euro, color: "from-purple-400 to-purple-600" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-5 bg-white rounded-xl border-2 border-gray-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-gray-800">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
            
            <div className="flex items-center gap-3 px-6 py-4 bg-purple-100 rounded-xl border-l-4 border-purple-500">
              <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <p className="text-lg text-gray-800 leading-relaxed">
                Nos <strong className="text-purple-800">prix taxi Nice</strong> sont transparents et conformes à
                la réglementation officielle.
              </p>
            </div>
          </section>

          {/* FAQ SEO */}
          <section className="mt-8 bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-2xl p-6 md:p-10 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <HelpCircle className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                FAQ – Prix Taxi Nice
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Quel est le prix d'un taxi à Nice ?",
                  answer: "Le prix d'un taxi à Nice commence à partir de 8 € et dépend de la distance.",
                },
                {
                  question: "Combien coûte un taxi Nice → Aéroport ?",
                  answer: "Le tarif taxi Nice vers l'aéroport commence à partir de 32 €.",
                },
                {
                  question: "Les tarifs taxi Nice sont-ils fixes ?",
                  answer: "Oui, nos prix taxi Nice sont fixes et annoncés à l'avance.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border-l-4 border-indigo-500 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-lg text-gray-800 leading-relaxed ml-11">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Tarifs Taxi Nice",
            provider: {
              "@type": "LocalBusiness",
              name: "Taxi Nice 06",
              areaServed: {
                "@type": "City",
                name: "Nice",
              },
            },
            areaServed: {
              "@type": "City",
              name: "Nice",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
            },
          }),
        }}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
