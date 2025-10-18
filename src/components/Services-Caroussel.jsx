"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Star, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ClientOnly from "./ClientOnly.jsx";

export default function ServicesCarousel() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      id: 1,
      title: t("services.carousel.vanPremium.title"),
      description: t("services.carousel.vanPremium.description"),
      image: "/van-aéro.jpeg",
      icon: Users,
      color: "from-blue-500 to-blue-700",
      features: [
        t("services.carousel.vanPremium.features.passengers"),
        t("services.carousel.vanPremium.features.comfort"),
        t("services.carousel.vanPremium.features.climate"),
        t("services.carousel.vanPremium.features.luggage"),
      ],
      link: "/services/van-premium",
    },
    {
      id: 2,
      title: t("services.carousel.transfertsEvenements.title"),
      description: t("services.carousel.transfertsEvenements.description"),
      image: "/majéstic.jpeg",
      icon: Star,
      color: "from-cyan-500 to-cyan-700",
      features: [
        t("services.carousel.transfertsEvenements.features.service"),
        t("services.carousel.transfertsEvenements.features.uniform"),
        t("services.carousel.transfertsEvenements.features.punctuality"),
        t("services.carousel.transfertsEvenements.features.prestige"),
      ],
      link: "/services/transferts-evenements",
    },
    {
      id: 3,
      title: t("services.carousel.flotteRecente.title"),
      description: t("services.carousel.flotteRecente.description"),
      image: "/intérieur-van.jpeg",
      icon: Clock,
      color: "from-blue-500 to-blue-700",
      features: [
        t("services.carousel.flotteRecente.features.recent"),
        t("services.carousel.flotteRecente.features.maintenance"),
        t("services.carousel.flotteRecente.features.comfort"),
        t("services.carousel.flotteRecente.features.safety"),
      ],
      link: "/services/flotte-recente",
    },
    {
      id: 4,
      title: t("services.carousel.evenementsMariages.title"),
      description: t("services.carousel.evenementsMariages.description"),
      image: "/hotel-mougins.jpeg",
      icon: Star,
      color: "from-purple-500 to-purple-700",
      features: [
        t("services.carousel.evenementsMariages.features.prestige"),
        t("services.carousel.evenementsMariages.features.events"),
        t("services.carousel.evenementsMariages.features.personalized"),
        t("services.carousel.evenementsMariages.features.memories"),
      ],
      link: "/services/evenements-mariages",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <ClientOnly
      fallback={
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nos Services
              </h2>
              <p className="text-gray-600 mb-8">
                Une gamme complète de services de transport
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-lg p-6 animate-pulse"
                >
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    >
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
                          quality={100}
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
                            className={`block w-full px-6 py-3 bg-gradient-to-r ${services[currentSlide].color} text-white rounded-xl font-semibold text-center text-sm`}
                          >
                            {t("navbar.bookNow")}
                          </motion.a>
                          <motion.a
                            href={services[currentSlide].link}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="block w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-center text-sm"
                          >
                            {t("services.carousel.buttons.learnMore")}
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
                <div className="flex space-x-2">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-blue-500 scale-125"
                          : "bg-blue-500/50 hover:bg-blue-500/70"
                      }`}
                      aria-label={`Aller au slide ${index + 1}`}
                    />
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

              {/* Auto-play Toggle - Mobile */}
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300"
                  aria-label={
                    isAutoPlaying
                      ? "Arrêter le défilement automatique"
                      : "Démarrer le défilement automatique"
                  }
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isAutoPlaying ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  <span className="text-xs text-gray-600">
                    {isAutoPlaying ? "Auto" : "Manuel"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
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
                          quality={100}
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
                              className={`px-8 py-4 bg-gradient-to-r ${services[currentSlide].color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-center`}
                            >
                              {t("navbar.bookNow")}
                            </motion.a>
                            <motion.a
                              href={services[currentSlide].link}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-all duration-300 text-center"
                            >
                              {t("services.carousel.buttons.learnMore")}
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

              {/* Auto-play Toggle - Desktop */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-10"
                aria-label={
                  isAutoPlaying
                    ? "Arrêter le défilement automatique"
                    : "Démarrer le défilement automatique"
                }
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    isAutoPlaying ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
              </button>

              {/* Dots Indicator - Desktop */}
              <div className="flex justify-center mt-8 space-x-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-blue-500 scale-125"
                        : "bg-blue-500/50 hover:bg-blue-500/70"
                    }`}
                    aria-label={`Aller au slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ClientOnly>
  );
}
