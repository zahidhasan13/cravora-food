import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-orange-50">
      <div className="mx-auto grid min-h-[520px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Content */}
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            About Cravora
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Discover Food.
            <span className="block text-orange-500">
              Discover Your Craving.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            Cravora is a modern food discovery platform built to make finding
            your next favorite meal simple, enjoyable, and inspiring.
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-gray-500">
            Explore delicious dishes, discover new flavors, and find something
            perfect for every craving.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/explore"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg"
            >
              Explore Food
              <span className="ml-2 text-lg">→</span>
            </Link>

            <Link
              href="/categories"
              className="inline-flex items-center justify-center rounded-full border border-orange-200 bg-white px-6 py-3.5 font-semibold text-orange-600 transition hover:border-orange-500 hover:bg-orange-100"
            >
              Browse Categories
            </Link>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-orange-200/60 blur-2xl" />
          <div className="absolute -bottom-8 -left-6 h-40 w-40 rounded-full bg-yellow-200/60 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
              alt="A table filled with delicious food"
              className="h-[360px] w-full object-cover sm:h-[440px]"
            />
          </div>

          <div className="absolute -bottom-5 left-5 rounded-2xl bg-white px-5 py-4 shadow-xl sm:left-8">
            <p className="text-2xl font-bold text-orange-500">1000+</p>
            <p className="text-sm text-gray-600">Delicious possibilities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
