"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full">
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[650px] overflow-hidden">
        {/* Image principale fixe comme dans l'image */}
        <img
          src="/bgimage10.png"
          alt="Mercedes GLC Taxi Nice"
          className="absolute inset-0 w-full h-full object-cover object-[center_5%] md:object-[center_25%] lg:object-[center_50%] animate-pulse-scale"
        />

        {/* Dégradé pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />

        {/* Contenu textuel positionné comme dans l'image */}
        <div className="absolute left-4 right-4 md:left-16 top-1/4 md:top-1/3 transform -translate-y-1/2 max-w-4xl">
          <h1
            className="text-3xl sm:text-3xl md:text-5xl lg:text-7xl text-black font-bold leading-tight mb-2 md:mb-4 animate-slide-in-right"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            {t("hero.title")}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-4xl font-semibold text-white/90 mb-4 md:mb-8 animate-slide-in-left">
            {t("hero.subtitle")}
          </h2>
          <p className="text-sm sm:text-base md:text-2xl text-white/90 mb-4 md:mb-8 font-medium animate-fade-in-up">
            {t("hero.description")}
          </p>
          <a
            href="#reservation"
            className="inline-block bg-primary text-white px-4 py-2 md:px-8 md:py-4 rounded font-bold text-sm md:text-lg hover:bg-primaryDark transition-colors animate-slide-in-left-delayed"
          >
            {t("hero.bookTaxi")}
          </a>
        </div>
      </div>
    </section>
  );
}
