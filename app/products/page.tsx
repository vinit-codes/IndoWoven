"use client";

import { useState } from "react";
import ProductCard from "../../components/productCard";


// Updated product data
const PRODUCTS = [
  {
    id: "1",
    title: "B File",
    description: "Eco friendly product with sustainable materials.",
    price: 19.99,
    image: "/images/B File.webp",
    category: "General",
    tags: ["Eco-friendly"],
  },

  {
    id: "3",
    title: "Bluebag",
    description: "Eco friendly product with sustainable materials.",
    price: 19.99,
    image: "/images/Bluebag1.webp",
    category: "General",
    tags: ["Eco-friendly"],
  },
  {
    id: "4",
    title: "Bluebox",
    description: "Eco friendly product with sustainable materials.",
    price: 19.99,
    image: "/images/Bluebox1.webp",
    category: "General",
    tags: ["Eco-friendly"],
  },
  {
    id: "5",
    title: "bluelapbag",
    description: "Eco friendly product with sustainable materials.",
    price: 19.99,
    image: "/images/bluelapbag1.webp",
    category: "General",
    tags: ["Eco-friendly"],
  },
  {
    id: "6",
    title: "combobox",
    description: "Eco friendly product with sustainable materials.",
    price: 19.99,
    image: "/images/combobox1.webp",
    category: "General",
    tags: ["Eco-friendly"],
  },
  {
    id: "7",
    title: "Greybag",
    description: "Eco friendly product with sustainable materials.",
    price: 19.99,
    image: "/images/Greybag1.webp",
    category: "General",
    tags: ["Eco-friendly"],
  },
  {
    id: "8",
    title: "IMG_20250430_152315",
    description: "Eco friendly product with sustainable materials.",
    price: 19.99,
    image: "/images/IMG_20250430_152315.webp",
    category: "General",
    tags: ["Eco-friendly"],
  },
  {
    id: "9",
    title: "K File s",
    description: "Eco friendly product with sustainable materials.",
    price: 19.99,
    image: "/images/K File s.webp",
    category: "General",
    tags: ["Eco-friendly"],
  },
  {
    id: "10",
    title: "NAVI H",
    description: "Eco friendly product with sustainable materials.",
    price: 19.99,
    image: "/images/NAVI H.webp",
    category: "General",
    tags: ["Eco-friendly"],
  },

  {
    id: "11",
    title: "purplebag",
    description: "Eco friendly product with sustainable materials.",
    price: 19.99,
    image: "/images/purplebag1.webp",
    category: "General",
    tags: ["Eco-friendly"],
  },
];

export default function ProductsPage() {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = PRODUCTS.filter((product) => {
    if (categoryFilter && product.category !== categoryFilter) return false;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return true;
  });

  return (
    <section className="px-4 md:px-6 py-10 md:py-16 bg-eco-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-eco-green-800">
            Discover Our Eco Collection
          </h1>
          <p className="mt-3 text-md md:text-lg text-eco-green-700 max-w-2xl mx-auto">
            Browse our collection of eco-friendly products crafted from
            ethically sourced materials—perfect for businesses looking to
            elevate their brand image while making a positive environmental
            impact.
          </p>
        </header>

        {/* Filters + Search */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-10">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: "All", value: null },
              { label: "Gift Kits", value: "Gift Kit" },
              { label: "Jute Files", value: "Stationery" },
              { label: "College & School Bags", value: "School" },
              { label: "Premium Canvas Bags", value: "Gift" },
              { label: "Jewellery Bags", value: "Jewellery" },
              { label: "Accessories", value: "Accessories" },
            ].map(({ label, value }) => (
              <button
                key={label}
                onClick={() => setCategoryFilter(value)}
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                  categoryFilter === value
                    ? "bg-eco-green-600 text-white border-eco-green-600"
                    : "bg-white text-eco-green-800 border-eco-green-200 hover:bg-eco-green-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search by name, tags, or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full lg:w-80 px-4 py-2 rounded-lg border border-eco-green-300 text-sm focus:outline-none focus:ring-2 focus:ring-eco-green-500"
            />
          </div>
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                category={product.category}
                tags={product.tags}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products match your filters. Try a different search or
              category.
            </p>
            <button
              onClick={() => {
                setCategoryFilter(null);
                setSearchQuery("");
              }}
              className="mt-6 px-5 py-2 text-sm font-medium bg-eco-green-600 text-white rounded-md hover:bg-eco-green-700"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-eco-brown-100 rounded-2xl p-8 md:p-12 text-center shadow-inner">
          <h2 className="text-2xl md:text-3xl font-bold text-eco-brown-800 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-md md:text-lg text-eco-brown-700 mb-6 max-w-2xl mx-auto">
            We specialize in crafting custom bag designs tailored to your
            brand’s vibe. From materials to branding—we’ll handle everything
            end-to-end.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-eco-brown-700 text-white font-semibold rounded-lg hover:bg-eco-brown-800 transition"
          >
            Request a Custom Design
          </a>
        </div>
      </div>
    </section>
  );
}
