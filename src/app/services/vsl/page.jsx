import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  Heart,
  MapPin,
  Phone,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PHONE_DISPLAY = "06 51 68 36 87";
const PHONE_HREF = "tel:0651683687";
const AMELI_TRANSPORT_URL =
  "https://www.ameli.fr/assure/remboursements/rembourse/frais-transport";

const faqItems = [
  {
    question: "Quelle différence entre un VSL et un taxi conventionné ?",
    answer:
      "Le VSL (véhicule sanitaire léger) est un transport sanitaire assis, souvent organisé par des entreprises de transport sanitaire. Le taxi conventionné CPAM est un taxi agréé pour le transport médical assis (transport assis professionnalisé), avec une organisation plus flexible. Si vous recherchez un « VSL à Nice », votre prescription médicale de transport indique le type de transport adapté à votre situation.",
  },
  {
    question: "Comment réserver un taxi conventionné à Nice ?",
    answer:
      "Appelez-nous au 06 51 68 36 87 ou contactez-nous via notre page contact. Indiquez qu'il s'agit d'un transport conventionné, votre adresse de départ, l'établissement de santé et l'horaire du rendez-vous. Pour les soins réguliers, précisez la fréquence souhaitée.",
  },
  {
    question: "Quels documents faut-il prévoir ?",
    answer:
      "En général : une prescription médicale de transport (PMT) si vous souhaitez une prise en charge CPAM, votre carte Vitale à jour, votre attestation de droits et, le cas échéant, les informations de votre mutuelle complémentaire. Nous vous indiquons les pièces utiles lors de la réservation.",
  },
  {
    question: "Une prescription médicale est-elle nécessaire ?",
    answer:
      "Pour un trajet conventionné avec demande de prise en charge par l'Assurance Maladie, une prescription médicale de transport est en principe requise. Sans prescription, le trajet peut être réalisé en course classique, aux tarifs habituels du taxi.",
  },
  {
    question: "Peut-on réserver pour des soins réguliers ?",
    answer:
      "Oui, nous assurons des trajets récurrents (dialyse, radiothérapie, rééducation, etc.). Réservez à l'avance pour garantir la disponibilité aux horaires de vos séances. La prise en charge CPAM, le cas échéant, dépend de votre prescription et de votre situation.",
  },
  {
    question: "Quels établissements de santé desservez-vous ?",
    answer:
      "Nous assurons les trajets vers les principaux établissements de Nice et de la métropole : CHU Pasteur 2, Centre Antoine Lacassagne, Hôpital de l'Archet, Fondation Lenval, ainsi que les cliniques et centres de soins de la région.",
  },
  {
    question: "Comment fonctionne la prise en charge CPAM ?",
    answer:
      "La prise en charge dépend de votre situation et des conditions prévues par l'Assurance Maladie (motif du trajet, prescription, exonération éventuelle, etc.). Le tiers payant peut s'appliquer lorsque les conditions sont réunies. Pour les règles officielles, consultez le site de l'Assurance Maladie.",
  },
  {
    question: "Peut-on transporter un fauteuil roulant pliant ?",
    answer:
      "Sur demande préalable, nos véhicules peuvent accueillir un fauteuil roulant pliant dans le coffre. Un Van PMR peut être proposé selon disponibilité — précisez vos besoins lors de la réservation. Nous ne proposons pas de transport sanitaire type VSL avec fauteuil à bord.",
  },
];

const medicalTripExamples = [
  "Consultations et examens médicaux",
  "Hospitalisations et entrées en établissement",
  "Sorties d'hospitalisation",
  "Dialyse et soins réguliers",
  "Chimiothérapie et radiothérapie",
  "Rééducation et suivi médical",
];

const coverageZones = [
  "Nice centre et tous quartiers",
  "Cimiez, Saint-Augustin, Riquier",
  "Saint-Laurent-du-Var",
  "Cagnes-sur-Mer",
  "Villeneuve-Loubet",
];

const whyChooseUs = [
  {
    title: "Taxi conventionné CPAM",
    description:
      "Transport médical assis agréé pour vos déplacements prescrits vers les établissements de santé.",
  },
  {
    title: "Connaissance du terrain",
    description:
      "Chauffeurs habitués aux accès des hôpitaux et cliniques niçoises (Pasteur 2, Lacassagne, Archet…).",
  },
  {
    title: "Accompagnement attentif",
    description:
      "Prise en charge soignée des personnes fragiles, avec aide à la marche si besoin.",
  },
  {
    title: "Disponibilité 24h/24",
    description:
      "Service joignable à toute heure pour vos rendez-vous médicaux, y compris tôt le matin.",
  },
];

