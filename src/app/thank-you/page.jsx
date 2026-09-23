"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CheckCircle, ShoppingBag } from "lucide-react";

const ThankYouPage = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("cravora-last-order");

    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  if (!order) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">No Order Found</h1>

          <p className="mt-2 text-gray-500">
            We couldn't find your recent order.
          </p>

          <Link
            href="/explore"
            className="mt-6 inline-flex rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Explore Food
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Success */}
        <div className="rounded-3xl bg-white px-6 py-12 text-center shadow-sm sm:px-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
            <CheckCircle size={48} className="text-green-500" />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Thank You for Your Order!
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Your order has been placed successfully. We'll prepare your food and
            get it delivered to you soon.
          </p>

          {/* Order ID */}
          <div className="mx-auto mt-8 max-w-sm rounded-2xl bg-gray-50 p-5">
            <p className="text-sm text-gray-500">Order ID</p>

            <p className="mt-1 text-xl font-bold text-gray-900">
              {order.orderId}
            </p>
          </div>

          {/* Customer */}
          <div className="mt-8 border-t border-gray-100 pt-8 text-left">
            <h2 className="text-lg font-bold text-gray-900">
              Delivery Information
            </h2>

            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-medium text-gray-900">Name:</span>{" "}
                {order.customer.fullName}
              </p>

              <p>
                <span className="font-medium text-gray-900">Phone:</span>{" "}
                {order.customer.phone}
              </p>

              <p>
                <span className="font-medium text-gray-900">Address:</span>{" "}
                {order.customer.address}, {order.customer.city} -{" "}
                {order.customer.zipCode}
              </p>

              <p>
                <span className="font-medium text-gray-900">Delivery:</span>{" "}
                {order.deliveryMethod === "express"
                  ? "Express Delivery"
                  : "Standard Delivery"}
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-8 border-t border-gray-100 pt-8 text-left">
            <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>

            <div className="mt-5 space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.foodImg}
                    alt={item.title}
                    className="h-16 w-16 rounded-xl object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold text-gray-900">
                    ${(Number(item.price) * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 border-t border-gray-100 pt-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>

                <span>${Number(order.subtotal).toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Delivery Fee</span>

                <span>${Number(order.deliveryFee).toFixed(2)}</span>
              </div>

              <div className="flex justify-between border-t border-gray-100 pt-4">
                <span className="font-bold text-gray-900">Total</span>

                <span className="text-xl font-bold text-orange-500">
                  ${Number(order.total).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/explore"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              <ShoppingBag size={18} />
              Continue Shopping
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:border-orange-300 hover:text-orange-500"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYouPage;
