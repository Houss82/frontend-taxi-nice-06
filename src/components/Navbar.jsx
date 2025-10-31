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
  MapPin,
  Menu,
  Phone,
  Plane,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  // Fermer le menu services quand on clique à l'extérieur
  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 md:sticky">
      <div className="h-16 flex items-center justify-between px-4 md:px-6">
        <a
          href="/"
          className="flex items-center space-x-2 bg-black p-2 sm:pr-3 lg:pr-4 rounded-lg"
        >
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">TN</span>
          </div>
          <span className="hidden lg:block text-white font-bold text-lg">
            TAXI
          </span>
          <span className="hidden lg:block text-blue-500 font-bold text-lg">
            NICE
          </span>
        </a>
        <nav className="hidden lg:flex gap-6 xl:gap-8">
          <a href="/" className="text-black hover:text-primary font-medium">
            ACCUEIL
          </a>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-black hover:text-primary font-medium flex items-center gap-1"
            >
              SERVICES
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
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
                  className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                >
                  <a
                    href="/services/transferts-aeroport"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Plane className="w-4 h-4 text-blue-500" />
                      <span>Transferts Aéroport</span>
                    </div>
                  </a>
                  <a
                    href="/services/arrivees-destinations"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-green-500" />
                      <span>Arrivées & Destinations</span>
                    </div>
                  </a>
                  <a
                    href="/services/van-premium"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span>Van Premium (8 pers.)</span>
                    </div>
                  </a>
                  <a
                    href="/services/flotte-recente"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Car className="w-4 h-4 text-indigo-500" />
                      <span>Flotte Récente</span>
                    </div>
                  </a>
                  <a
                    href="/services/excursions-decouvertes"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Compass className="w-4 h-4 text-orange-500" />
                      <span>Excursions & Découvertes</span>
                    </div>
                  </a>
                  <a
                    href="/services/evenements-mariages"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Crown className="w-4 h-4 text-pink-500" />
                      <span>Événements & Mariages</span>
                    </div>
                  </a>
                  <a
                    href="/services/transferts-evenements"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Briefcase className="w-4 h-4 text-amber-500" />
                      <span>Transferts Événements</span>
                    </div>
                  </a>
                  <a
                    href="/services/vsl"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span>VSL Transport Médical</span>
                    </div>
                  </a>
                  <a
                    href="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-t border-gray-200 mt-2"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <span>Tous les services</span>
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="/reservation"
            className="text-black hover:text-primary font-medium"
          >
            RÉSERVATION
          </a>
          <a
            href="/tarifs"
            className="text-black hover:text-primary font-medium"
          >
            TARIFS
          </a>
          <a href="/blog" className="text-black hover:text-primary font-medium">
            BLOG
          </a>
          <a
            href="/partenaires"
            className="text-black hover:text-primary font-medium"
          >
            PARTENAIRES
          </a>
          <a
            href="/contact"
            className="text-black hover:text-primary font-medium"
          >
            CONTACT
          </a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/reservation"
            className="px-4 py-2 bg-primary text-white hover:bg-primary/90 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2"
          >
            RÉSERVER
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menu mobile avec animation améliorée */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay avec effet de flou */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu principal */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:hidden fixed top-16 left-0 right-0 bottom-0 z-50 bg-gradient-to-br from-white to-gray-50 border-t border-gray-200 shadow-2xl flex flex-col"
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
                  <motion.a
                    href="/"
                    className="flex items-center space-x-4 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-gray-800 hover:text-primary font-medium transition-all duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Home className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span>ACCUEIL</span>
                  </motion.a>

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
                          <motion.a
                            href="/services/transferts-aeroport"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Plane className="w-4 h-4 text-blue-500" />
                            <span className="text-sm">Transferts Aéroport</span>
                          </motion.a>
                          <motion.a
                            href="/services/arrivees-destinations"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <MapPin className="w-4 h-4 text-green-500" />
                            <span className="text-sm">
                              Arrivées & Destinations
                            </span>
                          </motion.a>
                          <motion.a
                            href="/services/van-premium"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Users className="w-4 h-4 text-purple-500" />
                            <span className="text-sm">
                              Van Premium (8 pers.)
                            </span>
                          </motion.a>
                          <motion.a
                            href="/services/flotte-recente"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Car className="w-4 h-4 text-indigo-500" />
                            <span className="text-sm">Flotte Récente</span>
                          </motion.a>
                          <motion.a
                            href="/services/excursions-decouvertes"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Compass className="w-4 h-4 text-orange-500" />
                            <span className="text-sm">
                              Excursions & Découvertes
                            </span>
                          </motion.a>
                          <motion.a
                            href="/services/evenements-mariages"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Crown className="w-4 h-4 text-pink-500" />
                            <span className="text-sm">
                              Événements & Mariages
                            </span>
                          </motion.a>
                          <motion.a
                            href="/services/transferts-evenements"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Briefcase className="w-4 h-4 text-amber-500" />
                            <span className="text-sm">
                              Transferts Événements
                            </span>
                          </motion.a>
                          <motion.a
                            href="/services/vsl"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Heart className="w-4 h-4 text-red-500" />
                            <span className="text-sm">
                              VSL Transport Médical
                            </span>
                          </motion.a>
                          <div className="border-t border-gray-200 my-2"></div>
                          <motion.a
                            href="/services"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-blue-600 font-semibold transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Car className="w-4 h-4 text-indigo-500" />
                            <span className="text-sm">Tous les services</span>
                          </motion.a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.a
                    href="/reservation"
                    className="flex items-center space-x-4 px-4 py-3 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 text-gray-800 hover:text-primary font-medium transition-all duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Calendar className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span>RÉSERVATION</span>
                  </motion.a>

                  <motion.a
                    href="/tarifs"
                    className="flex items-center space-x-4 px-4 py-3 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 text-gray-800 hover:text-primary font-medium transition-all duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Euro className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span>TARIFS</span>
                  </motion.a>

                  <motion.a
                    href="/blog"
                    className="flex items-center space-x-4 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 text-gray-800 hover:text-primary font-medium transition-all duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <BookOpen className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span>BLOG</span>
                  </motion.a>

                  <motion.a
                    href="/partenaires"
                    className="flex items-center space-x-4 px-4 py-3 rounded-xl bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 text-gray-800 hover:text-primary font-medium transition-all duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Users className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span>PARTENAIRES</span>
                  </motion.a>

                  <motion.a
                    href="/contact"
                    className="flex items-center space-x-4 px-4 py-3 rounded-xl bg-gradient-to-r from-gray-50 to-slate-50 hover:from-gray-100 hover:to-slate-100 text-gray-800 hover:text-primary font-medium transition-all duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span>CONTACT</span>
                  </motion.a>
                </div>
              </motion.nav>

              {/* Bouton Réserver fixe en bas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 1.0 }}
                className="px-6 py-4 border-t border-gray-200 bg-white"
              >
                <motion.a
                  href="/reservation"
                  className="block w-full bg-gradient-to-r from-primary to-blue-600 text-white text-center py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  🚗 RÉSERVER
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
