import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Car,
  CheckCircle2,
  Hotel,
  MapPin,
  Phone,
  Plane,
  ShieldAlert,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PHONE_DISPLAY = "06 51 68 36 87";
const PHONE_HREF = "tel:+33651683687";

export default function TaxiAssistancePannePage() {
  const breadcrumbItems = [
    { name: "Services", url: "/services" },
    {
      name: "Taxi Assistance Panne",
      url: "/services/taxi-assistance-panne-nice",
    },
  ];

  const solutions = [
    {
      title: "Retour à domicile",
      description:
        "Rejoindre votre adresse à Nice ou dans une commune voisine lorsque le véhicule reste immobilisé.",
      icon: Car,
    },
    {
      title: "Garage ou concession",
      description:
        "Se rendre chez un réparateur, une concession ou un centre automobile pour déposer ou récupérer un véhicule.",
      icon: Wrench,
    },
    {
      title: "Hôtel ou hébergement",
      description:
        "Poursuivre un séjour lorsque la voiture est immobilisée pendant les vacances ou un déplacement.",
      icon: Hotel,
    },
    {
      title: "Aéroport ou gare",
      description:
        "Conserver une correspondance prévue, sous réserve de disponibilité et d’une marge horaire réaliste.",
      icon: Plane,
    },
    {
      title: "Familles, enfants et bagages",
      description:
        "Voyager ensemble avec valises et effets personnels autorisés. Siège enfant sur demande, selon disponibilité.",
      icon: Users,
    },
    {
      title: "Déplacement professionnel",
      description:
        "Rejoindre un rendez-vous, un siège d’entreprise ou un hôtel d’affaires après une panne.",
      icon: Briefcase,
    },
    {
      title: "Après dépôt au garage",
      description:
        "Revenir chez vous ou vers une autre destination une fois le véhicule confié au réparateur.",
      icon: Building2,
    },
  ];

  const bookingSteps = [
    {
      step: "1",
      title: "Sécurité d’abord",
      text: "Mettez les personnes en sécurité et contactez le dépannage ou l’assistance si nécessaire. Ne restez pas sur une bande d’arrêt d’urgence ni dans une zone dangereuse.",
    },
    {
      step: "2",
      title: "Lieu de prise en charge",
      text: "Communiquez un lieu accessible et autorisé : adresse, parking, entrée de garage, ou aire sécurisée après intervention des services compétents sur autoroute.",
    },
    {
      step: "3",
      title: "Détails du trajet",
      text: "Indiquez le nombre de passagers, les bagages, la destination et l’horaire souhaité.",
    },
    {
      step: "4",
      title: "Confirmation",
      text: "Nous confirmons la disponibilité et organisons le trajet. Le tarif est annoncé avant le départ.",
    },
  ];

  const zones = [
    {
      title: "Nice",
      href: "/secteurs/nice-centre-ville",
      description: "Centre, quartiers et prises en charge autorisées.",
    },
    {
      title: "Aéroport Nice Côte d'Azur",
      href: "/services/taxi-aeroport-nice",
      description: "Correspondance possible selon disponibilités et horaires.",
    },
    {
      title: "Saint-Laurent-du-Var",
      href: "/blog/taxi-saint-laurent-du-var",
      description: "Commune voisine, Cap 3000 et accès ouest.",
    },
    {
      title: "Cagnes-sur-Mer",
      href: "/secteurs",
      description: "Déplacements selon disponibilité du jour.",
    },
    {
      title: "Antibes",
      href: "/secteurs/antibes",
      description: "Vers Juan-les-Pins ou le centre, selon le trajet.",
    },
    {
      title: "Cannes",
      href: "/secteurs/cannes",
      description: "Transfert vers la Croisette ou un hôtel.",
    },
    {
      title: "Menton",
      href: "/secteurs/menton",
      description: "Est des Alpes-Maritimes, sous réserve de disponibilité.",
    },
    {
      title: "Monaco",
      href: "/secteurs/monaco",
      description: "Sous réserve des conditions de prise en charge applicables.",
    },
  ];

  const partners = [
    "Garages automobiles",
    "Concessionnaires",
    "Entreprises de dépannage et remorquage",
    "Loueurs de véhicules",
    "Gestionnaires de flottes",
    "Assisteurs automobiles",
  ];

  const faqItems = [
    {
      question: "Peut-on réserver un taxi après une panne de voiture à Nice ?",
      answer:
        "Oui. Indiquez un lieu de prise en charge accessible et autorisé, le nombre de passagers, les bagages et la destination. La course est confirmée selon la disponibilité du moment. Taxi Nice 06 ne réalise ni dépannage mécanique ni remorquage.",
    },
    {
      question: "Pouvez-vous transporter plusieurs passagers et leurs bagages ?",
      answer:
        "Oui, dans la limite du véhicule disponible. Précisez le nombre de personnes et le volume des bagages à la réservation. Un van peut être proposé si la configuration le permet.",
    },
    {
      question: "Peut-on rejoindre un garage ou une concession ?",
      answer:
        "Oui. Donnez l’adresse exacte du garage, de la concession ou du centre automobile. Nous transportons les passagers ; le véhicule immobilisé reste à la charge du dépannage ou du remorquage choisi par le client.",
    },
    {
      question: "L'assurance automobile rembourse-t-elle le taxi ?",
      answer:
        "Cela dépend de votre contrat d’assistance. Vérifiez les conditions auprès de votre assureur ou assisteur avant d’engager des frais. Nous pouvons fournir une facture de course selon les modalités indiquées à la réservation ; nous ne garantissons aucun remboursement.",
    },
    {
      question: "Peut-on être pris en charge directement sur l'autoroute ?",
      answer:
        "Non sur une bande d’arrêt d’urgence ou dans une zone dangereuse. Sur autoroute, la prise en charge s’organise uniquement à un endroit sécurisé et autorisé, après intervention des services compétents si nécessaire. Contactez-nous une fois ce point de rendez-vous connu.",
    },
    {
      question:
        "Peut-on réserver un taxi après avoir déposé son véhicule au garage ?",
      answer:
        "Oui. Indiquez l’adresse du garage, l’heure souhaitée et votre destination. La disponibilité est confirmée au moment de la demande.",
    },
  ];

  const taxiServiceJson = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Taxi Assistance 06 — Transport de passagers après une panne automobile",
    url: "https://taxi-nice-06.com/services/taxi-assistance-panne-nice",
    telephone: "+33651683687",
    image:
      "https://taxi-nice-06.com/images/services/taxi-assistance-panne-nice.webp",
    description:
      "Transport en taxi des passagers, bagages et effets personnels autorisés après une panne automobile à Nice et sur la Côte d'Azur. Pas de dépannage ni de remorquage.",
    serviceType: "Transport de passagers après panne automobile",
    provider: {
      "@id": "https://taxi-nice-06.com/#organization",
    },
    areaServed: [
      { "@type": "City", name: "Nice" },
      { "@type": "City", name: "Cannes" },
      { "@type": "City", name: "Antibes" },
      { "@type": "City", name: "Monaco" },
    ],
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero plein cadre */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/taxi-assistance-panne-nice.webp"
            alt="Taxi Mercedes devant un garage automobile, passager avec bagages sur la Côte d'Azur"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-900/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sky-300 font-semibold text-sm sm:text-base mb-4 tracking-wide uppercase">
              <Car className="w-4 h-4" />
              Taxi Assistance 06
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Voiture en panne à Nice ? Réservez un taxi pour poursuivre votre
              trajet
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-4">
              Votre voiture s&apos;arrête ? Pas votre voyage. Taxi Nice 06
              transporte les passagers, leurs bagages et leurs effets
              personnels autorisés vers un domicile, un garage, un hôtel, une
              gare ou l&apos;aéroport.
            </p>
            <p className="text-base text-white/75 leading-relaxed mb-8">
              Nous ne réalisons ni dépannage mécanique ni remorquage. Prise en
              charge sur réservation, selon disponibilité, depuis un lieu
              accessible et autorisé.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-primary hover:bg-primaryDark text-white rounded-xl font-bold text-base sm:text-lg transition-colors shadow-lg shadow-blue-900/40"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                Appeler un taxi — {PHONE_DISPLAY}
              </a>
              <Link
                href="/reservation"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-slate-900 transition-colors"
              >
                Réserver mon trajet
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <p className="text-white/70 text-sm sm:text-base">
              Transport de personnes uniquement · Selon disponibilité
            </p>
          </div>
        </div>
      </section>

      {/* Véhicule immobilisé */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Votre véhicule est immobilisé ?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
            Une panne mécanique, une immobilisation au garage ou un problème
            technique peut interrompre un trajet familial, un déplacement
            professionnel ou des vacances sur la Côte d&apos;Azur. Une fois les
            personnes en sécurité et le véhicule pris en charge par le
            dépannage ou le garage de votre choix, un taxi permet de poursuivre
            le déplacement.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg">
            Nous organisons la course à partir d&apos;un point de rendez-vous
            clair. Aucune prise en charge immédiate n&apos;est garantie : la
            disponibilité dépend de l&apos;horaire, du lieu et du véhicule
            adapté à votre groupe.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 flex gap-4">
            <ShieldAlert className="w-7 h-7 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Ce que nous faisons — et ce que nous ne faisons pas
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Nous transportons les <strong>passagers</strong> et leurs
                bagages. Nous ne réparons pas le véhicule et nous ne le
                remorquons pas. Le dépannage reste à organiser auprès d&apos;un
                professionnel adapté.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Nos solutions de transport
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Le choix du véhicule dépend du nombre de passagers, des bagages
              et des disponibilités confirmées à la réservation. Pour un
              groupe, consultez aussi le{" "}
              <Link
                href="/services/van-premium"
                className="text-primary font-semibold underline underline-offset-2 hover:text-primaryDark"
              >
                taxi van à Nice
              </Link>
              .
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {solutions.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment réserver */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Comment réserver ?
          </h2>
          <ol className="space-y-6">
            {bookingSteps.map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="flex-shrink-0 w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-md shadow-blue-500/25">
                  {item.step}
                </span>
                <div className="pt-1">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="text-gray-600 mt-8 leading-relaxed text-sm sm:text-base">
            Pour les réflexes utiles après une panne, lisez aussi le guide{" "}
            <Link
              href="/blog/panne-voiture-nice-solution-taxi"
              className="text-primary font-semibold underline underline-offset-2 hover:text-primaryDark"
            >
              panne de voiture à Nice : que faire ensuite ?
            </Link>
            .
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primaryDark text-white rounded-xl font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Réserver en ligne
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
              <MapPin className="w-7 h-7 text-sky-400" />
              Zones desservies
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Nous intervenons depuis Nice et, selon disponibilité, vers
              d&apos;autres communes des Alpes-Maritimes. Nous ne disposons pas
              d&apos;une flotte permanente dans chaque ville : chaque course
              est organisée au cas par cas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {zones.map((zone) => (
              <Link
                key={zone.title}
                href={zone.href}
                className="block rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-sky-400/40 transition-all duration-300"
              >
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  {zone.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {zone.description}
                </p>
              </Link>
            ))}
          </div>

          <p className="text-slate-400 mt-8 text-sm sm:text-base">
            Vue d&apos;ensemble :{" "}
            <Link
              href="/services"
              className="text-sky-300 font-semibold underline underline-offset-2 hover:text-white"
            >
              tous nos services
            </Link>{" "}
            et{" "}
            <Link
              href="/secteurs"
              className="text-sky-300 font-semibold underline underline-offset-2 hover:text-white"
            >
              secteurs desservis
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Partenariats */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Partenariats professionnels
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Organisez le transport de vos clients pendant que leur véhicule est
            pris en charge. Aucun partenariat exclusif n&apos;est annoncé ici —
            contactez-nous pour une organisation ponctuelle ou régulière.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {partners.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-gray-600 leading-relaxed">
            Appelez le{" "}
            <a
              href={PHONE_HREF}
              className="text-primary font-semibold hover:underline"
            >
              {PHONE_DISPLAY}
            </a>{" "}
            ou utilisez la{" "}
            <Link
              href="/contact"
              className="text-primary font-semibold underline underline-offset-2 hover:text-primaryDark"
            >
              page contact
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Tarifs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-base sm:text-lg">
            Le prix dépend du trajet, de l&apos;horaire et du véhicule adapté.
            Il est confirmé avant le départ. Consultez la{" "}
            <Link
              href="/tarifs"
              className="text-primary font-semibold underline underline-offset-2 hover:text-primaryDark"
            >
              grille des tarifs
            </Link>{" "}
            et demandez une estimation via la{" "}
            <Link
              href="/reservation"
              className="text-primary font-semibold underline underline-offset-2 hover:text-primaryDark"
            >
              réservation en ligne
            </Link>
            .
          </p>
          <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 sm:p-6">
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Nous ne garantissons pas une prise en charge par votre assurance
              ou votre assistance. Vérifiez les conditions de votre contrat et
              obtenez, si nécessaire, un accord avant d&apos;engager des frais.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-gray-200 bg-gray-50 open:bg-white open:shadow-sm open:border-blue-100 transition-all"
              >
                <summary className="cursor-pointer list-none font-semibold text-gray-900 text-base sm:text-lg flex justify-between gap-4 p-5 sm:p-6">
                  <span>{item.question}</span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-primary flex items-center justify-center text-xl leading-none group-open:bg-primary group-open:text-white group-open:rotate-45 transition-all">
                    +
                  </span>
                </summary>
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed text-sm sm:text-base -mt-1">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primaryDark to-slate-900" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 0, transparent 45%), radial-gradient(circle at 80% 80%, #7dd3fc 0, transparent 40%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <p className="text-sky-200 font-semibold text-sm uppercase tracking-wider mb-3">
            Taxi Assistance 06
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Votre voiture s&apos;arrête ? Pas votre voyage !
          </h2>
          <p className="text-lg text-blue-50/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Transport des passagers après une panne à Nice et sur la Côte
            d&apos;Azur, selon disponibilité. Pas de dépannage, pas de
            remorquage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              Réserver en ligne
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />

      <Footer />
    </div>
  );
}
