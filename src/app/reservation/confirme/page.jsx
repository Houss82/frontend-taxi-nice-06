"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { CheckCircle, Phone, Mail, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ReservationConfirmePage() {
  useEffect(() => {
    // Tracker la conversion dans Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      // Événement de conversion pour Google Analytics
      window.gtag("event", "reservation_confirmed", {
        event_category: "Reservation",
        event_label: "Reservation Confirmed",
        value: 1,
        currency: "EUR",
      });

      // Événement de conversion pour Google Ads (si nécessaire)
      window.gtag("event", "conversion", {
        send_to: "AW-17599375066/_iwvCN665q8bENrNhMhB",
        value: 1.0,
        currency: "EUR",
        transaction_id: `reservation_confirmed_${Date.now()}_${Math.random()
          .toString(36)
          .substr(2, 9)}`,
      });

      console.log("Conversion Google Analytics trackée pour la réservation");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 mt-20 sm:mt-0">
      <Navbar />

      <div className="min-h-screen flex items-center justify-center py-16 px-4">
        <div className="max-w-2xl w-full">
          {/* Carte de confirmation */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border-t-4 border-green-500">
            {/* Icône de succès */}
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="w-14 h-14 text-white" />
            </div>

            {/* Titre */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Réservation confirmée !
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-8"></div>

            {/* Message */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Votre demande de réservation a été envoyée avec succès. Nous vous
              contacterons sous peu pour confirmer les détails de votre trajet.
            </p>

            {/* Informations de contact */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 mb-8 border border-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Besoin d'aide ?
              </h2>
              <div className="space-y-3">
                <a
                  href="tel:+33651683687"
                  className="flex items-center justify-center gap-3 text-lg text-gray-800 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">06 51 68 36 87</span>
                </a>
                <a
                  href="mailto:contact@taxi-nice-06.com"
                  className="flex items-center justify-center gap-3 text-lg text-gray-800 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">contact@taxi-nice-06.com</span>
                </a>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reservation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primaryDark text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Nouvelle réservation
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl font-bold text-lg transition-all duration-300"
              >
                <MapPin className="w-5 h-5" />
                Retour à l'accueil
              </Link>
            </div>
          </div>

          {/* Informations supplémentaires */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Prochaines étapes
            </h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Vous recevrez un email de confirmation dans les prochaines minutes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Notre équipe vous contactera par téléphone pour finaliser les détails
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Un SMS de rappel vous sera envoyé 24h avant votre trajet
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
