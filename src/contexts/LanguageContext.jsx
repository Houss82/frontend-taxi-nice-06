"use client";

import { useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children, initialTranslations = {} }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [language, setLanguage] = useState("fr"); // Toujours 'fr' par défaut côté serveur
  const [translations, setTranslations] = useState(initialTranslations);
  const searchParams = useSearchParams();

  // Marquer comme hydraté côté client et détecter la langue
  useEffect(() => {
    setIsHydrated(true);

    // Détecter la langue depuis l'URL en priorité
    const urlLang = searchParams.get("lang");

    if (urlLang && ["fr", "en"].includes(urlLang)) {
      setLanguage(urlLang);
    } else {
      // Sinon, utiliser localStorage
      const storedLang = localStorage.getItem("preferred-language");
      if (storedLang && ["fr", "en"].includes(storedLang)) {
        setLanguage(storedLang);
      }
    }
  }, [searchParams]);

  // Sauvegarder la langue dans localStorage à chaque changement
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("preferred-language", language);
    }
  }, [language, isHydrated]);

  // Charger les traductions
  useEffect(() => {
    if (!isHydrated) return;

    const loadTranslations = async () => {
      try {
        // Toujours recharger les traductions pour s'assurer qu'elles sont à jour
        const response = await fetch(`/locales/${language}/common.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error("Error loading translations:", error);
        // Fallback vers le français en cas d'erreur
        if (language !== "fr") {
          try {
            const fallbackResponse = await fetch("/locales/fr/common.json");
            const fallbackData = await fallbackResponse.json();
            setTranslations(fallbackData);
          } catch (fallbackError) {
            console.error(
              "Error loading fallback translations:",
              fallbackError
            );
          }
        }
      }
    };

    loadTranslations();
  }, [language, isHydrated]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Retourner la clé si la traduction n'est pas trouvée
      }
    }

    // S'assurer qu'on retourne toujours une chaîne
    if (typeof value === "string") {
      return value;
    } else if (typeof value === "object" && value !== null) {
      // Si c'est un objet, retourner la clé pour éviter l'erreur
      return key;
    }

    return String(value || key);
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t, isHydrated }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
