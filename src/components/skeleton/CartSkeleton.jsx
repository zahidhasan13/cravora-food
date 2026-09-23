const CartSkeleton = () => {
  return (
    <main className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Left Side */}
          <section>
            {/* Heading Skeleton */}
            <div className="mb-5">
              <div className="h-7 w-32 animate-pulse rounded-lg bg-gray-200" />
              <div className="mt-2 h-4 w-24 animate-pulse rounded bg-gray-200" />
            </div>

            {/* Product Skeletons */}
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5"
                >
                  {/* Image */}
                  <div className="h-24 w-24 shrink-0 animate-pulse rounded-xl bg-gray-200 sm:h-32 sm:w-32" />

                  {/* Product Content */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />

                        <div className="mt-2 h-4 w-24 animate-pulse rounded bg-gray-200" />

                        <div className="mt-3 h-5 w-16 animate-pulse rounded bg-gray-200" />
                      </div>

                      {/* Delete Button */}
                      <div className="h-5 w-5 animate-pulse rounded bg-gray-200" />
                    </div>

                    {/* Quantity + Price */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="h-9 w-24 animate-pulse rounded-lg bg-gray-200" />

                      <div className="h-5 w-16 animate-pulse rounded bg-gray-200" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Right Side */}
          <aside>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              {/* Title */}
              <div className="h-6 w-36 animate-pulse rounded bg-gray-200" />

              {/* Summary */}
              <div className="mt-6 space-y-5">
                <div className="flex justify-between">
                  <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                </div>

                <div className="flex justify-between">
                  <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-12 animate-pulse rounded bg-gray-200" />
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between">
                    <div className="h-5 w-14 animate-pulse rounded bg-gray-200" />
                    <div className="h-7 w-20 animate-pulse rounded bg-gray-200" />
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <div className="mt-6 h-12 w-full animate-pulse rounded-xl bg-gray-200" />

              {/* Bottom Text */}
              <div className="mx-auto mt-4 h-3 w-52 animate-pulse rounded bg-gray-200" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CartSkeleton;
