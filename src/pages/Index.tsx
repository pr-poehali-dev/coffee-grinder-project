import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ProductCatalog from "@/components/ProductCatalog";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import PromoSection from "@/components/PromoSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <HeroSection />
      <PromoSection />
      <ProductCatalog />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
