"use client";

import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Plane,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function TransfertAeroportPage() {
  const { t } = useLanguage();

  const breadcrumbItems = [
    { name: "Services", url: "/services", title: "Nos services de transport" },
    {
      name: "Transfert Aéroport",
      url: "/services/transfert-aeroport",
      title: "Transfert Aéroport Nice",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Ponctualité Garantie",
      description:
        "Suivi en temps réel de votre vol et ajustement automatique en cas de retard",
    },
    {
      icon: MapPin,
      title: "Toutes Distances",
      description:
        "Vers l'aéroport de Nice et toutes destinations de la Côte d'Azur",
    },
    {
      icon: Users,
      title: "Accueil Nominatif",
      description:
        "Panneau avec votre nom à l'arrivée pour une identification facile",
    },
    {
      icon: Shield,
      title: "Sécurité Totale",
      description:
        "Chauffeurs professionnels et véhicules parfaitement entretenus",
    },
  ];

  const pricing = [
    {
      destination: "Nice Centre → Aéroport",
      duration: "15 min",
      price: "36€",
      vehicle: "Mercedes GLC",
    },
    {
      destination: "Cannes → Aéroport",
      duration: "45 min",
      price: "89€",
      vehicle: "Mercedes GLC",
    },
    {
      destination: "Monaco → Aéroport",
      duration: "35 min",
      price: "99€",
      vehicle: "Mercedes GLC",
    },
    {
      destination: "Antibes → Aéroport",
      duration: "25 min",
      price: "76€",
      vehicle: "Mercedes GLC",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/aéro-t2.jpg"
          alt="Transfert Aéroport Nice - Service professionnel"
          fill
          className="object-cover"
          priority={true}
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl"
          >
            <div className="flex items-center mb-6">
              <Plane className="w-12 h-12 mr-4 text-blue-400" />
              <h1 className="text-5xl md:text-7xl font-bold">
                Transfert Aéroport
                <span className="block text-3xl md:text-4xl font-light mt-2">
                  Nice Côte d'Azur
                </span>
              </h1>
            </div>
            <div className="w-24 h-1 bg-cyan-400 rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Service professionnel de transfert vers l'aéroport de Nice.
              Accueil nominatif, suivi de vol et ponctualité garantie pour tous
              vos déplacements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Réserver maintenant
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
              >
                Voir les tarifs
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi Choisir Notre Service ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un service de transfert aéroport professionnel, fiable et
              personnalisé
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  {(() => {
                    const IconComponent = feature.icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comment Ça Marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple et efficace pour votre transfert aéroport
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Réservation",
                description:
                  "Réservez en ligne ou par téléphone en précisant vos détails de vol",
                icon: "📱",
              },
              {
                step: "02",
                title: "Suivi de Vol",
                description:
                  "Nous suivons votre vol en temps réel et ajustons l'horaire si nécessaire",
                icon: "✈️",
              },
              {
                step: "03",
                title: "Accueil & Transfert",
                description:
                  "Accueil avec panneau nominatif et transfert confortable vers votre destination",
                icon: "🚗",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="absolute -top-2 -right-2 text-4xl">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tarifs Transfert Aéroport
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tarifs transparents et compétitifs pour tous vos transferts
              aéroport
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.destination}
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {item.price}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    {item.duration} • {item.vehicle}
                  </div>
                  <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors duration-300">
                    Réserver
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              * Tarifs indicatifs. Prix final selon la destination exacte et les
              options choisies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                06 51 68 36 87
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Devis gratuit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-blue-500 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt pour Votre Transfert ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Réservez dès maintenant votre transfert aéroport et voyagez en
              toute sérénité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-lg transition-all duration-300"
              >
                Réserver en ligne
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Nous appeler
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
