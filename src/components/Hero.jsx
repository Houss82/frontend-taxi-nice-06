"use client";

import { HeroImage } from "@/components/OptimizedImage.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero-section">
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[650px] overflow-hidden">
        {/* Image principale optimisée pour LCP */}
        <HeroImage
          src="/bgimage10.png"
          alt="Mercedes GLC Taxi Nice"
          className="hero-image"
        />

        {/* Dégradé pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />

        {/* Contenu textuel optimisé avec CSS critique */}
        <div className="hero-content">
          <h1 className="hero-title">
            {t("hero.title")}
          </h1>
          <h2 className="hero-subtitle">
            {t("hero.subtitle")}
          </h2>
          <p className="hero-description">
            {t("hero.description")}
          </p>
          <a
            href="#reservation"
            className="hero-button"
          >
            {t("hero.bookTaxi")}
          </a>
        </div>
      </div>
    </section>
  );
}
