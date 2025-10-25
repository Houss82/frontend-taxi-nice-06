"use client";

import { useEffect } from "react";

/**
 * Composant pour charger les scripts non critiques de manière différée
 * Améliore les performances en évitant le blocage du rendu initial
 */
export default function LazyScripts() {
  useEffect(() => {
    // Charger les scripts non critiques après que la page soit interactive
    const loadNonCriticalScripts = () => {
      // Scripts d'analytics et tracking (déjà gérés par GTM)
      // Ici on peut ajouter d'autres scripts non critiques si nécessaire
      
      console.log("Scripts non critiques chargés");
    };

    // Charger après un délai pour ne pas bloquer le rendu initial
    const timeoutId = setTimeout(loadNonCriticalScripts, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return null; // Ce composant ne rend rien
}

/**
 * Hook pour charger des ressources de manière différée
 */
export function useLazyLoad(resourceUrl, delay = 1000) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Charger la ressource de manière asynchrone
      if (typeof window !== 'undefined') {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = resourceUrl;
        link.media = 'print';
        link.onload = () => {
          link.media = 'all';
        };
        document.head.appendChild(link);
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [resourceUrl, delay]);
}














