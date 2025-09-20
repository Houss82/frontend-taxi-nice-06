"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { Info, Mail, MapPin, Phone } from "lucide-react";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
      <div className="flex items-center mb-6">
        <Info className="h-6 w-6 text-blue-600 mr-3" />
        <h2 className="text-2xl font-semibold text-gray-800">
          {t("about.title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            {t("about.ourMission")}
          </h3>
          <p className="text-gray-600 mb-4">{t("about.missionDescription")}</p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            {t("about.contactInfo")}
          </h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-gray-600">+33 4 93 XX XX XX</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-gray-600">contact@taxi-nice.fr</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-gray-600">Nice, Côte d'Azur</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
