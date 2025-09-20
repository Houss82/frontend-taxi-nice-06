"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { CheckCircle, Clock, MapPin, Phone, User } from "lucide-react";
import { useState } from "react";

export default function QuickBooking() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    // TODO: branchement backend (Formspree, API route, Express…)
    setSent(true);
  };

  return (
    <section id="reservation" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">
            {t("quickBooking.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("quickBooking.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {t("quickBooking.whyChoose")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{t("quickBooking.features.service247")}</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{t("quickBooking.features.payment")}</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{t("quickBooking.features.confirmation")}</span>
              </li>
            </ul>
          </div>

          <form onSubmit={submit} className="bg-gray-50 p-6 rounded-xl">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  name="name"
                  placeholder={t("quickBooking.form.name")}
                  required
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  name="phone"
                  placeholder={t("quickBooking.form.phone")}
                  required
                />
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  name="from"
                  placeholder={t("quickBooking.form.departure")}
                  required
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  name="to"
                  placeholder={t("quickBooking.form.destination")}
                  required
                />
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  type="datetime-local"
                  name="datetime"
                />
              </div>
            </div>

            <button
              className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primaryDark transition-colors flex items-center justify-center space-x-2"
              type="submit"
            >
              <CheckCircle className="w-5 h-5" />
              <span>{t("quickBooking.form.submit")}</span>
            </button>

            {sent && (
              <div className="mt-4 flex items-center justify-center space-x-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>{t("quickBooking.form.success")}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
