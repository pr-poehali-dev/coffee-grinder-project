import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-coffee-dark to-coffee-medium text-cream py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-6">
          Мастерство в каждом зерне
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Откройте для себя вкус премиального кофе от лучших плантаций мира.
          Свежая обжарка, профессиональные советы и доставка прямо к вашему
          дому.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-gold text-coffee-dark px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center gap-2">
            <Icon name="ShoppingBag" size={20} />
            Каталог кофе
          </button>
          <button className="border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-coffee-dark transition-colors">
            Подробнее о нас
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <Icon name="Truck" size={48} className="text-gold mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
            <p className="text-cream/80">По Москве за 2-4 часа</p>
          </div>
          <div className="text-center">
            <Icon name="Award" size={48} className="text-gold mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Премиум качество</h3>
            <p className="text-cream/80">Только отборные зерна</p>
          </div>
          <div className="text-center">
            <Icon name="Users" size={48} className="text-gold mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Экспертная поддержка</h3>
            <p className="text-cream/80">Профессиональные советы</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
