"use client";
import { ProductContext } from "@/context/ProductContext";
import React, { useContext } from "react";
import FoodCard from "../Card/FoodCard";

const PopularToady = () => {
  const { products, loading, error } = useContext(ProductContext);
  return (
    <section className="bg-orange-50 py-16 md:py-20 lg:py-25">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Popular Today
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold">
            What’s Popular Right Now
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-gray-400">
            Explore dishes people are loving today and find something delicious
            for your next meal.
          </p>
        </div>
        {/* Popular Food */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.slice(1, 5).map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularToady;
