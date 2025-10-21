"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";

/**
 * Composant wrapper pour éviter les erreurs d'hydratation
 * Affiche le contenu seulement après l'hydratation côté client
 */
export default function ClientOnly({ children, fallback = null }) {
  const { isHydrated } = useLanguage();

  if (!isHydrated) {
    return fallback;
  }

  return children;
}








