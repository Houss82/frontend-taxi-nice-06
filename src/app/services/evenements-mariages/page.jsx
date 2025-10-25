"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
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
  const features = [
    {
      icon: Heart,
      title: "Mariages",
      description:
        "Transport élégant pour votre plus beau jour avec décoration sur mesure",
    },
    {
      icon: Gift,
      title: "Anniversaires",
      description:
        "Fêtez vos anniversaires en VIP avec un service haut de gamme",
    },
    {
      icon: Crown,
      title: "Service VIP",
      description: "Chauffeur en costume, champagne et fleurs à l'intérieur",
    },
    {
      icon: Camera,
      title: "Souvenirs photo",
      description: "Photos souvenirs professionnelles de votre événement",
    },
    {
      icon: Sparkles,
      title: "Décoration véhicule",
      description:
        "Décoration personnalisée selon votre thème (fleurs, rubans, etc.)",
    },
    {
      icon: Users,
      title: "Groupes VIP",
      description:
        "Transport pour groupes jusqu'à 8 personnes en toute élégance",
    },
  ];

  const services = [
    {
      name: "Mariage Classique",
      description:
        "Package complet pour votre mariage avec voiture déco et chauffeur en costume",
      price: "À partir de 280 €",
      features: [
        "Décoration fleurs & rubans",
        "Chauffeur en costume",
        "Photos souvenirs",
      ],
    },
    {
      name: "Anniversaire VIP",
      description: "Célébrez votre anniversaire dans un style exclusif",
      price: "À partir de 150 €",
      features: [
        "Décoration personnalisée",
        "Champagne offert",
        "Service VIP complet",
      ],
    },
    {
      name: "Cérémonie Religieuse",
      description: "Transport solennel pour vos cérémonies religieuses",
      price: "À partir de 180 €",
      features: [
        "Véhicule élégant",
        "Chauffeur professionnel",
        "Service discret",
      ],
    },
    {
      name: "Événement d'Entreprise",
      description: "Transport de prestige pour vos événements professionnels",
      price: "Sur devis",
      features: [
        "Flotte disponible",
        "Service ponctuel",
        "Facturation entreprise",
      ],
    },
  ];

  const breadcrumbItems = [
    { name: "Accueil", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Événements & Mariages", url: "/services/evenements-mariages" },
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
                  Événements & Mariages
                  <span className="block text-pink-600">
                    Transport de Prestige
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Marquez vos moments importants avec notre service de transport
                  VIP. Décoration sur mesure, chauffeur en costume, et tout le
                  luxe pour faire de votre événement un moment inoubliable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    className="px-8 py-4 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300 text-center no-underline"
                  >
                    Réserver maintenant
                  </a>
                  <a
                    href="/tarifs"
                    className="px-8 py-4 border-2 border-pink-600 text-pink-600 rounded-xl font-semibold hover:bg-pink-600 hover:text-white transition-colors duration-300 text-center no-underline"
                  >
                    Voir les tarifs
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
                    <div className="text-sm">Service Prestige</div>
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
                Nos Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un service premium pour tous vos événements spéciaux
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
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
                Nos Formules
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choisissez la formule adaptée à votre événement
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-pink-50 rounded-xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition-shadow duration-300"
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
                    Réserver cette formule →
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
                Témoignages
              </h2>
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "Un service exceptionnel pour notre mariage ! La décoration du
                  véhicule était magnifique et le chauffeur très professionnel.
                  Nous recommandons vivement ce service pour tous vos événements
                  spéciaux."
                </blockquote>
                <div className="text-gray-600 font-semibold">
                  Marie & Pierre - Nice
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
                Prêt pour votre événement ?
              </h2>
              <p className="text-xl text-pink-100 mb-8">
                Réservez dès maintenant votre transport de prestige et offrez à
                vos invités une expérience inoubliable
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="px-8 py-4 bg-white text-pink-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  Réserver maintenant
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-pink-600 transition-colors duration-300 no-underline"
                >
                  Nous contacter
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
