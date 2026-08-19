import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import EditorialMarquee from "@/components/Marquee";
import { StackedPanels } from "@/components/StackSection";
import Hero from "@/sections/Hero";
import ServicesSection from "@/sections/ServicesSection";
import PortfolioSection from "@/sections/PortfolioSection";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import { setLenis } from "@/lib/scroll";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    setLenis(lenis);
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink font-body antialiased">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <EditorialMarquee />
        <StackedPanels className="pb-[12vh]">
          <ServicesSection />
          <PortfolioSection />
          <AboutSection />
          <ContactSection />
        </StackedPanels>
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default App;
