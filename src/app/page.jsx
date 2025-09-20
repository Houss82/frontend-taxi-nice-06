import About from "@/components/About.jsx";
import Footer from "@/components/Footer.jsx";
import Hero from "@/components/Hero.jsx";
import Navbar from "@/components/Navbar.jsx";
import QuickBooking from "@/components/QuickBooking.jsx";
import Services from "@/components/Services.jsx";
import VehicleSelection from "@/components/VehicleSelection.jsx";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <VehicleSelection />
        <QuickBooking />
      </main>
      <Footer />
    </>
  );
}
