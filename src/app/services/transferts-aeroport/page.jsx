"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
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
  const features = [
    {
      icon: Plane,
      title: "Toutes Distances",
      description:
        "De Nice Centre à Saint-Tropez, nous couvrons toute la Côte d'Azur",
    },
    {
      icon: Clock,
      title: "Suivi de Vol",
      description:
        "Nous adaptons nos horaires en fonction des retards de votre vol",
    },
    {
      icon: MapPin,
      title: "Accueil Personnalisé",
      description: "Votre nom sur un panneau de bienvenue à votre arrivée",
    },
    {
      icon: CheckCircle,
      title: "Ponctualité Garantie",
      description: "Chauffeur professionnel au rendez-vous à l'heure",
    },
    {
      icon: Users,
      title: "Service 24/7",
      description: "Disponible jour et nuit, 7j/7 pour tous vos vols",
    },
    {
      icon: Shield,
      title: "Sécurité Garantie",
      description: "Véhicules récents et assurances complètes",
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
    <div>
      <Navbar />
      <div className="bg-white border-b mt-20 sm:mt-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <SEOBreadcrumb
            items={[
              { name: "Services", url: "/services" },
              {
                name: "Transferts Aéroport",
                url: "/services/transferts-aeroport",
              },
            ]}
          />
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative sm:py-20 bg-gradient-to-br from-cyan-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 pt-10 sm:py-0">
                  Transferts Aéroport
                  <span className="block text-cyan-600">
                    Nice & Côte d'Azur
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Service de transfert professionnel depuis et vers l'aéroport
                  Nice Côte d'Azur. Chauffeur avec panneau nominatif, suivi de
                  vol et service 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition-colors duration-300 text-center no-underline"
                  >
                    Réserver maintenant
                  </a>
                  <a
                    href="/tarifs"
                    className="px-8 py-4 border-2 border-cyan-600 text-cyan-600 rounded-xl font-semibold hover:bg-cyan-600 hover:text-white transition-colors duration-300 text-center no-underline"
                  >
                    Voir les tarifs
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
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
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
                  className="bg-gradient-to-br from-white to-cyan-50 rounded-xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow duration-300"
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
                    Réserver {destination.name} →
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
                Un processus simple et efficace pour vos transferts aéroport
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Phone className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Réservation
                </h3>
                <p className="text-gray-600">
                  Réservez en ligne ou par téléphone en quelques minutes
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Plane className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Suivi de Vol
                </h3>
                <p className="text-gray-600">
                  Nous suivons votre vol et adaptons nos horaires en cas de
                  retard
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <CheckCircle className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Accueil et Transfert
                </h3>
                <p className="text-gray-600">
                  Accueil avec panneau nominatif et transfert vers votre
                  destination
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
                Prêt pour votre transfert ?
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                Réservez dès maintenant votre transfert aéroport et voyagez
                l'esprit tranquille
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  Réserver maintenant
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-300 no-underline"
                >
                  Nous contacter
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
    </div>
  );
}
