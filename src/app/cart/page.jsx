"use client";

import PageBanner from "@/components/shared/PageBanner";
import CartSkeleton from "@/components/skeleton/CartSkeleton";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    hydrated,
  } = useCart();
  console.log(cartItems, "cart");

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0,
  );

  const deliveryFee = cartItems.length > 0 ? 5 : 0;
  const total = subtotal + deliveryFee;

  return (
    <>
      <PageBanner>Your Cart</PageBanner>

      {!hydrated ? (
        <CartSkeleton />
      ) : (
        <main className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {cartItems.length === 0 ? (
              <div className="rounded-2xl bg-orange-50 px-6 py-20 text-center shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">
                  Your cart is empty
                </h2>
                <p className="mt-2 text-gray-500">
                  Looks like you haven't added anything to your cart yet.
                </p>
                <Link
                  href={"/explore"}
                  className="primary-btn inline-block mt-4"
                >
                  Explore Foods
                </Link>
              </div>
            ) : (
              <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
                {/* Left Side - Products */}
                <section>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5"
                      >
                        {/* Image */}
                        <img
                          src={item.foodImg}
                          alt={item.title}
                          className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-32 sm:w-32"
                        />

                        {/* Product Info */}
                        <div className="flex min-w-0 flex-1 flex-col justify-between">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="line-clamp-2 font-semibold text-gray-900 sm:text-lg">
                                {item.title}
                              </h3>

                              {item.category && (
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.category}
                                </p>
                              )}

                              <p className="mt-2 font-semibold text-orange-500">
                                ${Number(item.price).toFixed(2)}
                              </p>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 transition hover:text-red-500"
                              aria-label={`Remove ${item.name}`}
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>

                          {/* Quantity + Price */}
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center rounded-lg border border-gray-200">
                              <button
                                onClick={() => decreaseQuantity(item.id)}
                                className="flex h-9 w-9 items-center justify-center text-gray-500 transition hover:bg-gray-50"
                              >
                                <Minus size={15} />
                              </button>

                              <span className="w-8 text-center text-sm font-semibold">
                                {item.quantity}
                              </span>

                              <button
                                onClick={() => increaseQuantity(item.id)}
                                className="flex h-9 w-9 items-center justify-center text-gray-500 transition hover:bg-gray-50"
                              >
                                <Plus size={15} />
                              </button>
                            </div>

                            <p className="font-bold text-gray-900">
                              ${(Number(item.price) * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Right Side - Summary */}
                <aside>
                  <div className="sticky top-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900">
                      Order Summary
                    </h2>
                    <div className="mb-5">
                      <p className="mt-1 text-lg text-gray-500">
                        {cartItems.length}{" "}
                        {cartItems.length === 1 ? "item" : "items"} in your cart
                      </p>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Subtotal</span>
                        <span className="font-medium text-gray-900">
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Delivery Fee</span>
                        <span className="font-medium text-gray-900">
                          ${deliveryFee.toFixed(2)}
                        </span>
                      </div>

                      <div className="border-t border-gray-100 pt-4">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-900">
                            Total
                          </span>
                          <span className="text-2xl font-bold text-orange-500">
                            ${total.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/checkout"
                      className="mt-6 block w-full rounded-xl bg-orange-500 px-5 py-3.5 text-center font-semibold text-white transition duration-300 hover:bg-orange-600 hover:shadow-lg"
                    >
                      Proceed to Checkout
                    </Link>

                    <p className="mt-4 text-center text-xs text-gray-400">
                      Secure checkout • Fast delivery • Easy ordering
                    </p>
                  </div>
                </aside>
              </div>
            )}
          </div>
        </main>
      )}
    </>
  );
};

export default CartPage;
