import React from "react";
import CategoryCard from "./CategoryCard ";

const getCategories = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/categories",
  );
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await res.json();

  return data.categories;
};

const ExploreCategories = async () => {
  const categories = await getCategories();
  return (
    <section className="py-16 md:py-20 lg:py-25">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Explore Categories
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold">
            Taste Something Special
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            Discover one of our most-loved dishes, prepared with fresh
            ingredients and packed with delicious flavors.
          </p>
        </div>
        {/* Popular Food */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.slice(1, 5).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
