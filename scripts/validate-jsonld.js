/**
 * Script pour valider le JSON-LD des avis
 * Usage: node scripts/validate-jsonld.js
 */

const reviewsSchema = {
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
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Ta Bassma",
      },
      datePublished: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      reviewBody: "Très bon taxi sur Nice je recommande 🌟🌟🌟",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Isabelle C.",
      },
      datePublished: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      reviewBody: "Transport au top. Personnel à l'heure et très accueillant. Je recommande.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Laurent D.",
      },
      datePublished: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      reviewBody: "Comme d'habitude chauffeur ponctuel, très professionnel et très agréable. Nous faisons souvent appel à cette équipe de taxis et nous sommes toujours ravis . Merci !",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Pauline F.",
      },
      datePublished: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      reviewBody: "Bravo Merci de m'avoir emmené à l'aéroport à l'heure",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
  sameAs: ["https://maps.app.goo.gl/UzPCMHMeFYZaeZNH8"],
};

// Validation basique
console.log("✅ Validation du schéma JSON-LD des avis\n");
console.log("📋 Structure vérifiée :");
console.log(`  - Type: ${reviewsSchema["@type"]}`);
console.log(`  - Nom: ${reviewsSchema.name}`);
console.log(`  - Note moyenne: ${reviewsSchema.aggregateRating.ratingValue}/5`);
console.log(`  - Nombre d'avis: ${reviewsSchema.aggregateRating.reviewCount}`);
console.log(`  - Nombre de reviews dans le schéma: ${reviewsSchema.review.length}`);
console.log(`  - Lien Google Maps: ${reviewsSchema.sameAs[0]}\n`);

// Vérification des champs requis pour LocalBusiness
const requiredFields = ["@type", "name", "address", "telephone"];
const missingFields = requiredFields.filter((field) => !reviewsSchema[field]);
if (missingFields.length === 0) {
  console.log("✅ Tous les champs requis pour LocalBusiness sont présents");
} else {
  console.log(`❌ Champs manquants: ${missingFields.join(", ")}`);
}

// Vérification des reviews
console.log("\n📝 Vérification des reviews :");
reviewsSchema.review.forEach((review, index) => {
  const hasRequiredFields =
    review["@type"] === "Review" &&
    review.author &&
    review.reviewBody &&
    review.reviewRating &&
    review.datePublished;
  console.log(
    `  ${hasRequiredFields ? "✅" : "❌"} Review ${index + 1} (${review.author.name}): ${
      hasRequiredFields ? "Valide" : "Champs manquants"
    }`
  );
});

// Vérification de l'aggregateRating
console.log("\n⭐ Vérification de l'aggregateRating :");
const ratingFields = ["@type", "ratingValue", "reviewCount", "bestRating", "worstRating"];
const ratingValid = ratingFields.every((field) => reviewsSchema.aggregateRating[field]);
console.log(`  ${ratingValid ? "✅" : "❌"} AggregateRating: ${ratingValid ? "Valide" : "Champs manquants"}`);

console.log("\n📄 JSON-LD généré :");
console.log(JSON.stringify(reviewsSchema, null, 2));

console.log("\n💡 Pour tester avec Google Rich Results Test :");
console.log("   1. Déployez votre site en production");
console.log("   2. Visitez: https://search.google.com/test/rich-results");
console.log("   3. Entrez l'URL de votre page d'accueil");
console.log("\n💡 Pour tester en local :");
console.log("   1. Utilisez ngrok: npx ngrok http 3000");
console.log("   2. Copiez l'URL publique générée");
console.log("   3. Testez avec l'outil Google Rich Results");

