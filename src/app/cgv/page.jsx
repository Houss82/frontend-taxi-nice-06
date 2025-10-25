"use client";

import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { motion } from "framer-motion";
import {
  Clock,
  CreditCard,
  FileText,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";

export default function CGVPage() {
  const breadcrumbItems = [
    {
      name: "CGV",
      url: "/cgv",
      title: "Conditions générales de vente Taxi Nice",
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
                Conditions Générales de Vente
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Conditions d'utilisation de nos services de transport
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
                <FileText className="w-6 h-6 text-primary mr-3" />
                1. Objet et champ d'application
              </h2>
              <p className="text-gray-700 mb-4">
                Les présentes conditions générales de vente (CGV) régissent les
                relations contractuelles entre :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>
                  <strong>Le prestataire :</strong> Taxi Nice Côte d'Azur
                </li>
                <li>
                  <strong>Le client :</strong> Toute personne physique ou morale
                  utilisant nos services
                </li>
              </ul>
              <p className="text-gray-700 mb-6">
                Ces CGV s'appliquent à tous les services de transport proposés
                par notre entreprise.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CreditCard className="w-6 h-6 text-primary mr-3" />
                2. Services proposés
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Nos services incluent :
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Transferts aéroport (Nice Côte d'Azur)</li>
                  <li>VSL (Véhicule Sanitaire Léger)</li>
                  <li>Excursions et visites touristiques</li>
                  <li>Transport d'événements et mariages</li>
                  <li>Transport de congrès et séminaires</li>
                  <li>Transport de groupe</li>
                  <li>Transport longue distance</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 text-primary mr-3" />
                3. Réservation et annulation
              </h2>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3.1 Réservation
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  La réservation peut être effectuée par téléphone, email ou via
                  notre site web
                </li>
                <li>Une confirmation de réservation vous sera envoyée</li>
                <li>Les réservations sont prises dans l'ordre d'arrivée</li>
                <li>Nous nous réservons le droit de refuser une réservation</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3.2 Annulation
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700 mb-2">
                  <strong>Annulation gratuite :</strong> Plus de 24h avant le
                  départ
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Annulation avec frais :</strong> Moins de 24h avant le
                  départ (50% du montant)
                </p>
                <p className="text-gray-700">
                  <strong>Annulation sans préavis :</strong> 100% du montant
                  facturé
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CreditCard className="w-6 h-6 text-primary mr-3" />
                4. Tarifs et facturation
              </h2>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                4.1 Tarifs
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Les tarifs sont indiqués en euros TTC</li>
                <li>
                  Les tarifs peuvent varier selon la distance, la durée et le
                  type de véhicule
                </li>
                <li>
                  Des suppléments peuvent s'appliquer (nuit, dimanche, jours
                  fériés)
                </li>
                <li>Les tarifs sont valables au moment de la réservation</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                4.2 Paiement
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Espèces (limité à 1000€ par transaction)</li>
                <li>Carte bancaire</li>
                <li>Virement bancaire (pour les entreprises)</li>
                <li>Chèque (sous réserve d'acceptation)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-primary mr-3" />
                5. Responsabilités
              </h2>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                5.1 Responsabilité du prestataire
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Respect des horaires convenus (tolérance de 15 minutes)</li>
                <li>Véhicules en bon état et conformes aux normes</li>
                <li>Chauffeurs professionnels et licenciés</li>
                <li>Assurance responsabilité civile professionnelle</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                5.2 Responsabilité du client
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Respect des horaires de départ</li>
                <li>Présence au point de rendez-vous convenu</li>
                <li>Respect des règles de sécurité dans le véhicule</li>
                <li>Paiement des frais de nettoyage en cas de dégradation</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-primary mr-3" />
                6. Force majeure
              </h2>
              <p className="text-gray-700 mb-4">
                En cas de force majeure (grève, intempéries, accidents, etc.),
                nous ne pourrons être tenus responsables des retards ou
                annulations. Dans ce cas, nous nous efforcerons de trouver une
                solution alternative.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 text-primary mr-3" />
                7. Réclamations
              </h2>
              <p className="text-gray-700 mb-4">
                Toute réclamation doit être formulée par écrit dans les 48h
                suivant la prestation. Nous nous engageons à répondre dans les 8
                jours ouvrés.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-primary mr-3" />
                8. Droit applicable et juridiction
              </h2>
              <p className="text-gray-700 mb-4">
                Les présentes CGV sont soumises au droit français. En cas de
                litige, les tribunaux de Nice seront seuls compétents.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Phone className="w-6 h-6 text-primary mr-3" />
                9. Contact
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-700 mb-4">
                  Pour toute question concernant ces conditions générales de
                  vente :
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Taxi Nice Côte d'Azur
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
                      Horaires d'ouverture
                    </h3>
                    <div className="text-gray-700 text-sm space-y-1">
                      <p>Service 24h/24 - 7j/7</p>
                      <p>Réservations : 24h/24</p>
                      <p>Service client : 8h-20h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                <p className="text-sm text-blue-800">
                  <strong>Dernière mise à jour :</strong> 15 janvier 2025
                </p>
                <p className="text-sm text-blue-800 mt-2">
                  <strong>Version :</strong> 1.0
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
