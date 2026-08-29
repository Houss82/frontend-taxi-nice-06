import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle,
  Clock,
  HelpCircle,
  MapPin,
  Phone,
  Plane,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const faqItems = [
  {
    question:
      "Peut-on réserver un taxi de l'aéroport de Nice vers Sophia Antipolis ?",
    answer:
      "Oui. Indiquez le terminal (T1 ou T2), votre numéro de vol pour une arrivée, le nombre de passagers et l'adresse exacte ou le nom de l'entreprise à Sophia Antipolis. Le tarif vous est confirmé à la réservation.",
  },
  {
    question:
      "Peut-on réserver le trajet Sophia Antipolis vers l'aéroport de Nice ?",
    answer:
      "Oui. Précisez l'adresse de prise en charge dans la technopole, votre terminal de départ, l'horaire de vol et l'heure souhaitée d'arrivée à l'aéroport. Nous adaptons la prise en charge à votre planning.",
  },
  {
    question: "Où le chauffeur peut-il me déposer à Sophia Antipolis ?",
    answer:
      "Directement devant votre entreprise, un campus, un hôtel d'affaires ou toute adresse précise dans la technopole et les communes associées (Valbonne, Biot, Mougins, secteur Antibes). Donnez le lieu exact lors de la réservation.",
  },
  {
    question: "Peut-on voyager avec plusieurs bagages ?",
    answer:
      "Oui. Signalez le volume approximatif de vos valises lors de la réservation afin que nous prévoyions un véhicule adapté au nombre de passagers et aux bagages.",
  },
  {
    question: "Peut-on réserver un van pour plusieurs passagers ?",
    answer:
      "Oui. Pour une petite équipe ou un groupe avec bagages, un van peut être plus adapté qu'une berline. Indiquez le nombre exact de passagers ; nous vous orientons vers le véhicule approprié.",
  },
  {
    question: "Comment indiquer mon terminal ou mon numéro de vol ?",
    answer:
      "Renseignez le terminal et le numéro de vol dans le formulaire de réservation ou par téléphone. Pour une arrivée, le suivi de vol permet d'adapter l'heure de prise en charge en cas de retard.",
  },
  {
    question: "Combien de temps à l'avance faut-il réserver ?",
    answer:
      "Pour un rendez-vous professionnel ou un vol matinal, réservez dès que possible. En période chargée, une anticipation de 24 à 48 h est conseillée. Pour une demande urgente, contactez-nous au 06 51 68 36 87.",
  },
  {
    question: "Comment connaître le tarif du transfert ?",
    answer:
      "Le tarif dépend notamment de l'horaire, du véhicule et du point exact de prise en charge ou de dépose. Il vous est communiqué à la réservation, avant le départ. Consultez aussi la page tarifs pour la grille indicative.",
  },
];

