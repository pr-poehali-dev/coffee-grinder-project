import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-coffee-dark mb-6 font-montserrat">
              О кофейне Coffee Grinder
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Мы — команда кофейных энтузиастов, которая уже более 10 лет
              занимается поиском и обжаркой лучших кофейных зерен со всего мира.
              Наша миссия — делиться любовью к качественному кофе с каждым нашим
              клиентом.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              В нашем ассортименте только отборные сорта арабики и робусты,
              тщательно отобранные на лучших плантациях Эфиопии, Колумбии,
              Бразилии и других кофейных регионов.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-coffee-dark">500+</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-coffee-dark">50+</div>
                <div className="text-gray-600">Сортов кофе</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
              alt="Coffee shop interior"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-lg">
              <Icon
                name="Award"
                size={48}
                className="text-coffee-dark mx-auto mb-2"
              />
              <div className="text-coffee-dark font-semibold text-center">
                Лучший кофе 2024
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-coffee-light p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-coffee-dark mb-6 text-center">
            Наши контакты
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon
                name="MapPin"
                size={32}
                className="text-gold mx-auto mb-4"
              />
              <h4 className="font-semibold text-coffee-dark mb-2">Адрес</h4>
              <p className="text-gray-700">
                ул. Кофейная, 123
                <br />
                Москва, 109012
              </p>
            </div>
            <div>
              <Icon name="Phone" size={32} className="text-gold mx-auto mb-4" />
              <h4 className="font-semibold text-coffee-dark mb-2">Телефон</h4>
              <p className="text-gray-700">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="Clock" size={32} className="text-gold mx-auto mb-4" />
              <h4 className="font-semibold text-coffee-dark mb-2">
                Режим работы
              </h4>
              <p className="text-gray-700">Пн-Вс: 8:00 - 22:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
