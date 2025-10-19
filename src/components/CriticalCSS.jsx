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
        background: linear-gradient(135deg, #1E66F5 0%, #1552C8 100%);
        min-height: 60vh;
        position: relative;
        overflow: hidden;
      }
      
      .hero-content {
        position: relative;
        z-index: 10;
        color: white;
        padding: 2rem 1rem;
      }
      
      .hero-title {
        font-family: 'Poppins', sans-serif;
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
        background: #1E66F5;
        color: white;
        padding: 0.75rem 2rem;
        border-radius: 0.5rem;
        font-weight: 700;
        text-decoration: none;
        transition: background-color 0.3s ease;
      }
      
      .hero-button:hover {
        background: #1552C8;
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
      
      /* Préchargement des polices critiques */
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400 700;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      
      /* Styles de base pour éviter le layout shift */
      body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }
      
      /* Skeleton loader pour les images */
      .image-skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `}</style>
  );
}
