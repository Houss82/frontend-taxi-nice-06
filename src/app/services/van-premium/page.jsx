import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import Image from "next/image";
import Link from "next/link";

export default function VanPremiumPage() {
  const breadcrumbItems = [
    { name: "Services", url: "/services" },
    { name: "Van Premium", url: "/services/van-premium" },
  ];

  const faqItems = [
    {
      question: "Combien de passagers peut transporter un taxi van à Nice ?",
      answer:
        "La capacité dépend de la configuration du véhicule disponible et du nombre de bagages. Indiquez le nombre exact de passagers lors de la réservation afin que nous vous confirmions le véhicule adapté.",
    },
    {
      question: "Peut-on réserver un van depuis l'aéroport de Nice ?",
      answer:
        "Oui. Nous pouvons organiser un transfert depuis le Terminal 1 ou le Terminal 2 avec un véhicule adapté au groupe et aux bagages. Pour les informations propres à l'aéroport, consultez notre page dédiée.",
    },
    {
      question: "Le van convient-il aux familles avec bagages ?",
      answer:
        "Oui, le van est adapté aux familles et aux groupes qui voyagent avec plusieurs bagages. Donnez le nombre de passagers et le volume approximatif des valises pour vérifier la configuration appropriée.",
    },
    {
      question: "Peut-on réserver un van pour Monaco, Cannes ou Antibes ?",
      answer:
        "Oui. Nous organisons des transferts en van depuis Nice vers Monaco, Cannes, Antibes et les principales destinations de la Côte d'Azur. Le trajet et le tarif sont confirmés à la réservation.",
    },
    {
      question: "Peut-on réserver un van pour un événement ?",
      answer:
        "Oui. Pour un congrès, un salon, un mariage ou un déplacement d'équipe, indiquez les horaires, les lieux, le nombre de passagers et le nombre de trajets souhaités. Pour une organisation événementielle plus complète, consultez notre service dédié.",
    },
    {
      question: "Comment réserver un van à Nice ?",
      answer:
        "Réservez en ligne ou contactez-nous au 06 51 68 36 87. Indiquez la date, l'heure, l'adresse de prise en charge, la destination, le nombre de passagers et le volume des bagages.",
    },
    {
      question: "Peut-on prévoir un siège enfant ?",
      answer:
        "Oui, signalez votre besoin lors de la réservation. Nous vérifierons la disponibilité du siège enfant ou du rehausseur adapté à votre trajet.",
    },
    {
      question: "Le prix est-il communiqué avant le départ ?",
      answer:
        "Oui. Le tarif dépend notamment de la destination, de l'horaire et de la configuration demandée. Il est confirmé lors de la réservation ; vous pouvez aussi consulter la page tarifs.",
    },
  ];

  const taxiServiceJson = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Taxi Van Nice - Transport de groupe avec chauffeur",
    url: "https://taxi-nice-06.com/services/van-premium",
    telephone: "+33651683687",
    image: "https://taxi-nice-06.com/van-a%C3%A9ro.jpeg",
    description:
      "Transport de groupe en van avec chauffeur à Nice et sur la Côte d'Azur.",
    serviceType: "Taxi van et transport de groupe",
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
      { "@type": "City", name: "Nice" },
      { "@type": "City", name: "Cannes" },
      { "@type": "City", name: "Monaco" },
      { "@type": "City", name: "Antibes" },
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
    <>
      <Navbar />
      <div className="bg-white border-b mt-20 sm:mt-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-5">
                  Transport de groupe à Nice
                </p>
                <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                  Taxi Van à Nice
                  <span className="block text-blue-600">avec chauffeur</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Réservez un van avec chauffeur pour voyager ensemble à Nice,
                  depuis l'aéroport, la gare ou votre hôtel. Une solution
                  pratique pour les familles, les groupes d'amis et les
                  déplacements avec plusieurs bagages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/reservation"
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors text-center"
                  >
                    Réserver un van
                  </Link>
                  <Link
                    href="/tarifs"
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
                  >
                    Voir les tarifs
                  </Link>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/van-aéro.jpeg"
                  alt="Van avec chauffeur pour transport de groupe à Nice"
                  width={1024}
                  height={768}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  priority
                  quality={85}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Un van avec chauffeur pour vos déplacements à Nice
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              Le service Van Premium est un transport avec chauffeur, pas une
              location de véhicule. Nous venons vous chercher à l'adresse
              indiquée et vous conduisons directement à destination, avec un
              véhicule adapté au nombre de passagers et aux bagages.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Le Mercedes Classe V fait partie des véhicules utilisés pour les
              trajets de groupe, selon sa disponibilité et la configuration
              nécessaire. La capacité exacte est confirmée au moment de la
              réservation afin d'éviter toute mauvaise surprise.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Voyager en groupe sans multiplier les véhicules
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
              Un van permet de coordonner un même départ, une même arrivée et
              un itinéraire commun. Il convient notamment aux familles, aux
              groupes d'amis, aux voyageurs chargés de valises et aux petites
              équipes qui souhaitent se déplacer ensemble.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                ["Familles", "Poussettes, valises et départ depuis votre domicile ou votre hôtel."],
                ["Groupes d'amis", "Sorties, séjours et transferts entre les principales villes de la Riviera."],
                ["Bagages", "Volume à préciser pour choisir la configuration la plus adaptée."],
                ["Professionnels", "Équipe, matériel et trajets coordonnés entre gare, hôtel et lieu de rendez-vous."],
              ].map(([title, description]) => (
                <div key={title} className="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Transfert aéroport de Nice en van
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              Depuis le Terminal 1 ou le Terminal 2, un van est pratique pour
              réunir le groupe et transporter les bagages jusqu'à Nice, un
              hôtel ou une autre destination de la Côte d'Azur. Indiquez le
              terminal, le numéro de vol, le nombre de passagers et le volume
              des bagages lors de la réservation.
            </p>
            <Link href="/services/taxi-aeroport-nice" className="text-blue-700 font-semibold underline">
              Voir le service taxi aéroport Nice
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Gare, hôtel et destinations de la Côte d'Azur
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
              Nous organisons la prise en charge à la gare de Nice-Ville, dans
              les hôtels et à votre adresse. Le van peut ensuite rejoindre
              Monaco, Cannes, Antibes ou une autre destination selon votre
              programme.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                ["Gare de Nice-Ville", "/secteurs/nice-gare", "Arrivée en train, bagages et correspondance."],
                ["Monaco", "/secteurs/monaco", "Transfert de groupe vers la Principauté."],
                ["Cannes", "/secteurs/cannes", "Séjour, congrès ou déplacement sur la Croisette."],
                ["Antibes", "/secteurs/antibes", "Juan-les-Pins, port Vauban ou Sophia Antipolis."],
              ].map(([title, href, description]) => (
                <div key={title} className="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <Link href={href} className="hover:text-blue-700">{title}</Link>
                  </h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Van pour événements et déplacements professionnels
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              Pour une équipe, un séminaire ou un déplacement vers un salon,
              précisez les horaires, les lieux et le nombre de trajets. Nous
              vérifions le véhicule disponible et les possibilités de
              coordination selon votre demande.
            </p>
            <Link href="/services/transferts-evenements" className="text-blue-700 font-semibold underline">
              Découvrir les transferts pour événements
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Excursions en groupe
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              Pour visiter Monaco, Cannes, Èze ou Saint-Tropez avec votre
              groupe, nous pouvons organiser un trajet ou une excursion selon
              votre itinéraire et vos horaires.
            </p>
            <Link href="/services/excursions-decouvertes" className="text-blue-700 font-semibold underline">
              Voir les excursions privées sur la Côte d'Azur
            </Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Nos véhicules pour les groupes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Mercedes Classe V</h3>
                <p className="text-gray-700 mb-4">
                  Van utilisé pour les déplacements de groupe, selon
                  disponibilité. La capacité et l'espace réellement nécessaires
                  sont vérifiés avec vous avant confirmation.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Climatisation</li>
                  <li>• Espace pour les passagers et les bagages</li>
                  <li>• Connexion WiFi selon disponibilité</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Configuration adaptée</h3>
                <p className="text-gray-700">
                  Le véhicule est choisi selon le nombre de personnes, le
                  volume des valises et le trajet. Pour un groupe plus petit,
                  une berline peut parfois être plus appropriée ; nous vous
                  orientons au moment de la réservation.
                </p>
              </div>
            </div>
            <p className="mt-6">
              <Link href="/services/flotte-recente" className="text-blue-700 font-semibold underline">
                Voir la flotte et ses équipements
              </Link>
            </p>
            <p className="mt-3">
              Pour préparer un déplacement de groupe, consultez aussi notre{" "}
              <Link
                href="/blog/taxi-groupe-nice-van-7-places"
                className="text-blue-700 font-semibold underline"
              >
                guide pratique du taxi groupe à Nice
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Comment réserver votre van à Nice ?
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                ["1. Date et heure", "Indiquez le jour du trajet et l'heure souhaitée de prise en charge."],
                ["2. Départ et destination", "Précisez l'adresse exacte de départ et le lieu d'arrivée."],
                ["3. Passagers et bagages", "Donnez le nombre de personnes et le volume approximatif des valises."],
                ["4. Besoin particulier", "Mentionnez siège enfant, matériel, aller-retour ou plusieurs étapes."],
              ].map(([title, description]) => (
                <div key={title} className="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/reservation" className="px-7 py-3 bg-blue-600 text-white rounded-xl font-semibold text-center hover:bg-blue-700">
                Réserver mon transfert en van
              </Link>
              <a href="tel:+33651683687" className="px-7 py-3 border-2 border-blue-600 text-blue-700 rounded-xl font-semibold text-center hover:bg-blue-50">
                Appeler le 06 51 68 36 87
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              FAQ — Taxi van et transport de groupe à Nice
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="group rounded-xl border border-gray-200 p-5">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Voyagez en Groupe
              </h2>
              <p className="text-xl text-blue-100 mb-4">
                Réservez un van avec chauffeur et voyagez ensemble dans un
                véhicule adapté à votre groupe
              </p>
              <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
                Pour découvrir les autres services de{" "}
                <Link
                  href="/"
                  className="text-white font-semibold underline underline-offset-4 hover:text-blue-100 transition-colors"
                >
                  Taxi Nice 06
                </Link>{" "}
                , consultez l'accueil du site.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/reservation"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 no-underline"
                >
                  Réserver maintenant
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 no-underline"
                >
                  Nous contacter
                </Link>
              </div>
              <div className="mt-8 text-blue-100">
                <a href="tel:+33651683687" className="text-white font-semibold">
                  06 51 68 36 87
                </a>{" "}
                | taxiniceca@gmail.com
              </div>
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
    </>
  );
}
