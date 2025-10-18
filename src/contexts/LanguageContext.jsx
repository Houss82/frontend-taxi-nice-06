"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");
  const [translations, setTranslations] = useState({});

  // Charger les traductions
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${language}/common.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error("Error loading translations:", error);
        // Fallback vers le français en cas d'erreur
        if (language !== "fr") {
          const fallbackResponse = await fetch("/locales/fr/common.json");
          const fallbackData = await fallbackResponse.json();
          setTranslations(fallbackData);
        }
      }
    };

    loadTranslations();
  }, [language]);

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
