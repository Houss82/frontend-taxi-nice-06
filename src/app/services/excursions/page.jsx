"use client";

import Navbar from "@/components/Navbar.jsx";
import SEOImage from "@/components/SEOImage.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import {
  ArrowRight,
  Camera,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function ExcursionsPage() {
  const breadcrumbItems = [
    { name: "Services", url: "/services" },
    { name: "Excursions", url: "/services/excursions" },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Itinéraires Personnalisés",
      description:
        "Circuits sur mesure selon vos envies et votre temps disponible",
    },
    {
      icon: Camera,
      title: "Arrêts Photos",
      description:
        "Pauses aux plus beaux points de vue pour immortaliser vos souvenirs",
    },
    {
      icon: Users,
      title: "Guide Local",
      description:
        "Chauffeur connaissant parfaitement la région et ses secrets",
    },
    {
      icon: Clock,
      title: "Flexibilité Horaire",
      description: "Départ et retour selon vos préférences, durée adaptable",
    },
  ];

  const destinations = [
    {
      name: "Monaco",
      image: "/foret-glc.jpeg",
      duration: "1/2 journée",
      price: "À partir de 80€",
      highlights: [
        "Palais Princier",
        "Casino Monte-Carlo",
        "Port Hercule",
        "Jardin Exotique",
      ],
      description:
        "Découvrez la principauté de Monaco avec ses palais, casinos et jardins exotiques",
    },
    {
      name: "Cannes",
      image: "/majéstic.jpeg",
      duration: "1/2 journée",
      price: "À partir de 70€",
      highlights: [
        "Croisette",
        "Palais des Festivals",
        "Suquet",
        "Marché Forville",
      ],
      description:
        "Explorez Cannes, ses plages, son festival et ses quartiers historiques",
    },
    {
      name: "Antibes & Juan-les-Pins",
      image: "/hotel-mougins.jpeg",
      duration: "1 journée",
      price: "À partir de 120€",
      highlights: [
        "Cap d'Antibes",
        "Musée Picasso",
        "Plage de Juan-les-Pins",
        "Vieille ville",
      ],
      description:
        "Entre mer et montagne, découvrez l'authenticité de la Côte d'Azur",
    },
    {
      name: "Saint-Tropez",
      image: "/glc-arrivé.jpeg",
      duration: "1 journée",
      price: "À partir de 150€",
      highlights: [
        "Vieux Port",
        "Citadelle",
        "Plage de Pampelonne",
        "Place des Lices",
      ],
      description:
        "Le mythique Saint-Tropez, ses plages et son ambiance unique",
    },
    {
      name: "Grasse & Parfums",
      image: "/van-aéro.jpeg",
      duration: "1/2 journée",
      price: "À partir de 90€",
      highlights: [
        "Musée du Parfum",
        "Vieille ville",
        "Villa Fragonard",
        "Marché aux fleurs",
      ],
      description:
        "Capitale mondiale du parfum, découvrez l'art de la parfumerie",
    },
    {
      name: "Villages Perchés",
      image: "/intérieur-van.jpeg",
      duration: "1 journée",
      price: "À partir de 100€",
      highlights: [
        "Èze",
        "Saint-Paul-de-Vence",
        "Gourdon",
        "Tourette-sur-Loup",
      ],
      description: "Les plus beaux villages perchés de l'arrière-pays niçois",
    },
  ];

  const packages = [
    {
      name: "Découverte",
      duration: "1/2 journée",
      price: "À partir de 80€",
      includes: ["Transport", "Guide", "Arrêts photos", "Eau"],
      destinations: ["Monaco", "Cannes", "Antibes"],
    },
    {
      name: "Exploration",
      duration: "1 journée",
      price: "À partir de 150€",
      includes: ["Transport", "Guide", "Arrêts photos", "Eau", "Déjeuner"],
      destinations: ["Monaco + Cannes", "Saint-Tropez", "Villages perchés"],
    },
    {
      name: "Prestige",
      duration: "2 jours",
      price: "À partir de 300€",
      includes: ["Transport", "Guide", "Hébergement", "Repas", "Visites"],
      destinations: ["Circuit complet Côte d'Azur"],
    },
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
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/monaco.jpg"
          alt="Excursions Côte d'Azur - Découvrez la région avec chauffeur privé"
          fill
          className="object-cover"
          priority={true}
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white max-w-4xl">
            <div className="flex items-center mb-6">
              <MapPin className="w-12 h-12 mr-4 text-blue-500" />
              <h1 className="text-5xl md:text-7xl font-bold">
                Excursions
                <span className="block text-3xl md:text-4xl font-light mt-2">
                  Côte d'Azur
                </span>
              </h1>
            </div>
            <div className="w-24 h-1 bg-blue-500 rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Découvrez les plus beaux sites de la Côte d'Azur avec un chauffeur
              privé. Monaco, Cannes, Saint-Tropez, villages perchés... Des
              excursions sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/reservation"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Réserver une excursion
              </a>
              <a
                href="#destinations"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
              >
                Voir les destinations
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi Choisir Nos Excursions ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des excursions personnalisées avec un service haut de gamme
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  {(() => {
                    const IconComponent = feature.icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les plus beaux sites de la Côte d'Azur avec nos
              excursions sur mesure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <SEOImage
                    src={destination.image}
                    alt={`Excursion ${destination.name} - ${destination.description}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {destination.duration}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                      {destination.price}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      À découvrir :
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map(
                        (highlight, highlightIndex) => (
                          <span
                            key={highlightIndex}
                            className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
                          >
                            {highlight}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <a
                    href="/reservation"
                    className="block w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
                  >
                    Réserver cette excursion
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Formules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez la formule qui correspond le mieux à vos envies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border border-blue-100 ${
                  index === 1
                    ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-2xl scale-105"
                    : "bg-white shadow-lg"
                }`}
              >
                <div className="text-center mb-6">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      index === 1 ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <div
                    className={`text-4xl font-bold mb-2 ${
                      index === 1 ? "text-white" : "text-blue-600"
                    }`}
                  >
                    {pkg.price}
                  </div>
                  <div
                    className={`text-sm ${
                      index === 1 ? "text-white/80" : "text-gray-600"
                    }`}
                  >
                    {pkg.duration}
                  </div>
                </div>

                <div className="mb-6">
                  <h4
                    className={`font-semibold mb-3 ${
                      index === 1 ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Inclus :
                  </h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle
                          className={`w-5 h-5 ${
                            index === 1 ? "text-white" : "text-blue-500"
                          }`}
                        />
                        <span
                          className={
                            index === 1 ? "text-white" : "text-gray-700"
                          }
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4
                    className={`font-semibold mb-3 ${
                      index === 1 ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Destinations :
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.destinations.map((dest, destIndex) => (
                      <span
                        key={destIndex}
                        className={`px-2 py-1 rounded-full text-xs ${
                          index === 1
                            ? "bg-white/20 text-white"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="/reservation"
                  className={`block w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center ${
                    index === 1
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:shadow-lg"
                  }`}
                >
                  {index === 1
                    ? "Formule recommandée"
                    : "Choisir cette formule"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt pour l'Aventure ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Réservez dès maintenant votre excursion sur mesure en Côte d'Azur
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0651683687"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                06 51 68 36 87
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
