"use client";

import { useState } from "react";
import MockupProductCard from "../../components/mockupProductCard";

// Updated product data
const PRODUCTS = [
  {
    id: "eco-giftkit-1",
    title: "Corporate Gift kit",
    description: "Eco friendly gift kit with sustainable items.",
    price: 19.99,
    image: "/images/gift kit1.png",
    category: "Gift Kit",
    tags: ["Gift", "Kit", "Eco-friendly"],
  },
  {
    id: "eco-giftkit-2",
    title: "Light colour gift kit",
    description: "Eco friendly gift kit with premium sustainable products.",
    price: 21.99,
    image: "/images/giftkit2.png",
    category: "Gift Kit",
    tags: ["Gift", "Kit", "Premium"],
  },
  {
    id: "eco-giftkit-3",
    title: "Gift Kit ",
    description: "kit with a variety of eco-friendly items.",
    price: 22.99,
    image: "/images/gitft kit3.png",
    category: "Gift Kit",
    tags: ["Gift", "Kit", "Variety"],
  },
  {
    id: "eco-jutefile-1",
    title: "Premium Jute File",
    description: "made by talented artisans",
    price: 8.99,
    image: "/images/files1.jpg",
    category: "Stationery",
    tags: ["Jute", "File", "Eco-friendly"],
  },
  {
    id: "eco-jutefile-2",
    title: "Hand crafted jute File",
    description:
      "Eco-friendly jute file for office and school use to keep your files safely.",
    price: 8.99,
    image: "/images/bag19.jpg",
    category: "Stationery",
    tags: ["Jute", "File", "Office"],
  },
  {
    id: "eco-jutefile-3",
    title: "Jute File 3",
    description: "Premium jute file for sustainable organization.",
    price: 9.99,
    image: "/images/jutefile3.png",
    category: "Stationery",
    tags: ["Jute", "File", "Premium"],
  },
  {
    id: "eco-schoolbag-1",
    title: "Grey canvas bag",
    description:
      "eco-friendly school bag made from durable canvas for everyday use",
    price: 24.99,
    image: "/images/school bag.png",
    category: "School",
    tags: ["School", "Bag", "Eco-friendly"],
  },
  {
    id: "eco-schoolbag-3",
    title: "Dark canvas bag",
    description: "Premium dark colour eco friendly bag. Made of canvas",
    price: 27.99,
    image: "/images/schoolbag3.png",
    category: "School",
    tags: ["School", "Bag", "Premium"],
  },
  {
    id: "eco-schoolbag-4",
    title: "Light canvas bag",
    description:
      "Stylish and eco-friendly light colour school bag for students. Made of canvas",
    price: 26.99,
    image: "/images/schoolbag4.png",
    category: "School",
    tags: ["School", "Bag", "Stylish"],
  },
  {
    id: "eco-gift-premium-1",
    title: "Midnight Navy Canvas Bag",
    description: "Perfect for colleges that don’t settle for average.",
    price: 14.99,
    image: "/images/bag18.jpg",
    category: "Gift",
    tags: ["Premium", "Elegant", "Occasion"],
  },
  {
    id: "eco-gift-collection-1",
    title: "Dark green bag of Canvas",
    description:
      "For students who think ahead—carry purpose, not just textbooks",
    price: 24.99,
    image: "/images/bag17.jpg",
    category: "Gift",
    tags: ["Collection", "Elegant", "Gold"],
  },
  {
    id: "eco-jewellery-premium-3",
    title: "Premium Dark Blue Canvas bag",
    description:
      "Crafted from premium canvas to match the hustle of those who refuse to blend in",
    price: 18.99,
    image: "/images/bag16.jpg",
    category: "Gift",
    tags: ["Green", "Gold", "Luxury"],
  },
  {
    id: "eco-jewellery-premium-4",
    title: "Luxury Jute Jewellery Tote",
    description:
      "Handcrafted jute jewelry tote with premium finishes. Sustainable luxury for high-end jewelry retailers.",
    price: 22.99,
    image: "/images/jewellery jute bag.jpeg",
    category: "Jewellery",
    tags: ["Jute", "Sustainable", "Luxury"],
  },
  {
    id: "eco-accessories-2",
    title: "Travel Pouch",
    description:
      "Compact travel pouch with multiple compartments to keep your valuables organized and protected.",
    price: 29.99,
    image: "/images/bag15(shoes).jpeg",
    category: "Accessories",
    tags: ["Jewelry", "Travel", "Organization"],
  },
  {
    id: "eco-optical-2",
    title: "Sunglasses Pouch",
    description:
      "Soft microfiber sunglasses pouch that provides protection and doubles as a cleaning cloth.",
    price: 9.99,
    image: "/images/bag9(opticals).jpeg",
    category: "Accessories",
    tags: ["Sunglasses", "Microfiber", "Protection"],
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
              <MockupProductCard
                key={product.id}
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