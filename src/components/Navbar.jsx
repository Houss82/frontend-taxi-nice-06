"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Car,
  ChevronDown,
  Euro,
  Home,
  MapPin,
  Menu,
  Phone,
  Plane,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LanguageToggle from "./LanguageToggle.jsx";

export default function Navbar() {
  const { t, language } = useLanguage();
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
          className="flex items-center space-x-2 bg-black p-2 sm:pr-4 rounded-lg"
        >
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">TN</span>
          </div>
          <span className="hidden md:block text-white font-bold text-lg">
            TAXI
          </span>
          <span className="hidden md:block text-blue-500 font-bold text-lg">
            NICE
          </span>
        </a>
        <nav className="hidden md:flex gap-8">
          <a href="/" className="text-black hover:text-primary font-medium">
            {t("navbar.home")}
          </a>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-black hover:text-primary font-medium flex items-center gap-1"
            >
              {t("navbar.services")}
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
                    ✈️ Transferts Aéroport
                  </a>
                  <a
                    href="/services/arrivees-destinations"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    🎯 Arrivées & Destinations
                  </a>
                  <a
                    href="/services/van-premium"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    🚐 Van Premium (8 pers.)
                  </a>
                  <a
                    href="/services/flotte-recente"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    🚗 Flotte Récente
                  </a>
                  <a
                    href="/services/excursions-decouvertes"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    🗺️ Excursions & Découvertes
                  </a>
                  <a
                    href="/services/evenements-mariages"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    💍 Événements & Mariages
                  </a>
                  <a
                    href="/services/transferts-evenements"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    🎪 Transferts Événements
                  </a>
                  <a
                    href="/services/vsl"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    🏥 VSL Transport Médical
                  </a>
                  <div className="border-t border-gray-200 my-2"></div>
                  <a
                    href="/services"
                    className="block px-4 py-2 text-blue-600 hover:bg-blue-50 font-semibold transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    📋 Tous les services
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="/reservation"
            className="text-black hover:text-primary font-medium"
          >
            {t("navbar.reservation")}
          </a>
          <a
            href="/tarifs"
            className="text-black hover:text-primary font-medium"
          >
            {language === "fr" ? "TARIFS" : "PRICING"}
          </a>
          <a href="/blog" className="text-black hover:text-primary font-medium">
            {language === "fr" ? "BLOG" : "BLOG"}
          </a>
          <a
            href="/partenaires"
            className="text-black hover:text-primary font-medium"
          >
            {language === "fr" ? "PARTENAIRES" : "PARTNERS"}
          </a>
          <a
            href="/contact"
            className="text-black hover:text-primary font-medium"
          >
            {language === "fr" ? "CONTACT" : "CONTACT"}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          {/* Bouton Réserver - Desktop uniquement */}
          <a
            href="/reservation"
            className="hidden md:block bg-primary text-white px-6 py-2 rounded font-medium hover:bg-primaryDark transition-colors"
          >
            {t("navbar.bookNowFull")}
          </a>
          {/* Menu Burger - Mobile amélioré */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 z-[60]"
            aria-label="Menu"
          >
            <motion.div
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-6 h-6"
            >
              <Menu className="w-6 h-6 text-primary" />
            </motion.div>
            <motion.span
              className="text-xs text-gray-600 mt-1 font-medium"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              Menu
            </motion.span>
          </button>
        </div>
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
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu principal */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="md:hidden fixed top-16 left-0 right-0 bottom-0 z-50 bg-gradient-to-br from-white to-gray-50 border-t border-gray-200 shadow-2xl flex flex-col"
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
                    <span>{t("navbar.home")}</span>
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
                        <span>{t("navbar.services")}</span>
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
                            <Plane className="w-4 h-4" />
                            <span className="text-sm">Transferts Aéroport</span>
                          </motion.a>
                          <motion.a
                            href="/services/arrivees-destinations"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <MapPin className="w-4 h-4" />
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
                            <Users className="w-4 h-4" />
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
                            <Car className="w-4 h-4" />
                            <span className="text-sm">Flotte Récente</span>
                          </motion.a>
                          <motion.a
                            href="/services/excursions-decouvertes"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <MapPin className="w-4 h-4" />
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
                            <Calendar className="w-4 h-4" />
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
                            <Calendar className="w-4 h-4" />
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
                            <Phone className="w-4 h-4" />
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
                            <Car className="w-4 h-4" />
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
                    <span>{t("navbar.reservation")}</span>
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
                    <span>
                      {language === "fr" ? "NOS TARIFS" : "OUR PRICING"}
                    </span>
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
                    <span>{language === "fr" ? "BLOG" : "BLOG"}</span>
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
                    <span>
                      {language === "fr" ? "PARTENAIRES" : "PARTNERS"}
                    </span>
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
                    <span>{language === "fr" ? "CONTACT" : "CONTACT"}</span>
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
                  🚗 {t("navbar.bookNowFull")}
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
