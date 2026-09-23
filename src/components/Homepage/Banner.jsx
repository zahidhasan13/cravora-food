import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="relative min-h-150 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/banner-image.jpg"
          alt="Delicious food"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-150 flex items-center justify-center px-5">
        <div className="text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center">
            Discover Food You'll Love.
          </h1>

          <p className="mt-5 text-lg md:text-xl text-white/90 text-center">
            Explore delicious meals, discover new flavors, and find something
            worth craving.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <Link href="/explore" className="primary-btn">
              Explore Menu
            </Link>

            <Link href="/explore" className="secondary-btn">
              Browse Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
