"use client";

import enTranslations from "@/../public/locales/en/common.json";
import frTranslations from "@/../public/locales/fr/common.json";
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
  const [language, setLanguage] = useState("fr");

  // Utiliser les traductions préchargées ou charger depuis les imports
  const [translations, setTranslations] = useState(() => {
    if (Object.keys(initialTranslations).length > 0) {
      return initialTranslations;
    }
    // Fallback vers les traductions importées directement
    return language === "fr" ? frTranslations : enTranslations;
  });

  // Charger les traductions uniquement si on change de langue
  useEffect(() => {
    if (language === "fr" && translations !== frTranslations) {
      setTranslations(frTranslations);
    } else if (language === "en" && translations !== enTranslations) {
      setTranslations(enTranslations);
    }
  }, [language, translations]);

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

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
