const features = [
  {
    id: 1,
    icon: "🍽️",
    title: "Discover New Flavors",
    description:
      "Explore a wide variety of dishes and discover meals you may not have tried before.",
  },
  {
    id: 2,
    icon: "🔎",
    title: "Search & Explore",
    description:
      "Quickly find the food you're looking for with intuitive search, filters, and sorting.",
  },
  {
    id: 3,
    icon: "⭐",
    title: "Find What You Love",
    description:
      "Use ratings and categories to narrow down your choices and discover popular dishes.",
  },
  {
    id: 4,
    icon: "🛒",
    title: "Simple Ordering",
    description:
      "Found something you love? Add it to your cart and keep your favorite meals organized.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-orange-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            What We Do
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Everything you need to discover great food.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            From discovering new flavors to finding your favorite dishes,
            Cravora makes exploring food simple and enjoyable.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl transition-colors duration-300 group-hover:bg-orange-500">
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
