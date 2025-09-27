"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import PricingTable from "@/components/PricingTable.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { ArrowLeft, Car, Truck } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function TarifsContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const vehicleType = searchParams.get("vehicle") || "glc";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Contenu principal */}
      <div className="py-8">
        {/* Boutons de navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 max-w-5xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-gray-100 border border-blue-500 hover:bg-gray-200 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t("pricing.backToHome")}</span>
          </Link>

          {/* Bouton pour basculer entre véhicules */}
          <Link
            href={`/tarifs?vehicle=${vehicleType === "glc" ? "van" : "glc"}`}
            className="inline-flex items-center space-x-2 bg-primary hover:bg-primaryDark text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            {vehicleType === "glc" ? (
              <>
                <Truck className="w-5 h-5" />
                <span>{t("pricing.switchToVan")}</span>
              </>
            ) : (
              <>
                <Car className="w-5 h-5" />
                <span>{t("pricing.switchToGLC")}</span>
              </>
            )}
          </Link>
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <PricingTable vehicleType={vehicleType} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function TarifsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement des tarifs...</p>
          </div>
        </div>
      }
    >
      <TarifsContent />
    </Suspense>
  );
}
