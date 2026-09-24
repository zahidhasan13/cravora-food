import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={category.categoryImg}
          alt={category.categoryName}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
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
