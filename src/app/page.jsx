import About from "@/components/About.jsx";
import Footer from "@/components/Footer.jsx";
import Hero from "@/components/Hero.jsx";
import Navbar from "@/components/Navbar.jsx";
import QuickBooking from "@/components/QuickBooking.jsx";
import SeoContent from "@/components/SeoContent.jsx";
import ServicesCarousel from "@/components/Services-Caroussel.jsx";
import Services from "@/components/Services.jsx";
import VehicleSelection from "@/components/VehicleSelection.jsx";
import { loadTranslations } from "@/lib/translations.js";

/**
 * Page d'accueil avec traductions préchargées côté serveur
 * Cela évite le flash de contenu avec les clés de traduction
 */
export default async function Page() {
  // Précharger les traductions côté serveur
  const initialTranslations = await loadTranslations("fr");

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ServicesCarousel />
        <SeoContent />
        <About />
        <VehicleSelection />
        <QuickBooking />
      </main>
      <Footer />
    </>
  );
}
