import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import {
  Camera,
  CheckCircle,
  Crown,
  Gift,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title:
    "Transport Mariages & Événements Spéciaux Nice | Service Prestige | Taxi Nice-06",
  description:
    "Transport de prestige pour vos moments spéciaux : mariages, anniversaires, cérémonies. Service VIP avec décoration de véhicule sur Nice et Côte d'Azur.",
  keywords: [
    "mariage taxi nice",
    "transport mariage côte d'azur",
    "événements spéciaux nice",
    "transport prestige nice",
    "cérémonies transport nice",
    "service vip mariage",
  ],
};

export default function EvenementsMariagesPage() {
  const features = [
    {
      icon: Heart,
      title: "Mariages",
      description: "Transport de prestige pour votre jour J",
    },
    {
      icon: Gift,
      title: "Anniversaires",
      description: "Célébrations mémorables en VIP",
    },
    {
      icon: Crown,
      title: "Service VIP",
      description: "Chauffeur en uniforme et véhicule décoré",
    },
    {
      icon: Camera,
      title: "Photos souvenirs",
      description: "Votre chauffeur peut vous prendre en photo",
    },
    {
      icon: Sparkles,
      title: "Décoration véhicule",
      description: "Personnalisation selon vos souhaits",
    },
    {
      icon: Users,
      title: "Groupes VIP",
      description: "Transport pour témoins et invités",
    },
  ];

  const services = [
    {
      name: "Mariage Classique",
      description: "Transport marié et mariée, témoins, famille",
      price: "À partir de 200€",
      features: ["Véhicule décoré", "Chauffeur en uniforme", "Photos incluses"],
    },
    {
      name: "Anniversaire VIP",
      description: "Célébration spéciale avec style",
      price: "À partir de 150€",
      features: [
        "Décoration sur mesure",
        "Musique personnalisée",
        "Service premium",
      ],
    },
    {
      name: "Cérémonie Religieuse",
      description: "Transport pour cérémonies et réceptions",
      price: "À partir de 180€",
      features: [
        "Ponctualité absolue",
        "Discrétion garantie",
        "Confort optimal",
      ],
    },
    {
      name: "Événement d'Entreprise",
      description: "Réceptions, galas, soirées d'entreprise",
      price: "À partir de 120€",
      features: [
        "Facturation entreprise",
        "Service professionnel",
        "Disponibilité 24/7",
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
            name: "Événements & Mariages",
            href: "/services/evenements-mariages",
          },
        ]}
      />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-pink-50 to-purple-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Événements & Mariages
                  <span className="block text-pink-600">Service Prestige</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transport de prestige pour vos moments spéciaux : mariages,
                  anniversaires, cérémonies. Véhicules décorés et service VIP
                  pour des souvenirs inoubliables.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300 text-center no-underline"
                  >
                    Réserver maintenant
                  </a>
                  <a
                    href="/tarifs"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-pink-600 text-pink-600 rounded-xl font-semibold hover:bg-pink-600 hover:text-white transition-colors duration-300 text-center no-underline"
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
                  src="/hotel-mougins.jpeg"
                  alt="Transport mariage et événements spéciaux"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-pink-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">VIP</div>
                    <div className="text-sm">Service</div>
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
                Services Spéciaux pour vos Moments Inoubliables
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Chaque détail compte pour faire de votre événement un moment
                parfait
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-pink-600" />
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
                Nos Formules Événementielles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des services sur mesure pour chaque type de célébration
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
                    <span className="text-pink-600 font-bold">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-pink-600 mr-2" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="/reservation"
                    className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors duration-300"
                  >
                    Réserver cette formule →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Témoignages de nos Clients
              </h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "Un service exceptionnel pour notre mariage ! Le chauffeur
                  était en uniforme, la voiture magnifiquement décorée, et il a
                  même pris des photos de nous. Un moment parfait qui restera
                  gravé dans nos mémoires."
                </blockquote>
                <div className="text-gray-600 font-semibold">
                  - Sophie & Marc, Mariage à Nice
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-pink-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Organisez votre événement parfait
              </h2>
              <p className="text-xl text-pink-100 mb-8">
                Contactez-nous pour un devis personnalisé et des conseils
                d'organisation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="px-8 py-4 bg-white text-pink-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  Réserver maintenant
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-pink-600 transition-colors duration-300 no-underline"
                >
                  Nous contacter
                </a>
              </div>
              <div className="mt-8 text-pink-100">
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
