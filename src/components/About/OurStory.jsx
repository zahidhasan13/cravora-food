const OurStory = () => {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80"
              alt="People enjoying delicious food"
              className="h-[420px] w-full object-cover sm:h-[500px]"
            />
          </div>

          {/* Experience Card */}
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-5 shadow-xl sm:-right-6">
            <p className="text-3xl font-bold text-orange-500">Simple</p>
            <p className="mt-1 text-sm text-gray-500">Food discovery</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Our Story
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Food discovery should be simple.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">
            <p>
              With so many dishes and flavors to choose from, deciding what to
              eat isn't always easy.
            </p>

            <p>
              Cravora was created to make that experience easier. We bring food
              discovery, search, categories, ratings, and ordering into one
              simple experience.
            </p>

            <p>
              Whether you're looking for something familiar or want to try
              something completely new, Cravora helps you discover your next
              favorite meal.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-2xl bg-orange-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Discover</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Explore dishes and discover new flavors.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Enjoy</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Find something delicious for every craving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
