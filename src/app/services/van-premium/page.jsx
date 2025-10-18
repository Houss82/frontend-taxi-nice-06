import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { Car, Clock, Shield, Thermometer, Users, Wifi } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title:
    "Van Premium Nice - Transport Groupe jusqu'à 8 Passagers | Taxi Nice-06",
  description:
    "Transport de groupe confortable avec notre Van Premium Mercedes. Jusqu'à 8 passagers, climatisation, WiFi gratuit. Service professionnel sur Nice et Côte d'Azur.",
  keywords: [
    "van premium nice",
    "transport groupe nice",
    "taxi 8 personnes",
    "van mercedes nice",
    "transport famille nice",
    "excursion groupe côte d'azur",
  ],
};

export default function VanPremiumPage() {
  const features = [
    {
      icon: Users,
      title: "Jusqu'à 8 passagers",
      description: "Transport confortable pour groupes et familles",
    },
    {
      icon: Car,
      title: "Mercedes récent",
      description: "Flotte moderne et parfaitement entretenue",
    },
    {
      icon: Thermometer,
      title: "Climatisation",
      description: "Confort optimal en toutes saisons",
    },
    {
      icon: Wifi,
      title: "WiFi gratuit",
      description: "Connexion internet à bord",
    },
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Assurance complète et chauffeur expérimenté",
    },
    {
      icon: Clock,
      title: "Disponible 24/7",
      description: "Service permanent toute l'année",
    },
  ];

  const useCases = [
    {
      title: "Transferts Aéroport",
      description: "Arrivée et départ en groupe depuis l'aéroport de Nice",
      price: "À partir de 60€",
    },
    {
      title: "Excursions Côte d'Azur",
      description: "Monaco, Cannes, Saint-Tropez avec guide chauffeur",
      price: "À partir de 200€/jour",
    },
    {
      title: "Événements & Mariages",
      description: "Transport de prestige pour vos moments spéciaux",
      price: "À partir de 150€",
    },
    {
      title: "Sorties d'Entreprise",
      description: "Séminaires, team building, événements professionnels",
      price: "À partir de 180€/jour",
    },
  ];

  return (
    <>
      <Navbar />
      <SEOBreadcrumb
        items={[
          { name: "Accueil", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Van Premium", href: "/services/van-premium" },
        ]}
      />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Van Premium
                  <span className="block text-blue-600">
                    Jusqu'à 8 Passagers
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transport de groupe confortable et spacieux pour vos
                  déplacements familiaux ou professionnels. Notre Van Premium
                  Mercedes vous garantit confort et sécurité.
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
                  src="/van-aéro.jpeg"
                  alt="Van Premium Mercedes pour transport de groupe"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-sm">Passagers max</div>
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
                Caractéristiques du Van Premium
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Confort, sécurité et technologie au service de votre transport
                de groupe
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

        {/* Use Cases Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Cas d'Usage du Van Premium
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Idéal pour tous vos déplacements en groupe sur Nice et la Côte
                d'Azur
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {useCase.title}
                    </h3>
                    <span className="text-blue-600 font-bold">
                      {useCase.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <a
                    href="/reservation"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                  >
                    Réserver →
                  </a>
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
                Prêt à réserver votre Van Premium ?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contactez-nous pour un devis personnalisé ou réservez
                directement en ligne
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
