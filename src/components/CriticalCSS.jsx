"use client";

/**
 * Composant pour injecter le CSS critique inline
 * Améliore le First Contentful Paint en évitant les ressources bloquantes
 */
export default function CriticalCSS() {
  return (
    <style jsx global>{`
      /* CSS critique pour le héros - injecté inline */
      .hero-section {
        background: linear-gradient(135deg, #1e66f5 0%, #1552c8 100%);
        min-height: 60vh;
        position: relative;
        overflow: hidden;
        padding-top: 40px; /* Espace réduit pour remonter la section */
      }

      .hero-content {
        position: relative;
        z-index: 10;
        color: white;
        padding: 2rem 1rem;
        margin-top: 3rem; /* Espace pour desktop */
      }

      /* Ajustement pour mobile */
      @media (max-width: 768px) {
        .hero-section {
          padding-top: 50px; /* Espace réduit pour mobile aussi */
        }

        .hero-content {
          margin-top: 2rem; /* Descend le contenu en mobile */
          padding: 2rem 1rem;
          padding-top: 3rem; /* Espace supplémentaire en haut */
        }
      }

      .hero-title {
        font-family: "Inter", sans-serif;
        font-size: clamp(2rem, 5vw, 4rem);
        font-weight: 700;
        line-height: 1.1;
        margin-bottom: 1rem;
      }

      .hero-subtitle {
        font-size: clamp(1.125rem, 3vw, 2rem);
        font-weight: 600;
        margin-bottom: 1rem;
        opacity: 0.9;
      }

      .hero-description {
        font-size: clamp(0.875rem, 2vw, 1.25rem);
        margin-bottom: 2rem;
        opacity: 0.9;
      }

      .hero-button {
        display: inline-block;
        background: #1e66f5;
        color: white;
        padding: 0.75rem 2rem;
        border-radius: 0.5rem;
        font-weight: 700;
        text-decoration: none;
        transition: background-color 0.3s ease;
      }

      .hero-button:hover {
        background: #1552c8;
      }

      /* Optimisation pour les images */
      .hero-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 5%;
      }

      /* Ajustement de l'image pour mobile */
      @media (max-width: 768px) {
        .hero-image {
          object-position: center -10%; /* Remonte l'image en mobile */
        }
      }

      /* Styles de base pour éviter le layout shift */
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Geist", sans-serif;
      }

      /* Skeleton loader pour les images */
      .image-skeleton {
        background: linear-gradient(
          90deg,
          #f0f0f0 25%,
          #e0e0e0 50%,
          #f0f0f0 75%
        );
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }

      @keyframes loading {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }
    `}</style>
  );
}
