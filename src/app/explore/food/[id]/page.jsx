"use client";

import PageBanner from "@/components/shared/PageBanner";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const FoodDetails = () => {
  const { id } = useParams();

  const { addToCart, isInCart } = useCart();

  const [foodDetails, setFoodDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const getFoodDetails = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch food details");
        }

        const data = await res.json();

        setFoodDetails(data.details);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getFoodDetails();
  }, [id]);

  if (loading) {
    return (
      <>
        <PageBanner>Food Details</PageBanner>

        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid animate-pulse grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="aspect-square rounded-2xl bg-gray-200" />

            <div className="flex flex-col justify-center">
              <div className="h-8 w-3/4 rounded bg-gray-200" />
              <div className="mt-5 h-5 w-1/4 rounded bg-gray-200" />
              <div className="mt-6 h-24 w-full rounded bg-gray-200" />
              <div className="mt-6 h-8 w-1/4 rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!foodDetails) {
    return (
      <>
        <PageBanner>Food Details</PageBanner>

        <div className="flex min-h-[400px] items-center justify-center">
          <p className="text-lg text-gray-500">Food not found.</p>
        </div>
      </>
    );
  }

  const {
    id: foodId,
    title,
    foodImg,
    price,
    category,
    area,
    video,
  } = foodDetails;

  const added = isInCart(foodId);

  return (
    <>
      <PageBanner>Food Details</PageBanner>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <img
                src={foodImg}
                alt={title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Details */}
            <div>
              <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                {category}
              </span>

              <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                {title}
              </h1>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Discover the delicious taste of this {category?.toLowerCase()}{" "}
                dish, prepared with amazing flavors and ingredients.
              </p>

              {/* Meta */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="mt-1 font-semibold text-gray-900">{category}</p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Cuisine</p>
                  <p className="mt-1 font-semibold text-gray-900">{area}</p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="mt-1 font-bold text-orange-500">${price}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => addToCart(foodDetails)}
                  disabled={added}
                  className={`rounded-xl px-7 py-3.5 font-semibold transition ${
                    added
                      ? "cursor-not-allowed bg-green-100 text-green-500"
                      : "bg-orange-500 text-white hover:bg-black cursor-pointer"
                  }`}
                >
                  {added ? "Added" : "Add to Cart"}
                </button>

                {video && (
                  <a
                    href={video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-gray-200 px-7 py-3.5 font-semibold text-gray-800 transition hover:border-orange-500 hover:text-orange-500"
                  >
                    Watch Recipe
                  </a>
                )}
              </div>

              <Link
                href="/explore"
                className="mt-6 inline-block text-sm font-semibold text-gray-500 transition hover:text-orange-500"
              >
                ← Back to Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodDetails;
