import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import { SEOBreadcrumb } from "@/components/SEONavigation.jsx";
import { Award, Briefcase, Clock, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title:
    "Transferts Congrès & Événements Nice | MIPIM, Festival Cannes | Taxi Nice-06",
  description:
    "Service professionnel pour MIPIM, Festival de Cannes, Lions et tous vos événements d'entreprise. Chauffeur en uniforme, ponctualité garantie.",
  keywords: [
    "transferts congrès nice",
    "mipim taxi",
    "festival cannes transport",
    "événements entreprise nice",
    "chauffeur uniforme nice",
    "transport professionnel côte d'azur",
  ],
};

export default function TransfertsEvenementsPage() {
  const features = [
    {
      icon: Users,
      title: "Service événementiel",
      description: "Spécialisé dans les événements d'entreprise et culturels",
    },
    {
      icon: Award,
      title: "Chauffeur en uniforme",
      description: "Présentation impeccable et professionnelle",
    },
    {
      icon: Clock,
      title: "Ponctualité garantie",
      description: "Respect strict des horaires d'événements",
    },
    {
      icon: Star,
      title: "Prestige",
      description: "Service haut de gamme pour vos invités VIP",
    },
    {
      icon: Briefcase,
      title: "Facturation entreprise",
      description: "Devis détaillé et facturation professionnelle",
    },
    {
      icon: MapPin,
      title: "Couverture régionale",
      description: "Nice, Cannes, Monaco, toute la Côte d'Azur",
    },
  ];

  const events = [
    {
      name: "MIPIM",
      location: "Cannes",
      period: "Mars",
      description: "Salon international de l'immobilier d'entreprise",
      image: "/majéstic.jpeg",
    },
    {
      name: "Festival de Cannes",
      location: "Cannes",
      period: "Mai",
      description: "Festival international du cinéma",
      image: "/majéstic.jpeg",
    },
    {
      name: "Lions International",
      location: "Cannes",
      period: "Juin",
      description: "Festival international de la créativité",
      image: "/majéstic.jpeg",
    },
    {
      name: "Monaco Yacht Show",
      location: "Monaco",
      period: "Septembre",
      description: "Salon international du yachting",
      image: "/majéstic.jpeg",
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
            name: "Transferts Événements",
            href: "/services/transferts-evenements",
          },
        ]}
      />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-cyan-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Transferts
                  <span className="block text-cyan-600">
                    Congrès & Événements
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Service professionnel pour MIPIM, Festival de Cannes, Lions,
                  et tous vos événements d'entreprise. Chauffeurs en uniforme et
                  ponctualité garantie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition-colors duration-300 text-center no-underline"
                  >
                    Réserver maintenant
                  </a>
                  <a
                    href="/tarifs"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-cyan-600 text-cyan-600 rounded-xl font-semibold hover:bg-cyan-600 hover:text-white transition-colors duration-300 text-center no-underline"
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
                  src="/majéstic.jpeg"
                  alt="Service transfert événements professionnel"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
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
                Service Événementiel Premium
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Excellence et professionnalisme pour tous vos événements
                d'entreprise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-600" />
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

        {/* Events Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Événements Majeurs de la Côte d'Azur
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nous sommes votre partenaire transport pour tous les grands
                événements de la région
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {event.period}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <a
                      href="/reservation"
                      className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors duration-300"
                    >
                      Réserver pour {event.name} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cyan-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Organisez votre transport événementiel
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                Devis personnalisé pour vos événements d'entreprise et congrès
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  Demander un devis
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-300 no-underline"
                >
                  Nous contacter
                </a>
              </div>
              <div className="mt-8 text-cyan-100">
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
