const OurMission = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-orange-500">
        <div className="grid items-center lg:grid-cols-2">
          {/* Content */}
          <div className="px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">
              Our Mission
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Make every craving easier to satisfy.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-orange-50 sm:text-lg">
              Our mission is to create a simple and enjoyable food discovery
              experience where everyone can find something they'll love.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-orange-100">
              Whether you're looking for a quick meal, exploring a new cuisine,
              or simply wondering what to eat today — Cravora is here to help.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-orange-400 pt-8">
              <div>
                <p className="text-3xl font-bold text-white">Easy</p>
                <p className="mt-1 text-sm text-orange-100">Food discovery</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">Smart</p>
                <p className="mt-1 text-sm text-orange-100">Search & explore</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative min-h-[380px] lg:min-h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="People enjoying food together"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Quote Card */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur-sm">
              <p className="text-lg font-semibold leading-7 text-gray-900">
                “Good food brings people together.”
              </p>

              <p className="mt-2 text-sm text-gray-500">
                — The idea behind Cravora
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
