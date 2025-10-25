"use client";

import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { motion } from "framer-motion";
import { Database, Eye, Lock, Mail, MapPin, Phone, Shield } from "lucide-react";

export default function PolitiqueConfidentialitePage() {
  const breadcrumbItems = [
    {
      name: "Politique de Confidentialité",
      url: "/politique-confidentialite",
      title: "Politique de confidentialité Taxi Nice",
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
              <Lock className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Politique de Confidentialité
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Protection de vos données personnelles et respect de votre vie
              privée
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
                1. Collecte des données personnelles
              </h2>
              <p className="text-gray-700 mb-4">
                Nous collectons les données personnelles que vous nous
                fournissez volontairement lorsque vous :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Remplissez notre formulaire de réservation</li>
                <li>Nous contactez par téléphone ou email</li>
                <li>Utilisez nos services de transport</li>
                <li>Naviguez sur notre site web</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Database className="w-6 h-6 text-primary mr-3" />
                2. Types de données collectées
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Données d'identification :
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse de domicile</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Données de réservation :
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Date et heure de transport</li>
                  <li>Adresses de départ et d'arrivée</li>
                  <li>Type de service demandé</li>
                  <li>Commentaires et préférences</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Données de navigation :
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées</li>
                  <li>Durée de visite</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="w-6 h-6 text-primary mr-3" />
                3. Utilisation des données
              </h2>
              <p className="text-gray-700 mb-4">
                Nous utilisons vos données personnelles pour :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Traiter vos réservations et fournir nos services</li>
                <li>Vous contacter concernant vos réservations</li>
                <li>Améliorer la qualité de nos services</li>
                <li>Respecter nos obligations légales</li>
                <li>
                  Vous envoyer des informations commerciales (avec votre
                  consentement)
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="w-6 h-6 text-primary mr-3" />
                4. Protection des données
              </h2>
              <p className="text-gray-700 mb-4">
                Nous mettons en œuvre des mesures techniques et
                organisationnelles appropriées pour protéger vos données
                personnelles contre :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>L'accès non autorisé</li>
                <li>La divulgation non autorisée</li>
                <li>La modification non autorisée</li>
                <li>La destruction non autorisée</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-primary mr-3" />
                5. Partage des données
              </h2>
              <p className="text-gray-700 mb-4">
                Nous ne vendons, ne louons, ni ne partageons vos données
                personnelles avec des tiers, sauf dans les cas suivants :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Avec votre consentement explicite</li>
                <li>Pour respecter une obligation légale</li>
                <li>
                  Avec nos prestataires de services (sous contrat de
                  confidentialité)
                </li>
                <li>En cas de fusion ou d'acquisition de notre entreprise</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Database className="w-6 h-6 text-primary mr-3" />
                6. Conservation des données
              </h2>
              <p className="text-gray-700 mb-4">
                Nous conservons vos données personnelles pendant la durée
                nécessaire aux finalités pour lesquelles elles ont été
                collectées :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>
                  <strong>Données de réservation :</strong> 3 ans après la
                  dernière utilisation
                </li>
                <li>
                  <strong>Données de contact :</strong> Jusqu'à votre demande de
                  suppression
                </li>
                <li>
                  <strong>Données de navigation :</strong> 13 mois maximum
                </li>
                <li>
                  <strong>Données comptables :</strong> 10 ans (obligation
                  légale)
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-primary mr-3" />
                7. Vos droits
              </h2>
              <p className="text-gray-700 mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Droit d'accès
                  </h3>
                  <p className="text-blue-800 text-sm">
                    Obtenir une copie de vos données
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">
                    Droit de rectification
                  </h3>
                  <p className="text-green-800 text-sm">
                    Corriger des données inexactes
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-2">
                    Droit d'effacement
                  </h3>
                  <p className="text-red-800 text-sm">Supprimer vos données</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">
                    Droit d'opposition
                  </h3>
                  <p className="text-yellow-800 text-sm">
                    Vous opposer au traitement
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="w-6 h-6 text-primary mr-3" />
                8. Contact et réclamations
              </h2>
              <p className="text-gray-700 mb-4">
                Pour exercer vos droits ou pour toute question concernant cette
                politique de confidentialité :
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Contact direct :
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-primary mr-2" />
                        <span className="text-gray-700">06 51 68 36 87</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 text-primary mr-2" />
                        <span className="text-gray-700">
                          taxiniceca@gmail.com
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-primary mr-2" />
                        <span className="text-gray-700">Nice, Côte d'Azur</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Autorité de contrôle :
                    </h3>
                    <p className="text-gray-700 text-sm">
                      CNIL (Commission Nationale de l'Informatique et des
                      Libertés)
                      <br />
                      3 Place de Fontenoy - TSA 80715
                      <br />
                      75334 PARIS CEDEX 07
                      <br />
                      Tél : 01 53 73 22 22
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-primary mr-3" />
                9. Modifications
              </h2>
              <p className="text-gray-700 mb-4">
                Cette politique de confidentialité peut être modifiée à tout
                moment. Toute modification sera publiée sur cette page avec une
                nouvelle date de mise à jour.
              </p>

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
