"use client";

import { ExternalLink, Star } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      author: "Ta Bassma",
      rating: 5,
      isNew: true,
      text: "Très bon taxi sur Nice je recommande 🌟🌟🌟",
    },
    {
      id: 2,
      author: "Isabelle C.",
      rating: 5,
      isNew: true,
      text: "Transport au top. Personnel à l'heure et très accueillant. Je recommande.",
    },
    {
      id: 3,
      author: "Laurent D.",
      rating: 5,
      isNew: false,
      text: "Comme d'habitude chauffeur ponctuel, très professionnel et très agréable. Nous faisons souvent appel à cette équipe de taxis et nous sommes toujours ravis . Merci !",
    },
    {
      id: 4,
      author: "Pauline F.",
      rating: 5,
      isNew: true,
      text: "Bravo Merci de m'avoir emmené à l'aéroport à l'heure",
    },
  ];

  // Calcul de la note moyenne et du nombre total d'avis
  const averageRating = 5;
  const totalReviews = 45; // Nombre total d'avis sur Google

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-pink-50/80 via-purple-50/80 to-blue-50/80 relative overflow-hidden">
        {/* Effets décoratifs pastels */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full border-2 border-pink-200/50 mb-6 shadow-lg hover:shadow-xl transition-shadow">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold text-gray-700">
                Avis Clients Vérifiés
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Ce que disent nos clients
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-yellow-200/50">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-7 h-7 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-left ml-2">
                  <p className="text-3xl font-bold text-gray-900 leading-none">
                    {averageRating}/5
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Note moyenne</p>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-blue-200/50">
                <p className="text-lg font-semibold text-gray-900">
                  {totalReviews} avis vérifiables
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  sur{" "}
                  <a
                    href="https://maps.app.goo.gl/UzPCMHMeFYZaeZNH8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline font-semibold inline-flex items-center gap-1"
                  >
                    Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Découvrez les témoignages authentiques de nos clients satisfaits.
              Tous nos avis sont vérifiables sur notre{" "}
              <a
                href="https://maps.app.goo.gl/UzPCMHMeFYZaeZNH8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline font-semibold"
              >
                fiche Google My Business
              </a>
              .
            </p>
          </div>

          {/* Grille d'avis */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {reviews.map((review, index) => {
              // Couleurs pastels alternées pour chaque carte
              const colors = [
                {
                  bg: "from-pink-50 to-rose-50",
                  border: "border-pink-200",
                  accent: "text-pink-600",
                },
                {
                  bg: "from-purple-50 to-violet-50",
                  border: "border-purple-200",
                  accent: "text-purple-600",
                },
                {
                  bg: "from-blue-50 to-cyan-50",
                  border: "border-blue-200",
                  accent: "text-blue-600",
                },
                {
                  bg: "from-indigo-50 to-blue-50",
                  border: "border-indigo-200",
                  accent: "text-indigo-600",
                },
              ];
              const colorScheme = colors[index % colors.length];

              return (
                <div
                  key={review.id}
                  className={`bg-gradient-to-br ${colorScheme.bg} backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 ${colorScheme.border} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden`}
                >
                  {/* Effet décoratif */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorScheme.bg} opacity-20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2`}
                  ></div>

                  <div className="relative z-10">
                    {/* En-tête de l'avis */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3
                            className={`font-bold ${colorScheme.accent} text-lg`}
                          >
                            {review.author}
                          </h3>
                          {review.isNew && (
                            <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full border border-green-200 shadow-sm">
                              Nouveau
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Texte de l'avis */}
                    <p className="text-gray-700 leading-relaxed text-base">
                      {review.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Lien vers Google Maps */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/UzPCMHMeFYZaeZNH8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-2xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <Star className="w-6 h-6 fill-white" />
              <span>Voir tous les avis sur Google Maps</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Tous nos avis sont authentiques et vérifiables sur notre fiche
              Google My Business
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD pour les avis - Tag script normal pour garantir la visibilité par Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Taxi Nice Côte d'Azur",
            image: "https://taxi-nice-06.com/logo1.png",
            "@id": "https://taxi-nice-06.com",
            url: "https://taxi-nice-06.com",
            telephone: "+33651683687",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nice",
              addressRegion: "Alpes-Maritimes",
              postalCode: "06000",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "43.7102",
              longitude: "7.2620",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: totalReviews.toString(),
              bestRating: "5",
              worstRating: "1",
            },
            review: reviews.map((review) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: review.author,
              },
              reviewBody: review.text,
              reviewRating: {
                "@type": "Rating",
                ratingValue: review.rating.toString(),
                bestRating: "5",
                worstRating: "1",
              },
            })),
            sameAs: ["https://maps.app.goo.gl/UzPCMHMeFYZaeZNH8"],
          }),
        }}
      />
    </>
  );
}
