"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";
import {
  Award,
  Car,
  CheckCircle,
  Shield,
  Thermometer,
  Users,
  Wifi,
  Wrench,
} from "lucide-react";
import Image from "next/image";

export default function FlotteRecentePage() {
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
      icon: Car,
      title: t("fleetRecent.features.recentFleet.title"),
      description: t("fleetRecent.features.recentFleet.description"),
    },
    {
      icon: Wrench,
      title: t("fleetRecent.features.regularMaintenance.title"),
      description: t("fleetRecent.features.regularMaintenance.description"),
    },
    {
      icon: Thermometer,
      title: t("fleetRecent.features.modernComfort.title"),
      description: t("fleetRecent.features.modernComfort.description"),
    },
    {
      icon: Shield,
      title: t("fleetRecent.features.safety.title"),
      description: t("fleetRecent.features.safety.description"),
    },
    {
      icon: Wifi,
      title: t("fleetRecent.features.technology.title"),
      description: t("fleetRecent.features.technology.description"),
    },
    {
      icon: Award,
      title: t("fleetRecent.features.premiumQuality.title"),
      description: t("fleetRecent.features.premiumQuality.description"),
    },
  ];

  const vehicles = [
    {
      name: t("fleetRecent.vehicles.mercedesGLC.name"),
      capacity: t("fleetRecent.vehicles.mercedesGLC.capacity"),
      image: "/imageGLC.png",
      description: t("fleetRecent.vehicles.mercedesGLC.description"),
      features: [
        t("fleetRecent.vehicles.mercedesGLC.features.0"),
        t("fleetRecent.vehicles.mercedesGLC.features.1"),
        t("fleetRecent.vehicles.mercedesGLC.features.2"),
        t("fleetRecent.vehicles.mercedesGLC.features.3"),
      ],
    },
    {
      name: t("fleetRecent.vehicles.vanPremium.name"),
      capacity: t("fleetRecent.vehicles.vanPremium.capacity"),
      image: "/image-van.png",
      description: t("fleetRecent.vehicles.vanPremium.description"),
      features: [
        t("fleetRecent.vehicles.vanPremium.features.0"),
        t("fleetRecent.vehicles.vanPremium.features.1"),
        t("fleetRecent.vehicles.vanPremium.features.2"),
        t("fleetRecent.vehicles.vanPremium.features.3"),
      ],
    },
  ];

  const maintenance = [
    {
      title: t("fleetRecent.maintenance.technicalChecks.title"),
      frequency: t("fleetRecent.maintenance.technicalChecks.frequency"),
      description: t("fleetRecent.maintenance.technicalChecks.description"),
    },
    {
      title: t("fleetRecent.maintenance.preventiveMaintenance.title"),
      frequency: t("fleetRecent.maintenance.preventiveMaintenance.frequency"),
      description: t(
        "fleetRecent.maintenance.preventiveMaintenance.description"
      ),
    },
    {
      title: t("fleetRecent.maintenance.professionalCleaning.title"),
      frequency: t("fleetRecent.maintenance.professionalCleaning.frequency"),
      description: t(
        "fleetRecent.maintenance.professionalCleaning.description"
      ),
    },
    {
      title: t("fleetRecent.maintenance.qualityControl.title"),
      frequency: t("fleetRecent.maintenance.qualityControl.frequency"),
      description: t("fleetRecent.maintenance.qualityControl.description"),
    },
  ];

  const breadcrumbItems = [
    { name: "Accueil", url: "/" },
    { name: "Services", url: "/services" },
    { name: t("fleetRecent.title"), url: "/services/flotte-recente" },
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
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {t("fleetRecent.title")}
                  <span className="block text-blue-600">
                    {t("fleetRecent.subtitle")}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {t("fleetRecent.description")}
                </p>

                {/* Section pourquoi choisir notre flotte */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t("fleetRecent.heroFeatures.title")}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        {t("fleetRecent.heroFeatures.item1")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        {t("fleetRecent.heroFeatures.item2")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        {t("fleetRecent.heroFeatures.item3")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        {t("fleetRecent.heroFeatures.item4")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-center no-underline"
                  >
                    {t("fleetRecent.cta.bookNow")}
                  </a>
                  <a
                    href="/tarifs"
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 text-center no-underline"
                  >
                    {t("fleetRecent.cta.viewPrices")}
                  </a>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/intérieur-van.jpeg"
                  alt="Flotte moderne et entretenue"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm">
                      {t("fleetRecent.badge.maxYears")}
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
                {t("fleetRecent.features.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("fleetRecent.features.subtitle")}
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

        {/* Vehicles Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t("fleetRecent.vehicles.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("fleetRecent.vehicles.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {vehicles.map((vehicle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {vehicle.name}
                    </h3>
                    <div className="flex items-center text-blue-600 mb-3">
                      <Users className="w-5 h-5 mr-2" />
                      {vehicle.capacity}
                    </div>
                    <p className="text-gray-600 mb-4">{vehicle.description}</p>
                    <div className="space-y-2 mb-6">
                      {vehicle.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                          <span className="text-gray-600 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="/reservation"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                    >
                      {t("fleetRecent.cta.book")} {vehicle.name} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t("fleetRecent.maintenance.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("fleetRecent.maintenance.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {maintenance.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <div className="text-blue-600 font-bold mb-3">
                    {item.frequency}
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
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
                {t("fleetRecent.ctaSection.title")}
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                {t("fleetRecent.ctaSection.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  {t("fleetRecent.ctaSection.bookNow")}
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 no-underline"
                >
                  {t("fleetRecent.ctaSection.contactUs")}
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
