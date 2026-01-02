// Server Component pour meilleur SEO et référencement
import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import {
  ArrowRight,
  Calendar,
  Car,
  CheckCircle,
  Clock,
  FileText,
  Heart,
  Mail,
  MapPin,
  Phone,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VSLPage() {
  const breadcrumbItems = [
    { name: "Services", url: "/services" },
    { name: "VSL", url: "/services/vsl" },
  ];

  const features = [
    {
      icon: Heart,
      title: "Transport Médicalisé",
      description: "Véhicules sanitaires agréés pour le transport médicalisé",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Shield,
      title: "Chauffeurs Formés",
      description:
        "Chauffeurs spécialement formés à la manipulation des personnes à mobilité réduite",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Accompagnement",
      description:
        "Possibilité d'être accompagné d'un proche ou d'une aide-soignante",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description: "Service disponible en urgence 24h/24 et 7j/7",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const services = [
    {
      title: "Rendez-vous Médicaux",
      description: "Transport pour consultations, examens et soins médicaux",
      icon: Stethoscope,
      features: [
        "Ponctualité garantie pour vos rendez-vous",
        "Transport sécurisé et confortable",
        "Véhicules équipés pour fauteuils roulants",
      ],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      title: "Convalescence",
      description:
        "Transport après hospitalisation ou intervention chirurgicale",
      icon: Car,
      features: [
        "Transfert sécurisé depuis l'hôpital",
        "Prise en charge à domicile",
        "Véhicules adaptés pour le confort",
      ],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      title: "Déplacements Personnels",
      description: "Transport pour vos sorties et déplacements du quotidien",
      icon: Users,
      features: [
        "Sorties loisirs et culturelles",
        "Visites familiales",
        "Courses et démarches administratives",
      ],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
    },
    {
      title: "Événements Spéciaux",
      description:
        "Transport pour mariages, cérémonies et événements familiaux",
      icon: Calendar,
      features: [
        "Transport adapté aux personnes à mobilité réduite",
        "Prise en charge de A à Z",
        "Service personnalisé et discret",
      ],
      color: "bg-pink-50 border-pink-200",
      iconColor: "text-pink-600",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Réservation",
      description: "Appelez-nous pour réserver votre transport VSL",
      icon: Phone,
    },
    {
      step: "02",
      title: "Validation",
      description: "Nous validons votre demande et préparons votre dossier",
      icon: FileText,
    },
    {
      step: "03",
      title: "Confirmation",
      description: "Vous recevez une confirmation avec les détails du trajet",
      icon: CheckCircle,
    },
    {
      step: "04",
      title: "Transport",
      description: "Notre chauffeur vous prend en charge à l'heure prévue",
      icon: Car,
    },
  ];

  const requirements = [
    "Prescription médicale si transport conventionné",
    "Carte d'identité ou pièce d'identité",
    "Renseignements médicaux si nécessaire",
    "Respect des horaires de rendez-vous",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden pb-16 sm:pb-0">
        <div className="absolute inset-0">
          <Image
            src="/classB-darguignan copie.png"
            alt="VSL Nice - Véhicule Sanitaire Léger - Transport médicalisé"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative min-h-[90vh] flex items-center py-16 sm:py-0">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-4xl">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mr-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl lg:text-8xl font-bold text-white mb-2">
                    Taxi Conventionné Nice
                    <span className="block text-pink-300 text-2xl lg:text-3xl font-light mt-2">
                      VSL & Transport Médical CPAM
                    </span>
                  </h1>
                </div>
              </div>

              <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full mb-8"></div>

              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-10 max-w-3xl">
                Notre service de <strong>taxi conventionné à Nice</strong> (VSL)
                assure vos transports médicaux remboursés par la CPAM vers les
                hôpitaux, cliniques et centres de soins. Véhicules sanitaires
                agréés, chauffeurs formés et accompagnement personnalisé pour
                tous vos rendez-vous médicaux, en toute sécurité.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-8 sm:mb-0">
                <a
                  href="tel:0651683687"
                  className="px-10 py-5 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Réserver un VSL
                </a>
                <a
                  href="#services"
                  className="px-10 py-5 border-2 border-white text-white rounded-2xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
                >
                  En savoir plus
                  <ArrowRight className="w-6 h-6 ml-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Nos Garanties
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Un service de transport médicalisé de qualité, adapté à vos
              besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border border-gray-100"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Taxi Conventionné CPAM Section */}
      <section className="py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-pink-100">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Taxi conventionné CPAM à Nice
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Notre <strong>taxi conventionné CPAM à Nice</strong> est agréé
              pour le transport médical prescrit par votre médecin. Selon votre
              situation, vos trajets peuvent être pris en charge partiellement
              ou totalement par l'Assurance Maladie.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Stethoscope className="w-6 h-6 text-pink-600" />
                  Transports médicaux pris en charge
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Consultations et examens médicaux
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Hospitalisations et sorties d'hôpital
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Traitements réguliers (dialyse, radiothérapie,
                      chimiothérapie)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Soins de rééducation et suivi médical
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-pink-600" />
                  Établissements desservis à Nice
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">CHU Pasteur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Hôpital de l'Archet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Fondation Lenval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Cliniques et centres médicaux de Nice et alentours
                    </span>
                  </li>
                </ul>
                <Link
                  href="/blog/centres-medicaux-specialistes-nice-2025"
                  className="mt-4 inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors duration-300 text-sm"
                >
                  Découvrir tous les établissements médicaux de Nice
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            <div className="bg-pink-50 rounded-2xl p-6 border border-pink-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Conditions de prise en charge
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Prescription médicale obligatoire</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Carte Vitale à jour</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Accord préalable si nécessaire</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mt-8">
              Notre équipe vous accompagne à chaque étape pour un transport
              médical serein, ponctuel et conforme aux exigences CPAM.
            </p>
          </div>
        </div>
      </section>

      {/* Guide Complet Taxi Conventionné Nice */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Guide Complet : Taxi Conventionné à Nice
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tout ce que vous devez savoir sur le transport médical
              conventionné CPAM à Nice et dans les Alpes-Maritimes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Colonne 1 */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-pink-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-pink-600 flex-shrink-0" />
                  <span>Qu'est-ce qu'un taxi conventionné à Nice ?</span>
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                  Un <strong>taxi conventionné à Nice</strong> est un véhicule
                  de transport médical agréé par la CPAM (Caisse Primaire
                  d'Assurance Maladie) pour effectuer des trajets médicaux
                  prescrits par un médecin. Contrairement à un taxi classique,
                  ce service spécialisé répond à des critères stricts d'agrément
                  et de formation des chauffeurs.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  À Nice, notre service de <strong>taxi conventionné</strong>{" "}
                  est reconnu par l'Assurance Maladie des Alpes-Maritimes et
                  permet aux patients de bénéficier d'une prise en charge
                  partielle ou totale de leurs frais de transport médical selon
                  leur situation et leur prescription.
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 md:p-8 border border-blue-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 flex-shrink-0" />
                  <span>Comment fonctionne le remboursement CPAM ?</span>
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                      1. Prescription médicale
                    </h4>
                    <p className="text-gray-700 text-xs sm:text-sm">
                      Votre médecin doit prescrire le transport médical sur
                      ordonnance. Cette prescription est obligatoire pour
                      bénéficier de la prise en charge CPAM.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                      2. Tiers payant
                    </h4>
                    <p className="text-gray-700 text-xs sm:text-sm">
                      Avec notre service de{" "}
                      <strong>taxi conventionné à Nice</strong>, vous pouvez
                      bénéficier du tiers payant : la CPAM paie directement le
                      transporteur, vous n'avancez que votre part restante
                      (ticket modérateur).
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                      3. Montant remboursé
                    </h4>
                    <p className="text-gray-700 text-xs sm:text-sm">
                      Le remboursement varie selon votre situation : 100% pour
                      les ALD (Affections Longue Durée), 65% pour les autres
                      cas, avec possibilité de complément par votre mutuelle.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne 2 */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-green-50 rounded-2xl p-6 md:p-8 border border-green-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-green-600 flex-shrink-0" />
                  <span>
                    Zones desservies par notre taxi conventionné à Nice
                  </span>
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                  Notre service de <strong>taxi conventionné Nice</strong>{" "}
                  couvre l'ensemble de la métropole niçoise et les communes
                  environnantes :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {[
                    "Nice Centre",
                    "Nice Nord",
                    "Nice Est",
                    "Nice Ouest",
                    "Cimiez",
                    "Promenade des Anglais",
                    "Vieux Nice",
                    "Mont Boron",
                    "Cagnes-sur-Mer",
                    "Villeneuve-Loubet",
                    "Saint-Laurent-du-Var",
                    "Antibes",
                  ].map((zone, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-white rounded-lg p-2 border border-green-200"
                    >
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700">
                        {zone}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6 md:p-8 border border-purple-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600 flex-shrink-0" />
                  <span>Avantages d'un taxi conventionné à Nice</span>
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Prise en charge CPAM automatique avec tiers payant",
                    "Chauffeurs formés aux gestes médicaux et à l'accueil des personnes à mobilité réduite",
                    "Véhicules agréés et conformes aux normes sanitaires",
                    "Disponibilité 24h/24 et 7j/7 pour les urgences médicales",
                    "Ponctualité garantie pour vos rendez-vous médicaux",
                    "Accompagnement personnalisé et sécurisé",
                  ].map((avantage, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">
                        {avantage}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section Tarifs Conventionnés */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-10 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Tarifs Taxi Conventionné à Nice
            </h3>

            {/* Message principal sur le tiers payant */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6 border-2 border-white/30">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-white flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-2xl font-bold mb-2">
                    Avec une prescription médicale : rien à avancer
                  </h4>
                  <p className="text-white/95 text-lg leading-relaxed">
                    Grâce au <strong>tiers payant CPAM</strong>, vous n'avancez
                    aucun frais lors de votre transport médical. La CPAM paie
                    directement notre service de{" "}
                    <strong>taxi conventionné à Nice</strong>. Vous ne payez que
                    votre part restante (ticket modérateur) uniquement si elle
                    existe, et souvent votre mutuelle la prend en charge.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="font-bold text-xl mb-3">Forfait de base CPAM</h4>
                <p className="text-3xl font-bold mb-2">13€</p>
                <p className="text-white/90 text-sm">
                  Forfait kilométrique selon barème CPAM officiel en vigueur
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="font-bold text-xl mb-3">Tiers payant inclus</h4>
                <p className="text-2xl font-bold mb-2 text-green-200">
                  0€ à avancer
                </p>
                <p className="text-white/90 text-sm">
                  Avec prescription médicale valide, la CPAM paie directement.
                  Vous n'avancez rien.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="font-bold text-xl mb-3">Complément mutuelle</h4>
                <p className="text-lg mb-2">Selon votre contrat</p>
                <p className="text-white/90 text-sm">
                  Votre mutuelle peut compléter le remboursement CPAM, réduisant
                  encore votre reste à charge
                </p>
              </div>
            </div>
            <p className="text-center mt-6 text-white/90 text-lg">
              Les tarifs de notre <strong>taxi conventionné à Nice</strong>{" "}
              respectent le barème CPAM officiel. Avec une prescription médicale
              et le tiers payant, <strong>vous n'avez rien à avancer</strong> -
              la CPAM règle directement le transport.
            </p>
          </div>
        </div>
      </section>

      {/* Section Comparaison et Informations Pratiques */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
              Taxi Conventionné Nice : Questions Fréquentes
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-pink-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Quelle est la différence entre un taxi conventionné et un taxi
                  classique à Nice ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Un <strong>taxi conventionné à Nice</strong> est spécialement
                  agréé pour les transports médicaux et peut être remboursé par
                  la CPAM. Les chauffeurs sont formés aux gestes médicaux et à
                  l'accueil des personnes à mobilité réduite. Un taxi classique
                  ne bénéficie pas de cette convention et ne peut pas être
                  remboursé par l'Assurance Maladie.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Combien de temps à l'avance faut-il réserver un taxi
                  conventionné à Nice ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pour un <strong>taxi conventionné Nice</strong>, nous
                  recommandons de réserver au moins 24 à 48 heures à l'avance,
                  surtout pour les rendez-vous programmés. Cependant, nous
                  acceptons également les réservations en urgence pour les cas
                  médicaux nécessitant un transport immédiat.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Quels établissements de santé desservez-vous avec votre taxi
                  conventionné à Nice ?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Notre <strong>taxi conventionné Nice</strong> dessert tous les
                  établissements de santé de la métropole niçoise et des
                  Alpes-Maritimes :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>CHU Pasteur (Nice)</li>
                  <li>Hôpital de l'Archet (Nice)</li>
                  <li>Fondation Lenval (Nice)</li>
                  <li>Cliniques privées de Nice et alentours</li>
                  <li>Centres de dialyse et de radiothérapie</li>
                  <li>Centres de rééducation et de soins de suite</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Le taxi conventionné à Nice est-il disponible pour les
                  personnes en fauteuil roulant ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oui, notre service de <strong>taxi conventionné Nice</strong>{" "}
                  dispose de véhicules adaptés (VSL - Véhicule Sanitaire Léger)
                  équipés pour accueillir les fauteuils roulants. Nos chauffeurs
                  sont formés à la manipulation sécurisée des personnes à
                  mobilité réduite. Précisez ce besoin lors de votre
                  réservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Nos Services
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transport médicalisé adapté à tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${service.color} rounded-3xl p-6 md:p-8 border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 ${service.color.replace(
                      "50",
                      "100"
                    )} rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0`}
                  >
                    <service.icon
                      className={`w-7 h-7 sm:w-8 sm:h-8 ${service.iconColor}`}
                    />
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center sm:text-left">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base text-center sm:text-left">
                      {service.description}
                    </p>
                    <ul className="space-y-2 sm:space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start sm:items-center gap-2 sm:gap-3"
                        >
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 flex-shrink-0 mt-0.5 sm:mt-0" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Comment ça fonctionne ?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Un processus simple en 4 étapes pour vos transports médicaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto text-white text-3xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    {step.step}
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 text-pink-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Guides & Informations
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez nos guides complets sur le transport médical à Nice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Transport Médical à Nice
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Guide complet sur les trajets médicaux à Nice : VSL, taxi
                    conventionné CPAM, prise en charge, accompagnement sécurisé.
                    Trajets vers CHU, cliniques et centres spécialisés.
                  </p>
                  <Link
                    href="/blog/transport-medical-nice"
                    className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors duration-300"
                  >
                    Lire l'article complet
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Nouvelle Convention 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Nouvelle convention transports médicaux 2025 : forfait 13€,
                    tarification kilométrique, impact patients. Guide complet
                    pour comprendre les changements et bien préparer vos trajets
                    médicaux.
                  </p>
                  <Link
                    href="/blog/nouvelle-convention-transports-medicaux-2025"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                  >
                    Lire l'article complet
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-8 h-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Centres Médicaux Nice 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Guide complet des centres médicaux et spécialistes à Nice :
                    hôpitaux, cliniques privées, maisons de santé, spécialités
                    médicales et accès transport pour vos soins.
                  </p>
                  <Link
                    href="/blog/centres-medicaux-specialistes-nice-2025"
                    className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-300"
                  >
                    Lire l'article complet
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-6 md:p-12 shadow-2xl">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Documents Requis
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Les documents nécessaires pour bénéficier du transport VSL
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {requirements.map((requirement, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1 mx-auto sm:mx-0">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
                  </div>
                  <span className="text-gray-700 text-base sm:text-lg leading-relaxed text-center sm:text-left w-full">
                    {requirement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Lien vers Taxi Nice Général - Évite la cannibalisation */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Vous recherchez un <strong>taxi à Nice</strong> pour d'autres
            besoins ?
          </p>
          <p className="text-base text-gray-500 mb-6">
            Notre service de{" "}
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2"
            >
              taxi Nice 24/7
            </Link>{" "}
            propose également des transferts aéroport, trajets vers Monaco,
            Cannes, Antibes, et tous vos déplacements sur la Côte d'Azur.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors duration-300"
          >
            Découvrir tous nos services de taxi à Nice
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Besoin d'un Transport VSL ?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Contactez-nous pour réserver votre transport médicalisé
          </p>
          <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Nous proposons aussi un service complet de{" "}
            <Link
              href="/"
              className="text-white font-semibold underline underline-offset-4 hover:text-pink-200 transition-colors"
            >
              taxi Nice 24/7
            </Link>{" "}
            pour tous vos déplacements sur la Côte d'Azur : transferts aéroport,
            gare, centre-ville et longues distances.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:0651683687"
              className="px-12 py-6 bg-white text-pink-600 rounded-2xl font-bold text-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-6 h-6 mr-3" />
              Appeler maintenant
            </a>
            <a
              href="mailto:taxiniceca@gmail.com"
              className="px-12 py-6 border-2 border-white text-white rounded-2xl font-bold text-xl hover:bg-white hover:text-pink-600 transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-6 h-6 mr-3" />
              Demander un devis
            </a>
          </div>

          <div className="mt-12 text-white/80 text-lg">
            📞 <strong>06 51 68 36 87</strong> | ✉️ taxiniceca@gmail.com
          </div>
        </div>
      </section>

      {/* JSON-LD TaxiService pour Taxi Conventionné CPAM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Taxi Conventionné Nice - VSL (CPAM)",
            url: "https://taxi-nice-06.com/services/vsl",
            telephone: "+33651683687",
            email: "taxiniceca@gmail.com",
            areaServed: [
              { "@type": "City", name: "Nice" },
              { "@type": "AdministrativeArea", name: "Alpes-Maritimes" },
            ],
            serviceType: [
              "Taxi conventionné CPAM",
              "Transport médical",
              "VSL",
              "Transport de patients",
            ],
            availableChannel: {
              "@type": "ServiceChannel",
              servicePhone: {
                "@type": "ContactPoint",
                telephone: "+33651683687",
              },
              availableLanguage: ["fr"],
            },
            provider: {
              "@type": "LocalBusiness",
              name: "Taxi Nice 06",
              url: "https://taxi-nice-06.com",
              telephone: "+33651683687",
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
            },
            sameAs: ["https://maps.app.goo.gl/UzPCMHMeFYZaeZNH8"],
          }),
        }}
      />

      {/* JSON-LD FAQPage pour CPAM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Qu'est-ce qu'un taxi conventionné CPAM à Nice ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un taxi conventionné CPAM est un transport agréé pour les déplacements médicaux prescrits. Selon votre situation, la CPAM peut prendre en charge tout ou partie du trajet.",
                },
              },
              {
                "@type": "Question",
                name: "Quels documents faut-il pour un transport médical pris en charge ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En général : prescription médicale, carte Vitale à jour et, si nécessaire, accord préalable.",
                },
              },
              {
                "@type": "Question",
                name: "Faites-vous les trajets vers les hôpitaux et cliniques de Nice ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, nous assurons les transports médicaux vers les établissements de Nice (CHU Pasteur, Hôpital de l'Archet, Fondation Lenval, cliniques) et les communes alentours.",
                },
              },
              {
                "@type": "Question",
                name: "Comment réserver un taxi conventionné à Nice ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vous pouvez réserver par téléphone 24/7 au 06 51 68 36 87. Nous confirmons le trajet et préparons votre prise en charge.",
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
