const features = [
  {
    id: 1,
    icon: "🥗",
    title: "Fresh & Delicious",
    description:
      "Discover delicious meals made with quality ingredients and flavors you'll love.",
  },
  {
    id: 2,
    icon: "🔎",
    title: "Easy Discovery",
    description:
      "Explore food by category and quickly find something that matches your cravings.",
  },
  {
    id: 3,
    icon: "✨",
    title: "Smart Search",
    description:
      "Find your favorite dishes faster with a simple and intuitive search experience.",
  },
  {
    id: 4,
    icon: "🛒",
    title: "Simple Ordering",
    description:
      "Add your favorite meals to your cart and manage your order with ease.",
  },
];

const WhyCravora = () => {
  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Why Cravora?
          </span>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Everything You Need to Discover Great Food
          </h2>

          <p className="mt-4 text-gray-400">
            From discovering new flavors to finding your favorite dishes,
            Cravora makes exploring food simple and enjoyable.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-2xl bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCravora;
