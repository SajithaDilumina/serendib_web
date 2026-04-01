import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ScrollPanels from "../components/ScrollPanels";
import ScaleSection from "../components/ScaleSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import Pricing from "./Pricing";
import heroBackground from "../assets/background_image.png";

export default function Home() {
  return (
    <div id="home" className="relative min-h-screen min-w-0 max-w-full overflow-x-hidden">
      <Navbar />

      <main className="relative z-10 pt-(--navbar-height)">
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-[#020606] bg-cover bg-position-[center_top] bg-no-repeat"
            style={{ backgroundImage: `url(${heroBackground})` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-linear-to-r from-black/40 via-black/22 to-black/28"
            aria-hidden
          />
          <div className="relative z-10">
            <Hero />
          </div>
        </section>
        <ScrollPanels />
        <ScaleSection />
        <Pricing />
        <TestimonialsSection />
        <Footer />
      </main>
    </div>
  );
}
