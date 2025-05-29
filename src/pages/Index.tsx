import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ProductCatalog from "@/components/ProductCatalog";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <HeroSection />
      <ProductCatalog />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
