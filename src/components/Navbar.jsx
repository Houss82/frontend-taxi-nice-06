"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageToggle from "./LanguageToggle.jsx";

export default function Navbar() {
  const { t, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <a
            href="#services"
            className="text-black hover:text-primary font-medium"
          >
            {t("navbar.services")}
          </a>
          <a
            href="/reservation"
            className="text-black hover:text-primary font-medium"
          >
            {t("navbar.reservation")}
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
              <motion.a
                href="#services"
                className="block text-black hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {t("navbar.services")}
              </motion.a>
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
                href="#contact"
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
