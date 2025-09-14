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
    title: "Blue Jute file skin khaki shade",
    description: "washed, dyed and smoothened jute/burlap with premium vintage hunter leather accents. Fitted with export-quality hardware and a long-lasting durable YKK zipper. Dimensions: 13.5 x 9.5 x 0.5 inches.",
    image: "/images/B File.webp",
    category: "General",
    tags: ["Eco-friendly"],
    variants: ["/images/B File.webp"],
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
    title: "Jute file skin khaki shade ",
    description: "washed, dyed and smoothened jute/burlap with premium vintage hunter leather accents. Fitted with export-quality hardware and a long-lasting durable YKK zipper. Dimensions: 13.5 x 9.5 x 0.5 inches.",
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
  {
    id: "12",
    title: "Jute Pouch",
    description: "Eco friendly jute pouches in multiple variants.",
    image: "/images/jutepouch1.webp",
    category: "General",
    tags: ["Eco-friendly"],
    variants: ["/images/jutepouch1.webp", "/images/jutepouch2.webp", "/images/jutepouch3.webp"],
  },
  {
    id: "13",
    title: "Passport case",
    description: "washed, dyed and smoothened jute/burlap with premium vintage hunter leather accents. Fitted with export-quality hardware and a long-lasting durable YKK zipper. Dimensions: 5.75 x 4 inches.",
    image: "/images/purse1.webp",
    category: "General",
    tags: ["Eco-friendly"],
    variants: ["/images/purse1.webp", "/images/purse2.webp", "/images/purse3.webp"],
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState("");
  const [product, setProduct] = useState<Product | null>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const foundProduct = PRODUCTS.find((p) => p.id === params.id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.variants[0]);
    }
  }, [params.id]);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  const openImageModal = () => {
    setIsImageModalOpen(true);
    setZoomLevel(1);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setZoomLevel(1);
  };

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
            <div 
              className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden cursor-pointer group"
              onClick={openImageModal}
            >
              <Image
                src={selectedImage}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
              {/* Zoom indicator */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
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

      {/* Image Modal with Zoom */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          {/* Modal Header */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
            <div className="flex space-x-2">
              <button
                onClick={handleZoomOut}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
                disabled={zoomLevel <= 0.5}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <button
                onClick={resetZoom}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-2 rounded-full text-sm transition-all duration-200"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                onClick={handleZoomIn}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
                disabled={zoomLevel >= 3}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
            <button
              onClick={closeImageModal}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Content */}
          <div className="relative w-full h-full overflow-auto">
            <div 
              className="relative w-full h-full flex items-center justify-center"
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}
            >
              <Image
                src={selectedImage}
                alt={product.title}
                width={800}
                height={800}
                className="max-w-none max-h-none object-contain"
                style={{ 
                  maxWidth: zoomLevel > 1 ? 'none' : '100%',
                  maxHeight: zoomLevel > 1 ? 'none' : '100%'
                }}
              />
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-xs overflow-x-auto">
            {product.variants.map((variant: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedImage(variant)}
                className={`relative w-16 h-16 rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                  selectedImage === variant
                    ? "border-white ring-2 ring-white ring-opacity-50"
                    : "border-white border-opacity-50 hover:border-opacity-100"
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
      )}
    </div>
  );
}
