import { useState } from "react";
import Icon from "@/components/ui/icon";

const ProductCatalog = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const [roastFilter, setRoastFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Эфиопия Йиргачеффе",
      price: 1200,
      category: "beans",
      roast: "medium",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
      description: "Яркий фруктовый вкус с цитрусовыми нотами",
    },
    {
      id: 2,
      name: "Колумбия Супремо",
      price: 950,
      category: "beans",
      roast: "medium",
      image:
        "https://images.unsplash.com/photo-1587734195503-904fca47e0d9?w=400",
      description: "Сбалансированный вкус с шоколадными нотами",
    },
    {
      id: 3,
      name: "Эспрессо-смесь",
      price: 850,
      category: "ground",
      roast: "dark",
      image:
        "https://images.unsplash.com/photo-1586985564150-0d4b98b7a8fc?w=400",
      description: "Идеально для эспрессо машин",
    },
    {
      id: 4,
      name: "Кофемолка Baratza",
      price: 15000,
      category: "accessories",
      roast: "",
      image:
        "https://images.unsplash.com/photo-1523709272011-5d8fb91ecc65?w=400",
      description: "Профессиональная кофемолка для дома",
    },
  ];

  const filters = [
    { key: "all", label: "Все товары" },
    { key: "beans", label: "Зерновой кофе" },
    { key: "ground", label: "Молотый кофе" },
    { key: "accessories", label: "Аксессуары" },
  ];

  const roastFilters = [
    { key: "all", label: "Любая обжарка" },
    { key: "light", label: "Светлая" },
    { key: "medium", label: "Средняя" },
    { key: "dark", label: "Темная" },
  ];

  const sortOptions = [
    { key: "popularity", label: "По популярности" },
    { key: "price-low", label: "По цене (возрастание)" },
    { key: "price-high", label: "По цене (убывание)" },
    { key: "rating", label: "По рейтингу" },
  ];

  let filteredProducts = products.filter((product) => {
    const categoryMatch =
      activeFilter === "all" || product.category === activeFilter;
    const roastMatch = roastFilter === "all" || product.roast === roastFilter;
    return categoryMatch && roastMatch;
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Категория
              </label>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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
