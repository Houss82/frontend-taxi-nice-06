"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { useState, useEffect } from "react";

/**
 * Composant Hero ultra-optimisé pour maximiser les performances LCP
 * Utilise des techniques avancées pour réduire le Load Delay
 */
export default function UltraOptimizedHero() {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [useWebP, setUseWebP] = useState(false);

  // Détecter le support WebP
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    setUseWebP(canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0);
  }, []);

  // Précharger l'image critique
  useEffect(() => {
    const preloadImage = () => {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.src = "/bgimage10.png";
    };

    // Précharger immédiatement
    preloadImage();
  }, []);

  return (
    <section className="hero-section">
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[650px] overflow-hidden">
        {/* Image ultra-optimisée avec préchargement */}
        <div className="hero-image-container">
          {!imageLoaded && (
            <div className="hero-image-skeleton" />
          )}
          <img
            src="/bgimage10.png"
            alt="Mercedes GLC Taxi Nice"
            className={`hero-image ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 5%',
              transition: 'opacity 0.3s ease'
            }}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        </div>

        {/* Dégradé pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />

        {/* Contenu textuel optimisé */}
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

      <style jsx>{`
        .hero-image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .hero-image-skeleton {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1e66f5 0%, #1552c8 100%);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        .hero-image {
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
}
