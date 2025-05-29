import { useState } from "react";
import Icon from "@/components/ui/icon";

const ProductCatalog = () => {
  const [activeFilter, setActiveFilter] = useState("all");

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

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <section id="catalog" className="py-16 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-coffee-dark text-center mb-12 font-montserrat">
          Наш каталог
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeFilter === filter.key
                  ? "bg-coffee-dark text-cream"
                  : "bg-white text-coffee-dark hover:bg-coffee-light"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-coffee-dark mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-coffee-dark">
                    {product.price}₽
                  </span>
                  <button className="bg-gold text-coffee-dark px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors flex items-center gap-2">
                    <Icon name="Plus" size={16} />В корзину
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
