"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LanguageToggle from "./LanguageToggle.jsx";

export default function Navbar() {
  const { t, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
                  className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                >
                  <a
                    href="/services/transfert-aeroport"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Transfert Aéroport
                  </a>
                  <a
                    href="/services/excursions"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Excursions
                  </a>
                  <a
                    href="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Tous les services
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
          {/* Menu Burger - Mobile uniquement */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col items-center p-2 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
            <span className="text-xs text-gray-600 mt-1">Menu</span>
          </button>
        </div>
      </div>

      {/* Menu mobile avec animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
          >
            <motion.nav
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="px-4 py-4 space-y-3"
            >
              <motion.a
                href="/"
                className="block text-black hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {t("navbar.home")}
              </motion.a>
              {/* Services avec sous-menu mobile */}
              <div className="space-y-2">
                <div className="text-gray-600 font-semibold py-2 text-sm uppercase tracking-wide">
                  {t("navbar.services")}
                </div>
                <motion.a
                  href="/services/transfert-aeroport"
                  className="block text-gray-700 hover:text-primary font-medium py-2 pl-4 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Transfert Aéroport
                </motion.a>
                <motion.a
                  href="/services/excursions"
                  className="block text-gray-700 hover:text-primary font-medium py-2 pl-4 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Excursions
                </motion.a>
                <motion.a
                  href="/services"
                  className="block text-gray-700 hover:text-primary font-medium py-2 pl-4 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Tous les services
                </motion.a>
              </div>
              <motion.a
                href="/reservation"
                className="block text-black hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {t("navbar.reservation")}
              </motion.a>
              <motion.a
                href="/tarifs"
                className="block text-black hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {language === "fr" ? "NOS TARIFS" : "OUR PRICING"}
              </motion.a>
              <motion.a
                href="/contact"
                className="block text-black hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {language === "fr" ? "CONTACT" : "CONTACT"}
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
