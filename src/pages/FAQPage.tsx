import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const FAQPage = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "Как долго хранится свежеобжаренный кофе?",
      answer:
        "Зерновой кофе сохраняет свои лучшие вкусовые качества в течение 2-4 недель после обжарки при правильном хранении в герметичной упаковке.",
    },
    {
      question: "Какой помол выбрать для моей кофеварки?",
      answer:
        "Для эспрессо-машин - мелкий помол, для френч-пресса - крупный, для турки - сверхмелкий, для капельных кофеварок - средний.",
    },
    {
      question: "Доставляете ли вы кофе в другие города?",
      answer:
        "Да, мы доставляем по всей России. Срок доставки 2-5 рабочих дней в зависимости от региона.",
    },
    {
      question: "Можно ли вернуть товар?",
      answer:
        "Да, вы можете вернуть невскрытую упаковку кофе в течение 14 дней с момента покупки.",
    },
    {
      question: "Как использовать подарочный сертификат?",
      answer:
        "При оформлении заказа введите номер сертификата в специальное поле. Сумма сертификата будет автоматически списана.",
    },
    {
      question: "Есть ли у вас программа лояльности?",
      answer:
        "Да, при каждой покупке вы получаете 5% от суммы заказа в виде бонусных баллов, которые можно потратить на следующие покупки.",
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-coffee-dark text-center mb-8 font-montserrat">
            Часто задаваемые вопросы
          </h1>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenQuestion(openQuestion === index ? null : index)
                  }
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-coffee-dark">
                    {faq.question}
                  </span>
                  <Icon
                    name={openQuestion === index ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    className="text-coffee-medium"
                  />
                </button>
                {openQuestion === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm text-center">
            <Icon
              name="MessageCircle"
              size={48}
              className="text-coffee-dark mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-coffee-dark mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-gray-600 mb-6">
              Свяжитесь с нами любым удобным способом, и мы обязательно поможем!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-coffee-dark text-cream px-6 py-3 rounded-lg hover:bg-coffee-medium transition-colors flex items-center gap-2">
                <Icon name="Phone" size={20} />
                +7 (495) 123-45-67
              </button>
              <button className="bg-gold text-coffee-dark px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors flex items-center gap-2">
                <Icon name="Mail" size={20} />
                info@coffeegrinder.ru
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
