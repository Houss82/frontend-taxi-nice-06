"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { motion } from "framer-motion";
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
    <section className="relative py-20 bg-transparent overflow-hidden">
      {/* Image de fond fixe pour desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-80 hidden md:block"
        style={{
          backgroundImage: "url('/bg-content-seo.jpeg')",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Fond moderne avec formes géométriques pour mobile */}
      <div className="absolute inset-0 md:hidden overflow-hidden">
        {/* Formes géométriques en arrière-plan */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/4 -left-16 w-32 h-32 bg-primaryDark/30 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/25 rounded-full blur-md"></div>
        <div className="absolute bottom-1/4 -left-8 w-36 h-36 bg-primaryDark/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-primary/30 rounded-full blur-lg"></div>

        {/* Formes ovales */}
        <div className="absolute top-1/3 left-1/4 w-48 h-24 bg-gradient-to-r from-primary/15 to-primaryDark/20 rounded-full blur-lg transform -rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-16 bg-gradient-to-r from-primaryDark/20 to-primary/15 rounded-full blur-md transform rotate-45"></div>

        {/* Segments rectangulaires */}
        <div className="absolute top-1/2 left-0 w-16 h-1 bg-gradient-to-r from-transparent to-primary/40 blur-sm"></div>
        <div className="absolute top-3/4 right-0 w-20 h-1 bg-gradient-to-l from-transparent to-primaryDark/40 blur-sm"></div>
        <div className="absolute top-1/4 left-1/2 w-12 h-1 bg-gradient-to-r from-primary/30 to-transparent blur-sm transform rotate-45"></div>

        {/* Motifs géométriques */}

        <div className="absolute top-20 left-1/3 w-1 h-1 bg-primaryDark/60 rounded-full"></div>
        <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-primaryDark/50 rounded-full"></div>
        <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-primary/60 rounded-full"></div>
      </div>

      <div className="relative z-20 container mx-auto px-4 bg-transparent">
        {/* Titre principal */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-6 text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {t("seoContent.title")}
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-primary mx-auto rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="bg-gradient-to-r from-primary to-primaryDark rounded-xl p-8 text-white shadow-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center justify-center space-x-2 bg-black p-2 pr-4 w-72 h-24 rounded-lg mb-5"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              >
                <span className="text-white font-bold text-2xl">TN</span>
              </motion.div>
              <motion.span
                className="text-white font-bold text-2xl md:text-4xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              >
                TAXI
              </motion.span>
              <motion.span
                className="text-blue-500 font-bold text-2xl md:text-4xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              >
                NICE
              </motion.span>
            </motion.div>

            <motion.p
              className="text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              {t("seoContent.intro")}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Grille de cartes */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {/* Section 1 */}
          <motion.div
            className="bg-white/80 md:bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            {/* Image de fond pour la section */}
            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primaryDark/30 md:bg-gradient-to-br md:from-primary/20 md:to-primaryDark/30 overflow-hidden">
              {/* Image de fond pour mobile */}
              <div
                className="absolute inset-0 bg-cover bg-center md:hidden"
                style={{ backgroundImage: "url('/expertise.jpg')" }}
              ></div>
              <div className="absolute inset-0 bg-black/10 md:bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center"></div>
              {/* Motif décoratif */}
            </div>

            <div className="p-8">
              <motion.div
                className="flex items-center justify-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary to-primaryDark rounded-xl flex items-center justify-center mr-4 mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3
                  className="text-xl text-center font-bold text-gray-800"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
                >
                  {t("seoContent.section1.title")}
                </motion.h3>
              </motion.div>
              <motion.div
                className="text-lg leading-relaxed text-gray-600 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
              >
                {isExpanded("section1") ? (
                  <p>{t("seoContent.section1.content")}</p>
                ) : (
                  <p>{truncateText(t("seoContent.section1.content"))}</p>
                )}
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9, ease: "easeOut" }}
              >
                <motion.button
                  onClick={() => toggleCard("section1")}
                  className="flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isExpanded("section1") ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            className="bg-white/80 md:bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            {/* Image de fond pour la section */}
            <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/30 md:bg-gradient-to-br md:from-blue-500/20 md:to-cyan-500/30 overflow-hidden">
              {/* Image de fond pour mobile */}
              <div
                className="absolute inset-0 bg-cover bg-center md:hidden"
                style={{ backgroundImage: "url('/perso.jpeg')" }}
              ></div>
              <div className="absolute inset-0 bg-black/10 md:bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center"></div>
              {/* Motif décoratif */}
            </div>

            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primaryDark rounded-xl flex items-center justify-center mr-4 mb-4">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-center font-bold text-gray-800">
                  {t("seoContent.section2.title")}
                </h3>
              </div>
              <div className="text-lg leading-relaxed text-gray-600 mb-4">
                {isExpanded("section2") ? (
                  <p>{t("seoContent.section2.content")}</p>
                ) : (
                  <p>{truncateText(t("seoContent.section2.content"))}</p>
                )}
              </div>
              <div className="flex justify-center">
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
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            className="bg-white/80 md:bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            {/* Image de fond pour la section */}
            <div className="relative h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/30 md:bg-gradient-to-br md:from-green-500/20 md:to-emerald-500/30 overflow-hidden">
              {/* Image de fond pour mobile */}
              <div
                className="absolute inset-0 bg-cover bg-center md:hidden"
                style={{ backgroundImage: "url('/premium.jpeg')" }}
              ></div>
              <div className="absolute inset-0 bg-black/10 md:bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center"></div>
              {/* Motif décoratif */}
            </div>

            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primaryDark rounded-xl flex items-center justify-center mr-4 mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-center font-bold text-gray-800">
                  {t("seoContent.section3.title")}
                </h3>
              </div>
              <div className="text-lg leading-relaxed text-gray-600 mb-4">
                {isExpanded("section3") ? (
                  <p>{t("seoContent.section3.content")}</p>
                ) : (
                  <p>{truncateText(t("seoContent.section3.content"))}</p>
                )}
              </div>
              <div className="flex justify-center">
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
            </div>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            className="bg-white/80 md:bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            {/* Image de fond pour la section */}
            <div className="relative h-48 bg-gradient-to-br from-yellow-500/20 to-orange-500/30 md:bg-gradient-to-br md:from-yellow-500/20 md:to-orange-500/30 overflow-hidden">
              {/* Image de fond pour mobile */}
              <div
                className="absolute inset-0 bg-cover bg-center md:hidden"
                style={{ backgroundImage: "url('/stratégie prix.webp')" }}
              ></div>
              <div className="absolute inset-0 bg-black/10 md:bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center"></div>
              {/* Motif décoratif */}
            </div>

            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primaryDark rounded-xl flex items-center justify-center mr-4 mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-center  font-bold text-gray-800">
                  {t("seoContent.section4.title")}
                </h3>
              </div>
              <div className="text-lg leading-relaxed text-gray-600 mb-4">
                {isExpanded("section4") ? (
                  <p>{t("seoContent.section4.content")}</p>
                ) : (
                  <p>{truncateText(t("seoContent.section4.content"))}</p>
                )}
              </div>
              <div className="flex justify-center">
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
            </div>
          </motion.div>

          {/* Conclusion - carte spéciale qui prend toute la largeur */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-primary to-primaryDark rounded-xl p-8 text-white shadow-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            whileHover={{
              y: -5,
              scale: 1.01,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            >
              <motion.div
                className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3
                className="text-2xl font-bold"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
              >
                {t("seoContent.conclusion.title")}
              </motion.h3>
            </motion.div>
            <motion.p
              className="text-xl leading-relaxed text-white/95"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
              {t("seoContent.conclusion.content")}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
