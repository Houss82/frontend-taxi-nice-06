import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
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

export const metadata = {
  title:
    "Flotte Récente & Adaptée Nice | Véhicules Modernes Mercedes | Taxi Nice-06",
  description:
    "Véhicules modernes, confortables et parfaitement entretenus pour tous vos besoins de transport. Flotte Mercedes récente avec confort et sécurité garantis.",
  keywords: [
    "flotte taxi nice",
    "véhicules récents nice",
    "confort transport nice",
    "taxi officiel nice",
    "mercedes taxi nice",
    "véhicules modernes côte d'azur",
  ],
};

export default function FlotteRecentePage() {
  const features = [
    {
      icon: Car,
      title: "Flotte récente",
      description: "Véhicules Mercedes de moins de 3 ans",
    },
    {
      icon: Wrench,
      title: "Entretien régulier",
      description: "Maintenance préventive et contrôles techniques",
    },
    {
      icon: Thermometer,
      title: "Confort moderne",
      description: "Climatisation, sièges en cuir, espace généreux",
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "Assurance complète et équipements de sécurité",
    },
    {
      icon: Wifi,
      title: "Technologie",
      description: "WiFi gratuit, chargeurs USB, GPS",
    },
    {
      icon: Award,
      title: "Qualité premium",
      description: "Standards Mercedes-Benz pour votre confort",
    },
  ];

  const vehicles = [
    {
      name: "Mercedes GLC",
      capacity: "4 passagers",
      image: "/imageGLC.png",
      description: "SUV premium avec confort exceptionnel",
      features: [
        "Sièges en cuir",
        "Climatisation",
        "WiFi gratuit",
        "Coffre spacieux",
      ],
    },
    {
      name: "Van Premium",
      capacity: "8 passagers",
      image: "/image-van.png",
      description: "Transport de groupe avec espace généreux",
      features: [
        "Espace pour bagages",
        "Climatisation",
        "Accès facilité",
        "Confort optimal",
      ],
    },
  ];

  const maintenance = [
    {
      title: "Contrôles techniques",
      frequency: "Tous les 6 mois",
      description: "Vérification complète de tous les équipements",
    },
    {
      title: "Maintenance préventive",
      frequency: "Selon constructeur",
      description: "Entretien régulier chez Mercedes-Benz",
    },
    {
      title: "Nettoyage professionnel",
      frequency: "Après chaque course",
      description: "Intérieur et extérieur impeccablement nettoyés",
    },
    {
      title: "Contrôle qualité",
      frequency: "Quotidien",
      description: "Vérification des équipements et du confort",
    },
  ];

  return (
    <>
      <Navbar />
      <SEOBreadcrumb
        items={[
          { name: "Accueil", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Flotte Récente", href: "/services/flotte-recente" },
        ]}
      />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Flotte Récente
                  <span className="block text-blue-600">& Adaptée</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Véhicules modernes, confortables et parfaitement entretenus
                  pour tous vos besoins de transport. Notre flotte Mercedes
                  récente vous garantit confort et sécurité.
                </p>
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
                  className="rounded-2xl shadow-2xl"
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
                Garanties de Qualité
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos engagements pour votre confort et votre sécurité
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
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
                Notre Flotte Mercedes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des véhicules premium pour tous vos besoins de transport
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {vehicles.map((vehicle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                Nos véhicules sont maintenus selon les plus hauts standards
                Mercedes-Benz
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {maintenance.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center"
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
                Découvrez notre flotte premium
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Réservez dès maintenant et profitez de véhicules Mercedes
                récents et parfaitement entretenus
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