export default function VSLPage() {
  const breadcrumbItems = [
    { name: "Services", url: "/services" },
    { name: "Taxi conventionné", url: "/services/vsl" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/classB-darguignan copie.png"
            alt="Taxi conventionné à Nice pour transport médical"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/55" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-pink-300 font-semibold text-sm sm:text-base mb-3 tracking-wide uppercase">
              Transport médical · Nice & métropole
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Taxi conventionné à Nice pour vos déplacements médicaux
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8">
              Taxi Nice 06 propose un service de{" "}
              <strong>taxi conventionné CPAM</strong> pour vos rendez-vous
              médicaux à Nice et dans les Alpes-Maritimes : transport médical
              assis, ponctualité et accompagnement adapté. La prise en charge
              par l&apos;Assurance Maladie dépend de votre situation et de votre
              prescription.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-bold text-base sm:text-lg transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                Appeler pour un transport médical
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Nous contacter
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <p className="text-white/80 text-sm sm:text-base">
              📞{" "}
              <a href={PHONE_HREF} className="font-bold text-white hover:underline">
                {PHONE_DISPLAY}
              </a>{" "}
              · Disponible 24h/24 et 7j/7
            </p>
          </div>
        </div>
      </section>

      {/* Quel transport proposons-nous ? */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Quel transport proposons-nous ?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nous proposons un <strong>taxi conventionné à Nice</strong>, agréé
            pour le <strong>transport médical assis</strong> (transport assis
            professionnalisé) vers les hôpitaux, cliniques et centres de soins.
            Il s&apos;agit d&apos;un service de taxi adapté aux déplacements
            médicaux, et non d&apos;une ambulance ni d&apos;un transport avec
            soins à bord.
          </p>

          <div className="bg-pink-50 border border-pink-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-pink-600 flex-shrink-0" />
              VSL ou taxi conventionné : quelle différence ?
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Beaucoup de patients recherchent un «{" "}
              <strong>VSL à Nice</strong> » alors qu&apos;ils ont besoin d&apos;un
              transport médical assis. Le <strong>VSL</strong> (véhicule
              sanitaire léger) relève du transport sanitaire ; le{" "}
              <strong>taxi conventionné CPAM</strong> est un taxi agréé pour
              certains trajets médicaux prescrits. Ce sont deux dispositifs
              distincts : c&apos;est votre{" "}
              <strong>prescription médicale de transport</strong> qui indique le
              mode de transport adapté. Taxi Nice 06 intervient en{" "}
              <strong>taxi conventionné</strong>, pas en VSL.
            </p>
          </div>
        </div>
      </section>

      {/* Pour quels trajets médicaux ? */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Pour quels trajets médicaux ?
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Exemples de déplacements que nous assurons régulièrement. Chaque
            trajet ne donne pas automatiquement droit à une prise en charge
            CPAM — cela dépend de votre prescription et de votre situation.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {medicalTripExamples.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 bg-white rounded-xl p-4 border border-gray-100"
              >
                <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Comment réserver ? */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Comment réserver ?
          </h2>
          <ol className="space-y-6">
            {[
              {
                step: "1",
                title: "Contactez Taxi Nice 06",
                text: "Par téléphone au 06 51 68 36 87 (recommandé) ou via notre page contact. Pour les soins réguliers, indiquez la fréquence souhaitée.",
              },
              {
                step: "2",
                title: "Précisez votre trajet",
                text: "Adresse de prise en charge, établissement de santé, date et heure du rendez-vous. Mentionnez qu'il s'agit d'un transport conventionné si vous souhaitez une prise en charge CPAM.",
              },
              {
                step: "3",
                title: "Préparez vos documents",
                text: "Ayez à disposition votre prescription médicale de transport, votre carte Vitale et, le cas échéant, les informations de votre mutuelle.",
              },
              {
                step: "4",
                title: "Confirmation",
                text: "Nous confirmons votre réservation et les détails du trajet. Pour un aller-retour, précisez-le lors de la réservation.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-pink-500 text-pink-600 rounded-xl font-semibold hover:bg-pink-50 transition-colors"
            >
              Réserver en ligne
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Documents et prise en charge CPAM */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Documents et prise en charge CPAM
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            La prise en charge dépend de votre situation et des conditions
            prévues par l&apos;Assurance Maladie. Le tiers payant peut
            s&apos;appliquer lorsque les conditions de prise en charge sont
            réunies.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Prescription médicale de transport (PMT), lorsque requise",
              "Carte Vitale à jour",
              "Attestation de droits à l'Assurance Maladie",
              "Coordonnées de votre mutuelle complémentaire, le cas échéant",
            ].map((doc) => (
              <li key={doc} className="flex items-start gap-2">
                <FileText className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{doc}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Pour connaître les conditions officielles de remboursement des frais
            de transport, consultez le site de l&apos;Assurance Maladie :{" "}
            <a
              href={AMELI_TRANSPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-semibold hover:text-pink-700 underline underline-offset-2"
            >
              ameli.fr — frais de transport
            </a>
            . Pour approfondir les règles et démarches, voir aussi notre{" "}
            <Link
              href="/blog/transport-medical-nice"
              className="text-pink-600 font-semibold hover:text-pink-700 underline underline-offset-2"
            >
              guide transport médical à Nice
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Établissements desservis */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Établissements desservis à Nice
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Nous connaissons les accès des principaux établissements de santé
            niçois et vous déposons au plus près de votre destination.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <Heart className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
              <div>
                <Link
                  href="/secteurs/nice-hopital-pasteur-2"
                  className="font-semibold text-pink-600 hover:text-pink-700 underline underline-offset-2"
                >
                  CHU Pasteur 2
                </Link>
                <p className="text-gray-600 text-sm mt-1">
                  Consultations, examens, hospitalisations — Nice
                </p>
              </div>
            </li>
            {[
              {
                name: "Centre Antoine Lacassagne",
                detail: "Oncologie, radiothérapie, chimiothérapie",
              },
              {
                name: "Hôpital de l'Archet",
                detail: "CHU Nice — rééducation, spécialités",
              },
              {
                name: "Fondation Lenval",
                detail: "Pédiatrie — Nice",
              },
              {
                name: "Cliniques et centres de soins",
                detail: "Saint-George, Parc Impérial, centres de dialyse…",
              },
            ].map((place) => (
              <li
                key={place.name}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">{place.name}</span>
                  <p className="text-gray-600 text-sm mt-1">{place.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Zone desservie */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-pink-600" />
            Zone desservie
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Service principalement orienté <strong>Nice</strong> et la
            métropole niçoise. Trajets possibles vers les établissements de santé
            de la région selon disponibilité.
          </p>
          <ul className="flex flex-wrap gap-2">
            {coverageZones.map((zone) => (
              <li
                key={zone}
                className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700"
              >
                {zone}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pourquoi choisir */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Pourquoi choisir Taxi Nice 06 ?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-gray-100 bg-gray-50"
              >
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 list-none">
                  {item.question}
                  <span className="text-pink-500 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-700 leading-relaxed text-sm sm:text-base border-t border-gray-100 pt-4">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Ressources complémentaires */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Ressources complémentaires
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Pour approfondir les règles CPAM, la convention 2025 ou les
            établissements de santé à Nice :
          </p>
          <ul className="space-y-4">
            <li>
              <Link
                href="/blog/transport-medical-nice"
                className="flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors"
              >
                Guide transport médical à Nice (VSL, conventionné, CPAM)
                <ArrowRight className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link
                href="/blog/nouvelle-convention-transports-medicaux-2025"
                className="flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors"
              >
                Nouvelle convention transports médicaux 2025
                <ArrowRight className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link
                href="/secteurs/nice-hopital-pasteur-2"
                className="flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors"
              >
                Taxi Hôpital Pasteur 2 Nice — accès et itinéraires
                <ArrowRight className="w-4 h-4" />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Lien taxi généraliste */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-600">
            Autre besoin de transport à Nice (aéroport, gare, excursions) ?{" "}
            <Link
              href="/"
              className="text-blue-600 font-semibold hover:text-blue-800 underline underline-offset-2"
            >
              Découvrir tous nos services de taxi
            </Link>
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Réserver votre taxi conventionné à Nice
          </h2>
          <p className="text-white/90 mb-8 leading-relaxed">
            Appelez-nous pour organiser votre transport médical. Nous
            répondons à vos questions sur les documents et la prise en charge
            avant le trajet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-pink-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-6 h-6" />
              Appeler pour un transport médical
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
          <p className="text-white/80">
            📞{" "}
            <a href={PHONE_HREF} className="font-bold text-white hover:underline">
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>

      {/* JSON-LD TaxiService */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Taxi Conventionné Nice - Transport Médical CPAM",
            url: "https://taxi-nice-06.com/services/vsl",
            telephone: "+33651683687",
            email: "taxiniceca@gmail.com",
            areaServed: [
              { "@type": "City", name: "Nice" },
              { "@type": "AdministrativeArea", name: "Alpes-Maritimes" },
            ],
            serviceType: [
              "Taxi conventionné CPAM",
              "Transport médical assis",
              "Transport assis professionnalisé",
            ],
            availableChannel: {
              "@type": "ServiceChannel",
              servicePhone: {
                "@type": "ContactPoint",
                telephone: "+33651683687",
                contactType: "reservations",
                availableLanguage: ["fr"],
              },
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
            },
          }),
        }}
      />

      {/* JSON-LD FAQPage — identique à la FAQ visible */}
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
