"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import { Award, Briefcase, Clock, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TransfertsEvenementsPage() {
  const features = [
    {
      icon: Users,
      title: "Service Événements",
      description:
        "Transport pour congrès, salons et événements professionnels",
    },
    {
      icon: Award,
      title: "Chauffeur en Uniforme",
      description:
        "Chauffeur professionnel en costume pour représenter votre entreprise",
    },
    {
      icon: Clock,
      title: "Ponctualité Garantie",
      description: "Respect strict des horaires pour tous vos rendez-vous",
    },
    {
      icon: Star,
      title: "Prestige",
      description: "Véhicules Mercedes haut de gamme pour une image impeccable",
    },
    {
      icon: Briefcase,
      title: "Facturation Entreprise",
      description:
        "Devis et facturation professionnels pour votre comptabilité",
    },
    {
      icon: MapPin,
      title: "Couverture Régionale",
      description:
        "Service sur toute la Côte d'Azur (Nice, Cannes, Monaco, etc.)",
    },
  ];

  const events = [
    {
      name: "MIPIM Cannes",
      location: "Cannes",
      period: "Mars",
      description:
        "Grand salon international de l'immobilier et de l'urbanisme",
      image: "/mipim.jpg",
    },
    {
      name: "Festival de Cannes",
      location: "Cannes",
      period: "Mai",
      description: "Le plus prestigieux festival de cinéma au monde",
      image: "/festivale.jpg",
    },
    {
      name: "Cannes Lions Festival",
      location: "Cannes",
      period: "Juin",
      description: "Festival international de la créativité et de la publicité",
      image: "/lions.jpg",
    },
    {
      name: "Monaco Yacht Show",
      location: "Monaco",
      period: "Septembre",
      description: "Le plus grand salon nautique mondial en Méditerranée",
      image: "/monaco-yacht-show.jpg",
    },
  ];

  const breadcrumbItems = [
    { name: "Services", url: "/services" },
    { name: "Transferts Événements", url: "/services/transferts-evenements" },
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
        <section className="relative sm:py-20 bg-gradient-to-br from-cyan-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 pt-10 sm:py-0">
                  Transferts Événements
                  <span className="block text-cyan-600">Professionnels</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Service de transport VIP pour vos événements professionnels :
                  congrès, salons, festivals. Chauffeur en uniforme et véhicules
                  premium Mercedes-Benz.
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
                Nos Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un service professionnel adapté aux besoins de vos événements
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

        {/* Events Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Événements Majeurs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nous couvrons les plus grands événements de la Côte d'Azur
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-cyan-50 rounded-xl overflow-hidden shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow duration-300"
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
                      Réserver pour {event.name} →
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
                Besoin d'un Service Professionnel ?
              </h2>
              <p className="text-xl text-cyan-100 mb-4">
                Demandez un devis personnalisé pour vos événements
                professionnels
              </p>
              <p className="text-lg text-cyan-200 mb-8 max-w-2xl mx-auto">
                Pour découvrir tous nos services de{" "}
                <Link
                  href="/taxi-nice"
                  className="text-white font-semibold underline underline-offset-4 hover:text-cyan-100 transition-colors"
                >
                  taxi Nice 24/7
                </Link>{" "}
                avec véhicules Mercedes premium, consultez notre page principale dédiée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  Demander un devis
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
    </>
  );
}
