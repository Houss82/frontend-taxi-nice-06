"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";
import {
  ArrowRight,
  Calendar,
  Car,
  CheckCircle,
  Clock,
  FileText,
  Heart,
  Mail,
  Phone,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function VSLPage() {
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

  const breadcrumbItems = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "VSL", href: "/services/vsl" },
  ];

  const features = [
    {
      icon: Heart,
      title: t("vsl.features.medicalTransport.title"),
      description: t("vsl.features.medicalTransport.description"),
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Shield,
      title: t("vsl.features.trainedDrivers.title"),
      description: t("vsl.features.trainedDrivers.description"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: t("vsl.features.accompaniment.title"),
      description: t("vsl.features.accompaniment.description"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: Clock,
      title: t("vsl.features.availability247.title"),
      description: t("vsl.features.availability247.description"),
      color: "from-purple-500 to-purple-600",
    },
  ];

  const services = [
    {
      title: t("vsl.services.medicalAppointments.title"),
      description: t("vsl.services.medicalAppointments.description"),
      icon: Stethoscope,
      features: [
        t("vsl.services.medicalAppointments.features.0"),
        t("vsl.services.medicalAppointments.features.1"),
        t("vsl.services.medicalAppointments.features.2"),
      ],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      title: t("vsl.services.convalescence.title"),
      description: t("vsl.services.convalescence.description"),
      icon: Car,
      features: [
        t("vsl.services.convalescence.features.0"),
        t("vsl.services.convalescence.features.1"),
        t("vsl.services.convalescence.features.2"),
      ],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      title: t("vsl.services.personalTrips.title"),
      description: t("vsl.services.personalTrips.description"),
      icon: Users,
      features: [
        t("vsl.services.personalTrips.features.0"),
        t("vsl.services.personalTrips.features.1"),
        t("vsl.services.personalTrips.features.2"),
      ],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
    },
    {
      title: t("vsl.services.specialEvents.title"),
      description: t("vsl.services.specialEvents.description"),
      icon: Calendar,
      features: [
        t("vsl.services.specialEvents.features.0"),
        t("vsl.services.specialEvents.features.1"),
        t("vsl.services.specialEvents.features.2"),
      ],
      color: "bg-pink-50 border-pink-200",
      iconColor: "text-pink-600",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: t("vsl.process.step1.title"),
      description: t("vsl.process.step1.description"),
      icon: Phone,
    },
    {
      step: "02",
      title: t("vsl.process.step2.title"),
      description: t("vsl.process.step2.description"),
      icon: FileText,
    },
    {
      step: "03",
      title: t("vsl.process.step3.title"),
      description: t("vsl.process.step3.description"),
      icon: CheckCircle,
    },
    {
      step: "04",
      title: t("vsl.process.step4.title"),
      description: t("vsl.process.step4.description"),
      icon: Car,
    },
  ];

  const requirements = [
    t("vsl.requirements.items.0"),
    t("vsl.requirements.items.1"),
    t("vsl.requirements.items.2"),
    t("vsl.requirements.items.3"),
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/classB-darguignan copie.png"
            alt="VSL Nice - Véhicule Sanitaire Léger - Transport médicalisé"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-4xl">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mr-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-6xl lg:text-8xl font-bold text-white mb-2">
                    {t("vsl.title")}
                  </h1>
                  <p className="text-2xl lg:text-3xl text-pink-300 font-light">
                    {t("vsl.subtitle")}
                  </p>
                </div>
              </div>

              <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full mb-8"></div>

              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-10 max-w-3xl">
                {t("vsl.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="tel:0651683687"
                  className="px-10 py-5 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  {t("vsl.cta.bookVSL")}
                </a>
                <a
                  href="#services"
                  className="px-10 py-5 border-2 border-white text-white rounded-2xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
                >
                  {t("vsl.cta.learnMore")}
                  <ArrowRight className="w-6 h-6 ml-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              {t("vsl.features.title")}
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("vsl.features.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border border-gray-100"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              {t("vsl.services.title")}
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("vsl.services.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${service.color} rounded-3xl p-8 border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-16 h-16 ${service.color.replace(
                      "50",
                      "100"
                    )} rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              {t("vsl.process.title")}
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("vsl.process.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto text-white text-3xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    {step.step}
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 text-pink-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t("vsl.requirements.title")}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t("vsl.requirements.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {requirements.map((requirement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-pink-500" />
                  </div>
                  <span className="text-gray-700 text-lg leading-relaxed">
                    {requirement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            {t("vsl.ctaSection.title")}
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed">
            {t("vsl.ctaSection.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:0651683687"
              className="px-12 py-6 bg-white text-pink-600 rounded-2xl font-bold text-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-6 h-6 mr-3" />
              {t("vsl.cta.callNow")}
            </a>
            <a
              href="mailto:taxiniceca@gmail.com"
              className="px-12 py-6 border-2 border-white text-white rounded-2xl font-bold text-xl hover:bg-white hover:text-pink-600 transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-6 h-6 mr-3" />
              {t("vsl.cta.requestQuote")}
            </a>
          </div>

          <div className="mt-12 text-white/80 text-lg">
            📞 <strong>06 51 68 36 87</strong> | ✉️ taxiniceca@gmail.com
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
