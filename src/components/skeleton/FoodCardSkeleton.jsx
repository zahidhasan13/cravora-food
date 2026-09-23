import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">
      {/* Image Skeleton */}
      <div className="relative aspect-4/3 animate-pulse bg-gray-200">
        {/* Category Badge */}
        <div className="absolute top-4 left-4 h-7 w-20 rounded-full bg-gray-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200" />

        <div className="mt-4 flex items-center justify-between">
          {/* Price */}
          <div className="h-6 w-20 animate-pulse rounded bg-gray-200" />

          {/* Button */}
          <div className="h-10 w-28 animate-pulse rounded-lg bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
