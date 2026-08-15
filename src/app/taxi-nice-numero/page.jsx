import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import AnimatedButton from "@/components/taxi-numero/AnimatedButton.jsx";
import AnimatedCard from "@/components/taxi-numero/AnimatedCard.jsx";
import AnimatedServiceBox from "@/components/taxi-numero/AnimatedServiceBox.jsx";
import AnimatedServiceCard from "@/components/taxi-numero/AnimatedServiceCard.jsx";
import { Clock, Phone } from "lucide-react";
import Link from "next/link";

export default function TaxiNiceNumeroPage() {
  const breadcrumbItems = [
    {
      name: "Taxi Nice Numéro",
      url: "/taxi-nice-numero",
      title: "Taxi Nice Numéro - 06 51 68 36 87",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b mt-20 sm:mt-0">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primaryDark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Taxi Nice Numéro –{" "}
            <span className="whitespace-nowrap">06 51 68 36 87</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Appelez maintenant pour réserver votre taxi à Nice
          </p>
        </div>
      </section>

      {/* Bloc SEO Principal */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-4">
          <AnimatedCard>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-t-4 border-primary relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-32 -mt-32"></div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-primaryDark rounded-full mb-6 shadow-lg">
                  <Phone className="w-12 h-12 text-white" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Numéro Taxi Nice – Réservation immédiate
                </h2>

                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primaryDark rounded-full mx-auto mb-8"></div>

                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
                  Appelez maintenant le{" "}
                  <a
                    href="tel:+33651683687"
                    className="text-primary hover:text-primaryDark font-bold text-3xl md:text-4xl transition-colors underline decoration-2 underline-offset-4 whitespace-nowrap inline-block"
                  >
                    06 51 68 36 87
                  </a>{" "}
                  pour réserver votre taxi à Nice.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Réponse immédiate",
                    "Disponible 24h/24",
                    "Service professionnel",
                    "Transfert aéroport Nice",
                  ].map((item, index) => (
                    <AnimatedServiceCard
                      key={index}
                      item={item}
                      index={index}
                    />
                  ))}
                </div>

                <AnimatedButton
                  href="tel:+33651683687"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-primaryDark text-white rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Phone className="w-7 h-7" />
                  Appeler Taxi Nice 06
                </AnimatedButton>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Section SEO - Quel est le numéro */}
      <section className="py-16 bg-gradient-to-br from-white via-blue-50/50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <AnimatedCard>
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Quel est le numéro de taxi à Nice ?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primaryDark rounded-full mx-auto mb-8"></div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-l-4 border-primary">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 text-center">
                Le numéro officiel de Taxi Nice 06 est le{" "}
                <span className="text-primary font-bold text-3xl md:text-4xl whitespace-nowrap inline-block">
                  06 51 68 36 87
                </span>
                . Appelez maintenant pour une prise en charge rapide.
              </p>
              <div className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-100 rounded-full w-fit mx-auto">
                <Clock className="w-5 h-5 text-blue-600" />
                <p className="text-lg text-blue-800 font-semibold">
                  Service disponible 24 / 7
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-6 text-center">
                Notre service de taxi à Nice répond à tous vos besoins de
                transport :{" "}
                <Link
                  href="/services/taxi-aeroport-nice"
                  className="text-primary font-semibold underline underline-offset-4 hover:text-primaryDark"
                >
                  trajets vers l&apos;aéroport
                </Link>
                , trajets vers la gare, déplacements dans Nice et sur toute la
                Côte d&apos;Azur.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedCard>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Pourquoi appeler le{" "}
                <span className="whitespace-nowrap">06 51 68 36 87</span> ?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primaryDark rounded-full mx-auto"></div>
            </div>
          </AnimatedCard>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Réservation rapide",
                description:
                  "Réservez votre taxi en quelques secondes par téléphone. Réponse immédiate et confirmation instantanée.",
                icon: "⚡",
                color: "from-yellow-400 to-orange-500",
              },
              {
                title: "Service 24/7",
                description:
                  "Disponible jour et nuit, week-ends et jours fériés inclus. Votre taxi à Nice toujours à votre service.",
                icon: "🕐",
                color: "from-blue-400 to-blue-600",
              },
              {
                title: "Transferts aéroport",
                description:
                  "Service dédié pour vos transferts vers et depuis l'aéroport Nice Côte d'Azur avec suivi de vol.",
                icon: "✈️",
                color: "from-green-400 to-green-600",
              },
              {
                title: "Toute la Côte d'Azur",
                description:
                  "Trajets vers Monaco, Cannes, Antibes, Menton et toutes les destinations de la Riviera.",
                icon: "🌴",
                color: "from-purple-400 to-purple-600",
              },
              {
                title: "Taxi conventionné CPAM",
                description:
                  "Transport médical conventionné CPAM (VSL) avec prise en charge par l'Assurance Maladie. Chauffeurs formés et véhicules agréés.",
                icon: "🏥",
                color: "from-pink-400 to-pink-600",
              },
              {
                title: "Trajets longues distances",
                description:
                  "Transport longue distance vers toute la France. Confort optimal, véhicules récents et chauffeurs expérimentés pour vos déplacements interurbains.",
                icon: "🛣️",
                color: "from-indigo-400 to-indigo-600",
              },
            ].map((service, index) => (
              <AnimatedServiceBox key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primaryDark to-primary">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <AnimatedCard>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Appelez maintenant le{" "}
              <span className="whitespace-nowrap">06 51 68 36 87</span>
            </h2>
            <div className="w-24 h-1 bg-white/50 rounded-full mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Service disponible immédiatement pour toutes vos réservations de
              taxi à Nice
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <AnimatedButton
                href="tel:+33651683687"
                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-white text-primary rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Phone className="w-7 h-7" />
                Appeler maintenant
              </AnimatedButton>
              <AnimatedButton
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-12 py-6 border-2 border-white text-white rounded-xl font-bold text-xl hover:bg-white hover:text-primary transition-all duration-300 shadow-lg"
              >
                Autres moyens de contact
              </AnimatedButton>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Taxi Nice 06",
            telephone: "+33651683687",
            areaServed: {
              "@type": "City",
              name: "Nice",
            },
            url: "https://taxi-nice-06.com",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            ],
          }),
        }}
      />

      <Footer />
    </div>
  );
}
