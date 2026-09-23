import React from "react";

const CategorySkeleton = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="aspect-square bg-gray-200" />

      <div className="p-4 text-center">
        <div className="mx-auto h-6 w-24 rounded-md bg-gray-200" />

        <div className="mx-auto mt-4 h-4 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
};

export default CategorySkeleton;
