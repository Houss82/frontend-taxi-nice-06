"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors duration-200"
      title={language === "fr" ? "Switch to English" : "Passer en français"}
    >
      <span className="text-lg">{language === "fr" ? "🇬🇧" : "🇫🇷"}</span>
      <span className="font-medium text-sm">
        {language === "fr" ? "EN" : "FR"}
      </span>
    </button>
  );
}
