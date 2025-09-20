"use client";

import { useLanguage } from "@/contexts/LanguageContext.jsx";
import { Award, Heart, Shield, Zap } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t("about.features.safety.title"),
      description: t("about.features.safety.description"),
    },
    {
      icon: Award,
      title: t("about.features.quality.title"),
      description: t("about.features.quality.description"),
    },
    {
      icon: Heart,
      title: t("about.features.passion.title"),
      description: t("about.features.passion.description"),
    },
    {
      icon: Zap,
      title: t("about.features.speed.title"),
      description: t("about.features.speed.description"),
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl  font-bold mb-4">
                {t("about.title")}{" "}
                <span className="text-primary">
                  {t("about.brandHighlight")}
                </span>{" "}
                ?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t("about.description")}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border-l-4 border-l-primary rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="p-4">
                    <div className="flex items-center space-x-3">
                      <feature.icon className="w-8 h-8 text-primary" />
                      <div>
                        <h3 className="font-bold text-black">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl overflow-hidden">
              <img
                src="/expérience2.jpeg"
                alt="Chauffeur professionnel à Nice"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-primary text-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">{t("about.experience")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
