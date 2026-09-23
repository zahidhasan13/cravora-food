"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "../NavLink";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-5 text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-3xl md:text-4xl font-bold">
            Cravora
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5">
            <NavLink href="/explore">Explore</NavLink>
            <NavLink href="/categories">Categories</NavLink>
            <NavLink href="/about">About</NavLink>
          </nav>

          {/* Cart + Mobile Menu */}
          <div className="flex items-center gap-5">
            {/* Cart */}
            <Link href="/cart" className="relative font-semibold uppercase">
              Cart
              {/* Cart Count */}
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl"
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden mt-5 flex flex-col gap-4 rounded-xl bg-black/80 p-5 backdrop-blur-sm">
            <NavLink onClick={() => setMenuOpen(false)} href="/explore">
              Explore
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} href="/categories">
              Categories
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} href="/about">
              About
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
