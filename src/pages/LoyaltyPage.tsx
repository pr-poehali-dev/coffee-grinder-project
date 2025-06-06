import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const LoyaltyPage = () => {
  const levels = [
    {
      name: "Бронзовый",
      points: "0-499",
      benefits: ["Накопление баллов", "Уведомления о скидках"],
      color: "bg-orange-100 border-orange-300",
      icon: "Medal",
    },
    {
      name: "Серебряный",
      points: "500-999",
      benefits: [
        "5% скидка",
        "Приоритетная доставка",
        "Персональные предложения",
      ],
      color: "bg-gray-100 border-gray-300",
      icon: "Award",
    },
    {
      name: "Золотой",
      points: "1000-1999",
      benefits: ["10% скидка", "Бесплатная доставка", "Эксклюзивные сорта"],
      color: "bg-yellow-100 border-yellow-300",
      icon: "Crown",
    },
    {
      name: "Платиновый",
      points: "2000+",
      benefits: [
        "15% скидка",
        "VIP поддержка",
        "Дегустации",
        "Персональный консультант",
      ],
      color: "bg-purple-100 border-purple-300",
      icon: "Star",
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-coffee-dark mb-4 font-montserrat">
              Программа лояльности
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Покупайте кофе, накапливайте баллы и получайте эксклюзивные
              преимущества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {levels.map((level) => (
              <div
                key={level.name}
                className={`p-6 rounded-lg border-2 ${level.color}`}
              >
                <div className="text-center mb-4">
                  <Icon
                    name={level.icon as any}
                    size={48}
                    className="text-coffee-dark mx-auto mb-2"
                  />
                  <h3 className="text-xl font-semibold text-coffee-dark">
                    {level.name}
                  </h3>
                  <p className="text-sm text-gray-600">{level.points} баллов</p>
                </div>
                <ul className="space-y-2">
                  {level.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-green-600" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-coffee-dark mb-6 text-center">
              Как это работает?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="ShoppingBag"
                    size={32}
                    className="text-coffee-dark"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">Покупайте</h3>
                <p className="text-gray-600">За каждые 20₽ получайте 1 балл</p>
              </div>
              <div className="text-center">
                <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="TrendingUp"
                    size={32}
                    className="text-coffee-dark"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">Накапливайте</h3>
                <p className="text-gray-600">
                  Повышайте свой статус и открывайте новые привилегии
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gift" size={32} className="text-coffee-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Получайте</h3>
                <p className="text-gray-600">
                  Используйте баллы для скидок и подарков
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LoyaltyPage;
