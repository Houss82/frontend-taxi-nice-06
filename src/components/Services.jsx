"use client";

import { Building2, Clock, MapPin, Plane, Star, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Composant pour animer les chiffres
function AnimatedCounter({ end, duration = 2000, decimals = 0, suffix = "" }) {
  const [count, setCount] = useState(end); // Démarre avec la valeur finale pour éviter les 0
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animation optionnelle : on peut animer depuis une valeur plus basse
            // mais on garde la valeur finale visible dès le début
            const startTime = performance.now();
            const startValue = end * 0.7; // Commence à 70% de la valeur finale pour une animation subtile
            const endValue = parseFloat(end);

            // Mettre à jour immédiatement avec la valeur finale pour éviter les 0
            setCount(endValue);

            // Animation optionnelle (désactivée par défaut pour afficher les valeurs directement)
            // Décommenter si vous voulez une animation subtile
            /*
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
            */
          }
        });
      },
      { threshold: 0.1 } // Se déclenche plus tôt pour afficher les valeurs rapidement
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

  // Services en français
  const services = [
    {
      icon: Plane,
      title: "Transferts Aéroport",
      description:
        "Service de transfert professionnel vers et depuis l'aéroport Nice Côte d'Azur avec suivi des vols en temps réel.",
      features: [
        "Suivi des vols en temps réel",
        "Accueil personnalisé",
        "Ponctualité garantie",
      ],
    },
    {
      icon: Building2,
      title: "Transport d'Affaires",
      description:
        "Solutions de transport professionnel pour vos déplacements d'affaires avec facturation simplifiée.",
      features: [
        "Facturation simplifiée",
        "Chauffeurs en costume",
        "WiFi à bord",
      ],
    },
    {
      icon: MapPin,
      title: "Excursions Touristiques",
      description:
        "Découvrez les plus beaux sites de la Côte d'Azur avec nos chauffeurs-guides expérimentés.",
      features: [
        "Chauffeurs-guides",
        "Itinéraires sur mesure",
        "Arrêts photos",
      ],
    },
    {
      icon: Users,
      title: "Événements & Mariages",
      description:
        "Véhicules de luxe pour vos événements spéciaux avec décoration et service VIP disponible.",
      features: ["Véhicules de luxe", "Décoration sur mesure", "Service VIP"],
    },
  ];

  return (
    <section id="services" className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          {/* Badge au-dessus */}
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Solutions Premium
            </span>
          </div>

          {/* Titre principal */}
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Nos Services
            </span>
          </h2>

          {/* Ligne décorative */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>

          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Une gamme complète de{" "}
            <span className="font-semibold text-gray-800">
              services de transport
            </span>{" "}
            pour tous vos besoins sur la Côte d'Azur
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                data-animate
                data-index={`service-${index}`}
                className={`bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md group hover:shadow-xl transition-all duration-1000 ease-out hover:-translate-y-2 h-full flex flex-col ${
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
                <AnimatedCounter end={5} decimals={0} duration={2000} />
                <span className="text-primary">/5</span>
              </h3>
              <p className="text-gray-600">Satisfaction client</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 hover:animate-pulse-glow transition-all duration-300">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-2xl mb-2">
                <AnimatedCounter end={1000} duration={2500} suffix="+" />
              </h3>
              <p className="text-gray-600">Clients satisfaits par mois</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
