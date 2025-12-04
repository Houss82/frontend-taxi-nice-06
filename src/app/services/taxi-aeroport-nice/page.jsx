import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import {
  BadgeCheck,
  CheckCircle,
  Clock,
  HelpCircle,
  MapPin,
  Phone,
  Plane,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TransfertsAeroportPage() {
  const trustBadges = [
    { icon: BadgeCheck, label: "Chauffeurs agréés et officiels Taxi Nice" },
    { icon: Clock, label: "Suivi de vol temps réel" },
    { icon: Shield, label: "Paiement sécurisé & facture" },
  ];

  const features = [
    {
      icon: Plane,
      title: "Toutes Distances",
      description:
        "De Nice Centre à Saint-Tropez, nous couvrons toute la Côte d'Azur",
    },
    {
      icon: Clock,
      title: "Suivi de Vol",
      description:
        "Nous adaptons nos horaires en fonction des retards de votre vol",
    },
    {
      icon: MapPin,
      title: "Accueil Personnalisé",
      description: "Votre nom sur un panneau de bienvenue à votre arrivée",
    },
    {
      icon: CheckCircle,
      title: "Ponctualité Garantie",
      description: "Chauffeur professionnel au rendez-vous à l'heure",
    },
    {
      icon: Users,
      title: "Service 24/7",
      description: "Disponible jour et nuit, 7j/7 pour tous vos vols",
    },
    {
      icon: Shield,
      title: "Sécurité Garantie",
      description: "Véhicules récents et assurances complètes",
    },
  ];

  const serviceHighlights = [
    {
      icon: ShieldCheck,
      title: "Prise en charge VIP",
      description:
        "Accueil personnalisé avec assistance bagages aux terminaux 1 & 2.",
    },
    {
      icon: Users,
      title: "Confort sur-mesure",
      description:
        "Berlines & vans premium, sièges enfant et rehausseurs sur demande.",
    },
    {
      icon: BadgeCheck,
      title: "Tarifs garantis",
      description:
        "Prix fixe confirmé avant départ, aucun frais surprise ni supplément.",
    },
  ];

  const serviceMetrics = [
    { value: "24/7", label: "Disponibilité continue" },
    { value: "15 min", label: "Prise en charge moyenne" },
    { value: "5/5", label: "Satisfaction client" },
  ];

  const destinations = [
    {
      name: "Nice Centre",
      distance: "8 km",
      duration: "15-20 min",
      price: "36€",
    },
    {
      name: "Cannes",
      distance: "32 km",
      duration: "30-40 min",
      price: "90€",
    },
    {
      name: "Monaco",
      distance: "28 km",
      duration: "30-35 min",
      price: "99€",
    },
    {
      name: "Antibes",
      distance: "22 km",
      duration: "25-30 min",
      price: "70€",
    },
    {
      name: "Saint-Tropez",
      distance: "85 km",
      duration: "1h15-1h30",
      price: "280€",
    },
    {
      name: "Menton",
      distance: "45 km",
      duration: "45-50 min",
      price: "110€",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-white border-b mt-20 sm:mt-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <SEOBreadcrumb
            items={[
              { name: "Services", url: "/services" },
              {
                name: "Taxi Aéroport Nice",
                url: "/services/taxi-aeroport-nice",
              },
            ]}
          />
        </div>
      </div>

      <main>
        {/* HERO */}
        <section className="relative sm:py-20 bg-gradient-to-br from-cyan-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 pt-10 sm:py-0">
                  Taxi Aéroport Nice
                  <span className="block text-cyan-600">
                    Chauffeur Privé & Taxi 24/7
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Service de Taxi depuis et vers l'aéroport Nice Côte d'Azur
                  (T1/T2). Accueil nominatif, suivi de vol en temps réel, tarifs
                  fixes et transparents, disponibilité 24/7.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    Transferts Nice ⇄ Monaco, Cannes, Antibes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    Bagages inclus · Siège enfant sur demande
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    Véhicules récents, assurés, climatisés
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    Facture & paiement sécurisé
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3 mb-8">
                  {trustBadges.map((badge, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-white/80 border border-cyan-100 rounded-full px-4 py-2 shadow-sm"
                    >
                      <badge.icon className="w-4 h-4 text-cyan-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {badge.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/reservation"
                    className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition-colors duration-300 text-center no-underline"
                  >
                    Réserver maintenant
                  </a>
                  <a
                    href="/tarifs"
                    className="px-8 py-4 border-2 border-cyan-600 text-cyan-600 rounded-xl font-semibold hover:bg-cyan-600 hover:text-white transition-colors duration-300 text-center no-underline"
                  >
                    Voir les tarifs
                  </a>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/aéro-arrivé.jpeg"
                  alt="Transfert aéroport Nice avec accueil nominatif"
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

        {/* SECTION SEO enrichie */}
        <section className="py-16 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 space-y-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Votre transfert aéroport Nice Côte d'Azur simplifié
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Que vous arriviez au <strong>Terminal 1</strong> ou au{" "}
                <strong>Terminal 2</strong>, votre chauffeur suit votre vol et
                vous accueille à la sortie avec un panneau nominatif. Nous
                desservons hôtels, centres-villes, gares, ports et toutes les
                communes de la Côte d'Azur :{" "}
                <em>Monaco, Cannes, Antibes, Menton, Saint-Tropez…</em>
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nos <strong>tarifs sont fixes et confirmés avant départ</strong>
                . Véhicules récents, propres, climatisés ; sièges bébé et
                rehausseurs sur demande. Idéal pour voyages d'affaires, familles
                et groupes.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Situé à seulement 7 km du centre-ville,{" "}
                <a
                  href="https://www.nice.aeroport.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-700 transition-colors"
                >
                  l'aéroport Nice Côte d'Azur
                </a>{" "}
                est la deuxième plateforme aéroportuaire de France. Nos
                chauffeurs maîtrisent parfaitement ses terminaux, parkings et
                zones d'accueil pour vous garantir un embarquement ou une
                arrivée sans stress.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Besoin de préparer chaque étape ? Consultez{" "}
                <a
                  href="https://taxi-nice-06.com/blog/guide-transfert-aeroport-nice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-700 transition-colors"
                >
                  notre guide complet du transfert depuis l'aéroport de Nice
                </a>{" "}
                pour découvrir tous nos conseils pratiques. Arrivée en train ?
                Découvrez notre{" "}
                <Link
                  href="/blog/taxi-nice-gare-sncf"
                  className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-700 transition-colors"
                >
                  service Taxi Nice Gare SNCF
                </Link>{" "}
                pour un transport rapide depuis la gare vers l'aéroport. Pour
                une vue d'ensemble de tous nos services de{" "}
                <Link
                  href="/taxi-nice"
                  className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-700 transition-colors"
                >
                  taxi Nice 24/7
                </Link>
                , consultez notre page principale dédiée.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-2xl p-8 shadow-xl border border-cyan-500/40">
              <h3 className="text-xl font-semibold mb-6">
                Pourquoi choisir Taxi Nice 06 ?
              </h3>
              <div className="space-y-4 mb-6">
                {serviceHighlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-start bg-white/10 rounded-xl px-4 py-3"
                  >
                    <item.icon className="w-5 h-5 text-white mt-1" />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {serviceMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-white text-cyan-700 rounded-xl px-3 py-4 text-center shadow-lg"
                  >
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="text-xs font-medium uppercase tracking-wide">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Service Transfert Aéroport Premium
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Votre tranquillité d'esprit pour tous vos déplacements aéroport
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
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

        {/* Destinations */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Destinations Populaires
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tarifs fixes et transparents pour toutes vos destinations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-cyan-50 rounded-xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {destination.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {destination.distance}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {destination.duration}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-600 mb-4">
                    {destination.price}
                  </div>
                  <a
                    href="/reservation"
                    className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors duration-300"
                  >
                    Réserver {destination.name} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process (conservé) */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Comment ça fonctionne ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un processus simple et efficace pour vos transferts aéroport
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Phone className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Réservation
                </h3>
                <p className="text-gray-600">
                  Réservez en ligne ou par téléphone en quelques minutes
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Plane className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Suivi de Vol
                </h3>
                <p className="text-gray-600">
                  Nous suivons votre vol et adaptons nos horaires en cas de
                  retard
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <CheckCircle className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Accueil et Transfert
                </h3>
                <p className="text-gray-600">
                  Accueil avec panneau nominatif et transfert vers votre
                  destination
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SEO */}
        <section className="py-16 bg-white border-t">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              FAQ – Transfert Aéroport Nice
            </h2>
            <div className="space-y-5">
              <div className="bg-white border border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-cyan-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Quels sont les tarifs pour un transfert aéroport ?
                    </h3>
                    <p className="text-gray-700">
                      Nice Centre (36€), Cannes (90€), Monaco (99€), Antibes
                      (70€)… Prix fixes connus à l'avance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-cyan-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Suivez-vous les vols en cas de retard ?
                    </h3>
                    <p className="text-gray-700">
                      Oui. Nous ajustons l'heure de prise en charge selon le
                      statut de votre vol.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-cyan-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Où retrouver mon chauffeur à l'aéroport de Nice ?
                    </h3>
                    <p className="text-gray-700">
                      À la sortie du terminal, avec un panneau nominatif.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-cyan-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Proposez-vous des sièges enfant ?
                    </h3>
                    <p className="text-gray-700">
                      Oui, siège bébé et rehausseur disponibles gratuitement sur
                      demande.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-cyan-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Prêt pour votre transfert ?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Réservez dès maintenant votre transfert aéroport et voyagez
              l'esprit tranquille
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reservation"
                className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
              >
                Réserver maintenant
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
        </section>
      </main>

      {/* JSON-LD LocalBusiness + FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Taxi Nice 06",
            url: "https://taxi-nice-06.com",
            telephone: "+33651683687",
            areaServed: [
              "Nice",
              "Aéroport Nice Côte d'Azur",
              "Cannes",
              "Monaco",
              "Antibes",
              "Menton",
            ],
            priceRange: "€€",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nice",
              addressRegion: "PACA",
              addressCountry: "FR",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            ],
            serviceType: "Transfert aéroport",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quels sont les tarifs pour un transfert aéroport ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nice Centre (36€), Cannes (90€), Monaco (99€), Antibes (70€). Prix fixes confirmés à l'avance.",
                },
              },
              {
                "@type": "Question",
                name: "Suivez-vous les vols en cas de retard ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, nous suivons votre vol en temps réel et ajustons l'heure de prise en charge.",
                },
              },
              {
                "@type": "Question",
                name: "Où retrouver mon chauffeur à l'aéroport de Nice ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "À la sortie du terminal (T1/T2) avec panneau nominatif.",
                },
              },
              {
                "@type": "Question",
                name: "Proposez-vous des sièges enfant ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, siège bébé et rehausseur disponibles gratuitement sur demande.",
                },
              },
            ],
          }),
        }}
      />

      <Footer />
    </div>
  );
}
