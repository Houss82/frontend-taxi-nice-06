"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import {
  ArrowRight,
  Calendar,
  Car,
  CheckCircle,
  Clock,
  FileText,
  Heart,
  Mail,
  Phone,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VSLPage() {
  const breadcrumbItems = [
    { name: "Services", url: "/services" },
    { name: "VSL", url: "/services/vsl" },
  ];

  const features = [
    {
      icon: Heart,
      title: "Transport Médicalisé",
      description: "Véhicules sanitaires agréés pour le transport médicalisé",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Shield,
      title: "Chauffeurs Formés",
      description:
        "Chauffeurs spécialement formés à la manipulation des personnes à mobilité réduite",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Accompagnement",
      description:
        "Possibilité d'être accompagné d'un proche ou d'une aide-soignante",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description: "Service disponible en urgence 24h/24 et 7j/7",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const services = [
    {
      title: "Rendez-vous Médicaux",
      description: "Transport pour consultations, examens et soins médicaux",
      icon: Stethoscope,
      features: [
        "Ponctualité garantie pour vos rendez-vous",
        "Transport sécurisé et confortable",
        "Véhicules équipés pour fauteuils roulants",
      ],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      title: "Convalescence",
      description:
        "Transport après hospitalisation ou intervention chirurgicale",
      icon: Car,
      features: [
        "Transfert sécurisé depuis l'hôpital",
        "Prise en charge à domicile",
        "Véhicules adaptés pour le confort",
      ],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      title: "Déplacements Personnels",
      description: "Transport pour vos sorties et déplacements du quotidien",
      icon: Users,
      features: [
        "Sorties loisirs et culturelles",
        "Visites familiales",
        "Courses et démarches administratives",
      ],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
    },
    {
      title: "Événements Spéciaux",
      description:
        "Transport pour mariages, cérémonies et événements familiaux",
      icon: Calendar,
      features: [
        "Transport adapté aux personnes à mobilité réduite",
        "Prise en charge de A à Z",
        "Service personnalisé et discret",
      ],
      color: "bg-pink-50 border-pink-200",
      iconColor: "text-pink-600",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Réservation",
      description: "Appelez-nous pour réserver votre transport VSL",
      icon: Phone,
    },
    {
      step: "02",
      title: "Validation",
      description: "Nous validons votre demande et préparons votre dossier",
      icon: FileText,
    },
    {
      step: "03",
      title: "Confirmation",
      description: "Vous recevez une confirmation avec les détails du trajet",
      icon: CheckCircle,
    },
    {
      step: "04",
      title: "Transport",
      description: "Notre chauffeur vous prend en charge à l'heure prévue",
      icon: Car,
    },
  ];

  const requirements = [
    "Prescription médicale si transport conventionné",
    "Carte d'identité ou pièce d'identité",
    "Renseignements médicaux si nécessaire",
    "Respect des horaires de rendez-vous",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/classB-darguignan copie.png"
            alt="VSL Nice - Véhicule Sanitaire Léger - Transport médicalisé"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-4xl">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mr-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-6xl lg:text-8xl font-bold text-white mb-2">
                    VSL
                  </h1>
                  <p className="text-2xl lg:text-3xl text-pink-300 font-light">
                    Transport Médicalisé
                  </p>
                </div>
              </div>

              <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full mb-8"></div>

              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-10 max-w-3xl">
                Service de transport médicalisé pour personnes à mobilité
                réduite. Véhicules sanitaires agréés et chauffeurs formés pour
                votre confort et sécurité.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="tel:0651683687"
                  className="px-10 py-5 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Réserver un VSL
                </a>
                <a
                  href="#services"
                  className="px-10 py-5 border-2 border-white text-white rounded-2xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
                >
                  En savoir plus
                  <ArrowRight className="w-6 h-6 ml-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Nos Garanties
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Un service de transport médicalisé de qualité, adapté à vos
              besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border border-gray-100"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Nos Services
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transport médicalisé adapté à tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${service.color} rounded-3xl p-8 border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-16 h-16 ${service.color.replace(
                      "50",
                      "100"
                    )} rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Comment ça fonctionne ?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Un processus simple en 4 étapes pour vos transports médicaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto text-white text-3xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    {step.step}
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 text-pink-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Guides & Informations
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez nos guides complets sur le transport médical à Nice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Article 1 */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Transport Médical à Nice
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Guide complet sur les trajets médicaux à Nice : VSL, taxi
                    conventionné CPAM, prise en charge, accompagnement sécurisé.
                    Trajets vers CHU, cliniques et centres spécialisés.
                  </p>
                  <Link
                    href="/blog/transport-medical-nice"
                    className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors duration-300"
                  >
                    Lire l'article complet
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Nouvelle Convention 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Nouvelle convention transports médicaux 2025 : forfait 13€,
                    tarification kilométrique, impact patients. Guide complet
                    pour comprendre les changements et bien préparer vos trajets
                    médicaux.
                  </p>
                  <Link
                    href="/blog/nouvelle-convention-transports-medicaux-2025"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                  >
                    Lire l'article complet
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Documents Requis
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Les documents nécessaires pour bénéficier du transport VSL
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {requirements.map((requirement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-pink-500" />
                  </div>
                  <span className="text-gray-700 text-lg leading-relaxed">
                    {requirement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Besoin d'un Transport VSL ?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Contactez-nous pour réserver votre transport médicalisé
          </p>
          <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Nous proposons aussi un service complet de{" "}
            <Link
              href="/taxi-nice"
              className="text-white font-semibold underline underline-offset-4 hover:text-pink-200 transition-colors"
            >
              taxi Nice 24/7
            </Link>{" "}
            pour tous vos déplacements sur la Côte d'Azur : transferts aéroport,
            gare, centre-ville et longues distances.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:0651683687"
              className="px-12 py-6 bg-white text-pink-600 rounded-2xl font-bold text-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-6 h-6 mr-3" />
              Appeler maintenant
            </a>
            <a
              href="mailto:taxiniceca@gmail.com"
              className="px-12 py-6 border-2 border-white text-white rounded-2xl font-bold text-xl hover:bg-white hover:text-pink-600 transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-6 h-6 mr-3" />
              Demander un devis
            </a>
          </div>

          <div className="mt-12 text-white/80 text-lg">
            📞 <strong>06 51 68 36 87</strong> | ✉️ taxiniceca@gmail.com
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
