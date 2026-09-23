import Link from "next/link";
import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-square overflow-hidden">
        <img
          src={category.categoryImg}
          alt={category.categoryName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-900">
          {category.categoryName}
        </h3>

        <Link
          href={`/categories/${category.id}`}
          className="mt-3 text-sm font-medium text-orange-500 transition-colors hover:text-orange-600"
        >
          Explore →
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
