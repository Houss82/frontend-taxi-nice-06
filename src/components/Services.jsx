"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { Building2, Clock, MapPin, Plane, Star, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Composant pour animer les chiffres
function AnimatedCounter({ end, duration = 2000, decimals = 0, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const startTime = performance.now();
            const startValue = 0;
            const endValue = parseFloat(end);

            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Fonction d'easing pour une animation plus naturelle
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentValue =
                startValue + (endValue - startValue) * easeOutQuart;

              setCount(currentValue);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(endValue);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  const displayValue =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString("fr-FR");

  return (
    <span ref={counterRef} className="inline-block">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Services() {
  const { t, isHydrated } = useLanguage();
  const [visibleElements, setVisibleElements] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!isHydrated) return;

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
  }, [isHydrated]);

  // Attendre que les traductions soient chargées
  if (!isHydrated) {
    return (
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">
              Nos Services
            </h2>
            <p className="text-gray-600 mb-8">
              Une gamme complète de services de transport
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-6 animate-pulse">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 rounded"></div>
                  <div className="h-3 bg-gray-300 rounded"></div>
                  <div className="h-3 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const services = [
    {
      icon: Plane,
      title: t("services.airport.title"),
      description: t("services.airport.description"),
      features: [
        t("services.airport.features.flightTracking.title"),
        t("services.airport.features.personalWelcome.title"),
        t("services.airport.features.punctuality.title"),
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
            return (
              <div
                key={index}
                data-animate
                data-index={`service-${index}`}
                className={`bg-white border border-gray-200 rounded-xl shadow-sm group hover:shadow-lg transition-all duration-1000 ease-out hover:-translate-y-2 h-full flex flex-col ${
                  visibleElements.has(`service-${index}`)
                    ? "opacity-100 rotate-y-0"
                    : "opacity-0 rotate-y-180"
                }`}
                style={{
                  transitionDelay: visibleElements.has(`service-${index}`)
                    ? `${index * 0.2}s`
                    : "0s",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="p-6 text-center flex flex-col h-full">
                  <div className="w-24 h-24 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-14 h-14 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4 flex-grow">
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
              <h3 className="font-bold text-2xl mb-2">
                <AnimatedCounter end={24} duration={1500} />
                <span className="text-primary">/7</span>
              </h3>
              <p className="text-gray-600">Service disponible jour et nuit</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 hover:animate-pulse-glow transition-all duration-300">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-2xl mb-2">
                <AnimatedCounter end={4.9} decimals={1} duration={2000} />
                <span className="text-primary">/5</span>
              </h3>
              <p className="text-gray-600">Note moyenne de nos clients</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 hover:animate-pulse-glow transition-all duration-300">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-2xl mb-2">
                <AnimatedCounter end={1000} duration={2500} suffix="+" />
              </h3>
              <p className="text-gray-600">Clients satisfaits chaque mois</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
