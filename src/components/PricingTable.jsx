"use client";

import { ContentImage } from "@/components/OptimizedImage.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";
import {
  Car,
  Clock,
  Euro,
  MapPin,
  Package,
  Route,
  Snowflake,
  Users,
} from "lucide-react";

export default function PricingTable({ vehicleType = "glc" }) {
  const { t } = useLanguage();

  // Tarifs de base pour GLC (exactement comme l'image)
  const basePrices = {
    destinations: [
      {
        name: t("pricing.destinationsList.antibes"),
        day: "76 €",
        night: "",
        fixed: true,
      },
      {
        name: t("pricing.destinationsList.auron"),
        day: "230 - 250 €",
        night: "290 - 310 €",
        fixed: false,
      },
      {
        name: t("pricing.destinationsList.beaulieu"),
        day: "55 - 60 €",
        night: "65 - 90 €",
        fixed: false,
      },
      {
        name: t("pricing.destinationsList.cannes"),
        day: "89 €",
        night: "",
        fixed: true,
      },
      {
        name: t("pricing.destinationsList.frejus"),
        day: "180 - 200 €",
        night: "200 - 220 €",
        fixed: false,
      },
      {
        name: t("pricing.destinationsList.grasse"),
        day: "92 - 100 €",
        night: "120 - 130 €",
        fixed: false,
      },
      {
        name: t("pricing.destinationsList.juan"),
        day: "60 - 70 €",
        night: "70 - 80 €",
        fixed: false,
      },
      {
        name: t("pricing.destinationsList.menton"),
        day: "100 - 110 €",
        night: "120 - 140 €",
        fixed: false,
      },
      {
        name: t("pricing.destinationsList.monaco"),
        day: "99 €",
        night: "",
        fixed: true,
      },
      {
        name: t("pricing.destinationsList.mougins"),
        day: "75 - 82 €",
        night: "90 - 95 €",
        fixed: false,
      },
      {
        name: t("pricing.destinationsList.niceOuest"),
        day: "12 - 18 €",
        night: "17 - 25 €",
        fixed: false,
      },
      {
        name: t("pricing.destinationsList.niceCentre"),
        day: "36 €",
        night: "",
        fixed: true,
      },
      {
        name: t("pricing.destinationsList.niceEst"),
        day: "40 - 44 €",
        night: "45 - 51 €",
        fixed: false,
      },
      {
        name: t("pricing.destinationsList.opio"),
        day: "75 - 82 €",
        night: "90 - 95 €",
        fixed: false,
      },
      {
        name: t("pricing.destinationsList.sanremo"),
        day: "190 - 210 €",
        night: "220 - 230 €",
        fixed: false,
      },
      {
        name: t("pricing.destinationsList.sophia"),
        day: "60 - 65 €",
        night: "70 - 80 €",
        fixed: false,
      },
      {
        name: t("pricing.destinationsList.capFerrat"),
        day: "60 - 65 €",
        night: "70 - 78 €",
        fixed: false,
      },
      {
        name: t("pricing.destinationsList.saintPaul"),
        day: "55 - 60 €",
        night: "65 - 70 €",
        fixed: false,
      },
      {
        name: t("pricing.destinationsList.saintTropez"),
        day: "280 - 310 €",
        night: "340 - 360 €",
        fixed: false,
      },
      {
        name: t("pricing.destinationsList.valbonne"),
        day: "75 - 80 €",
        night: "85 - 90 €",
        fixed: false,
      },
      {
        name: t("pricing.destinationsList.villefranche"),
        day: "55 - 60 €",
        night: "65 - 90 €",
        fixed: false,
      },
    ],
    supplements: [
      { name: t("pricing.supplementsList.minimum"), price: "8,00 €" },
      { name: t("pricing.supplementsList.luggage"), price: "2,00 €" },
      { name: t("pricing.supplementsList.fifthPerson"), price: "4,00 €" },
      { name: t("pricing.supplementsList.snow"), price: "10%" },
      {
        name: t("pricing.supplementsList.highway"),
        price: "Uniquement avec le client",
      },
    ],
    perKm: [
      {
        type: t("pricing.perKmList.emptyReturn"),
        day: "2,58 €/km",
        night: "3,30 €/km",
      },
      {
        type: t("pricing.perKmList.loadedReturn"),
        rateA: "1,29 €/km",
        rateB: "1,65 €/km",
      },
    ],
  };

  // Fonction pour appliquer +15% pour le van
  const applyVanSurcharge = (price) => {
    if (!price || price === "" || price.includes("€") === false) return price;

    return price.replace(/(\d+)/g, (match) => {
      const num = parseInt(match);
      const newNum = Math.round(num * 1.15);
      return newNum.toString();
    });
  };

  // Appliquer le surcharge pour le van
  const prices =
    vehicleType === "van"
      ? {
          destinations: basePrices.destinations.map((dest) => ({
            ...dest,
            day: applyVanSurcharge(dest.day),
            night: applyVanSurcharge(dest.night),
          })),
          supplements: basePrices.supplements,
          perKm: basePrices.perKm.map((rate) => ({
            ...rate,
            day: rate.day ? applyVanSurcharge(rate.day) : rate.day,
            night: rate.night ? applyVanSurcharge(rate.night) : rate.night,
            rateA: rate.rateA ? applyVanSurcharge(rate.rateA) : rate.rateA,
            rateB: rate.rateB ? applyVanSurcharge(rate.rateB) : rate.rateB,
          })),
        }
      : basePrices;

  return (
    <div className="w-full bg-white shadow-lg overflow-hidden">
      {/* En-tête */}
      <div className="bg-primary text-white p-6">
        <div className="flex items-center justify-center space-x-4 mb-2">
          <ContentImage
            src={vehicleType === "glc" ? "/imageGLC.png" : "/image-van.png"}
            alt={vehicleType === "glc" ? "Mercedes GLC" : "Van Premium"}
            width={96}
            height={64}
            className="w-24 h-16 object-contain"
          />
          <h2 className="text-xl font-bold">
            {t("pricing.title")} {vehicleType === "glc" ? "GLC" : "VAN"}
          </h2>
        </div>
        <p className="text-center text-white/90">{t("pricing.subtitle")}</p>
      </div>

      {/* Table des destinations */}
      <div className="p-6">
        <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-primary to-primaryDark">
                <th className="p-3 text-left font-bold text-white text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{t("pricing.destination")}</span>
                  </div>
                </th>
                <th className="p-3 text-center font-bold text-white text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{t("pricing.day")} (9h - 18h)</span>
                  </div>
                </th>
                <th className="p-3 text-center font-bold text-white text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{t("pricing.night")} (18h - 9h)</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {prices.destinations.map((dest, index) => (
                <tr
                  key={index}
                  className={`transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 hover:shadow-md hover:scale-[1.01] ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <td className="p-2 md:p-3 text-gray-800 font-medium border-b border-gray-100 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{dest.name}</span>
                      {dest.fixed && (
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-semibold">
                          *
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-2 md:p-3 text-center border-b border-gray-100">
                    <div className="flex items-center justify-center space-x-1">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <Euro className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-600" />
                      </div>
                      <span className="font-bold text-green-600 text-sm md:text-base">
                        {dest.day}
                      </span>
                    </div>
                  </td>
                  <td className="p-2 md:p-3 text-center border-b border-gray-100">
                    <div className="flex items-center justify-center space-x-1">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <Euro className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-600" />
                      </div>
                      <span className="font-bold text-blue-600 text-sm md:text-base">
                        {dest.night || "-"}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-3 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
          <p className="text-sm text-gray-700 font-medium">
            <span className="text-primary font-bold">*</span>{" "}
            {t("pricing.fixedRate")}
          </p>
        </div>
      </div>

      {/* Suppléments */}
      <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="flex items-center space-x-2 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Package className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-black">
            {t("pricing.supplements")}
          </h3>
        </div>
        <div className="mb-6 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
          <p className="text-sm text-gray-700 font-medium">
            <span className="text-primary font-bold">*</span>{" "}
            {t("pricing.supplementsNote")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {prices.supplements.map((supp, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex justify-between items-center p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20 group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                    {index === 0 && <Clock className="w-5 h-5 text-primary" />}
                    {index === 1 && (
                      <Package className="w-5 h-5 text-primary" />
                    )}
                    {index === 2 && <Users className="w-5 h-5 text-primary" />}
                    {index === 3 && (
                      <Snowflake className="w-5 h-5 text-primary" />
                    )}
                    {index === 4 && <Route className="w-5 h-5 text-primary" />}
                  </div>
                  <span className="text-gray-800 font-medium">{supp.name}</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-green-100 to-green-50 px-3 py-2 rounded-lg">
                  <Euro className="w-4 h-4 text-green-600" />
                  <span className="font-bold text-green-600">{supp.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tarifs au kilomètre */}
      <div className="p-6 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
        <div className="flex items-center space-x-2 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Route className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-black">{t("pricing.perKm")}</h3>
        </div>
        <div className="space-y-6">
          {prices.perKm.map((rate, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg">
                    {rate.type}
                  </h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {rate.day && (
                    <div className="group/card relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100/50 p-4 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <Clock className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-sm text-green-700 font-semibold">
                            {t("pricing.dayRate")}
                          </span>
                        </div>
                        <div className="font-bold text-green-600 text-xl flex items-center justify-center space-x-1">
                          <Euro className="w-5 h-5" />
                          <span>{rate.day}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {rate.night && (
                    <div className="group/card relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-xl border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Clock className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="text-sm text-blue-700 font-semibold">
                            {t("pricing.nightRate")}
                          </span>
                        </div>
                        <div className="font-bold text-blue-600 text-xl flex items-center justify-center space-x-1">
                          <Euro className="w-5 h-5" />
                          <span>{rate.night}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {rate.rateA && (
                    <div className="group/card relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100/50 p-4 rounded-xl border border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Route className="w-4 h-4 text-purple-600" />
                          </div>
                          <span className="text-sm text-purple-700 font-semibold">
                            {t("pricing.rateA")}
                          </span>
                        </div>
                        <div className="font-bold text-purple-600 text-xl flex items-center justify-center space-x-1">
                          <Euro className="w-5 h-5" />
                          <span>{rate.rateA}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {rate.rateB && (
                    <div className="group/card relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100/50 p-4 rounded-xl border border-orange-200 hover:border-orange-300 transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                            <Route className="w-4 h-4 text-orange-600" />
                          </div>
                          <span className="text-sm text-orange-700 font-semibold">
                            {t("pricing.rateB")}
                          </span>
                        </div>
                        <div className="font-bold text-orange-600 text-xl flex items-center justify-center space-x-1">
                          <Euro className="w-5 h-5" />
                          <span>{rate.rateB}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
