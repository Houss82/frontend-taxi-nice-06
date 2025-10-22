"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";
import {
  Camera,
  CheckCircle,
  Clock,
  Compass,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function ExcursionsDecouvertesPage() {
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
      icon: MapPin,
      title: t("excursions.features.personalizedRoutes.title"),
      description: t("excursions.features.personalizedRoutes.description"),
    },
    {
      icon: Users,
      title: t("excursions.features.localGuide.title"),
      description: t("excursions.features.localGuide.description"),
    },
    {
      icon: Camera,
      title: t("excursions.features.photoStops.title"),
      description: t("excursions.features.photoStops.description"),
    },
    {
      icon: Compass,
      title: t("excursions.features.discovery.title"),
      description: t("excursions.features.discovery.description"),
    },
    {
      icon: Clock,
      title: t("excursions.features.flexibility.title"),
      description: t("excursions.features.flexibility.description"),
    },
    {
      icon: Star,
      title: t("excursions.features.uniqueExperience.title"),
      description: t("excursions.features.uniqueExperience.description"),
    },
  ];

  const destinations = [
    {
      name: t("excursions.destinations.monaco.name"),
      duration: t("excursions.destinations.monaco.duration"),
      price: t("excursions.destinations.monaco.price"),
      image: "/monaco.jpg",
      highlights: [
        t("excursions.destinations.monaco.highlights.0"),
        t("excursions.destinations.monaco.highlights.1"),
        t("excursions.destinations.monaco.highlights.2"),
        t("excursions.destinations.monaco.highlights.3"),
      ],
    },
    {
      name: t("excursions.destinations.cannes.name"),
      duration: t("excursions.destinations.cannes.duration"),
      price: t("excursions.destinations.cannes.price"),
      image: "/cannes.webp",
      highlights: [
        t("excursions.destinations.cannes.highlights.0"),
        t("excursions.destinations.cannes.highlights.1"),
        t("excursions.destinations.cannes.highlights.2"),
        t("excursions.destinations.cannes.highlights.3"),
      ],
    },
    {
      name: t("excursions.destinations.saintTropez.name"),
      duration: t("excursions.destinations.saintTropez.duration"),
      price: t("excursions.destinations.saintTropez.price"),
      image: "/saint-tropez.jpg",
      highlights: [
        t("excursions.destinations.saintTropez.highlights.0"),
        t("excursions.destinations.saintTropez.highlights.1"),
        t("excursions.destinations.saintTropez.highlights.2"),
        t("excursions.destinations.saintTropez.highlights.3"),
      ],
    },
    {
      name: t("excursions.destinations.ezeTurbie.name"),
      duration: t("excursions.destinations.ezeTurbie.duration"),
      price: t("excursions.destinations.ezeTurbie.price"),
      image: "/eze.jpg",
      highlights: [
        t("excursions.destinations.ezeTurbie.highlights.0"),
        t("excursions.destinations.ezeTurbie.highlights.1"),
        t("excursions.destinations.ezeTurbie.highlights.2"),
      ],
    },
  ];

  const breadcrumbItems = [
    { name: "Accueil", url: "/" },
    { name: "Services", url: "/services" },
    { name: t("excursions.title"), url: "/services/excursions-decouvertes" },
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
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-green-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {t("excursions.title")}
                  <span className="block text-blue-600">
                    {t("excursions.subtitle")}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {t("excursions.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-center no-underline"
                  >
                    {t("excursions.cta.bookExcursion")}
                  </a>
                  <a
                    href="/tarifs"
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 text-center no-underline"
                  >
                    {t("excursions.cta.viewPrices")}
                  </a>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/foret-glc.jpeg"
                  alt="Excursions Côte d'Azur personnalisées"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm">
                      {t("excursions.badge.personalized")}
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
                {t("excursions.features.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("excursions.features.subtitle")}
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

        {/* Destinations Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t("excursions.destinations.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("excursions.destinations.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {destination.duration}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {destination.price}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {destination.name}
                    </h3>
                    <div className="space-y-2 mb-4">
                      {destination.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                          <span className="text-gray-600 text-sm">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="/reservation"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                    >
                      {t("excursions.cta.bookDestination")} {destination.name} →
                    </a>
                  </div>
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
                {t("excursions.ctaSection.title")}
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                {t("excursions.ctaSection.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  {t("excursions.ctaSection.bookExcursion")}
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 no-underline"
                >
                  {t("excursions.ctaSection.contactUs")}
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
