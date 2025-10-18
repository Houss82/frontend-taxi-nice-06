import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import {
  Camera,
  CheckCircle,
  Clock,
  Compass,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title:
    "Excursions & Découvertes Côte d'Azur | Monaco, Cannes, Saint-Tropez | Taxi Nice-06",
  description:
    "Explorez la Côte d'Azur avec nos excursions personnalisées : Monaco, Cannes, Saint-Tropez. Itinéraires sur mesure avec guide local et arrêts photos.",
  keywords: [
    "excursions nice",
    "monaco taxi",
    "cannes excursion",
    "côte d'azur tourisme",
    "excursion saint tropez",
    "guide local nice",
  ],
};

export default function ExcursionsDecouvertesPage() {
  const features = [
    {
      icon: MapPin,
      title: "Itinéraires personnalisés",
      description: "Circuits adaptés à vos envies et disponibilités",
    },
    {
      icon: Users,
      title: "Guide local",
      description: "Chauffeur connaissant tous les secrets de la région",
    },
    {
      icon: Camera,
      title: "Arrêts photos",
      description: "Pauses pour immortaliser vos plus beaux souvenirs",
    },
    {
      icon: Compass,
      title: "Découverte",
      description: "Sites incontournables et lieux cachés",
    },
    {
      icon: Clock,
      title: "Flexibilité",
      description: "Horaires et durées adaptés à vos souhaits",
    },
    {
      icon: Star,
      title: "Expérience unique",
      description: "Découverte authentique de la Côte d'Azur",
    },
  ];

  const destinations = [
    {
      name: "Monaco",
      duration: "4-6h",
      price: "À partir de 200€",
      image: "/monaco.jpg",
      highlights: [
        "Palais Princier",
        "Casino Monte-Carlo",
        "Port Hercule",
        "Musée Océanographique",
      ],
    },
    {
      name: "Cannes",
      duration: "3-5h",
      price: "À partir de 180€",
      image: "/majéstic.jpeg",
      highlights: [
        "La Croisette",
        "Palais des Festivals",
        "Le Suquet",
        "Îles de Lérins",
      ],
    },
    {
      name: "Saint-Tropez",
      duration: "6-8h",
      price: "À partir de 350€",
      image: "/foret-glc.jpeg",
      highlights: [
        "Vieux Port",
        "Citadelle",
        "Plage de Pampelonne",
        "Village de Ramatuelle",
      ],
    },
    {
      name: "Èze & La Turbie",
      duration: "3-4h",
      price: "À partir de 150€",
      image: "/foret-glc.jpeg",
      highlights: [
        "Village médiéval d'Èze",
        "Jardin Exotique",
        "Trophée des Alpes",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <SEOBreadcrumb
        items={[
          { name: "Accueil", href: "/" },
          { name: "Services", href: "/services" },
          {
            name: "Excursions & Découvertes",
            href: "/services/excursions-decouvertes",
          },
        ]}
      />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-green-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Excursions & Découvertes
                  <span className="block text-blue-600">Côte d'Azur</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Explorez la Côte d'Azur avec nos excursions personnalisées :
                  Monaco, Cannes, Saint-Tropez. Itinéraires sur mesure avec
                  guide local et arrêts photos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-center no-underline"
                  >
                    Réserver une excursion
                  </a>
                  <a
                    href="/tarifs"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 text-center no-underline"
                  >
                    Voir les tarifs
                  </a>
                </div>
              </div>

              <div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <Image
                  src="/foret-glc.jpeg"
                  alt="Excursions Côte d'Azur personnalisées"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm">Personnalisé</div>
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
                Nos Services d'Excursion
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une expérience unique pour découvrir les plus beaux sites de la
                Côte d'Azur
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

        {/* Destinations Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Destinations Incontournables
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Les plus beaux sites de la Côte d'Azur à découvrir avec votre
                guide chauffeur
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {destination.duration}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {destination.price}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {destination.name}
                    </h3>
                    <div className="space-y-2 mb-4">
                      {destination.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                          <span className="text-gray-600 text-sm">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="/reservation"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                    >
                      Réserver excursion {destination.name} →
                    </a>
                  </div>
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
                Créez votre excursion sur mesure
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contactez-nous pour organiser votre découverte personnalisée de
                la Côte d'Azur
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  Réserver une excursion
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
