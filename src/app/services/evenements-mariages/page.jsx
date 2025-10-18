"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";
import {
  Camera,
  CheckCircle,
  Crown,
  Gift,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function EvenementsMariagesPage() {
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
      icon: Heart,
      title: t("events.features.weddings.title"),
      description: t("events.features.weddings.description"),
    },
    {
      icon: Gift,
      title: t("events.features.birthdays.title"),
      description: t("events.features.birthdays.description"),
    },
    {
      icon: Crown,
      title: t("events.features.vipService.title"),
      description: t("events.features.vipService.description"),
    },
    {
      icon: Camera,
      title: t("events.features.photoMemories.title"),
      description: t("events.features.photoMemories.description"),
    },
    {
      icon: Sparkles,
      title: t("events.features.vehicleDecoration.title"),
      description: t("events.features.vehicleDecoration.description"),
    },
    {
      icon: Users,
      title: t("events.features.vipGroups.title"),
      description: t("events.features.vipGroups.description"),
    },
  ];

  const services = [
    {
      name: t("events.services.classicWedding.name"),
      description: t("events.services.classicWedding.description"),
      price: t("events.services.classicWedding.price"),
      features: [
        t("events.services.classicWedding.features.0"),
        t("events.services.classicWedding.features.1"),
        t("events.services.classicWedding.features.2"),
      ],
    },
    {
      name: t("events.services.vipBirthday.name"),
      description: t("events.services.vipBirthday.description"),
      price: t("events.services.vipBirthday.price"),
      features: [
        t("events.services.vipBirthday.features.0"),
        t("events.services.vipBirthday.features.1"),
        t("events.services.vipBirthday.features.2"),
      ],
    },
    {
      name: t("events.services.religiousCeremony.name"),
      description: t("events.services.religiousCeremony.description"),
      price: t("events.services.religiousCeremony.price"),
      features: [
        t("events.services.religiousCeremony.features.0"),
        t("events.services.religiousCeremony.features.1"),
        t("events.services.religiousCeremony.features.2"),
      ],
    },
    {
      name: t("events.services.corporateEvent.name"),
      description: t("events.services.corporateEvent.description"),
      price: t("events.services.corporateEvent.price"),
      features: [
        t("events.services.corporateEvent.features.0"),
        t("events.services.corporateEvent.features.1"),
        t("events.services.corporateEvent.features.2"),
      ],
    },
  ];

  const breadcrumbItems = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: t("events.title"), href: "/services/evenements-mariages" },
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
        <section className="relative py-20 bg-gradient-to-br from-pink-50 to-purple-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {t("events.title")}
                  <span className="block text-pink-600">
                    {t("events.subtitle")}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {t("events.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    className="px-8 py-4 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300 text-center no-underline"
                  >
                    {t("events.cta.bookNow")}
                  </a>
                  <a
                    href="/tarifs"
                    className="px-8 py-4 border-2 border-pink-600 text-pink-600 rounded-xl font-semibold hover:bg-pink-600 hover:text-white transition-colors duration-300 text-center no-underline"
                  >
                    {t("events.cta.viewPrices")}
                  </a>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/hotel-mougins.jpeg"
                  alt="Transport mariage et événements spéciaux"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-pink-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">VIP</div>
                    <div className="text-sm">
                      {t("events.badge.vipService")}
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
                {t("events.features.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("events.features.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-pink-600" />
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
                {t("events.services.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("events.services.subtitle")}
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
                    <span className="text-pink-600 font-bold">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-pink-600 mr-2" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="/reservation"
                    className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors duration-300"
                  >
                    {t("events.cta.bookFormula")} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t("events.testimonials.title")}
              </h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "{t("events.testimonials.quote")}"
                </blockquote>
                <div className="text-gray-600 font-semibold">
                  {t("events.testimonials.author")}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-pink-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {t("events.ctaSection.title")}
              </h2>
              <p className="text-xl text-pink-100 mb-8">
                {t("events.ctaSection.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="px-8 py-4 bg-white text-pink-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  {t("events.ctaSection.bookNow")}
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-pink-600 transition-colors duration-300 no-underline"
                >
                  {t("events.ctaSection.contactUs")}
                </a>
              </div>
              <div className="mt-8 text-pink-100">
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
