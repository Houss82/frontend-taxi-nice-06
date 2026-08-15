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

const faqItems = [
  {
    question: "Combien coûte un taxi entre Nice et l'aéroport ?",
    answer:
      "Le tarif GLC de jour vers Nice-Centre est de 40 €, selon la grille publiée sur notre page tarifs. Antibes : 76 €, Cannes : 89 €, Monaco : 99 €. Menton et Saint-Tropez sont indiqués en fourchette. Le prix de votre course vous est communiqué à la réservation, avant le départ.",
  },
  {
    question: "Comment réserver un taxi aéroport Nice ?",
    answer:
      "Réservez en ligne via le formulaire de réservation, ou par téléphone au 06 51 68 36 87. Indiquez le terminal (T1 ou T2), le numéro de vol pour une arrivée, et l'adresse de prise en charge ou de dépose à Nice.",
  },
  {
    question: "Où le chauffeur m'attend-il au Terminal 1 ou au Terminal 2 ?",
    answer:
      "Le chauffeur vous accueille à la sortie des arrivées du terminal indiqué sur votre réservation (Terminal 1 ou Terminal 2), avec un panneau à votre nom. Le point exact vous est confirmé au moment de la réservation.",
  },
  {
    question: "Que se passe-t-il si mon vol est en retard ?",
    answer:
      "Nous suivons le statut de votre vol et adaptons l'heure de prise en charge. Vous n'avez pas à nous rappeler uniquement pour un retard d'atterrissage.",
  },
  {
    question: "Proposez-vous un siège bébé ou un rehausseur ?",
    answer:
      "Oui. Siège bébé et rehausseur sont disponibles sur demande, sans frais, à indiquer lors de la réservation.",
  },
  {
    question: "Le service fonctionne-t-il tôt le matin et tard le soir ?",
    answer:
      "Oui. Les transferts aéroport sont assurés 24h/24 et 7j/7, y compris pour les vols matinaux et les arrivées tardives.",
  },
  {
    question:
      "Peut-on rejoindre Cannes, Monaco, Antibes ou Menton depuis l'aéroport ?",
    answer:
      "Oui. Nous desservons Nice et les principales villes de la Côte d'Azur depuis les deux terminaux. Les tarifs indicatifs figurent ci-dessus et sur la page tarifs.",
  },
];

