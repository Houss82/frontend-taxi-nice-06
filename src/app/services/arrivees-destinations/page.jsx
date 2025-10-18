import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import {
  CheckCircle,
  Clock,
  Heart,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title:
    "Arrivées & Destinations Nice | Accueil Personnalisé & Service Haut de Gamme | Taxi Nice-06",
  description:
    "Accueil personnalisé à votre arrivée avec panneau nominatif et service haut de gamme. Disponible 24h/24 pour toutes vos destinations sur Nice et Côte d'Azur.",
  keywords: [
    "arrivée taxi nice",
    "accueil gare nice",
    "destination nice",
    "service personnalisé nice",
    "accueil nominatif nice",
    "service luxe nice",
  ],
};

export default function ArriveesDestinationsPage() {
  const features = [
    {
      icon: Star,
      title: "Accueil nominatif",
      description: "Panneau personnalisé avec votre nom",
    },
    {
      icon: Heart,
      title: "Service personnalisé",
      description: "Accueil chaleureux et attentionné",
    },
    {
      icon: Shield,
      title: "Luxe et confort",
      description: "Véhicules Mercedes haut de gamme",
    },
    {
      icon: Clock,
      title: "Disponibilité 24h",
      description: "Service permanent toute l'année",
    },
    {
      icon: Users,
      title: "Chauffeur professionnel",
      description: "Uniforme impeccable et savoir-être",
    },
    {
      icon: MapPin,
      title: "Toutes destinations",
      description: "Nice, Cannes, Monaco, Saint-Tropez",
    },
  ];

  const services = [
    {
      name: "Accueil Gare SNCF",
      location: "Nice-Ville, Antibes, Cannes",
      description: "Prise en charge à la sortie de votre train",
      price: "À partir de 25€",
    },
    {
      name: "Accueil Port",
      location: "Nice, Cannes, Monaco",
      description: "Service pour croisières et bateaux",
      price: "À partir de 40€",
    },
    {
      name: "Accueil Hôtel",
      location: "Toute la Côte d'Azur",
      description: "Transfert depuis votre hébergement",
      price: "À partir de 30€",
    },
    {
      name: "Accueil Événement",
      location: "Salles, châteaux, villas",
      description: "Service VIP pour vos réceptions",
      price: "À partir de 50€",
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
            name: "Arrivées & Destinations",
            href: "/services/arrivees-destinations",
          },
        ]}
      />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Arrivées & Destinations
                  <span className="block text-blue-600">
                    Service Personnalisé
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Accueil personnalisé à votre arrivée avec panneau nominatif et
                  service haut de gamme. Disponible 24h/24 pour toutes vos
                  destinations sur Nice et la Côte d'Azur.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-center no-underline"
                  >
                    Réserver un accueil
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
                  src="/glc-arrivé.jpeg"
                  alt="Accueil personnalisé avec panneau nominatif"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">VIP</div>
                    <div className="text-sm">Accueil</div>
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
                Service d'Accueil Premium
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un accueil personnalisé et attentionné pour tous vos
                déplacements
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

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Types d'Accueil
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des services adaptés à tous vos points d'arrivée
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.name}
                    </h3>
                    <span className="text-blue-600 font-bold">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    {service.location}
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a
                    href="/reservation"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                  >
                    Réserver {service.name} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Comment réserver votre accueil ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un processus simple et personnalisé
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  1. Contact
                </h3>
                <p className="text-gray-600">
                  Appelez-nous avec vos détails d'arrivée
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  2. Personnalisation
                </h3>
                <p className="text-gray-600">
                  Nous préparons votre panneau nominatif
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  3. Accueil
                </h3>
                <p className="text-gray-600">
                  Notre chauffeur vous attend avec votre panneau
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Réservez votre accueil personnalisé
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Service VIP disponible 24h/24 pour toutes vos arrivées
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
