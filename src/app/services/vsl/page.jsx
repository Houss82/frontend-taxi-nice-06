"use client";

import Navbar from "@/components/Navbar.jsx";
import { SEOBackgroundImage } from "@/components/SEOImage.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Heart,
  Mail,
  Phone,
  Shield,
  Users,
} from "lucide-react";

export default function VSLPage() {
  const { t } = useLanguage();

  const breadcrumbItems = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "VSL", href: "/services/vsl" },
  ];

  const features = [
    {
      icon: Heart,
      title: "Transport Médicalisé",
      description:
        "Véhicules sanitaires légers adaptés au transport de personnes à mobilité réduite",
    },
    {
      icon: Shield,
      title: "Chauffeurs Formés",
      description:
        "Personnel qualifié et formé aux techniques de manutention et de sécurité",
    },
    {
      icon: Users,
      title: "Accompagnement",
      description:
        "Aide au déplacement et assistance personnalisée selon vos besoins",
    },
    {
      icon: Clock,
      title: "Disponibilité 24h/24",
      description:
        "Service disponible tous les jours de l'année pour vos rendez-vous médicaux",
    },
  ];

  const services = [
    {
      title: "Rendez-vous Médicaux",
      description: "Transport vers hôpitaux, cliniques, cabinets médicaux",
      icon: "🏥",
      features: [
        "Ponctualité garantie",
        "Aide au déplacement",
        "Attente sur place",
      ],
    },
    {
      title: "Sorties de Convalescence",
      description: "Transport de retour après hospitalisation",
      icon: "🏠",
      features: ["Confort optimal", "Sécurité renforcée", "Accompagnement"],
    },
    {
      title: "Déplacements Personnels",
      description: "Sorties, courses, visites familiales",
      icon: "🛒",
      features: [
        "Flexibilité horaire",
        "Service personnalisé",
        "Disponibilité",
      ],
    },
    {
      title: "Événements Spéciaux",
      description: "Mariages, cérémonies, fêtes familiales",
      icon: "🎉",
      features: [
        "Véhicule adapté",
        "Décoration possible",
        "Service de prestige",
      ],
    },
  ];

  const requirements = [
    "Carte d'invalidité ou justificatif médical",
    "Réservation 24h à l'avance (urgences exceptées)",
    "Informations sur l'état de santé du passager",
    "Coordonnées de contact d'urgence",
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
        <SEOBackgroundImage
          src="/intérieur-van.jpeg"
          alt="VSL Nice - Véhicule Sanitaire Léger - Transport médicalisé"
          className="h-full"
          overlay={true}
          overlayOpacity="bg-black/60"
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-4xl"
            >
              <div className="flex items-center mb-6">
                <Heart className="w-12 h-12 mr-4 text-pink-400" />
                <h1 className="text-5xl md:text-7xl font-bold">
                  VSL Nice
                  <span className="block text-3xl md:text-4xl font-light mt-2">
                    Véhicule Sanitaire Léger
                  </span>
                </h1>
              </div>
              <div className="w-24 h-1 bg-cyan-400 rounded-full mb-8"></div>
              <p className="text-xl md:text-2xl leading-relaxed mb-8">
                Transport médicalisé professionnel pour personnes à mobilité
                réduite. Service adapté, sécurisé et humain pour tous vos
                déplacements médicaux.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Réserver un VSL
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
                >
                  En savoir plus
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </SEOBackgroundImage>
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
              Un Service Adapté et Humain
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transport médicalisé professionnel avec un accompagnement
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Services VSL
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services de transport médicalisé adaptés à
              vos besoins
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-5 h-5 text-pink-500" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comment Réserver un VSL ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple et sécurisé pour votre transport médicalisé
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Appel Téléphonique",
                description:
                  "Contactez-nous au 06 51 68 36 87 pour discuter de vos besoins",
                icon: "📞",
              },
              {
                step: "02",
                title: "Évaluation",
                description:
                  "Nous évaluons vos besoins spécifiques et adaptons notre service",
                icon: "📋",
              },
              {
                step: "03",
                title: "Réservation",
                description:
                  "Confirmation de votre réservation avec tous les détails",
                icon: "✅",
              },
              {
                step: "04",
                title: "Transport",
                description:
                  "Prise en charge et transport sécurisé vers votre destination",
                icon: "🚐",
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
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-700 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="absolute -top-2 -right-2 text-4xl">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Documents Requis
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Pour bénéficier de notre service VSL, merci de vous munir des
              documents suivants
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Besoin d'un VSL ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contactez-nous pour réserver votre transport médicalisé adapté
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-pink-600 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                06 51 68 36 87
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-pink-600 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Demander un devis
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
