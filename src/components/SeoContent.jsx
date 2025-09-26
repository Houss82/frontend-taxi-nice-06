"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import {
  Award,
  Car,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Shield,
} from "lucide-react";
import { useState } from "react";

export default function SeoContent() {
  const { t } = useLanguage();
  const [expandedCards, setExpandedCards] = useState(new Set());

  const toggleCard = (cardId) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const isExpanded = (cardId) => expandedCards.has(cardId);

  // Fonction pour tronquer le texte
  const truncateText = (text, maxLength = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Image de fond fixe */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-80"
        style={{
          backgroundImage: "url('/bg-content-seo.jpeg')",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              {t("seoContent.title")}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-primary to-primaryDark rounded-xl p-8 text-white shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-2xl font-bold">Introduction</h3>
            </div>
            <p className="text-xl leading-relaxed">{t("seoContent.intro")}</p>
          </div>
        </div>

        {/* Grille de cartes */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Section 1 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primaryDark rounded-xl flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {t("seoContent.section1.title")}
                </h3>
              </div>
              <button
                onClick={() => toggleCard("section1")}
                className="flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors duration-200"
              >
                {isExpanded("section1") ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>
            </div>
            <div className="text-lg leading-relaxed text-gray-600">
              {isExpanded("section1") ? (
                <p>{t("seoContent.section1.content")}</p>
              ) : (
                <p>{truncateText(t("seoContent.section1.content"))}</p>
              )}
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primaryDark rounded-xl flex items-center justify-center mr-4">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {t("seoContent.section2.title")}
                </h3>
              </div>
              <button
                onClick={() => toggleCard("section2")}
                className="flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors duration-200"
              >
                {isExpanded("section2") ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>
            </div>
            <div className="text-lg leading-relaxed text-gray-600">
              {isExpanded("section2") ? (
                <p>{t("seoContent.section2.content")}</p>
              ) : (
                <p>{truncateText(t("seoContent.section2.content"))}</p>
              )}
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primaryDark rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {t("seoContent.section3.title")}
                </h3>
              </div>
              <button
                onClick={() => toggleCard("section3")}
                className="flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors duration-200"
              >
                {isExpanded("section3") ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>
            </div>
            <div className="text-lg leading-relaxed text-gray-600">
              {isExpanded("section3") ? (
                <p>{t("seoContent.section3.content")}</p>
              ) : (
                <p>{truncateText(t("seoContent.section3.content"))}</p>
              )}
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primaryDark rounded-xl flex items-center justify-center mr-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {t("seoContent.section4.title")}
                </h3>
              </div>
              <button
                onClick={() => toggleCard("section4")}
                className="flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors duration-200"
              >
                {isExpanded("section4") ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>
            </div>
            <div className="text-lg leading-relaxed text-gray-600">
              {isExpanded("section4") ? (
                <p>{t("seoContent.section4.content")}</p>
              ) : (
                <p>{truncateText(t("seoContent.section4.content"))}</p>
              )}
            </div>
          </div>

          {/* Conclusion - carte spéciale qui prend toute la largeur */}
          <div className="lg:col-span-2 bg-gradient-to-br from-primary to-primaryDark rounded-xl p-8 text-white shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">
                {t("seoContent.conclusion.title")}
              </h3>
            </div>
            <p className="text-xl leading-relaxed text-white/95">
              {t("seoContent.conclusion.content")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
