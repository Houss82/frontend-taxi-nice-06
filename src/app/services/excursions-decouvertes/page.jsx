"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
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
import Link from "next/link";

export default function ExcursionsDecouvertesPage() {
  const features = [
    {
      icon: MapPin,
      title: "Itinéraires Personnalisés",
      description:
        "Circuits sur mesure selon vos envies et votre temps disponible",
    },
    {
      icon: Users,
      title: "Guide Local",
      description:
        "Chauffeur connaissant parfaitement la région et ses secrets",
    },
    {
      icon: Camera,
      title: "Arrêts Photos",
      description:
        "Pauses aux plus beaux points de vue pour immortaliser vos souvenirs",
    },
    {
      icon: Compass,
      title: "Découverte",
      description:
        "Explorez les sites emblématiques et les lieux cachés de la Côte d'Azur",
    },
    {
      icon: Clock,
      title: "Flexibilité Horaire",
      description: "Départ et retour selon vos préférences, durée adaptable",
    },
    {
      icon: Star,
      title: "Expérience Unique",
      description:
        "Des moments inoubliables dans les plus beaux endroits de la région",
    },
  ];

  const destinations = [
    {
      name: "Monaco",
      duration: "1/2 journée",
      price: "À partir de 80€",
      image: "/monaco.jpg",
      highlights: [
        "Palais Princier",
        "Casino Monte-Carlo",
        "Port Hercule",
        "Jardin Exotique",
      ],
    },
    {
      name: "Cannes",
      duration: "1/2 journée",
      price: "À partir de 70€",
      image: "/cannes.webp",
      highlights: [
        "Croisette",
        "Palais des Festivals",
        "Suquet",
        "Marché Forville",
      ],
    },
    {
      name: "Saint-Tropez",
      duration: "1 journée",
      price: "À partir de 150€",
      image: "/saint-tropez.jpg",
      highlights: [
        "Vieux Port",
        "Citadelle",
        "Plage de Pampelonne",
        "Place des Lices",
      ],
    },
    {
      name: "Èze & La Turbie",
      duration: "1/2 journée",
      price: "À partir de 85€",
      image: "/eze.jpg",
      highlights: ["Village perché d'Èze", "Villa d'Eze", "Trophée des Alpes"],
    },
  ];

  const breadcrumbItems = [
    { name: "Services", url: "/services" },
    { name: "Excursions Découvertes", url: "/services/excursions-decouvertes" },
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
        <section className="relative sm:py-20 bg-gradient-to-br from-blue-50 to-green-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 pt-10 sm:py-0">
                  Excursions Découvertes
                  <span className="block text-blue-600">Côte d'Azur</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Découvrez les plus beaux sites de la Côte d'Azur avec un
                  chauffeur privé. Monaco, Cannes, Saint-Tropez, villages
                  perchés... Des excursions sur mesure pour vous faire vivre des
                  moments inoubliables.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-center no-underline"
                  >
                    Réserver une excursion
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
                    <div className="text-sm">Personnalisé</div>
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
                Pourquoi Choisir Nos Excursions ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des excursions personnalisées avec un service haut de gamme
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
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

        {/* Destinations Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Nos Destinations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez les plus beaux sites de la Côte d'Azur avec nos
                excursions sur mesure
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
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
                      Réserver {destination.name} →
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
                Prêt pour l'Aventure ?
              </h2>
              <p className="text-xl text-blue-100 mb-4">
                Réservez dès maintenant votre excursion sur mesure en Côte
                d'Azur
              </p>
              <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
                Découvrez aussi notre service complet de{" "}
                <Link
                  href="/"
                  className="text-white font-semibold underline underline-offset-4 hover:text-blue-100 transition-colors"
                >
                  taxi Nice 24/7
                </Link>{" "}
                pour tous vos déplacements :{" "}
                <Link
                  href="/secteurs/nice-gare"
                  className="text-white font-semibold underline underline-offset-4 hover:text-blue-100 transition-colors"
                >
                  taxi gare Nice
                </Link>
                ,{" "}
                <Link
                  href="/secteurs/nice-centre-ville"
                  className="text-white font-semibold underline underline-offset-4 hover:text-blue-100 transition-colors"
                >
                  taxi centre-ville Nice
                </Link>{" "}
                et transferts aéroport.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  Réserver une excursion
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
