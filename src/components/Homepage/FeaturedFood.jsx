import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedFood = () => {
  return (
    <section className="py-16 md:py-20 lg:py-25">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Featured Food
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold">
            Taste Something Special
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            Discover one of our most-loved dishes, prepared with fresh
            ingredients and packed with delicious flavors.
          </p>
        </div>

        {/* Featured Food */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Image */}
          <div className="w-full aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/assets/images/grilled-chicken-burger.jpg"
              alt="Smoky Grilled Chicken Burger"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-start">
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
              Chef's Recommendation
            </span>

            <h3 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Smoky Grilled Chicken Burger
            </h3>

            <p className="mt-5 text-gray-600 text-base md:text-lg leading-8">
              A juicy grilled chicken patty layered with fresh lettuce,
              tomatoes, melted cheese, and our signature smoky sauce, served in
              a soft toasted bun.
            </p>

            {/* Info */}
            <div className="flex flex-wrap items-center gap-6 mt-6">
              <div>
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-2xl font-bold text-orange-500">$12.99</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Rating</p>
                <p className="text-lg font-semibold">⭐ 4.8 / 5</p>
              </div>
            </div>

            {/* Button */}
            <Link
              href="/explore"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFood;
