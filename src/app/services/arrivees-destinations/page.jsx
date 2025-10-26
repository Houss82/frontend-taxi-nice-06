"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
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
  const features = [
    {
      icon: Star,
      title: "Accueil personnalisé",
      description:
        "Votre nom affiché sur un panneau de bienvenue pour une arrivée mémorable",
    },
    {
      icon: Heart,
      title: "Service sur mesure",
      description: "Un service adapté à vos besoins et à vos préférences",
    },
    {
      icon: Shield,
      title: "Confort et luxe",
      description:
        "Véhicules Mercedes haut de gamme avec tout le confort moderne",
    },
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description:
        "Service disponible jour et nuit pour vous accueillir à tout moment",
    },
    {
      icon: Users,
      title: "Chauffeur professionnel",
      description:
        "Chauffeur expérimenté, ponctuel et au service de votre confort",
    },
    {
      icon: MapPin,
      title: "Toutes destinations",
      description: "Service sur toute la Côte d'Azur et alentours",
    },
  ];

  const services = [
    {
      name: "Gare SNCF",
      location: "Nice-Ville, Cannes, Monaco",
      description:
        "Accueil à votre arrivée en train avec prise en charge de vos bagages",
      price: "À partir de 36 €",
    },
    {
      name: "Port de Croisière",
      location: "Nice, Cannes, Monaco",
      description:
        "Service VIP pour vos arrivées de croisière sur la Côte d'Azur",
      price: "À partir de 55 €",
    },
    {
      name: "Hôtels & Résidences",
      location: "Toute la Côte d'Azur",
      description:
        "Accueil personnalisé à la descente de votre hôtel ou résidence",
      price: "Selon distance",
    },
    {
      name: "Événements",
      location: "Nice, Cannes, Monaco",
      description:
        "Service d'accueil pour vos événements (mariages, réceptions, séminaires)",
      price: "Devis sur mesure",
    },
  ];

  const breadcrumbItems = [
    { name: "Services", url: "/services" },
    {
      name: "Arrivées & Destinations",
      url: "/services/arrivees-destinations",
      title: "Arrivées & Destinations",
    },
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
        <section className="relative sm:py-20 bg-gradient-to-br from-blue-50 to-purple-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 pt-10 sm:py-0">
                  Arrivées & Destinations
                  <span className="block text-blue-600">
                    Accueil Personnalisé VIP
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Faites-vous accueillir en toute élégance à votre arrivée sur
                  la Côte d'Azur. Service VIP avec panneau nominatif et prise en
                  charge complète de vos bagages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-center no-underline"
                  >
                    Réserver un accueil VIP
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
                    <div className="text-sm">Service Premium</div>
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
                Nos Avantages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un service premium qui marque votre arrivée sur la Côte d'Azur
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

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Nos Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Accueil personnalisé pour toutes vos arrivées sur la Côte d'Azur
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
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
                    Réserver {service.name} →
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
                Comment ça fonctionne ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un processus simple en 3 étapes pour un accueil parfait
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  1. Contact
                </h3>
                <p className="text-gray-600">
                  Contactez-nous pour réserver votre accueil personnalisé
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  2. Personnalisation
                </h3>
                <p className="text-gray-600">
                  Préparez votre panneau nominatif et vos préférences
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  3. Accueil VIP
                </h3>
                <p className="text-gray-600">
                  Profitez d'un accueil chaleureux à votre arrivée
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
                Prêt pour un accueil VIP ?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Réservez dès maintenant votre service d'accueil personnalisé et
                faites de votre arrivée un moment inoubliable
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
