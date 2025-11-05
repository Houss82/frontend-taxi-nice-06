"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import {
  Award,
  Car,
  CheckCircle,
  Shield,
  Thermometer,
  Users,
  Wifi,
  Wrench,
} from "lucide-react";
import Image from "next/image";

export default function FlotteRecentePage() {
  const features = [
    {
      icon: Car,
      title: "Flotte Récente",
      description:
        "Véhicules de moins de 3 ans garantissant une expérience optimale",
    },
    {
      icon: Wrench,
      title: "Entretien Régulier",
      description: "Contrôles techniques et maintenance préventive rigoureuse",
    },
    {
      icon: Thermometer,
      title: "Confort Moderne",
      description: "Climatisation, sièges en cuir et équipements haut de gamme",
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "Véhicules équipés des dernières technologies de sécurité",
    },
    {
      icon: Wifi,
      title: "Technologie",
      description: "WiFi, chargeurs USB et écrans multimédia en option",
    },
    {
      icon: Award,
      title: "Qualité Premium",
      description: "Mercedes-Benz et véhicules haut de gamme exclusifs",
    },
  ];

  const vehicles = [
    {
      name: "Mercedes GLC",
      capacity: "4 passagers",
      image: "/imageGLC.png",
      description:
        "SUV premium Mercedes-Benz, idéal pour les trajets confortables",
      features: [
        "Climatisation automatique",
        "Sièges cuir électriques",
        "Navigation GPS intégrée",
        "Système audio haut de gamme",
      ],
    },
    {
      name: "Van Premium",
      capacity: "8 passagers",
      image: "/image-van.png",
      description: "Véhicule spacieux pour groupes et familles nombreuses",
      features: [
        "Climatisation multi-zones",
        "Sièges amovibles confortables",
        "Grand espace bagages",
        "Connexion WiFi (en option)",
      ],
    },
  ];

  const maintenance = [
    {
      title: "Contrôles Techniques",
      frequency: "Tous les 6 mois",
      description: "Vérifications complètes de l'état général et de sécurité",
    },
    {
      title: "Maintenance Préventive",
      frequency: "Selon programme",
      description: "Révisions régulières chez le constructeur",
    },
    {
      title: "Nettoyage Professionnel",
      frequency: "Après chaque course",
      description: "Lavage extérieur et nettoyage intérieur complet",
    },
    {
      title: "Contrôle Qualité",
      frequency: "En continu",
      description: "Vérifications quotidiennes avant la mise en service",
    },
  ];

  const breadcrumbItems = [
    { name: "Services", url: "/services" },
    { name: "Flotte Récente", url: "/services/flotte-recente" },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white border-b mt-20 sm:mt-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 pt-10 sm:py-0">
                  Flotte Récente
                  <span className="block text-blue-600">& Entretenue</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Profitez de notre flotte de véhicules récents et haut de
                  gamme. Tous nos véhicules ont moins de 3 ans et bénéficient
                  d'un entretien rigoureux pour votre confort et sécurité.
                </p>

                {/* Section pourquoi choisir notre flotte */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Pourquoi choisir notre flotte ?
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Véhicules de moins de 3 ans
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Entretien régulier
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Marquess premium Mercedes-Benz
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Technologie moderne
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-center no-underline"
                  >
                    Réserver maintenant
                  </a>
                  <a
                    href="/tarifs"
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 text-center no-underline"
                  >
                    Voir les tarifs
                  </a>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/intérieur-van.jpeg"
                  alt="Flotte moderne et entretenue"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl max-h-[300px] lg:max-h-[450px] object-cover"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm">Ans max</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Nos Garanties
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des véhicules récents, entretenus et équipés des dernières
                technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicles Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Notre Flotte
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez nos véhicules premium récents et parfaitement
                entretenus
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {vehicles.map((vehicle, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {vehicle.name}
                    </h3>
                    <div className="flex items-center text-blue-600 mb-3">
                      <Users className="w-5 h-5 mr-2" />
                      {vehicle.capacity}
                    </div>
                    <p className="text-gray-600 mb-4">{vehicle.description}</p>
                    <div className="space-y-2 mb-6">
                      {vehicle.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                          <span className="text-gray-600 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="/reservation"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                    >
                      Réserver {vehicle.name} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Entretien & Maintenance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un programme d'entretien rigoureux pour garantir la fiabilité de
                nos véhicules
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {maintenance.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center border border-blue-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <div className="text-blue-600 font-bold mb-3">
                    {item.frequency}
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Voyagez dans le Confort
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Réservez votre trajet avec notre flotte récente et profitez d'un
                voyage premium
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  Réserver maintenant
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 no-underline"
                >
                  Nous contacter
                </a>
              </div>
              <div className="mt-8 text-blue-100">
                📞 <strong>06 51 68 36 87</strong> | ✉️ taxiniceca@gmail.com
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
