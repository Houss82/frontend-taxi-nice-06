"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { Building2, Clock, MapPin, Plane, Star, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Services() {
  const { t } = useLanguage();
  const [visibleElements, setVisibleElements] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(
              (prev) => new Set([...prev, entry.target.dataset.index])
            );
          }
        });
      },
      {
        threshold: 0.1, // Déclenche quand 10% de l'élément est visible
        rootMargin: "0px 0px -50px 0px", // Déclenche un peu avant que l'élément soit complètement visible
      }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((element) => observer.observe(element));

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
    };
  }, []);
  const services = [
    {
      icon: Plane,
      title: t("services.airport.title"),
      description: t("services.airport.description"),
      features: [
        t("services.airport.features.flightTracking"),
        t("services.airport.features.personalized"),
        t("services.airport.features.premiumVehicles"),
      ],
    },
    {
      icon: Building2,
      title: t("services.business.title"),
      description: t("services.business.description"),
      features: [
        t("services.business.features.invoicing"),
        t("services.business.features.drivers"),
        t("services.business.features.wifi"),
      ],
    },
    {
      icon: MapPin,
      title: t("services.tourism.title"),
      description: t("services.tourism.description"),
      features: [
        t("services.tourism.features.guides"),
        t("services.tourism.features.custom"),
        t("services.tourism.features.photos"),
      ],
    },
    {
      icon: Users,
      title: t("services.events.title"),
      description: t("services.events.description"),
      features: [
        t("services.events.features.luxury"),
        t("services.events.features.decoration"),
        t("services.events.features.vip"),
      ],
    },
  ];

  return (
    <section id="services" className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">
            {t("services.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            // Définir les animations de jeu de cartes pour chaque service
            const animations = [
              "animate-deal-card",
              "animate-fan-cards",
              "animate-shuffle-in",
              "animate-stack-cards",
            ];
            const delays = ["0s", "0.3s", "0.6s", "0.9s"];

            return (
              <div
                key={index}
                data-animate
                data-index={`service-${index}`}
                className={`bg-white border border-gray-200 rounded-xl shadow-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:animate-wiggle ${
                  visibleElements.has(`service-${index}`)
                    ? animations[index]
                    : "opacity-0"
                }`}
                style={{
                  animationDelay: visibleElements.has(`service-${index}`)
                    ? delays[index]
                    : "0s",
                }}
              >
                <div className="p-6 text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:animate-pulse-glow">
                    <service.icon className="w-14 h-14 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <Star className="w-4 h-4 text-primary fill-current" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 hover:animate-pulse-glow transition-all duration-300">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-2xl mb-2">24/7</h3>
              <p className="text-gray-600">Service disponible jour et nuit</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 hover:animate-pulse-glow transition-all duration-300">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-2xl mb-2">4.9/5</h3>
              <p className="text-gray-600">Note moyenne de nos clients</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 hover:animate-pulse-glow transition-all duration-300">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-2xl mb-2">1000+</h3>
              <p className="text-gray-600">Clients satisfaits chaque mois</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
