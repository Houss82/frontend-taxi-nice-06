"use client";

import AddressAutocomplete from "@/components/AddressAutocomplete.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { formspreeService } from "@/lib/formspree.jsx";
import {
  Car,
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";

export default function QuickBooking() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    adresseDepart: "",
    adresseArrivee: "",
    date: "",
    heure: "",
    typeVehicule: "glc",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    try {
      await formspreeService.sendQuickBooking({
        ...formData,
        indicatifPays: "+33",
        typeTransport: "ALD exonérante",
        commentaires: `Demande rapide - Véhicule: ${
          formData.typeVehicule === "glc" ? "Mercedes GLC" : "Van Premium"
        }`,
      });

      // Déclencher la conversion Google Ads
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-17599375066/_iwvCN665q8bENrNhMhB",
          value: 1.0,
          currency: "EUR",
          transaction_id: `quick_booking_${Date.now()}_${Math.random()
            .toString(36)
            .substr(2, 9)}`,
        });
        console.log(
          "Conversion Google Ads déclenchée pour la réservation rapide"
        );
      }

      setIsSubmitted(true);
      setFormData({
        nom: "",
        telephone: "",
        email: "",
        adresseDepart: "",
        adresseArrivee: "",
        date: "",
        heure: "",
        typeVehicule: "glc",
      });
    } catch (error) {
      console.error("Erreur:", error);
      const errorMessage =
        error.message || "Erreur lors de l'envoi de la réservation";
      alert(`Erreur: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="reservation"
      className="py-16 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">
            {t("quickBooking.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("quickBooking.subtitle")}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Section gauche - Avantages */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-black flex items-center">
                <CheckCircle className="w-6 h-6 text-primary mr-3" />
                {t("quickBooking.whyChoose")}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {t("quickBooking.features.service247")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t("quickBooking.features.service247Desc")}
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {t("quickBooking.features.payment")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t("quickBooking.features.paymentDesc")}
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {t("quickBooking.features.confirmation")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t("quickBooking.features.confirmationDesc")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Sélection du véhicule */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-black flex items-center">
                <Car className="w-5 h-5 text-primary mr-3" />
                {t("quickBooking.vehicleSelection.title")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <label
                  className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all ${
                    formData.typeVehicule === "glc"
                      ? "border-primary bg-primary/10"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="typeVehicule"
                    value="glc"
                    checked={formData.typeVehicule === "glc"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Car className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold text-gray-800">
                      {t("quickBooking.vehicleSelection.glc.name")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t("quickBooking.vehicleSelection.glc.capacity")}
                    </p>
                    <p className="text-xs text-primary font-semibold mt-1">
                      {t("quickBooking.vehicleSelection.glc.type")}
                    </p>
                  </div>
                </label>

                <label
                  className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all ${
                    formData.typeVehicule === "van"
                      ? "border-primary bg-primary/10"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="typeVehicule"
                    value="van"
                    checked={formData.typeVehicule === "van"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Car className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold text-gray-800">
                      {t("quickBooking.vehicleSelection.van.name")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t("quickBooking.vehicleSelection.van.capacity")}
                    </p>
                    <p className="text-xs text-primary font-semibold mt-1">
                      {t("quickBooking.vehicleSelection.van.type")}
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Section droite - Formulaire */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  {t("quickBooking.form.success")}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t("quickBooking.form.successMessage")}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primaryDark transition-colors"
                >
                  {t("quickBooking.form.newRequest")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-gray-700 font-semibold text-sm">
                      {t("quickBooking.form.name")} *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder={t("quickBooking.form.namePlaceholder")}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-700 font-semibold text-sm">
                      {t("quickBooking.form.phone")} *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder={t("quickBooking.form.phonePlaceholder")}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2 lg:col-span-1">
                    <label className="text-gray-700 font-semibold text-sm">
                      {t("quickBooking.form.email")}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("quickBooking.form.emailPlaceholder")}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-gray-700 font-semibold text-sm">
                      {t("quickBooking.form.departure")} *
                    </label>
                    <AddressAutocomplete
                      name="adresseDepart"
                      value={formData.adresseDepart}
                      onChange={handleChange}
                      placeholder={t("quickBooking.form.departurePlaceholder")}
                      className=""
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-700 font-semibold text-sm">
                      {t("quickBooking.form.destination")} *
                    </label>
                    <AddressAutocomplete
                      name="adresseArrivee"
                      value={formData.adresseArrivee}
                      onChange={handleChange}
                      placeholder={t(
                        "quickBooking.form.destinationPlaceholder"
                      )}
                      className=""
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-gray-700 font-semibold text-sm">
                        {t("quickBooking.form.date")}
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-gray-700 font-semibold text-sm">
                        {t("quickBooking.form.time")}
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="time"
                          name="heure"
                          value={formData.heure}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary hover:bg-primaryDark hover:scale-105"
                  } text-white shadow-lg flex items-center justify-center space-x-3`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{t("quickBooking.form.submitting")}</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>{t("quickBooking.form.submit")}</span>
                    </>
                  )}
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    {t("quickBooking.form.detailedForm")}{" "}
                    <a
                      href="/reservation"
                      className="text-primary hover:underline"
                    >
                      {t("quickBooking.form.clickHere")}
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
