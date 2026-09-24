import Link from "next/link";

const CravingCTA = () => {
  return (
    <section className="px-4 py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-orange-500 px-6 py-14 text-center sm:px-10 md:py-20 lg:px-16">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-white/10" />
        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/10" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-100 sm:text-sm">
            Your next favorite meal is waiting
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            What are you craving today?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-orange-50 sm:text-base md:text-lg">
            Explore delicious dishes, discover new flavors, and find the perfect
            meal for your next craving.
          </p>

          <Link
            href="/explore"
            className="mt-8 inline-block bg-white text-black px-3 py-3 rounded uppercase font-semibold border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-white hover:text-white transition-all duration-300"
          >
            Explore Food
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CravingCTA;
