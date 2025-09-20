"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { useEffect, useRef, useState } from "react";

export default function VehicleSelection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const vehicles = [
    {
      id: "glc",
      name: t("vehicleSelection.glc.name"),
      image: "/imageGLC.png",
    },
    {
      id: "van",
      name: t("vehicleSelection.van.name"),
      image: "/image-van.png",
    },
  ];

  return (
    <section className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">
            {t("vehicleSelection.title")}
          </h2>
        </div>

        {/* Affichage des véhicules côte à côte */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className={`group cursor-pointer ${
                isVisible
                  ? vehicle.id === "glc"
                    ? "animate-slide-in-left"
                    : "animate-slide-in-right"
                  : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${index * 0.3}s` : "0s",
              }}
            >
              {/* Image du véhicule */}
              <div className="relative h-80 mb-6 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Nom du véhicule */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-black uppercase group-hover:text-primary transition-colors duration-300 mb-4">
                  {vehicle.name}
                </h3>

                {/* Bouton pour voir les tarifs */}
                <a
                  href={`/tarifs?vehicle=${vehicle.id}`}
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primaryDark transition-colors duration-300 group-hover:scale-105 transform"
                >
                  {t("vehicleSelection.seePrices")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
