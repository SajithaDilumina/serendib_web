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
    <div id="home" className="relative min-h-screen">
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[#020606] bg-cover bg-[center_top] bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent"
        aria-hidden
      />

      {/* Stacking colored panels (between hero and navbar in z-order) */}
      <ScrollPanels />

      {/* Fixed home: hero sits under panels; navbar rendered last so it stays on top */}
      <div className="fixed inset-x-0 bottom-0 top-[var(--navbar-height)] z-10 overflow-hidden">
        <Hero />
      </div>

      <Navbar />

      {/* Drives window scroll while the home layer stays fixed */}
      <div className="h-[400vh]" aria-hidden />

      <ScaleSection />
      <Pricing />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
