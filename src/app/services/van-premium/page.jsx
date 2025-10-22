"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { Car, Clock, Shield, Thermometer, Users, Wifi } from "lucide-react";
import Image from "next/image";

export default function VanPremiumPage() {
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
      icon: Users,
      title: t("vanPremium.features.upTo8Passengers.title"),
      description: t("vanPremium.features.upTo8Passengers.description"),
    },
    {
      icon: Car,
      title: t("vanPremium.features.mercedesRecent.title"),
      description: t("vanPremium.features.mercedesRecent.description"),
    },
    {
      icon: Thermometer,
      title: t("vanPremium.features.airConditioning.title"),
      description: t("vanPremium.features.airConditioning.description"),
    },
    {
      icon: Wifi,
      title: t("vanPremium.features.freeWifi.title"),
      description: t("vanPremium.features.freeWifi.description"),
    },
    {
      icon: Shield,
      title: t("vanPremium.features.guaranteedSafety.title"),
      description: t("vanPremium.features.guaranteedSafety.description"),
    },
    {
      icon: Clock,
      title: t("vanPremium.features.available247.title"),
      description: t("vanPremium.features.available247.description"),
    },
  ];

  const useCases = [
    {
      title: t("vanPremium.useCases.airportTransfers.title"),
      description: t("vanPremium.useCases.airportTransfers.description"),
      price: t("vanPremium.useCases.airportTransfers.price"),
    },
    {
      title: t("vanPremium.useCases.rivieraExcursions.title"),
      description: t("vanPremium.useCases.rivieraExcursions.description"),
      price: t("vanPremium.useCases.rivieraExcursions.price"),
    },
    {
      title: t("vanPremium.useCases.eventsWeddings.title"),
      description: t("vanPremium.useCases.eventsWeddings.description"),
      price: t("vanPremium.useCases.eventsWeddings.price"),
    },
    {
      title: t("vanPremium.useCases.corporateOutings.title"),
      description: t("vanPremium.useCases.corporateOutings.description"),
      price: t("vanPremium.useCases.corporateOutings.price"),
    },
  ];

  const breadcrumbItems = [
    { name: "Accueil", url: "/" },
    { name: "Services", url: "/services" },
    { name: t("vanPremium.title"), url: "/services/van-premium" },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {t("vanPremium.title")}
                  <span className="block text-blue-600">
                    {t("vanPremium.subtitle")}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {t("vanPremium.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-center no-underline"
                  >
                    {t("vanPremium.cta.bookNow")}
                  </a>
                  <a
                    href="/tarifs"
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 text-center no-underline"
                  >
                    {t("vanPremium.cta.viewPrices")}
                  </a>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/van-aéro.jpeg"
                  alt="Van Premium Mercedes pour transport de groupe"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-sm">
                      {t("vanPremium.badge.maxPassengers")}
                    </div>
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
                {t("vanPremium.features.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("vanPremium.features.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
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

        {/* Use Cases Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t("vanPremium.useCases.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("vanPremium.useCases.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {useCase.title}
                    </h3>
                    <span className="text-blue-600 font-bold">
                      {useCase.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <a
                    href="/reservation"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                  >
                    {t("vanPremium.cta.book")} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {t("vanPremium.ctaSection.title")}
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                {t("vanPremium.ctaSection.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  {t("vanPremium.ctaSection.bookNow")}
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 no-underline"
                >
                  {t("vanPremium.ctaSection.contactUs")}
                </a>
              </div>
              <div className="mt-8 text-blue-100">
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
