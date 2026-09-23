"use client";

import Link from "next/link";
import React from "react";
import NavLink from "../NavLink";
import { useCart } from "@/context/CartContext";
import {
  Utensils,
  Compass,
  Layers,
  ShoppingBag,
  CircleUserRound,
} from "lucide-react";

const Header = () => {
  const { cartCount } = useCart();

  return (
    <>
      {/* ================= HEADER ================= */}
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
              className="relative hidden md:block font-semibold uppercase"
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

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav className="fixed bottom-0 left-0 right-0 z-[100] border-t border-white/10 bg-black/90 backdrop-blur-xl md:hidden">
        <div className="mx-auto flex h-16 max-w-md items-center justify-around px-2">
          {/* Home */}
          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-1 text-white/80"
          >
            <Utensils size={21} strokeWidth={1.8} />
            <span className="text-[11px]">Home</span>
          </Link>

          {/* Explore */}
          <Link
            href="/explore"
            className="flex flex-col items-center justify-center gap-1 text-white/80"
          >
            <Compass size={21} strokeWidth={1.8} />
            <span className="text-[11px]">Explore</span>
          </Link>

          {/* Categories */}
          <Link
            href="/categories"
            className="flex flex-col items-center justify-center gap-1 text-white/80"
          >
            <Layers size={21} strokeWidth={1.8} />
            <span className="text-[11px]">Categories</span>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative flex flex-col items-center justify-center gap-1 text-white/80"
          >
            <div className="relative">
              <ShoppingBag size={21} strokeWidth={1.8} />

              {cartCount > 0 && (
                <span className="absolute -right-3 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </div>

            <span className="text-[11px]">Cart</span>
          </Link>

          {/* About */}
          <Link
            href="/about"
            className="flex flex-col items-center justify-center gap-1 text-white/80"
          >
            <CircleUserRound size={21} strokeWidth={1.8} />
            <span className="text-[11px]">About</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
