"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full overflow-hidden">
          <div className="h-10 md:h-14 flex items-center">
            <Image
              src="/images/logo1.png"
              alt="IndoWoven Logo"
              width={140}
              height={50}
              className="object-contain h-full w-auto"
            />
            <h1 className="ml-2 text-xl md:text-2xl font-semibold text-gray-900 whitespace-nowrap">
              Indo<span className="text-green-700">Woven</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="btn-primary">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-green-800">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white px-4 pt-2 pb-4 shadow-md absolute top-full left-0 w-full transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col space-y-3">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/products" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
