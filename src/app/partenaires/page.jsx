"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { motion } from "framer-motion";
import {
  Building2,
  ExternalLink,
  Globe,
  HandshakeIcon,
  Plane,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PartenairesPage() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // Mettre à jour la catégorie sélectionnée quand la langue change
  useEffect(() => {
    if (language === "en") {
      setSelectedCategory("All");
    } else {
      setSelectedCategory("Tous");
    }
  }, [language]);

  // Fonction pour obtenir les traductions avec fallback
  const getTranslation = (key, fallback) => {
    const translation = t(key);
    return translation && translation !== key ? translation : fallback;
  };

  // Vérifier si les traductions sont chargées
  if (!t("partners.title") || t("partners.title") === "partners.title") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    {
      name: getTranslation("partners.title", "Nos Partenaires"),
      url: "/partenaires",
      title: `${getTranslation(
        "partners.title",
        "Nos Partenaires"
      )} - Taxi Nice Côte d'Azur`,
    },
  ];

  // REMPLACEZ ces exemples par vos VRAIS partenaires
  const partners = [
    {
      name: getTranslation(
        "partners.list.taxiConventionnePaca.name",
        "Taxi Conventionné PACA"
      ),
      category: getTranslation(
        "partners.list.taxiConventionnePaca.category",
        "Transport"
      ),
      description: getTranslation(
        "partners.list.taxiConventionnePaca.description",
        "Spécialiste transport médical conventionné CPAM. Couverture complète Fréjus, Saint-Raphaël, Draguignan et est du Var. Service sanitaire fiable et professionnel."
      ),
      website: "https://www.taxi-conventionne-paca.fr/",
      image: "/logo-taxi-conventionne-paca.png",
      icon: Plane,
      featured: true, // Partenaire stratégique (même secteur)
    },
    {
      name: getTranslation(
        "partners.list.taxiConventionneAntibes.name",
        "Taxi Conventionné Antibes"
      ),
      category: getTranslation(
        "partners.list.taxiConventionneAntibes.category",
        "Transport"
      ),
      description: getTranslation(
        "partners.list.taxiConventionneAntibes.description",
        "Transport médical VSL agréé CPAM à Antibes. Service conventionné couvrant Antibes, Juan-les-Pins, La Fontonne et Cap d'Antibes. Transport sanitaire professionnel."
      ),
      website: "https://www.taxi-conventionne-antibes.fr/",
      image: "/logo-taxi-conventionne-antibes.png",
      icon: Plane,
      featured: true, // Partenaire stratégique (même secteur)
    },
    {
      name: getTranslation(
        "partners.list.taxisConventionnesVar.name",
        "Taxis Conventionnés Var"
      ),
      category: getTranslation(
        "partners.list.taxisConventionnesVar.category",
        "Transport"
      ),
      description: getTranslation(
        "partners.list.taxisConventionnesVar.description",
        "VSL agréé CPAM transport médical 24h/24. Spécialiste conventionné Fréjus, Saint-Raphaël, Roquebrune-sur-Argens, Draguignan. Service tiers payant intégral."
      ),
      website: "https://www.taxis-conventionnes-var.fr/",
      image: "/logo-2 copie.png",
      icon: Plane,
      featured: true, // Partenaire stratégique (même secteur)
    },
    {
      name: getTranslation(
        "partners.list.taxiNiceAirport.name",
        "Taxi Nice Airport"
      ),
      category: getTranslation(
        "partners.list.taxiNiceAirport.category",
        "Transport"
      ),
      description: getTranslation(
        "partners.list.taxiNiceAirport.description",
        "Service VTC spécialisé transferts aéroport Nice. Chauffeurs anglophones, Mercedes premium, tarifs fixes dès 40€. Suivi de vol et meet & greet inclus."
      ),
      website: "https://www.taxi-niceairport.com/",
      image: "/logo-taxi-nice-airport.png",
      icon: Plane,
      featured: true,
    },
    {
      name: getTranslation(
        "partners.list.aeroportNice.name",
        "Aéroport Nice Côte d'Azur"
      ),
      category: getTranslation(
        "partners.list.aeroportNice.category",
        "Transport"
      ),
      description: getTranslation(
        "partners.list.aeroportNice.description",
        "3ème aéroport de France, porte d'entrée de la Côte d'Azur"
      ),
      website: "https://www.nice.aeroport.fr",
      image: "/airport_18499216.png",
      icon: Plane,
      featured: false,
    },
    {
      name: getTranslation(
        "partners.list.officeTourismeNice.name",
        "Office de Tourisme Nice"
      ),
      category: getTranslation(
        "partners.list.officeTourismeNice.category",
        "Tourisme"
      ),
      description: getTranslation(
        "partners.list.officeTourismeNice.description",
        "Promotion et information touristique de la ville de Nice"
      ),
      website: "https://www.nicetourisme.com",
      image: "/monaco.jpg",
      icon: Globe,
      featured: false,
    },
    // AJOUTEZ VOS AUTRES VRAIS PARTENAIRES ICI
    // Exemples : hôtels, restaurants, agences voyage, etc.
  ];

  const categories = [
    t("partners.categories.all"),
    t("partners.categories.transport"),
    t("partners.categories.tourism"),
  ];

  // Mapping des catégories traduites vers les catégories originales
  const getOriginalCategory = (translatedCategory) => {
    if (translatedCategory === "Tous" || translatedCategory === "All")
      return "Tous";
    if (translatedCategory === "Transport") return "Transport";
    if (translatedCategory === "Tourisme" || translatedCategory === "Tourism")
      return "Tourisme";
    return translatedCategory;
  };

  const filteredPartners =
    selectedCategory === "Tous" || selectedCategory === "All"
      ? partners
      : partners.filter(
          (p) => p.category === getOriginalCategory(selectedCategory)
        );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/bg-image.png"
          alt={`${getTranslation(
            "partners.title",
            "Nos Partenaires"
          )} - Taxi Nice Côte d'Azur`}
          fill
          className="object-cover"
          priority={true}
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primaryDark/90"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <HandshakeIcon className="w-12 h-12" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {getTranslation("partners.title", "Nos Partenaires")}
              </h1>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed">
              {getTranslation(
                "partners.subtitle",
                "Un réseau de professionnels de confiance pour vous offrir la meilleure expérience sur la Côte d'Azur"
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {getTranslation(
                "partners.intro.title",
                "Notre Réseau de Partenaires"
              )}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {getTranslation(
                "partners.intro.description",
                "Nous collaborons avec des entreprises de confiance dans toute la région pour vous offrir une expérience complète et de qualité. Nos partenaires partagent nos valeurs de professionnalisme et de service client."
              )}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-xl mb-2">
                  {partners.length}+{" "}
                  {getTranslation(
                    "partners.stats.partners.title",
                    "Partenaires"
                  )}
                </h3>
                <p className="text-gray-600">
                  {getTranslation(
                    "partners.stats.partners.description",
                    "Réseau établi et fiable"
                  )}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <Sparkles className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-xl mb-2">
                  {getTranslation(
                    "partners.stats.quality.title",
                    "Qualité Premium"
                  )}
                </h3>
                <p className="text-gray-600">
                  {getTranslation(
                    "partners.stats.quality.description",
                    "Sélection rigoureuse"
                  )}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <Building2 className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-xl mb-2">
                  {getTranslation(
                    "partners.stats.local.title",
                    "Locaux & Engagés"
                  )}
                </h3>
                <p className="text-gray-600">
                  {getTranslation(
                    "partners.stats.local.description",
                    "Ancrés sur la Côte d'Azur"
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Liste des partenaires */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Partenaires Premium */}
          {filteredPartners.some((p) => p.featured) && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {getTranslation(
                  "partners.premium.title",
                  "Partenaires Premium"
                )}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPartners
                  .filter((p) => p.featured)
                  .map((partner, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-primary/20"
                    >
                      <div className="relative h-64">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            {getTranslation(
                              "partners.premium.badge",
                              "Premium"
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <partner.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {partner.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {partner.category}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {partner.description}
                        </p>
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primaryDark transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          {getTranslation("partners.visit", "Visiter le site")}
                        </a>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          )}

          {/* Autres partenaires */}
          {filteredPartners.some((p) => !p.featured) && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {getTranslation("partners.other.title", "Nos Partenaires")}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {filteredPartners
                  .filter((p) => !p.featured)
                  .map((partner, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-48">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <partner.icon className="w-5 h-5 text-primary" />
                          <span className="text-xs text-primary font-semibold uppercase">
                            {partner.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {partner.name}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                          {partner.description}
                        </p>
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primaryDark transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {getTranslation("partners.visit", "Visiter le site")}
                        </a>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Devenir partenaire */}
      <section className="py-20 bg-gradient-to-r from-primary to-primaryDark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HandshakeIcon className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              {getTranslation("partners.cta.title", "Devenez partenaire")}
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {getTranslation(
                "partners.cta.description",
                "Vous êtes un professionnel du tourisme, de l'hôtellerie ou de l'événementiel sur la Côte d'Azur ? Rejoignez notre réseau de partenaires et développons ensemble nos activités."
              )}
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              {getTranslation("partners.cta.button", "Nous contacter")}
            </a>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2>
              {getTranslation(
                "partners.seo.title",
                "Pourquoi choisir nos partenaires ?"
              )}
            </h2>
            <p>
              {getTranslation(
                "partners.seo.description",
                "Tous nos partenaires sont soigneusement sélectionnés pour leur qualité de service, leur professionnalisme et leur engagement envers l'excellence. Que vous recherchiez un hôtel de luxe, un restaurant gastronomique, ou une agence de voyage locale, nos partenaires vous garantissent une expérience exceptionnelle sur la Côte d'Azur."
              )}
            </p>

            <h3>
              {getTranslation(
                "partners.seo.criteria.title",
                "Nos critères de sélection"
              )}
            </h3>
            <ul>
              <li>
                <strong>
                  {getTranslation(
                    "partners.seo.criteria.quality.title",
                    "Qualité certifiée"
                  )}
                </strong>{" "}
                :{" "}
                {getTranslation(
                  "partners.seo.criteria.quality.description",
                  "Établissements reconnus et appréciés"
                )}
              </li>
              <li>
                <strong>
                  {getTranslation(
                    "partners.seo.criteria.location.title",
                    "Localisation stratégique"
                  )}
                </strong>{" "}
                :{" "}
                {getTranslation(
                  "partners.seo.criteria.location.description",
                  "Présence à Nice et Côte d'Azur"
                )}
              </li>
              <li>
                <strong>
                  {getTranslation(
                    "partners.seo.criteria.services.title",
                    "Services premium"
                  )}
                </strong>{" "}
                :{" "}
                {getTranslation(
                  "partners.seo.criteria.services.description",
                  "Engagement vers l'excellence"
                )}
              </li>
              <li>
                <strong>
                  {getTranslation(
                    "partners.seo.criteria.values.title",
                    "Valeurs partagées"
                  )}
                </strong>{" "}
                :{" "}
                {getTranslation(
                  "partners.seo.criteria.values.description",
                  "Satisfaction client prioritaire"
                )}
              </li>
            </ul>

            <h3>
              {getTranslation(
                "partners.seo.advantages.title",
                "Avantages de notre réseau"
              )}
            </h3>
            <p>
              {getTranslation(
                "partners.seo.advantages.description",
                "En faisant appel à nos partenaires, vous bénéficiez souvent de conditions préférentielles et d'un service coordonné. Notre réseau facilite l'organisation de votre séjour ou événement sur la Côte d'Azur."
              )}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
