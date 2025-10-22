"use client";

import { HeroImage } from "@/components/OptimizedImage.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero-section">
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[650px] overflow-hidden sm:-mt-16">
        {/* Image principale optimisée pour LCP */}
        <HeroImage
          src="/bgimage10.png"
          alt="Mercedes GLC Taxi Nice"
          className="hero-image"
        />

        {/* Dégradé pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />

        {/* Contenu textuel optimisé avec CSS critique et animations */}
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {t("hero.title")}
          </motion.h1>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {t("hero.subtitle")}
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {t("hero.description")}
          </motion.p>

          <motion.a
            href="#reservation"
            className="hero-button"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            {t("hero.bookTaxi")}
          </motion.a>
        </div>
      </div>
    </section>
  );
}
