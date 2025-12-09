"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Calendar,
  Car,
  ChevronDown,
  Compass,
  Crown,
  Euro,
  Heart,
  Home,
  List,
  MapPin,
  Menu,
  Phone,
  Plane,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileSectorsOpen, setIsMobileSectorsOpen] = useState(false);
  const servicesRef = useRef(null);
  const sectorsRef = useRef(null);

  // Fermer le menu services quand on clique à l'extérieur
  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }

      if (sectorsRef.current && !sectorsRef.current.contains(event.target)) {
        setIsSectorsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      setIsMobileServicesOpen(false);
      setIsMobileSectorsOpen(false);
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm md:sticky">
      <div className="h-16 flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6">
        <Link
          href="/"
          className="flex items-center space-x-1.5 sm:space-x-2 bg-black p-1.5 sm:p-2 sm:pr-2.5 md:pr-3 lg:pr-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs sm:text-sm">TN</span>
          </div>
          <span className="hidden md:block text-white font-bold text-sm lg:text-base xl:text-lg">
            TAXI
          </span>
          <span className="hidden md:block text-blue-500 font-bold text-sm lg:text-base xl:text-lg">
            NICE
          </span>
        </Link>
        <nav className="hidden lg:flex gap-3 xl:gap-4 2xl:gap-6">
          <Link href="/" className="text-black hover:text-primary font-medium text-sm xl:text-base whitespace-nowrap">
            ACCUEIL
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => {
                setIsServicesOpen(!isServicesOpen);
                setIsSectorsOpen(false);
              }}
              className="text-black hover:text-primary font-medium flex items-center gap-1 text-sm xl:text-base whitespace-nowrap"
            >
              SERVICES
              <ChevronDown
                className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                >
                  <Link
                    href="/services/taxi-aeroport-nice"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Plane className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>Taxi Aéroport Nice</span>
                    </div>
                  </Link>
                  <Link
                    href="/services/arrivees-destinations"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-green-500" />
                      <span>Arrivées & Destinations</span>
                    </div>
                  </Link>
                  <Link
                    href="/services/van-premium"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span>Van Premium (8 pers.)</span>
                    </div>
                  </Link>
                  <Link
                    href="/services/flotte-recente"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Car className="w-4 h-4 text-indigo-500" />
                      <span>Flotte Récente</span>
                    </div>
                  </Link>
                  <Link
                    href="/services/excursions-decouvertes"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Compass className="w-4 h-4 text-orange-500" />
                      <span>Excursions & Découvertes</span>
                    </div>
                  </Link>
                  <Link
                    href="/services/evenements-mariages"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Crown className="w-4 h-4 text-pink-500" />
                      <span>Événements & Mariages</span>
                    </div>
                  </Link>
                  <Link
                    href="/services/transferts-evenements"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Briefcase className="w-4 h-4 text-amber-500" />
                      <span>Transferts Événements</span>
                    </div>
                  </Link>
                  <Link
                    href="/services/vsl"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span>VSL Transport Médical</span>
                    </div>
                  </Link>
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-t border-gray-200 mt-2"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <span>Tous les services</span>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Secteurs Dropdown */}
          <div className="relative" ref={sectorsRef}>
            <button
              onClick={() => {
                setIsSectorsOpen(!isSectorsOpen);
                setIsServicesOpen(false);
              }}
              className="text-black hover:text-primary font-medium flex items-center gap-1 text-sm xl:text-base whitespace-nowrap"
            >
              NOS SECTEURS
              <ChevronDown
                className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform ${
                  isSectorsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isSectorsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                >
                  <Link
                    href="/secteurs/nice-gare"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsSectorsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>Gare SNCF</span>
                    </div>
                  </Link>
                  <Link
                    href="/secteurs/nice-centre-ville"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsSectorsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-indigo-600" />
                      <span>Centre-Ville</span>
                    </div>
                  </Link>
                  <Link
                    href="/secteurs/cannes"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsSectorsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Compass className="w-4 h-4 text-orange-500" />
                      <span>Cannes</span>
                    </div>
                  </Link>
                  <Link
                    href="/secteurs/antibes"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsSectorsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-green-600" />
                      <span>Antibes</span>
                    </div>
                  </Link>
                  <Link
                    href="/secteurs/menton"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsSectorsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span>Menton</span>
                    </div>
                  </Link>
                  <Link
                    href="/secteurs/saint-tropez"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsSectorsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Compass className="w-4 h-4 text-pink-500" />
                      <span>Saint-Tropez</span>
                    </div>
                  </Link>
                  <Link
                    href="/secteurs"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-t border-gray-200 mt-2"
                    onClick={() => setIsSectorsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <span>Tous nos secteurs</span>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/reservation"
            className="text-black hover:text-primary font-medium text-sm xl:text-base whitespace-nowrap"
          >
            RÉSERVATION
          </Link>
          <Link
            href="/tarifs"
            className="text-black hover:text-primary font-medium text-sm xl:text-base whitespace-nowrap"
          >
            TARIFS
          </Link>
          <Link
            href="/blog"
            className="text-black hover:text-primary font-medium text-sm xl:text-base whitespace-nowrap"
          >
            BLOG
          </Link>
          <Link
            href="/contact"
            className="text-black hover:text-primary font-medium text-sm xl:text-base whitespace-nowrap"
          >
            CONTACT
          </Link>
          <Link
            href="/plan-du-site"
            className="text-black hover:text-primary font-medium text-sm xl:text-base whitespace-nowrap hidden 2xl:block"
          >
            PLAN DU SITE
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          <Link
            href="/reservation"
            className="px-3 py-1.5 xl:px-4 xl:py-2 bg-primary text-white hover:bg-primary/90 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center gap-1.5 xl:gap-2 text-sm xl:text-base whitespace-nowrap shadow-sm hover:shadow-md"
          >
            RÉSERVER
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <>
              <X className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              <span className="font-medium text-gray-900 text-sm sm:text-base">FERMER</span>
            </>
          ) : (
            <>
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              <span className="font-medium text-gray-900 text-sm sm:text-base">MENU</span>
            </>
          )}
        </button>
      </div>

      {/* Menu mobile avec animation améliorée */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            {/* Overlay avec effet de flou */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu principal */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:hidden fixed top-16 right-0 bottom-0 w-full max-w-md z-50 bg-gradient-to-br from-white to-gray-50 border-l border-gray-200 shadow-2xl flex flex-col"
            >
              <motion.nav
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex-1 overflow-y-auto px-6 py-6 space-y-1"
              >
                {/* Logo et titre en haut avec bouton fermer */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">TN</span>
                    </div>
                    <div className="text-center">
                      <h2 className="text-xl font-bold text-gray-900">
                        TAXI NICE
                      </h2>
                      <p className="text-sm text-gray-600">Côte d'Azur</p>
                    </div>
                  </div>

                  {/* Bouton fermer dans le menu */}
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Fermer le menu"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </motion.button>
                </motion.div>

                {/* Menu items avec icônes */}
                <div className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <Link
                      href="/"
                      className="flex items-center space-x-4 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-gray-800 hover:text-primary font-medium transition-all duration-300 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Home className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span>ACCUEIL</span>
                    </Link>
                  </motion.div>

                  {/* Services avec sous-menu pliable */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="space-y-2"
                  >
                    <motion.button
                      onClick={() =>
                        setIsMobileServicesOpen(!isMobileServicesOpen)
                      }
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 text-gray-800 font-medium hover:from-green-100 hover:to-emerald-100 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-4">
                        <Car className="w-5 h-5 text-primary" />
                        <span>SERVICES</span>
                      </div>
                      <motion.div
                        animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-primary" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="ml-6 space-y-1 border-l-2 border-gray-200 pl-4 overflow-hidden"
                        >
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              href="/services/taxi-aeroport-nice"
                              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <Plane className="w-4 h-4 text-blue-500" />
                              <span className="text-sm">
                                Taxi Aéroport Nice
                              </span>
                            </Link>
                          </motion.div>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              href="/services/arrivees-destinations"
                              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <MapPin className="w-4 h-4 text-green-500" />
                              <span className="text-sm">
                                Arrivées & Destinations
                              </span>
                            </Link>
                          </motion.div>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              href="/services/van-premium"
                              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <Users className="w-4 h-4 text-purple-500" />
                              <span className="text-sm">
                                Van Premium (8 pers.)
                              </span>
                            </Link>
                          </motion.div>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              href="/services/flotte-recente"
                              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <Car className="w-4 h-4 text-indigo-500" />
                              <span className="text-sm">Flotte Récente</span>
                            </Link>
                          </motion.div>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              href="/services/excursions-decouvertes"
                              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <Compass className="w-4 h-4 text-orange-500" />
                              <span className="text-sm">
                                Excursions & Découvertes
                              </span>
                            </Link>
                          </motion.div>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              href="/services/evenements-mariages"
                              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <Crown className="w-4 h-4 text-pink-500" />
                              <span className="text-sm">
                                Événements & Mariages
                              </span>
                            </Link>
                          </motion.div>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              href="/services/transferts-evenements"
                              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <Briefcase className="w-4 h-4 text-amber-500" />
                              <span className="text-sm">
                                Transferts Événements
                              </span>
                            </Link>
                          </motion.div>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              href="/services/vsl"
                              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <Heart className="w-4 h-4 text-red-500" />
                              <span className="text-sm">
                                VSL Transport Médical
                              </span>
                            </Link>
                          </motion.div>
                          <div className="border-t border-gray-200 my-2"></div>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              href="/services"
                              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-blue-600 font-semibold transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <Car className="w-4 h-4 text-indigo-500" />
                              <span className="text-sm">Tous les services</span>
                            </Link>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/reservation"
                      className="flex items-center space-x-4 px-4 py-3 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 text-gray-800 hover:text-primary font-medium transition-all duration-300 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Calendar className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span>RÉSERVATION</span>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/tarifs"
                      className="flex items-center space-x-4 px-4 py-3 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 text-gray-800 hover:text-primary font-medium transition-all duration-300 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Euro className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span>TARIFS</span>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/blog"
                      className="flex items-center space-x-4 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 text-gray-800 hover:text-primary font-medium transition-all duration-300 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <BookOpen className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span>BLOG</span>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contact"
                      className="flex items-center space-x-4 px-4 py-3 rounded-xl bg-gradient-to-r from-gray-50 to-slate-50 hover:from-gray-100 hover:to-slate-100 text-gray-800 hover:text-primary font-medium transition-all duration-300 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span>CONTACT</span>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.0 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/plan-du-site"
                      className="flex items-center space-x-4 px-4 py-3 rounded-xl bg-gradient-to-r from-gray-50 to-slate-50 hover:from-gray-100 hover:to-slate-100 text-gray-800 hover:text-primary font-medium transition-all duration-300 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <List className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span>PLAN DU SITE</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.nav>

              {/* Secteurs */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.55 }}
                className="space-y-2"
              >
                <motion.button
                  onClick={() => setIsMobileSectorsOpen(!isMobileSectorsOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800 font-medium hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4">
                    <Compass className="w-5 h-5 text-primary" />
                    <span>NOS SECTEURS</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isMobileSectorsOpen ? 0 : 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isMobileSectorsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="ml-6 space-y-1 border-l-2 border-gray-200 pl-4 overflow-hidden"
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href="/secteurs/nice-gare"
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span className="text-sm">Gare SNCF</span>
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href="/secteurs/nice-centre-ville"
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <MapPin className="w-4 h-4 text-indigo-600" />
                          <span className="text-sm">
                            Centre-Ville
                          </span>
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href="/secteurs/cannes"
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Compass className="w-4 h-4 text-orange-500" />
                          <span className="text-sm">Cannes</span>
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href="/secteurs/antibes"
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <MapPin className="w-4 h-4 text-green-600" />
                          <span className="text-sm">Antibes</span>
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href="/secteurs/menton"
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <MapPin className="w-4 h-4 text-red-500" />
                          <span className="text-sm">Menton</span>
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href="/secteurs/saint-tropez"
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Compass className="w-4 h-4 text-pink-500" />
                          <span className="text-sm">Saint-Tropez</span>
                        </Link>
                      </motion.div>
                      <div className="border-t border-gray-200 my-2"></div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href="/secteurs"
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-blue-600 font-semibold transition-all duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Compass className="w-4 h-4 text-primary" />
                          <span className="text-sm">Tous nos secteurs</span>
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Bouton Réserver fixe en bas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 1.0 }}
                className="px-6 py-4 border-t border-gray-200 bg-white"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/reservation"
                    className="block w-full bg-gradient-to-r from-primary to-blue-600 text-white text-center py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🚗 RÉSERVER
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
