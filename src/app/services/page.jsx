"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ServicesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      id: 1,
      image: "/van-aéro.jpeg",
      title: "Véhicule Premium jusqu'à 8 personnes",
      description:
        "Transport de groupe confortable et spacieux pour vos déplacements familiaux ou professionnels",
      keywords: [
        "taxi nice",
        "véhicule premium",
        "transport groupe",
        "van nice",
      ],
      features: [
        "Jusqu'à 8 passagers",
        "Confort optimal",
        "Climatisation",
        "Espace bagages",
      ],
      icon: Users,
      color: "from-blue-500 to-blue-700",
      detailUrl: "/services/van-premium",
    },
    {
      id: 2,
      image: "/majéstic.jpeg",
      title: "Transferts Congrès & Événements",
      description:
        "Service professionnel pour MIPIM, Festival de Cannes, Lions, et tous vos événements d'entreprise",
      keywords: [
        "transferts congrès",
        "mipim taxi",
        "festival cannes",
        "événements nice",
      ],
      features: [
        "Service événementiel",
        "Chauffeur en uniforme",
        "Ponctualité garantie",
        "Prestige",
      ],
      icon: Star,
      color: "from-cyan-500 to-cyan-700",
      detailUrl: "/services/transferts-evenements",
    },
    {
      id: 3,
      image: "/intérieur-van.jpeg",
      title: "Flotte Récente & Adaptée",
      description:
        "Véhicules modernes, confortables et parfaitement entretenus pour tous vos besoins de transport",
      keywords: [
        "flotte taxi nice",
        "véhicules récents",
        "confort transport",
        "taxi officiel",
      ],
      features: [
        "Flotte récente",
        "Entretien régulier",
        "Confort moderne",
        "Sécurité",
      ],
      icon: Clock,
      color: "from-blue-500 to-blue-700",
      detailUrl: "/services/flotte-recente",
    },
    {
      id: 4,
      image: "/hotel-mougins.jpeg",
      title: "Événements & Mariages",
      description:
        "Transport de prestige pour vos moments spéciaux : mariages, anniversaires, cérémonies",
      keywords: [
        "mariage taxi nice",
        "événements spéciaux",
        "transport prestige",
        "cérémonies",
      ],
      features: [
        "Service sur mesure",
        "Décoration véhicule",
        "Chauffeur discret",
        "Moment magique",
      ],
      icon: Star,
      color: "from-cyan-500 to-cyan-700",
      detailUrl: "/services/evenements-mariages",
    },
    {
      id: 5,
      image: "/foret-glc.jpeg",
      title: "Excursions & Découvertes",
      description:
        "Explorez la Côte d'Azur avec nos excursions personnalisées : Monaco, Cannes, Saint-Tropez",
      keywords: [
        "excursions nice",
        "monaco taxi",
        "cannes excursion",
        "côte d'azur tourisme",
      ],
      features: [
        "Itinéraires personnalisés",
        "Guide local",
        "Arrêts photos",
        "Découverte",
      ],
      icon: MapPin,
      color: "from-blue-500 to-blue-700",
      detailUrl: "/services/excursions-decouvertes",
    },
    {
      id: 6,
      image: "/aéro-arrivé.jpeg",
      title: "Transferts Aéroport Toutes Distances",
      description:
        "Service fiable vers l'aéroport de Nice et toutes destinations. Accueil avec panneau nominatif",
      keywords: [
        "transfert aéroport nice",
        "aéroport taxi",
        "accueil aéroport",
        "transport aéroport",
      ],
      features: [
        "Toutes distances",
        "Suivi vol",
        "Accueil nominatif",
        "Ponctualité",
      ],
      icon: MapPin,
      color: "from-cyan-500 to-cyan-700",
      detailUrl: "/services/transferts-aeroport",
    },
    {
      id: 7,
      image: "/glc-arrivé.jpeg",
      title: "Arrivées & Destinations",
      description:
        "Accueil personnalisé à votre arrivée avec panneau nominatif et service haut de gamme",
      keywords: [
        "arrivée taxi nice",
        "accueil gare",
        "destination nice",
        "service personnalisé",
      ],
      features: [
        "Accueil nominatif",
        "Service personnalisé",
        "Luxe et confort",
        "Disponibilité 24h",
      ],
      icon: Star,
      color: "from-blue-500 to-blue-700",
      detailUrl: "/services/arrivees-destinations",
    },
  ];

  // Auto-play du carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const breadcrumbItems = [{ name: "Services", url: "/services" }];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b mt-20 sm:mt-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[70vh] overflow-hidden">
        <Image
          src="/services.jpeg"
          alt="Services Taxi Nice Côte d'Azur"
          fill
          className="object-cover"
          priority={true}
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl pt-10 sm:pt-0"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6  sm:py-0">
              Nos Services
              <span className="block text-3xl md:text-4xl font-light mt-2">
                Transport Premium à Nice
              </span>
            </h1>
            <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-2xl leading-relaxed">
              Découvrez notre gamme complète de services de transport haut de
              gamme pour tous vos besoins à Nice et sur la Côte d'Azur
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative"
                  >
                    {/* Mobile Card */}
                    <div className="bg-white rounded-2xl overflow-hidden">
                      {/* Image */}
                      <div className="relative h-48">
                        <Image
                          src={services[currentSlide].image}
                          alt={services[currentSlide].title}
                          fill
                          className="object-cover"
                          priority={currentSlide < 2}
                          quality={85}
                          sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                        {/* Service Badge */}
                        <div className="absolute top-4 left-4">
                          <div
                            className={`inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r ${services[currentSlide].color} text-white text-sm font-semibold`}
                          >
                            {(() => {
                              const IconComponent = services[currentSlide].icon;
                              return (
                                <IconComponent className="w-4 h-4 mr-1.5" />
                              );
                            })()}
                            Service {currentSlide + 1}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {services[currentSlide].title}
                        </h3>
                        <p className="text-base text-gray-600 mb-6 leading-relaxed">
                          {services[currentSlide].description}
                        </p>

                        {/* Features - Mobile Grid */}
                        <div className="space-y-3 mb-6">
                          {services[currentSlide].features.map(
                            (feature, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: 0.1 + index * 0.05,
                                  duration: 0.3,
                                }}
                                className="flex items-center space-x-3"
                              >
                                <div
                                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[currentSlide].color} flex-shrink-0`}
                                ></div>
                                <span className="text-sm text-gray-700 font-medium">
                                  {feature}
                                </span>
                              </motion.div>
                            )
                          )}
                        </div>

                        {/* CTA Buttons - Mobile */}
                        <div className="space-y-3">
                          <motion.a
                            href="/reservation"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`block w-full px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r ${services[currentSlide].color} text-white rounded-xl font-semibold text-center text-sm no-underline`}
                          >
                            Réserver maintenant
                          </motion.a>
                          <motion.a
                            href={
                              services[currentSlide].detailUrl || "/services"
                            }
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="block w-full px-4 py-2 sm:px-6 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-center text-sm no-underline"
                          >
                            En savoir plus
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mobile Navigation */}
              <div className="flex justify-between items-center mt-6">
                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
                  aria-label="Slide précédent"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-3">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center ${
                        index === currentSlide
                          ? "bg-blue-500 scale-125"
                          : "bg-blue-500/50 hover:bg-blue-500/70"
                      }`}
                      aria-label={`Aller au slide ${index + 1}`}
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${
                        index === currentSlide ? "bg-white" : "bg-white/60"
                      }`} aria-hidden="true" />
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
                  aria-label="Slide suivant"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Nos Véhicules & Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une flotte moderne et des services personnalisés pour répondre à
                tous vos besoins de transport
              </p>
            </motion.div>

            {/* Carousel Container */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <Image
                          src={services[currentSlide].image}
                          alt={services[currentSlide].title}
                          fill
                          className="object-cover"
                          priority={currentSlide < 2}
                          quality={85}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                        {/* Service Badge */}
                        <div className="absolute top-6 left-6">
                          <div
                            className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${services[currentSlide].color} text-white font-semibold`}
                          >
                            {(() => {
                              const IconComponent = services[currentSlide].icon;
                              return <IconComponent className="w-5 h-5 mr-2" />;
                            })()}
                            Service {currentSlide + 1}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                        >
                          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            {services[currentSlide].title}
                          </h3>
                          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {services[currentSlide].description}
                          </p>

                          {/* Features */}
                          <div className="grid grid-cols-2 gap-4 mb-8">
                            {services[currentSlide].features.map(
                              (feature, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: 0.3 + index * 0.1,
                                    duration: 0.4,
                                  }}
                                  className="flex items-center space-x-3"
                                >
                                  <div
                                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[currentSlide].color}`}
                                  ></div>
                                  <span className="text-gray-700 font-medium">
                                    {feature}
                                  </span>
                                </motion.div>
                              )
                            )}
                          </div>

                          {/* CTA Buttons */}
                          <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                              href="/reservation"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`px-8 py-4 bg-gradient-to-r ${services[currentSlide].color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 no-underline text-center`}
                            >
                              Réserver maintenant
                            </motion.a>
                            <motion.a
                              href={
                                services[currentSlide].detailUrl || "/services"
                              }
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-all duration-300 no-underline text-center"
                            >
                              En savoir plus
                            </motion.a>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Desktop Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                aria-label="Slide précédent"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                aria-label="Slide suivant"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Dots Indicator - Desktop */}
              <div className="flex justify-center mt-8 gap-3">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center ${
                      index === currentSlide
                        ? "bg-blue-500 scale-125"
                        : "bg-blue-500/50 hover:bg-blue-500/70"
                    }`}
                    aria-label={`Aller au slide ${index + 1}`}
                  >
                    <span className={`w-3 h-3 rounded-full ${
                      index === currentSlide ? "bg-white" : "bg-white/60"
                    }`} aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tous Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services de transport pour répondre à tous
              vos besoins
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.95,
                  x: index % 2 === 0 ? 50 : -50, // Alternance droite/gauche (moins prononcée)
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                whileTap={{
                  scale: 0.95,
                  rotateY: -2,
                }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 group-hover:via-black/10 group-hover:to-transparent transition-all duration-500"></div>

                  {/* Service Badge avec animation */}
                  <motion.div
                    className="absolute top-4 left-4"
                    initial={{ opacity: 0, x: -10, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                      delay: index * 0.1 + 0.2,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-semibold shadow-lg`}
                    >
                      {(() => {
                        const IconComponent = service.icon;
                        return <IconComponent className="w-4 h-4 mr-1" />;
                      })()}
                      Service
                    </div>
                  </motion.div>

                  {/* Overlay avec effet de brillance */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                  />
                </div>

                <motion.div
                  className="p-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <motion.h3
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.a
                    href={service.detailUrl}
                    className={`w-full py-3 bg-gradient-to-r ${service.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 relative overflow-hidden block text-center no-underline`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span
                      className="relative z-10"
                      whileHover={{ x: 5 }}
                    >
                      Découvrir
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                    />
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primaryDark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à Réserver ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contactez-nous dès maintenant pour réserver votre transport de
              luxe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:shadow-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                06 51 68 36 87
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300"
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Nous écrire
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
