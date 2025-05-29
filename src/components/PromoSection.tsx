import Icon from "@/components/ui/icon";

const PromoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-coffee-light to-cream p-8 rounded-lg text-center">
            <Icon
              name="Gift"
              size={48}
              className="text-coffee-dark mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-coffee-dark mb-4">
              Подарочные сертификаты
            </h3>
            <p className="text-gray-700 mb-6">
              Идеальный подарок для любителей кофе. Выберите сумму от 500₽
            </p>
            <button className="bg-coffee-dark text-cream px-6 py-3 rounded-lg hover:bg-coffee-medium transition-colors">
              Купить сертификат
            </button>
          </div>

          <div className="bg-gradient-to-br from-gold/20 to-yellow-100 p-8 rounded-lg text-center">
            <Icon
              name="Percent"
              size={48}
              className="text-coffee-dark mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-coffee-dark mb-4">
              Скидка 15% на первый заказ
            </h3>
            <p className="text-gray-700 mb-6">
              Зарегистрируйтесь и получите скидку на любой товар
            </p>
            <button className="bg-gold text-coffee-dark px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors">
              Получить скидку
            </button>
          </div>

          <div className="bg-gradient-to-br from-coffee-medium/20 to-coffee-light/30 p-8 rounded-lg text-center">
            <Icon
              name="Star"
              size={48}
              className="text-coffee-dark mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-coffee-dark mb-4">
              Программа лояльности
            </h3>
            <p className="text-gray-700 mb-6">
              Копите баллы с каждой покупки и обменивайте на скидки
            </p>
            <button className="bg-coffee-medium text-cream px-6 py-3 rounded-lg hover:bg-coffee-dark transition-colors">
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
