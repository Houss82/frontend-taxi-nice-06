"use client";

import { ContentImage } from "@/components/OptimizedImage.jsx";
import { motion } from "framer-motion";
import { Award, Heart, Shield, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Sécurité",
      description: "Véhicules assurés",
    },
    {
      icon: Award,
      title: "Qualité",
      description: "Service premium",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Service client",
    },
    {
      icon: Zap,
      title: "Rapidité",
      description: "Réservation instant",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Pourquoi choisir{" "}
                <motion.span
                  className="text-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  Taxi Nice
                </motion.span>{" "}
                ?
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                Depuis plus de 15 ans, nous offrons un service de transport de
                qualité sur la Côte d'Azur. Notre équipe de chauffeurs
                professionnels vous garantit confort, sécurité et ponctualité.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-l-4 border-l-primary rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="p-4">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.6 + index * 0.1,
                          ease: "easeOut",
                        }}
                      >
                        <feature.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <div>
                        <motion.h3
                          className="font-bold text-black"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.7 + index * 0.1,
                            ease: "easeOut",
                          }}
                        >
                          {feature.title}
                        </motion.h3>
                        <motion.p
                          className="text-sm text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.8 + index * 0.1,
                            ease: "easeOut",
                          }}
                        >
                          {feature.description}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl overflow-hidden">
              <ContentImage
                src="/expérience2.jpeg"
                alt="Chauffeur professionnel à Nice"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-primary text-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
