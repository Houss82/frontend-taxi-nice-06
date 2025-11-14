import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import Image from "next/image";
import Link from "next/link";

const sectors = [
  {
    slug: "nice",
    name: "Nice",
    description:
      "Taxi Nice 24/7 : centre-ville, aéroport, gare, hôpitaux et longues distances.",
    image: "/image1.jpeg",
  },
  {
    slug: "nice-gare",
    name: "Nice Gare",
    description:
      "Taxi depuis gare Nice-Ville, Nice Riquier, Nice Saint-Augustin vers toute destination.",
    image: "/gare-jour copie.jpeg",
  },
  {
    slug: "nice-centre-ville",
    name: "Nice Centre-Ville",
    description:
      "Taxi dans Nice centre, Vieux Nice, Promenade des Anglais et quartiers résidentiels.",
    image: "/image1.jpeg",
  },
  {
    slug: "monaco",
    name: "Monaco",
    description:
      "Transferts premium, accueil portuaire et déplacements professionnels 24/7.",
    image: "/van-premium.jpeg",
  },
  {
    slug: "cannes",
    name: "Cannes",
    description:
      "Festival, congrès, hôtels 5 étoiles : un chauffeur dédié pour chaque besoin.",
    image: "/bg-image.png",
  },
  {
    slug: "antibes",
    name: "Antibes",
    description:
      "Juan-les-Pins, Sophia Antipolis, port Vauban : service sur-mesure toute l'année.",
    image: "/taxi-antibes-secteur.jpeg",
  },
];

export default function SecteursPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-white border-b mt-20 sm:mt-0">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <SEOBreadcrumb
            items={[
              {
                name: "Nos secteurs",
                url: "/secteurs",
                title: "Secteurs Taxi Nice 06",
              },
            ]}
          />
        </div>
      </div>

      <main className="py-16">
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[2fr,3fr] gap-12 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Taxi Nice 06 - Côte d&apos;Azur
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Nos secteurs desservis
                <span className="block text-primary">
                  Nice, Nice Gare, Nice Centre-Ville, Monaco, Cannes, Antibes &
                  plus
                </span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Notre équipe de chauffeurs privés opère sur toute la Côte
                d&apos;Azur avec un service premium 24/7. Découvrez nos pages
                dédiées pour Nice, Nice Gare, Nice Centre-Ville, Monaco, Cannes
                et Antibes, et accédez à des informations détaillées sur les
                transferts, les établissements de santé desservis et nos
                engagements qualité.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Besoin d&apos;un chauffeur pour un évènement, un transfert
                aéroport ou un accompagnement médical ? Nous proposons des
                solutions sur mesure pour chaque trajet, avec facturation
                transparente et assistance administrative sur demande.
              </p>
            </div>
            <div className="relative h-80 lg:h-full min-h-[320px]">
              <Image
                src="/van-premium.jpeg"
                alt="Chauffeur privé Taxi Nice 06"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Disponibilité
                </p>
                <p className="text-2xl font-semibold text-primary">24/7</p>
                <p className="text-sm text-gray-600">
                  Réduction des temps d&apos;attente dans les secteurs
                  touristiques.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choisissez votre secteur
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Accédez à une page détaillée pour découvrir les services
              disponibles, les établissements couverts et les conseils pratiques
              pour organiser vos trajets dans chaque ville.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/secteurs/${sector.slug}`}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={sector.image}
                    alt={`Taxi privé à ${sector.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Taxi {sector.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  <span className="text-primary font-semibold">
                    Découvrir le secteur →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-20">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Un réseau de chauffeurs experts de la Côte d&apos;Azur
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nous intervenons chaque jour depuis l&apos;aéroport Nice Côte
                  d&apos;Azur, la gare de Nice-Ville, le port de Monaco, le
                  Palais des Festivals à Cannes ou encore le port Vauban
                  d&apos;Antibes. Notre objectif : vous assurer ponctualité,
                  confort et discrétion pour chaque déplacement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En réservant via Taxi Nice 06, vous bénéficiez d&apos;un
                  interlocuteur unique pour planifier vos transferts
                  multi-destinations, d&apos;une assistance 24/7 via téléphone
                  ou WhatsApp et d&apos;une flotte de véhicules récents
                  parfaitement entretenus.
                </p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  Services inclus
                </h3>
                <ul className="space-y-3 text-blue-900">
                  <li>✓ Accueil personnalisé avec pancarte nominative</li>
                  <li>✓ Suivi de vol et ajustement automatique des horaires</li>
                  <li>✓ Assistance bagages et accompagnement VIP</li>
                  <li>✓ Facturation claire et devis sous 1h</li>
                  <li>✓ Options siège bébé, rehausseur et rafraîchissements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-20">
          <div className="bg-gradient-to-br from-primary to-blue-600 text-white rounded-3xl shadow-2xl p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Besoin d&apos;un trajet personnalisé ?
                </h2>
                <p className="text-lg text-blue-100">
                  Nous organisons vos transferts simples ou aller-retour, vos
                  excursions privatives et vos déplacements médicaux sur
                  demande.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+33651683687"
                  className="flex-1 text-center px-6 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                >
                  📞 06 51 68 36 87
                </a>
                <Link
                  href="/reservation"
                  className="flex-1 text-center px-6 py-4 border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  Réserver en ligne
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
