import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const CertificatesPage = () => {
  const [amount, setAmount] = useState(1000);
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [message, setMessage] = useState("");

  const predefinedAmounts = [500, 1000, 2000, 5000];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-coffee-dark text-center mb-8 font-montserrat">
            Подарочные сертификаты
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-coffee-dark mb-6">
                Создать сертификат
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сумма сертификата
                  </label>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {predefinedAmounts.map((preAmount) => (
                      <button
                        key={preAmount}
                        onClick={() => setAmount(preAmount)}
                        className={`p-3 rounded-lg text-center font-medium transition-colors ${
                          amount === preAmount
                            ? "bg-coffee-dark text-cream"
                            : "bg-gray-100 hover:bg-coffee-light"
                        }`}
                      >
                        {preAmount}₽
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-medium"
                    placeholder="Введите сумму"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя получателя
                  </label>
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-medium"
                    placeholder="Введите имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email получателя
                  </label>
                  <input
                    type="email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-medium"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Поздравительное сообщение
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-medium"
                    placeholder="Ваше поздравление..."
                  />
                </div>

                <button className="w-full bg-gold text-coffee-dark py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                  <Icon name="Gift" size={20} />
                  Создать сертификат на {amount}₽
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-coffee-dark mb-6">
                Предварительный просмотр
              </h2>

              <div className="bg-gradient-to-r from-coffee-dark to-coffee-medium p-8 rounded-lg text-cream relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Icon name="Gift" size={32} className="text-gold" />
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Icon name="Coffee" size={24} className="text-gold" />
                    <span className="text-lg font-bold">COFFEE GRINDER</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    Подарочный сертификат
                  </h3>
                  <div className="text-4xl font-bold text-gold mb-4">
                    {amount}₽
                  </div>

                  {recipientName && (
                    <p className="text-lg mb-2">Для: {recipientName}</p>
                  )}

                  {message && (
                    <div className="bg-white/10 p-4 rounded-lg mt-4">
                      <p className="text-sm italic">"{message}"</p>
                    </div>
                  )}

                  <div className="mt-6 text-sm text-cream/80">
                    Действителен в течение 12 месяцев
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gold/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Star" size={20} className="text-coffee-dark" />
                  <span className="font-semibold">
                    Бонус за покупку сертификата
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Получите {Math.floor(amount / 20)} баллов в программе
                  лояльности
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

export default CertificatesPage;
