"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { CheckCircle, Star } from "lucide-react";

export default function Benefits() {
  const { t } = useLanguage();

  const points = [
    "benefits.professionalDrivers",
    "benefits.mercedesVehicles",
    "benefits.simpleBooking",
    "benefits.fixedRates",
  ];

  return (
    <section className="py-10 bg-slate-50">
      <div className="container grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t("benefits.title")}
          </h2>
          <ul className="space-y-3">
            {points.map((pointKey) => (
              <li key={pointKey} className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span>{t(pointKey)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-6">
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="mt-2 text-slate-700">
            {t("benefits.testimonial.text")}
          </p>
          <p className="mt-2 text-slate-500 text-sm">
            — {t("benefits.testimonial.author")}
          </p>
        </div>
      </div>
    </section>
  );
}
