import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import {
  Car,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Shield,
  Star,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function TaxiNicePage() {
  const breadcrumbItems = [
    { name: "Accueil", url: "/" },
    { name: "Taxi Nice", url: "/taxi-nice" },
  ];

  const serviceFeatures = [
    {
      icon: Clock,
      title: "Service 24/7",
      description:
        "Disponible jour et nuit, 7j/7 pour tous vos déplacements à Nice",
    },
    {
      icon: Car,
      title: "Véhicules Premium",
      description: "Flotte de Mercedes récente : Classe E, GLC et Van Premium",
    },
    {
      icon: MapPin,
      title: "Toute la Côte d'Azur",
      description:
        "Nice, Monaco, Cannes, Antibes, Menton et toutes destinations",
    },
    {
      icon: Shield,
      title: "Chauffeurs Agréés",
      description: "Chauffeurs professionnels agréés VTC et Taxi, expérimentés",
    },
    {
      icon: Wifi,
      title: "Confort Optimal",
      description: "WiFi gratuit, climatisation, eau minérale offerte",
    },
    {
      icon: Star,
      title: "Service Premium",
      description: "Ponctualité garantie, tarifs fixes, facture fournie",
    },
  ];

  const destinations = [
    {
      name: "Taxi Nice Aéroport",
      description:
        "Transfert vers et depuis l'aéroport Nice Côte d'Azur (T1/T2)",
      link: "/services/taxi-aeroport-nice",
    },
    {
      name: "Taxi Nice Gare",
      description:
        "Transport depuis la gare de Nice-Ville vers toute destination",
      link: "/secteurs/nice-gare",
    },
    {
      name: "Taxi Nice Centre-Ville",
      description: "Déplacements dans Nice centre et Promenade des Anglais",
      link: "/secteurs/nice-centre-ville",
    },
    {
      name: "Taxi Nice pour Monaco",
      description: "Transfert Nice-Monaco avec chauffeur professionnel",
      link: "/secteurs/monaco",
    },
    {
      name: "Taxi Nice pour Cannes",
      description: "Transport Nice-Cannes pour Festival, affaires ou tourisme",
      link: "/secteurs/cannes",
    },
    {
      name: "Taxi Nice pour Antibes",
      description: "Déplacement vers Antibes et Juan-les-Pins",
      link: "/secteurs/antibes",
    },
  ];

  const whyChooseUs = [
    {
      title: "Réservation Taxi Nice en Ligne",
      description:
        "Réservez votre taxi Nice en quelques clics via notre formulaire en ligne sécurisé. Confirmation immédiate par SMS avec coordonnées de votre chauffeur.",
    },
    {
      title: "Taxi Nice Pas Cher",
      description:
        "Tarifs transparents et compétitifs, prix fixes connus à l'avance. Pas de surprise, pas de supplément caché. Consultez nos tarifs détaillés.",
    },
    {
      title: "Taxi Nice avec Mercedes",
      description:
        "Véhicules haut de gamme : Mercedes Classe E pour voyage d'affaires, Mercedes GLC pour confort SUV, Mercedes Van Premium pour groupes et familles.",
    },
    {
      title: "Taxi Nice pour Familles",
      description:
        "Sièges enfant et rehausseurs disponibles gratuitement sur demande. Espace bagages généreux pour poussettes et valises.",
    },
    {
      title: "Taxi Nice de Nuit",
      description:
        "Service disponible 24/7, y compris la nuit. Idéal pour vols tardifs, sorties nocturnes ou urgences.",
    },
    {
      title: "Chauffeur Taxi Nice CPAM",
      description:
        "Transport conventionné pour rendez-vous médicaux, CPAM, hôpitaux. Facture fournie pour remboursement.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b mt-20 sm:mt-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Effets décoratifs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
                <Star className="w-4 h-4 fill-white" />
                <span>Service Premium depuis 2008</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Taxi Nice 24/7
                <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent text-4xl lg:text-5xl mt-3">
                  Chauffeur Taxi à Nice & Côte d'Azur
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
                Service de{" "}
                <strong className="text-cyan-600">
                  taxi Nice professionnel
                </strong>{" "}
                disponible 24h/24 et 7j/7.
                <strong className="text-blue-600">
                  {" "}
                  Réservation taxi Nice en ligne
                </strong>{" "}
                en quelques clics. Chauffeurs expérimentés, véhicules Mercedes
                premium, tarifs fixes et transparents.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 text-gray-700 mb-8">
                <li className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">
                    Taxi Nice 24/7 disponible jour et nuit
                  </span>
                </li>
                <li className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">
                    Taxi gare de Nice, aéroport, centre-ville
                  </span>
                </li>
                <li className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">
                    Taxi Nice avec Mercedes premium
                  </span>
                </li>
                <li className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">
                    Taxi Nice pas cher, tarifs fixes
                  </span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/reservation"
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center no-underline relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Réserver Taxi Nice
                    <Car className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="/tarifs"
                  className="px-8 py-4 bg-white border-2 border-cyan-600 text-cyan-600 rounded-xl font-bold text-lg shadow-lg hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 text-center no-underline"
                >
                  Voir les Tarifs
                </a>
              </div>
              <div className="mt-8 flex items-center gap-8 text-gray-700">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-5 py-3 shadow-md">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Appelez-nous</div>
                    <span className="font-bold text-lg text-gray-900">
                      06 51 68 36 87
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-5 py-3 shadow-md">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Disponibilité</div>
                    <span className="font-bold text-lg text-gray-900">
                      24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/negresco.jpeg"
                  alt="Taxi Nice 24/7 - Service de taxi professionnel à Nice"
                  width={600}
                  height={400}
                  className="rounded-3xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-600 to-blue-600 text-white p-6 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-4xl font-black mb-1">24/7</div>
                  <div className="text-sm font-semibold opacity-90">
                    Service Taxi Nice
                  </div>
                </div>
              </div>
              {/* Badge flottant */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl border-2 border-cyan-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Note moyenne</div>
                    <div className="text-xl font-bold text-gray-900">5/5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section SEO Principale */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Taxi Nice : Votre Service de Transport Professionnel à Nice et
              Côte d'Azur
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="leading-relaxed">
                <strong>Taxi Nice 24/7</strong> est votre service de transport
                professionnel de référence à Nice et sur toute la Côte d'Azur.
                Que vous ayez besoin d'un <strong>taxi gare de Nice</strong>,
                d'un <strong>taxi Nice aéroport</strong>, d'un{" "}
                <strong>taxi Nice centre-ville</strong> ou d'un{" "}
                <strong>taxi Nice promenade des Anglais</strong>, nos chauffeurs
                expérimentés vous garantissent un service premium avec
                ponctualité et professionnalisme.
              </p>

              <p className="leading-relaxed">
                Notre service de <strong>taxi Nice pas cher</strong> propose des
                tarifs fixes et transparents, connus à l'avance. Plus de
                surprise, plus de supplément caché. Que vous réserviez un{" "}
                <strong>taxi Nice pour Monaco</strong>, un{" "}
                <strong>taxi Nice pour Cannes</strong> ou un{" "}
                <strong>taxi Nice pour Antibes</strong>, vous connaissez le prix
                exact avant même de monter dans le véhicule.
              </p>

              <p className="leading-relaxed">
                La <strong>réservation taxi Nice en ligne</strong> est simple et
                rapide : remplissez notre formulaire en quelques clics, recevez
                une confirmation immédiate par SMS avec les coordonnées de votre
                chauffeur. Idéal pour planifier vos déplacements à l'avance,
                surtout pour un <strong>taxi Nice aéroport</strong> ou un{" "}
                <strong>taxi Nice de nuit</strong>.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Taxi Nice avec Mercedes : Véhicules Premium pour Tous Vos
                Déplacements
              </h3>

              <p className="leading-relaxed">
                Notre flotte de <strong>taxi Nice avec Mercedes</strong>{" "}
                comprend des véhicules haut de gamme parfaitement entretenus. Le{" "}
                <strong>taxi Nice GLC</strong> offre un confort SUV premium
                idéal pour les familles ou les déplacements avec bagages. Nos{" "}
                <strong>taxi Nice premium</strong> Mercedes Classe E sont
                parfaits pour les voyages d'affaires, avec WiFi gratuit et
                espace confortable.
              </p>

              <p className="leading-relaxed">
                Pour les groupes ou les <strong>taxi Nice pour familles</strong>
                , notre Mercedes Van Premium peut accueillir jusqu'à 7 passagers
                avec bagages. Tous nos véhicules sont équipés de{" "}
                <strong>taxi Nice avec siège enfant</strong> disponibles
                gratuitement sur demande. Parfait pour un{" "}
                <strong>taxi Nice pour longues distances</strong> vers Monaco,
                Cannes ou Saint-Tropez.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Taxi Nice : Services Spécialisés pour Tous Vos Besoins
              </h3>

              <p className="leading-relaxed">
                Notre service de <strong>taxi Nice 24/7</strong> couvre tous vos
                besoins de transport. Besoin d'un{" "}
                <strong>chauffeur taxi Nice CPAM</strong> pour vos rendez-vous
                médicaux ? Nous proposons un service conventionné avec facture
                pour remboursement. Le <strong>taxi Nice de nuit</strong> est
                disponible pour vos vols tardifs ou sorties nocturnes.
              </p>

              <p className="leading-relaxed">
                Le <strong>taxi Nice centre-ville</strong> vous emmène partout
                dans Nice : Vieux Nice, Promenade des Anglais, Port de Nice,
                quartiers résidentiels. Le{" "}
                <strong>taxi Nice promenade des Anglais</strong> est idéal pour
                vos déplacements le long de la baie des Anges. Le{" "}
                <strong>taxi gare de Nice</strong> vous connecte rapidement à
                toute la Côte d'Azur.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Pourquoi Choisir Notre Taxi Nice ?
              </h3>

              <p className="leading-relaxed">
                Choisir notre <strong>taxi Nice</strong>, c'est opter pour un
                service professionnel qui existe depuis plus de 10 ans. Nos
                chauffeurs sont agréés VTC et Taxi, connaissent parfaitement
                Nice et la Côte d'Azur, et maîtrisent tous les itinéraires pour
                vous faire gagner du temps même en cas de trafic dense.
                Découvrez{" "}
                <Link
                  href="/secteurs/nice"
                  className="text-cyan-600 hover:text-cyan-700 underline font-medium"
                >
                  notre page dédiée à Nice
                </Link>{" "}
                pour plus de détails sur nos services locaux.
              </p>

              <p className="leading-relaxed">
                La <strong>réservation taxi Nice en ligne</strong> vous fait
                gagner du temps et vous garantit votre véhicule. Nos tarifs de{" "}
                <strong>taxi Nice pas cher</strong> sont transparents et
                compétitifs. Nos <strong>taxi Nice avec Mercedes</strong> vous
                offrent confort et élégance pour tous vos déplacements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full text-cyan-700 font-semibold text-sm mb-4">
              <Star className="w-4 h-4 fill-cyan-600" />
              <span>Nos Avantages</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Pourquoi Choisir Notre{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Taxi Nice
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un service professionnel de taxi Nice qui répond à tous vos
              besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-cyan-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-gradient-to-b from-white via-cyan-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm mb-4">
              <MapPin className="w-4 h-4" />
              <span>Nos Destinations</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Nos Services{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Taxi Nice
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Taxi Nice pour toutes vos destinations sur la Côte d'Azur
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {destination.description}
                  </p>
                  <a
                    href={destination.link}
                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors duration-300 group-hover:gap-3"
                  >
                    En savoir plus
                    <span className="text-xl group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Taxi Nice : Tous Nos Services en Détail
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 overflow-hidden">
        {/* Effets décoratifs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-6">
            <Star className="w-4 h-4 fill-white" />
            <span>Réservation Rapide</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Réservez Votre{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Taxi Nice
            </span>{" "}
            Maintenant
          </h2>
          <p className="text-xl text-cyan-100 mb-10">
            Service disponible 24/7. Réservation en ligne rapide et sécurisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/reservation"
              className="group px-10 py-5 bg-white text-cyan-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 no-underline relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Réserver Taxi Nice
                <Car className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="/contact"
              className="px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-cyan-600 hover:scale-105 transition-all duration-300 no-underline shadow-lg"
            >
              Nous Contacter
            </a>
          </div>
          <div className="text-cyan-100 space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold text-lg">06 51 68 36 87</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Disponible 24h/24 et 7j/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Schema JSON-LD */}
      <Script
        id="taxi-nice-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Taxi Nice 24/7",
            alternateName: "Taxi Nice-06",
            url: "https://taxi-nice-06.com/taxi-nice",
            telephone: "+33651683687",
            email: "taxiniceca@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nice",
              addressRegion: "Provence-Alpes-Côte d'Azur",
              postalCode: "06000",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "43.7102",
              longitude: "7.2620",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Nice",
              },
              {
                "@type": "City",
                name: "Monaco",
              },
              {
                "@type": "City",
                name: "Cannes",
              },
              {
                "@type": "City",
                name: "Antibes",
              },
            ],
            priceRange: "€€",
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
              "Taxi Nice 24/7",
              "Taxi gare de Nice",
              "Taxi Nice aéroport",
              "Taxi Nice centre-ville",
              "Taxi Nice promenade des Anglais",
              "Réservation taxi Nice en ligne",
              "Chauffeur taxi Nice CPAM",
              "Taxi Nice pour longues distances",
              "Taxi Nice de nuit",
              "Taxi Nice pour Monaco",
              "Taxi Nice pour Cannes",
              "Taxi Nice pour Antibes",
              "Taxi Nice avec Mercedes",
              "Taxi Nice premium",
              "Taxi Nice GLC",
              "Taxi Nice pour familles",
              "Taxi Nice avec siège enfant",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "127",
            },
          }),
        }}
      />

      <Footer />
    </div>
  );
}
