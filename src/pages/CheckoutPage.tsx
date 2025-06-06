import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const CheckoutPage = () => {
  const [cartItems] = useState([
    {
      id: 1,
      name: "Эфиопия Йиргачеффе",
      price: 1200,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=100",
    },
    {
      id: 2,
      name: "Эспрессо-смесь",
      price: 850,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1586985564150-0d4b98b7a8fc?w=100",
    },
  ]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "card",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const delivery = 300;

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-4xl font-bold text-coffee-dark text-center mb-8 font-montserrat">
            Оформление заказа
          </h1>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-coffee-dark mb-4">
                  Контактная информация
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Имя"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-medium"
                  />
                  <input
                    type="text"
                    placeholder="Фамилия"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-medium"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-medium"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-medium"
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-coffee-dark mb-4">
                  Адрес доставки
                </h2>
                <input
                  type="text"
                  placeholder="Адрес"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-medium mb-4"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Город"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-medium"
                  />
                  <input
                    type="text"
                    placeholder="Индекс"
                    value={formData.postalCode}
                    onChange={(e) =>
                      setFormData({ ...formData, postalCode: e.target.value })
                    }
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-medium"
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-coffee-dark mb-4">
                  Способ оплаты
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          paymentMethod: e.target.value,
                        })
                      }
                      className="mr-3"
                    />
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Банковская карта
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          paymentMethod: e.target.value,
                        })
                      }
                      className="mr-3"
                    />
                    <Icon name="Banknote" size={20} className="mr-2" />
                    Наличными при получении
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
              <h2 className="text-xl font-semibold text-coffee-dark mb-4">
                Ваш заказ
              </h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-coffee-dark">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">
                        Количество: {item.quantity}
                      </p>
                    </div>
                    <span className="font-semibold text-coffee-dark">
                      {item.price * item.quantity}₽
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Товары:</span>
                  <span>{total}₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка:</span>
                  <span>{delivery}₽</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Итого:</span>
                  <span>{total + delivery}₽</span>
                </div>
              </div>

              <button className="w-full bg-gold text-coffee-dark py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors mt-6 flex items-center justify-center gap-2">
                <Icon name="ShoppingBag" size={20} />
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
