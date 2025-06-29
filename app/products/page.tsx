"use client";

import { useState } from "react";
import ProductCard from "../../components/productCard";

// Sample product data
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
    title: "Light Colour Jute File ",
    description: "Sustainable jute file for documents and papers.",
    price: 8.99,
    image: "/images/jutefile1.png",
    category: "Stationery",
    tags: ["Jute", "File", "Eco-friendly"],
  },
  {
    id: "eco-jutefile-2",
    title: "Dark Colour Jute File ",
    description:
      "Eco-friendly jute file for office and school use to keep your files safely.",
    price: 8.99,
    image: "/images/jutefile2.png",
    category: "Stationery",
    tags: ["Jute", "File", "Office"],
  },
  {
    id: "eco-jutefile-3",
    title: " Jute File 3",
    description: "Premium jute file for sustainable organization.",
    price: 9.99,
    image: "/images/jutefile3.png",
    category: "Stationery",
    tags: ["Jute", "File", "Premium"],
  },
  {
    id: "eco-schoolbag-1",
    title: " Grey canvas bag",
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
    title: "light canvas bag ",
    description:
      "Stylish and eco-friendly light colour school bag for students. Made of canvas",
    price: 26.99,
    image: "/images/schoolbag4.png",
    category: "School",
    tags: ["School", "Bag", "Stylish"],
  },
  {
    id: "eco-gift-premium-1",
    title: "Premium Gift Bag",
    description:
      "Elegant gift bag with satin ribbon and gradient design. Perfect for special occasions and luxury presentations.Made of canvas",
    price: 14.99,
    image: "/images/gift bag1.jpeg",
    category: "Gift",
    tags: ["Premium", "Elegant", "Occasion"],
  },

  {
    id: "eco-gift-collection-1",
    title: "Gift Bag Collection",
    description:
      "Elegant white gift bags with gold accents. Comes in different sizes for various gifting needs.",
    price: 24.99,
    image: "/images/gifts bags.jpeg",
    category: "Gift",
    tags: ["Collection", "Elegant", "Gold"],
  },

  {
    id: "eco-jewellery-premium-3",
    title: "Emerald Jewellery Shopping Bag",
    description:
      "Deep green jewellery shopping bag with gold accents. Elegant and eco-friendly option for luxury jewelry stores.",
    price: 18.99,
    image: "/images/jwewllerybag1.jpeg",
    category: "Jewellery",
    tags: ["Green", "Gold", "Luxury"],
  },
  {
    id: "eco-jewellery-premium-4",
    title: "Luxury Jute Jewelry Tote",
    description:
      "Handcrafted jute jewelry tote with premium finishes. Sustainable luxury for high-end jewelry retailers.",
    price: 22.99,
    image: "/images/jewellery jute bag.jpeg",
    category: "Jewellery",
    tags: ["Jute", "Sustainable", "Luxury"],
  },
  {
    id: "eco-accessories-2",
    title: "Jewelry Travel Pouch",
    description:
      "Compact jewelry travel pouch with multiple compartments to keep your valuables organized and protected.",
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

  // Filter products based on category and search query
  const filteredProducts = PRODUCTS.filter((product) => {
    // Category filter
    if (categoryFilter && product.category !== categoryFilter) {
      return false;
    }

    // Search query filter
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
    <div className="container-custom py-8 md:py-12 px-4 md:px-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-eco-green-800 mb-2">
        Our Products
      </h1>
      <p className="text-sm md:text-base text-eco-green-700 mb-6 md:mb-8 max-w-3xl">
        Browse our collection of eco-friendly, sustainable bags made with
        ethically sourced materials. Perfect for businesses looking to reduce
        their environmental impact.
      </p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 md:mb-8 items-start md:items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setCategoryFilter(null)}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm md:text-base transition-colors ${
              categoryFilter === null
                ? "bg-eco-green-500 text-white"
                : "bg-eco-green-100 text-eco-green-800 hover:bg-eco-green-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setCategoryFilter("Jewellery")}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm md:text-base transition-colors ${
              categoryFilter === "Jewellery"
                ? "bg-eco-green-500 text-white"
                : "bg-eco-green-100 text-eco-green-800 hover:bg-eco-green-200"
            }`}
            id="jewellery"
          >
            Jewellery Bags
          </button>
          <button
            onClick={() => setCategoryFilter("Clothing")}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm md:text-base transition-colors ${
              categoryFilter === "Clothing"
                ? "bg-eco-green-500 text-white"
                : "bg-eco-green-100 text-eco-green-800 hover:bg-eco-green-200"
            }`}
            id="clothing"
          >
            Clothing Bags
          </button>
          <button
            onClick={() => setCategoryFilter("Shopping")}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm md:text-base transition-colors ${
              categoryFilter === "Shopping"
                ? "bg-eco-green-500 text-white"
                : "bg-eco-green-100 text-eco-green-800 hover:bg-eco-green-200"
            }`}
            id="shopping"
          >
            Shopping Bags
          </button>
          <button
            onClick={() => setCategoryFilter("Gift")}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm md:text-base transition-colors ${
              categoryFilter === "Gift"
                ? "bg-eco-green-500 text-white"
                : "bg-eco-green-100 text-eco-green-800 hover:bg-eco-green-200"
            }`}
            id="gift"
          >
            Gift Bags
          </button>
          <button
            onClick={() => setCategoryFilter("Accessories")}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm md:text-base transition-colors ${
              categoryFilter === "Accessories"
                ? "bg-eco-green-500 text-white"
                : "bg-eco-green-100 text-eco-green-800 hover:bg-eco-green-200"
            }`}
            id="accessories"
          >
            Accessories
          </button>
        </div>

        <div className="w-full md:w-auto mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green-500 focus:border-eco-green-500"
          />
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
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
        <div className="text-center py-8 md:py-12">
          <p className="text-base md:text-lg text-gray-600">
            No products match your filters. Try a different search or category.
          </p>
          <button
            onClick={() => {
              setCategoryFilter(null);
              setSearchQuery("");
            }}
            className="mt-4 btn-primary text-sm md:text-base px-4 py-2"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-12 md:mt-16 bg-eco-brown-100 rounded-xl p-6 md:p-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-eco-brown-800 mb-3 md:mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-sm md:text-base text-eco-brown-700 mb-4 md:mb-6 max-w-2xl mx-auto">
          We specialize in creating custom bag designs tailored to your brand
          and specific requirements. From material selection to print design,
          we&apos;ll work with you every step of the way.
        </p>
        <a
          href="/contact"
          className="btn-primary bg-eco-brown-600 hover:bg-eco-brown-700 inline-block text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
        >
          Request Custom Design
        </a>
      </div>
    </div>
  );
}
