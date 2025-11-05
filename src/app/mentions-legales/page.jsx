"use client";

import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import { motion } from "framer-motion";
import { FileText, Mail, MapPin, Phone, Shield } from "lucide-react";

export default function MentionsLegalesPage() {
  const breadcrumbItems = [
    {
      name: "Mentions Légales",
      url: "/mentions-legales",
      title: "Mentions légales Taxi Nice",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Mentions Légales
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Informations légales concernant le site taxi-nice-06.com
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-primary mr-3" />
                1. Éditeur du site
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-700 mb-2">
                  <strong>Raison sociale :</strong> Taxi Nice Côte d'Azur
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Forme juridique :</strong> Entreprise individuelle
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Adresse :</strong> Nice, Côte d'Azur, France
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Téléphone :</strong> 06 51 68 36 87
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email :</strong> taxiniceca@gmail.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Directeur de publication :</strong> [Nom du gérant]
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-primary mr-3" />
                2. Hébergement
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-700 mb-2">
                  <strong>Hébergeur :</strong> [Nom de l'hébergeur]
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Adresse :</strong> [Adresse de l'hébergeur]
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Téléphone :</strong> [Téléphone de l'hébergeur]
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-primary mr-3" />
                3. Propriété intellectuelle
              </h2>
              <p className="text-gray-700 mb-4">
                L'ensemble de ce site relève de la législation française et
                internationale sur le droit d'auteur et la propriété
                intellectuelle. Tous les droits de reproduction sont réservés, y
                compris pour les documents téléchargeables et les
                représentations iconographiques et photographiques.
              </p>
              <p className="text-gray-700 mb-4">
                La reproduction de tout ou partie de ce site sur un support
                électronique quel qu'il soit est formellement interdite sauf
                autorisation expresse du directeur de la publication.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-primary mr-3" />
                4. Collecte et traitement des données personnelles
              </h2>
              <p className="text-gray-700 mb-4">
                Conformément à la loi "Informatique et Libertés" du 6 janvier
                1978 modifiée et au Règlement Général sur la Protection des
                Données (RGPD), vous disposez d'un droit d'accès, de
                rectification, de suppression et d'opposition aux données
                personnelles vous concernant.
              </p>
              <p className="text-gray-700 mb-4">
                Les données collectées sur ce site sont destinées à l'entreprise
                Taxi Nice Côte d'Azur et ne seront en aucun cas transmises à des
                tiers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-primary mr-3" />
                5. Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                Ce site utilise des cookies pour améliorer votre expérience de
                navigation et analyser le trafic du site. En continuant à
                utiliser ce site, vous acceptez notre utilisation des cookies.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-primary mr-3" />
                6. Responsabilité
              </h2>
              <p className="text-gray-700 mb-4">
                Les informations contenues sur ce site sont aussi précises que
                possible et le site remis à jour à différentes périodes de
                l'année, mais peut toutefois contenir des inexactitudes ou des
                omissions.
              </p>
              <p className="text-gray-700 mb-4">
                Si vous constatez une lacune, erreur ou ce qui parait être un
                dysfonctionnement, merci de bien vouloir le signaler par email,
                à l'adresse taxiniceca@gmail.com, en décrivant le problème de la
                manière la plus précise possible.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-primary mr-3" />
                7. Droit applicable
              </h2>
              <p className="text-gray-700 mb-4">
                Tout litige en relation avec l'utilisation du site
                taxi-nice-06.com est soumis au droit français. Il est fait
                attribution exclusive de juridiction aux tribunaux compétents de
                Nice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-primary mr-3" />
                8. Contact
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Pour toute question concernant ces mentions légales, vous
                  pouvez nous contacter :
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-2" />
                    <span className="text-gray-700">06 51 68 36 87</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-2" />
                    <span className="text-gray-700">taxiniceca@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    <span className="text-gray-700">Nice, Côte d'Azur</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                <p className="text-sm text-blue-800">
                  <strong>Dernière mise à jour :</strong> 15 janvier 2025
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
