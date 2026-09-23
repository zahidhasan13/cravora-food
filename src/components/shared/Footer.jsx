import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Cravora<span className="text-orange-500">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Discover delicious meals, explore new flavors, and find something
              you'll love with Cravora.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-orange-500 hover:text-white"
              >
                f
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-orange-500 hover:text-white"
              >
                X
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-orange-500 hover:text-white"
              >
                in
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/" className="transition hover:text-orange-500">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/explore"
                  className="transition hover:text-orange-500"
                >
                  Explore Food
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="transition hover:text-orange-500"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  href="/search"
                  className="transition hover:text-orange-500"
                >
                  Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-orange-500"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-orange-500"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-orange-500"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition hover:text-orange-500"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Stay Updated
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Get food inspiration and discover what's trending.
            </p>

            <div className="mt-5 flex overflow-hidden rounded-xl bg-gray-800 p-1">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-gray-500"
              />

              <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-gray-800 pt-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cravora. All rights reserved.</p>

          <p>
            Made with <span className="text-orange-500">♥</span> for food lovers
            By{" "}
            <a
              href="https://www.linkedin.com/in/zahidhasanofficial/"
              className="text-orange-500"
            >
              Zahid Hasan
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
