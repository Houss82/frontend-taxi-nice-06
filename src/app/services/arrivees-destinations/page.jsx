"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";
import {
  CheckCircle,
  Clock,
  Heart,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function ArriveesDestinationsPage() {
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
      icon: Star,
      title: t("services.arrivals.features.personalizedWelcome.title"),
      description: t(
        "services.arrivals.features.personalizedWelcome.description"
      ),
    },
    {
      icon: Heart,
      title: t("services.arrivals.features.personalizedService.title"),
      description: t(
        "services.arrivals.features.personalizedService.description"
      ),
    },
    {
      icon: Shield,
      title: t("services.arrivals.features.luxuryComfort.title"),
      description: t("services.arrivals.features.luxuryComfort.description"),
    },
    {
      icon: Clock,
      title: t("services.arrivals.features.availability24h.title"),
      description: t("services.arrivals.features.availability24h.description"),
    },
    {
      icon: Users,
      title: t("services.arrivals.features.professionalDriver.title"),
      description: t(
        "services.arrivals.features.professionalDriver.description"
      ),
    },
    {
      icon: MapPin,
      title: t("services.arrivals.features.allDestinations.title"),
      description: t("services.arrivals.features.allDestinations.description"),
    },
  ];

  const services = [
    {
      name: t("services.arrivals.services.trainStation.name"),
      location: t("services.arrivals.services.trainStation.location"),
      description: t("services.arrivals.services.trainStation.description"),
      price: t("services.arrivals.services.trainStation.price"),
    },
    {
      name: t("services.arrivals.services.port.name"),
      location: t("services.arrivals.services.port.location"),
      description: t("services.arrivals.services.port.description"),
      price: t("services.arrivals.services.port.price"),
    },
    {
      name: t("services.arrivals.services.hotel.name"),
      location: t("services.arrivals.services.hotel.location"),
      description: t("services.arrivals.services.hotel.description"),
      price: t("services.arrivals.services.hotel.price"),
    },
    {
      name: t("services.arrivals.services.event.name"),
      location: t("services.arrivals.services.event.location"),
      description: t("services.arrivals.services.event.description"),
      price: t("services.arrivals.services.event.price"),
    },
  ];

  const breadcrumbItems = [
    { name: "Accueil", url: "/" },
    { name: "Services", url: "/services" },
    {
      name: t("services.arrivals.title"),
      url: "/services/arrivees-destinations",
      title: t("services.arrivals.title"),
    },
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
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {t("services.arrivals.title")}
                  <span className="block text-blue-600">
                    {t("services.arrivals.subtitle")}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {t("services.arrivals.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-center no-underline"
                  >
                    {t("services.arrivals.cta.bookWelcome")}
                  </a>
                  <a
                    href="/tarifs"
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 text-center no-underline"
                  >
                    {t("services.arrivals.cta.viewPrices")}
                  </a>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/glc-arrivé.jpeg"
                  alt="Accueil personnalisé avec panneau nominatif"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">VIP</div>
                    <div className="text-sm">
                      {t("services.arrivals.vipBadge")}
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
                {t("services.arrivals.features.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("services.arrivals.features.subtitle")}
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

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t("services.arrivals.services.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("services.arrivals.services.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.name}
                    </h3>
                    <span className="text-blue-600 font-bold">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    {service.location}
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a
                    href="/reservation"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                  >
                    {t("services.arrivals.cta.bookService")} {service.name} →
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
                {t("services.arrivals.process.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("services.arrivals.process.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("services.arrivals.process.steps.contact.title")}
                </h3>
                <p className="text-gray-600">
                  {t("services.arrivals.process.steps.contact.description")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("services.arrivals.process.steps.personalization.title")}
                </h3>
                <p className="text-gray-600">
                  {t(
                    "services.arrivals.process.steps.personalization.description"
                  )}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("services.arrivals.process.steps.welcome.title")}
                </h3>
                <p className="text-gray-600">
                  {t("services.arrivals.process.steps.welcome.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {t("services.arrivals.ctaSection.title")}
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                {t("services.arrivals.ctaSection.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  {t("services.arrivals.ctaSection.button")}
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 no-underline"
                >
                  {t("services.arrivals.ctaSection.contact")}
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
