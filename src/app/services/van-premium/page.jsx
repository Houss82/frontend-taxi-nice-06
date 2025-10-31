"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { Car, Clock, Shield, Thermometer, Users, Wifi } from "lucide-react";
import Image from "next/image";

export default function VanPremiumPage() {
  const features = [
    {
      icon: Users,
      title: "Jusqu'à 8 Passagers",
      description: "Véhicule spacieux idéal pour les familles et les groupes",
    },
    {
      icon: Car,
      title: "Mercedes Récent",
      description: "Van Mercedes haut de gamme de moins de 3 ans",
    },
    {
      icon: Thermometer,
      title: "Climatisation",
      description: "Climatisation multi-zones pour le confort de tous",
    },
    {
      icon: Wifi,
      title: "WiFi Gratuit",
      description: "Connexion WiFi disponible pour vos trajets",
    },
    {
      icon: Shield,
      title: "Sécurité Garantie",
      description:
        "Véhicule moderne équipé des dernières technologies de sécurité",
    },
    {
      icon: Clock,
      title: "Disponible 24/7",
      description: "Service disponible jour et nuit, 7j/7",
    },
  ];

  const useCases = [
    {
      title: "Transferts Aéroport",
      description: "Transport de groupe vers l'aéroport Nice Côte d'Azur",
      price: "À partir de 100€",
    },
    {
      title: "Excursions Côte d'Azur",
      description: "Découverte de Monaco, Cannes, Saint-Tropez en groupe",
      price: "À partir de 150€",
    },
    {
      title: "Événements & Mariages",
      description: "Transport VIP pour vos événements spéciaux",
      price: "À partir de 180€",
    },
    {
      title: "Sorties d'Entreprise",
      description: "Transport professionnel pour vos équipes",
      price: "Sur devis",
    },
  ];

  const breadcrumbItems = [
    { name: "Services", url: "/services" },
    { name: "Van Premium", url: "/services/van-premium" },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white border-b mt-20 sm:mt-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative sm:py-20 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 pt-10 sm:py-0">
                  Van Premium
                  <span className="block text-blue-600">Mercedes-Benz</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Van Mercedes haut de gamme pouvant accueillir jusqu'à 8
                  passagers. Idéal pour les groupes, familles nombreuses et
                  événements. Confort et espace pour tous vos trajets.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-center no-underline"
                  >
                    Réserver maintenant
                  </a>
                  <a
                    href="/tarifs"
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 text-center no-underline"
                  >
                    Voir les tarifs
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
                  quality={85}
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-sm">Passagers</div>
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
                Caractéristiques
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un véhicule premium au service de vos besoins de transport
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
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
                Cas d'Utilisation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Idéal pour tous vos besoins de transport en groupe
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
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
                    Réserver →
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
                Voyagez en Groupe
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Réservez votre van premium et profitez d'un transport
                confortable pour 8 personnes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  Réserver maintenant
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 no-underline"
                >
                  Nous contacter
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
