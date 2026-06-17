"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import { motion } from "framer-motion";
import { Building2, HandshakeIcon, Sparkles, Users } from "lucide-react";
import Image from "next/image";

export default function PartenairesPage() {
  const breadcrumbItems = [
    {
      name: "Nos Partenaires",
      url: "/partenaires",
      title: "Nos Partenaires - Taxi Nice Côte d'Azur",
    },
  ];

  // Partenaires
  const partners = [];

  const usefulResources = [
    {
      label: "Office de Tourisme Métropolitain Nice Côte d'Azur",
      url: "https://www.explorenicecotedazur.com/",
      description:
        "Informations officielles sur les événements, hébergements et activités locales.",
    },
    {
      label: "Aéroport Nice Côte d'Azur",
      url: "https://www.nice.aeroport.fr/",
      description:
        "Statut des vols, accès terminaux T1 et T2, services aux passagers et assistance PMR.",
    },
    {
      label: "Centre Hospitalier Universitaire de Nice (CHU)",
      url: "https://www.chu-nice.fr/",
      description:
        "Contacts et informations pratiques pour les établissements Pasteur 2, L'Archet ou Cimiez.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-20 sm:mt-0">
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
          quality={85}
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
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 text-center space-y-6"
          >
            <h2 className="text-4xl font-black text-gray-900">
              Partenaires disponibles sur demande
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Notre réseau de partenaires est volontairement confidentiel pour
              éviter tout échange artificiel de liens. Nous partageons les
              coordonnées des prestataires lorsque cela répond à une demande
              précise (transport médical, événementiel, tourisme…). Contactez
              directement notre équipe pour être mis en relation avec le service
              le plus adapté.
            </p>
            <p className="text-gray-500 italic">
              « Nous privilégions des collaborations locales, validées et
              alignées avec nos standards de qualité Taxi Nice 06. »
            </p>
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
