"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { Award, Briefcase, Clock, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";

export default function TransfertsEvenementsPage() {
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
      title: t("transfersEvents.features.eventService.title"),
      description: t("transfersEvents.features.eventService.description"),
    },
    {
      icon: Award,
      title: t("transfersEvents.features.uniformDriver.title"),
      description: t("transfersEvents.features.uniformDriver.description"),
    },
    {
      icon: Clock,
      title: t("transfersEvents.features.punctuality.title"),
      description: t("transfersEvents.features.punctuality.description"),
    },
    {
      icon: Star,
      title: t("transfersEvents.features.prestige.title"),
      description: t("transfersEvents.features.prestige.description"),
    },
    {
      icon: Briefcase,
      title: t("transfersEvents.features.corporateBilling.title"),
      description: t("transfersEvents.features.corporateBilling.description"),
    },
    {
      icon: MapPin,
      title: t("transfersEvents.features.regionalCoverage.title"),
      description: t("transfersEvents.features.regionalCoverage.description"),
    },
  ];

  const events = [
    {
      name: t("transfersEvents.events.mipim.name"),
      location: t("transfersEvents.events.mipim.location"),
      period: t("transfersEvents.events.mipim.period"),
      description: t("transfersEvents.events.mipim.description"),
      image: "/mipim.jpg",
    },
    {
      name: t("transfersEvents.events.cannesFestival.name"),
      location: t("transfersEvents.events.cannesFestival.location"),
      period: t("transfersEvents.events.cannesFestival.period"),
      description: t("transfersEvents.events.cannesFestival.description"),
      image: "/festivale.jpg",
    },
    {
      name: t("transfersEvents.events.lionsInternational.name"),
      location: t("transfersEvents.events.lionsInternational.location"),
      period: t("transfersEvents.events.lionsInternational.period"),
      description: t("transfersEvents.events.lionsInternational.description"),
      image: "/lions.jpg",
    },
    {
      name: t("transfersEvents.events.monacoYachtShow.name"),
      location: t("transfersEvents.events.monacoYachtShow.location"),
      period: t("transfersEvents.events.monacoYachtShow.period"),
      description: t("transfersEvents.events.monacoYachtShow.description"),
      image: "/monaco-yacht-show.jpg",
    },
  ];

  const breadcrumbItems = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    {
      name: t("transfersEvents.title") + " " + t("transfersEvents.subtitle"),
      href: "/services/transferts-evenements",
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
        <section className="relative py-20 bg-gradient-to-br from-cyan-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {t("transfersEvents.title")}
                  <span className="block text-cyan-600">
                    {t("transfersEvents.subtitle")}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {t("transfersEvents.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition-colors duration-300 text-center no-underline"
                  >
                    {t("transfersEvents.cta.bookNow")}
                  </a>
                  <a
                    href="/tarifs"
                    className="px-8 py-4 border-2 border-cyan-600 text-cyan-600 rounded-xl font-semibold hover:bg-cyan-600 hover:text-white transition-colors duration-300 text-center no-underline"
                  >
                    {t("transfersEvents.cta.viewPrices")}
                  </a>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/majéstic.jpeg"
                  alt="Service transfert événements professionnel"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm">
                      {t("transfersEvents.badge.service247")}
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
                {t("transfersEvents.features.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("transfersEvents.features.subtitle")}
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

        {/* Events Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t("transfersEvents.events.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("transfersEvents.events.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {event.period}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <a
                      href="/reservation"
                      className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors duration-300"
                    >
                      {t("transfersEvents.cta.bookForEvent")} {event.name} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cyan-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {t("transfersEvents.ctaSection.title")}
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                {t("transfersEvents.ctaSection.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  {t("transfersEvents.ctaSection.requestQuote")}
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-300 no-underline"
                >
                  {t("transfersEvents.ctaSection.contactUs")}
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
