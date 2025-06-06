import { useState } from "react";
import Icon from "@/components/ui/icon";

const ProductCatalog = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const [roastFilter, setRoastFilter] = useState("all");
  const [brewMethodFilter, setBrewMethodFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Эфиопия Йиргачеффе",
      price: 1200,
      category: "beans",
      roast: "medium",
      brewMethod: "espresso",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
      description: "Яркий фруктовый вкус с цитрусовыми нотами",
      rating: 4.8,
      popularity: 95,
      isNew: false,
      inStock: true,
      region: "Эфиопия",
      taste: "Цитрус, ягоды",
    },
    {
      id: 2,
      name: "Эспрессо классический",
      price: 180,
      category: "drinks",
      roast: "dark",
      brewMethod: "espresso",
      image:
        "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400",
      description: "Классический эспрессо с насыщенным вкусом",
      rating: 4.9,
      popularity: 100,
      isNew: false,
      inStock: true,
    },
    {
      id: 3,
      name: "Капучино",
      price: 220,
      category: "drinks",
      roast: "medium",
      brewMethod: "espresso",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400",
      description: "Эспрессо с взбитым молоком",
      rating: 4.7,
      popularity: 90,
      isNew: false,
      inStock: true,
    },
    {
      id: 4,
      name: "Латте",
      price: 250,
      category: "drinks",
      roast: "medium",
      brewMethod: "espresso",
      image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400",
      description: "Нежный кофе с молоком и пенкой",
      rating: 4.6,
      popularity: 85,
      isNew: false,
      inStock: true,
    },
    {
      id: 5,
      name: "Бабл кофе",
      price: 320,
      category: "drinks",
      roast: "medium",
      brewMethod: "cold",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      description: "Взбитый холодный кофе с молоком",
      rating: 4.4,
      popularity: 70,
      isNew: true,
      inStock: true,
    },
    {
      id: 6,
      name: "Айс кофе",
      price: 280,
      category: "drinks",
      roast: "medium",
      brewMethod: "cold",
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400",
      description: "Освежающий холодный кофе",
      rating: 4.5,
      popularity: 75,
      isNew: false,
      inStock: true,
    },
    {
      id: 7,
      name: "Раф кофе",
      price: 290,
      category: "drinks",
      roast: "medium",
      brewMethod: "espresso",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
      description: "Кофе со сливками и ванилью",
      rating: 4.3,
      popularity: 65,
      isNew: false,
      inStock: true,
    },
    {
      id: 8,
      name: "Колумбия Супремо (пакет 250г)",
      price: 950,
      category: "packaged",
      roast: "medium",
      brewMethod: "any",
      image:
        "https://images.unsplash.com/photo-1587734195503-904fca47e0d9?w=400",
      description: "Сбалансированный вкус с шоколадными нотами",
      rating: 4.7,
      popularity: 88,
      isNew: false,
      inStock: true,
      region: "Колумбия",
      taste: "Шоколад, орехи",
    },
    {
      id: 9,
      name: "Бразилия Сантос (пакет 500г)",
      price: 1400,
      category: "packaged",
      roast: "dark",
      brewMethod: "any",
      image:
        "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?w=400",
      description: "Классический бразильский кофе",
      rating: 4.5,
      popularity: 80,
      isNew: false,
      inStock: true,
      region: "Бразилия",
      taste: "Карамель, какао",
    },
    {
      id: 10,
      name: "Кофемолка Baratza Encore",
      price: 15000,
      category: "accessories",
      roast: "",
      brewMethod: "",
      image:
        "https://images.unsplash.com/photo-1523709272011-5d8fb91ecc65?w=400",
      description: "Профессиональная кофемолка для дома",
      rating: 4.9,
      popularity: 60,
      isNew: false,
      inStock: true,
    },
    {
      id: 11,
      name: "Темпер для эспрессо",
      price: 2500,
      category: "accessories",
      roast: "",
      brewMethod: "",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
      description: "Профессиональный темпер 58мм",
      rating: 4.6,
      popularity: 45,
      isNew: true,
      inStock: true,
    },
    {
      id: 12,
      name: "Молочник для капучино",
      price: 1200,
      category: "accessories",
      roast: "",
      brewMethod: "",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400",
      description: "Стальной молочник 600мл",
      rating: 4.4,
      popularity: 55,
      isNew: false,
      inStock: true,
    },
  ];

  const filters = [
    { key: "all", label: "Все товары" },
    { key: "drinks", label: "Напитки" },
    { key: "beans", label: "Зерновой кофе" },
    { key: "packaged", label: "Кофе в пакетах" },
    { key: "accessories", label: "Аксессуары" },
  ];

  const roastFilters = [
    { key: "all", label: "Любая обжарка" },
    { key: "light", label: "Светлая" },
    { key: "medium", label: "Средняя" },
    { key: "dark", label: "Темная" },
  ];

  const brewMethodFilters = [
    { key: "all", label: "Любой способ" },
    { key: "espresso", label: "Эспрессо" },
    { key: "filter", label: "Фильтр" },
    { key: "cold", label: "Холодное приготовление" },
    { key: "any", label: "Универсальный" },
  ];

  const sortOptions = [
    { key: "popularity", label: "По популярности" },
    { key: "price-low", label: "По цене (возрастание)" },
    { key: "price-high", label: "По цене (убывание)" },
    { key: "rating", label: "По рейтингу" },
    { key: "newest", label: "Новинки" },
  ];

  let filteredProducts = products.filter((product) => {
    const categoryMatch =
      activeFilter === "all" || product.category === activeFilter;
    const roastMatch = roastFilter === "all" || product.roast === roastFilter;
    const brewMethodMatch =
      brewMethodFilter === "all" || product.brewMethod === brewMethodFilter;
    return categoryMatch && roastMatch && brewMethodMatch;
  });

  // Сортировка
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.isNew ? 1 : -1;
      case "popularity":
      default:
        return b.popularity - a.popularity;
    }
  });

  return (
    <section id="catalog" className="py-16 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-coffee-dark text-center mb-12 font-montserrat">
          Наш каталог
        </h2>

        {/* Фильтры и сортировка */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Категория
              </label>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeFilter === filter.key
                        ? "bg-coffee-dark text-cream"
                        : "bg-gray-100 text-gray-700 hover:bg-coffee-light"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Обжарка
              </label>
              <select
                value={roastFilter}
                onChange={(e) => setRoastFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-medium"
              >
                {roastFilters.map((filter) => (
                  <option key={filter.key} value={filter.key}>
                    {filter.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Способ приготовления
              </label>
              <select
                value={brewMethodFilter}
                onChange={(e) => setBrewMethodFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-medium"
              >
                {brewMethodFilters.map((filter) => (
                  <option key={filter.key} value={filter.key}>
                    {filter.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Сортировка
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-medium"
              >
                {sortOptions.map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Результаты */}
        <div className="mb-6">
          <p className="text-gray-600">
            Найдено товаров:{" "}
            <span className="font-semibold">{filteredProducts.length}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-3 py-1 rounded">
                      Нет в наличии
                    </span>
                  </div>
                )}
                {product.isNew && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-coffee-dark px-3 py-1 rounded text-sm font-medium">
                      Новинка
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Icon
                      name="Heart"
                      size={20}
                      className="text-gray-600 hover:text-red-500"
                    />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    <Icon
                      name="Star"
                      size={16}
                      className="text-gold fill-current"
                    />
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating}
                    </span>
                  </div>
                  {product.region && (
                    <span className="text-xs bg-coffee-light text-coffee-dark px-2 py-1 rounded">
                      {product.region}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-coffee-dark mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {product.description}
                </p>

                {product.taste && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-1">Вкусовые ноты:</p>
                    <p className="text-sm text-coffee-medium">
                      {product.taste}
                    </p>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-coffee-dark">
                    {product.price}₽
                  </span>
                  <button
                    className="bg-gold text-coffee-dark px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors flex items-center gap-2 disabled:opacity-50"
                    disabled={!product.inStock}
                  >
                    <Icon name="ShoppingCart" size={16} />В корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
