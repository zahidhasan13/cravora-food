import { useCart } from "@/context/CartContext";
import Link from "next/link";
import React from "react";

const FoodCard = ({ food }) => {
  const { id, title, foodImg, price, category } = food;
  const { addToCart, isInCart } = useCart();
  const added = isInCart(food.id);

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={foodImg}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="line-clamp-1 text-xl font-bold text-gray-900">
          {title}
        </h3>

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-xl font-bold text-orange-500">${price}</p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => addToCart(food)}
              disabled={added}
              className={`w-full rounded-lg text-sm px-4 py-2 font-semibold transition cursor-pointer ${
                added
                  ? "cursor-not-allowed bg-green-100 text-green-600"
                  : "bg-orange-500 text-white hover:bg-black"
              }`}
            >
              {added ? "Added" : "Add to Cart"}
            </button>

            <Link
              href={`/explore/food/${id}`}
              className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-500 cursor-pointer"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
