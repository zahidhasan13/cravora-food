"use client";

import Link from "next/link";
import React from "react";
import NavLink from "../NavLink";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const { cartCount } = useCart();

  return (
    <>
      {/* ================= Desktop Header ================= */}
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

            {/* Desktop Cart */}
            <Link
              href="/cart"
              className="hidden md:block relative font-semibold uppercase"
            >
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* ================= Mobile Bottom Navigation ================= */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[100] border-t border-white/10 bg-black/90 px-3 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur-lg">
        <div className="mx-auto flex max-w-md items-center justify-around">
          {/* Home */}
          <Link
            href="/"
            className="flex flex-col items-center gap-1 px-3 py-2 text-xs font-medium text-white/80 transition hover:text-orange-500"
          >
            <span className="text-xl">⌂</span>
            <span>Home</span>
          </Link>

          {/* Explore */}
          <Link
            href="/explore"
            className="flex flex-col items-center gap-1 px-3 py-2 text-xs font-medium text-white/80 transition hover:text-orange-500"
          >
            <span className="text-xl">🔍</span>
            <span>Explore</span>
          </Link>

          {/* Categories */}
          <Link
            href="/categories"
            className="flex flex-col items-center gap-1 px-3 py-2 text-xs font-medium text-white/80 transition hover:text-orange-500"
          >
            <span className="text-xl">☷</span>
            <span>Categories</span>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative flex flex-col items-center gap-1 px-3 py-2 text-xs font-medium text-white/80 transition hover:text-orange-500"
          >
            <span className="text-xl">🛒</span>

            {cartCount > 0 && (
              <span className="absolute right-1 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}

            <span>Cart</span>
          </Link>

          {/* About */}
          <Link
            href="/about"
            className="flex flex-col items-center gap-1 px-3 py-2 text-xs font-medium text-white/80 transition hover:text-orange-500"
          >
            <span className="text-xl">ⓘ</span>
            <span>About</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
