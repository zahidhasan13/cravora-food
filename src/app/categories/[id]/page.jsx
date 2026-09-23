"use client";

import FoodCard from "@/components/Card/FoodCard";
import PageBanner from "@/components/shared/PageBanner";
import FoodCardSkeleton from "@/components/skeleton/FoodCardSkeleton";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategoriesFoods = () => {
  const { id } = useParams();

  const [categoryFood, setCategoryFood] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const getCategoryFood = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch category foods");
        }

        const data = await res.json();

        setCategoryFood(data.foods || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getCategoryFood();
  }, [id]);

  // Get category name from first food
  const categoryName = categoryFood[0]?.category;

  return (
    <>
      <PageBanner>{categoryName || "Category"}</PageBanner>

      <section className="mx-auto max-w-7xl px-4 py-16">
        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <FoodCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categoryFood.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default CategoriesFoods;
