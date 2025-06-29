"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full overflow-hidden">
          <div className="h-full flex items-center">
            <Image
              src="/images/logo1.png"
              alt="IndoWoven Logo"
              width={200}
              height={200}
              className="h-full w-auto object-contain"
            />
            <h1 className="ml-3 text-[1.4rem] md:text-[1.8rem] font-semibold md:font-bold text-gray-900 tracking-tight leading-none whitespace-nowrap select-none">
              Indo<span className="text-green-700">Woven</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-eco-green-800 hover:text-eco-green-600 font-medium"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-eco-green-800 hover:text-eco-green-600 font-medium"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-eco-green-800 hover:text-eco-green-600 font-medium"
          >
            About Us
          </Link>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-eco-green-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-eco-green-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container-custom py-4 space-y-4 flex flex-col">
            <Link
              href="/"
              className="text-eco-green-800 hover:text-eco-green-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-eco-green-800 hover:text-eco-green-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-eco-green-800 hover:text-eco-green-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
