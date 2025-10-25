"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { motion } from "framer-motion";
import {
  Building2,
  ExternalLink,
  Globe,
  HandshakeIcon,
  Heart,
  Plane,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PartenairesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const breadcrumbItems = [
    {
      name: "Nos Partenaires",
      url: "/partenaires",
      title: "Nos Partenaires - Taxi Nice Côte d'Azur",
    },
  ];

  // Partenaires
  const partners = [
    {
      name: "Taxi Conventionné PACA",
      category: "Transport",
      description:
        "Spécialiste transport médical conventionné CPAM. Couverture complète Fréjus, Saint-Raphaël, Draguignan et est du Var. Service sanitaire fiable et professionnel.",
      website: "https://www.taxi-conventionne-paca.fr/",
      image: "/logo-taxi-conventionne-paca.png",
      icon: Heart,
      featured: true,
    },
    {
      name: "Taxi Conventionné Antibes",
      category: "Transport",
      description:
        "Transport médical VSL agréé CPAM à Antibes. Service conventionné couvrant Antibes, Juan-les-Pins, La Fontonne et Cap d'Antibes. Transport sanitaire professionnel.",
      website: "https://www.taxi-conventionne-antibes.fr/",
      image: "/logo-taxi-conventionne-antibes.png",
      icon: Heart,
      featured: true,
    },
    {
      name: "Taxis Conventionnés Var",
      category: "Transport",
      description:
        "VSL agréé CPAM transport médical 24h/24. Spécialiste conventionné Fréjus, Saint-Raphaël, Roquebrune-sur-Argens, Draguignan. Service tiers payant intégral.",
      website: "https://www.taxis-conventionnes-var.fr/",
      image: "/logo-2 copie.png",
      icon: Heart,
      featured: true,
    },
    {
      name: "Taxi Nice Airport",
      category: "Transport",
      description:
        "Service VTC spécialisé transferts aéroport Nice. Chauffeurs anglophones, Mercedes premium, tarifs fixes dès 40€. Suivi de vol et meet & greet inclus.",
      website: "https://www.taxi-niceairport.com/",
      image: "/logo-taxi-nice-airport.png",
      icon: Plane,
      featured: true,
    },
    {
      name: "Aéroport Nice Côte d'Azur",
      category: "Transport",
      description: "3ème aéroport de France, porte d'entrée de la Côte d'Azur",
      website: "https://www.nice.aeroport.fr",
      image: "/airport_18499216.png",
      icon: Plane,
      featured: false,
    },
    {
      name: "Office de Tourisme Nice",
      category: "Tourisme",
      description: "Promotion et information touristique de la ville de Nice",
      website: "https://www.nicetourisme.com",
      image: "/monaco.jpg",
      icon: Globe,
      featured: false,
    },
  ];

  const categories = ["Tous", "Transport", "Tourisme"];

  const filteredPartners =
    selectedCategory === "Tous"
      ? partners
      : partners.filter((p) => p.category === selectedCategory);

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
          src="/partenaires copie 2.jpg"
          alt="Nos Partenaires - Taxi Nice Côte d'Azur"
          fill
          className="object-cover"
          priority={true}
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primaryDark/90"></div>
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
                Nos Partenaires
              </h1>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed">
              Un réseau de professionnels de confiance pour vous offrir la
              meilleure expérience sur la Côte d'Azur
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
              Notre Réseau de Partenaires
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Nous collaborons avec des entreprises de confiance dans toute la
              région pour vous offrir une expérience complète et de qualité. Nos
              partenaires partagent nos valeurs de professionnalisme et de
              service client.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-xl mb-2">
                  {partners.length}+ Partenaires
                </h3>
                <p className="text-gray-600">Réseau établi et fiable</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <Sparkles className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-xl mb-2">Qualité Premium</h3>
                <p className="text-gray-600">Sélection rigoureuse</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <Building2 className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-xl mb-2">Locaux & Engagés</h3>
                <p className="text-gray-600">Ancrés sur la Côte d'Azur</p>
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Partenaires Premium
                  </span>
                </h2>
                <div className="flex justify-center items-center gap-3">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500"></div>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {filteredPartners
                  .filter((p) => p.featured)
                  .map((partner, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:-translate-y-2"
                    >
                      {/* Image avec overlay gradient */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={partner.image}
                          alt={`Logo ${partner.name} - ${partner.description}`}
                          fill
                          className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Badge Premium */}
                        <div className="absolute top-4 right-4">
                          <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                            <Sparkles className="w-4 h-4" />
                            Premium
                          </span>
                        </div>
                      </div>

                      <div className="p-8">
                        {/* En-tête avec icône */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <partner.icon className="w-7 h-7 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                              {partner.name}
                            </h3>
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                              {partner.category}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {partner.description}
                        </p>

                        {/* CTA Button */}
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Visiter le site de ${partner.name} - ${partner.description}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg group/btn"
                        >
                          <ExternalLink className="w-5 h-5 group-hover/btn:rotate-45 transition-transform duration-300" />
                          Découvrir nos services
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Nos Partenaires
                  </span>
                </h2>
                <div className="flex justify-center items-center gap-3">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500"></div>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPartners
                  .filter((p) => !p.featured)
                  .map((partner, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-gray-50">
                        <Image
                          src={partner.image}
                          alt={`Logo ${partner.name} - ${partner.description}`}
                          fill
                          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-6">
                        {/* Catégorie avec icône */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                            <partner.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-xs text-primary font-semibold uppercase tracking-wide">
                            {partner.category}
                          </span>
                        </div>

                        {/* Titre */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {partner.name}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 mb-4 text-sm line-clamp-3 leading-relaxed">
                          {partner.description}
                        </p>

                        {/* Lien */}
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Visiter le site de ${partner.name} - ${partner.description}`}
                          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primaryDark transition-colors text-sm group/link"
                        >
                          Découvrir nos services
                          <ExternalLink
                            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                            aria-hidden="true"
                          />
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
              Devenez partenaire
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Vous êtes un professionnel du tourisme, de l'hôtellerie ou de
              l'événementiel sur la Côte d'Azur ? Rejoignez notre réseau de
              partenaires et développons ensemble nos activités.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Nous contacter
            </a>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2>Pourquoi choisir nos partenaires ?</h2>
            <p>
              Tous nos partenaires sont soigneusement sélectionnés pour leur
              qualité de service, leur professionnalisme et leur engagement
              envers l'excellence. Que vous recherchiez un hôtel de luxe, un
              restaurant gastronomique, ou une agence de voyage locale, nos
              partenaires vous garantissent une expérience exceptionnelle sur la
              Côte d'Azur.
            </p>

            <h3>Nos critères de sélection</h3>
            <ul>
              <li>
                <strong>Qualité certifiée</strong> : Établissements reconnus et
                appréciés
              </li>
              <li>
                <strong>Localisation stratégique</strong> : Présence à Nice et
                Côte d'Azur
              </li>
              <li>
                <strong>Services premium</strong> : Engagement vers l'excellence
              </li>
              <li>
                <strong>Valeurs partagées</strong> : Satisfaction client
                prioritaire
              </li>
            </ul>

            <h3>Avantages de notre réseau</h3>
            <p>
              En faisant appel à nos partenaires, vous bénéficiez souvent de
              conditions préférentielles et d'un service coordonné. Notre réseau
              facilite l'organisation de votre séjour ou événement sur la Côte
              d'Azur.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
