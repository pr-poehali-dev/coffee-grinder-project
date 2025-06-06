import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";

const CatalogPage = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="pt-8">
        <ProductCatalog />
      </div>
      <Footer />
    </div>
  );
};

export default CatalogPage;
