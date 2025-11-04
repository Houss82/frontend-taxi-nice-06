import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import Link from "next/link";

export const metadata = {
  title: "Article non trouvé | Taxi Nice Côte d'Azur",
  description: "L'article que vous recherchez n'existe pas.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://taxi-nice-06.com/blog",
  },
};

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Article non trouvé
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          L'article que vous recherchez n'existe pas ou a été supprimé.
        </p>
        <Link
          href="/blog"
          className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primaryDark transition-colors"
        >
          Retour au blog
        </Link>
      </div>
      <Footer />
    </div>
  );
}
