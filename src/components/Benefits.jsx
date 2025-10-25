"use client";

import { CheckCircle, Star } from "lucide-react";

export default function Benefits() {
  const points = [
    "Chauffeurs professionnels",
    "Véhicules haut de gamme Mercedes",
    "Réservation simple & rapide",
    "Tarifs fixes et transparents",
  ];

  return (
    <section className="py-10 bg-slate-50">
      <div className="container grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Avantages</h2>
          <ul className="space-y-3">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span>{point}</span>
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
            Super service ! Chauffeur ponctuel, voiture impeccable. Je
            recommande.
          </p>
          <p className="mt-2 text-slate-500 text-sm">— Claire, Paris</p>
        </div>
      </div>
    </section>
  );
}
