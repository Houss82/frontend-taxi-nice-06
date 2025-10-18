"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ClientOnly from "./ClientOnly.jsx";

export default function LanguageToggle() {
  const { language, isHydrated } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Synchroniser la langue avec l'URL au montage du composant
  useEffect(() => {
    if (!isHydrated) return;

    const urlParams = new URLSearchParams(searchParams);
    const urlLang = urlParams.get("lang");

    // Si l'URL a un paramètre lang différent de la langue actuelle, mettre à jour
    if (urlLang && urlLang !== language) {
      // La langue sera mise à jour automatiquement par le contexte
      // qui écoute les changements d'URL
    }
  }, [isHydrated, searchParams, language]);

  const handleLanguageChange = () => {
    const newLanguage = language === "fr" ? "en" : "fr";

    // Créer une nouvelle URL avec le paramètre de langue
    const currentPath = window.location.pathname;
    const params = new URLSearchParams(searchParams);
    params.set("lang", newLanguage);

    // Naviguer vers la nouvelle URL sans remonter en haut
    router.replace(`${currentPath}?${params.toString()}`, { scroll: false });
  };

  return (
    <ClientOnly
      fallback={
        <button className="flex items-center space-x-2 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg">
          <span className="text-lg">🇫🇷</span>
          <span className="font-medium text-sm">FR</span>
        </button>
      }
    >
      <button
        onClick={handleLanguageChange}
        className="flex items-center space-x-2 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors duration-200"
        title={language === "fr" ? "Switch to English" : "Passer en français"}
      >
        <span className="text-lg">{language === "fr" ? "🇬🇧" : "🇫🇷"}</span>
        <span className="font-medium text-sm">
          {language === "fr" ? "EN" : "FR"}
        </span>
      </button>
    </ClientOnly>
  );
}
