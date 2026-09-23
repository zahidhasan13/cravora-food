"use client";

import Link from "next/link";
import PageBanner from "@/components/shared/PageBanner";
import { useCart } from "@/context/CartContext";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const router = useRouter();

  const { cartItems, clearCart } = useCart();

  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const [error, setError] = useState("");

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0,
  );

  const deliveryFee =
    cartItems.length > 0 ? (deliveryMethod === "express" ? 8 : 5) : 0;

  const total = subtotal + deliveryFee;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!formData.address.trim()) {
      setError("Please enter your delivery address.");
      return;
    }

    if (!formData.city.trim()) {
      setError("Please enter your city.");
      return;
    }

    if (!formData.zipCode.trim()) {
      setError("Please enter your ZIP code.");
      return;
    }

    setIsPlacingOrder(true);

    const orderId = `CRV-${Date.now().toString().slice(-8)}`;

    const orderData = {
      orderId,
      customer: formData,
      deliveryMethod,
      items: cartItems,
      subtotal,
      deliveryFee,
      total,
      createdAt: new Date().toISOString(),
    };

    // Save order for thank-you page
    localStorage.setItem("cravora-last-order", JSON.stringify(orderData));

    // Clear cart
    clearCart();

    // Go to thank-you page
    router.push("/thank-you");
  };

  return (
    <>
      <PageBanner>Checkout</PageBanner>

      <main className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {cartItems.length === 0 ? (
            <div className="rounded-2xl bg-white px-6 py-20 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">
                Your cart is empty
              </h2>

              <p className="mt-2 text-gray-500">
                Add some delicious food before checking out.
              </p>

              <Link
                href="/explore"
                className="mt-6 inline-flex rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Food
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handlePlaceOrder}
              className="grid gap-8 lg:grid-cols-[1fr_380px]"
            >
              <section className="space-y-6">
                {/* Contact Information */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900">
                      Contact Information
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      Enter your contact details for order updates.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Full Name *
                      </label>

                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Email *
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Phone *
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+880 1XXXXXXXXX"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900">
                      Delivery Address
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      Where should we deliver your order?
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Address *
                      </label>

                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows={3}
                        placeholder="House, Road, Area..."
                        className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          City *
                        </label>

                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Dhaka"
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          ZIP Code *
                        </label>

                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          placeholder="1207"
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Method */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900">
                      Delivery Method
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      Choose how you'd like to receive your order.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {/* Standard */}
                    <label
                      className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${
                        deliveryMethod === "standard"
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-orange-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="delivery"
                          value="standard"
                          checked={deliveryMethod === "standard"}
                          onChange={(e) => setDeliveryMethod(e.target.value)}
                          className="h-4 w-4 accent-orange-500"
                        />

                        <div>
                          <p className="font-semibold text-gray-900">
                            Standard Delivery
                          </p>

                          <p className="mt-1 text-sm text-gray-500">
                            Delivered within 30–45 minutes
                          </p>
                        </div>
                      </div>

                      <span className="font-semibold text-gray-900">$5.00</span>
                    </label>

                    {/* Express */}
                    <label
                      className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${
                        deliveryMethod === "express"
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-orange-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="delivery"
                          value="express"
                          checked={deliveryMethod === "express"}
                          onChange={(e) => setDeliveryMethod(e.target.value)}
                          className="h-4 w-4 accent-orange-500"
                        />

                        <div>
                          <p className="font-semibold text-gray-900">
                            Express Delivery
                          </p>

                          <p className="mt-1 text-sm text-gray-500">
                            Delivered within 15–25 minutes
                          </p>
                        </div>
                      </div>

                      <span className="font-semibold text-gray-900">$8.00</span>
                    </label>
                  </div>
                </div>
              </section>

              {/* Order Summary */}
              <aside>
                <div className="sticky top-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900">
                    Order Summary
                  </h2>

                  <div className="mt-6 space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <img
                          src={item.foodImg}
                          alt={item.title}
                          className="h-16 w-16 shrink-0 rounded-xl object-cover"
                        />

                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-sm font-semibold text-gray-900">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-xs text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>

                        <p className="text-sm font-semibold text-gray-900">
                          ${(Number(item.price) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-4 border-t border-gray-100 pt-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Subtotal</span>

                      <span className="font-medium">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Delivery Fee</span>

                      <span className="font-medium">
                        ${deliveryFee.toFixed(2)}
                      </span>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Total</span>

                        <span className="text-2xl font-bold text-orange-500">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isPlacingOrder}
                    className="mt-6 w-full rounded-xl bg-orange-500 px-5 py-3.5 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isPlacingOrder ? "Placing Order..." : "Place Order"}
                  </button>

                  <Link
                    href="/cart"
                    className="mt-3 block text-center text-sm font-medium text-gray-500 transition hover:text-orange-500"
                  >
                    ← Back to Cart
                  </Link>

                  <div className="mt-6 rounded-xl bg-gray-50 p-4 text-center">
                    <p className="text-xs leading-5 text-gray-500">
                      🔒 Your information is securely protected. By placing your
                      order, you agree to our terms and conditions.
                    </p>
                  </div>
                </div>
              </aside>
            </form>
          )}
        </div>
      </main>
    </>
  );
};

export default CheckoutPage;
