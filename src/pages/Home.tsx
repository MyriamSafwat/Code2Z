import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import Testimonials from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
// import App from "../App";

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}