export default function TaxiAeroportSophiaPage() {
  const breadcrumbItems = [
    { name: "Services", url: "/services" },
    { name: "Taxi Aéroport Nice", url: "/services/taxi-aeroport-nice" },
    {
      name: "Sophia Antipolis",
      url: "/services/taxi-aeroport-nice-sophia-antipolis",
    },
  ];

  const trustBadges = [
    { icon: Clock, label: "Suivi de vol" },
    { icon: BadgeCheck, label: "Accueil T1 & T2" },
    { icon: Shield, label: "Facture entreprise" },
  ];

  const serviceHighlights = [
    {
      icon: Plane,
      title: "Accueil à l'aéroport",
      description:
        "Prise en charge au Terminal 1 ou 2, panneau nominatif et aide bagages à l'arrivée.",
    },
    {
      icon: Building2,
      title: "Dépose en technopole",
      description:
        "Entreprise, campus, hôtel d'affaires ou adresse précise à Sophia Antipolis.",
    },
    {
      icon: BadgeCheck,
      title: "Tarif avant départ",
      description:
        "Le prix de la course vous est communiqué à la réservation, avant le trajet.",
    },
  ];

  const serviceMetrics = [
    { value: "~20 km", label: "Distance" },
    { value: "T1 & T2", label: "Terminaux" },
    { value: "24/7", label: "Réservation" },
  ];

  const features = [
    {
      icon: Clock,
      title: "Suivi de vol",
      description:
        "En cas de retard d'atterrissage, l'heure de prise en charge est adaptée au statut réel du vol.",
    },
    {
      icon: MapPin,
      title: "Trajet porte-à-porte",
      description:
        "Pas de liaison ferroviaire directe : un taxi évite les correspondances entre l'aéroport et la technopole.",
    },
    {
      icon: Briefcase,
      title: "Déplacements professionnels",
      description:
        "Missions en entreprise, entretiens, réunions et visites de campus dans la technopole.",
    },
    {
      icon: Users,
      title: "Berline ou van",
      description:
        "Véhicule adapté au nombre de passagers et au volume des bagages, confirmé à la réservation.",
    },
    {
      icon: CheckCircle,
      title: "Adresse précise",
      description:
        "Dépose devant votre bâtiment à Valbonne, Biot, Mougins ou sur le secteur Antibes.",
    },
    {
      icon: Shield,
      title: "Dans les deux sens",
      description:
        "Arrivée à l'aéroport puis Sophia Antipolis, ou départ de la technopole vers T1 ou T2.",
    },
  ];

  const dropOffZones = [
    {
      icon: Building2,
      title: "Bureaux et sièges d'entreprises",
      description:
        "Dépose devant votre entreprise ou le bâtiment indiqué dans la technopole.",
    },
    {
      icon: Briefcase,
      title: "Campus et écoles",
      description:
        "Prise en charge ou dépose pour étudiants, intervenants et visiteurs de campus.",
    },
    {
      icon: MapPin,
      title: "Hôtels et lieux de rendez-vous",
      description:
        "Transferts vers hôtels d'affaires, centres de séminaires ou adresse précise.",
    },
    {
      icon: Users,
      title: "Valbonne, Biot et communes voisines",
      description:
        "La technopole s'étend sur plusieurs communes : précisez votre adresse exacte.",
    },
  ];

  const taxiServiceJson = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Taxi Aéroport Nice – Sophia Antipolis",
    url: "https://taxi-nice-06.com/services/taxi-aeroport-nice-sophia-antipolis",
    telephone: "+33651683687",
    email: "taxiniceca@gmail.com",
    image: "https://taxi-nice-06.com/aéroport-nice-glc.jpeg",
    description:
      "Transfert avec chauffeur entre l'aéroport Nice Côte d'Azur et Sophia Antipolis.",
    serviceType: "Transfert aéroport Nice Sophia Antipolis",
    provider: {
      "@type": "LocalBusiness",
      name: "Taxi Nice Côte d'Azur",
      url: "https://taxi-nice-06.com",
      telephone: "+33651683687",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nice",
        addressRegion: "Provence-Alpes-Côte d'Azur",
        addressCountry: "FR",
      },
    },
    areaServed: [
      { "@type": "Airport", name: "Aéroport Nice Côte d'Azur" },
      { "@type": "Place", name: "Sophia Antipolis" },
      { "@type": "City", name: "Valbonne" },
      { "@type": "City", name: "Biot" },
      { "@type": "City", name: "Mougins" },
    ],
  };

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://taxi-nice-06.com${item.url}`,
    })),
  };

  const faqJson = {
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
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white border-b mt-20 sm:mt-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
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
                    – Sophia Antipolis
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transfert avec chauffeur entre l&apos;aéroport Nice Côte
                  d&apos;Azur et Sophia Antipolis, dans les deux sens. Idéal
                  pour un rendez-vous professionnel, une mission en entreprise
                  ou un déplacement avec bagages vers la technopole.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    Valbonne, Biot, Mougins, Antibes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    Entreprises, campus et hôtels
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    Berline ou van selon passagers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    Tarif confirmé à la réservation
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
                    Réserver mon transfert
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
                  src="/aéroport-nice-glc.jpeg"
                  alt="Taxi à l'aéroport Nice Côte d'Azur pour transfert vers Sophia Antipolis"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  priority
                  quality={85}
                />
                <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">T1 &amp; T2</div>
                    <div className="text-sm">Terminaux</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Présentation + deux sens */}
        <section className="py-16 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 space-y-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Transfert aéroport Nice ↔ Sophia Antipolis
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sophia Antipolis est la principale technopole de la Côte
                d&apos;Azur, répartie sur Valbonne, Biot, Mougins et le secteur
                d&apos;Antibes. Depuis l&apos;aéroport Nice Côte d&apos;Azur, un
                taxi avec chauffeur permet un trajet direct, sans correspondance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La durée dépend du trafic, de l&apos;horaire et du secteur
                précis de prise en charge ou de dépose. Pour le service aéroport
                général, consultez la{" "}
                <Link
                  href="/services/taxi-aeroport-nice"
                  className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-700 transition-colors"
                >
                  page taxi aéroport Nice
                </Link>
                .
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
              <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Aéroport → Sophia Antipolis
                </h3>
                <p className="mb-3">
                  À l&apos;arrivée, indiquez le terminal, le numéro de vol et
                  l&apos;adresse exacte dans la technopole. Le chauffeur vous
                  accueille à la sortie des arrivées avec un panneau à votre nom.
                </p>
                <p>
                  Dépose devant votre entreprise, campus, hôtel d&apos;affaires
                  ou adresse complète. Le suivi de vol adapte la prise en charge
                  en cas de retard.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Sophia Antipolis → Aéroport
                </h3>
                <p className="mb-3">
                  Pour un départ en avion, communiquez l&apos;adresse de prise en
                  charge, le terminal, l&apos;horaire de vol et l&apos;heure
                  souhaitée d&apos;arrivée à l&apos;aéroport.
                </p>
                <p>
                  Départ depuis un bureau, un campus ou un hôtel. Pour les
                  trajets vers Juan-les-Pins ou le littoral, voir aussi{" "}
                  <Link
                    href="/secteurs/antibes"
                    className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-700 transition-colors"
                  >
                    transfert Nice – Antibes
                  </Link>
                  .
                </p>
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
                    <item.icon className="w-5 h-5 text-white mt-1 flex-shrink-0" />
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Un transfert pensé pour la technopole
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Réservation, suivi du vol, accueil au terminal, puis trajet
                jusqu&apos;à votre adresse à Sophia Antipolis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-cyan-50 rounded-xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow duration-300"
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

        {/* Pro + véhicules */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Déplacements professionnels
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Collaborateurs en mission, visiteurs d&apos;entreprise,
                  candidats en entretien ou participants à une réunion :
                  facture disponible pour vos notes de frais.
                </p>
                <Link
                  href="/services/transferts-evenements"
                  className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-700"
                >
                  Transferts pour congrès et événements →
                </Link>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Berline ou van
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le véhicule dépend du nombre de passagers et du volume des
                  bagages. Indiquez ces informations à la réservation pour
                  obtenir la configuration adaptée.
                </p>
                <Link
                  href="/services/van-premium"
                  className="text-cyan-600 font-semibold underline underline-offset-4 hover:text-cyan-700"
                >
                  Voir le service van avec chauffeur →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Zones de dépose */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Où peut-on être déposé ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Donnez l&apos;adresse exacte ou le nom du lieu lors de la
                réservation : le chauffeur vous dépose au plus près de votre
                destination.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dropOffZones.map((zone) => (
                <div
                  key={zone.title}
                  className="bg-gradient-to-br from-white to-cyan-50 rounded-xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <zone.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {zone.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {zone.description}
                  </p>
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
                Quatre informations suffisent pour organiser votre transfert.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Phone,
                  title: "1. Date et sens",
                  text: "Arrivée aéroport → Sophia, ou départ Sophia → aéroport.",
                },
                {
                  icon: Plane,
                  title: "2. Terminal et vol",
                  text: "T1 ou T2, numéro de vol et horaire pour une arrivée ou un départ.",
                },
                {
                  icon: MapPin,
                  title: "3. Adresse précise",
                  text: "Entreprise, campus, hôtel ou adresse complète à Sophia Antipolis.",
                },
                {
                  icon: Users,
                  title: "4. Passagers",
                  text: "Nombre de personnes, bagages et besoin éventuel de van ou siège enfant.",
                },
              ].map((step) => (
                <div key={step.title} className="text-center">
                  <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-cyan-100">
                    <step.icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link
                href="/reservation"
                className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition-colors text-center no-underline"
              >
                Réserver mon transfert
              </Link>
              <a
                href="tel:+33651683687"
                className="px-8 py-4 border-2 border-cyan-600 text-cyan-600 rounded-xl font-semibold hover:bg-cyan-600 hover:text-white transition-colors text-center no-underline"
              >
                06 51 68 36 87
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50 border-t">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              FAQ – Transfert aéroport Nice Sophia Antipolis
            </h2>
            <div className="space-y-5">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="bg-white border border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />
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
              Réservez votre transfert Sophia Antipolis
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Aéroport Nice Côte d&apos;Azur ↔ Sophia Antipolis : indiquez
              votre vol, votre terminal et votre adresse exacte. Le tarif est
              confirmé avant le départ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reservation"
                className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors no-underline"
              >
                Réserver mon transfert
              </Link>
              <Link
                href="/tarifs"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-colors no-underline"
              >
                Voir les tarifs
              </Link>
            </div>
            <div className="mt-8 text-cyan-100">
              Terminal 1 &amp; Terminal 2 ·{" "}
              <a href="tel:+33651683687" className="text-white font-semibold">
                06 51 68 36 87
              </a>
            </div>
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />

      <Footer />
    </div>
  );
}
