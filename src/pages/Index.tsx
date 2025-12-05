import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SampleWorksSection } from "@/components/SampleWorksSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        element?.scrollIntoView({ behavior: "smooth" });
        // Clear the state after scrolling
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SampleWorksSection />
        <FeaturesSection />
        <AboutSection />
        <ServicesSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
