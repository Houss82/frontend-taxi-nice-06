"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";
import {
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Plane,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function TransfertsAeroportPage() {
  const { t, isHydrated } = useLanguage();

  // Attendre que les traductions soient chargées
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }
  const features = [
    {
      icon: Plane,
      title: t("services.airport.features.allDistances.title"),
      description: t("services.airport.features.allDistances.description"),
    },
    {
      icon: Clock,
      title: t("services.airport.features.flightTracking.title"),
      description: t("services.airport.features.flightTracking.description"),
    },
    {
      icon: MapPin,
      title: t("services.airport.features.personalWelcome.title"),
      description: t("services.airport.features.personalWelcome.description"),
    },
    {
      icon: CheckCircle,
      title: t("services.airport.features.punctuality.title"),
      description: t("services.airport.features.punctuality.description"),
    },
    {
      icon: Users,
      title: t("services.airport.features.service247.title"),
      description: t("services.airport.features.service247.description"),
    },
    {
      icon: Shield,
      title: t("services.airport.features.guaranteedSafety.title"),
      description: t("services.airport.features.guaranteedSafety.description"),
    },
  ];

  const destinations = [
    {
      name: "Nice Centre",
      distance: "8 km",
      duration: "15-20 min",
      price: "36€",
    },
    {
      name: "Cannes",
      distance: "32 km",
      duration: "30-40 min",
      price: "90€",
    },
    {
      name: "Monaco",
      distance: "28 km",
      duration: "30-35 min",
      price: "99€",
    },
    {
      name: "Antibes",
      distance: "22 km",
      duration: "25-30 min",
      price: "70€",
    },
    {
      name: "Saint-Tropez",
      distance: "85 km",
      duration: "1h15-1h30",
      price: "280€",
    },
    {
      name: "Menton",
      distance: "45 km",
      duration: "45-50 min",
      price: "110€",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <SEOBreadcrumb
            items={[
              { name: "Accueil", href: "/" },
              { name: "Services", href: "/services" },
              {
                name: "Transferts Aéroport",
                href: "/services/transferts-aeroport",
              },
            ]}
          />
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-cyan-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {t("services.airport.title")}
                  <span className="block text-cyan-600">
                    {t("services.airport.allDistances")}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {t("services.airport.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition-colors duration-300 text-center no-underline"
                  >
                    {t("services.airport.cta.bookNow")}
                  </a>
                  <a
                    href="/tarifs"
                    className="px-8 py-4 border-2 border-cyan-600 text-cyan-600 rounded-xl font-semibold hover:bg-cyan-600 hover:text-white transition-colors duration-300 text-center no-underline"
                  >
                    {t("services.airport.cta.viewPrices")}
                  </a>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/aéro-arrivé.jpeg"
                  alt="Transfert aéroport Nice avec accueil nominatif"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm">Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Service Transfert Aéroport Premium
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Votre tranquillité d'esprit pour tous vos déplacements aéroport
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Destinations Populaires
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tarifs fixes et transparents pour toutes vos destinations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {destination.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {destination.distance}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {destination.duration}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-600 mb-4">
                    {destination.price}
                  </div>
                  <a
                    href="/reservation"
                    className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors duration-300"
                  >
                    {t("services.airport.cta.bookToDestination")}{" "}
                    {destination.name} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t("services.airport.howItWorks.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("services.airport.howItWorks.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("services.airport.howItWorks.steps.reservation.title")}
                </h3>
                <p className="text-gray-600">
                  {t(
                    "services.airport.howItWorks.steps.reservation.description"
                  )}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("services.airport.howItWorks.steps.flightTracking.title")}
                </h3>
                <p className="text-gray-600">
                  {t(
                    "services.airport.howItWorks.steps.flightTracking.description"
                  )}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("services.airport.howItWorks.steps.welcome.title")}
                </h3>
                <p className="text-gray-600">
                  {t("services.airport.howItWorks.steps.welcome.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cyan-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {t("services.airport.ctaSection.title")}
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                {t("services.airport.ctaSection.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  {t("services.airport.ctaSection.button")}
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-300 no-underline"
                >
                  {t("services.airport.cta.contactUs")}
                </a>
              </div>
              <div className="mt-8 text-cyan-100">
                📞 <strong>06 51 68 36 87</strong> | ✉️ taxiniceca@gmail.com
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
