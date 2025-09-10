"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// Product type definition
interface Product {
  id: string;
  title: string;
  description: string;
    image: string;
  category: string;
  tags: string[];
  variants: string[];
}

// Product data - in a real app, this would come from an API
const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Blue Bag",
    description: "Eco friendly product with sustainable materials.",
    image: "/images/B File.webp",
    category: "General",
    tags: ["Eco-friendly"],
    variants: ["/images/B File.webp", "/images/B File B.webp", "/images/B File C.webp"],
  },
  {
    id: "3",
    title: "Laptop Blue",
    description: "Laptop blue bag made from washed, dyed and smoothened jute/burlap with premium vintage hunter leather accents. Fitted with export-quality hardware and a long-lasting durable YKK zipper. Dimensions: 14.5 x 10 x 2.5 inches.",
    image: "/images/Bluebag3.webp",
    category: "General",
    tags: ["Eco-friendly"],
    variants: ["/images/Bluebag3.webp", "/images/Bluebag2.webp", "/images/Bluebag1.webp"],
  },
  {
    id: "4",
    title: "Blue Utility pouch mini",
    description: "Blue mini utility pouch made from washed, dyed and smoothened jute/burlap with premium vintage hunter leather accents. Fitted with export-quality hardware and a long-lasting durable YKK zipper. Dimensions: 6.5 x 4 x 1.5 inches.",
    image: "/images/Bluebox1.webp",
    category: "General",
    tags: ["Eco-friendly"],
    variants: ["/images/Bluebox1.webp", "/images/Bluebox2.webp", "/images/Bluebox3.webp", "/images/Bluebox4.webp"],
  },
  {
    id: "5",
    title: "bluelapbag",
    description: "Eco friendly product with sustainable materials.",
    image: "/images/bluelapbag1.webp",
    category: "General",
    tags: ["Eco-friendly"],
    variants: ["/images/bluelapbag1.webp"],
  },
  {
    id: "6",
    title: "Utility pouch mini",
    description: "A mini utility pouch made from washed, dyed and smoothened jute/burlap with premium vintage hunter leather accents. Fitted with export-quality hardware and a long-lasting durable YKK zipper. Dimensions: 6.5 x 4 x 1.5 inches.",
    image: "/images/combobox1.webp",
    category: "General",
    tags: ["Eco-friendly"],
    variants: ["/images/combobox1.webp", "/images/combobox2.webp", "/images/combobox4.webp", "/images/combobox5.webp", "/images/combobox6.webp"],
  },
  {
    id: "7",
    title: "Laptop Grey",
    description: "Laptop bag made from washed, dyed and smoothened jute/burlap with premium vintage hunter leather accents. Fitted with export-quality hardware and a long-lasting durable YKK zipper. Dimensions: 14.5 x 10 x 2.5 inches.",
    image: "/images/Greybag1.webp",
    category: "General",
    tags: ["Eco-friendly"],
    variants: ["/images/Greybag1.webp", "/images/Greybag2.webp", "/images/Greybag3.webp"],
  },
  {
    id: "8",
    title: "Utility pouch mini",
    description: "A mini utility pouch made from washed, dyed and smoothened jute/burlap with premium vintage hunter leather accents. Fitted with export-quality hardware and a long-lasting durable YKK zipper. Dimensions: 6.5 x 4 x 1.5 inches.",
    image: "/images/utilitypouch1.webp",
    category: "General",
    tags: ["Eco-friendly"],
    variants: ["/images/utilitypouch1.webp","/images/utilitypouch2.webp","/images/utilitypouch3.webp","/images/utilitypouch4.webp"],
  },
  {
    id: "9",
    title: "Laptop ",
    description: "Eco friendly product with sustainable materials.",
    image: "/images/K File s.webp",
    category: "General",
    tags: ["Eco-friendly"],
    variants: ["/images/K File s.webp"],
  },
  {
    id: "10",
    title: "Laptop Navi blue",
    description: "Washed, dyed and smoothened jute/burlap with premium vintage hunter leather accents. Fitted with export-quality hardware and a long-lasting durable YKK zipper. Dimensions: 14.5 x 10 x 2.5 inches.",
    image: "/images/NAVY H.webp",
    category: "General",
    tags: ["Eco-friendly"],
    variants: ["/images/NAVI H.webp"],
  },
  {
    id: "11",
    title: "Laptop Maroon",
    description: "Stylish laptop bag made from washed, dyed and smoothened jute/burlap with premium vintage hunter leather accents. Fitted with export-quality hardware and a long-lasting durable YKK zipper. Dimensions: 14.5 x 10 x 2.5 inches.",
    image: "/images/purplebag1.webp",
    category: "General",
    tags: ["Eco-friendly"],
    variants: ["/images/purplebag1.webp", "/images/purplebag2.webp"],
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState("");
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const foundProduct = PRODUCTS.find((p) => p.id === params.id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.variants[0]);
    }
  }, [params.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-eco-green-800 mb-4">Product Not Found</h1>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="container-custom py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-eco-green-600">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-eco-green-600">Products</Link>
            <span>/</span>
            <span className="text-eco-green-800 font-medium">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery - Zara Style */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src={selectedImage}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {product.variants.map((variant: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(variant)}
                  className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all ${
                    selectedImage === variant
                      ? "border-eco-green-500 ring-2 ring-eco-green-200"
                      : "border-gray-200 hover:border-eco-green-300"
                  }`}
                >
                  <Image
                    src={variant}
                    alt={`${product.title} variant ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category Badge */}
            <div className="inline-block">
              <span className="bg-eco-green-100 text-eco-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-eco-green-800">
              {product.title}
            </h1>


            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-eco-green-800">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Tags */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-eco-green-800">Features</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-eco-green-50 text-eco-green-700 px-3 py-1 rounded-md text-sm border border-eco-green-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <a
                href="https://wa.me/918102294842"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-eco-green-500 hover:bg-eco-green-600 text-white px-6 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 text-center block"
              >
                Message on WhatsApp
              </a>
              
              <Link
                href="/contact"
                className="w-full bg-eco-brown-100 hover:bg-eco-brown-200 text-eco-brown-800 px-6 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 text-center block border border-eco-brown-300"
              >
                Request Custom Quote
              </Link>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="w-5 h-5 text-eco-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Eco-friendly materials</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="w-5 h-5 text-eco-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Customizable design</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="w-5 h-5 text-eco-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Bulk order available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="bg-eco-green-50 py-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-eco-green-800 mb-8 text-center">
            More Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-square bg-gray-100">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-eco-green-800 mb-1 group-hover:text-eco-green-600">
                    {relatedProduct.title}
                  </h3>
                  <p className="text-sm text-gray-600">Quotation on whatsapp</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
