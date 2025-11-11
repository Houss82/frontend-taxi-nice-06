import ActionButtons from "@/components/ActionButtons.jsx";
import Footer from "@/components/Footer.jsx";
import HospitalsList from "@/components/HospitalsList.jsx";
import Navbar from "@/components/Navbar.jsx";
import SEOBreadcrumb from "@/components/SEOBreadcrumb.jsx";
import { getAllPosts } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sectorData, sectorSlugs } from "./data";

export async function generateStaticParams() {
  return sectorSlugs.map((slug) => ({ slug }));
}

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = sectorData[slug];

  if (!data) {
    return {};
  }

  const title = `${data.hero.title} | Taxi Nice 06`;
  const description =
    data.introduction[0]?.slice(0, 155) ??
    `Taxi Nice 06 - Chauffeur privé ${data.cityName}.`;
  const canonical = `https://taxi-nice-06.com/secteurs/${data.slug}`;

  return {
    title,
    description,
    keywords: [
      `taxi ${data.cityName.toLowerCase()}`,
      `chauffeur privé ${data.cityName.toLowerCase()}`,
      `transfert ${data.cityName.toLowerCase()}`,
      "taxi nice 06",
    ],
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images: [
        {
          url: `https://taxi-nice-06.com${data.hero.image}`,
          width: 1200,
          height: 630,
          alt: `Taxi ${data.cityName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://taxi-nice-06.com${data.hero.image}`],
    },
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function SecteurPage({ params }) {
  const { slug } = await params;
  const data = sectorData[slug];

  if (!data) {
    notFound();
  }

  const allPosts = getAllPosts();
  const keyword = data.cityName.toLowerCase();
  const relatedPosts = allPosts
    .filter((post) => {
      const slugMatch = post.slug?.toLowerCase().includes(data.slug);
      const titleMatch = post.title?.toLowerCase().includes(keyword);
      const excerptMatch = post.excerpt?.toLowerCase().includes(keyword);
      return slugMatch || titleMatch || excerptMatch;
    })
    .slice(0, 3);
  const fallbackPosts =
    relatedPosts.length > 0 ? relatedPosts : allPosts.slice(0, 3);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const breadcrumbItems = [
    { name: "Secteurs", url: "/secteurs", title: "Secteurs desservis" },
    {
      name: data.cityName,
      url: `/secteurs/${data.slug}`,
      title: `Taxi ${data.cityName}`,
    },
  ];

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.localBusiness.name,
    image: data.localBusiness.image,
    telephone: data.localBusiness.telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality: data.localBusiness.locality,
      addressRegion: data.localBusiness.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.localBusiness.latitude,
      longitude: data.localBusiness.longitude,
    },
    url: data.localBusiness.url,
    openingHours: "Mo-Su 00:00-23:59",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-white border-b mt-20 sm:mt-0">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <main className="pb-20">
        <div className="sticky top-16 z-[49] bg-white/95 border-b border-gray-100 shadow-sm">
          <ActionButtons />
        </div>

        <section className="max-w-6xl mx-auto px-6 pt-12">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-start">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {data.hero.title}
                <span className="block text-primary">
                  {data.hero.highlight}
                </span>
              </h1>
              <h2 className="text-2xl text-primary/80 font-semibold mb-6">
                {data.hero.subtitle}
              </h2>

              {data.introduction.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-700 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
              {data.homepageLink && (
                <p className="text-lg text-gray-700 leading-relaxed">
                  {data.homepageLink.before}
                  <Link
                    href={data.homepageLink.href}
                    className="text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    {data.homepageLink.linkText}
                  </Link>
                  {data.homepageLink.after}
                </p>
              )}
            </div>
            <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src={data.hero.image}
                alt={data.hero.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                priority
              />
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-3 rounded-xl shadow-lg border border-primary/20">
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Disponible
                </p>
                <p className="text-lg font-semibold text-primary">
                  24h/24 – 7j/7
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-10">
          {data.secondaryIntro.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-gray-700 leading-relaxed mb-4"
            >
              {paragraph}
            </p>
          ))}
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {data.servicesTitle}
            </h2>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg">
              {data.services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-primary/5 border border-primary/10 rounded-2xl px-4 py-3"
                >
                  <span className="text-primary text-xl">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Secteur couvert
          </h2>
          <p className="text-gray-700 mb-4">{data.coverageDescription}</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.coverageAreas.map((area) => (
              <div
                key={area}
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-700 shadow-sm"
              >
                {area}
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Zone d&apos;intervention
          </h2>
          <p className="text-gray-700 mb-4">{data.map.description}</p>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <iframe
              src={data.map.embedUrl}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mt-4 text-blue-900">
            ℹ️ {data.map.info}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <div className="grid md:grid-cols-2 gap-6">
            {data.infoCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6"
              >
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <div className="bg-blue-50 rounded-3xl border border-blue-100 p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Pourquoi choisir Taxi Nice 06 ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.sellingPoints.map((point, index) => (
                <div key={index} className="bg-white rounded-2xl p-5 shadow">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-blue-900">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {data.hospitalsTitle}
            </h2>
            <HospitalsList items={data.hospitals} />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {data.establishmentsTitle}
          </h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-primary/10">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Établissement
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Ville
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Spécialité
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Site web
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Téléphone
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.establishments.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 text-gray-700 font-medium">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{item.city}</td>
                    <td className="px-4 py-3 text-gray-600">
                      {item.speciality}
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 underline"
                      >
                        Site officiel
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={`tel:${item.phone.replace(/\s+/g, "")}`}
                        className="text-primary hover:text-primary/80"
                      >
                        {item.phone}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              {data.faq.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Ressources utiles
            </h2>
            {data.resource?.description && (
              <p className="text-blue-900 mb-3">{data.resource.description}</p>
            )}
            {Array.isArray(data.resource?.links) &&
              data.resource.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {data.resource.links.map((link, index) => (
                    <a
                      key={`${link.url}-${index}`}
                      href={link.url}
                      className="inline-flex items-center gap-2 text-blue-700 font-semibold underline"
                      target={link.target || "_self"}
                      rel={link.rel || undefined}
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}
          </div>
        </section>

        {fallbackPosts.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 mt-14">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  À lire aussi pour organiser votre trajet {data.cityName}
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl">
                  Guides pratiques, recommandations aéroport et articles dédiés
                  aux déplacements Nice ↔ {data.cityName}. Des ressources
                  complémentaires pour préparer votre transfert avec Taxi Nice
                  06.
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Tous nos articles
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {fallbackPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                    />
                    {post.category && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-primary text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    )}
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-sm text-gray-500">
                      {formatDate(post.date)}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                    >
                      Lire l&apos;article
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Spécialités de transport
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.specialties.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tarifs & remboursement
            </h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              {data.pricing.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Nos engagements qualité
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.commitments.map((commitment, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {commitment.title}
                </h3>
                <p className="text-gray-700">{commitment.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-16">
          <div className="bg-gradient-to-br from-primary to-blue-600 text-white rounded-3xl shadow-2xl p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Prêt à réserver votre chauffeur ?
                </h2>
                <p className="text-lg text-blue-100">
                  Contactez-nous par téléphone ou via le formulaire. Notre
                  équipe vous répond rapidement avec un devis sur mesure.
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
                  Réservation en ligne
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-12">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessJson),
            }}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
