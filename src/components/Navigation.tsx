import { useState } from "react";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-coffee-dark text-cream py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon name="Coffee" size={32} className="text-gold" />
          <span className="text-2xl font-bold font-montserrat">
            COFFEE GRINDER
          </span>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <a href="#catalog" className="hover:text-gold transition-colors">
            Каталог
          </a>
          <a href="#beans" className="hover:text-gold transition-colors">
            Зерновой кофе
          </a>
          <a href="#ground" className="hover:text-gold transition-colors">
            Молотый
          </a>
          <a href="#accessories" className="hover:text-gold transition-colors">
            Аксессуары
          </a>
          <a href="#about" className="hover:text-gold transition-colors">
            О нас
          </a>
          <button className="bg-gold text-coffee-dark px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
            <Icon name="ShoppingCart" size={20} />
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name="Menu" size={24} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="#catalog" className="block py-2 hover:text-gold">
            Каталог
          </a>
          <a href="#beans" className="block py-2 hover:text-gold">
            Зерновой кофе
          </a>
          <a href="#ground" className="block py-2 hover:text-gold">
            Молотый
          </a>
          <a href="#accessories" className="block py-2 hover:text-gold">
            Аксессуары
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
