import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Мок данные пользователя
  const user = {
    name: "Анна Петрова",
    email: "anna@example.com",
    loyaltyPoints: 1250,
    nextReward: 1500,
    level: "Золотой",
  };

  const orders = [
    {
      id: "001",
      date: "15.11.2024",
      total: 890,
      status: "Доставлен",
      points: 45,
    },
    {
      id: "002",
      date: "28.10.2024",
      total: 1200,
      status: "Доставлен",
      points: 60,
    },
    {
      id: "003",
      date: "12.10.2024",
      total: 650,
      status: "Доставлен",
      points: 32,
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-4xl font-bold text-coffee-dark text-center mb-8 font-montserrat">
            Личный кабинет
          </h1>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full text-left p-3 rounded-lg flex items-center gap-3 ${
                    activeTab === "profile"
                      ? "bg-coffee-dark text-cream"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Icon name="User" size={20} />
                  Профиль
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full text-left p-3 rounded-lg flex items-center gap-3 ${
                    activeTab === "orders"
                      ? "bg-coffee-dark text-cream"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Icon name="Package" size={20} />
                  Заказы
                </button>
                <button
                  onClick={() => setActiveTab("loyalty")}
                  className={`w-full text-left p-3 rounded-lg flex items-center gap-3 ${
                    activeTab === "loyalty"
                      ? "bg-coffee-dark text-cream"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Icon name="Star" size={20} />
                  Баллы
                </button>
              </nav>
            </div>

            <div className="md:col-span-3">
              {activeTab === "profile" && (
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold text-coffee-dark mb-6">
                    Информация о профиле
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Имя
                      </label>
                      <input
                        type="text"
                        value={user.name}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={user.email}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        readOnly
                      />
                    </div>
                    <div className="bg-gold/20 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="Crown" size={24} className="text-gold" />
                        <span className="font-semibold text-coffee-dark">
                          Статус: {user.level}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Баллов: {user.loyaltyPoints} / {user.nextReward}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "orders" && (
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold text-coffee-dark mb-6">
                    История заказов
                  </h2>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-semibold">
                              Заказ #{order.id}
                            </div>
                            <div className="text-sm text-gray-600">
                              {order.date}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">{order.total}₽</div>
                            <div className="text-sm text-green-600">
                              +{order.points} баллов
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "loyalty" && (
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold text-coffee-dark mb-6">
                    Программа лояльности
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-gold to-yellow-400 p-6 rounded-lg text-coffee-dark">
                      <div className="text-3xl font-bold mb-2">
                        {user.loyaltyPoints}
                      </div>
                      <div className="text-lg">Ваши баллы</div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span>До следующего уровня</span>
                        <span>
                          {user.nextReward - user.loyaltyPoints} баллов
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gold h-3 rounded-full"
                          style={{
                            width: `${(user.loyaltyPoints / user.nextReward) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border p-4 rounded-lg text-center">
                        <Icon
                          name="Gift"
                          size={32}
                          className="text-gold mx-auto mb-2"
                        />
                        <div className="font-semibold">Скидка 10%</div>
                        <div className="text-sm text-gray-600">
                          от 500 баллов
                        </div>
                      </div>
                      <div className="border p-4 rounded-lg text-center">
                        <Icon
                          name="Coffee"
                          size={32}
                          className="text-gold mx-auto mb-2"
                        />
                        <div className="font-semibold">Бесплатный кофе</div>
                        <div className="text-sm text-gray-600">
                          от 1000 баллов
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfilePage;