export default function TransfertsAeroportPage() {
  const trustBadges = [
    { icon: BadgeCheck, label: "Chauffeurs agréés Taxi Nice" },
    { icon: Clock, label: "Suivi de vol" },
    { icon: Shield, label: "Paiement et facture" },
  ];

  const features = [
    {
      icon: Plane,
      title: "Toutes distances",
      description:
        "De Nice vers l'aéroport, et de l'aéroport vers la Côte d'Azur : Cannes, Monaco, Antibes, Menton…",
    },
    {
      icon: Clock,
      title: "Suivi de vol",
      description:
        "En cas de retard d'avion, l'heure de prise en charge est adaptée au statut réel du vol.",
    },
    {
      icon: MapPin,
      title: "Accueil nominatif",
      description:
        "À l'arrivée, votre chauffeur vous attend à la sortie du terminal avec un panneau à votre nom.",
    },
    {
      icon: CheckCircle,
      title: "Horaires adaptés",
      description:
        "Prise en charge calée sur votre vol ou votre heure de départ, y compris tôt le matin.",
    },
    {
      icon: Users,
      title: "Service 24/7",
      description:
        "Réservation et transferts disponibles jour et nuit, 7 jours sur 7.",
    },
    {
      icon: Shield,
      title: "Véhicules assurés",
      description:
        "Berlines et vans climatisés, assistance bagages, sièges enfant sur demande.",
    },
  ];

  const serviceHighlights = [
    {
      icon: ShieldCheck,
      title: "Accueil Terminal 1 et 2",
      description:
        "Prise en charge à l'arrivée avec panneau nominatif et aide pour les bagages.",
    },
    {
      icon: Users,
      title: "Confort selon le trajet",
      description:
        "Berline ou van, sièges enfant et rehausseurs à indiquer à la réservation.",
    },
    {
      icon: BadgeCheck,
      title: "Tarif avant départ",
      description:
        "Le prix de la course vous est communiqué à la réservation, avant le trajet.",
    },
  ];

  const serviceMetrics = [
    { value: "24/7", label: "Jour et nuit" },
    { value: "T1 & T2", label: "Les deux terminaux" },
    { value: "Vol", label: "Suivi en cas de retard" },
  ];

  const destinations = [
    {
      name: "Nice Centre",
      distance: "environ 8 km",
      duration: "15-20 min",
      price: "40 €",
      href: "/secteurs/nice-centre-ville",
    },
    {
      name: "Cannes",
      distance: "environ 32 km",
      duration: "30-40 min",
      price: "89 €",
      href: "/secteurs/cannes",
    },
    {
      name: "Monaco",
      distance: "environ 28 km",
      duration: "30-35 min",
      price: "99 €",
      href: "/secteurs/monaco",
    },
    {
      name: "Antibes",
      distance: "environ 22 km",
      duration: "25-30 min",
      price: "76 €",
      href: "/secteurs/antibes",
    },
    {
      name: "Saint-Tropez",
      distance: "environ 85 km",
      duration: "1h15-1h30",
      price: "dès 280 €",
      href: "/secteurs/saint-tropez",
    },
    {
      name: "Menton",
      distance: "environ 45 km",
      duration: "45-50 min",
      price: "dès 100 €",
      href: "/secteurs/menton",
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
                    Réservation 24/7 – Terminal 1 & 2
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Un taxi pour l&apos;aéroport Nice Côte d&apos;Azur, dans les
                  deux sens : départ depuis Nice (hôtel, domicile, centre-ville,
                  gare) jusqu&apos;au Terminal 1 ou 2, ou accueil à
                  l&apos;arrivée avec suivi de vol et panneau nominatif.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Pour une course en ville, un trajet médical ou une autre
                  destination, retrouvez l&apos;ensemble de nos services sur{" "}
                  <Link
                    href="/"
                    className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-700 transition-colors"
                  >
                    la page d&apos;accueil Taxi Nice 06
                  </Link>
                  .
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    Nice, Monaco, Cannes, Antibes, Menton
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    Assistance bagages · siège enfant sur demande
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    Véhicules récents, climatisés
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    Facture et paiement sécurisé
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
                  <Link
                    href="/reservation"
                    className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition-colors duration-300 text-center no-underline"
                  >
                    Réserver mon taxi aéroport
                  </Link>
                  <Link
                    href="/tarifs"
                    className="px-8 py-4 border-2 border-cyan-600 text-cyan-600 rounded-xl font-semibold hover:bg-cyan-600 hover:text-white transition-colors duration-300 text-center no-underline"
                  >
                    Voir les tarifs
                  </Link>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/aéro-arrivé.jpeg"
                  alt="Taxi aéroport Nice : chauffeur à l'accueil des arrivées"
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

        {/* Présentation + Nice centre ↔ aéroport */}
        <section className="py-16 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 space-y-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Transfert aéroport Nice Côte d&apos;Azur
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Que vous arriviez au{" "}
                <a
                  href="https://www.nice.aeroport.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-700 transition-colors"
                >
                  Terminal 1 ou au Terminal 2
                </a>
                , votre chauffeur suit le vol et vous accueille à la sortie des
                arrivées. Pour un départ, nous vous déposons au terminal indiqué
                sur votre billet.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Le tarif de la course vous est communiqué à la{" "}
                <Link
                  href="/reservation"
                  className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-700 transition-colors"
                >
                  réservation
                </Link>
                . La grille complète (jour / nuit, destinations) est sur la page{" "}
                <Link
                  href="/tarifs"
                  className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-700 transition-colors"
                >
                  tarifs taxi Nice
                </Link>
                . Siège bébé ou rehausseur : à préciser dans le formulaire.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Taxi Nice centre ↔ Aéroport Nice
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
                <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Nice → Aéroport
                  </h3>
                  <p className="mb-3">
                    Prise en charge à l&apos;hôtel, au domicile, en
                    centre-ville, sur la Promenade des Anglais, à la gare ou
                    dans un autre quartier de Nice. Destination : Terminal 1 ou
                    Terminal 2, selon votre vol.
                  </p>
                  <p>
                    Indiquez l&apos;heure d&apos;enregistrement souhaitée : le
                    chauffeur calcule une marge de trajet adaptée au trafic.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Aéroport → Nice
                  </h3>
                  <p className="mb-3">
                    Accueil au terminal d&apos;arrivée, puis transfert vers le
                    centre-ville, un hôtel, un domicile, la gare SNCF ou la
                    Promenade des Anglais.
                  </p>
                  <p>
                    Le numéro de vol permet d&apos;ajuster l&apos;attente en cas
                    de retard. Conseils pratiques :{" "}
                    <Link
                      href="/blog/guide-transfert-aeroport-nice"
                      className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-700 transition-colors"
                    >
                      guide du transfert aéroport
                    </Link>
                    . Arrivée en train :{" "}
                    <Link
                      href="/blog/taxi-nice-gare-sncf"
                      className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-700 transition-colors"
                    >
                      taxi gare Nice-Ville
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-2xl p-8 shadow-xl border border-cyan-500/40">
              <h3 className="text-xl font-semibold mb-6">
                Ce que comprend le service
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
                Un transfert aéroport organisé de bout en bout
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Réservation, suivi du vol, accueil au terminal, puis trajet
                jusqu&apos;à votre adresse.
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
                Destinations depuis l&apos;aéroport
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tarifs indicatifs Mercedes GLC, jour, alignés sur notre{" "}
                <Link
                  href="/tarifs"
                  className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-700"
                >
                  grille tarifaire
                </Link>
                . Durées selon le trafic. Confirmation à la réservation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination) => (
                <div
                  key={destination.name}
                  className="bg-gradient-to-br from-white to-cyan-50 rounded-xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    <Link
                      href={destination.href}
                      className="hover:text-cyan-700 transition-colors"
                    >
                      {destination.name}
                    </Link>
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
                  <Link
                    href="/reservation"
                    className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors duration-300"
                  >
                    Réserver vers {destination.name} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Comment réserver ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trois étapes : réservation, suivi du vol, accueil au terminal.
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
                  Formulaire en ligne ou appel au{" "}
                  <a
                    href="tel:+33651683687"
                    className="text-cyan-600 font-semibold"
                  >
                    06 51 68 36 87
                  </a>
                  . Précisez T1 ou T2 et le numéro de vol si besoin.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Plane className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Suivi de vol
                </h3>
                <p className="text-gray-600">
                  En cas de retard, l&apos;horaire de prise en charge est
                  ajusté. Pas de course à l&apos;aveugle à l&apos;heure prévue
                  d&apos;origine.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <CheckCircle className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Accueil et transfert
                </h3>
                <p className="text-gray-600">
                  Panneau nominatif à la sortie des arrivées, puis trajet vers
                  Nice ou la Côte d&apos;Azur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* T1 / T2 */}
        <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50 border-t">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Terminal 1 et Terminal 2 : où retrouver le chauffeur ?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Indiquez le terminal de votre vol à la réservation. Le chauffeur
              vous attend à la sortie des arrivées, avec un panneau à votre nom.
              Le lieu exact de contact vous est confirmé pour chaque course :
              les zones d&apos;accueil peuvent évoluer selon l&apos;aéroport.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-cyan-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-cyan-600" />
                  Terminal 1 (T1)
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Accueil à la sortie du hall des arrivées du Terminal 1.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Votre chauffeur se présente avec un panneau à votre nom.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Aide pour les bagages, puis départ vers votre adresse.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-cyan-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-cyan-600" />
                  Terminal 2 (T2)
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Accueil à la sortie du hall des arrivées du Terminal 2.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Même principe : panneau nominatif, pas besoin de chercher
                      une file taxi au hasard.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Transfert vers Nice, un hôtel, la gare ou une autre ville
                      de la Côte d&apos;Azur.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-cyan-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-cyan-600" />
                Suivi de vol et contact
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Retard de vol :</strong> l&apos;horaire de prise en
                    charge est adapté au statut réel de l&apos;arrivée.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Contact :</strong> le numéro du chauffeur ou de la
                    centrale vous est communiqué pour la course.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Groupes :</strong> pour 5 passagers ou plus, le{" "}
                    <Link
                      href="/services/van-premium"
                      className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-700"
                    >
                      van premium
                    </Link>{" "}
                    est souvent plus adapté.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white border-t">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              FAQ – Taxi aéroport Nice
            </h2>
            <div className="space-y-5">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="bg-white border border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 text-cyan-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-cyan-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Prêt pour votre transfert aéroport ?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Indiquez votre vol, le terminal et l&apos;adresse à Nice : nous
              confirmons le tarif avant le départ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reservation"
                className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
              >
                Réserver un transfert
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-300 no-underline"
              >
                Nous contacter
              </Link>
            </div>
            <div className="mt-8 text-cyan-100">
              📞{" "}
              <a href="tel:+33651683687" className="text-white font-semibold">
                06 51 68 36 87
              </a>{" "}
              | ✉️ taxiniceca@gmail.com
            </div>
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Taxi Aéroport Nice – Taxi Nice 06",
            url: "https://taxi-nice-06.com/services/taxi-aeroport-nice",
            telephone: "+33651683687",
            email: "taxiniceca@gmail.com",
            logo: "https://taxi-nice-06.com/logo.png",
            image: "https://taxi-nice-06.com/aéro-arrivé.jpeg",
            areaServed: [
              "Nice",
              "Aéroport Nice Côte d'Azur",
              "Cannes",
              "Monaco",
              "Antibes",
              "Menton",
              "Saint-Tropez",
            ],
            priceRange: "€€",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nice",
              addressRegion: "Provence-Alpes-Côte d'Azur",
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
            serviceType: [
              "Taxi aéroport Nice",
              "Transfert aéroport Nice Côte d'Azur",
              "Terminal 1",
              "Terminal 2",
            ],
            sameAs: ["https://maps.app.goo.gl/UzPCMHMeFYZaeZNH8"],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <Footer />
    </div>
  );
}
