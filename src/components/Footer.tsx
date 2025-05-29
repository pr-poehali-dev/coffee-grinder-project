import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-cream py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Icon name="Coffee" size={24} className="text-gold" />
              <span className="text-xl font-bold font-montserrat">
                COFFEE GRINDER
              </span>
            </div>
            <p className="text-cream/80 mb-4">
              Лучший кофе для настоящих ценителей. Качество, проверенное
              временем.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                size={24}
                className="text-gold hover:text-yellow-400 cursor-pointer"
              />
              <Icon
                name="Facebook"
                size={24}
                className="text-gold hover:text-yellow-400 cursor-pointer"
              />
              <Icon
                name="Twitter"
                size={24}
                className="text-gold hover:text-yellow-400 cursor-pointer"
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-cream/80">
              <li>
                <a href="#" className="hover:text-gold">
                  Зерновой кофе
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">
                  Молотый кофе
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">
                  Кофейные капсулы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">
                  Аксессуары
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-cream/80">
              <li>
                <a href="#" className="hover:text-gold">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">
                  Возврат товара
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">
                  Программа лояльности
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-cream/80">
              <p className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@coffeegrinder.ru
              </p>
              <p className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                ул. Кофейная, 123, Москва
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center text-cream/60">
          <p>&copy; 2024 Coffee Grinder. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
